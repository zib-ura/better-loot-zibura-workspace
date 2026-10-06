const village_mason_stone = [
    {
        groupName: "stone_good",
        groupWeight: 20,
        min: 1, max: 2,
        items: [
            { id: "minecraft:furnace", ratio: 10 },
            { id: "minecraft:armor_stand", ratio: 10 },
            { id: "supplementaries:hat_stand", ratio: 10 },
            { id: "minecraft:grindstone", ratio: 10 },
            { id: "kaleidoscope_cookery:millstone", ratio: 10 },
            { id: "stonechest:chest_stone", ratio: 10 },
            { id: "supplementaries:statue", ratio: 10 },            // 雕像
            { id: "supplementaries:stone_lamp", ratio: 10 },        // 石灯
            { id: "supplementaries:pedestal", ratio: 10 },          // 展示台

            { id: "minecraft:terracotta", ratio: 5 },

            { id: "touhou_little_maid:furnace_backpack", ratio: 10 },

        ]
    },

    {
        groupName: "stone_common",
        groupWeight: 40,
        min: 1, max: 2,
        items: [
            { id: "minecraft:stone", ratio: 10 },
            { id: "minecraft:stone_stairs", ratio: 10 },            
            { id: "minecraft:stone_slab", ratio: 10 },

            { id: "minecraft:smooth_stone", ratio: 10 },
            { id: "minecraft:smooth_stone_slab", ratio: 10 },
        
            { id: "minecraft:stone_bricks", ratio: 10 },
            { id: "minecraft:cracked_stone_bricks", ratio: 10 },            
            { id: "minecraft:stone_brick_stairs", ratio: 10 },            
            { id: "minecraft:stone_brick_slab", ratio: 10 },
            { id: "minecraft:chiseled_stone_bricks", ratio: 10 },

            { id: "stoneworks:stone_shingles", ratio: 10 },
            { id: "stoneworks:stone_shingle_stairs", ratio: 10 },
            { id: "stoneworks:stone_shingle_slab", ratio: 10 },

            { id: "stoneworks:stone_tiles", ratio: 10 },
            { id: "stoneworks:stone_tile_stairs", ratio: 10 },
            { id: "stoneworks:stone_tile_slab", ratio: 10 },
            { id: "stoneworks:cracked_stone_tiles", ratio: 10 },

            { id: "stoneworks:stone_pavers", ratio: 10 },
            { id: "stoneworks:stone_paver_stairs", ratio: 10 },
            { id: "stoneworks:stone_paver_slab", ratio: 10 },

            { id: "stoneworks:stone_plates", ratio: 10 },
            { id: "stoneworks:stone_plate_stairs", ratio: 10 },
            { id: "stoneworks:stone_plate_slab", ratio: 10 },

            { id: "stoneworks:stone_pillar", ratio: 10 },

        ]
    },

    {        
        groupName: "stone_materials",
        groupWeight: 40,
        min: 2, max: 3,
        items: [
            { id: "minecraft:cobblestone", ratio: 10 },
            { id: "supplementaries:daub", ratio: 2 },
            { id: "minecraft:clay", ratio: 2 },
            { id: "minecraft:clay_ball", ratio: 2 },
            { id: "minecraft:flint", ratio: 2 },
          
        ]
    },
]

const village_mason_brick = [
    {
        groupName: "brick_good",
        groupWeight: 20,
        min: 1, max: 2,
        items: [
            { id: "bakery:baker_station", ratio: 10 }, 
            { id: "farm_and_charm:stove", ratio: 10 }, 
            { id: "bakery:brick_counter", ratio: 10 }, 
            { id: "bakery:kitchen_sink", ratio: 10 },
            { id: "trailandtales_delight:pottery_cooking_pot", ratio: 10 },
            { id: "kaleidoscope_chinesefood:pickle_jar", ratio: 10 },
        ]
    },

    {
        groupName: "brick_common",
        groupWeight: 20,
        min: 1, max: 2,
        items: [
            { id: "minecraft:bricks", ratio: 10 },
            { id: "minecraft:flower_pot", ratio: 10 },
            { id: "minecraft:decorated_pot", ratio: 10 },
            
        ]
    },

    {        
        groupName: "brick_materials",
        groupWeight: 20,
        min: 2, max: 3,
        items: [
            { id: "minecraft:brick", ratio: 10 },
        ]
    },
]

