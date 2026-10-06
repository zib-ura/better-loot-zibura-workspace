// =================================================================
// 战利品表定义区域
// =================================================================

const village_jungle_base_crops = [

    {
        groupName: "common",
        groupWeight: 70, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds", ratio: 5 },
            { reference: "lootjs:wheat", ratio: 10 },
            { reference: "lootjs:wheat_and_wheat_block", ratio: 10 },

            { reference: "lootjs:melon_seeds", ratio: 5 },
            { reference: "lootjs:melon_slice", ratio: 10 },
            { reference: "lootjs:melon_slice_and_melon_slice_block", ratio: 10 },

            // { reference: "lootjs:pumpkin_seeds", ratio: 5 },
            // { reference: "lootjs:pumpkin_slice", ratio: 10 },
            // { reference: "lootjs:pumpkin_slice_and_pumpkin_slice_block", ratio: 10 },

            { reference: "lootjs:cocoabeans", ratio: 15 },
            { reference: "lootjs:cocoabeans_and_cocoabeans_block", ratio: 10 },

            { reference: "lootjs:raw_coffee_beans", ratio: 15 },
            { reference: "lootjs:raw_coffee_beans_and_raw_coffee_beans_block", ratio: 10 },
            // { reference: "lootjs:roasted_coffee_beans", ratio: 15 },
            // { reference: "lootjs:roasted_coffee_beans_and_roasted_coffee_beans_block", ratio: 10 },

            { reference: "lootjs:avocado_sapling", ratio: 5 },
            { reference: "lootjs:avocado", ratio: 10 },
            { reference: "lootjs:avocado_and_avocado_block", ratio: 10 },

            { reference: "lootjs:cranberry", ratio: 15 },
            { reference: "lootjs:cranberry_and_cranberry_block", ratio: 10 },

            { reference: "lootjs:durian_sapling", ratio: 5 },
            { reference: "lootjs:durian_flesh", ratio: 10 },
            { reference: "lootjs:durian_flesh_and_durian_flesh_block", ratio: 10 },

            { reference: "lootjs:lychee_sapling", ratio: 5 },
            { reference: "lootjs:lychee", ratio: 10 },
            { reference: "lootjs:lychee_and_lychee_block", ratio: 10 },

            { reference: "lootjs:mango_sapling", ratio: 5 },
            { reference: "lootjs:mango", ratio: 10 },
            { reference: "lootjs:mango_and_mango_block", ratio: 10 },

            { reference: "lootjs:mangosteen_sapling", ratio: 5 },
            { reference: "lootjs:mangosteen", ratio: 10 },
            { reference: "lootjs:mangosteen_and_mangosteen_block", ratio: 10 },

            { reference: "lootjs:peach_sapling", ratio: 5 },
            { reference: "lootjs:peach", ratio: 10 },
            { reference: "lootjs:peach_and_peach_block", ratio: 10 },

            { reference: "lootjs:banana_frond", ratio: 5 },
            { reference: "lootjs:banana", ratio: 10 },
            { reference: "lootjs:banana_and_banana_block", ratio: 10 },
        ]
    },

    {
        groupName: "special",
        groupWeight: 30, 
        min: 2, max: 3,
        items: [

            { reference: "lootjs:rice", ratio: 25 },

            { reference: "lootjs:tomato", ratio: 20 },
            { reference: "lootjs:tomato_seeds", ratio: 5 },

            { reference: "lootjs:potato", ratio: 25 },

            { reference: "lootjs:onion", ratio: 25 },

            { reference: "lootjs:cabbage_seeds", ratio: 5 },
            { reference: "lootjs:cabbage", ratio: 20 },

            { reference: "lootjs:lettuce_seeds", ratio: 5 },
            { reference: "lootjs:lettuce", ratio: 20 },

        ]
    },
]

// jungle crops
const jungle_seed_type = [
// common
    "wheat_seeds",
    "melon_seeds",
    "cocoabeans",
    "raw_coffee_beans",
    "avocado_sapling",
    "cranberry",
    "durian_sapling",
    "lychee_sapling",
    "mango_sapling",
    "mangosteen_sapling",
    "peach_sapling",
    "banana_frond",

// special
    "rice",
    "tomato_seeds",
    "potato",
    "onion",
    "cabbage_seeds",
    "lettuce_seeds",
    "pale_bell_pepper_seeds",
    "dark_bell_pepper_seeds",
];

