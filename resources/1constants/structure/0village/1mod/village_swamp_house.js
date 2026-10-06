// =================================================================
// 战利品表定义区域
// =================================================================

const village_swamp_base_crops = [

    {
        groupName: "common",
        groupWeight: 70, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds", ratio: 5 },
            { reference: "lootjs:wheat", ratio: 10 },
            { reference: "lootjs:wheat_and_wheat_block", ratio: 10 },

            { reference: "lootjs:rice", ratio: 60 },
            { reference: "lootjs:rice_and_rice_block", ratio: 40 },

        ]
    },

    {
        groupName: "special",
        groupWeight: 30, 
        min: 2, max: 3,
        items: [

            { reference: "lootjs:tomato", ratio: 20 },
            { reference: "lootjs:tomato_seeds", ratio: 5 },


            { reference: "lootjs:potato", ratio: 50 },

            { reference: "lootjs:onion", ratio: 25 },

            { reference: "lootjs:cabbage_seeds", ratio: 5 },
            { reference: "lootjs:cabbage", ratio: 20 },

            { reference: "lootjs:lettuce_seeds", ratio: 5 },
            { reference: "lootjs:lettuce", ratio: 20 },

            { reference: "lootjs:bayberry_sapling", ratio: 5 },
            { reference: "lootjs:bayberry", ratio: 20 },
            { reference: "lootjs:blueberry", ratio: 25 },
            { reference: "lootjs:cranberry", ratio: 25 },
            { reference: "lootjs:durian_sapling", ratio: 5 },
            { reference: "lootjs:durian", ratio: 20 }, 
            { reference: "lootjs:mangosteen_sapling", ratio: 5 },
            { reference: "lootjs:mangosteen", ratio: 20 },

            { reference: "lootjs:egg", ratio: 25 },
        ]
    },
]

