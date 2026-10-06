// =================================================================
// 战利品表定义区域
// =================================================================

const village_taiga_base_crops = [
    {
        groupName: "base_crops",
        groupWeight: 80, 
        min: 2,  max: 3,
        items: [
            { reference: "lootjs:wheat_seeds", ratio: 5 },
            { reference: "lootjs:wheat", ratio: 10 },
            { reference: "lootjs:wheat_and_wheat_block", ratio: 10 },

            { reference: "lootjs:pumpkin_seeds", ratio: 5 },
            { reference: "lootjs:pumpkin_slice", ratio: 10 },
            { reference: "lootjs:pumpkin_slice_and_pumpkin_slice_block", ratio: 10 },

            { reference: "lootjs:potato", ratio: 15 },
            { reference: "lootjs:potato_and_potato_block", ratio: 10 },

            { reference: "lootjs:beetroot_seeds", ratio: 5 },
            { reference: "lootjs:beetroot", ratio: 10 },
            { reference: "lootjs:beetroot_and_beetroot_block", ratio: 10 },



        ]
    }
];

const village_taiga_other_crops = [
    {
        groupName: "taiga",
        groupWeight: 80, 
        min: 2,  max: 3,
        items: [
            { reference: "lootjs:sweet_berry_pips", ratio: 5 },
            { reference: "lootjs:sweet_berries", ratio: 15 },
            { reference: "lootjs:berry_and_berry_block", ratio: 10 },

            { reference: "lootjs:hops", ratio: 25 },

            { reference: "lootjs:red_mushroom", ratio: 25 },

            { reference: "lootjs:brown_mushroom", ratio: 25 },
        ]
    },

    {
        groupName: "other",
        groupWeight: 20, 
        min: 2,  max: 3,
        items: [
            { reference: "lootjs:carrot", ratio: 25 },

            { reference: "lootjs:tomato_seeds", ratio: 5 },
            { reference: "lootjs:tomato", ratio: 20 },

            { reference: "lootjs:onion", ratio: 25 },

            { reference: "lootjs:cabbage_seeds", ratio: 5 },
            { reference: "lootjs:cabbage", ratio: 20 },

            { reference: "lootjs:lettuce_seeds", ratio: 5 },
            { reference: "lootjs:lettuce", ratio: 20 },

            { reference: "lootjs:honey", ratio: 25 },

            { reference: "lootjs:blueberry", ratio: 25 },

            { reference: "lootjs:hawberry_sapling", ratio: 5 },
            { reference: "lootjs:hawberry", ratio: 20 },

            { reference: "lootjs:persimmon_sapling", ratio: 5 },
            { reference: "lootjs:persimmon", ratio: 20 },

            { reference: "lootjs:barley_seeds", ratio: 5 },
            { reference: "lootjs:barley", ratio: 20 },

            { reference: "lootjs:cauliflower_seeds", ratio: 5 },
            { reference: "lootjs:cauliflower", ratio: 20 },

            { reference: "lootjs:sweet_potato", ratio: 25 },

            { reference: "lootjs:turnip_seeds", ratio: 5 },
            { reference: "lootjs:turnip", ratio: 20 },
            
            { reference: "lootjs:parsley_seeds", ratio: 5 },
            { reference: "lootjs:parsley", ratio: 20 },
        ]
    },
];


// taiga crops
const taiga_seed_type = [
// base_crops
    "wheat_seeds",
    "pumpkin_seeds",
    "potato",
    "beetroot_seeds",

// taiga
    "sweet_berry_pips",
    "hops",
    "red_mushroom",
    "brown_mushroom",

// other
    "carrot",
    "tomato_seeds",
    "onion",
    "cabbage_seeds",
    "lettuce_seeds",
    "blueberry",
    "hawberry_sapling",
    "persimmon_sapling",
    "barley_seeds",
    "cauliflower_seeds",
    "sweet_potato",
    "turnip_seeds",
    "parsley_seeds",
];


