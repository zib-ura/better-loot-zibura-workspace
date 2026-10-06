const woodland_mansion_weapon = [
    {
        groupName: "Combat Gear",
        groupWeight: 30,
        min: 1, max: 1,  damage: [0.5, 0.9],
        items: [
            { id: "minecraft:iron_axe", ratio: 10 },
            { id: "minecraft:iron_sword", ratio: 10 },
            { id: "minecraft:crossbow", ratio: 10 },

            // { id: "minecraft:iron_ingot", ratio: 5 },
            // { id: "minecraft:stick", ratio: 5 },


        ]
    },
];


const woodland_mansion_treasure = [
    {
        groupName: "treasure",
        groupWeight: 20,
        min: 1, max: 1,
        items: [
            { id: "minecraft:totem_of_undying", ratio: 5 },
            { id: "minecraft:enchanted_golden_apple", ratio: 5 },
            { id: "minecraft:golden_apple", ratio: 10 }, 
            { id: "minecraft:ender_pearl", ratio: 10 }, 
            { id: "minecraft:vex_armor_trim_smithing_template", ratio: 10 },
 
            { id: "touhou_little_maid:ultramarine_orb_elixir", ratio: 5 },

        ]
    },

    {
        groupName: "diamond_equipment_armors",
        groupWeight: 20,
        min: 1, max: 1, enchantLevels: [30, 30], damage: [0.8, 0.9],
        items: [
            { id: "minecraft:diamond_helmet", ratio: 5 },
            { id: "minecraft:diamond_chestplate", ratio: 5 },
            { id: "minecraft:diamond_leggings", ratio: 5 },
            { id: "minecraft:diamond_boots", ratio: 5 },
        ]
    },

];

const woodland_mansion_ore = [
    {
        groupName: "ingot_block",
        groupWeight: 25,  
        min: 2, max: 3,
        items: [
            // { reference: "lootjs:iron_ingot_and_iron_ingot_block", ratio: 5 },
            // { reference: "lootjs:iron_ingot", ratio: 20 },

            // { reference: "lootjs:copper_ingot_and_copper_ingot_block", ratio: 5 },
            // { reference: "lootjs:copper_ingot", ratio: 20 },

            { reference: "lootjs:gold_ingot_and_gold_ingot_block", ratio: 5 },
            { reference: "lootjs:gold_ingot", ratio: 20 },

            // { reference: "lootjs:redstone_and_redstone_block", ratio: 5 },
            // { reference: "lootjs:redstone", ratio: 20 },

            // { reference: "lootjs:lapis_lazuli_and_lapis_lazuli_block", ratio: 5 },
            // { reference: "lootjs:lapis_lazuli", ratio: 20 },

            { reference: "lootjs:emerald_and_emerald_block", ratio: 5 },
            { reference: "lootjs:emerald", ratio: 20 },

            { reference: "lootjs:quartz_and_quartz_block", ratio: 5 },
            { reference: "lootjs:quartz", ratio: 20 },

            // { reference: "lootjs:raw_zinc_and_raw_zinc_block", ratio: 5 },
            // { reference: "lootjs:raw_zinc", ratio: 20 },

            { reference: "lootjs:diamond_and_diamond_block", ratio: 1 },
            { reference: "lootjs:diamond", ratio: 4 },
        ]
    },

];


const woodland_mansion_music = [
    {
        groupName: "jukebox",
        groupWeight: 25,  
        min: 1, max: 1,
        items: [
            { id: "minecraft:jukebox", ratio: 10 },
        ]
    },


    {
        groupName: "Music Discs",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "minecraft:music_disc_13", ratio: 10 },
            { id: "minecraft:music_disc_cat", ratio: 10 },
            { id: "minecraft:music_disc_blocks", ratio: 10 },
            { id: "minecraft:music_disc_chirp", ratio: 10 },
            { id: "minecraft:music_disc_far", ratio: 10 },
            { id: "minecraft:music_disc_mall", ratio: 10 },
            { id: "minecraft:music_disc_mellohi", ratio: 10 },
            { id: "minecraft:music_disc_stal", ratio: 10 },
            { id: "minecraft:music_disc_strad", ratio: 10 },
            { id: "minecraft:music_disc_ward", ratio: 10 },
            { id: "minecraft:music_disc_11", ratio: 10 },
            { id: "minecraft:music_disc_wait", ratio: 10 },
            { id: "minecraft:music_disc_otherside", ratio: 10 },
            
        ]
    },
];

