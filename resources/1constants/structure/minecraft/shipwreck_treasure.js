const shipwreck_treasure_crops = [
    {
        groupName: "New World Crops",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            // ------- 火把花、瓶子草、灯笼果 (来自 Trail and Tales & 模组) -------
            { id: "minecraft:torchflower", ratio: 10 },
            { id: "minecraft:torchflower_seeds", ratio: 10 },
            { id: "minecraft:pitcher_plant", ratio: 10 },
            { id: "minecraft:pitcher_pod", ratio: 10 },
            { id: "trailandtales_delight:lantern_fruit", ratio: 10 },
            { id: "trailandtales_delight:lantern_fruit_seeds", ratio: 10 },
            { id: "minecraft:sniffer_egg", ratio: 10 },


            // // ------- 来自遥远大陆的作物 (原版 & 模组) -------
            // { id: "minecraft:cocoa_beans", ratio: 10 },
            // { id: "minecraft:sugar_cane", ratio: 8 },
            // { id: "minecraft:pumpkin_seeds", ratio: 8 },
            // { id: "minecraft:melon_seeds", ratio: 8 },
            // { id: "farmersdelight:tomato_seeds", ratio: 10 },
            // { id: "farmersdelight:onion", ratio: 6 },
            // { id: "farmersdelight:cabbage_seeds", ratio: 8 },
            // { id: "farmersdelight:rice", ratio: 8 },
            // { id: "rusticdelight:coffee_beans", ratio: 8 },
            // { id: "rusticdelight:bell_pepper_seeds", ratio: 6 },
            // { id: "rusticdelight:cotton_seeds", ratio: 6 },
            // { id: "farm_and_charm:strawberry_seeds", ratio: 6 },
            // { id: "farm_and_charm:barley_seeds", ratio: 6 },
            // { id: "casualnessdelight:capsicum_seeds", ratio: 6 },   // 辣椒种子
            // { id: "brewery:hops", ratio: 6 },                      // 啤酒花
        ]
    },
    {
        groupName: "empty",
        groupWeight: 100,
        items: [
            { id: "empty" },
        ]
    },
];

const shipwreck_treasure_valuables = [
    {
        groupName: "common",
        groupWeight: 90,
        min: 2, max: 3,
        items: [

            { reference: "lootjs:emerald_and_emerald_block", ratio: 5 },
            { reference: "lootjs:emerald", ratio: 20 },

            { reference: "lootjs:gold_ingot_and_gold_ingot_block", ratio: 10 },
            { reference: "lootjs:gold_ingot", ratio: 40 },

            // { reference: "lootjs:iron_ingot_and_iron_ingot_block", ratio: 5 },
            // { reference: "lootjs:iron_ingot", ratio: 20 },

            // { reference: "lootjs:copper_ingot_and_copper_ingot_block", ratio: 5 },
            // { reference: "lootjs:copper_ingot", ratio: 20 },

            // { reference: "lootjs:amethyst_shard_and_amethyst_shard_block", ratio: 5 },
            // { reference: "lootjs:amethyst_shard", ratio: 20 },

            // { reference: "lootjs:lapis_lazuli_and_lapis_lazuli_block", ratio: 5 },
            // { reference: "lootjs:lapis_lazuli", ratio: 20 },
        ]
    },
    {
        groupName: "rare",
        groupWeight: 10,
        min: 1, max: 1,
        items: [

            { id: "minecraft:diamond", ratio: 10 },
            { id: "minecraft:enchanted_golden_apple", ratio: 1 },
            { id: "minecraft:golden_apple", ratio: 10 },
            { id: "trailandtales_delight:golden_lantern_fruit", ratio: 10 },
            { id: "mynethersdelight:enchanted_golden_egg", ratio: 10 },
            { id: "minecraft:totem_of_undying", ratio: 1 },
            { id: "minecraft:sea_lantern", ratio: 10 },
            { id: "minecraft:nautilus_shell", ratio: 10 },        
            { id: "minecraft:heart_of_the_sea", ratio: 10 },        
        ]
    },
];
// // 第三组：航海用品与地图 (Nautical Supplies & Maps)
// const SHIPWRECK_NAUTICAL = [
//     {
//         groupName: "Nautical Supplies",
//         groupWeight: 20,
//         min: 1,
//         max: 3,
//         items: [
//             { id: "minecraft:map", ratio: 10 },
//             { id: "minecraft:compass", ratio: 10 },
//             { id: "minecraft:clock", ratio: 6 },
//             { id: "minecraft:spyglass", ratio: 6 },
//             { id: "minecraft:paper", ratio: 12 },
//             { id: "minecraft:book", ratio: 8 },
//             { id: "minecraft:glass_bottle", ratio: 10 },
//             { id: "farmersdelight:rope", ratio: 10 },
//             { id: "supplementaries:rope", ratio: 8 },
//             { id: "minecraft:chain", ratio: 5 },
//             { id: "aeronautics:aviators_goggles", ratio: 4 },       // 飞行员护目镜 (导航感)
//             { id: "explorerscompass:explorerscompass", ratio: 3 }, // 结构罗盘
//             { id: "naturescompass:naturescompass", ratio: 3 },     // 自然罗盘
//         ]
//     }
// ];

