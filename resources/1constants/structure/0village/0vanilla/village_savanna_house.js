// =================================================================
// 战利品表定义区域（已按比例与组合规则重构）
// =================================================================

const village_savanna_base_crops = [
    {
        groupName: "base_crops",
        groupWeight: 100, 
        min: 2,  max: 3,
        items: [
            { reference: "lootjs:wheat_seeds", ratio: 5 },
            { reference: "lootjs:wheat", ratio: 10 },
            { reference: "lootjs:wheat_and_wheat_block", ratio: 10 },

            { reference: "lootjs:corn_seeds", ratio: 5 },
            { reference: "lootjs:corn", ratio: 10 },
            { reference: "lootjs:corn_and_corn_block", ratio: 10 },
        ]
    }
];

const village_savanna_other_crops = [
    {
        groupName: "savanna special",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:melon_seeds", ratio: 5 },
            { reference: "lootjs:melon_slice", ratio: 20 },

            { reference: "lootjs:bell_pepper_seeds", ratio: 5 },           
            { reference: "lootjs:bell_pepper_yellow", ratio: 7 },
            { reference: "lootjs:bell_pepper_red", ratio: 7 },
            { reference: "lootjs:bell_pepper_green", ratio: 6 },

            { reference: "lootjs:zucchini_seeds", ratio: 5 },
            { reference: "lootjs:zucchini", ratio: 20 },

            { reference: "lootjs:vanilla_pods", ratio: 25 },
        ]
    },
    {
        groupName: "other",
        groupWeight: 20,
        min: 2,  max: 3,
        items: [
            { reference: "lootjs:carrot", ratio: 25 },

            { reference: "lootjs:potato", ratio: 25 },

            { reference: "lootjs:tomato", ratio: 20 },
            { reference: "lootjs:tomato_seeds", ratio: 5 },

            { reference: "lootjs:onion", ratio: 25 },

            { reference: "lootjs:cabbage", ratio: 20 },
            { reference: "lootjs:cabbage_seeds", ratio: 5 },

            { reference: "lootjs:lettuce", ratio: 20 },
            { reference: "lootjs:lettuce_seeds", ratio: 5 },

            { reference: "lootjs:rice", ratio: 25 },
            
            { reference: "lootjs:pepper_seeds", ratio: 5 },
            { reference: "lootjs:pepper", ratio: 20 },

            { reference: "lootjs:garlic_clove", ratio: 5 },  
            { reference: "lootjs:garlic", ratio: 20 },
        ]
    }
];
const village_savanna_essential_wealth_equipment = [

    {
        groupName: "Villager Daily Essentials",
        groupWeight: 30, 
        min: 2, max: 3,
        items: [
            // --- Household Utilities ---
            { id: "minecraft:lantern", ratio: 10 },
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

// savanna crops
const savanna_seed_type = [
// base_crops
    "wheat_seeds",
    "corn_seeds",

// savanna special
    "melon_seeds",
    "bell_pepper_seeds",
    "zucchini_seeds",
    "vanilla_pods",

// other
    "carrot",
    "potato",
    "tomato_seeds",
    "onion",
    "cabbage_seeds",
    "lettuce_seeds",
    "rice",
    "pepper_seeds",
    "garlic_clove",
    // "egg"
];

const village_savanna_seed_bag = [
    {
        groupName: "bundle",
        groupWeight: 50, 
        min: 1, max: 1,
        items: getSeedBagConfig("minecraft:bundle", savanna_seed_type, 2)
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
];

const village_savanna_dish_common = [

    { id: "minecraft:bread", ratio: 10 },

    // 原生/烤制玉米主食
    { id: "corn_delight:tortilla", ratio: 10 },
    { id: "corn_delight:grilled_corn", ratio: 10 },
    { id: "corn_delight:boiled_corn", ratio: 10 },
    { id: "farm_and_charm:roasted_corn", ratio: 10 },
    { id: "culturaldelights:elote", ratio: 10 },             // 街头烤玉米
    { id: "culturaldelights:smoked_corn", ratio: 10 },
    { id: "culturaldelights:empanada", ratio: 10 },          // 热带/干燥地区肉馅饼

    // 热带草原适合饲养与烤制的肉类（牛、羊、鸡）
    { id: "minecraft:cooked_beef", ratio: 10 },
    { id: "minecraft:cooked_mutton", ratio: 10 },
    { id: "minecraft:cooked_chicken", ratio: 10 },

    { id: "alexsmobsdelight:kangaroo_meat_stew", ratio: 10 },
    { id: "alexsmobsdelight:braised_kangaroo_meatballs", ratio: 10 },

]

const village_savanna_dish_special = [
    // 传统热带草原/美洲热带卷饼与特色炖菜
    { id: "veggiesdelight:chicken_fajitas_wrap", ratio: 10 },
    { id: "corn_delight:taco", ratio: 10 },
    { id: "culturaldelights:fish_taco", ratio: 10 },
    { id: "culturaldelights:chicken_taco", ratio: 10 },
    { id: "culturaldelights:beef_burrito", ratio: 10 },
    { id: "vintagedelight:stuffed_burrito", ratio: 10 },
    // { id: "farmersdelight:mutton_wrap", ratio: 10 },
    { id: "corn_delight:nachos_bowl", ratio: 10 },
    { id: "alexsmobsdelight:gravy_kangaroo_meat", ratio: 10 },
    { id: "alexsmobsdelight:handtorn_emu_meat_with_rice", ratio: 10 },
    { id: "alexsmobsdelight:savanna_fried_rice", ratio: 10 },
    { id: "alexsmobsdelight:plate_of_beggars_emu", ratio: 10 },
]

const village_savanna_dish = [
    {
        groupName: "common",
        groupWeight: 70,
        min: 1, max: 2,
        items: village_savanna_dish_common
    },

    {
        groupName: "special",
        groupWeight: 30, 
        min: 1, max: 2,
        items: village_savanna_dish_special
    },
]

const village_savanna_drinks = [
    {
        groupName: "corn",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "minecraft:potion", ratio: 5 , potion: "minecraft:water" }, 

            { id: "corn_delight:creamy_corn_drink", ratio: 10 },

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

const village_savanna_house_content = [
    [village_profession_item, 1, 1],
    [village_savanna_base_crops, 1, 1],
    [village_savanna_other_crops, 1, 1],
    [village_savanna_seed_bag, 1, 1],
    [village_savanna_dish, 1, 1],
    [village_savanna_essential_wealth_equipment, 1, 1],
    [village_cooking_equipment_less, 1, 1],
    [village_savanna_drinks, 1, 1],

];

const loot_village_savanna_house = [
    [village_savanna_house_content, 9],
    [carpenterData.savanna, 1], 
];