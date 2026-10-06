import shutil
from pathlib import Path

# 需要重命名的子文件夹名称（例如 1.21+ 常用的 loot_tables -> loot_table）
# 如果是其他文件夹，直接修改这里的名字即可
OLD_FOLDER_NAME = "kubejs"
NEW_FOLDER_NAME = "better_loot_zibura"
# =======================================================


def copy_and_rename_subfolders(
        src,
        dst,
        old_name="kubejs",
        new_name="better_loot_zibura",
):
    src = Path(src)
    dst = Path(dst)

    if not src.exists():
        print(f"Source directory not found: {src}")
        return

    dst.mkdir(parents=True, exist_ok=True)

    def _copy_recursive(source_path: Path, target_path: Path):
        for item in source_path.iterdir():
            target_item_name = (
                new_name
                if item.name == old_name
                else item.name
            )

            dest_item = (
                    target_path / target_item_name
            )

            if item.is_dir():
                dest_item.mkdir(
                    parents=True,
                    exist_ok=True
                )
                _copy_recursive(
                    item,
                    dest_item
                )
            else:
                shutil.copy2(
                    item,
                    dest_item
                )

    print(f"Copying from: {src}")
    print(f"   Copying to: {dst}")

    _copy_recursive(src, dst)

    print(
        f"Copy completed. All "
        f"'{old_name}' renamed to "
        f"'{new_name}'"
    )
