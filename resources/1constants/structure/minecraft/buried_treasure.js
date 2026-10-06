const buried_treasure_valuables = [
    {
        groupName: "Valuable Cargo",
        groupWeight: 25,
        min: 1, max: 1,
        items: [
            { id: "minecraft:sea_lantern", ratio: 5 },
            { id: "minecraft:heart_of_the_sea", ratio: 5 },
            { id: "minecraft:nautilus_shell", ratio: 5 },          

        ]
    },
]

const gold_and_diamond_products = [
    {
        groupName: "Gold Products",
        groupWeight: 99,
        min: 1, max: 1,        
        damage: [0.5, 0.9],
        enchantLevels: [1, 20], 
        items: [
            // 金制工具与武器
            { id: "minecraft:golden_sword", ratio: 10 },
            // { id: "minecraft:golden_pickaxe", ratio: 10 },
            // { id: "minecraft:golden_axe", ratio: 10 },
            // { id: "minecraft:golden_shovel", ratio: 10 },
            // { id: "minecraft:golden_hoe", ratio: 10 },
            // 金制盔甲
            { id: "minecraft:golden_helmet", ratio: 10 },
            { id: "minecraft:golden_chestplate", ratio: 10 },
            { id: "minecraft:golden_leggings", ratio: 10 },
            { id: "minecraft:golden_boots", ratio: 10 },
            { id: "minecraft:golden_horse_armor", ratio: 10 }, // 金马铠
            // 金制原材料与消耗品
            { id: "minecraft:gold_ingot", ratio: 10 },        // 金锭
            // { id: "minecraft:gold_nugget", ratio: 10 },       // 金粒
            // { id: "minecraft:gold_block", ratio: 10 },          // 金块
            // { id: "minecraft:raw_gold", ratio: 10 },           // 粗金
            { id: "minecraft:golden_carrot", ratio: 10 },       // 金胡萝卜
            { id: "minecraft:golden_apple", ratio: 10 },        // 金苹果
            { id: "trailandtales_delight:golden_lantern_fruit", ratio: 10 },


        ]
    },
    {
        groupName: "Diamond Products Gold Treasure",
        groupWeight: 1,
        min: 1, max: 1,        
        damage: [0.5, 0.9],
        enchantLevels: [1, 20], 
        items: [
            // 钻石制工具与武器
            { id: "minecraft:diamond_sword", ratio: 10 },
            // { id: "minecraft:diamond_pickaxe", ratio: 10 },
            // { id: "minecraft:diamond_axe", ratio: 10 },
            // { id: "minecraft:diamond_shovel", ratio: 10 },
            // { id: "minecraft:diamond_hoe", ratio: 10 },
            // 钻石制盔甲
            { id: "minecraft:diamond_helmet", ratio: 10 },
            { id: "minecraft:diamond_chestplate", ratio: 10 },
            { id: "minecraft:diamond_leggings", ratio: 10 },
            { id: "minecraft:diamond_boots", ratio: 10 },
            { id: "minecraft:diamond_horse_armor", ratio: 10 }, // 钻石马铠
            // 钻石原材料
            { id: "minecraft:diamond", ratio: 10 },             // 钻石
            // { id: "minecraft:diamond_block", ratio: 10 }        // 钻石块


            { id: "minecraft:enchanted_golden_apple", ratio: 10 }, // 附魔金苹果
            { id: "mynethersdelight:enchanted_golden_egg", ratio: 10 },
        ]
    },
];

const buried_treasure_emerald = [
    {
        groupName: "ingot",
        groupWeight: 25,  
        min: 1, max: 1,
        items: [
            { reference: "lootjs:emerald_and_emerald_block", ratio: 10 },
            { reference: "lootjs:emerald", ratio: 40 },
            { reference: "lootjs:gold_ingot_and_gold_ingot_block", ratio: 10 },
            { reference: "lootjs:gold_ingot", ratio: 40 },

        ]
    },
];

const buried_treasure_smithing_templates_exclusive = [
    {
        groupName: "Smithing Templates",
        groupWeight: 50,  
        min: 1, max: 1,
        items: [
            { id: "minecraft:coast_armor_trim_smithing_template", ratio: 10 },
            { id: "minecraft:tide_armor_trim_smithing_template", ratio: 10 },
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

const buried_treasure_enchanted_book = [
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
const buried_treasure_content = [
    [gold_and_diamond_products, 1, 2],
    [buried_treasure_valuables, 1, 1],
    [buried_treasure_smithing_templates_exclusive, 1, 1],
    [buried_treasure_emerald, 4, 6],
    [buried_treasure_enchanted_book, 1, 1],

];

const loot_buried_treasure = [
    [buried_treasure_content, 1],
];