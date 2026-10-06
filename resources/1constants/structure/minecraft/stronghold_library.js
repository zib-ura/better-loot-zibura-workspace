const stronghold_library_books_equipment = [
    {   
        groupName: "Book",
        groupWeight: 70, 
        min: 2, max: 3,
        items: [
            { id: "minecraft:book", ratio: 20 },
            { id: "minecraft:paper", ratio: 10 },
            // { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:sharpness"] },
            // { id: "minecraft:diamond_sword", ratio: 10, enchantRandomly: ["minecraft:sharpness"] },

        ]
    },
];


const stronghold_library_enchanted_book = [
    {   
        groupName: "Book",
        groupWeight: 100,
        min: 1, max: 1,
        items: [
            { id: "minecraft:book", ratio: 10, enchantLevels: [29, 30] },
        ]
    },
];
// =================================================================
// 事件注册区域
// =================================================================
const stronghold_library_content = [
    [stronghold_library_books_equipment, 2, 3],
    [village_chess, 1, 1],
    [ash, 2, 3],
    [stronghold_library_enchanted_book, 1, 2],
];

const loot_stronghold_library = [
    [stronghold_library_content, 1],
];