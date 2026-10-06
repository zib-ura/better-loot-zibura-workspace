const ruined_portal_nether_materials = [

    // 基础常见资源：地表遍地都是，作为保底掉落
    {
        groupName: "Nether Resources - Common",
        groupWeight: 60,
        min: 2, max: 4,
        items: [
            { id: "minecraft:netherrack", ratio: 30 },
            { id: "minecraft:soul_sand", ratio: 15 },
            { id: "minecraft:nether_brick", ratio: 15 },
            { id: "minecraft:quartz", ratio: 20 },
            { id: "minecraft:glowstone_dust", ratio: 20 }
        ]
    },

    // 实用/加工资源：需要挖掘黑石、下界生物掉落或简易合成
    {
        groupName: "Nether Resources - Uncommon",
        groupWeight: 30,
        min: 1, max: 2,
        items: [
            { id: "minecraft:glowstone", ratio: 20 },
            { id: "minecraft:obsidian", ratio: 25 },
            { id: "minecraft:fire_charge", ratio: 20 },
            { id: "minecraft:magma_cream", ratio: 15 },
        ]
    },

    // 稀有/结构专属：依赖要塞/猪灵堡垒/猪灵以物易物，且价值极高
    {
        groupName: "Nether Resources - Rare",
        groupWeight: 10,
        min: 1, max: 1,
        items: [
            { id: "minecraft:blaze_powder", ratio: 25 },
            { id: "minecraft:crying_obsidian", ratio: 25 },
            { id: "minecraft:nether_wart", ratio: 25 },
        ]
    },

    {
        groupName: "Rare Valuables",
        groupWeight: 1,
        min: 1, max: 1,
        items: [
            // { id: "minecraft:diamond", ratio: 8 },
            { id: "minecraft:ancient_debris", ratio: 1 },
            { id: "minecraft:netherite_scrap", ratio: 1 },
            // { id: "minecraft:nether_star", ratio: 1 },
            { id: "minecraft:ghast_tear", ratio: 1 },

        ]
    },
];

const ruined_portal_gear = [
    {
        groupName: "Gold Armor Pieces",
        groupWeight: 80,
        min: 1, max: 1, damage: [0.2, 0.3],
        items: [
            { id: "minecraft:golden_helmet", ratio: 25 },
            { id: "minecraft:golden_chestplate", ratio: 25 },
            { id: "minecraft:golden_leggings", ratio: 25 },
            { id: "minecraft:golden_boots", ratio: 25 },
            { id: "minecraft:flint_and_steel", ratio: 25 },

        ]
    },


    {
        groupName: "protect",
        groupWeight: 20,
        min: 1, max: 1,
        items: [
            { id: "minecraft:potion", ratio: 10 , potion: "minecraft:fire_resistance" }, 
            { id: "touhou_little_maid:fire_protect_bauble", ratio: 10 }, 
        ]
    },

];

const ruined_portal_enchanted_book = [
    {
        groupName: "ruined_portal",
        groupWeight: 20,
        min: 1, max: 1,
        items: [
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:protection"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:projectile_protection"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:fire_protection"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:blast_protection"] },  
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["kaleidoscope_nether:lava_walker"] },
        

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
const ruined_portal_content = [
    [ruined_portal_nether_materials, 3, 5],
    // [netherrack, 4, 5],
    [ruined_portal_gear, 1, 1],
    [ruined_portal_enchanted_book, 1, 1],
];

const loot_ruined_portal = [
    [ruined_portal_content, 1],
];