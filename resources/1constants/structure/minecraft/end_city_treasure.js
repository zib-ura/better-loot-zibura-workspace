// ["minecraft:chorus_fruit", "kaleidoscope_end:ender_mint", "ends_delight:chorus_fruit_grain", "ends_delight:chorus_succulent", "ends_delight:dried_chorus_flower", "endersdelight:amberveil", "endersdelight:chorusflame", "endersdelight:voidpepper", "kaleidoscope_end:dream_berry", "kaleidoscope_end:chorus_seed", "kaleidoscope_end:chorus_petal", "ends_delight:raw_ender_mite_meat", "ends_delight:enderman_gristle", "endersdelight:ender_shard", "ends_delight:ender_pearl_grain", "kaleidoscope_end:optic_nerve", "endersdelight:enderman_sight", "endersdelight:sight_fragments"]// =================================================================
// 战利品表定义区域
// =================================================================

const end_city_base_crops = [

    {
        groupName: "base_crops",
        groupWeight: 80, 
        min: 1, max: 2,
        items: [
            { id: "minecraft:chorus_fruit", ratio: 10 },
            { id: "minecraft:ender_pearl", ratio: 10 },

            { id: "endersdelight:amberveil", ratio: 10 },
            { id: "endersdelight:chorusflame", ratio: 10 },
            { id: "endersdelight:ender_shard", ratio: 10 },
            { id: "endersdelight:enderman_sight", ratio: 10 },
            { id: "endersdelight:sight_fragments", ratio: 10 },
            { id: "endersdelight:voidpepper", ratio: 10 },
            { id: "endersdelight:shulker_filet", ratio: 10 },
            { id: "endersdelight:shulker_mollusk", ratio: 10 },

            { id: "ends_delight:chorus_fruit_grain", ratio: 10 },
            { id: "ends_delight:chorus_succulent", ratio: 10 },
            { id: "ends_delight:dried_chorus_flower", ratio: 10 },
            { id: "ends_delight:ender_pearl_grain", ratio: 10 },
            { id: "ends_delight:enderman_gristle", ratio: 10 },
            { id: "ends_delight:raw_ender_mite_meat", ratio: 10 },
            { id: "ends_delight:shulker_meat", ratio: 10 },
            { id: "ends_delight:shulker_meat_slice", ratio: 10 },

            { id: "kaleidoscope_end:chorus_petal", ratio: 10 },
            { id: "kaleidoscope_end:chorus_seed", ratio: 10 },
            { id: "kaleidoscope_end:dream_berry", ratio: 10 },
            { id: "kaleidoscope_end:ender_mint", ratio: 10 },
            { id: "kaleidoscope_end:optic_nerve", ratio: 10 },
            { id: "kaleidoscope_end:raw_endermite_meat", ratio: 10 },
            { id: "kaleidoscope_end:shulker_shell_meat", ratio: 10 },



        ]
    },
    
]

const end_city_cooking_equipment = [
    {
        groupName: "cooking_equipment",
        groupWeight: 30,
        min: 1, max: 1, damage: [0.8, 0.9],
        items: [
            { id: "endersdelight:endstone_stove", ratio: 10 },
            { id: "ends_delight:end_stone_knife", ratio: 10 },
            { id: "ends_delight:end_stove", ratio: 10 },
            { id: "ends_delight:purpur_knife", ratio: 10 },

            { id: "kaleidoscope_end:end_stove", ratio: 10 },
            
            { id: "kaleidoscope_cookery:stockpot", ratio: 10 }, 
            { id: "kaleidoscope_cookery:pot", ratio: 10 }, 
            { id: "kaleidoscope_cookery:stockpot_lid", ratio: 10 }, 
            { id: "kaleidoscope_cookery:kitchen_shovel", ratio: 10 }, 

            { id: "farmersdelight:cooking_pot", ratio: 10 }, 
            { id: "farmersdelight:skillet", ratio: 10 },    
        ]
    },
]

const end_city_essential_wealth_equipment = [

    {
        groupName: "Villager Daily Essentials",
        groupWeight: 30, 
        min: 1, max: 1,
        items: [
            // --- Household Utilities ---
            { id: "minecraft:glass_bottle", ratio: 10 },
            { id: "endersdelight:shulker_bowl", ratio: 10 },
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
            { id: "minecraft:diamond", ratio: 20 },
        ]
    },
]

