const trial_chambers_attack = [
    {
        groupName: "common_weapons",
        groupWeight: 40,
        min: 1, max: 1, enchantLevels: [5, 10], damage: [0.2, 0.5],
        items: [
            { id: "minecraft:iron_sword", ratio: 10 },
        ]
    },

    {
        groupName: "ranged_weapons",
        groupWeight: 20,
        min: 1, max: 1, enchantLevels: [5, 10],
        items: [
            { id: "minecraft:bow", ratio: 10 },
            { id: "minecraft:crossbow", ratio: 10 },
            { id: "minecraft:arrow", ratio: 40, min: 6, max: 8 },
        ]
    },
    {
        groupName: "tactical_items",
        groupWeight: 20,
        min: 1, max: 1,
        items: [
            { id: "minecraft:flint_and_steel", ratio: 10 },
            { id: "minecraft:lava_bucket", ratio: 10 },
            { id: "minecraft:tnt", ratio: 10, min: 6, max: 8 },
        ]
    },

    {
        groupName: "rare_weapons", 
        groupWeight: 5,
        min: 1, max: 1, enchantLevels: [10, 20], damage: [0.2, 0.5],
        items: [
            { id: "minecraft:diamond_sword", ratio: 10 },
        ]
    },
]

const trial_chambers_defense = [
    {
        groupName: "common_armors",
        groupWeight: 40,
        min: 1, max: 1, enchantLevels: [5, 10], damage: [0.2, 0.5],
        items: [

            { id: "immersive_armors:warrior_helmet", ratio: 2 },
            { id: "immersive_armors:warrior_chestplate", ratio: 2 },
            { id: "immersive_armors:warrior_leggings", ratio: 2 },
            { id: "immersive_armors:warrior_boots", ratio: 2 },

            { id: "minecraft:iron_helmet", ratio: 2 },
            { id: "minecraft:iron_chestplate", ratio: 2 },
            { id: "minecraft:iron_leggings", ratio: 2 },
            { id: "minecraft:iron_boots", ratio: 2 },

            { id: "minecraft:chainmail_helmet", ratio: 2 },
            { id: "minecraft:chainmail_chestplate", ratio: 2 },
            { id: "minecraft:chainmail_leggings", ratio: 2 },
            { id: "minecraft:chainmail_boots", ratio: 2 },

            { id: "immersive_armors:heavy_helmet", ratio: 2 },
            { id: "immersive_armors:heavy_chestplate", ratio: 2 },
            { id: "immersive_armors:heavy_leggings", ratio: 2 },
            { id: "immersive_armors:heavy_boots", ratio: 2 },


        ]
    },

    {
        groupName: "rare_armors",
        groupWeight: 5,
        min: 1, max: 1, enchantLevels: [10, 20], damage: [0.2, 0.5],
        items: [
            { id: "immersive_armors:divine_helmet", ratio: 1.5 },
            { id: "immersive_armors:divine_chestplate", ratio: 1.5 },
            { id: "immersive_armors:divine_leggings", ratio: 1.5 },
            { id: "immersive_armors:divine_boots", ratio: 1.5 },

            { id: "minecraft:diamond_helmet", ratio: 1.5 },
            { id: "minecraft:diamond_chestplate", ratio: 1.5 },
            { id: "minecraft:diamond_leggings", ratio: 1.5 },
            { id: "minecraft:diamond_boots", ratio: 1.5 }
        ]
    },

    {
        groupName: "shields",
        groupWeight: 20,
        min: 1, max: 1, enchantLevels: [5, 10], damage: [0.2, 0.5],
        items: [
            { id: "minecraft:shield", ratio: 15 }, 
        ]
    },

    {
        groupName: "tactical_defense",
        groupWeight: 30,
        min: 1, max: 1,
        items: [            
            { id: "minecraft:cobweb", ratio: 10, min: 4, max: 6 },
            { id: "minecraft:water_bucket", ratio: 5 },
        ]
    },

];


