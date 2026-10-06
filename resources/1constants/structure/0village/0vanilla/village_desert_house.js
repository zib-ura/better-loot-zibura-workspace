// =================================================================
// 战利品表定义区域
// =================================================================

const village_desert_base_crops = [

    {
        groupName: "base_crops",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds", ratio: 5 },
            { reference: "lootjs:wheat", ratio: 10 },
            { reference: "lootjs:wheat_and_wheat_block", ratio: 10 },

        ]
    },
    

]

const village_desert_other_crops = [
    {
        groupName: "desert special",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:barley_seeds", ratio: 5 },
            { reference: "lootjs:barley", ratio: 10 },
            { reference: "lootjs:barley_and_barley_block", ratio: 10 },

            { reference: "lootjs:tomato_seeds", ratio: 5 },
            { reference: "lootjs:tomato", ratio: 10 },
            { reference: "lootjs:tomato_and_tomato_block", ratio: 10 },

            { reference: "lootjs:onion", ratio: 15 },
            { reference: "lootjs:onion_and_onion_block", ratio: 10 },

            { reference: "lootjs:pepper_seeds", ratio: 5 },
            { reference: "lootjs:pepper", ratio: 10 },
            { reference: "lootjs:pepper_and_pepper_block", ratio: 10 },
            
            { reference: "lootjs:black_grape_seeds", ratio: 2 },
            { reference: "lootjs:black_grape", ratio: 6 },

            { reference: "lootjs:white_grape_seeds", ratio: 2 },
            { reference: "lootjs:white_grape", ratio: 6 },

            { reference: "lootjs:red_grape_seeds", ratio: 2 },
            { reference: "lootjs:red_grape", ratio: 7 },

            { id: "kaleidoscope_tavern:grape", ratio: 20 },

            { id: "kaleidoscope_tavern:green_grape", ratio: 5 },

            { id: "kaleidoscope_tavern:grapevine", ratio: 25 },

            { reference: "lootjs:eggplant_seeds", ratio: 5 },
            { reference: "lootjs:eggplant", ratio: 20 },

            // { id: "minecraft:apple", ratio: 25 },
            
            { reference: "lootjs:melon_seeds", ratio: 5 },
            { reference: "lootjs:melon", ratio: 20 },

            { reference: "lootjs:hamimelon_seeds", ratio: 5 },
            { reference: "lootjs:hamimelon", ratio: 20 },

            { reference: "lootjs:chickpea", ratio: 25 },
            
            { reference: "lootjs:date_sapling", ratio: 5 },
            { reference: "lootjs:date", ratio: 20 },


            { reference: "lootjs:zucchini_seeds", ratio: 5 },
            { reference: "lootjs:zucchini", ratio: 20 },

            { reference: "lootjs:garlic_clove", ratio: 5 },  
            { reference: "lootjs:garlic", ratio: 20 },

            { reference: "lootjs:cotton_seeds", ratio: 5 },  
            { reference: "lootjs:cotton", ratio: 20 },

            { reference: "lootjs:sugar_cane", ratio: 25 },  

            { reference: "lootjs:lemon_seeds", ratio: 5 },
            { reference: "lootjs:lemon", ratio: 20 },

            { reference: "lootjs:orange_sapling", ratio: 5 },
            { reference: "lootjs:orange", ratio: 20 },

            { reference: "lootjs:fig_sapling", ratio: 5 },
            { reference: "lootjs:fig", ratio: 20 },

            { reference: "lootjs:flax_seeds", ratio: 5 },
            { reference: "lootjs:flax", ratio: 20 },
    //     ]
    // },
    // {
    //     groupName: "other",
    //     groupWeight: 20, 
    //     min: 2, max: 4,
    //     items: [


            { reference: "lootjs:carrot", ratio: 12 },

            { reference: "lootjs:potato", ratio: 12 },

            { reference: "lootjs:cabbage_seeds", ratio: 3 },
            { reference: "lootjs:cabbage", ratio: 9 },

            { reference: "lootjs:lettuce_seeds", ratio: 3 },
            { reference: "lootjs:lettuce", ratio: 9 },

            { reference: "lootjs:rice", ratio: 12 },
        ]
    },

]


