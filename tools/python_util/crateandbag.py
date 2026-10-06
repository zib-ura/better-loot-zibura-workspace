import ast
import json
import re
from pathlib import Path

# ==================== 解析与导出逻辑 ====================
def extract_js_array(js_text: str, var_name: str) -> str:
    pattern = rf"(?:let|const|var)\s+{var_name}\s*=\s*(\[[\s\S]*?\]);"
    match = re.search(pattern, js_text)
    if not match:
        raise ValueError(f"Variable not found in JS: {var_name}")
    return match.group(1)


def parse_js_object_array(raw_js_str: str) -> list:
    # 1. 过滤注释
    clean = re.sub(r"/\*[\s\S]*?\*/", "", raw_js_str)
    clean = re.sub(r"//.*", "", clean)

    # 2. 对未加引号的 key 补全双引号
    clean = re.sub(r"(?<=[\{,\n\s])([a-zA-Z_]\w*)\s*:", r'"\1":', clean)

    # 3. 解析为 Python 数据结构
    return ast.literal_eval(clean)


def export_item_json(folder: Path, key: str, candidates: list):
    folder.mkdir(parents=True, exist_ok=True)
    file_path = folder / f"{key}.json"

    data = {"replace": False, "values": candidates}

    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def run(input_file, output_root):
    input_file = Path(input_file)
    output_root = Path(output_root)

    if not input_file.exists():
        raise FileNotFoundError(
            f"JS file not found: {input_file}"
        )

    with open(input_file, "r", encoding="utf-8") as f:
        js_content = f.read()

    conv_dir = output_root / "convertible"
    inconv_dir = output_root / "inconvertible"

    conv_raw = extract_js_array(
        js_content,
        "DUPLICATE_ITEMS_CONFIG"
    )
    conv_data = parse_js_object_array(conv_raw)

    for item in conv_data:
        key = item["result"].replace("lootjs:", "")
        export_item_json(
            conv_dir,
            key,
            item["candidates"]
        )

    inconv_raw = extract_js_array(
        js_content,
        "crateAndBagRegistry"
    )
    inconv_data = parse_js_object_array(inconv_raw)

    for item in inconv_data:
        key = item["name"]
        export_item_json(
            inconv_dir,
            key,
            item["ids"]
        )

    print(
        f"Export completed: {output_root}\n"
        f"   - convertible: {len(conv_data)} files\n"
        f"   - inconvertible: {len(inconv_data)} files"
    )
