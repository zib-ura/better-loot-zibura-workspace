// =================================================================
// 战利品表定义区域
// =================================================================

const abandoned_mineshaft_ore = [
    {
        groupName: "common_ore",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference: "lootjs:raw_iron_and_raw_iron_block", ratio: 10 },
            { reference: "lootjs:raw_iron", ratio: 40 },
            { reference: "lootjs:coal_and_coal_block", ratio: 10 },
            { reference: "lootjs:coal", ratio: 40 },
            
            { reference: "lootjs:raw_copper_and_raw_copper_block", ratio: 5 },
            { reference: "lootjs:raw_copper", ratio: 20 },
            { reference: "lootjs:raw_gold_and_raw_gold_block", ratio: 5 },
            { reference: "lootjs:raw_gold", ratio: 20 },
            { reference: "lootjs:redstone_and_redstone_block", ratio: 5 },
            { reference: "lootjs:redstone", ratio: 20 },
            { reference: "lootjs:lapis_lazuli_and_lapis_lazuli_block", ratio: 5 },
            { reference: "lootjs:lapis_lazuli", ratio: 20 },
            { reference: "lootjs:raw_zinc_and_raw_zinc_block", ratio: 5 },
            { reference: "lootjs:raw_zinc", ratio: 20 },
        ]
    },

    {
        groupName: "rare_ore",
        groupWeight: 20, 
        min: 1, max: 2,
        items: [
            { reference: "lootjs:diamond", ratio: 10 },
        ]
    },
]

const abandoned_mineshaft_equipment = [
    {
        groupName: "common_equipment",
        groupWeight: 90,
        min: 1, max: 1, enchantChance: 0 , damage: [0.4, 0.6],
        items: [        
            { id: "minecraft:iron_pickaxe", ratio: 5 },
            { id: "minecraft:iron_shovel", ratio: 5 },
            { id: "minecraft:tnt", ratio: 5 },

        ]
    },

    {
        groupName: "rare_equipment",
        groupWeight: 10,
        min: 1, max: 1, enchantLevels: [20, 30], damage: [0.7, 0.9],
        items: [
            { id: "minecraft:diamond_pickaxe", ratio: 1 },
            { id: "minecraft:diamond_shovel", ratio: 1 },
        ]
    },
]

const abandoned_mineshaft_lighting = [
    {
        groupWeight: 50, 
        min: 4, max: 5,
        items: [
            { id: "minecraft:lantern", ratio: 10 },
            { id: "minecraft:redstone_torch", ratio: 10 },

        ]
    },
    // {
    //     groupName: "empty",
    //     groupWeight: 50,
    //     items: [
    //         { id: "empty" },
    //     ]
    // },
]

const abandoned_mineshaft_climbing = [
    {
        groupName: "climbing",
        groupWeight: 50, 
        min: 4, max: 5,
        items: [
            { id: "minecraft:ladder", ratio: 10 },
            { id: "farmersdelight:rope", ratio: 10 },
            { id: "supplementaries:rope", ratio: 10 },
            { id: "farm_and_charm:sturdy_ladder", ratio: 10 },
            { id: "minecraft:scaffolding", ratio: 10 },
            { id: "create:copper_ladder", ratio: 10 },
            { id: "farmersdelight:safety_net", ratio: 10 },
            { id: "supplementaries:rope_arrow", ratio: 10 }
        ]
    },
    // {
    //     groupName: "empty",
    //     groupWeight: 50,
    //     items: [
    //         { id: "empty" },
    //     ]
    // },
]


const abandoned_mineshaft_enchanted_book = [
    {
        groupName: "enchanted_book",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:fortune"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:silk_touch"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:unbreaking"] },
            { id: "minecraft:book", ratio: 5, enchantRandomly:  ["minecraft:mending"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:efficiency"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:outreach"] },
        
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

const abandoned_mineshaft_pottery_sherd = [
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
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
];
// =================================================================
// 事件注册区域
// =================================================================
const abandoned_mineshaft_content = [
    [abandoned_mineshaft_ore, 1, 2],
    [abandoned_mineshaft_equipment, 1, 2],
    [abandoned_mineshaft_lighting, 1, 1],
    [abandoned_mineshaft_climbing, 1, 1],
    [abandoned_mineshaft_pottery_sherd, 1, 1],
    [abandoned_mineshaft_enchanted_book, 1, 1],

    // [cobweb, 4, 5],
];

const loot_abandoned_mineshaft = [
    [abandoned_mineshaft_content, 1],
];