const village_mason_other_material = [
    {
        groupName: "other_good",
        groupWeight: 0,
        min: 1, max: 2,
        items: [

        ]
    },

    {
        groupName: "other_common",
        groupWeight: 20,
        min: 1, max: 2,
        items: [
            { id: "stoneworks:chiseled_andesite", ratio: 10 },       
            { id: "stoneworks:chiseled_granite", ratio: 10 },           
            { id: "stoneworks:chiseled_diorite", ratio: 10 },
        ]
    },

    {        
        groupName: "other_materials",
        groupWeight: 20,
        min: 2, max: 3,
        items: [
            { id: "minecraft:diorite", ratio: 10 },
            { id: "minecraft:granite", ratio: 10 },
            { id: "minecraft:andesite", ratio: 10 },
        ]
    },
]

const village_desert_sandstone_glass = [
    {
        groupName: "sandstone_good",
        groupWeight: 20,
        min: 1, max: 2,
        items: [
            { id: "minecraft:chiseled_sandstone", ratio: 10 }, 
            { id: "minecraft:cut_sandstone", ratio: 10 }, 
            { id: "minecraft:smooth_sandstone", ratio: 10 }, 
            { id: "minecraft:glass_bottle", ratio: 10 }, 
        ]
    },

    {
        groupName: "sandstone_common",
        groupWeight: 20,
        min: 1, max: 2,
        items: [
            { id: "minecraft:sandstone", ratio: 10 },         
            { id: "minecraft:sandstone_stairs", ratio: 10 },
            { id: "minecraft:sandstone_slab", ratio: 10 },
            { id: "minecraft:sandstone_wall", ratio: 10 },
            { id: "minecraft:glass", ratio: 10 },
            { id: "minecraft:glass_pane", ratio: 10 },
        ]
    },

    // {         
    //     groupName: "sandstone_materials",
    //     groupWeight: 20,
    //     min: 4, max: 4,
    //     items: [
    //         { id: "minecraft:sand", ratio: 10 },
    //     ]
    // },
]

const village_badlands_terracotta = [
    {
        groupName: "terracotta_good",
        groupWeight: 20,
        min: 1, max: 2,
        items: [
            { id: "minecraft:white_glazed_terracotta", ratio: 10 },
            { id: "minecraft:orange_glazed_terracotta", ratio: 10 },
            { id: "minecraft:yellow_glazed_terracotta", ratio: 10 },
            { id: "minecraft:light_gray_glazed_terracotta", ratio: 10 },
            { id: "minecraft:brown_glazed_terracotta", ratio: 10 },
            { id: "minecraft:red_glazed_terracotta", ratio: 10 },
            { id: "minecraft:chiseled_red_sandstone", ratio: 10 },
        ]
    },

    {
        groupName: "terracotta_common",
        groupWeight: 20,
        min: 1, max: 2,
        items: [
            { id: "minecraft:terracotta", ratio: 10 }, // 普通无色陶瓦
            { id: "minecraft:white_terracotta", ratio: 10 },
            { id: "minecraft:orange_terracotta", ratio: 10 },
            { id: "minecraft:yellow_terracotta", ratio: 10 },
            { id: "minecraft:light_gray_terracotta", ratio: 10 },
            { id: "minecraft:brown_terracotta", ratio: 10 },
            { id: "minecraft:red_terracotta", ratio: 10 },
            { id: "minecraft:red_sandstone", ratio: 10 },
            { id: "minecraft:red_sandstone_stairs", ratio: 10 },
            { id: "minecraft:red_sandstone_slab", ratio: 10 },
            { id: "minecraft:red_sandstone_wall", ratio: 10 },
        ]
    },

    {         
        groupName: "terracotta_materials",
        groupWeight: 20,
        min: 2, max: 3,
        items: [
            { id: "minecraft:red_sand", ratio: 10 },
        ]
    },
]

