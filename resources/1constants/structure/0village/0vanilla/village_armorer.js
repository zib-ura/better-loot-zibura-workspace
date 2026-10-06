const village_armorer_products = [
    {
        groupName: "common_armor",
        groupWeight: 95,
        min: 1,  max: 1,
        
        damage: [0.7, 0.8],
        items: [
            // 链甲系列
            { id: "minecraft:chainmail_helmet", ratio: 10 },
            { id: "minecraft:chainmail_chestplate", ratio: 10 },
            { id: "minecraft:chainmail_leggings", ratio: 10 },
            { id: "minecraft:chainmail_boots", ratio: 10 },
            
            // 铁甲与盾牌
            { id: "minecraft:iron_helmet", ratio: 10 },
            { id: "minecraft:iron_chestplate", ratio: 10 },
            { id: "minecraft:iron_leggings", ratio: 10 },
            { id: "minecraft:iron_boots", ratio: 10 },
            { id: "minecraft:shield", ratio: 10 },

            // 模块化盔甲 - 战士系列
            { id: "immersive_armors:warrior_helmet", ratio: 10 },
            { id: "immersive_armors:warrior_chestplate", ratio: 10 },
            { id: "immersive_armors:warrior_leggings", ratio: 10 },
            { id: "immersive_armors:warrior_boots", ratio: 10 },

            // 模块化盔甲 - 重甲系列
            { id: "immersive_armors:heavy_helmet", ratio: 10 },
            { id: "immersive_armors:heavy_chestplate", ratio: 10 },
            { id: "immersive_armors:heavy_leggings", ratio: 10 },
            { id: "immersive_armors:heavy_boots", ratio: 10 },

            // 特殊装备：马铠/狼铠没有耐久度概念，Item.exists 检查通过后，
            // 脚本内部的 isNormalItem 虽然会执行，但底层 Minecraft 对其应用 damage(0.7, 0.8) 会直接忽略，所以放在这里完全安全。
            { id: "minecraft:iron_horse_armor", ratio: 10 },
            { id: "minecraft:golden_horse_armor", ratio: 10 },   
            // { id: "minecraft:wolf_armor", ratio: 10 },
        ]
    },

    {
        groupName: "rare_armor",
        groupWeight: 5,
        min: 1,  max: 1,
        
        damage: [0.7, 0.8],
        items: [
            // { id: "minecraft:diamond_helmet", ratio: 10 },
            // { id: "minecraft:diamond_chestplate", ratio: 10 },
            // { id: "minecraft:diamond_leggings", ratio: 10 },
            // { id: "minecraft:diamond_boots", ratio: 10 },
            { id: "minecraft:diamond", ratio: 10 },
          
        ]
    }
];



// =================================================================
// 事件注册区域
// =================================================================
const village_armorer_content = [
    [village_armorer_products, 1, 2],
    [village_smith_common_products,    1, 2],
    [village_smith_materials,          2, 4],
    [iron_nugget, 3, 4],
    [name_tag,    1, 1],
];

const loot_village_armorer = [
    [village_armorer_content, 1],
];