const woodland_mansion_decorations = [
    {
        groupName: "office_decorations",
        groupWeight: 10,
        min: 1, max: 1,
        items: [
            { id: "minecraft:clock", ratio: 10 },        
            { id: "minecraft:painting", ratio: 10 },     
            { id: "minecraft:item_frame", ratio: 10 },     
            { id: "minecraft:lantern", ratio: 10 },      
            { id: "minecraft:bookshelf", ratio: 10 },      // 书架
            { id: "minecraft:flower_pot", ratio: 10 },     // 花盆
        ]
    }
];

const woodland_mansion_plants = [
    {
        groupName: "overworld_saplings",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "minecraft:oak_sapling", ratio: 10 },
            { id: "minecraft:spruce_sapling", ratio: 10 },
            { id: "minecraft:birch_sapling", ratio: 10 },
            { id: "minecraft:jungle_sapling", ratio: 10 },
            { id: "minecraft:acacia_sapling", ratio: 10 },
            { id: "minecraft:dark_oak_sapling", ratio: 10 },
            { id: "minecraft:mangrove_propagule", ratio: 10 }, // 红树胎生苗
            { id: "minecraft:cherry_sapling", ratio: 10 },     // 樱花树苗
            { id: "minecraft:pale_oak_sapling", ratio: 10 }    // 苍白橡木树苗
        ]
    },
    {
        groupName: "overworld_flowers",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            // 单格花卉
            { id: "minecraft:dandelion", ratio: 10 },          // 蒲公英
            { id: "minecraft:poppy", ratio: 10 },              // 虞美人
            { id: "minecraft:blue_orchid", ratio: 10 },        // 兰花
            { id: "minecraft:allium", ratio: 10 },            // 绒球葱
            { id: "minecraft:azure_bluet", ratio: 10 },        // 美青兰
            { id: "minecraft:red_tulip", ratio: 10 },          // 红色郁金香
            { id: "minecraft:orange_tulip", ratio: 10 },       // 橙色郁金香
            { id: "minecraft:white_tulip", ratio: 10 },        // 白色郁金香
            { id: "minecraft:pink_tulip", ratio: 10 },         // 粉色郁金香
            { id: "minecraft:oxeye_daisy", ratio: 10 },        // 滨菊
            { id: "minecraft:cornflower", ratio: 10 },         // 矢车菊
            { id: "minecraft:lily_of_the_valley", ratio: 10 }, // 谷中百合
            { id: "minecraft:torchflower", ratio: 10 },        // 火把花 (古生物)

            // 双格高花卉
            { id: "minecraft:sunflower", ratio: 10 },          // 向日葵
            { id: "minecraft:lilac", ratio: 10 },              // 丁香
            { id: "minecraft:rose_bush", ratio: 10 },          // 玫瑰丛
            { id: "minecraft:peony", ratio: 10 },              // 牡丹
            { id: "minecraft:pitcher_plant", ratio: 10 }       // 猪笼草 (古生物)
        ]
    }
];


