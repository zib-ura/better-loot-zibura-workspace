// =================================================================
// 战利品表定义区域
// =================================================================

const village_dark_forest_base_crops = [
    {
        groupName: "base_crops",
        groupWeight: 80, 
        min: 2,  max: 3,
        items: [
            { reference: "lootjs:wheat_seeds", ratio: 5 },
            { reference: "lootjs:wheat", ratio: 10 },
            { reference: "lootjs:wheat_and_wheat_block", ratio: 10 },

            { reference: "lootjs:potato", ratio: 15 },
            { reference: "lootjs:potato_and_potato_block", ratio: 10 },

        ]
    }
];

const village_dark_forest_other_crops = [
    {
        groupName: "common",
        groupWeight: 80, 
        min: 2,  max: 3,
        items: [
            { reference: "lootjs:apple", ratio: 15 },
            { reference: "lootjs:apple_and_apple_block", ratio: 10 },

            // --- 红蘑菇 Red Mushroom 系列 (有作物、箱子，无种子) ---
            { reference: "lootjs:red_mushroom", ratio: 15 },
            { reference: "lootjs:red_mushroom_and_red_mushroom_block", ratio: 10 },

            // --- 棕蘑菇 Brown Mushroom 系列 (有作物、箱子，无种子) ---
            { reference: "lootjs:brown_mushroom", ratio: 15 },
            { reference: "lootjs:brown_mushroom_and_brown_mushroom_block", ratio: 10 },

            { reference: "lootjs:gearo_berry_and_gearo_berry_block", ratio: 25 },
            { reference: "lootjs:cranberry_and_cranberry_block", ratio: 25 },
        ]
    },

    {
        groupName: "rare",
        groupWeight: 20, 
        min: 2,  max: 3,
        items: [
            // --- 胡萝卜 Carrot 系列 (仅作物，总权重 25) ---
            { reference: "lootjs:carrot", ratio: 25 },

            // --- 番茄 Tomato 系列 (作物+种子，总权重 25) ---
            { reference: "lootjs:tomato", ratio: 20 },
            { reference: "lootjs:tomato_seeds", ratio: 5 },

            // --- 洋葱 Onion 系列 (仅作物，总权重 25) ---
            { reference: "lootjs:onion", ratio: 25 },

            // --- 卷心菜 Cabbage 系列 (作物+种子，总权重 25) ---
            { reference: "lootjs:cabbage", ratio: 20 },
            { reference: "lootjs:cabbage_seeds", ratio: 5 },

            // --- 生菜 Lettuce 系列 (作物+种子，总权重 25) ---
            { reference: "lootjs:lettuce", ratio: 20 },
            { reference: "lootjs:lettuce_seeds", ratio: 5 },

            { reference: "lootjs:egg", ratio: 25 },

        ]
    },
];

const village_dark_forest_essential_wealth_equipment = [
    {
        groupName: "Villager Daily Essentials",
        groupWeight: 30, 
        min: 2, max: 3,
        items: [
            { id: "minecraft:lantern", ratio: 10 },
            { id: "minecraft:charcoal", ratio: 10 },
            { id: "minecraft:glass_bottle", ratio: 10 },
            { id: "minecraft:bowl", ratio: 10 },
            { id: "farm_and_charm:rope", ratio: 10 },    
            { id: "supplementaries:sack", ratio: 10 },       
            { id: "farmersdelight:wooden_basket", ratio: 10 },       
            { id: "kaleidoscope_cookery:fruit_basket", ratio: 10 },  
        ]
    },

    {
        groupName: "Village Wealth",
        groupWeight: 15,
        min: 3, max: 4,
        items: [
            { id: "minecraft:emerald", ratio: 20 },

        ]
    },
]

