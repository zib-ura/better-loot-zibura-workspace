"""Build-time equivalents of CarpenterLootGenerator and ShepherdLootGenerator.

Input: merged, already-parsed loot_pools registry. Output: additional registry keys.
No Minecraft item registry is consulted; lootjs:* values remain untouched.
"""
from copy import deepcopy


class TemplateError(ValueError):
    pass


def _get(registry, key, expected):
    value = registry.get(key)
    if not isinstance(value, expected):
        raise TemplateError(f'{key}: expected {expected.__name__}, got {type(value).__name__}')
    return value


def _replace_wood(item_id, wood):
    result = item_id.replace('[WOOD]', wood)
    if wood == 'bamboo':
        result = result.replace('bamboo_log', 'bamboo_block').replace('bamboo_sapling', 'bamboo')
    elif wood == 'mangrove':
        result = result.replace('mangrove_sapling', 'mangrove_propagule')
    return result


def _group(templates, substitutions, placeholder, name, weight, low, high, *, biome=None, wool=False):
    items = []
    for substitution in substitutions:
        for template in templates:
            if not isinstance(template, dict):
                continue
            item = deepcopy(template)
            if isinstance(item.get('id'), str):
                if placeholder == '[WOOD]':
                    item['id'] = _replace_wood(item['id'], substitution)
                else:
                    item['id'] = item['id'].replace(placeholder, substitution)
            items.append(item)
    if biome == 'plains' and wool:
        items.extend([{'id': 'brewery:patterned_wool', 'ratio': 10},
                      {'id': 'brewery:patterned_carpet', 'ratio': 10}])
    return [{'groupName': name, 'groupWeight': weight, 'min': low, 'max': high, 'items': items}]


def generate_carpenter(registry):
    names = [('utility', 'carpenterUtilityTemplates', 1, 1, 1, 2),
             ('furniture', 'carpenterFurnitureTemplates', 1, 1, 1, 2),
             ('materials', 'carpenterMaterialTemplates', 2, 3, 2, 3),
             ('sapling', 'carpenterSaplingTemplates', 1, 1, 1, 2),
             ('axes', 'carpenterAxesTemplates', 1, 1, 1, 2),
             ('sawmills', 'carpenterSawmillTemplates', 1, 1, 1, 1)]
    biomes = _get(registry, 'carpenterBiomes', list)
    woods_by_biome = _get(registry, 'carpenterBiomeWoods', dict)
    templates = {name: _get(registry, key, list) for name, key, *_ in names}
    result = {}
    for biome in biomes:
        if not isinstance(biome, str):
            raise TemplateError('carpenterBiomes must contain strings')
        woods = woods_by_biome.get(biome, [])
        if not isinstance(woods, list):
            raise TemplateError(f'carpenterBiomeWoods.{biome} must be a list')
        content = []
        for name, _, low, high, rolls_low, rolls_high in names:
            group = _group(templates[name], woods, '[WOOD]', name, 100, low, high)
            content.append([group, rolls_low, rolls_high])
        result['carpenter_' + biome] = content
    return result


def generate_shepherd(registry):
    wool_templates = _get(registry, 'shepherdWoolTemplates', list)
    dye_templates = _get(registry, 'shepherdDyeTemplates', list)
    colors_by_biome = _get(registry, 'shepherdBiomeColors', dict)
    biome_list = _get(registry, 'biomeList', list)
    content = []
    for entry in biome_list:
        if not isinstance(entry, list) or len(entry) < 2:
            continue
        biome, condition = entry[:2]
        if not isinstance(biome, str) or not isinstance(condition, dict):
            raise TemplateError(f'invalid shepherd biome entry: {entry!r}')
        colors = colors_by_biome.get(biome, ['white'])
        if not isinstance(colors, list):
            raise TemplateError(f'shepherdBiomeColors.{biome} must be a list')
        wool = _group(wool_templates, colors, '[COLOR]', 'wool', 100, 1, 2, biome=biome, wool=True)
        dye = _group(dye_templates, colors, '[COLOR]', 'dye', 100, 1, 2)
        content.append([wool, 1, 1, deepcopy(condition)])
        content.append([dye, 2, 2, deepcopy(condition)])
    content.append(['shepherdEquipmentGroup', 0, 1])
    content.append(['shepherdMaterialGroup', 1, 2])
    return {'village_shepherd_content': content}


def generate_all(registry):
    result = generate_carpenter(registry)
    result.update(generate_shepherd(registry))
    for key in result:
        if key in registry:
            raise TemplateError(f'generated key collides with source registry: {key}')
    return result
