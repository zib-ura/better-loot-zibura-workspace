// =================================================================
// 战利品表定义区域
// =================================================================

const simple_dungeon_equipment = [

    {
        groupName: "common_armors",
        groupWeight: 80,
        min: 1, max: 1, enchantLevels: [8, 10], damage: [0.4, 0.6],
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
        min: 1, max: 1, enchantLevels: [20, 30], damage: [0.4, 0.6],
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
        min: 1, max: 1, enchantLevels: [10, 15], damage: [0.4, 0.6],
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
        min: 1, max: 1, enchantLevels: [20, 30], damage: [0.4, 0.6],
        items: [
            { id: "minecraft:diamond_sword", ratio: 1.5 },
            { id: "minecraft:diamond_axe", ratio: 1.5 },
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

const simple_dungeon_resources_treasure = [
    // {
    //     groupName: "ore",
    //     groupWeight: 40,
    //     min: 2, max: 4, 
    //     items: [
    //         { id: "minecraft:iron_ingot", ratio: 10 },
    //         { id: "minecraft:coal", ratio: 15 },
    //         { id: "minecraft:copper_ingot", ratio: 10 },
    //         { id: "minecraft:lapis_lazuli", ratio: 10 },
    //         { id: "minecraft:redstone", ratio: 10 },
    //         { id: "create:zinc_ingot", ratio: 10 },

    //     ]
    // },

    {
        groupName: "drops",
        groupWeight: 90,
        min: 2, max: 3,
        items: [
            { id: "minecraft:bone", ratio: 10 },
            { id: "minecraft:gunpowder", ratio: 10 },
            { id: "minecraft:rotten_flesh", ratio: 10 },
            { id: "minecraft:string", ratio: 10 },
            { id: "minecraft:spider_eye", ratio: 10 },
            // { id: "minecraft:ender_pearl", ratio: 10 },


        ]
    },

    {
        groupName: "treasure",
        groupWeight: 10,
        min: 1, max: 2,
        items: [
            { id: "minecraft:diamond", ratio: 5 },
            // { id: "minecraft:emerald", ratio: 20 },
            { id: "minecraft:gold_ingot", ratio: 10 },
            
            { id: "minecraft:golden_apple", ratio: 5 },
            { id: "trailandtales_delight:golden_lantern_fruit", ratio: 5 },
            { id: "minecraft:enchanted_golden_apple", ratio: 1 },
            { id: "mynethersdelight:enchanted_golden_egg", ratio: 5 },


        ]
    },
];

const simple_dungeon_supply = [
    // {   
    //     groupName: "empty",
    //     groupWeight: 50, 
    //     items: [
    //         { id: "empty"},
    //     ]
    // },

    {
        groupName: "supply",
        groupWeight: 50,
        min: 2, max: 3,
        items: [
            { id: "minecraft:torch", ratio: 10 },
            { id: "minecraft:stick", ratio: 10 },
        ]
    },
];

const simple_dungeon_potion = [

    {   
        groupName: "potion_positive",
        groupWeight: 80, 
        min: 1, max: 1,
        items: all_positive_potion_item
    },
    {   
        groupName: "potion_negative",
        groupWeight: 20, 
        min: 1, max: 1,
        items: all_negative_potion_item
    },
    {   
        groupName: "empty",
        groupWeight: 50, 
        items: [
            { id: "empty"},
        ]
    },
]

const simple_dungeon_enchanted_book = [
    {
        groupName: "simple_dungeon",
        groupWeight: 50,
        min: 1, max: 1,
        items: [

            // ---- 装备通用 (工具/武器/防具) ----
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:unbreaking"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:mending"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:photosynthesis"] },

            // ---- 防具通用 ----
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:protection"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:projectile_protection"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:fire_protection"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:blast_protection"] }, 

            // ---- 躯干 (胸甲) ----
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:light"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:outreach"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:antidote"] },

            // ---- 腿部 (护腿) ----
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:swift_sneak"] }, 

            // ---- 脚部 (靴子) ----
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:feather_falling"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:web_walker"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:traveler"] },

            // ---- 近战武器 (剑/通用斧) ----
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:sharpness"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:smite"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:bane_of_arthropods"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:knockback"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:fire_aspect"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:looting"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:sweeping_edge"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["enchantencore:weaving_aspect"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["farmersdelight:backstabbing"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:heavy"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:blunt"] },

            // ---- 远程武器：弓 (Bow) ----
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:power"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:punch"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:flame"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:infinity"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:piercing"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:multishot"] },
        ],
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
];


const simple_dungeon_smithing_templates_common = [
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
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
];

const simple_dungeon_music_discs = [
    {
        groupName: "Music Discs",
        groupWeight: 25,
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

    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
];
// =================================================================
// 事件注册区域
// =================================================================
const simple_dungeon_content = [
    [simple_dungeon_equipment, 1, 1],
    [simple_dungeon_resources_treasure, 2, 3],
    [simple_dungeon_music_discs, 1, 1],
    [simple_dungeon_smithing_templates_common, 1, 1],
    [simple_dungeon_supply, 1, 2],
    [simple_dungeon_potion, 1, 1],
    [simple_dungeon_enchanted_book, 1, 1],
];

const loot_simple_dungeon = [
    [simple_dungeon_content, 1],
];