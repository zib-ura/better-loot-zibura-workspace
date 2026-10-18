import json
import re
from pathlib import Path
from python_util.version_profile import get_version_profile

EMPTY_JSON_CONTENT = "{}\n"

def extract_js_string_list(file_path: Path, var_name: str) -> list[str]:
    """读取 JS 文件并提取有效字符串项（自动忽略 // 和 /* */ 注释）"""
    if not file_path.exists():
        return []

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    match = re.search(rf"(?:const|let|var)\s+{var_name}\s*=\s*\[([\s\S]*?)\];", content)
    if not match:
        return []

    array_body = match.group(1)
    array_body = re.sub(r"/\*[\s\S]*?\*/", "", array_body)
    array_body = re.sub(r"//.*", "", array_body)

    items = re.findall(r'["\']([^"\']+)["\']', array_body)
    return items


def create_datapack_clear_entries(
        constants_dir,
        output_data_dir,
        version="1.21.1",
        loader=None,
        output_resolver=None,
):
    constants_dir = Path(constants_dir)
    output_data_dir = Path(output_data_dir)

    tables_js_path = (
            constants_dir / "0tableToClear.js"
    )

    modifiers_js_path = (
            constants_dir / "modifiersToRemove.js"
    )

    recipes_js_path = (
            constants_dir / "recipesToRemove.js"
    )

    tables_to_clear = extract_js_string_list(
        tables_js_path,
        "tableToClear"
    )

    modifiers_to_remove = extract_js_string_list(
        modifiers_js_path,
        "modifiersToRemove"
    )

    recipes_to_remove = extract_js_string_list(
        recipes_js_path,
        "recipesToRemove"
    )
    profile = get_version_profile(version)
    table_dir = profile.loot_table_dir
    modifier_dir = profile.loot_modifier_dir
    recipe_dir = profile.recipe_dir

    # Loot Tables
    for entry in tables_to_clear:
        namespace, path = entry.split(":", 1)
        target_path = (
            (output_resolver(namespace) if output_resolver else output_data_dir)
            / namespace
            / table_dir
            / f"{path}.json"
        )
        target_path.parent.mkdir(parents=True, exist_ok=True)
        with open(target_path, "w", encoding="utf-8") as f:
            f.write(EMPTY_JSON_CONTENT)

    # Loot Modifiers
    for entry in modifiers_to_remove:
        namespace, path = entry.split(":", 1)
        target_path = (
            (output_resolver(namespace) if output_resolver else output_data_dir)
            / namespace
            / modifier_dir
            / f"{path}.json"
        )
        target_path.parent.mkdir(parents=True, exist_ok=True)
        with open(target_path, "w", encoding="utf-8") as f:
            f.write(EMPTY_JSON_CONTENT)

    # Recipes
    for entry in recipes_to_remove:
        namespace, path = entry.split(":", 1)

        target_path = (
                (output_resolver(namespace) if output_resolver else output_data_dir)
                / namespace
                / recipe_dir
                / f"{path}.json"
        )

        target_path.parent.mkdir(parents=True, exist_ok=True)

        if profile.recipe_disable_strategy == "neoforge_never":
            recipe_content = {
                "neoforge:conditions": [
                    {
                        "type": "neoforge:never"
                    }
                ]
            }

            with open(target_path, "w", encoding="utf-8") as f:
                json.dump(
                    recipe_content,
                    f,
                    ensure_ascii=False,
                    indent=2
                )

        elif version == "1.21.1" and loader == "fabric":
            # Fabric 1.21.1 不能用空对象 {} 作为有效 recipe 覆盖。
            # 使用正常游戏流程无法取得的 structure_void 制作占位配方，
            # 从而覆盖原 recipe，同时避免玩家正常合成。
            recipe_content = {
                "type": "minecraft:crafting_shapeless",
                "ingredients": [
                    {
                        "item": "minecraft:structure_void"
                    }
                ],
                "result": {
                    "id": "minecraft:structure_void",
                    "count": 1
                }
            }

            with open(target_path, "w", encoding="utf-8") as f:
                json.dump(
                    recipe_content,
                    f,
                    ensure_ascii=False,
                    indent=2
                )

        else:
            with open(target_path, "w", encoding="utf-8") as f:
                f.write(EMPTY_JSON_CONTENT)

    print(f"✅ Clear entries generated: {output_data_dir}")
    print(f"   - Version: {version}")
    if loader:
        print(f"   - Loader: {loader}")
    print(f"   - Loot Tables cleared: {len(tables_to_clear)} entries")
    print(f"   - Loot Modifiers cleared: {len(modifiers_to_remove)} entries")
    print(f"   - Recipes cleared: {len(recipes_to_remove)} entries")