const woodland_mansion_wools_and_dyes = [
    {
        groupName: "wools",
        groupWeight: 50,
        min: 2, max: 3,
        items: [
            { id: "minecraft:white_wool", ratio: 5 },
            { id: "minecraft:orange_wool", ratio: 5 },
            { id: "minecraft:magenta_wool", ratio: 5 },
            { id: "minecraft:light_blue_wool", ratio: 5 },
            { id: "minecraft:yellow_wool", ratio: 5 },
            { id: "minecraft:lime_wool", ratio: 5 },
            { id: "minecraft:pink_wool", ratio: 5 },
            { id: "minecraft:gray_wool", ratio: 5 },
            { id: "minecraft:light_gray_wool", ratio: 5 },
            { id: "minecraft:cyan_wool", ratio: 5 },
            { id: "minecraft:purple_wool", ratio: 5 },
            { id: "minecraft:blue_wool", ratio: 5 },
            { id: "minecraft:brown_wool", ratio: 5 },
            { id: "minecraft:green_wool", ratio: 5 },
            { id: "minecraft:red_wool", ratio: 5 },
            { id: "minecraft:black_wool", ratio: 5 }
        ]
    },

    {
        groupName: "dyes",
        groupWeight: 50,
        min: 2, max: 3,
        items: [
            { id: "minecraft:white_dye", ratio: 5 },
            { id: "minecraft:orange_dye", ratio: 5 },
            { id: "minecraft:magenta_dye", ratio: 5 },
            { id: "minecraft:light_blue_dye", ratio: 5 },
            { id: "minecraft:yellow_dye", ratio: 5 },
            { id: "minecraft:lime_dye", ratio: 5 },
            { id: "minecraft:pink_dye", ratio: 5 },
            { id: "minecraft:gray_dye", ratio: 5 },
            { id: "minecraft:light_gray_dye", ratio: 5 },
            { id: "minecraft:cyan_dye", ratio: 5 },
            { id: "minecraft:purple_dye", ratio: 5 },
            { id: "minecraft:blue_dye", ratio: 5 },
            { id: "minecraft:brown_dye", ratio: 5 },
            { id: "minecraft:green_dye", ratio: 5 },
            { id: "minecraft:red_dye", ratio: 5 },
            { id: "minecraft:black_dye", ratio: 5 }
        ]
    },

    {
        groupName: "product",
        groupWeight: 50,
        min: 2, max: 3,
        items: [
            { id: "minecraft:loom", ratio: 5 , max: 1 },
            { id: "minecraft:gray_banner", ratio: 5 },
            { id: "minecraft:black_banner", ratio: 5 },
            { id: "minecraft:white_banner", ratio: 5 },

        ]
    }
];

const woodland_mansion_alcohol = [
    {
        groupName: "alcohol",
        groupWeight: 25,
        min: 1, max: 1,
        items: [
            { id: "brewinandchewin:dread_nog", ratio: 1 },
            // { id: "kaleidoscope_tavern:rum", ratio: 1, jsonFunction:{"function": "kaleidoscope_tavern:brew_level=6"} },
            { id: "minecraft:ominous_bottle", ratio: 1 },

        ]
    },
];

const woodland_mansion_all_village_house_special_dish = [
    {
        groupName: "desert_house",
        groupWeight: 10, 
        min: 1, max: 1,
        items: village_desert_dish_special
    },
    {
        groupName: "plains_house_europe",
        groupWeight: 10, 
        min: 1, max: 1,
        items: village_plains_prepared_food
    },
    {
        groupName: "plains_house_asia",
        groupWeight: 10, 
        min: 1, max: 1,
        items: village_plains_dish
    },
    {
        groupName: "savanna_house",
        groupWeight: 10, 
        min: 1, max: 1,
        items: village_savanna_dish_special
    },
    {
        groupName: "snowy_house",
        groupWeight: 10, 
        min: 1, max: 1,
        items: village_snowy_dish_special
    },
    // {
    //     groupName: "taiga_house",
    //     groupWeight: 10, 
    //     min: 2, max: 3,
    //     items: village_taiga_dish_special
    // },
    // {
    //     groupName: "dark_forest_house",
    //     groupWeight: 10, 
    //     min: 2, max: 3,
    //     items: village_dark_forest_dish_special
    // },
    // {
    //     groupName: "mushroom_house",
    //     groupWeight: 15, 
    //     min: 2, max: 3,
    //     items: village_mushroom_dish_special
    // },
    // {
    //     groupName: "swamp_house",
    //     groupWeight: 10, 
    //     min: 2, max: 3,
    //     items: village_swamp_dish_special
    // },
    // {
    //     groupName: "jungle_house",
    //     groupWeight: 10, 
    //     min: 2, max: 3,
    //     items: village_jungle_dish_special
    // },
    // {
    //     groupName: "ocean_house",
    //     groupWeight: 10, 
    //     min: 2, max: 3,
    //     items: village_ocean_dish_special
    // }
];

