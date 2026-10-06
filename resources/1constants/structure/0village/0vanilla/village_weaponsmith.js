const village_weaponsmith_products = [
    {
        groupName: "common_weapons",
        groupWeight: 95,
        min: 1,  max: 1,
        enchantChance: 0.0,
        damage: [0.7, 0.8],
        items: [
            { id: "minecraft:iron_sword", ratio: 10 },
            { id: "minecraft:stone_sword", ratio: 10 },
            { id: "minecraft:golden_sword", ratio: 10 },

            { id: "farmersdelight:iron_knife", ratio: 10 },
            { id: "farmersdelight:flint_knife", ratio: 10 },
            { id: "moredelight:stone_knife", ratio: 10 },
            { id: "farmersdelight:golden_knife", ratio: 10 },

            { id: "kaleidoscope_cookery:iron_kitchen_knife", ratio: 10 },
            { id: "kaleidoscope_cookery:gold_kitchen_knife", ratio: 10 }
        ]
    },

    {
        groupName: "rare_weapons",
        groupWeight: 5,
        min: 1,  max: 1,
        enchantChance: 0.0,
        damage: [0.7, 0.8],
        items: [
            { id: "minecraft:diamond", ratio: 60 }, 
            { id: "minecraft:diamond_sword", ratio: 10 },
            { id: "farmersdelight:diamond_knife", ratio: 10 },
            { id: "kaleidoscope_cookery:diamond_kitchen_knife", ratio: 10 }
        ]
    }
];


// =================================================================
// 事件注册区域
// =================================================================
const village_weaponsmith_content = [
    [village_weaponsmith_products, 1, 2],
    [village_smith_common_products, 1, 2],
    [village_smith_materials, 2, 4],
    [iron_nugget, 3, 4],
    [name_tag,    1, 1],
];

const loot_village_weaponsmith = [
    [village_weaponsmith_content, 1],
];