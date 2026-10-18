from pathlib import Path
import argparse
import json
import shutil
import zipfile

from python_util import crateandbag
from python_util import tableandglm
from python_util import loot_convert
from python_util import loot_table_processor
from python_util import apply_convert
from python_util import copy_data
# from python_util import create_mcmeta
from python_util.mod_pack_resolver import ModPackResolver
from python_util.version_profile import get_version_profile, pack_format_json


# ============================================================
# 项目路径
# ============================================================

ROOT_DIR = Path(__file__).resolve().parent.parent

RESOURCES_DIR = ROOT_DIR / "resources"

UTILS_DIR = RESOURCES_DIR / "0_utils"
CONSTANTS_DIR = RESOURCES_DIR / "1constants"
APPLY_DIR = RESOURCES_DIR / "2apply"
STRUCTURES_DIR = RESOURCES_DIR / "structure"
STATIC_DATA_DIR = RESOURCES_DIR / "static_data"

GENERATED_DIR = ROOT_DIR / "generated"
DATAPACKS_DIR = ROOT_DIR / "datapacks"
DATAPACK_BASENAME = "better_loot_zibura_overrides"
PROJECTS_DIR = ROOT_DIR / "projects"


# ============================================================
# 构建目标
# ============================================================

SUPPORTED_LOADERS = {
    "forge",
    "neoforge",
    "fabric",
}


def discover_targets():
    """
    从 projects 目录自动发现构建目标。

    目录命名规则：
        <minecraft-version>-<loader>

    例如：
        1.20.1-forge
        1.21.1-fabric
        1.21.1-neoforge
        26.3-neoforge
    """
    targets = {}

    if not PROJECTS_DIR.exists():
        return targets

    for project_dir in PROJECTS_DIR.iterdir():
        if not project_dir.is_dir():
            continue

        name = project_dir.name

        try:
            version, loader = name.rsplit("-", 1)
        except ValueError:
            continue

        if loader not in SUPPORTED_LOADERS:
            continue

        targets[name] = {
            "version": version,
            "loader": loader,
            "project_dir": project_dir,
            "structure_dir": STRUCTURES_DIR / name,
            "output_dir": GENERATED_DIR / name,
            "datapack_dir": DATAPACKS_DIR / f".{DATAPACK_BASENAME}-{version}-{loader}",
            "datapack_zip": DATAPACKS_DIR / f"{DATAPACK_BASENAME}-{version}.zip",
        }

    return dict(sorted(targets.items()))


def generate_datapack_mcmeta(output_dir: Path, version: str):
    """为 Fabric 外置覆盖数据包生成 pack.mcmeta。"""
    profile = get_version_profile(version)
    output_dir.mkdir(parents=True, exist_ok=True)

    metadata = {
        "pack": {
            "pack_format": pack_format_json(profile.data_pack_format),
            "description": "Better Loot Zibura compatibility overrides",
        }
    }

    with (output_dir / "pack.mcmeta").open("w", encoding="utf-8") as f:
        json.dump(metadata, f, ensure_ascii=False, indent=2)
        f.write("\n")


def create_datapack_zip(source_dir: Path, zip_path: Path):
    """将 datapack 工作目录压缩为可直接放入世界 datapacks 的 ZIP。"""
    zip_path.parent.mkdir(parents=True, exist_ok=True)

    if zip_path.exists():
        zip_path.unlink()

    with zipfile.ZipFile(
            zip_path,
            "w",
            compression=zipfile.ZIP_DEFLATED,
    ) as archive:
        for file_path in sorted(source_dir.rglob("*")):
            if not file_path.is_file():
                continue
            archive.write(
                file_path,
                arcname=file_path.relative_to(source_dir),
            )


