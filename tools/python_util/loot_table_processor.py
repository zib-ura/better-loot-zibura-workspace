import json
import re
from pathlib import Path


def load_target_loot_tables(apply_dir):
    """
    递归读取 apply 文件夹下所有 .js 文件，
    提取其中所有 namespace:path 格式的 ID，
    合并并去重。
    """

    apply_dir = Path(apply_dir)

    if not apply_dir.exists():
        raise FileNotFoundError(
            f"Apply folder not found: {apply_dir}"
        )

    targets = set()

    pattern = re.compile(
        r"""["']([a-z0-9_.-]+:[a-zA-Z0-9_./-]+)["']"""
    )

    for js_file in apply_dir.rglob("*.js"):
        try:
            text = js_file.read_text(
                encoding="utf-8-sig"
            )
        except Exception as e:
            print(f"[WARNING] Failed to read {js_file}：{e}")
            continue

        # 先移除 JS 注释，避免把被注释掉的 Loot Table ID 当作目标。
        # 支持 // 单行注释和 /* ... */ 多行注释，同时尽量保留字符串内容。
        text_without_comments = re.sub(
            r"//[^\r\n]*|/\*.*?\*/",
            "",
            text,
            flags=re.DOTALL
        )

        ids = pattern.findall(text_without_comments)
        targets.update(ids)

    return targets


def path_to_loot_id(json_file, input_dir):
    """
    input_dir 本身就是 data 文件夹。

    支持：

    data/
        ctov/
            loot_tables/
                chests/village/village_farm.json

    -> ctov:chests/village/village_farm

    同时兼容：
        loot_tables
        loot_table
    """

    json_file = Path(json_file)
    input_dir = Path(input_dir)

    relative = json_file.relative_to(input_dir)
    parts = relative.parts

    if len(parts) < 3:
        return None

    namespace = parts[0]
    loot_folder = parts[1]

    if loot_folder not in (
        "loot_tables",
        "loot_table"
    ):
        return None

    loot_path_parts = list(parts[2:])

    # 去掉 .json
    loot_path_parts[-1] = Path(
        loot_path_parts[-1]
    ).stem

    loot_path = "/".join(
        loot_path_parts
    )

    return f"{namespace}:{loot_path}"


def get_pool_total_weight(pool):
    """
    计算一个 pool 中所有 entry 的总 weight。

    没有 weight 的 entry 默认按 1。
    """

    entries = pool.get("entries", [])

    total_weight = 0

    for entry in entries:

        if not isinstance(entry, dict):
            continue

        weight = entry.get("weight", 1)

        if isinstance(weight, (int, float)):
            total_weight += weight
        else:
            total_weight += 1

    return total_weight


def convert_loot_table(data):
    """
    转换单个 Loot Table：

    - 保留所有 pool
    - 保留 rolls、bonus_rolls 等 pool 属性
    - 删除 conditions
    - 删除 functions
    - 每个 pool 只留下一个 minecraft:empty
    - empty.weight = 原 pool 所有 entry 的总 weight
    - 尽量保持原 JSON 的键顺序
    """

    pools = data.get("pools")

    if not isinstance(pools, list):
        return data

    new_pools = []

    for pool in pools:

        if not isinstance(pool, dict):
            continue

        total_weight = get_pool_total_weight(pool)

        # 按原始 key 顺序逐个构造，避免 entries 被移动到最后。
        new_pool = {}

        for key, value in pool.items():
            if key in ("conditions", "condition", "functions", "modifier"):
                continue

            if key == "entries":
                new_pool[key] = [
                    {
                        "type": "minecraft:empty",
                        "weight": total_weight
                    }
                ]
            else:
                new_pool[key] = value

        # 理论上正常 pool 都有 entries；如果没有，则补在最后，
        # 与原脚本“每个 pool 都生成一个 empty entry”的行为保持一致。
        if "entries" not in new_pool:
            new_pool["entries"] = [
                {
                    "type": "minecraft:empty",
                    "weight": total_weight
                }
            ]

        new_pools.append(new_pool)

    # 同样按顶层原始 key 顺序构造，避免 pools 被移动到最后。
    result = {}

    for key, value in data.items():
        # 清除 Loot Table 顶层的条件 / modifier / 旧版 functions
        if key in ("conditions", "condition", "functions", "modifier"):
            continue

        if key == "pools":
            result[key] = new_pools
        else:
            result[key] = value

    return result


def find_data_dirs(input_dir):
    """
    在总 structure 目录下查找各模组/加载器目录中的 data 文件夹。

    例如：

    structure/
        [forge]ctov-3.4.14/
            data/
        [fabric]ctov-3.4.14/
            data/

    也兼容 input_dir 本身就是 data 文件夹的旧用法。
    """

    input_dir = Path(input_dir)

    if not input_dir.exists():
        raise FileNotFoundError(
            f"Input folder not found: {input_dir}"
        )

    if input_dir.is_dir() and input_dir.name.lower() == "data":
        return [input_dir]

    data_dirs = sorted(
        (
            path
            for path in input_dir.rglob("data")
            if path.is_dir()
        ),
        key=lambda path: str(path).lower()
    )

    if not data_dirs:
        raise FileNotFoundError(
            f"No data directories found under input directory: {input_dir}"
        )

    return data_dirs


