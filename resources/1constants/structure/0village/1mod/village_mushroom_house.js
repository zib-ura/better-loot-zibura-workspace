// =================================================================
// 战利品表定义区域
// =================================================================

const village_mushroom_base_crops = [
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

const village_mushroom_other_crops = [
    {
        groupName: "common",
        groupWeight: 80, 
        min: 2,  max: 3,
        items: [
            // --- 红蘑菇 Red Mushroom 系列 (有作物、箱子，无种子) ---
            { reference: "lootjs:red_mushroom", ratio: 15 },
            { reference: "lootjs:red_mushroom_and_red_mushroom_block", ratio: 10 },

            // --- 棕蘑菇 Brown Mushroom 系列 (有作物、箱子，无种子) ---
            { reference: "lootjs:brown_mushroom", ratio: 15 },
            { reference: "lootjs:brown_mushroom_and_brown_mushroom_block", ratio: 10 },
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

const village_mushroom_essential_wealth_equipment = [
    {
        groupName: "Villager Daily Essentials",
        groupWeight: 30, 
        min: 2, max: 3,
        items: [
            { id: "minecraft:lantern", ratio: 10 },
            { id: "minecraft:charcoal", ratio: 10 },
            { id: "minecraft:glass_bottle", ratio: 10 },
            { id: "minecraft:bowl", ratio: 10 },
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

const village_mushroom_dish = [
    {
        groupName: "common",
        groupWeight: 35,
        min: 1, max: 2,
        items: [
            { id: "minecraft:mushroom_stew", ratio: 10 },
            { id: "barbequesdelight:grilled_mushroom_skewer", ratio: 10 },
            { id: "vanillacookbook:mushroom_scrambled_eggs", ratio: 10 },
            { id: "kaleidoscope_cookery:chicken_and_mushroom_stew", ratio: 10 },
            { id: "kaleidoscope_cookery:wild_mushroom_rabbit_soup", ratio: 10 },
            { id: "youkaisfeasts:mushroom_soup", ratio: 10 },
            { id: "farmersdelight:bone_broth", ratio: 10 },

        ]
    },

    {
        groupName: "special",
        groupWeight: 15, 
        min: 1, max: 2,
        items: [
            { id: "rusticdelight:fried_mushrooms", ratio: 10 },            
            { id: "farmersdelight:mushroom_rice", ratio: 10 },            
            { id: "kaleidoscope_cookery:brown_mushroom_pot_soup", ratio: 10 },            
            { id: "kaleidoscope_cookery:red_mushroom_pot_soup", ratio: 10 },            
      
        ]
    },
]

const village_mushroom_drinks = [
    {
        groupName: "drinks",
        groupWeight: 50,
        min: 1, max: 2,
        items: [
            { id: "minecraft:potion", ratio: 10 , potion: "minecraft:water" }, 

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
// 事件注册区域
// =================================================================
const village_mushroom_house_content = [
    [village_profession_item, 1, 1],
    [village_mushroom_base_crops, 1, 1],
    [village_mushroom_other_crops, 1, 1],
    [village_mushroom_dish, 1, 1],
    [village_mushroom_essential_wealth_equipment, 1, 1],
    [village_cooking_equipment_less, 1, 1],
    [village_mushroom_drinks, 1, 1],

];

const loot_village_mushroom_house = [
    [village_mushroom_house_content, 1],
];