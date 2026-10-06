// ==========================================
// 1. 群系颜色映射表
// ==========================================
const shepherdBiomeColors = {
    desert:       ["white", "green", "cyan", "blue", "lime"],          
    snowy:        ["white", "red", "blue"],                            
    taiga:        ["white", "red", "blue", "purple"],             
    swamp:        ["light_blue", "white"],                                 
    cherry_grove: ["pink", "white"],                          
    jungle:       ["brown", "white"],                                 
    ryb:          ["red", "yellow", "blue", "white"],
    plains:       ["red", "yellow", "blue", "white"],
    ryo:          ["red", "yellow", "orange", "white"],
    other:        ["white"],
};

// ==========================================
// 2. 基础模版
// ==========================================
const shepherdWoolTemplates = [
    { id: "minecraft:[COLOR]_wool", ratio: 10 },
    { id: "minecraft:[COLOR]_banner", ratio: 10 },
    { id: "minecraft:[COLOR]_carpet", ratio: 10 },
    { id: "supplementaries:bunting_[COLOR]", ratio: 10 },
    { id: "supplementaries:flag_[COLOR]", ratio: 10 },
    { id: "minecraft:[COLOR]_bed", ratio: 10, max: 2 },
    { id: "minecraft:painting", ratio: 10 }, 
    // { id: "touhou_little_maid:maid_bed", ratio: 10, max: 1 },
];

const shepherdDyeTemplates = [
    { id: "minecraft:[COLOR]_dye", ratio: 10 }
];

// 工厂函数：直接返回最终所需的 items 数组结构
function buildItems(biomeName, templates) {
    const colors = shepherdBiomeColors[biomeName] || [];
    const items = [];

    colors.forEach(function(color) {
        templates.forEach(function(template) {
            if (template.id.indexOf("[COLOR]") !== -1) {
                items.push(Object.assign({}, template, { id: template.id.replace("[COLOR]", color) }));
            } else {
                items.push(Object.assign({}, template));
            }
        });
    });

    if (biomeName === "plains" && templates === shepherdWoolTemplates) {
        items.push(
            { id: "brewery:patterned_wool", ratio: 10 },
            { id: "brewery:patterned_carpet", ratio: 10 }
        );
    }

    return items;
}

// ==========================================
// 3. 共享装备与材料组
// ==========================================
const shepherdEquipmentGroup = [{
    groupName: "equipment", groupWeight: 20, min: 1, max: 1, damage: [0.2, 0.8],
    items: [
        { id: "minecraft:shears", ratio: 10 },
        { id: "minecraft:lead", ratio: 10 },
        { id: "woodenshears:wooden_shears", ratio: 10 },
    ]
}];

const shepherdMaterialGroup = [{
    groupName: "materials", groupWeight: 20, min: 3, max: 4,
    items: [
        { id: "minecraft:white_wool", ratio: 10 },
        { id: "minecraft:string", ratio: 10 },
    ]
}];

// ==========================================
// 4. 直接组装 village_shepherd_content
// ==========================================
const village_shepherd_content = [];

// 各群系配置列表：[ 群系Key, 匹配条件 ]
const biomeList = [
    ["plains",       { matchBiome: "#minecraft:has_structure/village_plains" }],
    ["desert",       { matchBiome: "#minecraft:has_structure/village_desert" }],
    ["snowy",        { matchBiome: "#minecraft:has_structure/village_snowy" }],
    ["taiga",        { matchBiome: "#minecraft:is_taiga" }],
    ["swamp",        { matchBiome: "minecraft:swamp" }],
    ["cherry_grove", { matchBiome: "minecraft:cherry_grove" }],
    ["jungle",       { matchBiome: "#minecraft:is_jungle" }],
    ["ryb",          { matchBiome: "#better_loot_zibura:shepherd/red_yellow_blue" }],
    ["ryo",          { matchBiome: "#better_loot_zibura:shepherd/red_yellow_orange" }],
    ["other",        { matchBiome: "#better_loot_zibura:shepherd/other" }]
];

// 直接将生成的组推进 village_shepherd_content 数组
biomeList.forEach(function(entry) {
    const biome = entry[0];
    const condition = entry[1];

    // 推入羊毛组
    village_shepherd_content.push([
        [{ groupName: "wool", groupWeight: 100, min: 1, max: 2, items: buildItems(biome, shepherdWoolTemplates) }],
        1, 1, condition
    ]);

    // 推入染料组
    village_shepherd_content.push([
        [{ groupName: "dye", groupWeight: 100, min: 1, max: 2, items: buildItems(biome, shepherdDyeTemplates) }],
        2, 2, condition
    ]);
});

// 追加共享项
village_shepherd_content.push(
    [shepherdEquipmentGroup, 0, 1],
    [shepherdMaterialGroup, 1, 2]
);

// 最终 Loot 表
const loot_village_shepherd = [
    [village_shepherd_content, 1]
];