import json
import os
from pathlib import Path
import re
from python_util.version_profile import get_version_profile

# 统一过滤名单：解析这些变量时静默不支持的函数，并从最终输出中移除
FILTER_KEYS = {
    "carpenterData",
    "utility",
    "furniture",
    "materials",
    "sapling",
    "axes",
    "sawmills",
    "woods",
    "items",
    "groupWeight",
    "min",
    "max",
    "itemId",
    "colors",
    "biome",
    "condition",
    "village_shepherd_content",
    "POTIONS_1_20_1",
    "POTIONS_1_21_1",
    "currentMCVersion",
    "allAvailableEnchantments",
}


# ----------------- 模版生成函数 -----------------
def build_seed_bundle_payload(
        bundle_id: str, seed_type_key: str, divisor: float
):
    return [{
        "id": bundle_id,
        "ratio": 10,
        "jsonFunction": [{
            "function": "better_loot_zibura:fill_seed_bundle",
            "seed_type_key": seed_type_key,
            "pool_divisor": divisor,
            "max_distinct_types": 12,
            "min_count": 1,
            "max_count": 3,
        }],
    }]


# ----------------- JS 代码清理与正则分词 -----------------
def strip_js_comments(text: str) -> str:
    """清理 JS 的单行注释 (//...) 与多行注释 (/*...*/)"""
    pattern = r"(//[^\n]*)|(/\*[\s\S]*?\*/)"
    return re.sub(pattern, "", text)


def tokenize_js(code: str):
    """将 JS 源码分解为 token 序列"""
    code = strip_js_comments(code)
    token_spec = [
        ("STRING", r'"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\''),
        ("NUMBER", r"-?\d+(?:\.\d+)?"),
        ("IDENT", r"[a-zA-Z_$][a-zA-Z0-9_$]*"),
        ("PUNCT", r"[{}()[\]:,=.]"),
        ("SKIP", r"\s+"),
    ]
    tok_regex = "|".join(f"(?P<{name}>{pattern})" for name, pattern in token_spec)
    tokens = []
    for mo in re.finditer(tok_regex, code):
        kind = mo.lastgroup
        val = mo.group()
        if kind != "SKIP":
            tokens.append((kind, val))
    return tokens


