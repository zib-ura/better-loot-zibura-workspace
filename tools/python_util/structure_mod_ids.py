"""Read actual declared mod IDs from extracted Minecraft mod JAR directories."""
import json
import tomllib
from pathlib import Path


def read_mod_ids(mod_root: Path, loader: str):
    candidates = []
    if loader == 'fabric':
        candidates = [('fabric.mod.json', 'fabric'), ('META-INF/mods.toml', 'toml'), ('META-INF/neoforge.mods.toml', 'toml')]
    else:
        candidates = [('META-INF/neoforge.mods.toml', 'toml'), ('META-INF/mods.toml', 'toml'), ('fabric.mod.json', 'fabric')]
    candidates.append(('mcmod.info', 'legacy'))
    errors = []
    for filename, kind in candidates:
        path = mod_root / filename
        if not path.is_file():
            continue
        try:
            if kind == 'toml':
                data = tomllib.loads(path.read_text(encoding='utf-8-sig'))
                ids = [m.get('modId') for m in data.get('mods', []) if isinstance(m, dict)]
            else:
                data = json.loads(path.read_text(encoding='utf-8-sig'))
                if kind == 'fabric':
                    ids = [data.get('id')] if isinstance(data, dict) else []
                else:
                    mods = data.get('modList', []) if isinstance(data, dict) else data
                    ids = [m.get('modid') for m in mods if isinstance(m, dict)] if isinstance(mods, list) else []
            ids = list(dict.fromkeys(x for x in ids if isinstance(x, str) and x.strip()))
            if ids:
                return {'mod_ids': ids, 'metadata': filename, 'status': 'confirmed'}
            errors.append(f'{filename}: no declared mod ID')
        except (ValueError, OSError, UnicodeError, TypeError) as exc:
            errors.append(f'{filename}: {exc}')
    return {'mod_ids': [], 'metadata': None, 'status': 'unresolved', 'errors': errors}


def list_structure_mod_ids(structures_dir: Path):
    if not structures_dir.is_dir():
        print(f'Structure directory not found: {structures_dir}')
        return {}
    results = {}
    for target_dir in sorted(structures_dir.iterdir()):
        if not target_dir.is_dir() or '-' not in target_dir.name:
            continue
        version, loader = target_dir.name.rsplit('-', 1)
        if loader not in {'forge', 'neoforge', 'fabric'}:
            continue
        entries = []
        # Each immediate subdirectory represents one extracted mod JAR.
        for mod_root in sorted(p for p in target_dir.iterdir() if p.is_dir()):
            info = read_mod_ids(mod_root, loader)
            entries.append({'mod_folder': mod_root.name, **info})
        # Also support a single extracted JAR directly under the target directory.
        if any((target_dir / p).is_file() for p in ('fabric.mod.json', 'META-INF/mods.toml', 'META-INF/neoforge.mods.toml', 'mcmod.info')):
            entries.insert(0, {'mod_folder': '.', **read_mod_ids(target_dir, loader)})
        results[target_dir.name] = {'version': version, 'loader': loader, 'mods': entries}
        print(f'\n[{target_dir.name}] {len(entries)} extracted mod folder(s)')
        for entry in entries:
            ids = ', '.join(entry['mod_ids']) if entry['mod_ids'] else 'UNRESOLVED'
            print(f"  {entry['mod_folder']} -> {ids} ({entry['metadata'] or 'no valid metadata'})")
    output = structures_dir.parent / 'structure_mod_ids.json'
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(results, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'\nSaved: {output}')
    return results