const end_city_dish = [
    {
        groupName: "common",
        groupWeight: 90,
        min: 1, max: 1,
        items: [

            { id: "endersdelight:amberveil_stew", ratio: 10 },
            { id: "endersdelight:amberveiled_curry", ratio: 10 },
            { id: "endersdelight:chicken_curry", ratio: 10 },
            { id: "endersdelight:chorus_pie", ratio: 10 },
            { id: "endersdelight:chorus_stew", ratio: 10 },
            { id: "endersdelight:crawling_sandwich", ratio: 10 },
            { id: "endersdelight:crispy_skewer", ratio: 10 },
            { id: "endersdelight:ender_paella", ratio: 10 },
            { id: "endersdelight:endermite_stew", ratio: 10 },
            { id: "endersdelight:pearl_pasta", ratio: 10 },
            { id: "endersdelight:steak_fries", ratio: 10 },
            { id: "endersdelight:stuffed_shulker_bowl", ratio: 10 },
            { id: "endersdelight:twisted_cereal", ratio: 10 },
            { id: "endersdelight:uncanny_cookies", ratio: 10 },
            { id: "endersdelight:veil_of_flames_risotto", ratio: 10 },
            { id: "endersdelight:strange_eclair", ratio: 10 },
            
            { id: "ends_delight:chorus_cookie", ratio: 10 },
            { id: "ends_delight:ender_sausage", ratio: 10 },
            { id: "ends_delight:chorus_flower_pie", ratio: 10 },
            { id: "ends_delight:chorus_fruit_pie", ratio: 10 },
            { id: "ends_delight:end_barbecue_stick", ratio: 10 },
            { id: "ends_delight:end_mixed_salad", ratio: 10 },
            { id: "ends_delight:ender_noodle", ratio: 10 },
            { id: "ends_delight:enderman_gristle_stew", ratio: 10 },
            { id: "ends_delight:shulker_omelette", ratio: 10 },
            { id: "ends_delight:shulker_soup", ratio: 10 },
            { id: "ends_delight:stir_fried_shulker_meat", ratio: 10 },
            { id: "ends_delight:stuffed_rice_cake", ratio: 10 },
            { id: "ends_delight:chorus_fruit_popsicle", ratio: 10 },
            // { id: "ends_delight:dragon_leg", ratio: 10 },
            // { id: "ends_delight:raw_dragon_meat", ratio: 10 },
            // { id: "ends_delight:raw_dragon_meat_cuts", ratio: 10 },
            // { id: "kaleidoscope_end:raw_ender_dragon_meat", ratio: 10 },


            { id: "kaleidoscope_end:chorus_flower_cake", ratio: 10 },
            { id: "kaleidoscope_end:chorus_flower_soup", ratio: 10 },
            { id: "kaleidoscope_end:chorus_pasta", ratio: 10 },
            { id: "kaleidoscope_end:chorus_seed_cookie", ratio: 10 },
            { id: "kaleidoscope_end:end_salad", ratio: 10 },
            { id: "kaleidoscope_end:mint_chorus_mousse", ratio: 10 },
            { id: "kaleidoscope_end:mint_sauce_shulker_meat", ratio: 10 },
            { id: "kaleidoscope_end:roasted_endermite_meat", ratio: 10 },
            { id: "kaleidoscope_end:shulker_ice_cream", ratio: 10 },
            { id: "kaleidoscope_end:shulker_shell_stew", ratio: 10 },
            { id: "kaleidoscope_end:stir_fried_endermite_meat", ratio: 10 },



            { id: "kaleidoscope_end:dragon_breath_popping_candy", ratio: 10 },
            { id: "kaleidoscope_end:ender_mint_candy", ratio: 10 },

            { id: "vanillacookbook:chorus_roll", ratio: 10 },
            { id: "vanillacookbook:ender_pie", ratio: 10 },
            { id: "vanillacookbook:chorus_juice", ratio: 10 },
            { id: "fruitsdelight:chorus_jam", ratio: 10 },

        ]
    },

    {
        groupName: "special",
        groupWeight: 10, 
        min: 1, max: 1,
        items: [
            { id: "ends_delight:dragon_breath_and_chorus_soup", ratio: 10 },
            { id: "ends_delight:dragon_leg_with_sauce", ratio: 10 },
            { id: "ends_delight:dragon_meat_stew", ratio: 10 },
            { id: "ends_delight:ender_bamboo_rice", ratio: 10 },
            { id: "ends_delight:ender_congee", ratio: 10 },
            { id: "ends_delight:fried_dragon_egg", ratio: 10 },
            { id: "ends_delight:roasted_dragon_meat", ratio: 10 },
            { id: "ends_delight:roasted_dragon_steak", ratio: 10 },
            { id: "ends_delight:smoked_dragon_leg", ratio: 10 },
            { id: "ends_delight:steamed_dragon_egg", ratio: 10 },
            { id: "ends_delight:assorted_salad", ratio: 10 },

            { id: "kaleidoscope_end:cooked_ender_dragon_meat", ratio: 10 },
            { id: "kaleidoscope_end:dark_dragon_egg_stew", ratio: 10 },
            { id: "kaleidoscope_end:dark_dragon_steak", ratio: 10 },
            { id: "kaleidoscope_end:dragon_breath_chorus_soup", ratio: 10 },
            { id: "kaleidoscope_end:dragon_breath_mixed_stew", ratio: 10 },
            { id: "kaleidoscope_end:dragon_egg_custard", ratio: 10 },
            { id: "kaleidoscope_end:dragon_egg_ice_cream", ratio: 10 },
            { id: "kaleidoscope_end:dragon_head_with_sauce", ratio: 10 },
            { id: "kaleidoscope_end:dragon_souffle", ratio: 10 },
            { id: "kaleidoscope_end:end_caterpillar", ratio: 10 },
            { id: "kaleidoscope_end:end_caterpillar_sashimi", ratio: 10 },
            { id: "kaleidoscope_end:fried_dragon_egg", ratio: 10 },
            { id: "kaleidoscope_end:mint_noodle_soup", ratio: 10 },
            { id: "kaleidoscope_end:mint_sauce_shulker_meat_rice_bowl", ratio: 10 },
            { id: "kaleidoscope_end:optic_nerve_sweet_and_sour_pork", ratio: 10 },
            { id: "kaleidoscope_end:stir_fried_endermite_meat_rice_bowl", ratio: 10 },
            { id: "kaleidoscope_end:stuffed_shulker", ratio: 10 },
            { id: "kaleidoscope_end:stuffed_void_conch", ratio: 10 },
            { id: "kaleidoscope_end:void_conch_noodle_soup", ratio: 10 },
            { id: "kaleidoscope_end:void_mutton_steak", ratio: 10 },

            { id: "vanillacookbook:chorus_cake", ratio: 10 },
            { id: "kitchenkarrot:chorus_mousse", ratio: 10 },
        ]
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
]

const end_city_drinks = [
    {
        groupName: "drinks",
        groupWeight: 10,
        min: 1, max: 1,
        items: [
            { id: "endersdelight:chorus_juice", ratio: 10 },
            { id: "ends_delight:bubble_tea", ratio: 10 },
            { id: "ends_delight:chorus_flower_tea", ratio: 10 },
            { id: "ends_delight:chorus_fruit_milk_tea", ratio: 10 },
            { id: "ends_delight:chorus_fruit_wine", ratio: 10 },
            { id: "ends_delight:dragon_breath_soda", ratio: 10 },
            { id: "kaleidoscope_end:ender_dragon_tea", ratio: 10 },
            { id: "kaleidoscope_end:ender_mint_tea", ratio: 10 },
            { id: "kaleidoscope_end:void_tea", ratio: 10 },
            { id: "kaleidoscope_end:chorus_flower_tea", ratio: 10 },

        ]
    },
    {
        groupName: "empty",
        groupWeight: 90,
        items: [
            { id: "empty" },
        ]
    },
]

const end_city_equipment = [

    {
        groupName: "common_armors",
        groupWeight: 25,
        min: 1, max: 1, enchantLevels: [20, 40], damage: [0.7, 0.8],
        items: [

            { id: "immersive_armors:bone_helmet", ratio: 6 },
            { id: "immersive_armors:bone_chestplate", ratio: 6 },
            { id: "immersive_armors:bone_leggings", ratio: 6 },
            { id: "immersive_armors:bone_boots", ratio: 6 },

            { id: "immersive_armors:warrior_helmet", ratio: 2 },
            { id: "immersive_armors:warrior_chestplate", ratio: 2 },
            { id: "immersive_armors:warrior_leggings", ratio: 2 },
            { id: "immersive_armors:warrior_boots", ratio: 2 },

            { id: "minecraft:iron_helmet", ratio: 2 },
            { id: "minecraft:iron_chestplate", ratio: 2 },
            { id: "minecraft:iron_leggings", ratio: 2 },
            { id: "minecraft:iron_boots", ratio: 2 },

            { id: "minecraft:chainmail_helmet", ratio: 2 },
            { id: "minecraft:chainmail_chestplate", ratio: 2 },
            { id: "minecraft:chainmail_leggings", ratio: 2 },
            { id: "minecraft:chainmail_boots", ratio: 2 },

            { id: "immersive_armors:heavy_helmet", ratio: 2 },
            { id: "immersive_armors:heavy_chestplate", ratio: 2 },
            { id: "immersive_armors:heavy_leggings", ratio: 2 },
            { id: "immersive_armors:heavy_boots", ratio: 2 },

            { id: "immersive_armors:divine_helmet", ratio: 1.5 },
            { id: "immersive_armors:divine_chestplate", ratio: 1.5 },
            { id: "immersive_armors:divine_leggings", ratio: 1.5 },
            { id: "immersive_armors:divine_boots", ratio: 1.5 },

            { id: "minecraft:saddle", ratio: 10 },
        ]
    },

    {
        groupName: "rare_armors",
        groupWeight: 25,
        min: 1, max: 1, enchantLevels: [20, 40], damage: [0.7, 0.8],
        items: [


            { id: "minecraft:diamond_helmet", ratio: 1.5 },
            { id: "minecraft:diamond_chestplate", ratio: 1.5 },
            { id: "minecraft:diamond_leggings", ratio: 1.5 },
            { id: "minecraft:diamond_boots", ratio: 1.5 },
        ]
    },

    {
        groupName: "common_weapons",
        groupWeight: 25,
        min: 1, max: 1, enchantLevels: [20, 40], damage: [0.7, 0.8],
        items: [
            { id: "minecraft:iron_sword", ratio: 10 },
            { id: "minecraft:iron_axe", ratio: 10 },
            { id: "minecraft:iron_pickaxe", ratio: 10 },
            { id: "minecraft:iron_shovel", ratio: 10 },
            { id: "minecraft:iron_hoe", ratio: 10 },
            { id: "minecraft:bow", ratio: 10 },
            { id: "minecraft:crossbow", ratio: 10 },
            { id: "minecraft:shield", ratio: 10 },
            { id: "minecraft:mace", ratio: 1 },
            { id: "minecraft:trident", ratio: 1 },
        ]
    },

    {
        groupName: "rare_weapons", 
        groupWeight: 25,
        min: 1, max: 1, enchantLevels: [20, 40], damage: [0.7, 0.8],
        items: [
            { id: "minecraft:diamond_sword", ratio: 10 },
            { id: "minecraft:diamond_axe", ratio: 10 },
            { id: "minecraft:diamond_pickaxe", ratio: 10 },
            { id: "minecraft:diamond_shovel", ratio: 10 },
            { id: "minecraft:diamond_hoe", ratio: 10 },
        ]
    },


// ];

// const end_city_supply = [
    {
        groupName: "ore",
        groupWeight: 50,
        min: 2, max: 3,
        items: [
            { reference: "lootjs:iron_ingot_and_iron_ingot_block", ratio: 5 },
            { reference: "lootjs:iron_ingot", ratio: 20 },

            { reference: "lootjs:coal_and_coal_block", ratio: 5 },
            { reference: "lootjs:coal", ratio: 20 },

            // { reference: "lootjs:copper_ingot_and_copper_ingot_block", ratio: 5 },
            // { reference: "lootjs:copper_ingot", ratio: 20 },

            { reference: "lootjs:gold_ingot_and_gold_ingot_block", ratio: 5 },
            { reference: "lootjs:gold_ingot", ratio: 20 },

            // { reference: "lootjs:redstone_and_redstone_block", ratio: 5 },
            // { reference: "lootjs:redstone", ratio: 20 },

            // { reference: "lootjs:lapis_and_lapis_block", ratio: 5 },
            // { reference: "lootjs:lapis", ratio: 20 },

            { reference: "lootjs:emerald_and_emerald_block", ratio: 5 },
            { reference: "lootjs:emerald", ratio: 20 },

            { reference: "lootjs:diamond_and_diamond_block", ratio: 1 },
            { reference: "lootjs:diamond", ratio: 4 },

        ]
    },
    {
        groupName: "ender_pearl",
        groupWeight: 25,
        min: 2, max: 3,
        items: [
            { id: "minecraft:ender_pearl", ratio: 5 },
        ]
    },
    {
        groupName: "stick",
        groupWeight: 25,
        min: 2, max: 3,
        items: [
            { id: "minecraft:stick", ratio: 5 },
        ]
    },
]
const end_city_enchanted_book = [
    {
        groupName: "end_city",
        groupWeight: 50,
        min: 1, max: 1,
        items: [

            // ---- 装备通用 (工具/武器/防具) ----
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:unbreaking"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:mending"] },
            // ---- 防具通用 ----
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:protection"] },         
            // ---- 脚部 (靴子) ----
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:feather_falling"] },     
            // { id: "minecraft:book", ratio: 10, enchantRandomly: ["kaleidoscope_end:void_walker"] },

            // ---- 飞行 (鞘翅) ----
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:wax_wings"] },


            // ---- 近战武器 (剑/通用斧) ----
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:sharpness"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:looting"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:sweeping_edge"] }, 

            // { id: "minecraft:book", ratio: 10, enchantRandomly: ["kaleidoscope_end:void_assault"] },
            // { id: "minecraft:book", ratio: 10, enchantRandomly: ["kaleidoscope_end:void_echo"] },

            // ---- 远程武器：弓 (Bow) ----
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:power"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:infinity"] },
            
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["touhou_little_maid:enders_ender"] }, 

        ]
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
];