const village_taiga_seed_bag = [
    {
        groupName: "bundle",
        groupWeight: 50, 
        min: 1, max: 1,
        items: getSeedBagConfig("minecraft:bundle", taiga_seed_type, 2)
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
];

const village_taiga_essential_wealth_equipment = [
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

const village_taiga_dish = [
    {
        groupName: "common",
        groupWeight: 35,
        min: 2, max: 3,
        items: [

            { id: "minecraft:bread", ratio: 10 },

            { id: "minecraft:mushroom_stew", ratio: 10 },
            { id: "vanillacookbook:mushroom_scrambled_eggs", ratio: 10 },
            { id: "youkaisfeasts:mushroom_soup", ratio: 10 },
            { id: "farmersdelight:bone_broth", ratio: 10 },
            { id: "rusticdelight:fried_mushrooms", ratio: 10 },    

            { id: "berry_good:sweet_berry_meatballs", ratio: 10 },

            { id: "minecraft:cooked_beef", ratio: 10 },      
            { id: "minecraft:cooked_porkchop", ratio: 10 },   
            { id: "minecraft:cooked_mutton", ratio: 10 },    
            { id: "minecraft:cooked_chicken", ratio: 10 }, 
            
            { id: "alexsmobsdelight:moose_stew", ratio: 10 },

        ]
    },

    {
        groupName: "special",
        groupWeight: 15, 
        min: 2, max: 3,
        items: [
            { id: "minecraft:mushroom_stew", ratio: 1 },

            { id: "farmersdelight:grilled_salmon", ratio: 10 },

            { id: "kaleidoscope_cookery:brown_mushroom_pot_soup", ratio: 10 },            
            { id: "kaleidoscope_cookery:red_mushroom_pot_soup", ratio: 10 },    


            { id: "alexsmobsdelight:bowl_of_moose_sausage_with_salmon", ratio: 10 },
            { id: "alexsmobsdelight:honey_glazed_moose_ribs", ratio: 10 },
            { id: "alexsmobsdelight:bowl_of_honey_glazed_bear_meat_with_salmon", ratio: 10 },
        ]
    },
]

const village_taiga_drinks = [
    {
        groupName: "berry",
        groupWeight: 50,
        min: 1, max: 2,
        items: [
            { id: "minecraft:potion", ratio: 10 , potion: "minecraft:water" }, 

            { id: "fruitsdelight:hawberry_tea", ratio: 10 },
            
            { id: "kitchenkarrot:mead", ratio: 10 },
            // { id: "kaleidoscope_tavern:honey_wine", ratio: 10 },
            { id: "youkaisfeasts:mead", ratio: 10 },
            // { id: "kaleidoscope_tavern:red_queen", ratio: 10 },
            // { id: "kaleidoscope_tavern:plum_wine", ratio: 10 },
            // { id: "kaleidoscope_tavern:sweet_berry_wine", ratio: 10 },

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



const village_taiga_bakery_products = [
    {
        groupName: "taiga_cakes",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "bakery:sweetberry_cake", ratio: 10 },
            { id: "vanillacookbook:berry_cake", ratio: 10 },
        ]
    },

    {
        groupName: "taiga_tarts_pies",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "farmersdelight:sweet_berry_cheesecake", ratio: 10 },
            { id: "kitchenkarrot:sweet_berry_tart", ratio: 10 },
            { id: "vanillacookbook:berry_pie", ratio: 10 },

            { id: "alexsmobsdelight:moose_pie", ratio: 10 },

        ]
    },

    {
        groupName: "taiga_dessert_puddings_cold",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "fruitsdelight:blueberry_custard", ratio: 10 },
            { id: "vanillacookbook:berry_ice_cream", ratio: 10 },
        ]
    },

    {
        groupName: "taiga_dessert_teatime_treats_slices",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "farmersdelight:sweet_berry_cheesecake_slice", ratio: 10 },
            { id: "farmersdelight:sweet_berry_cookie", ratio: 10 },
            { id: "vanillacookbook:berry_cookie", ratio: 10 },
            { id: "vanillacookbook:berry_pancake", ratio: 10 },
            { id: "vanillacookbook:berry_brownie", ratio: 10 },
            { id: "vanillacookbook:berry_candy", ratio: 10 },
            { id: "vanillacookbook:berry_cake_slice", ratio: 10 },
            { id: "bakery:sweetberry_cake_slice", ratio: 10 },
            { id: "bakery:sweetberry_glazed_cookie", ratio: 10 },
            { id: "bakery:sweetberry_cupcake", ratio: 10 },

            { id: "fruitsdelight:dried_persimmon", ratio: 10 },
            { id: "fruitsdelight:persimmon_cookie", ratio: 10 },
            { id: "fruitsdelight:blueberry_muffin", ratio: 10 },
            { id: "fruitsdelight:hawberry_stick", ratio: 10 },
            { id: "fruitsdelight:hawberry_roll", ratio: 10 },
            { id: "fruitsdelight:hawberry_sheet", ratio: 10 },
            { id: "rusticdelight:fruit_beignet", ratio: 10 },

            { id: "alexsmobsdelight:slice_of_moose_pie", ratio: 10 },

        ]
    },

    {
        groupName: "taiga_bread",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "minecraft:bread", ratio: 10 },
        ]
    },

]

const village_taiga_bakery_baking_material = [
    {
        groupName: "baking_material",
        groupWeight: 15,
        min: 2, max: 3,
        items: basic_baking_material
    },

    {
        groupName: "taiga_jam",
        groupWeight: 15,
        min: 1, max: 1,
        items: [

            { reference: "lootjs:sweetberry_jam", ratio: 10 },
            { id: "fruitsdelight:blueberry_jam", ratio: 10 },
            { id: "fruitsdelight:hawberry_jam", ratio: 10 },
            { id: "fruitsdelight:persimmon_jam", ratio: 10 },

        ]
    },

]



// =================================================================
// 事件注册区域
// =================================================================
const village_taiga_house_content = [
    [village_profession_item, 1, 1],
    [village_taiga_base_crops, 1, 1],
    [village_taiga_other_crops, 1, 1],
    [village_taiga_seed_bag, 1, 1],
    [village_taiga_dish, 1, 1],
    [village_taiga_essential_wealth_equipment, 1, 1],
    [village_cooking_equipment_less, 1, 1],
    [village_taiga_drinks, 1, 2],
];

const village_taiga_bakery_content = [

    [village_taiga_bakery_products, 2, 2],
    [village_taiga_bakery_baking_material, 2, 3],
    [village_smith_small_iron_knife, 1, 1],

];


const loot_village_taiga_house = [
    [village_taiga_house_content, 8],
    [carpenterData.taiga, 1], 
    [village_taiga_bakery_content, 1],
];