def normalize_datapack_resource_paths(data_dir: Path) -> int:
    """Lowercase Minecraft resource paths, including on case-insensitive Windows."""
    if not data_dir.is_dir():
        return 0

    files = sorted((p for p in data_dir.rglob("*") if p.is_file()), key=str)
    destinations = {}
    changes = []
    for source in files:
        relative = source.relative_to(data_dir)
        lowered = Path(*(part.lower() for part in relative.parts))
        destination = data_dir / lowered
        # Use string-based path comparison: WindowsPath equality ignores case.
        collision_key = lowered.as_posix()
        if collision_key in destinations:
            previous = destinations[collision_key]
            raise ValueError(
                f"Resource path collision after lowercasing: "
                f"{previous} and {source} -> {destination}"
            )
        destinations[collision_key] = source
        if relative.as_posix() != lowered.as_posix():
            changes.append((source, destination))

    if not changes:
        return 0

    import tempfile
    # Stage files outside data_dir, then remove old empty uppercase folders
    # BEFORE creating lowercase destinations. Required on Windows/NTFS.
    with tempfile.TemporaryDirectory(prefix="better_loot_paths_") as temporary:
        staging = Path(temporary)
        for index, (source, _) in enumerate(changes):
            shutil.move(str(source), str(staging / str(index)))

        for directory in sorted(
                (p for p in data_dir.rglob("*") if p.is_dir()),
                key=lambda p: len(p.parts), reverse=True,
        ):
            if not any(directory.iterdir()):
                directory.rmdir()

        for index, (_, destination) in enumerate(changes):
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(staging / str(index)), str(destination))

    return len(changes)


def finalize_mod_packs(packs_dir: Path, version: str) -> list[str]:
    """Write metadata for each mod-owned pack; preserve all namespaces inside."""
    created = []
    if packs_dir.is_dir():
        for pack in sorted(packs_dir.iterdir()):
            if pack.is_dir() and (pack / "data").is_dir():
                generate_datapack_mcmeta(pack, version)
                created.append(pack.name)
    return created


def process_target(target: str, jobs: dict):
    job = jobs[target]

    version = job["version"]
    loader = job["loader"]
    # 构建开始即验证版本资料是否已经登记，避免跑到一半才失败。
    get_version_profile(version)

    structure_dir = job["structure_dir"]
    output_dir = job["output_dir"]
    output_data = output_dir / "data"

    # Resolve pack ownership before writing any override resources.
    manifest = RESOURCES_DIR / "structure_mod_ids.json"
    if not manifest.is_file():
        raise FileNotFoundError(f"Missing mod ID manifest: {manifest}")
    resolver = ModPackResolver(manifest, target, structure_dir)
    packs_dir = output_dir / "packs"
    override_output_data = packs_dir / "_unused" / "data"
    override_output_dir = packs_dir
    override_zip = job["datapack_zip"]

    if not structure_dir.exists():
        raise FileNotFoundError(
            f"Structure directory not found:\n"
            f"{structure_dir}"
        )

    # 清理当前 target
    if output_dir.exists():
        print(f">>> [{target}] Removing old build directory")
        shutil.rmtree(output_dir)

    # Fabric 的外置 datapack 也必须整目录清理，避免已经删除的覆盖项残留。
    if loader == "fabric":
        for old_zip in DATAPACKS_DIR.glob(
            f"{DATAPACK_BASENAME}-{version}-{loader}-*.zip"
        ):
            old_zip.unlink()
        if override_zip.exists():
            override_zip.unlink()

    print()
    print("========================================")
    print(f"        Building {target}")
    print("========================================")
    print()

    print(f">>> Minecraft: {version}")
    print(f">>> Loader:    {loader}")
    print(f">>> Structure: {structure_dir}")
    print()

    print(f">>> [{target}] Processing Structure Loot Tables")

    loot_table_processor.process_loot_tables(
        input_dir=structure_dir,
        output_dir=override_output_data,
        output_resolver=lambda data_dir, ns: resolver.data_root(
            packs_dir, resolver.for_source(data_dir, ns)),
        apply_dir=APPLY_DIR,
        verbose=False,
    )

    # --------------------------------------------------------
    # Loot Pools
    # --------------------------------------------------------

    loot_pools_output = (
            output_data
            / "better_loot_zibura"
            / "better_loot_zibura"
            / "loot_pools"
    )

    print(f">>> [{target}] Generating Loot Pools")

    loot_convert.process_folder(
        input_folder=CONSTANTS_DIR,
        output_folder=loot_pools_output,
        version=version,
    )

    # --------------------------------------------------------
    # Loot Bindings
    # --------------------------------------------------------

    loot_bindings_output = (
            output_data
            / "better_loot_zibura"
            / "better_loot_zibura"
            / "loot_bindings"
    )

    print(f">>> [{target}] Generating Loot Bindings")

    apply_convert.process_apply_folder(
        input_folder=APPLY_DIR,
        output_folder=loot_bindings_output,
    )


    # --------------------------------------------------------
    # Item Unifications
    # --------------------------------------------------------

    item_unifications_output = (
            output_data
            / "better_loot_zibura"
            / "better_loot_zibura"
            / "item_unifications"
    )

    print(f">>> [{target}] Generating Item Unifications")

    crateandbag.run(
        input_file=CONSTANTS_DIR / "crate_and_bag.js",
        output_root=item_unifications_output,
    )

    # --------------------------------------------------------
    # Datapack Clear Entries
    # --------------------------------------------------------

    tableandglm.create_datapack_clear_entries(
        constants_dir=CONSTANTS_DIR,
        output_data_dir=override_output_data,
        output_resolver=lambda ns: resolver.data_root(
            packs_dir, resolver.for_namespace(ns)),
        version=version,
        loader=loader,
    )

    # --------------------------------------------------------
    # Copy Data
    # --------------------------------------------------------

    copy_data.copy_and_rename_subfolders(
        src=STATIC_DATA_DIR,
        dst=output_data,
        old_name="kubejs",
        new_name="better_loot_zibura",
    )

    # Normalize generated Minecraft resource locations before packaging.
    normalized_mod = normalize_datapack_resource_paths(output_data)
    normalized_overrides = sum(
        normalize_datapack_resource_paths(pack / "data")
        for pack in packs_dir.iterdir() if (pack / "data").is_dir()
    ) if packs_dir.exists() else 0
    print(f">>> [{target}] Normalized resource paths: "
          f"{normalized_mod + normalized_overrides}")

    mod_packs = finalize_mod_packs(packs_dir, version)
    print(f">>> [{target}] Mod packs: {', '.join(mod_packs)}")
    if loader == "fabric":
        # Keep Fabric overrides external; each mod gets its own independently
        # installable ZIP, rather than merging unrelated mods into one archive.
        for modid in mod_packs:
            create_datapack_zip(
                packs_dir / modid,
                DATAPACKS_DIR / f"{DATAPACK_BASENAME}-{version}-{loader}-{modid}.zip",
            )

    # # 每个 target 使用自身 Minecraft/Data Pack version 生成 metadata。
    # create_mcmeta.generate_mcmeta(
    #     output_dir=output_dir,
    #     version=version,
    # )

    print()
    print(f">>> [{target}] Build completed")
    print(f">>> Mod resource output: {output_dir}")
    if loader == "fabric":
        print(f">>> External datapacks: {DATAPACKS_DIR}")
    else:
        print(f">>> Embedded datapacks:   {output_dir / 'packs'}")
    print()


