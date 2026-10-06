import json
import os
from pathlib import Path
import re


# 在这里指定排除的文件名
EXCLUDE_FILES = {
    "0emptyobject.js",
    "zzz_register_loot_table.js",
}


def strip_comments_and_normalize(code: str) -> str:
    """清理多行注释与单行注释"""
    code = re.sub(r'/\*[\s\S]*?\*/', '', code)
    code = re.sub(r'//[^\n]*', '', code)
    return code


def parse_apply_js(code: str) -> list[dict]:
    """提取 key: value 对并转换为 target / config 映射列表"""
    code = strip_comments_and_normalize(code)
    pattern = r'["\'](?P<target>[^"\']+)["\']\s*:\s*(?P<config>[a-zA-Z0-9_$]+)'

    entries = []
    for match in re.finditer(pattern, code):
        target = match.group("target").strip()
        config = match.group("config").strip()
        entries.append({
            "target": target,
            "config": config
        })
    return entries


def process_apply_folder(
        input_folder,
        output_folder
):
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

            if file in EXCLUDE_FILES:
                print(f"[-] Skipping excluded file: {file}")
                continue

            src_path = Path(root) / file
            rel_path = src_path.relative_to(in_dir)
            dest_path = (out_dir / rel_path).with_suffix(".json")

            dest_path.parent.mkdir(parents=True, exist_ok=True)

            try:
                with open(src_path, "r", encoding="utf-8") as f:
                    content = f.read()

                result_list = parse_apply_js(content)

                with open(dest_path, "w", encoding="utf-8") as f:
                    json.dump(result_list, f, ensure_ascii=False, indent=2)

                # print(f"[✓ 已转换 2apply]: {rel_path} -> {dest_path.name}")
                converted_count += 1
            except Exception as e:
                print(f"[FAILED]: {rel_path}, error: {e}")

    print(f"2apply-to-JSON conversion completed; converted {converted_count} files -> {out_dir}")
