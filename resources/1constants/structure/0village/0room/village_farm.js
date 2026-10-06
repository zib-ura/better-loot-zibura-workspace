const village_farm_equipment = [
    {   
        groupName: "common_equipment",
        groupWeight: 95, 
        min: 1, max: 1, damage: [0.5, 0.9],
        items: [
            { id: "minecraft:iron_hoe", ratio: 10 },
            { id: "kaleidoscope_cookery:sickle", ratio: 10 },
            { id: "farmersdelight:iron_knife", ratio: 10 },
            { id: "minecraft:water_bucket", ratio: 10 },
        ]
    },
    {   
        groupName: "rare_equipment",
        groupWeight: 5, 
        min: 1, max: 1, damage: [0.7, 0.8],
        items: [
            { id: "minecraft:diamond_hoe", ratio: 10 },
        ]
    },
]

// =================================================================
// 农田种子定义区域（统一按 common:special = 80:20 分割）
// =================================================================

const village_plains_farm_seed = [
    {   
        groupName: "common",
        groupWeight: 30, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds_and_wheat_seeds_block", ratio: 2 },
            { reference: "lootjs:wheat_seeds", ratio: 8 },
            { reference: "lootjs:carrot", ratio: 10 },
            { reference: "lootjs:potato", ratio: 10 },
            { reference: "lootjs:pumpkin_seeds", ratio: 10 },
            { reference: "lootjs:tomato_seeds", ratio: 10 },
            { reference: "lootjs:onion", ratio: 10 },
            { reference: "lootjs:cabbage_seeds", ratio: 10 },
            { reference: "lootjs:lettuce_seeds", ratio: 10 },
            { reference: "lootjs:rice", ratio: 10 },
            { reference: "lootjs:pepper_seeds", ratio: 10 },
            { id: "youkaisfeasts:tea_seeds", ratio: 10 },
        ]
    },
    {   
        groupName: "vegetable",
        groupWeight: 10, 
        min: 1, max: 2,
        items: [
            { reference: "lootjs:barley_seeds", ratio: 10 },
            { reference: "lootjs:cucumber_seeds", ratio: 10 },
            { reference: "lootjs:oat_seeds", ratio: 10 },
            { reference: "lootjs:soybean", ratio: 10 },
            { reference: "lootjs:redbean", ratio: 10 },
            { reference: "lootjs:chinese_cabbage_seeds", ratio: 10 },
            { reference: "lootjs:garlic_clove", ratio: 10 },
            { reference: "lootjs:peanut", ratio: 10 },
            { reference: "lootjs:eggplant_seeds", ratio: 10 },
            { reference: "lootjs:bell_pepper_seeds", ratio: 10 },
            { reference: "lootjs:broccoli_seeds", ratio: 10 },
            { reference: "lootjs:turnip_seeds", ratio: 10 },
            { reference: "lootjs:sweet_potato", ratio: 10 },
            { reference: "lootjs:corn_seeds", ratio: 10 },
            { reference: "lootjs:zucchini_seeds", ratio: 10 },
        ]
    },
    {   
        groupName: "fruit",
        groupWeight: 10, 
        min: 1, max: 2,
        items: [
            { reference: "lootjs:apple_sapling", ratio: 10 },
            { reference: "lootjs:fig_sapling", ratio: 10 },
            { reference: "lootjs:kiwi_sapling", ratio: 10 },
            { reference: "lootjs:orange_sapling", ratio: 10 },
            { reference: "lootjs:lemon_seeds", ratio: 10 },
            { reference: "lootjs:pear_sapling", ratio: 10 },
            { reference: "lootjs:black_grape_seeds", ratio: 3 },
            { reference: "lootjs:white_grape_seeds", ratio: 3 },
            { reference: "lootjs:red_grape_seeds", ratio: 3 },
            { reference: "lootjs:grapevine", ratio: 10 },
            { reference: "lootjs:strawberry_seeds", ratio: 10 },
            { reference: "lootjs:lime_sapling", ratio: 10 },
        ]
    },
    {   
        groupName: "special",
        groupWeight: 10, 
        min: 1, max: 2,
        items: [
            { reference: "lootjs:flax_seeds", ratio: 10 },
            { reference: "lootjs:fennel_seeds", ratio: 10 },
            { reference: "lootjs:garlic_chive_seeds", ratio: 10 },
            { reference: "lootjs:greenonion", ratio: 10 },
            { reference: "lootjs:parsley_seeds", ratio: 10 },
            { reference: "lootjs:cotton_seeds", ratio: 10 },
        ]
    },
]

