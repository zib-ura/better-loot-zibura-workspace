"""Resolve source mod folders to datapack owners, independently of namespaces."""
import json
from pathlib import Path


class PackOwnership:
    def __init__(self, manifest: Path, target: str, structure_dir: Path):
        self.structure_dir = Path(structure_dir)
        records = json.loads(Path(manifest).read_text(encoding='utf-8'))[target]['mods']
        self.by_folder = {}
        self.by_namespace = {}
        for record in records:
            ids = record.get('mod_ids') or []
            if record.get('status') != 'confirmed' or len(ids) != 1:
                continue
            owner = ids[0]
            self.by_folder[record['mod_folder']] = owner
            self.by_namespace.setdefault(owner, set()).add(owner)

    def source_owner(self, data_dir: Path) -> str:
        rel = Path(data_dir).relative_to(self.structure_dir)
        if not rel.parts:
            raise ValueError(f'Cannot determine mod owner for {data_dir}')
        folder = rel.parts[0]
        if folder not in self.by_folder:
            raise ValueError(f'Unresolved mod folder {folder!r} for {data_dir}; update structure_mod_ids.json')
        return self.by_folder[folder]

    def namespace_owner(self, namespace: str) -> str:
        if namespace in self.by_folder.values():
            return namespace
        raise ValueError(f'Cannot determine owner for namespace {namespace!r}; add an explicit ownership mapping')
