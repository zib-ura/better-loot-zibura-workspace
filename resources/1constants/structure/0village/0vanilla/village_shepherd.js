// 颜色相关物品模板；无颜色的 painting 只在每个羊毛组添加一次。
const shepherdWoolColorTemplates = [
    { id: "minecraft:{color}_banner", ratio: 10 },
    { id: "minecraft:{color}_carpet", ratio: 10 },
    { id: "supplementaries:bunting_{color}", ratio: 10 },
    { id: "supplementaries:flag_{color}", ratio: 10 },
    { id: "minecraft:painting", ratio: 10 },
    // { id: "minecraft:{color}_bed", ratio: 10 },
];

const shepherdDyeTemplates = [
    { id: "minecraft:{color}_dye", ratio: 10 }
];

const shepherdWoolGroupTemplate = [
    { groupName: "wool", groupWeight: 100, min: 1, max: 2, items: [
            { template: "shepherdWoolColorTemplates", param: { color: "village_{biome}_colors" } },
        ] }
];

const shepherdPlainsWoolGroupTemplate = [
    { groupName: "wool", groupWeight: 100, min: 1, max: 2, items: [
            { template: "shepherdWoolColorTemplates", param: { color: "village_{biome}_colors" } },
            // { id: "brewery:patterned_wool", ratio: 10 },
            { id: "brewery:patterned_carpet", ratio: 10 }
        ] }
];

const shepherdDyeGroupTemplate = [
    { groupName: "dye", groupWeight: 100, min: 1, max: 2, items: [
            { template: "shepherdDyeTemplates", param: { color: "village_{biome}_colors" } }
        ] }
];


const village_shepherd_regular_biomes = [
    "desert", "savanna", "taiga", "snowy",
    "badlands", "beach", "cherry", "dark_forest",
    "jungle", "mushroom", "ocean", "swamp"
];

// 入口数组的 template + output 会触发 Java 递归展开。
const village_shepherd_generated_groups = [
    {
        template: "shepherdPlainsWoolGroupTemplate",
        param: { biome: ["plains"] },
        output: "village_{biome}_shepherd_wool"
    },
    {
        template: "shepherdWoolGroupTemplate",
        param: { biome: "village_shepherd_regular_biomes" },
        output: "village_{biome}_shepherd_wool"
    },
    {
        template: "shepherdDyeGroupTemplate",
        param: { biome: "village_biomes" },
        output: "village_{biome}_shepherd_dye"
    }
];

// 共享装备与材料组（保留原配置）。
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

// 仅包含存在 village_*_house.js 的地表群系；有标签优先使用标签。
const village_shepherd_content = [
    ["village_plains_shepherd_wool", 1, 1, { matchBiome: "#minecraft:has_structure/village_plains" }],
    ["village_plains_shepherd_dye", 2, 2, { matchBiome: "#minecraft:has_structure/village_plains" }],
    ["village_desert_shepherd_wool", 1, 1, { matchBiome: "#minecraft:has_structure/village_desert" }],
    ["village_desert_shepherd_dye", 2, 2, { matchBiome: "#minecraft:has_structure/village_desert" }],
    ["village_savanna_shepherd_wool", 1, 1, { matchBiome: "#minecraft:has_structure/village_savanna" }],
    ["village_savanna_shepherd_dye", 2, 2, { matchBiome: "#minecraft:has_structure/village_savanna" }],
    ["village_taiga_shepherd_wool", 1, 1, { matchBiome: "#minecraft:has_structure/village_taiga" }],
    ["village_taiga_shepherd_dye", 2, 2, { matchBiome: "#minecraft:has_structure/village_taiga" }],
    ["village_snowy_shepherd_wool", 1, 1, { matchBiome: "#minecraft:has_structure/village_snowy" }],
    ["village_snowy_shepherd_dye", 2, 2, { matchBiome: "#minecraft:has_structure/village_snowy" }],
    ["village_badlands_shepherd_wool", 1, 1, { matchBiome: "#minecraft:is_badlands" }],
    ["village_badlands_shepherd_dye", 2, 2, { matchBiome: "#minecraft:is_badlands" }],
    ["village_beach_shepherd_wool", 1, 1, { matchBiome: "#minecraft:is_beach" }],
    ["village_beach_shepherd_dye", 2, 2, { matchBiome: "#minecraft:is_beach" }],
    ["village_cherry_shepherd_wool", 1, 1, { matchBiome: "minecraft:cherry_grove" }],
    ["village_cherry_shepherd_dye", 2, 2, { matchBiome: "minecraft:cherry_grove" }],
    ["village_dark_forest_shepherd_wool", 1, 1, { matchBiome: "minecraft:dark_forest" }],
    ["village_dark_forest_shepherd_dye", 2, 2, { matchBiome: "minecraft:dark_forest" }],
    ["village_jungle_shepherd_wool", 1, 1, { matchBiome: "#minecraft:is_jungle" }],
    ["village_jungle_shepherd_dye", 2, 2, { matchBiome: "#minecraft:is_jungle" }],
    ["village_mushroom_shepherd_wool", 1, 1, { matchBiome: "minecraft:mushroom_fields" }],
    ["village_mushroom_shepherd_dye", 2, 2, { matchBiome: "minecraft:mushroom_fields" }],
    ["village_ocean_shepherd_wool", 1, 1, { matchBiome: "#minecraft:is_ocean" }],
    ["village_ocean_shepherd_dye", 2, 2, { matchBiome: "#minecraft:is_ocean" }],
    ["village_swamp_shepherd_wool", 1, 1, { matchBiome: "minecraft:swamp" }],
    ["village_swamp_shepherd_dye", 2, 2, { matchBiome: "minecraft:swamp" }],
    [shepherdEquipmentGroup, 0, 1],
    [shepherdMaterialGroup, 1, 2]
];

const loot_village_shepherd = [
    [village_shepherd_content, 1]
];
