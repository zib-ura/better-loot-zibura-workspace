// =================================================================
// 战利品表定义区域
// =================================================================

const village_beach_base_crops = [

    {
        groupName: "base_crops",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds", ratio: 5 },
            { reference: "lootjs:wheat", ratio: 10 },
            { reference: "lootjs:wheat_and_wheat_block", ratio: 10 },

            { reference: "lootjs:cabbage_seeds", ratio: 5 }, 
            { reference: "lootjs:cabbage", ratio: 20 },

            { reference: "lootjs:beetroot_seeds", ratio: 5 },
            { reference: "lootjs:beetroot", ratio: 10 },
            { reference: "lootjs:beetroot_and_beetroot_block", ratio: 10 },

            { reference: "lootjs:pineapple_sapling", ratio: 5 }, 
            { reference: "lootjs:pineapple", ratio: 10 },
            { reference: "lootjs:pineapple_and_pineapple_block", ratio: 10 },

            { reference: "lootjs:salt", ratio: 25 },

            { reference: "lootjs:sugar_cane", ratio: 25 },

            { reference: "lootjs:flax_seeds", ratio: 5 },
            { reference: "lootjs:flax", ratio: 10 },
            { reference: "lootjs:flax_and_flax_block", ratio: 10 },
        ]
    },
    

]