const village_dark_forest_dish = [
    {
        groupName: "common",
        groupWeight: 70,
        min: 1, max: 2,
        items: [

            { id: "minecraft:bread", ratio: 10 },

            { id: "minecraft:mushroom_stew", ratio: 10 },
            { id: "vanillacookbook:mushroom_scrambled_eggs", ratio: 10 },
            { id: "youkaisfeasts:mushroom_soup", ratio: 10 },
            { id: "farmersdelight:bone_broth", ratio: 10 },
            { id: "rusticdelight:fried_mushrooms", ratio: 10 },    

            { id: "minecraft:cooked_beef", ratio: 10 },       // 牛排
            { id: "minecraft:cooked_porkchop", ratio: 10 },   // 熟猪排
            { id: "minecraft:cooked_mutton", ratio: 10 },     // 熟羊肉
            { id: "minecraft:cooked_chicken", ratio: 10 },    // 熟鸡肉


        ]
    },
    {
        groupName: "special",
        groupWeight: 30, 
        min: 1, max: 2,
        items: [
            { id: "minecraft:mushroom_stew", ratio: 1 },

            { id: "kaleidoscope_cookery:brown_mushroom_pot_soup", ratio: 10 },            
            { id: "kaleidoscope_cookery:red_mushroom_pot_soup", ratio: 10 },    
        ]
    },
]

const village_dark_forest_drinks = [
    {
        groupName: "juice",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "minecraft:potion", ratio: 10 , potion: "minecraft:water" }, 

            { id: "vanillacookbook:apple_juice", ratio: 10 },
            { id: "farmersdelight:apple_cider", ratio: 10 },
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



// =================================================================
// 战利品表定义区域 (Village Dark Forest - Bakery Focus)
// =================================================================

const village_dark_forest_bakery_products = [
    // {
    //     groupName: "dark_forest_cakes",
    //     groupWeight: 15,
    //     min: 1, max: 1,
    //     items: [

    //     ]
    // },

    {
        groupName: "dark_forest_tarts_pies",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "bakery:apple_pie", ratio: 10 },
            { id: "farmersdelight:apple_pie", ratio: 10 },
            { id: "vanillacookbook:apple_pie", ratio: 10 },
        
        ]
    },

    {
        groupName: "dark_forest_dessert_teatime_treats_slices",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "bakery:apple_pie_slice", ratio: 10 },
            { id: "farmersdelight:apple_pie_slice", ratio: 10 },
            { id: "bakery:apple_cupcake", ratio: 10 },
            
            { id: "youkaishomecoming:candy_apple", ratio: 10 }, 
            { id: "vanillacookbook:apple_chips", ratio: 10 },
            { id: "vanillacookbook:baked_apple", ratio: 10 },

            { id: "rusticdelight:fruit_beignet", ratio: 10 },
        ]
    },

    {
        groupName: "dark_forest_bread",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "minecraft:bread", ratio: 10 },
        ]
    }
];

const village_dark_forest_bakery_baking_material = [
    {
        groupName: "baking_material",
        groupWeight: 15,
        min: 2, max: 3,
        items: basic_baking_material 
    },

    {
        groupName: "dark_forest_jam",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { reference: "lootjs:apple_jam", ratio: 10 },
            { id: "vintagedelight:gearo_berry_mason_jar", ratio: 10 },
            
        ]
    },
];

// =================================================================
// 事件注册区域
// =================================================================
const village_dark_forest_house_content = [
    [village_profession_item, 1, 1],
    [village_dark_forest_base_crops, 1, 1],
    [village_dark_forest_other_crops, 1, 1],
    [village_dark_forest_dish, 1, 1],
    [village_dark_forest_essential_wealth_equipment, 1, 1],
    [village_cooking_equipment_less, 1, 1],
    [village_dark_forest_drinks, 1, 1],
];

const village_dark_forest_bakery_content = [
    [village_dark_forest_bakery_products, 2, 2],
    [village_dark_forest_bakery_baking_material, 2, 3],
    [village_smith_small_iron_knife, 1, 1],

];

const loot_village_dark_forest_house = [
    [village_dark_forest_house_content, 8],
    [carpenterData.dark_forest, 1], 
    [village_dark_forest_bakery_content, 1],
];