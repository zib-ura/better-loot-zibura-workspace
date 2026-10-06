const village_fletcher_products = [
    {
        groupName: "weapons",
        groupWeight: 20,
        min: 1, max: 1,
        items: [
            { id: "minecraft:bow", ratio: 10, damage: [0.2, 0.8] },
            { id: "minecraft:crossbow", ratio: 10, damage: [0.2, 0.8] },

            { id: "supplementaries:slingshot", ratio: 10 },
            { id: "supplementaries:quiver", ratio: 10 },
            { id: "supplementaries:rope_arrow", ratio: 10 },
        ]
    },

    {
        groupName: "arrow_and_rope",
        groupWeight: 50,
        min: 2, max: 3,
        items: [
            { id: "minecraft:arrow", ratio: 10 },
            { id: "supplementaries:rope", ratio: 10 },
            { id: "farm_and_charm:rope", ratio: 10 },
            { id: "beautify:rope", ratio: 10 },

        ]
    },
]
const village_fletcher_materials = [
    {        
        groupName: "materials",
        groupWeight: 20,
        min: 2, max: 3,
        items: [
            { id: "minecraft:flint", ratio: 10 },
            { id: "minecraft:stick", ratio: 10 },
            { id: "minecraft:string", ratio: 10 },
            { id: "minecraft:feather", ratio: 10 },
            { id: "minecraft:tripwire_hook", ratio: 10 },
            { id: "minecraft:iron_ingot", ratio: 10 },
        ]
    },
]

// =================================================================
// 事件注册区域
// =================================================================
const village_fletcher_content = [
    [village_fletcher_products, 2, 4],
    [village_fletcher_materials, 2, 4],
];

const loot_village_fletcher = [
    [village_fletcher_content, 1],
];