const woodland_mansion_all_village_house_common_dish = [
    {
        groupName: "desert_house",
        groupWeight: 10, 
        min: 2, max: 3,
        items: village_desert_dish_common
    },
    {
        groupName: "plains_house_europe",
        groupWeight: 10, 
        min: 2, max: 3,
        items: village_plains_dish_common_europe
    },
    {
        groupName: "plains_house_asia",
        groupWeight: 10, 
        min: 2, max: 3,
        items: village_plains_dish_common_asia
    },
    {
        groupName: "savanna_house",
        groupWeight: 10, 
        min: 2, max: 3,
        items: village_savanna_dish_common
    },
    {
        groupName: "snowy_house",
        groupWeight: 10, 
        min: 2, max: 3,
        items: village_snowy_dish_common
    },
    // {
    //     groupName: "taiga_house",
    //     groupWeight: 10, 
    //     min: 2, max: 3,
    //     items: village_taiga_dish_common
    // },
    // {
    //     groupName: "dark_forest_house",
    //     groupWeight: 10, 
    //     min: 2, max: 3,
    //     items: village_dark_forest_dish_common
    // },
    // {
    //     groupName: "mushroom_house",
    //     groupWeight: 15, 
    //     min: 2, max: 3,
    //     items: village_mushroom_dish_common
    // },
    // {
    //     groupName: "swamp_house",
    //     groupWeight: 10, 
    //     min: 2, max: 3,
    //     items: village_swamp_dish_common
    // },
    // {
    //     groupName: "jungle_house",
    //     groupWeight: 10, 
    //     min: 2, max: 3,
    //     items: village_jungle_dish_common
    // },
    // {
    //     groupName: "ocean_house",
    //     groupWeight: 10, 
    //     min: 2, max: 3,
    //     items: village_ocean_dish_common
    // }
];

const woodland_mansion_enchanted_book = [
    {
        groupName: "pillager",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:unbreaking"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:mending"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:sharpness"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:knockback"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:fire_aspect"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:looting"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:sweeping_edge"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["enchantencore:weaving_aspect"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["farmersdelight:backstabbing"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:heavy"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:blunt"] },
        ]
    }
];
// =================================================================
// 事件注册区域
// =================================================================

// 1. weapon
const woodland_mansion_weapon_content = [
    [woodland_mansion_weapon, 6, 7],
    [iron_nugget, 3, 4],

];

// 2. treasure
const woodland_mansion_treasure_content = [
    [woodland_mansion_treasure, 2, 3],
    [woodland_mansion_ore, 2, 3],
    [woodland_mansion_enchanted_book, 1, 1],
];

// 3. decoration
const woodland_mansion_decoration_content = [
    [woodland_mansion_music, 2, 3],
    [woodland_mansion_decorations, 2, 3],
    [woodland_mansion_plants, 2, 3]
];

// 4. wools_and_dyes
const woodland_mansion_wools_and_dyes_content = [
    [woodland_mansion_wools_and_dyes, 5, 6],
];

// 5. cuisine
const woodland_mansion_cuisine_content = [
    [woodland_mansion_all_village_house_special_dish, 2, 3],
    [woodland_mansion_all_village_house_common_dish, 2, 3],
    [woodland_mansion_alcohol, 0, 1],
    [common_cooking_equipment, 1, 1],
];

const loot_woodland_mansion = [
    [woodland_mansion_weapon_content, 1],
    [woodland_mansion_treasure_content, 1], 
    [woodland_mansion_decoration_content, 1],
    [woodland_mansion_wools_and_dyes_content, 1],
    [woodland_mansion_cuisine_content, 1],
    [food_supply_content, 1],
];