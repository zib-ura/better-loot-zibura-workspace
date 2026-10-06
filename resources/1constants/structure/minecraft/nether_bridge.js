const nether_fortress_material = [

    {
        groupName: "netherrack",
        groupWeight: 20,
        min: 2, max: 3,
        items: [
            { id: "minecraft:netherrack", ratio: 10 },
            { id: "minecraft:nether_bricks", ratio: 10 },
            { id: "minecraft:nether_brick", ratio: 10 }, 
            { id: "minecraft:chiseled_nether_bricks", ratio: 10 },
            { id: "minecraft:red_nether_bricks", ratio: 10 },
            { id: "minecraft:cracked_nether_bricks", ratio: 10 },
        ]
    },
];


// 1. 地狱荒地群系 (Nether Wastes)
const nether_wastes_blocks = [
    {
        groupName: "netherrack",
        groupWeight: 20,
        min: 2, max: 3,
        items: [
            { id: "minecraft:netherrack", ratio: 10 },
    //         { id: "minecraft:nether_bricks", ratio: 10 },
    //         { id: "minecraft:nether_brick", ratio: 10 }, 
    //         { id: "minecraft:chiseled_nether_bricks", ratio: 10 },
    //         { id: "minecraft:red_nether_bricks", ratio: 10 },
    //         { id: "minecraft:cracked_nether_bricks", ratio: 10 },
    //     ]
    // },
    // {
    //     groupName: "wastes_naturals",
    //     groupWeight: 8,
    //     min: 1, max: 2,
    //     items: [
            { id: "minecraft:glowstone", ratio: 5 },       // 荧石
            // { id: "minecraft:magma_block", ratio: 8 },     // 岩浆块
            // { id: "minecraft:brown_mushroom", ratio: 3 },  // 棕蘑菇
            // { id: "minecraft:red_mushroom", ratio: 3 }  ,   // 红蘑菇
        ]
    },
];

// 2. 猩红森林群系 (Crimson Forest)
const crimson_forest_blocks = [
    {
        groupName: "crimson_vegetation_and_stems",
        groupWeight: 12,
        min: 2, max: 3,
        items: [
            { id: "minecraft:crimson_nylium", ratio: 10 },
            // { id: "minecraft:crimson_fungus", ratio: 8 },
            // { id: "minecraft:crimson_roots", ratio: 8 },
            // { id: "minecraft:weeping_vines", ratio: 5 },
            { id: "minecraft:crimson_stem", ratio: 10 },
            // { id: "minecraft:stripped_crimson_stem", ratio: 5 },
            { id: "minecraft:nether_wart_block", ratio: 10 },
            { id: "minecraft:shroomlight", ratio: 4 },

            { id: "minecraft:netherrack", ratio: 10 },

        ]
    },
];

// 3. 诡异森林群系 (Warped Forest)
const warped_forest_blocks = [
    {
        groupName: "warped_vegetation_and_stems",
        groupWeight: 12,
        min: 2, max: 3,
        items: [
            { id: "minecraft:warped_nylium", ratio: 10 },
            // { id: "minecraft:warped_fungus", ratio: 8 },
            // { id: "minecraft:warped_roots", ratio: 8 },
            // { id: "minecraft:nether_sprouts", ratio: 8 },
            // { id: "minecraft:twisting_vines", ratio: 5 },
            { id: "minecraft:warped_stem", ratio: 10 },
            // { id: "minecraft:stripped_warped_stem", ratio: 5 },
            { id: "minecraft:warped_wart_block", ratio: 10 },
            { id: "minecraft:shroomlight", ratio: 5 },

            { id: "minecraft:netherrack", ratio: 10 },

        ]
    },
];

// 4. 灵魂沙峡谷群系 (Soul Sand Valley)
const soul_sand_valley_blocks = [
    {
        groupName: "soul_ground",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "minecraft:soul_sand", ratio: 10 },
            { id: "minecraft:soul_soil", ratio: 10 },
    //     ]
    // },
    // {
    //     groupName: "valley_organic_and_light",
    //     groupWeight: 8,
    //     min: 1, max: 2,
    //     items: [
            { id: "minecraft:bone_block", ratio: 8 },
            // { id: "minecraft:glowstone", ratio: 10 },
        ]
    },
];