def list_structure_mod_ids():
    from python_util.structure_mod_ids import list_structure_mod_ids as scan
    return scan(STRUCTURES_DIR)


def main():
    # Inventory mode also works when projects/ has not been created yet.
    import sys
    if "--list-mod-ids" in sys.argv:
        list_structure_mod_ids()
        return
    jobs = discover_targets()

    if not jobs:
        print("No valid projects found in the projects directory.")
        print(f"Projects directory: {PROJECTS_DIR}")
        return

    parser = argparse.ArgumentParser(
        description="Better Loot Resource Builder"
    )

    group = parser.add_mutually_exclusive_group(required=True)

    group.add_argument(
        "--target",
        choices=jobs.keys(),
        help="Build only the specified version",
    )

    group.add_argument(
        "--all",
        action="store_true",
        help="Build all versions with Structure input",
    )

    group.add_argument(
        "--list",
        action="store_true",
        help="List all discovered projects",
    )

    args = parser.parse_args()

    # --------------------------------------------------------
    # 列出项目
    # --------------------------------------------------------

    if args.list:
        print()
        print("Discovered projects:")
        print()

        for target, job in jobs.items():
            if job["structure_dir"].exists():
                status = "OK"
            else:
                status = "missing structure"

            print(f"  {target:<24} [{status}]")

        print()
        return

    # --------------------------------------------------------
    # 构建全部
    # --------------------------------------------------------

    if args.all:
        for target, job in jobs.items():

            if not job["structure_dir"].exists():
                print(
                    f">>> Skipping {target}: "
                    f"missing {job['structure_dir']}"
                )
                continue

            process_target(target, jobs)

        return

    # --------------------------------------------------------
    # 构建单个 Target
    # --------------------------------------------------------

    process_target(args.target, jobs)


if __name__ == "__main__":
    main()