const village_jungle_seed_bag = [
    {
        groupName: "bundle",
        groupWeight: 50, 
        min: 1, max: 1,
        items: getSeedBagConfig("minecraft:bundle", jungle_seed_type, 2)
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
];

const village_jungle_essential_wealth_equipment = [
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

const village_jungle_dish = [
    {
        groupName: "common",
        groupWeight: 70,
        min: 1, max: 2,
        items: [
            { id: "minecraft:bread", ratio: 10 },


            { id: "minecraft:cooked_beef", ratio: 10 },       
            { id: "minecraft:cooked_porkchop", ratio: 10 },   
            { id: "minecraft:cooked_mutton", ratio: 10 },    
            { id: "minecraft:cooked_chicken", ratio: 10 },    

            { id: "youkaisfeasts:steamed_egg_in_bamboo", ratio: 10 },
            { id: "youkaisfeasts:tutu_congee", ratio: 10 },
            { id: "vanillacookbook:cooked_bamboo", ratio: 10 },
            { id: "kitchenkarrot:bamboo_potato", ratio: 10 },

            { id: "kaleidoscope_cookery:bamboo_tube_rice", ratio: 10 },

            { id: "vanillacookbook:grilled_melon", ratio: 10 },

            { id: "fruitsdelight:baked_durian", ratio: 10 },
            { id: "fruitsdelight:mango_salad", ratio: 10 },


            { id: "alexsmobsdelight:banana_slice", ratio: 10 },
            { id: "alexsmobsdelight:banana_roll_slice", ratio: 10 },
            { id: "alexsmobsdelight:sopa_de_macaco_cup", ratio: 10 },
            { id: "alexsmobsdelight:sopa_de_macaco", ratio: 10 },
            { id: "alexsmobsdelight:pot_of_hummingbird_stew", ratio: 10 },


        ]
    },

    {
        groupName: "special",
        groupWeight: 30, 
        min: 1, max: 2,
        items: [

            { id: "youkaisfeasts:kaguya_hime", ratio: 10 },

            // { id: "farmersdelight:stuffed_pumpkin", ratio: 10 },
            // { id: "kaleidoscope_chinesefood:pumpkin_porridge", ratio: 10 },
            // { id: "farmersdelight:pumpkin_soup", ratio: 10 },
            { id: "fruitsdelight:lychee_chicken", ratio: 10 },

            { id: "alexsmobsdelight:fried_ants", ratio: 10 },
            { id: "alexsmobsdelight:banana_roll", ratio: 10 },
            { id: "alexsmobsdelight:ants_climbing_a_tree", ratio: 10 },
            { id: "alexsmobsdelight:true_ants_climbing_a_tree", ratio: 10 },
        ]
    },
]


const village_jungle_drinks = [
    {
        groupName: "juice",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "minecraft:potion", ratio: 10 , potion: "minecraft:water" }, 

            { id: "vanillacookbook:melon_juice", ratio: 10 },
            { id: "farmersdelight:melon_juice", ratio: 10 },
            { id: "kaleidoscope_tavern:watermelon_juice", ratio: 10 },

            { id: "fruitsdelight:cranberry_juice", ratio: 10 },
            { id: "fruitsdelight:lychee_cherry_tea", ratio: 10 },
            { id: "fruitsdelight:mango_tea", ratio: 10 },
            { id: "fruitsdelight:mangosteen_tea", ratio: 10 },
            { id: "fruitsdelight:peach_tea", ratio: 10 },
            
            { id: "vanillacookbook:chocolate_milk", ratio: 10 },
            { id: "farmersdelight:hot_cocoa", ratio: 10 },

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
// 丛林烘焙坊与房屋战利品表定义
// =================================================================

const village_jungle_bakery_products = [
    {
        groupName: "jungle_cakes",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "vanillacookbook:chocolate_cake", ratio: 10 },
            { id: "neapolitan:chocolate_cake", ratio: 10 },
            { id: "bakery:chocolate_cake", ratio: 10 },
            { id: "vanillacookbook:cheesecake", ratio: 10 },
            { id: "vanillacookbook:ice_cream_cake", ratio: 10 },
            { id: "rusticdelight:chocolate_pancakes", ratio: 10 },

            { id: "neapolitan:banana_cake", ratio: 10 },


            
        ]
    },

    {
        groupName: "jungle_tarts_pies",
        groupWeight: 15,
        min: 1, max: 1,
        items: [

            { id: "bakery:chocolate_tart", ratio: 10 },
            { id: "farmersdelight:chocolate_pie", ratio: 10 },


        ]
    },

    {
        groupName: "jungle_dessert_puddings_cold",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "vanillacookbook:brownie_tray", ratio: 10 },
            { id: "fruitsdelight:mangosteen_cake", ratio: 10 },
            { id: "vanillacookbook:chocolate_ice_cream", ratio: 10 },
    
            { id: "moredelight:chocolate_popsicle", ratio: 10 },

        ]
    },

    {
        groupName: "jungle_dessert_teatime_treats_slices",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "minecraft:cookie"},
            { id: "vanillacookbook:chocolate", ratio: 10 },
            { id: "neapolitan:chocolate_bar", ratio: 10 },
            { id: "bakery:chocolate_truffle", ratio: 10 },   
            { id: "brewinandchewin:cocoa_fudge", ratio: 10 }, 
            { id: "vanillacookbook:brownie", ratio: 10 },
            { id: "vanillacookbook:chocolate_egg", ratio: 10 },
            { id: "kitchenkarrot:leafy_fresh_chocolate", ratio: 10 },

            { id: "bakery:chocolate_glazed_cookie", ratio: 10 },

            { id: "bakery:chocolate_cake_slice", ratio: 10 },
            { id: "vanillacookbook:chocolate_cake_slice", ratio: 10 },
            { id: "farmersdelight:chocolate_pie_slice", ratio: 10 },
            { id: "bakery:chocolate_tart_slice", ratio: 10 },

            { id: "fruitsdelight:durian_pie", ratio: 10 },
            { id: "rusticdelight:chocolate_pancake", ratio: 10 },

            { id: "rusticdelight:fruit_beignet", ratio: 10 },
            { id: "neapolitan:cocoa_fudge", ratio: 10 },
            
            { id: "alexsmobsdelight:ant_cookie", ratio: 10 },

        ]
    },

    {
        groupName: "jungle_bread",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "minecraft:bread", ratio: 10 },
            { id: "kitchenkarrot:chocolate_croissant", ratio: 10 },

        ]
    },
];