// 5. 玄武岩废丘群系 (Basalt Deltas)
const basalt_deltas_blocks = [
    {
        groupName: "basalt_and_blackstone",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "minecraft:basalt", ratio: 10 },
            // { id: "minecraft:polished_basalt", ratio: 10 },
            // { id: "minecraft:smooth_basalt", ratio: 10 },
            { id: "minecraft:blackstone", ratio: 10 },
            // { id: "minecraft:polished_blackstone", ratio: 10 },
            // { id: "minecraft:polished_blackstone_bricks", ratio: 10 },
            // { id: "minecraft:chiseled_polished_blackstone", ratio: 5 },
            // { id: "minecraft:gilded_blackstone", ratio: 2 },
        ]
    },
    // {
    //     groupName: "deltas_hazards",
    //     groupWeight: 8,
    //     min: 1, max: 2,
    //     items: [
    //         { id: "minecraft:magma_block", ratio: 10 },
    //     ]
    // }
];



// 主世界所有石头与岩石类方块
// const overworld_stone_material = [
//     // {
//     //     groupName: "Common Stone", // 常见基础石头
//     //     groupWeight: 40,
//     //     min: 3, max: 4,
//     //     items: [
//     //         { id: "minecraft:stone", ratio: 30 },
//     //         { id: "minecraft:cobblestone", ratio: 40 },
//     //         { id: "minecraft:smooth_stone", ratio: 15 },
//     //         { id: "minecraft:stone_bricks", ratio: 15 },
//     //         // { id: "minecraft:mossy_cobblestone", ratio: 10 },
//     //         // { id: "minecraft:mossy_stone_bricks", ratio: 10 },
//     //         // { id: "minecraft:cracked_stone_bricks", ratio: 10 },
//     //         // { id: "minecraft:chiseled_stone_bricks", ratio: 5 },
//     //     ]
//     // },
//     {
//         groupName: "Deepslate Family", // 深瓦岩系列
//         groupWeight: 30,
//         min: 2, max: 3,
//         items: [
//             { id: "minecraft:deepslate", ratio: 20 },
//             { id: "minecraft:cobbled_deepslate", ratio: 35 },
//             { id: "minecraft:polished_deepslate", ratio: 15 },
//             { id: "minecraft:deepslate_bricks", ratio: 15 },
//             { id: "minecraft:deepslate_tiles", ratio: 15 },
//             // { id: "minecraft:chiseled_deepslate", ratio: 5 },
//             // { id: "minecraft:reinforced_deepslate", ratio: 1 },
//         ]
//     },
//     {
//         groupName: "Igneous Stones", // 常见三大变种石
//         groupWeight: 20,
//         min: 2, max: 3,
//         items: [
//             { id: "minecraft:granite", ratio: 20 },      // 花岗岩
//             { id: "minecraft:diorite", ratio: 20 },      // 闪长岩
//             { id: "minecraft:andesite", ratio: 20 },     // 安山岩
//             { id: "minecraft:polished_granite", ratio: 10 },
//             { id: "minecraft:polished_diorite", ratio: 10 },
//             { id: "minecraft:polished_andesite", ratio: 10 },
//         ]
//     },
//     {
//         groupName: "Special & Sedimentary Stones", // 特殊与沉积类石头
//         groupWeight: 10,
//         min: 1, max: 2,
//         items: [
//             { id: "minecraft:dripstone_block", ratio: 25 }, // 滴水石块
//             { id: "minecraft:tuff", ratio: 25 },            // 凝灰岩
//             { id: "minecraft:calcite", ratio: 20 },         // 方解石
//             { id: "minecraft:sandstone", ratio: 15 },       // 砂岩
//             { id: "minecraft:red_sandstone", ratio: 15 },   // 红砂岩
//             // { id: "minecraft:smooth_sandstone", ratio: 10 },
//             // { id: "minecraft:chiseled_sandstone", ratio: 5 },
//         ]
//     },
//     {
//         groupName: "empty",
//         groupWeight: 50,
//         items: [
//             { id: "empty" },
//         ]
//     },
// // ];