// // 第四组：香料与奢侈品 (Spices & Luxuries)
// const SHIPWRECK_SPICES = [
//     {
//         groupName: "Spices & Luxuries",
//         groupWeight: 15,
//         min: 2,
//         max: 5,
//         items: [
//             { id: "minecraft:sugar", ratio: 10 },
//             { id: "minecraft:honey_bottle", ratio: 6 },
//             { id: "minecraft:cocoa_beans", ratio: 8 },
//             { id: "seeddelight:coffee_beans_bag", ratio: 6 },      // 烘焙咖啡豆
//             { id: "brewery:dried_barley", ratio: 6 },
//             { id: "brewery:dried_corn", ratio: 6 },
//             { id: "brewery:dried_oat", ratio: 6 },
//             { id: "barbequesdelight:chili_powder", ratio: 5 },
//             { id: "barbequesdelight:pepper_powder", ratio: 5 },
//             { id: "barbequesdelight:cumin_powder", ratio: 5 },
//             { id: "kaleidoscope_cookery:green_chili", ratio: 4 },
//             { id: "kaleidoscope_cookery:red_chili", ratio: 4 },
//             { id: "youkaisfeasts:tea_leaves", ratio: 8 },
//             { id: "youkaisfeasts:green_tea_leaves", ratio: 6 },
//             { id: "youkaisfeasts:black_tea_leaves", ratio: 6 },
//             { id: "vanillacookbook:chocolate", ratio: 4 },
//             { id: "seeddelight:rosehip", ratio: 4 },
//             { id: "supplementaries:flax_seeds", ratio: 5 },
//             { id: "voidlessframework:salt", ratio: 5 },
//         ]
//     }
// ];
    


const shipwreck_treasure_music_discs = [
    {
        groupName: "Music Discs",
        groupWeight: 25,
        min: 1, max: 1,
        items: music_discs_overworld
    },

    {
        groupName: "empty",
        groupWeight: 75,
        items: [
            { id: "empty" },
        ]
    },
];