def process_loot_tables(
    input_dir,
    output_dir,
    apply_dir,
    verbose=True
):
    """
    批量处理 Loot Table。

    参数
    ----------
    input_dir:
        structure 总目录。
        目录下可以同时放同一模组的不同加载器版本，例如：

        structure/
            [forge]ctov-3.4.14/data/
            [fabric]ctov-3.4.14/data/
            [neoforge]ctov-3.4.14/data/

        脚本会自动递归找到所有名为 data 的文件夹。
        同时兼容旧用法：input_dir 直接传 data 文件夹。

    output_dir:
        输出 data 文件夹。
        不保留 [forge]xxx / [fabric]xxx 这一层，
        所有结果仍合并输出为：

        output_dir/
            namespace/
                loot_tables/...

    apply_dir:
        apply 文件夹。
        会递归扫描里面所有 .js 文件。

    verbose:
        是否打印处理信息。

    返回
    ----------
    {
        "targets": set,
        "processed": set,
        "missing": set,
        "failed": dict,
        "data_dirs": list
    }
    """

    input_dir = Path(input_dir)
    output_dir = Path(output_dir)
    apply_dir = Path(apply_dir)

    if not apply_dir.exists():
        raise FileNotFoundError(
            f"Apply folder not found: {apply_dir}"
        )

    data_dirs = find_data_dirs(input_dir)

    # =========================
    # 读取 apply 下所有 JS
    # =========================

    targets = load_target_loot_tables(apply_dir)

    if verbose:
        print(
            f"[LootTable] Loaded "
            f"{len(targets)} target IDs from apply"
        )
        print(
            f"[LootTable] Found "
            f"{len(data_dirs)} data directories in structure"
        )
        for data_dir in data_dirs:
            print(f"  - {data_dir}")

    processed = set()
    found = set()
    failed = {}

    # 记录输出文件来源；不同加载器出现相同路径时，后扫描到的版本覆盖前一个。
    # 这样最终仍只有一个统一的 data 输出目录。
    output_sources = {}

    # =========================
    # 逐个扫描所有 data
    # =========================

    for data_dir in data_dirs:
        if verbose:
            print()
            print(f"[Scanning data] {data_dir}")

        for json_file in data_dir.rglob("*.json"):

            loot_id = path_to_loot_id(
                json_file,
                data_dir
            )

            if loot_id is None:
                continue

            if loot_id not in targets:
                continue

            found.add(loot_id)

            if verbose:
                print(f"[Processing] {loot_id}")
                print(f"  Source: {json_file}")

            # =========================
            # 读取
            # =========================

            try:
                with json_file.open(
                    "r",
                    encoding="utf-8-sig"
                ) as f:
                    data = json.load(f)

            except Exception as e:
                failed[f"{loot_id} @ {json_file}"] = str(e)

                print(f"[ERROR] Failed to read JSON")
                print(f"  Loot Table：{loot_id}")
                print(f"  File: {json_file}")
                print(f"  Reason: {e}")

                continue

            # =========================
            # 转换
            # =========================

            try:
                converted = convert_loot_table(data)

            except Exception as e:
                failed[f"{loot_id} @ {json_file}"] = str(e)

                print(f"[ERROR] Loot Table conversion failed")
                print(f"  Loot Table：{loot_id}")
                print(f"  File: {json_file}")
                print(f"  Reason: {e}")

                continue

            # =========================
            # 相对于当前 data 保持原路径
            # =========================

            relative_path = json_file.relative_to(data_dir)
            output_file = output_dir / relative_path

            output_file.parent.mkdir(
                parents=True,
                exist_ok=True
            )

            # =========================
            # 输出
            # =========================

            previous_source = output_sources.get(output_file)
            if previous_source is not None:
                print("[WARNING] Duplicate output path; overwriting")
                print(f"  Output: {output_file}")
                print(f"  Previous source: {previous_source}")
                print(f"  New source: {json_file}")

            try:
                with output_file.open(
                    "w",
                    encoding="utf-8"
                ) as f:
                    json.dump(
                        converted,
                        f,
                        ensure_ascii=False,
                        indent=2
                    )
                    # f.write("\n")

            except Exception as e:
                failed[f"{loot_id} @ {json_file}"] = str(e)

                print(f"[ERROR] Failed to write JSON")
                print(f"  Loot Table：{loot_id}")
                print(f"  Source: {json_file}")
                print(f"  Output: {output_file}")
                print(f"  Reason: {e}")

                continue

            output_sources[output_file] = json_file
            processed.add(loot_id)

            if verbose:
                print(f"  -> {output_file}")

    # =========================
    # JS 中出现，但所有 data 都没找到
    # =========================

    missing = targets - found

    if missing:
        print()
        print(f"[WARNING] {len(missing)} Loot Tables were not found in data:")
        for loot_id in sorted(missing):
            print(f"  - {loot_id}")

    result = {
        "targets": targets,
        "processed": processed,
        "missing": missing,
        "failed": failed,
        "data_dirs": data_dirs
    }

    if verbose:
        print()
        print("=" * 50)
        print("Loot Table processing completed")
        print("=" * 50)
        print(f"Data directories scanned: {len(data_dirs)}")
        print(f"Targets from apply: {len(targets)}")
        print(f"Found in data: {len(found)}")
        print(f"Successfully processed: {len(processed)}")
        print(f"Missing: {len(missing)}")
        print(f"Failed: {len(failed)}")

    return result
