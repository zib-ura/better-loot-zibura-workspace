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



# ----------------- Matrix DSL expansion -----------------
def _resolve_dsl_reference(value, all_vars):
    """Resolve top-level const references only inside matrix DSL metadata."""
    if isinstance(value, str) and value in all_vars:
        return all_vars[value]
    return value


def _format_matrix_string(value, row, prefix):
    if not isinstance(value, str):
        return value
    return value.replace("{row}", str(row)).replace("{prefix}", str(prefix))


def _expand_weight_matrix(name, config, all_vars):
    rows = _resolve_dsl_reference(config.get("rows"), all_vars)
    columns = _resolve_dsl_reference(config.get("columns"), all_vars)
    weights = _resolve_dsl_reference(config.get("weights"), all_vars)
    pattern = config.get("outputPattern")
    prefix = config.get("prefix", "")
    if not isinstance(rows, list) or not isinstance(columns, list) or not isinstance(weights, list) or not isinstance(pattern, str):
        raise ValueError(f"{name}: invalid weight matrix schema")
    if len(rows) != len(weights):
        raise ValueError(f"{name}: rows={len(rows)} but weight rows={len(weights)}")
    result = {}
    for row, row_weights in zip(rows, weights):
        if not isinstance(row_weights, list) or len(row_weights) != len(columns):
            raise ValueError(f"{name}/{row}: weight count does not match columns")
        groups = []
        for column, weight in zip(columns, row_weights):
            if not isinstance(column, dict):
                raise ValueError(f"{name}: every column must be an object")
            group = dict(column)
            group["groupWeight"] = weight
            groups.append(group)
        result[_format_matrix_string(pattern, row, prefix)] = groups
    return result


def _expand_content_matrix(name, config, all_vars):
    """Expand content matrix; supports compact columns+ranges and legacy contents."""
    rows = _resolve_dsl_reference(config.get("rows"), all_vars)
    pattern = config.get("outputPattern")
    prefix = config.get("prefix", "")

    if not isinstance(rows, list) or not isinstance(pattern, str):
        raise ValueError(f"{name}: invalid content matrix schema")

    # Preferred compact schema:
    # columns: [pool1, pool2, ...]
    # ranges:  [[[min,max], null, ...], ...]
    # null = pool absent; [0,0] = explicit zero-roll entry.
    if "columns" in config or "ranges" in config:
        columns = _resolve_dsl_reference(config.get("columns"), all_vars)
        ranges = _resolve_dsl_reference(config.get("ranges"), all_vars)

        if not isinstance(columns, list) or not isinstance(ranges, list):
            raise ValueError(f"{name}: columns and ranges must both be arrays")
        if len(rows) != len(ranges):
            raise ValueError(f"{name}: rows={len(rows)} but range rows={len(ranges)}")

        result = {}
        for row, range_row in zip(rows, ranges):
            if not isinstance(range_row, list):
                raise ValueError(f"{name}/{row}: range row must be an array")
            if len(range_row) != len(columns):
                raise ValueError(
                    f"{name}/{row}: columns={len(columns)} but ranges={len(range_row)}"
                )

            expanded = []
            for pool, roll_range in zip(columns, range_row):
                if roll_range is None:
                    continue
                if not isinstance(roll_range, list) or len(roll_range) != 2:
                    raise ValueError(
                        f"{name}/{row}: expected [min, max] or null for {pool!r}, "
                        f"got {roll_range!r}"
                    )

                min_rolls, max_rolls = roll_range
                expanded.append([
                    _format_matrix_string(pool, row, prefix),
                    min_rolls,
                    max_rolls,
                ])

            result[_format_matrix_string(pattern, row, prefix)] = expanded
        return result

    # Backward compatibility with the old contents schema.
    contents = _resolve_dsl_reference(config.get("contents"), all_vars)
    if not isinstance(contents, list):
        raise ValueError(
            f"{name}: content matrix requires either columns+ranges or contents"
        )
    if len(rows) != len(contents):
        raise ValueError(f"{name}: rows={len(rows)} but content rows={len(contents)}")

    result = {}
    for row, entries in zip(rows, contents):
        if not isinstance(entries, list):
            raise ValueError(f"{name}/{row}: content row must be an array")
        expanded = []
        for entry in entries:
            if not isinstance(entry, list) or len(entry) != 3:
                raise ValueError(f"{name}/{row}: expected [pool, min, max]")
            pool, min_rolls, max_rolls = entry
            expanded.append([
                _format_matrix_string(pool, row, prefix),
                min_rolls,
                max_rolls,
            ])
        result[_format_matrix_string(pattern, row, prefix)] = expanded
    return result

def _expand_household_weight_matrix(name, config, all_vars):
    rows = _resolve_dsl_reference(config.get("rows"), all_vars)
    weights = _resolve_dsl_reference(config.get("weights"), all_vars)
    prefix = config.get("prefix", "")
    output = config.get("output")
    content_pattern = config.get("contentPattern", "{prefix}_{row}_content")
    extra = config.get("extra", [])
    if not isinstance(rows, list) or not isinstance(weights, list) or not isinstance(output, str):
        raise ValueError(f"{name}: invalid household weight matrix schema")
    if len(rows) != len(weights):
        raise ValueError(f"{name}: rows={len(rows)} but weights={len(weights)}")
    data = [[_format_matrix_string(content_pattern, row, prefix), weight] for row, weight in zip(rows, weights)]
    if not isinstance(extra, list):
        raise ValueError(f"{name}: extra must be an array")
    data.extend(extra)
    return {output: data}


def expand_matrix_dsl(all_vars: dict) -> dict:
    """Compile matrix DSL objects to the legacy registry shape consumed by Java."""
    result = dict(all_vars)
    helper_keys = set()
    for name, config in list(all_vars.items()):
        if not name.endswith("_matrix") or not isinstance(config, dict):
            continue
        matrix_type = config.get("matrixType")
        if matrix_type == "weight":
            expanded = _expand_weight_matrix(name, config, all_vars)
        elif matrix_type == "content":
            expanded = _expand_content_matrix(name, config, all_vars)
        elif matrix_type == "householdWeight":
            expanded = _expand_household_weight_matrix(name, config, all_vars)
        else:
            continue
        result.update(expanded)
        result.pop(name, None)
        rows_ref = config.get("rows")
        if isinstance(rows_ref, str) and rows_ref in all_vars:
            helper_keys.add(rows_ref)
    for key in helper_keys:
        result.pop(key, None)
    return result

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
    # Matrix DSL is compiled by Java at datapack reload time.

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