const shipwreck_treasure_smithing_templates_common = [
    {
        groupName: "Smithing Templates",
        groupWeight: 25,  
        min: 1, max: 1,
        items: [
            { id: "minecraft:host_armor_trim_smithing_template", ratio: 10 },
            { id: "minecraft:raiser_armor_trim_smithing_template", ratio: 10 },
            { id: "minecraft:sentry_armor_trim_smithing_template", ratio: 10 },
            { id: "minecraft:shaper_armor_trim_smithing_template", ratio: 10 },
            { id: "minecraft:wayfinder_armor_trim_smithing_template", ratio: 10 },
            { id: "minecraft:wild_armor_trim_smithing_template", ratio: 10 },
            { id: "supplementaries:blast_armor_trim_smithing_template", ratio: 10 },
        ]
    },

    {
        groupName: "empty",
        groupWeight: 75,
        items: [
            { id: "empty" },
        ]
    },
];
const shipwreck_treasure_smithing_templates_exclusive = [
    {
        groupName: "Smithing Templates",
        groupWeight: 25,  
        min: 1, max: 1,
        items: [
            { id: "minecraft:coast_armor_trim_smithing_template", ratio: 10 },
            { id: "minecraft:tide_armor_trim_smithing_template", ratio: 10 },
        ]
    },

    {
        groupName: "empty",
        groupWeight: 75,
        items: [
            { id: "empty" },
        ]
    },
];
const shipwreck_treasure_pottery_sherd = [
    {
        groupName: "pottery_sherd",
        groupWeight: 25,
        min: 1, max: 1,
        items: [
            { id: "minecraft:angler_pottery_sherd", ratio: 4 },
            { id: "minecraft:archer_pottery_sherd", ratio: 4 },
            { id: "minecraft:arms_up_pottery_sherd", ratio: 4 },
            { id: "minecraft:blade_pottery_sherd", ratio: 4 },
            { id: "minecraft:brewer_pottery_sherd", ratio: 4 },
            { id: "minecraft:burn_pottery_sherd", ratio: 4 },
            { id: "minecraft:danger_pottery_sherd", ratio: 4 },
            { id: "minecraft:explorer_pottery_sherd", ratio: 4 },
            { id: "minecraft:flow_pottery_sherd", ratio: 4 },
            { id: "minecraft:friend_pottery_sherd", ratio: 4 },
            { id: "minecraft:guster_pottery_sherd", ratio: 4 },
            { id: "minecraft:heart_pottery_sherd", ratio: 4 },
            { id: "minecraft:heartbreak_pottery_sherd", ratio: 4 },
            { id: "minecraft:howl_pottery_sherd", ratio: 4 },
            { id: "minecraft:miner_pottery_sherd", ratio: 4 },
            { id: "minecraft:mourner_pottery_sherd", ratio: 4 },
            { id: "minecraft:plenty_pottery_sherd", ratio: 4 },
            { id: "minecraft:prize_pottery_sherd", ratio: 4 },
            { id: "minecraft:scrape_pottery_sherd", ratio: 4 },
            { id: "minecraft:sheaf_pottery_sherd", ratio: 4 },
            { id: "minecraft:shelter_pottery_sherd", ratio: 4 },
            { id: "minecraft:skull_pottery_sherd", ratio: 4 },
            { id: "minecraft:snort_pottery_sherd", ratio: 4 }
        ]
    },

    {
        groupName: "empty",
        groupWeight: 75,
        items: [
            { id: "empty" },
        ]
    },
];

const shipwreck_treasure_enchanted_book = [
    {
        groupName: "underwater_ruin",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:aqua_affinity"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:depth_strider"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:luck_of_the_sea"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:lure"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:respiration"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:channeling"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:impaling"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:loyalty"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:riptide"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:ocean_heart"] },

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

const shipwreck_treasure_conduit = [
    {
        groupName: "conduit",
        groupWeight: 1,  
        min: 1, max: 1,
        items: [
            { id: "minecraft:conduit", ratio: 10 },
        ]
    },

    {
        groupName: "empty",
        groupWeight: 99,
        items: [
            { id: "empty" },
        ]
    },
];
// =================================================================
// 事件注册区域
// =================================================================
const shipwreck_treasure_content = [
    [shipwreck_treasure_crops, 1, 1],
    [shipwreck_treasure_valuables, 2, 3],
    // [shipwreck_treasure_music_discs, 2, 2],
    [shipwreck_treasure_smithing_templates_common, 1, 1],
    [shipwreck_treasure_smithing_templates_exclusive, 1, 1],
    [shipwreck_treasure_pottery_sherd, 1, 1],
    [shipwreck_treasure_enchanted_book, 1, 1],
    [shipwreck_treasure_conduit, 1, 1],
    [seagrass, 4, 5],
];

const loot_shipwreck_treasure = [
    [shipwreck_treasure_content, 1],
];