const trial_chambers_survival = [
    {
        groupName: "preserved_food",
        groupWeight: 70,
        min: 2, max: 3, 
        items: [
            // --- 金属/高阶耐久食物 ---
            { id: "minecraft:golden_carrot", ratio: 20 },          // 金胡萝卜（极高饱食度/饱和度）
            // { id: "minecraft:golden_apple", ratio: 5 },           // 金苹果
            // { id: "minecraft:enchanted_golden_apple", ratio: 1 },  // 附魔金苹果（稀有）

            // --- 罐装/密封食品 ---
            // { id: "minecraft:honey_bottle", ratio: 12 },           // 蜂蜜瓶（现实与游戏中均永不变质）

            // --- 干燥/腌制/干粮类食物 ---
            // { id: "minecraft:dried_kelp", ratio: 25 },             // 干海带（典型干燥食品）
            // { id: "minecraft:cookie", ratio: 20 },                 // 饼干（低水分干粮）
            { id: "minecraft:bread", ratio: 20 },                  // 面包（基础干粮）
        ]
    },
    {
        groupName: "potions",
        groupWeight: 30,
        min: 1, max: 2, 
        items: all_positive_potion_item
    },
];

const trial_chambers_mobility = [
    {
        groupName: "vertical_movement",
        groupWeight: 35,
        min: 4, max: 6, 
        items: [
            { id: "minecraft:ender_pearl", ratio: 15 },
            { id: "minecraft:scaffolding", ratio: 20 },
            { id: "minecraft:wind_charge", ratio: 25 },
        ]
    },
];

const trial_chambers_crafting = [
    {
        groupName: "ores",
        groupWeight: 30,
        min: 2, max: 3, 
        items: [
            { id: "minecraft:iron_ingot", ratio: 10 },
            // { id: "minecraft:gold_ingot", ratio: 5 },
        ]
    },
    {
        groupName: "logs",
        groupWeight: 30,
        min: 3, max: 4, 
        items: [
            { id: "minecraft:oak_log", ratio: 10 },
        ]
    },
];

// =================================================================
// 试炼密室 两两组合战利品池 (共 10 种 Combinations)
// =================================================================

// 1. 攻击 + 防御 (战斗专精)
const trial_chambers_attack_defense_content = [
    [trial_chambers_attack, 1, 2],
    [trial_chambers_defense, 1, 2]
];

// 2. 攻击 + 生存 (持续续航)
const trial_chambers_attack_survival_content = [
    [trial_chambers_attack, 1, 2],
    [trial_chambers_survival, 2, 3]
];

// 3. 攻击 + 机动 (突袭专精)
const trial_chambers_attack_mobility_content = [
    [trial_chambers_attack, 1, 2],
    [trial_chambers_mobility, 1, 2]
];

// 4. 攻击 + 合成 (军备补充)
const trial_chambers_attack_crafting_content = [
    [trial_chambers_attack, 1, 2],
    [trial_chambers_crafting, 2, 3]
];

// 5. 防御 + 生存 (阵地防守)
const trial_chambers_defense_survival_content = [
    [trial_chambers_defense, 1, 2],
    [trial_chambers_survival, 2, 3]
];

// 6. 防御 + 机动 (战术撤退)
const trial_chambers_defense_mobility_content = [
    [trial_chambers_defense, 1, 2],
    [trial_chambers_mobility, 1, 2]
];

// 7. 防御 + 合成 (后勤整备)
const trial_chambers_defense_crafting_content = [
    [trial_chambers_defense, 1, 2],
    [trial_chambers_crafting, 2, 3]
];

// 8. 生存 + 机动 (野外探索)
const trial_chambers_survival_mobility_content = [
    [trial_chambers_survival, 2, 3],
    [trial_chambers_mobility, 2, 3]
];

// 9. 生存 + 合成 (基地建设)
const trial_chambers_survival_crafting_content = [
    [trial_chambers_survival, 2, 3],
    [trial_chambers_crafting, 2, 3]
];

// 10. 机动 + 合成 (工程搭建)
const trial_chambers_mobility_crafting_content = [
    [trial_chambers_mobility, 2, 3],
    [trial_chambers_crafting, 2, 3]
];

// =================================================================
// 最终战利品总注册表 (10 组平等抽取)
// =================================================================
const loot_trial_chambers_supply_chest = [
    // [trial_chambers_attack_defense_content, 1],
    [trial_chambers_attack_survival_content, 1],
    [trial_chambers_attack_mobility_content, 1],
    [trial_chambers_attack_crafting_content, 1],
    [trial_chambers_defense_survival_content, 1],
    [trial_chambers_defense_mobility_content, 1],
    [trial_chambers_defense_crafting_content, 1],
    [trial_chambers_survival_mobility_content, 1],
    [trial_chambers_survival_crafting_content, 1],
    [trial_chambers_mobility_crafting_content, 1]
];