const end_city_smithing_templates_common = [
    {
        groupName: "Smithing Templates",
        groupWeight: 1,  
        min: 1, max: 1,
        items: [
            { id: "minecraft:spire_armor_trim_smithing_template", ratio: 10 },
        ]
    },

    {
        groupName: "empty",
        groupWeight: 14,
        items: [
            { id: "empty" },
        ]
    },
];

const end_city_smithing_templates_rare = [
    {
        groupName: "Smithing Templates",
        groupWeight: 1,  
        min: 1, max: 1,
        items: [
            { id: "kaleidoscope_end:ender_dragon_smithing_template", ratio: 1 },
        ]
    },

    {
        groupName: "empty",
        groupWeight: 999,
        items: [
            { id: "empty" },
        ]
    },
];



const end_city_maid = [
    {
        groupName: "Smithing Templates",
        groupWeight: 20,  
        min: 1, max: 1,
        items: [
            { id: "touhou_little_maid:ender_chest_backpack", ratio: 10 },
        ]
    },

    {
        groupName: "empty",
        groupWeight: 80,
        items: [
            { id: "empty" },
        ]
    },
];
// =================================================================
// 事件注册区域
// =================================================================
const end_city_content = [
    [end_city_base_crops, 1, 1],
    // [end_city_cooking_equipment, 1, 1],
    [end_city_essential_wealth_equipment, 1, 1],
    [end_city_dish, 1, 1],
    [end_city_drinks, 1, 1],
    [end_city_equipment, 1, 3],
    [end_city_enchanted_book, 1, 1],
    [end_city_smithing_templates_common, 1, 1],
    [end_city_smithing_templates_rare, 1, 1],
    [end_city_maid, 1, 1],

];

const loot_end_city_treasure = [
    [end_city_content, 1],
];