const village_swamp_essential_wealth_equipment = [
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

const village_swamp_dish = [
    {
        groupName: "common",
        groupWeight: 70,
        min: 1, max: 2,
        items: [
            { reference: "lootjs:cooked_cod", ratio: 10 },
            { reference: "lootjs:cooked_salmon", ratio: 10 },

            { reference: "lootjs:cooked_crab", ratio: 10 },
            { reference: "lootjs:cooked_lobster", ratio: 10 },
            { reference: "lootjs:cooked_shrimp", ratio: 10 },
            { reference: "lootjs:cooked_clam_meat", ratio: 10 },
            { reference: "lootjs:cooked_calamari", ratio: 10 },

            { id: "kaleidoscope_cookery:slime_ball_meal", ratio: 10 },
            { id: "vanillacookbook:jelly", ratio: 10 },
            // { id: "kaleidoscope_cookery:qingtuan", ratio: 10 },

            { id: "vanillacookbook:fish_stew", ratio: 10 },

            { id: "barbequesdelight:grilled_cod_skewer", ratio: 10 },
            { id: "barbequesdelight:grilled_salmon_skewer", ratio: 10 },

            { id: "farmersdelight:salmon_roll", ratio: 10 },
            { id: "farmersdelight:cod_roll", ratio: 10 },            

            { id: "rusticdelight:calamari_roll", ratio: 10 },    

            { id: "kaleidoscope_cookery:pufferfish_soup", ratio: 10 },
            { id: "kaleidoscope_cookery:seafood_miso_soup", ratio: 10 },            

            { id: "crabbersdelight:shrimp_skewer", ratio: 10 },
            { id: "crabbersdelight:fish_stick", ratio: 10 },
            { id: "crabbersdelight:crab_cakes", ratio: 10 },
            { id: "crabbersdelight:squid_kebab", ratio: 10 },
            { id: "crabbersdelight:cooked_pufferfish_slice", ratio: 10 },
            { id: "crabbersdelight:cooked_tropical_fish_slice", ratio: 10 },
            { id: "crabbersdelight:bisque", ratio: 10 },
            { id: "crabbersdelight:clam_chowder", ratio: 10 },
            { id: "crabbersdelight:shrimp_fried_rice", ratio: 10 },

            // { id: "minecraft:cooked_beef", ratio: 10 },       // 牛排
            // { id: "minecraft:cooked_porkchop", ratio: 10 },   // 熟猪排
            // { id: "minecraft:cooked_mutton", ratio: 10 },     // 熟羊肉
            // { id: "minecraft:cooked_chicken", ratio: 10 },    // 熟鸡肉
            // rice
            { reference: "lootjs:cooked_rice", ratio: 10 },
            { id: "moredelight:cooked_rice_with_chicken_cuts", ratio: 10 },
            { id: "moredelight:cooked_rice_with_beef", ratio: 10 },
            { id: "moredelight:cooked_rice_with_porkchop", ratio: 10 },


            { id: "alexsmobsdelight:mudskipper_roll", ratio: 10 },
            { id: "alexsmobsdelight:anaconda_catfish_stick", ratio: 10 },
            { id: "alexsmobsdelight:anaconda_congee", ratio: 10 },
            { id: "alexsmobsdelight:crocodile_rice", ratio: 10 },
            { id: "alexsmobsdelight:swamp_soup", ratio: 10 },


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
            { id: "kaleidoscope_chinesefood:sichuan_boiled_fish", ratio: 10 },
            { id: "kaleidoscope_chinesefood:yellow_croaker_soup", ratio: 10 },

            { id: "kaleidoscope_cookery:oil_splashed_fish", ratio: 10 },
            { id: "kaleidoscope_cookery:braised_fish_rice_bowl", ratio: 10 },
            

            { id: "youkaisfeasts:seafood_miso_soup", ratio: 10 },
            { id: "youkaisfeasts:han_palace", ratio: 10 },
            { id: "youkaisfeasts:shirayuki", ratio: 10 },
            { id: "youkaisfeasts:grilled_eel_over_rice", ratio: 10 },
            
            { id: "crabbersdelight:clam_bake", ratio: 10 },
            { id: "crabbersdelight:seafood_gumbo", ratio: 10 },
            { id: "crabbersdelight:surf_and_turf", ratio: 10 },

            { id: "alexsmobsdelight:mudskipper_stew", ratio: 10 },
            { id: "alexsmobsdelight:crocodile_stewed_with_catfish", ratio: 10 },
            { id: "alexsmobsdelight:grilled_turtle_and_anaconda", ratio: 10 },    
            { id: "alexsmobsdelight:cheese_mashed_potatoes_with_anaconda", ratio: 10 },
            { id: "alexsmobsdelight:crocodile_barbecue_stick", ratio: 10 },
            { id: "alexsmobsdelight:bowl_of_stuffed_crocodile", ratio: 10 },
            { id: "alexsmobsdelight:bowl_of_stuffed_crocodile_head", ratio: 10 },
            { id: "alexsmobsdelight:bowl_of_stuffed_crocodile_leg", ratio: 10 },
            { id: "alexsmobsdelight:bowl_of_stuffed_crocodile_tail", ratio: 10 },
            { id: "alexsmobsdelight:bowl_of_stuffed_grilled_anaconda", ratio: 10 },
            { id: "alexsmobsdelight:braised_alligator_snapping_turtle", ratio: 10 },

        ]
    },
]

const village_swamp_drinks = [

    {
        groupName: "juice",
        groupWeight: 50,
        min: 1, max: 1,
        items: [

            { id: "minecraft:potion", ratio: 10 , potion: "minecraft:water" }, 

            { id: "fruitsdelight:mangosteen_tea", ratio: 10 }
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
const village_swamp_house_content = [
    [village_profession_item, 1, 1],
    [village_swamp_base_crops, 1, 1],
    // [village_swamp_other_crops, 1, 1],
    [village_swamp_dish, 1, 1],
    [village_swamp_essential_wealth_equipment, 1, 1],
    [village_cooking_equipment_less, 1, 1],
    [village_swamp_drinks, 1, 1],

];

const loot_village_swamp_house = [
    [village_swamp_house_content, 9],
    [carpenterData.swamp, 1], 
];