// desert crops
const desert_seed_type = [
// base_crops
    "wheat_seeds",
    "barley_seeds",

// desert special
    "tomato_seeds",
    "onion",
    "pepper_seeds",
    "black_grape_seeds",
    "white_grape_seeds",
    "red_grape_seeds",
    "grapevine",
    "eggplant_seeds",
    "melon_seeds",
    "hamimelon_seeds",
    "chickpea",
    "date_sapling",
    "zucchini_seeds",
    "cotton_seeds",
    "lemon_seeds",
    "orange_sapling",
    "fig_sapling",
    "flax_seeds",
    "garlic_clove",
    "sugar_cane",

// other
    "carrot",
    "potato",
    "cabbage_seeds",
    "lettuce_seeds",
    "rice",
];

const village_desert_seed_bag = [
    {
        groupName: "bundle",
        groupWeight: 50, 
        min: 1, max: 1,
        items: getSeedBagConfig("minecraft:bundle", desert_seed_type, 2)
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
];

const village_desert_essential_wealth_equipment = [

    {
        groupName: "Villager Daily Essentials",
        groupWeight: 30, 
        min: 2, max: 3,
        items: [
            // --- Household Utilities ---
            { id: "minecraft:glass_bottle", ratio: 10 },
            { id: "minecraft:bowl", ratio: 10 },
            // { id: "minecraft:bundle", ratio: 10 },       
            // { id: "farmersdelight:wooden_basket", ratio: 10 },       
            // { id: "kaleidoscope_cookery:fruit_basket", ratio: 10 },      
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

const village_desert_dish_common = [

    { id: "minecraft:bread", ratio: 10 },
    { id: "minecraft:cooked_beef", ratio: 10 },       // 牛排
    // { id: "minecraft:cooked_porkchop", ratio: 10 },   // 熟猪排
    { id: "minecraft:cooked_mutton", ratio: 10 },     // 熟羊肉
    { id: "minecraft:cooked_chicken", ratio: 10 },    // 熟鸡肉

    { id: "farmersdelight:tomato_sauce", ratio: 10 },
    { id: "kaleidoscope_nether:roujiamo", ratio: 10 },
    { id: "kaleidoscope_cookery:samsa", ratio: 10 },
    { id: "kaleidoscope_cookery:meat_pie", ratio: 10 },
    { id: "kaleidoscope_cookery:mantou", ratio: 10 },
    { id: "farmersdelight:barbecue_stick", ratio: 10 },

    { id: "barbequesdelight:grilled_beef_skewer", ratio: 10 },
    { id: "barbequesdelight:grilled_chicken_skewer", ratio: 10 },
    { id: "barbequesdelight:grilled_lamb_skewer", ratio: 10 },
    { id: "barbequesdelight:grilled_potato_skewer", ratio: 10 },
    // { id: "barbequesdelight:grilled_vegetable_skewer", ratio: 10 },
    { id: "barbequesdelight:grilled_rabbit_skewer", ratio: 10 },
    // { id: "barbequesdelight:grilled_salmon_skewer", ratio: 10 },
    // { id: "barbequesdelight:grilled_cod_skewer", ratio: 10 },
    { id: "barbequesdelight:kebab_wrap", ratio: 10 },

    { id: "veggiesdelight:turnip_mutton_skewer", ratio: 10 },       

    { id: "ramadandelight:chorba", ratio: 10 },
    { id: "ramadandelight:hummus_tahini", ratio: 10 },
    { id: "ramadandelight:chickpea_and_rice", ratio: 10 },
    { id: "ramadandelight:tagine", ratio: 10 },
    { id: "ramadandelight:date_stuffed_cookie", ratio: 10 },
    { id: "ramadandelight:zalabiyeh", ratio: 10 },
    { id: "ramadandelight:luqaimat", ratio: 10 },
    { id: "ramadandelight:tabbouleh", ratio: 10 },
    { id: "ramadandelight:musakhan", ratio: 10 },
    { id: "ramadandelight:samosa", ratio: 10 },
    { id: "ramadandelight:kebab", ratio: 10 },
    { id: "ramadandelight:harira", ratio: 10 },
    { id: "ramadandelight:bourek", ratio: 10 },

]

const village_desert_dish_special = [

    { id: "minecraft:rabbit_stew", ratio: 10 },

    // { id: "farmersdelight:fish_stew", ratio: 10 },          
    { id: "farmersdelight:mutton_wrap", ratio: 10 },          
    { id: "farmersdelight:roasted_mutton_chops", ratio: 10 },
    
    { id: "kaleidoscope_chinesefood:yangrou_paomo", ratio: 10 },
    { id: "kaleidoscope_chinesefood:lamb_pilaf", ratio: 10 },

    { id: "kaleidoscope_cookery:numbing_spicy_chicken", ratio: 10 },
    { id: "kaleidoscope_chinesefood:dry_pot_chicken", ratio: 10 },
    { id: "kaleidoscope_chinesefood:dry_pot_potatoes", ratio: 10 },
    { id: "kaleidoscope_chinesefood:big_plate_chicken_noodles", ratio: 10 },
    
    // { id: "kaleidoscope_cookery:apple_platter", ratio: 10 },
    { id: "kaleidoscope_cookery:tomato_platter", ratio: 10 },
    { id: "kaleidoscope_cookery:watermelon_platter", ratio: 10 },
    
    { id: "kaleidoscope_chinesefood:big_plate_chicken", ratio: 10 },
    { id: "kaleidoscope_chinesefood:dry_pot_spare_ribs", ratio: 10 },

    { id: "veggiesdelight:stuffed_zucchinis", ratio: 10 },
    // { id: "veggiesdelight:cauliflower_kuku", ratio: 10 },
    { id: "veggiesdelight:mhadjeb", ratio: 10 },
    { id: "veggiesdelight:shakshouka", ratio: 10 },

    { id: "ramadandelight:quiche", ratio: 10 },
    { id: "ramadandelight:knafeh_tray_block", ratio: 10 },
    { id: "ramadandelight:haleem", ratio: 10 },
    { id: "ramadandelight:maqluba", ratio: 10 },
    { id: "ramadandelight:bourek_block", ratio: 10 },
    { id: "ramadandelight:sweet_tagine", ratio: 10 },
    { id: "ramadandelight:sayadieh", ratio: 10 },


]


const village_desert_dish = [
    {
        groupName: "common",
        groupWeight: 70,
        min: 1, max: 2,
        items: village_desert_dish_common
    },

    {
        groupName: "special",
        groupWeight: 30, 
        min: 1, max: 2,
        items: village_desert_dish_special
    },
]

const village_desert_drinks = [
    {
        groupName: "drinks",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "minecraft:potion", ratio: 10 , potion: "minecraft:water" }, 
            { id: "farmersdelight:melon_juice", ratio: 10 },          
            // { id: "kaleidoscope_tavern:wine", ratio: 10 },          
            // { id: "youkaisfeasts:red_wine_bottle", ratio: 10 },
            // { id: "youkaisfeasts:white_wine_bottle", ratio: 10 },
            { id: "fruitsdelight:hamimelon_juice", ratio: 10 },
            { id: "ramadandelight:mahalabia", ratio: 10 },

        ]
    },
    {
        groupName: "condiment",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "barbequesdelight:chili_powder", ratio: 10 },
            { id: "barbequesdelight:cumin_powder", ratio: 10 },
            { id: "barbequesdelight:pepper_powder", ratio: 10 },
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

const village_desert_cooking_equipment = [
    {
        groupName: "cooking_equipment",
        groupWeight: 30,
        min: 1, max: 1, damage: [0.8, 0.9],
        items: [
            { id: "kaleidoscope_cookery:stockpot", ratio: 10 }, 
            { id: "kaleidoscope_cookery:pot", ratio: 10 }, 
            { id: "kaleidoscope_cookery:stockpot_lid", ratio: 10 }, 
            { id: "kaleidoscope_cookery:kitchen_shovel", ratio: 10 }, 

            { id: "farmersdelight:cooking_pot", ratio: 10 }, 
            { id: "farmersdelight:skillet", ratio: 10 },    
            { id: "farmersdelight:iron_knife", ratio: 10 },
        ]
    },
    {   
        groupName: "empty",
        groupWeight: 70, 
        items: [
            { id: "empty"},
        ]
    },
]


// =================================================================
// 事件注册区域
// =================================================================
const village_desert_house_content = [
    [village_profession_item, 1, 1],
    [village_desert_base_crops, 1, 1],
    [village_desert_other_crops, 1, 1],
    [village_desert_seed_bag, 1, 1],
    [village_desert_dish, 1, 1],
    [village_desert_essential_wealth_equipment, 1, 1],
    [village_cooking_equipment_less, 1, 1],
    [village_desert_drinks, 1, 1],
    [village_recipe_item, 1, 1],
];

const loot_village_desert_house = [
    [village_desert_house_content, 1],
];