# ----------------- 语法树解析器 -----------------
class JSObjectParser:

    def __init__(self, tokens, source_name="<unknown>"):
        self.tokens = tokens
        self.pos = 0
        self.source_name = source_name
        self.suppress_errors = False

    def debug_error(self, message):
        """打印解析异常位置以及附近 token，方便定位源 JS 中的问题。"""
        if self.suppress_errors:
            return
        current = self.peek()
        start = max(0, self.pos - 5)
        end = min(len(self.tokens), self.pos + 6)
        nearby = self.tokens[start:end]
        print(
            f"[PARSE ERROR] file={self.source_name}, pos={self.pos}, "
            f"reason={message}, current_token={current}, nearby_tokens={nearby}"
        )

    def peek(self):
        if self.pos < len(self.tokens):
            return self.tokens[self.pos]
        return None

    def next_token(self):
        tok = self.peek()
        self.pos += 1
        return tok

    def parse_all(self):
        declarations = {}
        while self.pos < len(self.tokens):
            tok = self.peek()
            if tok and tok[1] in ("const", "let", "var"):
                self.next_token()
                var_name = self.next_token()[1]
                if self.peek() and self.peek()[1] == "=":
                    self.next_token()  # Skipping '='
                    # 这些变量最终会被 filter；解析它们仅用于正确推进 token，
                    # 期间不报告“不支持的函数”等解析提示。
                    old_suppress = self.suppress_errors
                    self.suppress_errors = var_name in FILTER_KEYS
                    try:
                        val = self.parse_value()
                    finally:
                        self.suppress_errors = old_suppress
                    declarations[var_name] = val
            else:
                self.pos += 1
        return declarations

    def parse_value(self):
        tok = self.peek()
        if not tok:
            return None

        kind, val = tok

        # # 数组: [ ... ]
        # if val == "[":
        #   self.next_token()
        #   arr = []
        #   while self.peek() and self.peek()[1] != "]":
        #     arr.append(self.parse_value())
        #     if self.peek() and self.peek()[1] == ",":
        #       self.next_token()
        #   if self.peek() and self.peek()[1] == "]":
        #     self.next_token()
        #   return arr
        # 数组: [ ... ]
        if val == '[':
            self.next_token()
            arr = []
            while self.peek() and self.peek()[1] != ']':
                arr.append(self.parse_value())
                if self.peek() and self.peek()[1] == ',':
                    self.next_token()
            if self.peek() and self.peek()[1] == ']':
                self.next_token()

            # 处理链式调用: [].concat(...)
            while self.peek() and self.peek()[1] == '.':
                self.next_token()  # Skipping '.'
                method_token = self.next_token()
                method_name = method_token[1] if method_token else None

                if method_name == 'concat' and self.peek() and self.peek()[1] == '(':
                    self.next_token()  # Skipping '('
                    while self.peek() and self.peek()[1] != ')':
                        arg_val = self.parse_value()
                        if arg_val is not None:
                            # 将 concat 传入的列表项追加到 arr 中
                            arr.append(arg_val)
                        if self.peek() and self.peek()[1] == ',':
                            self.next_token()
                    if self.peek() and self.peek()[1] == ')':
                        self.next_token()  # Skipping ')'
            return arr

        # 对象: { ... }
        elif val == "{":
            self.next_token()
            obj = {}
            while self.peek() and self.peek()[1] != "}":
                key_tok = self.next_token()
                key = key_tok[1].strip("\"'")
                if self.peek() and self.peek()[1] == ":":
                    self.next_token()
                else:
                    self.debug_error(f"Object property {key!r} is missing ':'")
                prop_val = self.parse_value()

                if key == "matchBiome":
                    obj["customCondition"] = {
                        "condition": "better_loot_zibura:match_biome_registry",
                        "registry_key": prop_val,
                    }
                else:
                    obj[key] = prop_val

                if self.peek() and self.peek()[1] == ",":
                    self.next_token()
            if self.peek() and self.peek()[1] == "}":
                self.next_token()
            return obj

        # 字符串
        elif kind == "STRING":
            self.next_token()
            return val[1:-1]

        # 数字
        elif kind == "NUMBER":
            self.next_token()
            return float(val) if "." in val else int(val)

        # 标识符 / 引用 / 函数调用
        elif kind == "IDENT":
            name = self.next_token()[1]

            # 属性访问
            while self.peek() and self.peek()[1] == ".":
                self.next_token()
                attr = self.next_token()[1]
                name = f"{name}_{attr}".replace("carpenterData_", "carpenter_")

            # 函数调用: getSeedBagConfig(...)
            if self.peek() and self.peek()[1] == "(":
                self.next_token()
                args = []
                while self.peek() and self.peek()[1] != ")":
                    args.append(self.parse_value())
                    if self.peek() and self.peek()[1] == ",":
                        self.next_token()
                if self.peek() and self.peek()[1] == ")":
                    self.next_token()

                if name == "getSeedBagConfig":
                    bundle_id = args[0]
                    seed_key = args[1]
                    divisor = 1.0
                    return build_seed_bundle_payload(bundle_id, seed_key, divisor)

                # 未支持的函数调用：打印调试信息，然后保持原行为返回 None
                self.debug_error(f"Unsupported function call: {name}(), args={args!r}")
                return None

            # 特殊关键字
            if name == "true":
                return True
            if name == "false":
                return False
            if name == "null":
                return None

            return name

        else:
            self.debug_error(f"Unable to parse token {tok!r}")
            self.next_token()
            return None


