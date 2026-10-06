const underwater_ruin_big_enchanted_book = [
    {
        groupName: "underwater_ruin_big",
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
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:ocean_heart"] },

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
const underwater_ruin_big_content = [
    [seagrass, 4, 5],
    [underwater_ruin_big_enchanted_book, 1, 1],
];

const loot_underwater_ruin_big = [
    [underwater_ruin_big_content, 1],
];