const village_savanna_farm_seed = [
    {   
        groupName: "common",
        groupWeight: 50, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds_and_wheat_seeds_block", ratio: 2 },
            { reference: "lootjs:wheat_seeds", ratio: 8 },
            { reference: "lootjs:corn_seeds_and_corn_seeds_block", ratio: 2 },
            { reference: "lootjs:corn_seeds", ratio: 8 },
            { reference: "lootjs:melon_seeds_and_melon_seeds_block", ratio: 2 },
            { reference: "lootjs:melon_seeds", ratio: 8 },
        ]
    },
    {   
        groupName: "special",
        groupWeight: 40, 
        min: 1, max: 2,
        items: [
            { reference: "lootjs:bell_pepper_seeds", ratio: 10 },
            { reference: "lootjs:zucchini_seeds", ratio: 10 },
            { reference: "lootjs:vanilla_pods", ratio: 10 },
            // { reference: "lootjs:carrot", ratio: 10 },
            // { reference: "lootjs:potato", ratio: 10 },
            // { reference: "lootjs:tomato_seeds", ratio: 10 },
            // { reference: "lootjs:onion", ratio: 10 },
            // { reference: "lootjs:cabbage_seeds", ratio: 10 },
            // { reference: "lootjs:lettuce_seeds", ratio: 10 },
            // { reference: "lootjs:rice", ratio: 10 },
            // { reference: "lootjs:pepper_seeds", ratio: 10 },
            // { reference: "lootjs:garlic_clove", ratio: 10 },
        ]
    }
]

const village_snowy_farm_seed = [
    {   
        groupName: "common",
        groupWeight: 50, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds_and_wheat_seeds_block", ratio: 2 },
            { reference: "lootjs:wheat_seeds", ratio: 8 },
            { reference: "lootjs:beetroot_seeds_and_beetroot_seeds_block", ratio: 2 },
            { reference: "lootjs:beetroot_seeds", ratio: 8 },
            { reference: "lootjs:potato_and_potato_block", ratio: 2 },
            { reference: "lootjs:potato", ratio: 8 },
        ]
    },
    {   
        groupName: "special",
        groupWeight: 50, 
        min: 1, max: 2,
        items: [
            { reference: "lootjs:onion", ratio: 10 },
            { reference: "lootjs:cabbage_seeds", ratio: 10 },
            { reference: "lootjs:lettuce_seeds", ratio: 10 },
            { reference: "lootjs:blueberry", ratio: 10 },
            { reference: "lootjs:persimmon_sapling", ratio: 10 },
            { reference: "lootjs:sweet_potato", ratio: 10 },
            { reference: "lootjs:turnip_seeds", ratio: 10 },
            { reference: "lootjs:parsley_seeds", ratio: 10 },
        ]
    },
]

const village_taiga_farm_seed = [
    {   
        groupName: "common",
        groupWeight: 50, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds_and_wheat_seeds_block", ratio: 2 },
            { reference: "lootjs:wheat_seeds", ratio: 8 },
            { reference: "lootjs:pumpkin_seeds_and_pumpkin_seeds_block", ratio: 2 },
            { reference: "lootjs:pumpkin_seeds", ratio: 8 },
            { reference: "lootjs:beetroot_seeds_and_beetroot_seeds_block", ratio: 2 },
            { reference: "lootjs:beetroot_seeds", ratio: 8 },
            { reference: "lootjs:barley_seeds", ratio: 10 },
            { reference: "lootjs:sweet_berry_pips", ratio: 15 },
        ]
    },
    {   
        groupName: "special",
        groupWeight: 50, 
        min: 1, max: 2,
        items: [
            { reference: "lootjs:carrot", ratio: 10 },
            { reference: "lootjs:tomato_seeds", ratio: 10 },
            { reference: "lootjs:onion", ratio: 10 },
            { reference: "lootjs:cabbage_seeds", ratio: 10 },
            { reference: "lootjs:lettuce_seeds", ratio: 10 },
            { reference: "lootjs:blueberry", ratio: 10 },
            { reference: "lootjs:hawberry_sapling", ratio: 10 },
            { reference: "lootjs:persimmon_sapling", ratio: 10 },
            { reference: "lootjs:barley_seeds", ratio: 10 },
            { reference: "lootjs:cauliflower_seeds", ratio: 10 },
            { reference: "lootjs:sweet_potato", ratio: 10 },
            { reference: "lootjs:turnip_seeds", ratio: 10 },
            { reference: "lootjs:parsley_seeds", ratio: 10 },
            { reference: "lootjs:hops", ratio: 10 },
        ]
    },
]

