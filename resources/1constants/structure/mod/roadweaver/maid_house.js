const roadweaver_maid_house_bauble = [
    {
        groupName: "bauble",
        groupWeight: 20,
        min: 1, max: 1, damage: [0.8, 0.9],
        items: [
            { id: "touhou_little_maid:maid_backpack_middle", ratio: 10 },
            { id: "touhou_little_maid:explosion_protect_bauble", ratio: 10 },
            { id: "touhou_little_maid:fire_protect_bauble", ratio: 10 },
            { id: "touhou_little_maid:projectile_protect_bauble", ratio: 10 },
            { id: "touhou_little_maid:magic_protect_bauble", ratio: 10 },
            { id: "touhou_little_maid:fall_protect_bauble", ratio: 10 },
            { id: "touhou_little_maid:drown_protect_bauble", ratio: 10 },
            { id: "touhou_little_maid:nimble_fabric", ratio: 10 },
            { id: "touhou_little_maid:item_magnet_bauble", ratio: 10 },
        ]
    },
]

const roadweaver_maid_house_furniture = [
    {
        groupName: "furniture",
        groupWeight: 20,
        min: 1, max: 1,
        items: [
            { id: "touhou_little_maid:picnic_basket", ratio: 10 },
            { id: "touhou_little_maid:maid_bed", ratio: 10 },
            { id: "touhou_little_maid:computer", ratio: 10 },
            { id: "touhou_little_maid:bookshelf", ratio: 10 },
            { id: "touhou_little_maid:keyboard", ratio: 10 },

            // { id: "touhou_little_maid:cchess", ratio: 10 },
            // { id: "touhou_little_maid:wchess", ratio: 10 },
            // { id: "touhou_little_maid:gomoku", ratio: 10 },

        ]
    },
]

const roadweaver_maid_house_honey_bottle = [
    {
        groupName: "roadweaver_maid_house_honey_bottle",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "minecraft:honey_bottle", ratio: 10 }
        ]
    }
];


const roadweaver_maid_house_milk = [
    {
        groupName: "roadweaver_maid_house_milk_bucket",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "minecraft:milk_bucket", ratio: 1 },
            { id: "farmersdelight:milk_bottle", ratio: 100 },

        ]
    }
];

const roadweaver_maid_house_hay_block = [
    {
        groupName: "roadweaver_maid_house_hay_block",
        groupWeight: 15,
        min: 1, max: 2,
        items: [
            { id: "minecraft:hay_block", ratio: 10 }
        ]
    }
];

const roadweaver_maid_house_sugar = [
    {
        groupName: "roadweaver_maid_house_sugar",
        groupWeight: 15,
        min: 1, max: 2,
        items: [
            { id: "minecraft:sugar", ratio: 10 }
        ]
    }
];

const roadweaver_maid_house_egg = [
    {
        groupName: "roadweaver_maid_house_egg",
        groupWeight: 15,
        min: 1, max: 2,
        items: [
            { id: "minecraft:egg", ratio: 10 }
        ]
    }
];

const roadweaver_maid_house_glass_bottle = [
    {
        groupName: "roadweaver_maid_house_glass_bottle",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "minecraft:glass_bottle", ratio: 10 }
        ]
    }
];

const roadweaver_maid_house_gohei = [
    {
        groupName: "roadweaver_maid_house_gohei",
        groupWeight: 15,
        min: 1, max: 1, damage: [0.1, 0.1],
        items: [
            { id: "touhou_little_maid:hakurei_gohei", ratio: 10 },
            { id: "touhou_little_maid:sanae_gohei", ratio: 10 }
        ]
    }
];

const roadweaver_maid_house_fishing_rod = [
    {
        groupName: "roadweaver_maid_house_fishing_rod",
        groupWeight: 15,
        min: 1, max: 1, enchantLevels: [1, 30], damage: [0.1, 0.1],
        items: [
            { id: "minecraft:fishing_rod", ratio: 10 }
        ]
    }
];

const roadweaver_maid_house_raw_fish = [
    {
        groupName: "roadweaver_maid_house_raw_fish",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "minecraft:cod", ratio: 10 },           // 生鳕鱼
            { id: "minecraft:salmon", ratio: 10 },        // 生鲑鱼
            // { id: "minecraft:tropical_fish", ratio: 5 },  // 热带鱼
            // { id: "minecraft:pufferfish", ratio: 3 }      // 河豚
        ]
    }
];


const roadweaver_maid_house_shears = [
    {
        groupName: "roadweaver_maid_house_shears", damage: [0.8, 0.9],
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "minecraft:shears", ratio: 10 }
        ]
    }
];

const roadweaver_maid_house_poppy = [
    {
        groupName: "roadweaver_maid_house_poppy",
        groupWeight: 15,
        min: 1, max: 1, 
        items: [
            { id: "minecraft:poppy", ratio: 10 }
        ]
    }
];

// =================================================================
// 事件注册区域
// =================================================================
const roadweaver_maid_special_content = [
    //special
    [roadweaver_maid_house_bauble, 1, 1],
    [roadweaver_maid_house_furniture, 1, 1],
    [roadweaver_maid_house_gohei, 1, 1],

    //cake
    [roadweaver_maid_house_honey_bottle, 1, 1],
    [roadweaver_maid_house_milk, 3, 4],
    [roadweaver_maid_house_hay_block, 1, 2],
    [roadweaver_maid_house_sugar, 1, 1],
    [roadweaver_maid_house_glass_bottle, 1, 1],
    [roadweaver_maid_house_egg, 1, 1],

    
    // survive
    [roadweaver_maid_house_fishing_rod, 1, 1],
    [roadweaver_maid_house_raw_fish, 1, 2],

    //altar
    [roadweaver_maid_house_shears, 1, 1],
    [roadweaver_maid_house_poppy, 1, 1],
]

const loot_roadweaver_maid_house = [
    [roadweaver_maid_special_content, 1],
]