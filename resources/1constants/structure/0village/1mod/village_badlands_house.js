// =================================================================
// 战利品表定义区域
// =================================================================

const village_badlands_base_crops = [

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

const village_badlands_essential_wealth_equipment = [

    // {
    //     groupName: "Wood",
    //     groupWeight: 0, 
    //     min: 3, max: 8,
    //     items: [

    //     ]
    // },


    {
        groupName: "Villager Daily Essentials",
        groupWeight: 30, 
        min: 3, max: 4,
        items: [
            // --- Household Utilities ---
            { id: "minecraft:glass_bottle", ratio: 10 },
            { id: "minecraft:bowl", ratio: 10 },
            { id: "minecraft:bundle", ratio: 10 },       
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

const village_badlands_dish = [
    {
        groupName: "common",
        groupWeight: 70,
        min: 1, max: 2,
        items: [
            { id: "minecraft:bread", ratio: 10 },

            { id: "kitchenkarrot:canned_beef_potato", ratio: 10 },
            { id: "kitchenkarrot:canned_candied_apple", ratio: 10 },
            { id: "kitchenkarrot:canned_mutton_pumpkin", ratio: 10 },
            { id: "kitchenkarrot:canned_pork_beetroot", ratio: 10 },
            { id: "kitchenkarrot:canned_sweet_berry_milk", ratio: 10 },

            { id: "rationcraft:canned_apple_slices", ratio: 10 },
            { id: "rationcraft:canned_beets", ratio: 10 },
            { id: "rationcraft:canned_bread", ratio: 10 },
            { id: "rationcraft:canned_breaded_fish", ratio: 10 },
            { id: "rationcraft:canned_melon", ratio: 10 },
            { id: "rationcraft:canned_mushrooms", ratio: 10 },
            { id: "rationcraft:canned_potato", ratio: 10 },
            { id: "rationcraft:canned_pumpkin_pie_mix", ratio: 10 },
            { id: "rationcraft:canned_whole_chicken", ratio: 10 },
            { id: "rationcraft:canned_whole_rabbit", ratio: 10 },

            { id: "alexsmobsdelight:snake_skin_salad", ratio: 10 },
            { id: "alexsmobsdelight:rattle_tail_congee", ratio: 10 },
        ]
    },

    {
        groupName: "special",
        groupWeight: 30, 
        min: 1, max: 2,
        items: [

            { id: "rationcraft:canned_pork", ratio: 10 },
            { id: "rationcraft:canned_mutton", ratio: 10 },
            { id: "rationcraft:canned_borscht", ratio: 10 },
            { id: "rationcraft:canned_beef", ratio: 10 },
            { id: "rationcraft:canned_cake", ratio: 10 },
            { id: "rationcraft:canned_rabbit_stew", ratio: 10 },

            { id: "rationcraft:canned_breaded_ham", ratio: 10 },
            { id: "rationcraft:canned_carrots", ratio: 10 },
            { id: "rationcraft:canned_cookies", ratio: 10 },
            { id: "rationcraft:canned_fish", ratio: 10 },

            { id: "alexsmobsdelight:grilled_rattle_tail", ratio: 10 },
        ]
    },
]

const village_badlands_drinks = [
    {
        groupName: "drinks",
        groupWeight: 50,
        min: 1, max: 1,
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
const village_badlands_house_content = [
    [village_profession_item, 1, 1],
    [village_badlands_base_crops, 1, 1],
    [village_badlands_dish, 1, 1],
    [village_badlands_essential_wealth_equipment, 1, 1],
    [village_cooking_equipment_less, 1, 1],
    [village_badlands_drinks, 1, 1],

];

const loot_village_badlands_house = [
    [village_badlands_house_content, 1],
];