const village_desert_farm_seed = [
    {   
        groupName: "common",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds_and_wheat_seeds_block", ratio: 2 },
            { reference: "lootjs:wheat_seeds", ratio: 8 },            
            { reference: "lootjs:tomato_seeds", ratio: 10 },
            { reference: "lootjs:pepper_seeds", ratio: 10 },
            { reference: "lootjs:melon_seeds_and_melon_seeds_block", ratio: 2 },
            { reference: "lootjs:melon_seeds", ratio: 8 },
            { reference: "lootjs:black_grape_seeds", ratio: 3 },
            { reference: "lootjs:white_grape_seeds", ratio: 3 },
            { reference: "lootjs:red_grape_seeds", ratio: 3 },
            { reference: "lootjs:grapevine", ratio: 10 },
            { reference: "lootjs:eggplant_seeds", ratio: 10 },
    //     ]
    // },
    // {   
    //     groupName: "special",
    //     groupWeight: 20, 
    //     min: 1, max: 2,
    //     items: [
            { reference: "lootjs:barley_seeds", ratio: 10 },    
            { reference: "lootjs:onion", ratio: 10 },
            { reference: "lootjs:hamimelon_seeds", ratio: 10 },
            { reference: "lootjs:chickpea", ratio: 10 },
            { reference: "lootjs:date_sapling", ratio: 10 },
            { reference: "lootjs:zucchini_seeds", ratio: 10 },
            { reference: "lootjs:cotton_seeds", ratio: 10 },
            { reference: "lootjs:lemon_seeds", ratio: 10 },
            { reference: "lootjs:orange_sapling", ratio: 10 },
            { reference: "lootjs:fig_sapling", ratio: 10 },
            { reference: "lootjs:flax_seeds", ratio: 10 },
            { reference: "lootjs:garlic_clove", ratio: 10 },
            { reference: "lootjs:sugar_cane", ratio: 10 },
        ]
    },
]



// =================================================================
// 新增：群系扩展农田种子定义区域（统一按 common:special = 80:20 分割）
// =================================================================

const village_badland_farm_seed = [
    {   
        groupName: "common",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds_and_wheat_seeds_block", ratio: 2 },
            { reference: "lootjs:wheat_seeds", ratio: 8 },            
        ]
    },
    // {   
    //     groupName: "special",
    //     groupWeight: 20, 
    //     min: 1, max: 2,
    //     items: [
    //         { reference: "lootjs:tomato_seeds", ratio: 10 },
    //         { reference: "lootjs:cabbage_seeds", ratio: 10 },
    //         { reference: "lootjs:lettuce_seeds", ratio: 10 },
    //     ]
    // },
]

const village_beach_farm_seed = [
    {   
        groupName: "common",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds_and_wheat_seeds_block", ratio: 2 },
            { reference: "lootjs:wheat_seeds", ratio: 8 },            
            { reference: "lootjs:cabbage_seeds", ratio: 10 },
            { reference: "lootjs:beetroot_seeds_and_beetroot_seeds_block", ratio: 2 },
            { reference: "lootjs:beetroot_seeds", ratio: 8 },
            { reference: "lootjs:pineapple_sapling", ratio: 10 },
            { reference: "lootjs:flax_seeds", ratio: 10 },

        ]
    },
    // {   
    //     groupName: "special",
    //     groupWeight: 20, 
    //     min: 1, max: 2,
    //     items: [
    //         { reference: "lootjs:tomato_seeds", ratio: 10 },
    //         { reference: "lootjs:lettuce_seeds", ratio: 10 },
    //     ]
    // },
]

