// =================================================================
// 战利品表定义区域
// =================================================================

const village_underground_base_crops = [
    {
        groupName: "base_crops",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:glowberry_seeds", ratio: 5 },
            { reference: "lootjs:glowberry", ratio: 10 },
            { reference: "lootjs:glowberry_and_glowberry_block", ratio: 10 },


        ]
    },
    {
        groupName: "rare_crops",
        groupWeight: 20, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat", ratio: 20 },
            { reference: "lootjs:wheat_seeds", ratio: 5 },
            { reference: "lootjs:potato", ratio: 25 },
            { reference: "lootjs:carrot", ratio: 25 },
            { reference: "lootjs:beetroot", ratio: 20 },
            { reference: "lootjs:beetroot_seeds", ratio: 5 },
            { reference: "lootjs:onion", ratio: 25 },
            { reference: "lootjs:cabbage_seeds", ratio: 5 },
            { reference: "lootjs:cabbage", ratio: 20 },
            { reference: "lootjs:lettuce_seeds", ratio: 5 },
            { reference: "lootjs:lettuce", ratio: 20 },
        ]
    },
]

const village_underground_essential_wealth_equipment = [
    {
        groupName: "Villager Daily Essentials",
        groupWeight: 30, 
        min: 2, max: 3,
        items: [
            // --- Household Utilities ---
            { id: "minecraft:glass_bottle", ratio: 10 },
            { id: "minecraft:bowl", ratio: 10 },
            { id: "minecraft:barrel", ratio: 10 },      // 木桶
            { id: "minecraft:string", ratio: 10 },      // 线（缝补或织网）
            { id: "minecraft:coal", ratio: 10 },        // 煤炭
            // --- Light Sources & Storage ---
            { id: "minecraft:torch", ratio: 10 },       // 火把
            { id: "minecraft:lantern", ratio: 10 },     // 灯笼
        ]
    },

    {
        groupName: "Village Wealth",
        groupWeight: 30,
        min: 3, max: 4,
        items: [
            { id: "minecraft:emerald", ratio: 20 },
            { id: "minecraft:iron_ingot", ratio: 12 }, 
            { id: "minecraft:gold_ingot", ratio: 8 },  

        ]
    },

    {
        groupName: "Equipment",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            // --- Vanilla Tools & Equipment ---
            { id: "minecraft:iron_pickaxe", ratio: 10 }, // 铁镐（地底必备）
            { id: "minecraft:iron_shovel", ratio: 10 },  // 铁锹
            { id: "minecraft:iron_hoe", ratio: 10 },     // 铁锄
            { id: "minecraft:shears", ratio: 10 },      // 剪刀
            { id: "minecraft:compass", ratio: 10 },       // 指南针
            { id: "minecraft:clock", ratio: 10 },         // 时钟（地底难辨日夜）
        ]
    },
]

const village_underground_dish = [
    {
        groupName: "common",
        groupWeight: 70,
        min: 1, max: 2,
        items: [
            { id: "minecraft:bread", ratio: 10 },
            { id: "minecraft:baked_potato", ratio: 10 }, 
            { id: "minecraft:beetroot_soup", ratio: 10 },   
            { reference: "lootjs:glowberry_jam", ratio: 10 },
            { id: "vanillacookbook:miners_salad", ratio: 10 },
            { id: "farmersdelight:bone_broth", ratio: 10 },
            { id: "kaleidoscope_cookery:fondant_spider_eye", ratio: 10 },
            { id: "kaleidoscope_cookery:pork_bone_soup", ratio: 10 },


        ]
    },

    {
        groupName: "special",
        groupWeight: 30, 
        min: 1, max: 2,
        items: [
            { id: "kitchenkarrot:shiny_pizza_slice", ratio: 5 },
            { id: "farmersdelight:onion_soup", ratio: 10 },
            { id: "farmersdelight:vegetable_soup", ratio: 10 },

        ]
    },
]

const village_underground_drinks = [
    {
        groupName: "drinks",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "minecraft:potion", ratio: 15, potion: "minecraft:water" }, 

        ]
    },
    {   
        groupName: "empty",
        groupWeight: 50, 
        items: [
            { id: "empty"},
        ]
    },
]

const village_underground_crate_of_hardtack = [
    {
        groupName: "crate_of_hardtack",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "rationcraft:crate_of_hardtack", ratio: 10 }
        ]
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
]
// =================================================================
// 事件注册区域
// =================================================================
const village_underground_house_content = [
    [village_profession_item, 1, 1],
    [village_underground_base_crops, 1, 1],
    [village_underground_dish, 1, 1],
    [village_underground_essential_wealth_equipment, 1, 1],
    [village_cooking_equipment_less, 1, 1],
    [village_underground_drinks, 1, 1],
    [village_underground_crate_of_hardtack, 1, 1],
];

const loot_village_underground_house = [
    [village_underground_house_content, 1],
];