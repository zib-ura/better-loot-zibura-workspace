// =================================================================
// 战利品表定义区域
// =================================================================

const village_ocean_base_crops = [

    {
        groupName: "common",
        groupWeight: 70, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds", ratio: 5 },
            { reference: "lootjs:wheat", ratio: 10 },
            { reference: "lootjs:wheat_and_wheat_block", ratio: 10 },

            { reference: "lootjs:kelp", ratio: 15 },
            { reference: "lootjs:kelp_and_kelp_block", ratio: 10 },

            { reference: "lootjs:cod", ratio: 15 },
            { reference: "lootjs:cod_and_cod_block", ratio: 10 },

            { reference: "lootjs:salmon", ratio: 15 },
            { reference: "lootjs:salmon_and_salmon_block", ratio: 10 },

            { reference: "lootjs:tropical_fish", ratio: 15 },
            { reference: "lootjs:tropical_fish_and_tropical_fish_block", ratio: 10 },

            { reference: "lootjs:pufferfish", ratio: 15 },
            { reference: "lootjs:pufferfish_and_pufferfish_block", ratio: 10 },

            { reference: "lootjs:crab", ratio: 15 },
            { reference: "lootjs:crab_and_crab_block", ratio: 10 },

            { reference: "lootjs:lobster", ratio: 15 },
            { reference: "lootjs:lobster_and_lobster_block", ratio: 10 },

            { reference: "lootjs:shrimp", ratio: 15 },
            { reference: "lootjs:shrimp_and_shrimp_block", ratio: 10 },

            { reference: "lootjs:clam", ratio: 15 },
            { reference: "lootjs:clam_and_clam_block", ratio: 10 },
        ]
    },

    {
        groupName: "special",
        groupWeight: 30, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:rice", ratio: 25 },

            { reference: "lootjs:potato", ratio: 25 },

            { reference: "lootjs:onion", ratio: 25 },

            { reference: "lootjs:cabbage_seeds", ratio: 5 },
            { reference: "lootjs:cabbage", ratio: 20 },

            { reference: "lootjs:lettuce_seeds", ratio: 5 },
            { reference: "lootjs:lettuce", ratio: 20 },

            { reference: "lootjs:egg", ratio: 25 },
        ]
    },
]

const village_ocean_wealth_equipment = [
    {
        groupName: "Villager Daily Essentials",
        groupWeight: 30, 
        min: 2, max: 3,
        items: [
            { id: "minecraft:lantern", ratio: 10 },
            { id: "minecraft:charcoal", ratio: 10 },
            { id: "minecraft:glass_bottle", ratio: 10 },
            { id: "minecraft:bowl", ratio: 10 },
            { id: "minecraft:oat_boat", ratio: 10 },
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

const village_ocean_dish = [
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

            { id: "vanillacookbook:fish_stew", ratio: 10 },

            { id: "barbequesdelight:grilled_cod_skewer", ratio: 10 },
            { id: "barbequesdelight:grilled_salmon_skewer", ratio: 10 },

            { id: "farmersdelight:salmon_roll", ratio: 10 },
            { id: "farmersdelight:cod_roll", ratio: 10 },            

            { id: "rusticdelight:calamari_roll", ratio: 10 },    

            { id: "kaleidoscope_cookery:pufferfish_soup", ratio: 10 },
            { id: "kaleidoscope_cookery:seafood_miso_soup", ratio: 10 },            
            

            { id: "vanillacookbook:kelp_salad", ratio: 10 },          
            { id: "kitchenkarrot:crispy_bread_with_kelp", ratio: 10 },           
            { id: "farmersdelight:kelp_roll_slice", ratio: 10 },   
            { id: "kaleidoscope_chinesefood:seaweed_egg_drop_soup", ratio: 10 },            
            { id: "youkaisfeasts:onigili", ratio: 10 },  
   
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
            { id: "brewinandchewin:kippers", ratio: 10 },
            { id: "culturaldelights:pickle", ratio: 10 },
            { id: "vintagedelight:pickled_onion", ratio: 10 },
            { id: "vintagedelight:pickled_beetroot", ratio: 10 },
            { id: "vintagedelight:pickle", ratio: 10 },
            { id: "vintagedelight:pickled_egg", ratio: 10 },

            { id: "crabbersdelight:jar_of_pickles", ratio: 10 },
            { id: "crabbersdelight:kelp_shake", ratio: 10 },
            { id: "crabbersdelight:sea_pickle_juice", ratio: 10 },

            { id: "crabbersdelight:shrimp_skewer", ratio: 10 },
            { id: "crabbersdelight:fish_stick", ratio: 10 },
            { id: "crabbersdelight:crab_cakes", ratio: 10 },
            { id: "crabbersdelight:squid_kebab", ratio: 10 },
            { id: "crabbersdelight:cooked_pufferfish_slice", ratio: 10 },
            { id: "crabbersdelight:cooked_tropical_fish_slice", ratio: 10 },
            { id: "crabbersdelight:bisque", ratio: 10 },
            { id: "crabbersdelight:clam_chowder", ratio: 10 },
            { id: "crabbersdelight:shrimp_fried_rice", ratio: 10 },


            { id: "alexsmobsdelight:crispy_fish_bone", ratio: 10 },
            { id: "alexsmobsdelight:flying_fish_roll", ratio: 10 },
            { id: "alexsmobsdelight:takoyaki", ratio: 10 },
            { id: "alexsmobsdelight:mantis_shrimp_tempura", ratio: 10 },
            // { id: "alexsmobsdelight:shrimp_fried_egg", ratio: 10 },
            { id: "alexsmobsdelight:skelewag_eye_soup", ratio: 10 },
            { id: "alexsmobsdelight:fish_bone_algae_soup", ratio: 10 },
            { id: "alexsmobsdelight:sea_bear_stew", ratio: 10 },

       
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

            { id: "rustic_delight:fried_calamari", ratio: 10 },

            { id: "crabbersdelight:clam_bake", ratio: 10 },
            { id: "crabbersdelight:seafood_gumbo", ratio: 10 },
            { id: "crabbersdelight:surf_and_turf", ratio: 10 },
            
            { id: "alexsmobsdelight:flying_fish_stew", ratio: 10 },
            { id: "alexsmobsdelight:orcas_leap_soup", ratio: 10 },
            { id: "alexsmobsdelight:shrimp_poke_bowl", ratio: 10 },
            { id: "alexsmobsdelight:whale_burger", ratio: 10 },
            { id: "alexsmobsdelight:whale_skin_stew", ratio: 10 },
            { id: "alexsmobsdelight:tentacle_medley", ratio: 10 },
            { id: "alexsmobsdelight:pot_of_whale_meat_stewed_with_pork", ratio: 10 }, 
        ]
    },
]

const village_ocean_drinks = [
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
const village_ocean_house_content = [
    [village_profession_item, 1, 1],
    [village_ocean_base_crops, 2, 2],
    [village_ocean_wealth_equipment, 1, 1],
    [village_ocean_dish, 1, 1],
    [village_ocean_drinks, 1, 1],
    [village_cooking_equipment_less, 1, 1],


];

const loot_village_ocean_house = [
    [village_ocean_house_content, 1],
];