const village_cherry_farm_seed = [
    {   
        groupName: "common",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds_and_wheat_seeds_block", ratio: 2 },
            { reference: "lootjs:wheat_seeds", ratio: 8 },
            { reference: "lootjs:beetroot_seeds_and_beetroot_seeds_block", ratio: 2 },
            { reference: "lootjs:beetroot_seeds", ratio: 8 },
            { reference: "lootjs:pumpkin_seeds_and_pumpkin_seeds_block", ratio: 2 },
            { reference: "lootjs:pumpkin_seeds", ratio: 8 },
            { reference: "lootjs:tomato_seeds", ratio: 10 },
            { reference: "lootjs:cabbage_seeds", ratio: 10 },
            { reference: "lootjs:lettuce_seeds", ratio: 10 },
            { reference: "lootjs:pepper_seeds", ratio: 10 },
            { reference: "lootjs:redbean", ratio: 10 },
            { reference: "lootjs:soybean", ratio: 10 },
            { reference: "lootjs:tea_seeds", ratio: 10 },
            

        ]
    },
    // {   
    //     groupName: "special",
    //     groupWeight: 20, 
    //     min: 1, max: 2,
    //     items: [
    //         { reference: "lootjs:tomato_seeds", ratio: 10 },
    //         { reference: "lootjs:cabbage_seeds", ratio: 10 },
    //     ]
    // },
]

const village_dark_forest_farm_seed = [
    {   
        groupName: "common",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds_and_wheat_seeds_block", ratio: 2 },
            { reference: "lootjs:wheat_seeds", ratio: 8 },
            { reference: "lootjs:potato_and_potato_block", ratio: 2 },
            { reference: "lootjs:potato", ratio: 8 },
            { reference: "lootjs:apple", ratio: 10 },         
            // { reference: "lootjs:red_mushroom", ratio: 10 },  
            // { reference: "lootjs:brown_mushroom", ratio: 10 },
        ]
    },
    {   
        groupName: "special",
        groupWeight: 20, 
        min: 1, max: 2,
        items: [
            { reference: "lootjs:carrot", ratio: 10 },
            { reference: "lootjs:tomato_seeds", ratio: 10 },
            { reference: "lootjs:onion", ratio: 10 }, 
            { reference: "lootjs:cabbage_seeds", ratio: 10 },
            { reference: "lootjs:lettuce_seeds", ratio: 10 },
        ]
    },
]

const village_jungle_farm_seed = [
    {   
        groupName: "common",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds_and_wheat_seeds_block", ratio: 2 },
            { reference: "lootjs:wheat_seeds", ratio: 8 },
            { reference: "lootjs:melon_seeds_and_melon_seeds_block", ratio: 2 },
            { reference: "lootjs:melon_seeds", ratio: 8 },
            { reference: "lootjs:pumpkin_seeds_and_pumpkin_seeds_block", ratio: 2 },
            { reference: "lootjs:pumpkin_seeds", ratio: 8 },
            { reference: "lootjs:cocoa_beans_and_cocoa_beans_block", ratio: 2 },
            { reference: "lootjs:cocoa_beans", ratio: 8 },

            { reference: "lootjs:avocado_sapling", ratio: 10 },
            { reference: "lootjs:cranberry", ratio: 10 },
            { reference: "lootjs:durian_sapling", ratio: 10 },
            { reference: "lootjs:lychee_sapling", ratio: 10 },
            { reference: "lootjs:mango_sapling", ratio: 10 },
            { reference: "lootjs:mangosteen_sapling", ratio: 10 },
            { reference: "lootjs:peach_sapling", ratio: 10 },
            { reference: "lootjs:banana_frond", ratio: 10 },
        ]
    },
    {   
        groupName: "special",
        groupWeight: 20, 
        min: 1, max: 2,
        items: [
            { reference: "lootjs:rice", ratio: 10 }, 
            { reference: "lootjs:tomato_seeds", ratio: 10 },
            { reference: "lootjs:potato", ratio: 10 },
            { reference: "lootjs:onion", ratio: 10 },
            { reference: "lootjs:cabbage_seeds", ratio: 10 },
            { reference: "lootjs:lettuce_seeds", ratio: 10 },
        ]
    },
]

const village_mushroom_farm_seed = [
    {   
        groupName: "common",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds_and_wheat_seeds_block", ratio: 2 },
            { reference: "lootjs:wheat_seeds", ratio: 8 },
            { reference: "lootjs:potato_and_potato_block", ratio: 2 },
            { reference: "lootjs:potato", ratio: 8 },
            // { reference: "lootjs:red_mushroom", ratio: 15 },  
            // { reference: "lootjs:brown_mushroom", ratio: 15 },
        ]
    },
    {   
        groupName: "special",
        groupWeight: 20, 
        min: 1, max: 2,
        items: [
            { reference: "lootjs:carrot", ratio: 10 },
            { reference: "lootjs:tomato_seeds", ratio: 10 },
            { reference: "lootjs:onion", ratio: 10 },
            { reference: "lootjs:cabbage_seeds", ratio: 10 },
            { reference: "lootjs:lettuce_seeds", ratio: 10 },
        ]
    },
]