const village_beach_essential_wealth_equipment = [


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

const village_beach_dish = [
    {
        groupName: "common_fish",
        groupWeight: 35,
        min: 1, max: 2,
        items: [

            { id: "minecraft:cooked_cod", ratio: 10 },
            { id: "minecraft:cooked_salmon", ratio: 10 },

            { id: "vanillacookbook:fish_stew", ratio: 10 },

            { id: "barbequesdelight:grilled_cod_skewer", ratio: 10 },
            { id: "barbequesdelight:grilled_salmon_skewer", ratio: 10 },

            { id: "farmersdelight:salmon_roll", ratio: 10 },
            { id: "farmersdelight:cod_roll", ratio: 10 },            

            { id: "rusticdelight:calamari_roll", ratio: 10 },    

            { id: "kaleidoscope_cookery:pufferfish_soup", ratio: 10 },          
   
            { id: "culturaldelights:tropical_roll", ratio: 10 },
            { id: "culturaldelights:sushi", ratio: 10 },
            { id: "culturaldelights:pufferfish_roll", ratio: 10 },
            { id: "culturaldelights:midori_roll_slice", ratio: 10 },
            { id: "culturaldelights:egg_roll", ratio: 10 },
            { id: "culturaldelights:chicken_roll_slice", ratio: 10 },
            { id: "culturaldelights:calamari_roll", ratio: 10 },
            { id: "culturaldelights:tamago", ratio: 10 },
            { id: "culturaldelights:rice_ball", ratio: 10 },
        
            { id: "vintagedelight:salted_cod", ratio: 10 },
            { id: "vintagedelight:salted_salmon", ratio: 10 },
            { id: "vintagedelight:surstromming", ratio: 10 },

            
            { id: "alexsmobsdelight:lobster_roll", ratio: 10 },
            { id: "alexsmobsdelight:seal_sandwich", ratio: 10 },
            { id: "alexsmobsdelight:tempura", ratio: 10 },
            { id: "alexsmobsdelight:lobster_head_stew", ratio: 10 },
            { id: "alexsmobsdelight:seagull_soup", ratio: 10 },
            { id: "alexsmobsdelight:seal_stew", ratio: 10 },
        ]
    },

    {
        groupName: "common_vegetables_fruits",
        groupWeight: 35,
        min: 1, max: 2,
        items: [

            { id: "minecraft:bread", ratio: 10 },
            { reference: "lootjs:cooked_rice", ratio: 10 },
            { id: "brewinandchewin:kippers", ratio: 10 },
            { id: "culturaldelights:pickle", ratio: 10 },
            { id: "vintagedelight:pickled_onion", ratio: 10 },
            { id: "vintagedelight:pickled_beetroot", ratio: 10 },
            { id: "vintagedelight:pickle", ratio: 10 },
            { id: "vintagedelight:pickled_egg", ratio: 10 },

            { id: "pineappledelight:pineapple_fried_rice", ratio: 10 },
            { id: "fruitsdelight:bowl_of_pineapple_fried_rice", ratio: 10 },
            { id: "fruitsdelight:pineapple_marinated_pork", ratio: 10 },

        ]
    },
    
    {
        groupName: "special",
        groupWeight: 30, 
        min: 1, max: 2,
        items: [

            { id: "farmersdelight:fish_stew", ratio: 10 },  
            { id: "farmersdelight:baked_cod_stew", ratio: 10 },  
            { id: "farmersdelight:squid_ink_pasta", ratio: 10 },  

            { id: "kaleidoscope_chinesefood:yellow_croaker_soup", ratio: 10 },

            { id: "kaleidoscope_cookery:oil_splashed_fish", ratio: 10 },
            { id: "kaleidoscope_cookery:braised_fish_rice_bowl", ratio: 10 },
            

            { id: "youkaisfeasts:seafood_miso_soup", ratio: 10 },
            { id: "youkaisfeasts:han_palace", ratio: 10 },
            { id: "youkaisfeasts:shirayuki", ratio: 10 },
            { id: "youkaisfeasts:grilled_eel_over_rice", ratio: 10 },

            { id: "farmersdelight:kelp_roll", ratio: 10 },  
            { id: "farmersdelight:noodle_soup", ratio: 10 },  
            { id: "farmersdelight:rice_roll_medley_block", ratio: 10 },  
           
            { id: "culturaldelights:midori_roll", ratio: 10 },
            { id: "culturaldelights:chicken_roll", ratio: 10 },
            { id: "culturaldelights:exotic_roll_medley", ratio: 10 },

            { id: "rusticdelight:fried_calamari", ratio: 10 },
            


            { id: "alexsmobsdelight:fried_seagull_with_fries", ratio: 10 },
            { id: "alexsmobsdelight:lobster_pasta", ratio: 10 },
            { id: "alexsmobsdelight:roast_seagull", ratio: 10 },
            { id: "alexsmobsdelight:lobster_roll_medley", ratio: 10 },

        ]
    },
]

const village_beach_drinks = [
    {
        groupName: "drinks",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "minecraft:potion", ratio: 10 , potion: "minecraft:water" }, 
            { id: "pineapple_delight:pineapple_juice", ratio: 10 },
            { id: "pineapple_delight:pineapple_milk_shake", ratio: 10 },
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

const village_beach_bakery_products = [
    {
        groupName: "beach_cakes",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "pineapple_delight:pineapple_cake", ratio: 10 },
        ]
    },

    {
        groupName: "beach_tarts_pies",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "pineapple_delight:pineapple_pie", ratio: 10 },
        ]
    },

    {
        groupName: "beach_dessert_puddings_cold",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "pineapple_delight:pineapple_milk_shake", ratio: 10 },
            { id: "pineapple_delight:pineapple_ice_cream", ratio: 10 },
        ]
    },

    {
        groupName: "beach_dessert_teatime_treats_slices",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "pineapple_delight:pineapple_cake_slice", ratio: 10 },
            { id: "pineapple_delight:pineapple_pie_side", ratio: 10 },
            { id: "fruitsdelight:pineapple_pie", ratio: 10 },

        ]
    },

    {
        groupName: "beach_bread",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "minecraft:bread", ratio: 10 },

        ]
    },

]

const village_beach_bakery_baking_material = [
    {
        groupName: "baking_material",
        groupWeight: 15,
        min: 2, max: 3,
        items: basic_baking_material
    },

    {
        groupName: "beach_jam",
        groupWeight: 15,
        min: 1, max: 1,
        items: [

            { id: "fruitsdelight:pineapple_jam", ratio: 10 },

        ]
    },

]
// =================================================================
// 事件注册区域
// =================================================================
const village_beach_house_content = [
    [village_profession_item, 1, 1],
    [village_beach_base_crops, 1, 1],
    [village_beach_dish, 1, 1],
    [village_beach_essential_wealth_equipment, 1, 1],
    [village_cooking_equipment_less, 1, 1],
    [village_beach_drinks, 1, 1],

];

const village_beach_bakery_content = [

    [village_beach_bakery_products, 2, 2],
    [village_beach_bakery_baking_material, 2, 3],
    [village_smith_small_iron_knife, 1, 1],
];

const loot_village_beach_house = [
    [village_beach_house_content, 8],
    // [carpenterData.beach, 1], 
    [village_beach_bakery_content, 1],
]