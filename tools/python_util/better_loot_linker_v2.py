"""Build-time linking of Better Loot's existing generated JSON format.

Inputs: loot_pools registry and loot_bindings [target,config] files.
Output: loot_bindings with expanded config/content/groups/items, preserving
weighted selection, roll counts, conditions and lootjs: item references.
"""
import json
from pathlib import Path
from copy import deepcopy

try:
    from .better_loot_templates import generate_all
except ImportError:
    from better_loot_templates import generate_all


class LinkError(ValueError):
    pass


def load_registry(folder):
    registry = {}
    for path in sorted(Path(folder).rglob('*.json')):
        obj = json.loads(path.read_text(encoding='utf-8'))
        if not isinstance(obj, dict):
            raise LinkError(f'{path}: expected JSON object')
        for key, value in obj.items():
            if key in registry:
                raise LinkError(f'{path}: duplicate registry key {key}')
            registry[key] = value
    return registry


def link(registry, bindings):
    """Expand only the three LEC reference positions, never arbitrary strings."""
    stack = []

    def reference(value, level):
        if not isinstance(value, str):
            return value
        if value not in registry:
            raise LinkError(f'Undefined {level} reference {value!r}; path={stack}')
        if value in stack:
            raise LinkError('Cyclic reference: ' + ' -> '.join(stack + [value]))
        stack.append(value)
        try:
            return deepcopy(registry[value])
        finally:
            stack.pop()

    # Keep the reference on the stack throughout recursive expansion.
    def with_reference(key, fn):
        if key not in registry:
            raise LinkError(f'Undefined configuration reference: {key}')
        if key in stack:
            raise LinkError('Cyclic reference: ' + ' -> '.join(stack + [key]))
        stack.append(key)
        try:
            return fn(registry[key])
        finally:
            stack.pop()

    def flatten(value, item_fn):
        if isinstance(value, str):
            return with_reference(value, lambda v: flatten(v, item_fn))
        if not isinstance(value, list):
            raise LinkError(f'Expected list, got {value!r}; path={stack}')
        out = []
        for item in value:
            if isinstance(item, str):
                out.extend(with_reference(item, lambda v: flatten(v, item_fn)))
            else:
                out.append(item_fn(item))
        return out

    def expand_runtime_metadata(value):
        """Compile registry-backed runtime metadata into literal lists."""
        if isinstance(value, list):
            return [expand_runtime_metadata(x) for x in value]
        if not isinstance(value, dict):
            return value
        obj = {k: expand_runtime_metadata(v) for k, v in value.items()}
        if obj.get('function') == 'better_loot_zibura:fill_seed_bundle':
            key = obj.get('seed_type_key')
            if not isinstance(key, str) or key not in registry:
                raise LinkError(f'Undefined seed_type_key: {key!r}')
            def seed_list(name, chain):
                if name in chain:
                    raise LinkError('Cyclic seed list: ' + ' -> '.join(chain + [name]))
                data = registry[name]
                if not isinstance(data, list):
                    raise LinkError(f'Seed list {name!r} must be an array')
                result = []
                for entry in data:
                    if not isinstance(entry, str):
                        raise LinkError(f'Invalid seed entry in {name}: {entry!r}')
                    if entry in registry:
                        result.extend(seed_list(entry, chain + [name]))
                    else:
                        result.append(entry)
                return result
            obj['seed_types'] = seed_list(key, [])
            del obj['seed_type_key']
        if 'registry_key' in obj:
            key = obj['registry_key']
            def biome_list(value, chain):
                if isinstance(value, list):
                    result = []
                    for v in value:
                        result.extend(biome_list(v, chain))
                    return result
                if not isinstance(value, str):
                    raise LinkError(f'Invalid biome entry: {value!r}')
                if value in registry:
                    if value in chain:
                        raise LinkError('Cyclic biome list: ' + ' -> '.join(chain + [value]))
                    return biome_list(registry[value], chain + [value])
                return [value]
            obj['registry_key'] = biome_list(key, [])
        return obj

    def items(value):
        # Item arrays may contain nested arrays from JS concat or symbol expansion.
        # Flatten ONLY at item level; content and weighted tuples are structural.
        def expand_items(node):
            if isinstance(node, str):
                return with_reference(node, lambda v: expand_items(v))
            if isinstance(node, list):
                result = []
                for child in node:
                    result.extend(expand_items(child))
                return result
            if isinstance(node, dict):
                return [expand_runtime_metadata(node)]  # preserve lootjs:* references
            raise LinkError(f'Expected item object/list/reference: {node!r}; path={stack}')
        return expand_items(value)

    def groups(value):
        def parse_group(group):
            if not isinstance(group, dict):
                raise LinkError(f'Expected group object: {group!r}')
            obj = deepcopy(group)
            if 'items' in obj:
                obj['items'] = items(obj['items'])
            return obj
        return flatten(value, parse_group)

    def content(value):
        def parse_row(row):
            if not isinstance(row, list) or len(row) < 3:
                raise LinkError(f'Expected [groups,min,max,...]: {row!r}')
            out = deepcopy(row)
            out[0] = groups(row[0])
            if len(out) > 3:
                out[3] = expand_runtime_metadata(out[3])
            return out
        return flatten(value, parse_row)

    def weighted(value):
        def parse_weighted(row):
            if not isinstance(row, list) or len(row) < 2:
                raise LinkError(f'Expected [content,weight,...]: {row!r}')
            out = deepcopy(row)
            out[0] = content(row[0])
            return out
        return flatten(value, parse_weighted)

    result = []
    for binding in bindings:
        if not isinstance(binding, dict) or 'target' not in binding or 'config' not in binding:
            raise LinkError(f'Invalid binding: {binding!r}')
        obj = deepcopy(binding)
        obj['config'] = weighted(obj['config'])
        result.append(obj)
    return result


def link_folders(pool_folder, binding_folder, output_folder):
    """Emit one JSON object per unique loot-table target, preserving target path."""
    from collections import defaultdict
    registry = load_registry(pool_folder)
    registry.update(generate_all(registry))
    output_folder = Path(output_folder)
    sources = defaultdict(list)
    for source in sorted(Path(binding_folder).rglob('*.json')):
        bindings = json.loads(source.read_text(encoding='utf-8'))
        if isinstance(bindings, dict):
            bindings = [bindings]
        if not isinstance(bindings, list):
            raise LinkError(f'{source}: expected binding object or array')
        for obj in link(registry, bindings):
            target = obj['target']
            if not isinstance(target, str) or ':' not in target:
                raise LinkError(f'{source}: invalid target {target!r}')
            namespace, path = target.split(':', 1)
            parts = path.split('/')
            if not namespace or not parts or any(not x or x in ('.', '..') or '\\' in x for x in [namespace, *parts]):
                raise LinkError(f'{source}: unsafe target {target!r}')
            sources[target].append((source, obj))
    for target, entries in sources.items():
        if len(entries) > 1:
            locations = ', '.join(str(src) for src, _ in entries)
            raise LinkError(f'Duplicate loot target {target!r} in {locations}; refusing silent overwrite')
    for target, entries in sorted(sources.items()):
        namespace, path = target.split(':', 1)
        dest = output_folder / namespace / (path + '.json')
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(json.dumps(entries[0][1], ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    return len(sources)