const village_ocean_farm_seed = [
    {   
        groupName: "common",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds_and_wheat_seeds_block", ratio: 2 },
            { reference: "lootjs:wheat_seeds", ratio: 8 },
            { reference: "lootjs:kelp", ratio: 10 }, 
        ]
    },
    {   
        groupName: "special",
        groupWeight: 20, 
        min: 1, max: 2,
        items: [
            { reference: "lootjs:rice", ratio: 10 },
            { reference: "lootjs:potato", ratio: 10 },
            { reference: "lootjs:onion", ratio: 10 },
            { reference: "lootjs:cabbage_seeds", ratio: 10 },
            { reference: "lootjs:lettuce_seeds", ratio: 10 },
        ]
    },
]

const village_swamp_farm_seed = [
    {   
        groupName: "common",
        groupWeight: 70, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds_and_wheat_seeds_block", ratio: 1 },
            { reference: "lootjs:rice_and_rice_block", ratio: 2 },
            { reference: "lootjs:rice", ratio: 8 },
        ]
    },
    {   
        groupName: "special",
        groupWeight: 30, 
        min: 1, max: 2,
        items: [
            { reference: "lootjs:bayberry_sapling", ratio: 10 },
            { reference: "lootjs:bayberry", ratio: 10 },
            { reference: "lootjs:blueberry", ratio: 10 },
            { reference: "lootjs:cranberry", ratio: 10 },
            { reference: "lootjs:durian_sapling", ratio: 10 },
            { reference: "lootjs:durian", ratio: 10 },
            { reference: "lootjs:mangosteen_sapling", ratio: 10 },
            { reference: "lootjs:mangosteen", ratio: 10 },
            { reference: "lootjs:tomato_seeds", ratio: 10 },
            { reference: "lootjs:potato", ratio: 10 },
            { reference: "lootjs:onion", ratio: 10 },
            { reference: "lootjs:cabbage_seeds", ratio: 10 },
            { reference: "lootjs:lettuce_seeds", ratio: 10 },
        ]
    },
]

const village_other_farm_seed = [
    {   
        groupName: "common",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:wheat_seeds_and_wheat_seeds_block", ratio: 4 },
            { reference: "lootjs:wheat_seeds", ratio: 16 },
            { reference: "lootjs:potato_and_potato_block", ratio: 2 },
            { reference: "lootjs:potato", ratio: 8 },
            { reference: "lootjs:carrot_and_carrot_block", ratio: 2 },
            { reference: "lootjs:carrot", ratio: 8 },

        ]
    },
]
// =================================================================
// 事件注册区域
// =================================================================
const village_farm_content = [
    [village_farm_equipment,        2, 3],

    [village_plains_farm_seed,      2, 3, { matchBiome: "#minecraft:has_structure/village_plains" }],
    [village_savanna_farm_seed,     2, 3, { matchBiome: "#minecraft:has_structure/village_savanna" }],
    [village_snowy_farm_seed,       2, 3, { matchBiome: "#minecraft:has_structure/village_snowy" }],
    [village_taiga_farm_seed,       2, 3, { matchBiome: "#minecraft:is_taiga" }],
    [village_desert_farm_seed,      2, 3, { matchBiome: "#minecraft:has_structure/village_desert" }],

    [village_badland_farm_seed,     2, 3, { matchBiome: "#minecraft:is_badlands" }],          
    [village_beach_farm_seed,       2, 3, { matchBiome: "#minecraft:is_beach" }],                 
    [village_cherry_farm_seed,      2, 3, { matchBiome: "minecraft:cherry_grove" }],           
    [village_dark_forest_farm_seed, 2, 3, { matchBiome: "minecraft:dark_forest" }],      
    [village_jungle_farm_seed,      2, 3, { matchBiome: "#minecraft:is_jungle" }],              
    [village_mushroom_farm_seed,    2, 3, { matchBiome: "minecraft:mushroom_fields" }],   
    [village_ocean_farm_seed,       2, 3, { matchBiome: "#minecraft:is_ocean" }],                
    [village_swamp_farm_seed,       2, 3, { matchBiome: "minecraft:swamp" }],

    
    [village_other_farm_seed,       2, 3, /* { matchBiome: "" } */],

];

const loot_village_farm = [
    [village_farm_content, 1],
];