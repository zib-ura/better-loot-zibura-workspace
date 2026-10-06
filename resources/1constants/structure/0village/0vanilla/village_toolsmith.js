const village_toolsmith_products = [
    {
        groupName: "common_tools",
        groupWeight: 95,
        min: 1,  max: 1,
        enchantChance: 0.0,
        damage: [0.7, 0.8],
        items: [
            { id: "minecraft:iron_pickaxe", ratio: 10 },
            { id: "minecraft:iron_shovel", ratio: 10 },
            { id: "minecraft:iron_axe", ratio: 10 },
            { id: "minecraft:iron_hoe", ratio: 10 },
            { id: "minecraft:stone_pickaxe", ratio: 10 },
            { id: "minecraft:stone_shovel", ratio: 10 },
            { id: "minecraft:stone_axe", ratio: 10 },
            { id: "minecraft:stone_hoe", ratio: 10 },
            { id: "minecraft:golden_pickaxe", ratio: 10 },
            { id: "minecraft:golden_shovel", ratio: 10 },
            { id: "minecraft:golden_axe", ratio: 10 },
            { id: "minecraft:golden_hoe", ratio: 10 },

            { id: "minecraft:brush", ratio: 10 },
            { id: "minecraft:shears", ratio: 10 },

            { id: "kaleidoscope_cookery:sickle", ratio: 10 },

            { id: "touhou_little_maid:wireless_io", ratio: 5 },
            { id: "minecraft:hopper", ratio: 5 },

        ]
    },

    {
        groupName: "rare_tools",
        groupWeight: 5,
        min: 1,  max: 1,
        enchantChance: 0.0,
        damage: [0.7, 0.8],
        items: [
            { id: "minecraft:diamond", ratio: 80 }, 
            { id: "minecraft:diamond_pickaxe", ratio: 10 },
            { id: "minecraft:diamond_shovel", ratio: 10 },
            { id: "minecraft:diamond_axe", ratio: 10 },
            { id: "minecraft:diamond_hoe", ratio: 10 },
        ]
    },
];

// =================================================================
// 事件注册区域
// =================================================================
const village_toolsmith_content = [
    [village_toolsmith_products, 1, 2],
    [village_smith_common_products, 1, 2],
    [village_smith_materials, 2, 4],
    [iron_nugget, 3, 4],
    [name_tag,    1, 1],
];

const loot_village_toolsmith = [
    [village_toolsmith_content, 1],
];