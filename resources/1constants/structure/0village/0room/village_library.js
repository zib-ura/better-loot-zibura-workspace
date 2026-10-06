const village_library_records_and_ink = [
    {
        groupName: "records_and_ink",
        groupWeight: 20,
        min: 1, max: 1,
        items: [
            { id: "minecraft:book", ratio: 15 },
            { id: "minecraft:writable_book", ratio: 8 },
            { id: "supplementaries:antique_ink", ratio: 10 },
            { id: "minecraft:ink_sac", ratio: 12 },
            { id: "minecraft:glow_ink_sac", ratio: 5 }, 
        ]
    }
];

const village_library_decorations = [
    {
        groupName: "office_decorations",
        groupWeight: 10,
        min: 1, max: 1,
        items: [
            { id: "supplementaries:globe", ratio: 5 }, 
            { id: "supplementaries:globe_sepia", ratio: 5 },
            { id: "minecraft:clock", ratio: 5 },
            { id: "minecraft:painting", ratio: 8 }, 
        ]
    }
];

const village_library_special_books = [
    {   
        groupName: "Special Book",
        groupWeight: 30, 
        min: 1, max: 1,
        items: [
            { id: "xpbook:xp_tome", ratio: 10 },
        ]
    },
    {   
        groupName: "empty",
        groupWeight: 70, 
        items: [
            { id: "empty"},
        ]
    },
]

const village_library_drinks = [
    {   
        groupName: "Coffee",
        groupWeight: 50, 
        min: 1, max: 1,
        items: [
            { id: "youkaisfeasts:americano", ratio: 10 },
            { id: "youkaisfeasts:ristretto", ratio: 10 },
            { id: "youkaisfeasts:latte", ratio: 10 },
            { id: "youkaisfeasts:con_panna", ratio: 10 },
            { id: "youkaisfeasts:cappuccino", ratio: 10 },
            { id: "youkaisfeasts:macchiato", ratio: 10 },
            { id: "youkaisfeasts:mocha", ratio: 10 },

            { id: "rusticdelight:coffee", ratio: 10 },
            { id: "rusticdelight:milk_coffee", ratio: 10 },
            { id: "rusticdelight:chocolate_coffee", ratio: 10 },
            { id: "rusticdelight:honey_coffee", ratio: 10 },
            { id: "rusticdelight:syrup_coffee", ratio: 10 },
            { id: "rusticdelight:dark_coffee", ratio: 10 },
        ]
    },

    {   
        groupName: "Tea",
        groupWeight: 50, 
        min: 1, max: 1,
        items: [
            { id: "farm_and_charm:strawberry_tea", ratio: 10 },
            { id: "youkaisfeasts:green_tea", ratio: 10 },
            { id: "youkaisfeasts:white_tea", ratio: 10 },
            { id: "youkaisfeasts:black_tea", ratio: 10 },
            { id: "youkaisfeasts:oolong_tea", ratio: 10 },
            { id: "youkaisfeasts:dark_tea", ratio: 10 },
            { id: "youkaisfeasts:yellow_tea", ratio: 10 },
            { id: "youkaisfeasts:genmai_tea", ratio: 10 },
            { id: "youkaisfeasts:saidi_tea", ratio: 10 },
        ]
    },
]

const village_chess = [
    {
        groupName: "board_state",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "touhou_little_maid:gomoku_board_state", ratio: 10, jsonFunction: { "function": "touhou_little_maid:board_state_randomly", "tags": [ "library"]}},
            { id: "touhou_little_maid:cchess_board_state", ratio: 10, jsonFunction: { "function": "touhou_little_maid:board_state_randomly", "tags": [ "library"]}},
            { id: "touhou_little_maid:wchess_board_state", ratio: 10, jsonFunction: { "function": "touhou_little_maid:board_state_randomly", "tags": [ "library"]}},
        ]
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
]

const village_library_enchanted_book = [
    {   
        groupName: "Book",
        groupWeight: 50, 
        min: 1, max: 1,
        items: all_Available_Enchant_books
    },
];
// =================================================================
// 事件注册区域
// =================================================================
const village_library_content = [
    [village_library_records_and_ink, 2, 3],
    [village_library_decorations, 1, 1],
    [village_library_drinks, 1, 2],
    [village_library_special_books, 1, 1],
    [paper, 4, 5],
    [village_chess, 1, 1],
    [village_library_enchanted_book, 1, 1],
];




const loot_village_library = [
    [village_library_content, 1],
];