const village_jungle_bakery_baking_material = [
    {
        groupName: "baking_material",
        groupWeight: 15,
        min: 2, max: 3,
        items: basic_baking_material
        
    },

    {
        groupName: "jungle_jam",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "bakery:chocolate_jam", ratio: 10 },
            { id: "fruitsdelight:melon_jam", ratio: 10 },
            { id: "fruitsdelight:lychee_jam", ratio: 10 },
            { id: "fruitsdelight:mango_jam", ratio: 10 },
            { id: "fruitsdelight:peach_jam", ratio: 10 },
            { id: "fruitsdelight:mangosteen_jam", ratio: 10 },
            { id: "fruitsdelight:durian_jam", ratio: 10 },
        ]
    },
];

// =================================================================
// 事件注册区域
// =================================================================
const village_jungle_house_content = [
    [village_profession_item, 1, 1],
    [village_jungle_base_crops, 2, 2],
    [village_jungle_seed_bag, 1, 1],
    [village_jungle_dish, 1, 1],
    [village_jungle_essential_wealth_equipment, 1, 1],
    [village_cooking_equipment_less, 1, 1],
    [village_jungle_drinks, 1, 1],
];

const village_jungle_bakery_content = [

    [village_jungle_bakery_products, 2, 2],
    [village_jungle_bakery_baking_material, 2, 3],
    [village_smith_small_iron_knife, 1, 1],

];


const loot_village_jungle_house = [
    [village_jungle_house_content, 8],
    [carpenterData.jungle, 1], 
    [village_jungle_bakery_content, 1],
];