// // 铁制装备、工具与武器
const iron_equipment_material = [
    {
        groupName: "Iron Tools & Weapons", // 铁制工具与武器
        groupWeight: 40,
        min: 1, max: 1, damage: [0.2, 0.3],
        items: [
            { id: "minecraft:iron_sword", ratio: 20 },
            { id: "minecraft:iron_pickaxe", ratio: 20 },
            { id: "minecraft:iron_axe", ratio: 20 },
            { id: "minecraft:iron_shovel", ratio: 20 },
            { id: "minecraft:iron_hoe", ratio: 10 }, // 原版其他工具(剑,镐,斧,锹)平均权重22.5，此处保留为 10（约一半）
            { id: "minecraft:shears", ratio: 10 }, // 剪刀
            { id: "minecraft:flint_and_steel", ratio: 10 }, // 打火石
        ]
    },
    // {
    //     groupName: "Stone Tools & Weapons", // 石质工具与武器
    //     groupWeight: 40,
    //     min: 1, max: 1, damage: [0.2, 0.3],
    //     items: [
    //         { id: "minecraft:stone_sword", ratio: 20 },
    //         { id: "minecraft:stone_pickaxe", ratio: 20 },
    //         { id: "minecraft:stone_axe", ratio: 20 },
    //         { id: "minecraft:stone_shovel", ratio: 20 },
    //         { id: "minecraft:stone_hoe", ratio: 10 },
    //     ]
    // },
    
    {
        groupName: "Iron Armor", // 铁制盔甲
        groupWeight: 40,
        min: 1, max: 1, damage: [0.2, 0.3],
        items: [
            { id: "immersive_armors:warrior_helmet", ratio: 10 },
            { id: "immersive_armors:warrior_chestplate", ratio: 10 },
            { id: "immersive_armors:warrior_leggings", ratio: 10 },
            { id: "immersive_armors:warrior_boots", ratio: 10 },

            { id: "minecraft:iron_helmet", ratio: 10 },
            { id: "minecraft:iron_chestplate", ratio: 10 },
            { id: "minecraft:iron_leggings", ratio: 10 },
            { id: "minecraft:iron_boots", ratio: 10 },

            { id: "minecraft:chainmail_helmet", ratio: 10 },
            { id: "minecraft:chainmail_chestplate", ratio: 10 },
            { id: "minecraft:chainmail_leggings", ratio: 10 },
            { id: "minecraft:chainmail_boots", ratio: 10 },

            { id: "immersive_armors:heavy_helmet", ratio: 10 },
            { id: "immersive_armors:heavy_chestplate", ratio: 10 },
            { id: "immersive_armors:heavy_leggings", ratio: 10 },
            { id: "immersive_armors:heavy_boots", ratio: 10 },
        ]
    },
    {
        groupName: "Iron Horse Armor & Shields", // 铁马铠与盾牌
        groupWeight: 10,
        min: 1, max: 1, damage: [0.2, 0.3],
        items: [
            { id: "minecraft:iron_horse_armor", ratio: 30 },
            { id: "minecraft:shield", ratio: 60 },
            { id: "minecraft:saddle", ratio: 10 },

        ]
    },
    {
        groupName: "Diamond Items", // 钻石类物品
        groupWeight: 10,
        min: 1, max: 1, damage: [0.2, 0.3],
        items: [
            { id: "minecraft:diamond", ratio: 50 },

            // --- 钻石工具与武器 (Diamond Tools & Weapons - Ratio Total: 55) ---
            { id: "minecraft:diamond_sword", ratio: 15 },
            { id: "minecraft:diamond_pickaxe", ratio: 12 },
            { id: "minecraft:diamond_axe", ratio: 10 },
            { id: "minecraft:diamond_shovel", ratio: 10 },
            { id: "minecraft:diamond_hoe", ratio: 8 },

            // --- 钻石盔甲 (Diamond Armor - Ratio Total: 40) ---
            { id: "minecraft:diamond_chestplate", ratio: 13 },
            { id: "minecraft:diamond_leggings", ratio: 11 },
            { id: "minecraft:diamond_helmet", ratio: 8 },
            { id: "minecraft:diamond_boots", ratio: 8 },

            // --- 其他钻石物品 (Other Diamond Items - Ratio Total: 5) ---
            { id: "minecraft:diamond_horse_armor", ratio: 5 }
        ]
    },
    // {
    //     groupName: "empty",
    //     groupWeight: 50,
    //     items: [
    //         { id: "empty" },
    //     ]
    // },
];

const nether_bridge_smithing_templates_common = [
    {
        groupName: "Smithing Templates",
        groupWeight: 25,  
        min: 1, max: 1,
        items: [
            { id: "minecraft:rib_armor_trim_smithing_template", ratio: 10 },
        ]
    },

    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
];


// =================================================================
// 事件注册区域
// =================================================================
const nether_bridge_content = [
    [nether_fortress_material, 2, 3],
    // [overworld_stone_material, 2, 3],
    [iron_equipment_material, 2, 3],
    [nether_bridge_smithing_templates_common, 1, 1],
    [nether_wastes_blocks, 1, 2, { matchBiome: "minecraft:nether_wastes" }],
    [crimson_forest_blocks, 1, 2, { matchBiome: "minecraft:crimson_forest" }],
    [warped_forest_blocks, 1, 2, { matchBiome: "minecraft:warped_forest" }],
    [soul_sand_valley_blocks, 1, 2, { matchBiome: "minecraft:soul_sand_valley" }],
    [basalt_deltas_blocks, 1, 2, { matchBiome: "minecraft:basalt_deltas" }],
];

const loot_nether_bridge = [
    [nether_bridge_content, 1],
];