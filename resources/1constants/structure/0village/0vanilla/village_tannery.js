const village_tannery_products = [
    {
        groupName: "common_leather_products",
        groupWeight: 20,
        min: 2, max: 3,
        items: [
            { id: "minecraft:item_frame", ratio: 5 },
            { id: "minecraft:book", ratio: 5 },
        ]
    },

    {
        groupName: "special_leather_products",
        groupWeight: 20,
        min: 1, max: 1,
        items: [
            { id: "travelersbackpack:standard", ratio: 10 },
            { id: "minecraft:bundle", ratio: 10 },
            { id: "minecraft:saddle", ratio: 10 },
        ]
    },
]

const village_tannery_armors = [
    {
        groupName: "leather_armors",
        groupWeight: 20,
        min: 1, max: 1, enchantChance: 0.0 , damage: [0.7, 0.8],
        items: [
            { id: "minecraft:leather_boots", ratio: 5 },
            { id: "minecraft:leather_helmet", ratio: 5 },
            { id: "minecraft:leather_chestplate", ratio: 5 },
            { id: "minecraft:leather_leggings", ratio: 5 },
        ]
    },    


]

const village_tannery_materials = [
    {        
        groupName: "materials",
        groupWeight: 20,
        min: 2, max: 3,
        items: [
            { id: "minecraft:leather", ratio: 10 },
            { id: "minecraft:string", ratio: 10 }
        ]
    },
]

const desert_village_tannery_materials = [
    {        
        groupName: "materials",
        groupWeight: 20,
        min: 2, max: 3,
        items: [
            { id: "minecraft:rabbit_hide", ratio: 10 },
            { id: "minecraft:string", ratio: 10 }
        ]
    },
]

// =================================================================
// 事件注册区域
// =================================================================
const village_tannery_content = [
    [village_tannery_products, 1, 2],
    [village_tannery_materials, 2, 3, { matchBiome: "#better_loot_zibura:tannery/not_desert" }],
    [desert_village_tannery_materials, 2, 3, { matchBiome: "minecraft:desert" }],
    [village_tannery_armors, 1, 2],
];

const loot_village_tannery = [
    [village_tannery_content, 1],
];