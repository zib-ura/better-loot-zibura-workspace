const lighthouse = [
    {
        groupName: "common Cargo",
        groupWeight: 50,
        min: 2, max: 3,
        items: [
            { id: "minecraft:redstone", ratio: 10 },
            { id: "minecraft:redstone_torch", ratio: 10 },
            { id: "minecraft:repeater", ratio: 10 },
            { id: "minecraft:comparator", ratio: 10 },
            { id: "minecraft:lever", ratio: 10 },
            { id: "minecraft:stone", ratio: 10 },
            { id: "minecraft:cobblestone", ratio: 10 },
            { id: "minecraft:redstone_lamp", ratio: 10 },


        ]
    },

    {
        groupName: "rare Cargo",
        groupWeight: 10,
        min: 1, max: 2,
        items: [
            { id: "minecraft:glowstone", ratio: 10 },
            { id: "minecraft:quartz", ratio: 10 },

        ]
    },
];

// =================================================================
// 事件注册区域
// =================================================================
const lighthouse_content = [
    [lighthouse, 2, 4],
];

const loot_lighthouse = [
    [lighthouse_content, 1],
];