# ----------------- 26.3 格式转换 -----------------
def _convert_26_3_node(value):
    """递归把旧 Loot JSON 结构转换为 26.3 使用的新字段结构。"""
    if isinstance(value, list):
        return [_convert_26_3_node(item) for item in value]

    if not isinstance(value, dict):
        return value

    # 先递归转换普通字段；conditions/functions 在下面单独处理。
    result = {}
    for key, item in value.items():

        if key in ("conditions", "functions"):
            continue

        new_key = key
        # predicate/function 对象内部的类型字段改为 type。
        if key in ("condition", "function") and isinstance(item, str):
            new_key = "type"

        result[new_key] = _convert_26_3_node(item)

    # conditions -> condition
    if "conditions" in value:
        raw_conditions = value["conditions"]
        conditions = _convert_26_3_node(raw_conditions)

        if isinstance(conditions, list):
            if len(conditions) == 1:
                result["condition"] = conditions[0]
            elif len(conditions) > 1:
                result["condition"] = {
                    "type": "minecraft:all_of",
                    "terms": conditions,
                }
        elif conditions is not None:
            # 容错：如果输入并非数组，也按单条件处理。
            result["condition"] = conditions

    # functions -> modifier
    if "functions" in value:
        raw_functions = value["functions"]
        modifiers = _convert_26_3_node(raw_functions)

        if isinstance(modifiers, list):
            if len(modifiers) == 1:
                result["modifier"] = modifiers[0]
            elif len(modifiers) > 1:
                result["modifier"] = modifiers
        elif modifiers is not None:
            result["modifier"] = modifiers

    return result


def convert_to_version_format(data, version: str):
    """按目标 Minecraft 版本转换最终输出格式。"""
    profile = get_version_profile(version)
    if profile.loot_condition_modifier_format:
        return _convert_26_3_node(data)
    return data


# ----------------- 主流程处理 -----------------
def convert_js_to_dict(js_code: str, source_name: str = "<unknown>") -> dict:
    tokens = tokenize_js(js_code)
    parser = JSObjectParser(tokens, source_name=source_name)
    all_vars = parser.parse_all()

    return {k: v for k, v in all_vars.items() if k not in FILTER_KEYS}


def process_folder(
        input_folder,
        output_folder,
        version="1.21.1"
):
    """转换 Loot 配置；26.3 会额外转换 condition/modifier 新格式。"""

    in_dir = Path(input_folder)
    out_dir = Path(output_folder)

    if not in_dir.exists():
        print(f"[!] Input directory not found: {in_dir}")
        return

    out_dir.mkdir(parents=True, exist_ok=True)
    converted_count = 0

    for root, _, files in os.walk(in_dir):
        for file in files:
            if not file.endswith(".js"):
                continue

            # 跳过已经单独处理的几个特殊配置 js 文件
            if file in (
                    "0tableToClear.js",
                    "modifiersToRemove.js",
                    "crate_and_bag.js",
                    "recipesToRemove.js",
            ):
                continue

            src_path = Path(root) / file
            rel_path = src_path.relative_to(in_dir)
            dest_path = (out_dir / rel_path).with_suffix(".json")

            dest_path.parent.mkdir(parents=True, exist_ok=True)

            try:
                with open(src_path, "r", encoding="utf-8") as f:
                    content = f.read()

                result_dict = convert_js_to_dict(
                    content,
                    source_name=str(rel_path)
                )

                result_dict = convert_to_version_format(
                    result_dict,
                    version
                )

                with open(dest_path, "w", encoding="utf-8") as f:
                    json.dump(
                        result_dict,
                        f,
                        ensure_ascii=False,
                        indent=2
                    )

                converted_count += 1

            except Exception as e:
                print(
                    f"[FAILED]: {rel_path}, "
                    f"error: {e}"
                )

    print(
        f"Loot-to-JSON conversion completed; "
        f"converted {converted_count} files -> {out_dir}"
    )


if __name__ == "__main__":
    process_folder()
