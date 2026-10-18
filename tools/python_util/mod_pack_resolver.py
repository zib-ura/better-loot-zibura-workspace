"""Resolve source mod ownership independently of resource namespace."""
import json
from pathlib import Path


class ModPackResolver:
    def __init__(self, manifest, target, structure_dir):
        self.structure_dir = Path(structure_dir)
        records = json.loads(Path(manifest).read_text(encoding="utf-8"))
        self.folders = {}
        self.namespaces = {}
        self.known = {}
        for group in records.values():
            for mod in group.get("mods", []):
                ids = mod.get("mod_ids", [])
                if len(ids) == 1:
                    self.known.setdefault(self._identity(mod["mod_folder"]), set()).add(ids[0])
        for mod in records.get(target, {}).get("mods", []):
            folder = mod["mod_folder"]
            ids = mod.get("mod_ids", [])
            if not ids:
                ids = list(self.known.get(self._identity(folder), []))
            if len(ids) == 1:
                self.folders[folder] = ids[0]
        # Namespaces are discovered from actual source directories, not guessed
        # from the mod ID. This supports multiple namespaces per mod.
        for mod_dir in (self.structure_dir.iterdir() if self.structure_dir.is_dir() else []):
            if not mod_dir.is_dir():
                continue
            modid = self.folders.get(mod_dir.name)
            if not modid:
                continue
            data = mod_dir / "data"
            if data.is_dir():
                for ns in data.iterdir():
                    if ns.is_dir():
                        self.namespaces.setdefault(ns.name, set()).add(modid)

    @staticmethod
    def _identity(folder):
        import re
        # Normalize common mod filename version/loader differences for cross-version fallback.
        value = folder.lower()
        value = re.sub(r"\[[^]]*]", "", value)
        value = re.sub(r"(?:forge|neoforge|fabric|mc|universal|port|unofficial)", "", value)
        value = re.sub(r"\d+(?:[.\-+]\d+)*[a-z]?", "", value)
        return re.sub(r"[^a-z]", "", value)

    def for_source(self, data_dir, namespace):
        """Prefer the source mod folder; never infer shared namespaces from other mods."""
        path = Path(data_dir).resolve()
        root = self.structure_dir.resolve()
        try:
            parts = path.relative_to(root).parts
        except ValueError as exc:
            raise ValueError(f"Source data directory outside structure: {path}") from exc
        if not parts:
            raise ValueError(f"Cannot determine source folder for {path}")
        folder = parts[0]
        owner = self.folders.get(folder)
        if owner:
            return owner
        # Some source trees include a vanilla/game-version data directory.
        # It is not owned by any of the mods listed in the manifest.
        if folder == self.structure_dir.name or folder.lower().startswith(("1.20.", "1.21.", "26.")):
            return namespace
        # A missing manifest entry must not cause the resource to be attributed
        # to an unrelated mod just because it shares the same namespace.
        if namespace != "minecraft":
            return namespace
        raise ValueError(
            f"Cannot identify source mod folder {folder!r} for {path}; "
            "add its modid to structure_mod_ids.json"
        )

    def for_namespace(self, namespace):
        # Namespace-only generated entries have no source-mod context.
        # Prefer the namespace's own pack; shared namespaces cannot be
        # attributed to any specific mod without an explicit source.
        return namespace

    def data_root(self, packs_dir, modid):
        if not modid or modid in {".", ".."} or "/" in modid or "\\" in modid:
            raise ValueError(f"Invalid modid: {modid!r}")
        return Path(packs_dir) / modid / "data"
