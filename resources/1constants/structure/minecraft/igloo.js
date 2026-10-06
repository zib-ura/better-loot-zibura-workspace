const igloo_material = [

    {   
        groupName: "brewing",
        groupWeight: 50, 
        min: 2, max: 3,
        items: [
            { id: "minecraft:redstone", ratio: 10 },
            { id: "minecraft:sugar", ratio: 10 },
            { id: "minecraft:glowstone_dust", ratio: 10 },
            { id: "minecraft:magma_cream", ratio: 10 },
            { id: "minecraft:nether_wart", ratio: 20 },
            { id: "minecraft:blaze_rod", ratio: 10 },
            { id: "minecraft:glistering_melon_slice", ratio: 10 },
            { id: "minecraft:phantom_membrane", ratio: 10 },
            { id: "minecraft:golden_carrot", ratio: 10 },
            { id: "minecraft:turtle_scute", ratio: 10 },
            { id: "minecraft:gunpowder", ratio: 10 },
            { id: "minecraft:pufferfish", ratio: 10 },

            { id: "minecraft:ender_pearl", ratio: 10 },

        ]
    },
]

const igloo_equipment = [
    {   
        groupName: "equipment",
        groupWeight: 50, 
        min: 2, max: 3,
        items: [
            { id: "minecraft:potion", ratio: 10 , potion: "minecraft:water" , max: 3}, 
            { id: "minecraft:book", ratio: 10 },
            { id: "minecraft:writable_book", ratio: 10 },           
        ]
    },
]   

const igloo_product = [
    {   
        groupName: "bauble",
        groupWeight: 20, 
        min: 1, max: 1,
        items: [

            { id: "touhou_little_maid:nimble_fabric", ratio: 10 },
            { id: "touhou_little_maid:magic_protect_bauble", ratio: 10 },
            { id: "touhou_little_maid:wireless_io", ratio: 10 },
            { id: "touhou_little_maid:shrine", ratio: 1 },

        ]
    },

    {   
        groupName: "potion_positive",
        groupWeight: 10, 
        min: 1, max: 1,
        items: all_positive_potion_item
    },


    {   
        groupName: "potion_negative",
        groupWeight: 70, 
        min: 1, max: 1,
        items: all_negative_potion_item
    }
]

const igloo_golden_apple = [
    {
        groupName: "golden_apple",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "minecraft:golden_apple", ratio: 10 }
        ]
    },
]
// =================================================================
// 事件注册区域
// =================================================================
const igloo_content = [
    [igloo_equipment, 1, 1],
    [igloo_material, 3, 4],
    [igloo_product, 2, 2],
    [igloo_golden_apple, 1, 1],
];

const loot_igloo = [
    [igloo_content, 1],
];