const village_beach_salt = [
    // {
    //     groupName: "salt_good",
    //     groupWeight: 20,
    //     min: 1, max: 2,
    //     items: [
    //         // { id: "vintagedelight:cucumber_salad", ratio: 10 },

    //     ]
    // },

    {
        groupName: "salt_common",
        groupWeight: 20,
        min: 1, max: 2,
        items: [
            { id: "vintagedelight:smooth_salt_block", ratio: 10 },
            { id: "vintagedelight:salt_pillar", ratio: 10 },
            { id: "vintagedelight:salt_bricks", ratio: 10 },
            { id: "vintagedelight:salt_brick_stairs", ratio: 10 },
            { id: "vintagedelight:salt_brick_slab", ratio: 10 },
            { id: "vintagedelight:salt_brick_wall", ratio: 10 },
            { id: "vintagedelight:mixed_salt_bricks", ratio: 10 },
            { id: "vintagedelight:mixed_salt_brick_stairs", ratio: 10 },
            { id: "vintagedelight:mixed_salt_brick_slab", ratio: 10 },
            { id: "vintagedelight:mixed_salt_brick_wall", ratio: 10 },
        ]
    },

    {         
        groupName: "salt_materials",
        groupWeight: 20,
        min: 2, max: 3,
        items: [
            { id: "vintagedelight:salt_block", ratio: 10 }, 
        ]
    },
]

const village_mangrove_mud = [
    // {
    //     groupName: "mud_good",
    //     groupWeight: 20,
    //     min: 1, max: 2,
    //     items: [
    //         // { id: "vintagedelight:cucumber_salad", ratio: 10 },

    //     ]
    // },

    {
        groupName: "mud_common",
        groupWeight: 20,
        min: 1, max: 2,
        items: [
            { id: "minecraft:mud_bricks", ratio: 10 },
            { id: "minecraft:mud_brick_stairs", ratio: 10 },
            { id: "minecraft:mud_brick_slab", ratio: 10 },
            { id: "minecraft:mud_brick_wall", ratio: 10 },
        ]
    },

    {         
        groupName: "mud_materials",
        groupWeight: 20,
        min: 2, max: 3,
        items: [
            { id: "minecraft:mud", ratio: 10 },
            { id: "minecraft:packed_mud", ratio: 10 },
        ]
    },
]

const village_mason_fuel = [
    {        
        groupName: "materials",
        groupWeight: 20,
        min: 2, max: 3,
        items: [
            { id: "minecraft:coal", ratio: 5 },
        ]
    },
]

const village_mason_stove = [
    {        
        groupName: "materials",
        groupWeight: 20,
        min: 1, max: 1,
        items: [
            { id: "kaleidoscope_cookery:stove", ratio: 10 },
            { id: "farmersdelight:stove", ratio: 10 }, 
        ]
    },
]

const village_mason_flint_and_steel = [
    {        
        groupName: "flint_and_steel",
        groupWeight: 20,
        min: 1, max: 1,
        items: [
            { id: "minecraft:flint_and_steel", ratio: 10, damage: [0.7, 0.8]},
        ]
    },
]

const village_mason_scarecrow = [
    {        
        groupName: "scarecrow",
        groupWeight: 20,
        min: 1, max: 1,
        items: [
            { id: "touhou_little_maid:scarecrow", ratio: 10 },
        ]
    },
    {
        groupName: "empty",
        groupWeight: 80,
        items: [
            { id: "empty" },
        ]
    },
]
// =================================================================
// 事件注册区域
// =================================================================
const village_mason_content = [
    [village_mason_brick, 1, 1, { matchBiome: "#minecraft:has_structure/village_plains" }],
    [village_mason_stone, 3, 3/* , { matchBiome: "#better_loot_zibura:not_desert_badland" } */],
    [village_mason_other_material, 1, 1, { matchBiome: "#better_loot_zibura:mason/other" }],

    [village_desert_sandstone_glass, 2, 2, { matchBiome: "#minecraft:has_structure/village_desert" }],
    [village_badlands_terracotta, 2, 2, { matchBiome: "#minecraft:is_badlands" }],
    [village_beach_salt, 2, 2, { matchBiome: "#minecraft:is_beach" }],



    [village_mason_fuel, 2, 2],
    [village_mason_stove, 1, 1],
    [village_mason_flint_and_steel, 1, 1],
    [village_mason_scarecrow, 1, 1],
];

const loot_village_mason = [
    [village_mason_content, 1],
];