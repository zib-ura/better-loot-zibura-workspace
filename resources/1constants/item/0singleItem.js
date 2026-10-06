// const singleItem = {};

// // 1. 使用你验证成功的 Item.getList() 获取所有物品
// // 2. 遍历每个 item 对象，提取它的 id
// Item.getList().forEach(item => {
//     let fullId = item.id;
    
//     // 过滤空气或无效物品
//     if (!fullId || fullId === "minecraft:air") return;

//     // 转换为合法的 JS 属性名（如 "supplementaries:ash" -> "supplementaries_ash"）
//     const uniqueKey = fullId.replace(":", "_"); 
    
//     // 提取纯物品名作为配置里的 groupName（按冒号切分）
//     const groupName = fullId.split(":")[1]; 

//     // 自动拼装结构
//     singleItem[uniqueKey] = [
//         {        
//             groupName: groupName,
//             groupWeight: 20, 
//             min: 1, max: 1,
//             items: [
//                 { id: fullId, ratio: 10 }
//             ]
//         }
//     ];
// });


const paper = [
    {        
        groupName: "paper",
        groupWeight: 100,
        min: 1, max: 1,
        items: [
            { id: "minecraft:paper", ratio: 10 },
        ]
    },
]

const iron_nugget = [
    {        
        groupName: "iron_nugget",
        groupWeight: 100,
        min: 1, max: 1,
        items: [
            { id: "minecraft:iron_nugget", ratio: 10 },
        ]
    },
]

const mushroom = [
    {        
        groupName: "mushroom",
        groupWeight: 100,
        min: 1, max: 1,
        items: [
            { id: "minecraft:red_mushroom", ratio: 10 },
            { id: "minecraft:brown_mushroom", ratio: 10 },
        ]
    },
]

const vine = [
    {
        groupName: "Vine",
        groupWeight: 100,
        min: 1, max: 1,
        items: [
            { id: "minecraft:vine", ratio: 20 },
        ]
    }
];

const sand = [
    {
        groupName: "Sand",
        groupWeight: 100,
        min: 1, max: 1,
        items: [
            { id: "minecraft:sand", ratio: 20 },
        ]
    }
];

const seagrass = [
    {
        groupName: "seagrass",
        groupWeight: 100,
        min: 1, max: 1,
        items: [
            { id: "minecraft:seagrass", ratio: 20 },
        ]
    }
];

const ash = [
    {
        groupName: "Ash",
        groupWeight: 100,
        min: 1, max: 1,
        items: [
            { id: "supplementaries:ash", ratio: 20 },
        ]
    }
];

const cobweb = [
    {
        groupName: "cobweb",
        groupWeight: 100,
        min: 1, max: 1,
        items: [
                { id: "minecraft:cobweb", ratio: 10 }
        ]
    },
]

const netherrack = [
    {
        groupName: "netherrack",
        groupWeight: 100,
        min: 1, max: 1,
        items: [
            { id: "minecraft:netherrack", ratio: 10 }
        ]
    },
]

const name_tag = [
    {
        groupName: "name_tag",
        groupWeight: 100,
        min: 1, max: 1,
        items: [
            { id: "minecraft:name_tag", ratio: 10 }
        ]
    },
]


const village_recipe_item = [
    {
        groupName: "recipe_item",
        groupWeight: 100,
        min: 1, max: 1,
        items: [
            { id: "kaleidoscope_cookery:recipe_item", ratio: 10, jsonFunction: { "function": "kaleidoscope_cookery:recipe_randomly" }},
        ]
    },
]