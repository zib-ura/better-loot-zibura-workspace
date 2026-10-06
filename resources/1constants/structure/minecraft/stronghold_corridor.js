// =================================================================
// 要塞（Stronghold）战利品表定义区域
// =================================================================


const stronghold_corridor_armors_and_weapons = [

    {
        groupName: "common_armors",
        groupWeight: 80,
        min: 1, max: 1, enchantLevels: [20, 30], damage: [0.1, 0.1],
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


        ]
    },

    {
        groupName: "rare_armors",
        groupWeight: 20,
        min: 1,  max: 1, 
        
        enchantLevels: [20, 30], 
        damage: [0.1, 0.1],
        items: [
            { id: "immersive_armors:divine_helmet", ratio: 1.5 },
            { id: "immersive_armors:divine_chestplate", ratio: 1.5 },
            { id: "immersive_armors:divine_leggings", ratio: 1.5 },
            { id: "immersive_armors:divine_boots", ratio: 1.5 },

            { id: "minecraft:diamond_helmet", ratio: 1.5 },
            { id: "minecraft:diamond_chestplate", ratio: 1.5 },
            { id: "minecraft:diamond_leggings", ratio: 1.5 },
            { id: "minecraft:diamond_boots", ratio: 1.5 },
        ]
    },

    {
        groupName: "common_weapons",
        groupWeight: 80,
        min: 1,  max: 1, 
        
        enchantLevels: [20, 30], 
        damage: [0.1, 0.1],
        items: [
            { id: "minecraft:iron_sword", ratio: 2 },
            { id: "minecraft:iron_axe", ratio: 2 },
            { id: "minecraft:stone_sword", ratio: 2 },
            { id: "minecraft:stone_axe", ratio: 2 },
        ]
    },

    {
        groupName: "rare_weapons", 
        groupWeight: 20,
        min: 1,  max: 1, 
        
        enchantLevels: [20, 30], 
        damage: [0.1, 0.1],
        items: [
            { id: "minecraft:diamond_sword", ratio: 1.5 },
            { id: "minecraft:diamond_axe", ratio: 1.5 },
        ]
    },

    {   
        groupName: "empty",
        groupWeight: 50, 
        items: [
            { id: "empty"},
        ]
    },
];


const stronghold_corridor_passed_people = [
    {
        groupName: "undead_remains",
        groupWeight: 60,
        min: 1, max: 1,
        items: [
            { id: "minecraft:rotten_flesh", ratio: 15 }, 
            { id: "minecraft:bone", ratio: 15 },         
        ]
    },
]

const stronghold_corridor_ender_eyes = [
    {
        groupName: "portal_clues",
        groupWeight: 50,
        min: 1, max: 2,
        items: [
            { id: "minecraft:blaze_powder", ratio: 10 },  
            { id: "minecraft:ender_pearl", ratio: 10 },  
            { id: "minecraft:ender_eye", ratio: 10 },     
        ]
    },
    {   
        groupName: "empty",
        groupWeight: 50, 
        items: [
            { id: "empty"},
        ]
    },
];

const stronghold_corridor_villager_and_treasure = [
    {
        groupName: "villager_economy",
        groupWeight: 50,
        min: 2, max: 3,
        items: [
            { id: "minecraft:emerald", ratio: 15 },   
        ]
    },
    {
        groupName: "civilization_blocks",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "minecraft:lectern", ratio: 5 },
            { id: "minecraft:fletching_table", ratio: 5 },
            { id: "minecraft:smithing_table", ratio: 5 },
            { id: "minecraft:blast_furnace", ratio: 5 },
            { id: "minecraft:stonecutter", ratio: 5 },
            { id: "minecraft:grindstone", ratio: 5 },
            { id: "minecraft:brewing_stand", ratio: 5 },
            { id: "minecraft:cauldron", ratio: 5 },
            { id: "minecraft:anvil", ratio: 5 },
        ]
    },
]
const stronghold_corridor_name_tag = [
    {
        groupName: "name_tag",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "minecraft:name_tag", ratio: 10 },    
        ]
    },
];

const stronghold_corridor_stone_bricks = [
    {
        groupName: "stone_bricks",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "minecraft:stone_bricks", ratio: 10 },                  // 石砖
            { id: "minecraft:cracked_stone_bricks", ratio: 10 },            // 裂石砖
            { id: "minecraft:mossy_stone_bricks", ratio: 10 },             // 苔石砖

            // --- 被虫蚀的石砖变体 (蠹虫方块) ---
            { id: "minecraft:infested_stone_bricks", ratio: 10 },          // 被虫蚀的石砖
            { id: "minecraft:infested_cracked_stone_bricks", ratio: 10 },   // 被虫蚀的裂石砖
            { id: "minecraft:infested_mossy_stone_bricks", ratio: 10 }      // 被虫蚀的苔石砖
        ]
    },
];

const stronghold_corridor_eye_armor_trim_smithing_template = [
    {
        groupName: "eye_armor_trim_smithing_template",
        groupWeight: 25,
        min: 1, max: 1,
        items: [
            { id: "minecraft:eye_armor_trim_smithing_template", ratio: 10 },    
        ]
    },
    {   
        groupName: "empty",
        groupWeight: 50, 
        items: [
            { id: "empty"},
        ]
    },
];

const stronghold_corridor_lighting = [
    {
        groupWeight: 50, 
        min: 2, max: 3,
        items: [
            { id: "minecraft:torch", ratio: 10 },
        ]
    },
]

// =================================================================
// 事件注册区域
// =================================================================

const stronghold_corridor_content = [
    [stronghold_corridor_armors_and_weapons, 1, 1],              
    [stronghold_corridor_passed_people, 3, 4],    
    [stronghold_corridor_ender_eyes, 1, 2],                     
    // [stronghold_corridor_villager_and_treasure, 1, 1],   
    [stronghold_corridor_name_tag, 1, 1],
    [stronghold_corridor_stone_bricks, 2, 2],   
    [stronghold_corridor_eye_armor_trim_smithing_template, 1, 1],
    [stronghold_corridor_lighting, 1, 1],
];

const loot_stronghold_corridor = [
    [stronghold_corridor_content, 1],
];