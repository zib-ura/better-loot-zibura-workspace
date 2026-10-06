const stronghold_supply_food = [
    {
        groupName: "common_food",
        groupWeight: 85,
        min: 2, max: 3,
        items: [
            // { reference: "lootjs:pumpkin_slice_and_pumpkin_block", ratio: 5 },
            // { reference: "lootjs:pumpkin_slice", ratio: 20 },

            // { reference: "lootjs:melon_slice_and_melon_block", ratio: 5 },
            // { reference: "lootjs:melon_slice", ratio: 20 },

            // { reference: "lootjs:corn_and_corn_block", ratio: 5 },
            // { reference: "lootjs:corn", ratio: 20 },

            // { reference: "lootjs:apple_and_apple_block", ratio: 5 },
            // { reference: "lootjs:apple", ratio: 20 },

            { reference: "lootjs:beetroot_and_beetroot_block", ratio: 5 },
            { reference: "lootjs:beetroot", ratio: 20 },

            // { reference: "lootjs:brown_mushroom_and_brown_mushroom_block", ratio: 5 },
            // { reference: "lootjs:brown_mushroom", ratio: 20 },

            // { reference: "lootjs:red_mushroom_and_red_mushroom_block", ratio: 5 },
            // { reference: "lootjs:red_mushroom", ratio: 20 },

            // { reference: "lootjs:carrot_and_carrot_block", ratio: 5 },
            // { reference: "lootjs:carrot", ratio: 20 },

            { reference: "lootjs:potato_and_potato_block", ratio: 5 },
            { reference: "lootjs:potato", ratio: 20 },

            // { reference: "lootjs:cabbage_and_cabbage_block", ratio: 5 },
            // { reference: "lootjs:cabbage", ratio: 20 },

            // { reference: "lootjs:lettuce_and_lettuce_block", ratio: 5 },
            // { reference: "lootjs:lettuce", ratio: 20 },

            // { reference: "lootjs:onion_and_onion_block", ratio: 5 },
            // { reference: "lootjs:onion", ratio: 20 },

            // { reference: "lootjs:tomato_and_tomato_block", ratio: 5 },
            // { reference: "lootjs:tomato", ratio: 20 },

            // { reference: "lootjs:rice_and_rice_block", ratio: 5 },
            // { reference: "lootjs:rice", ratio: 20 },

            { reference: "lootjs:wheat_and_wheat_block", ratio: 5 },
            { reference: "lootjs:wheat", ratio: 20 },

            // { reference: "lootjs:cookie_and_cookie_crate", ratio: 5 },
            // { reference: "lootjs:cookie", ratio: 20 },

            // { reference: "lootjs:sugar_and_sugar_crate", ratio: 5 },
            // { reference: "lootjs:sugar", ratio: 20 },

            { reference: "lootjs:bread_and_bread_crate", ratio: 5 },
            { reference: "lootjs:bread", ratio: 20 },

            // { reference: "lootjs:egg_and_egg_crate", ratio: 5 },
            // { reference: "lootjs:egg", ratio: 20 },
        ]
    },
    // {
    //     groupName: "rare_food",
    //     groupWeight: 15, 
    //     min: 1, max: 2,
    //     items: [
    //         { id: "minecraft:enchanted_golden_apple" },
    //     ]
    // }
]

const stronghold_supply_resources = [
    {
        groupName: "basic_building_blocks",
        groupWeight: 50,
        min: 2, max: 3,
        items: [
            { id: "minecraft:oak_log" },
            { id: "minecraft:stone_bricks" },
            { id: "minecraft:cobblestone" }
        ]
    },
    {
        groupName: "mineral_blocks",
        groupWeight: 30,
        min: 2, max: 3,
        items: [
            { reference: "lootjs:coal_and_coal_block", ratio: 5 },
            { reference: "lootjs:coal", ratio: 20 },
            { reference: "lootjs:copper_ingot_and_copper_ingot_block", ratio: 5 },
            { reference: "lootjs:copper_ingot", ratio: 20 },
            { reference: "lootjs:iron_ingot_and_iron_ingot_block", ratio: 5 },
            { reference: "lootjs:iron_ingot", ratio: 20 },
        ]
    },
    {
        groupName: "rare_mineral_blocks",
        groupWeight: 10,
        min: 1, max: 2,
        items: [
            { reference: "lootjs:gold_ingot_and_gold_ingot_block", ratio: 5 },
            { reference: "lootjs:gold_ingot", ratio: 20 },
            { reference: "lootjs:diamond_and_diamond_block", ratio: 5 },
            { reference: "lootjs:diamond", ratio: 20 },
            { reference: "lootjs:emerald_and_emerald_block", ratio: 5 },
            { reference: "lootjs:emerald", ratio: 20 }
        ]
    },
    // {
    //     groupName: "utility_blocks",
    //     groupWeight: 15,
    //     min: 1, max: 3,
    //     items: [
    //         { id: "minecraft:bookshelf" },
    //         { id: "minecraft:obsidian" },
    //         { id: "minecraft:anvil" }
    //     ]
    // }
]

const stronghold_supply_lighting = [
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

const stronghold_supply_content = [
    [stronghold_supply_food, 1, 1],              
    [stronghold_supply_resources, 3, 4],    
    [stronghold_supply_lighting, 2, 3],
];

const loot_stronghold_supply = [
    [stronghold_supply_content, 1],
];