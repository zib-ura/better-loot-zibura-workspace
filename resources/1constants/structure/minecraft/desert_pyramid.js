const desert_pyramid_enchanted_book_item = [
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:unbreaking"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:mending"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:conductivity_curse"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:photosynthesis"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:protection"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:projectile_protection"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:fire_protection"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:blast_protection"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:light"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:outreach"] },
    // { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:feather_falling"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:traveler"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:sharpness"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:smite"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:bane_of_arthropods"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:knockback"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:looting"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:sweeping_edge"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["enchantencore:weaving_aspect"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["farmersdelight:backstabbing"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:heavy"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:blunt"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:crystal_curse"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:illagers_bane"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:power"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:punch"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:flame"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:infinity"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:piercing"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:multishot"] },    
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:efficiency"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:fortune"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:silk_touch"] },
]


const desert_pyramid_common = [

    {
        groupName: "pottery sherd",
        groupWeight: 10,
        min: 1, max: 1,
        items: [
            { id: "minecraft:archer_pottery_sherd", ratio: 10 },               // 弓箭手陶片
            { id: "minecraft:prize_pottery_sherd", ratio: 10 },                // 奖品陶片 (Prize)
            { id: "minecraft:skull_pottery_sherd", ratio: 10 },                // 骷髅陶片
            { id: "minecraft:miner_pottery_sherd", ratio: 10 },                // 矿工陶片
            { id: "minecraft:dune_armor_trim_smithing_template", ratio: 10 },  // 沙丘锻造模板
        ]
    },

    {
        groupName: "dye",
        groupWeight: 10,
        min: 1, max: 2,
        items: [
            { id: "minecraft:white_dye", ratio: 10 },        // 白色染料
            { id: "minecraft:orange_dye", ratio: 10 },       // 橙色染料
            // { id: "minecraft:magenta_dye", ratio: 10 },      // 品红色染料
            // { id: "minecraft:light_blue_dye", ratio: 10 },   // 淡蓝色染料
            { id: "minecraft:yellow_dye", ratio: 10 },       // 黄色染料
            { id: "minecraft:lime_dye", ratio: 10 },         // 黄绿色染料
            // { id: "minecraft:pink_dye", ratio: 10 },         // 粉红色染料
            // { id: "minecraft:gray_dye", ratio: 10 },         // 灰色染料
            // { id: "minecraft:light_gray_dye", ratio: 10 },   // 淡灰色染料
            { id: "minecraft:cyan_dye", ratio: 10 },         // 青色染料
            // { id: "minecraft:purple_dye", ratio: 10 },       // 紫色染料
            { id: "minecraft:blue_dye", ratio: 10 },         // 蓝色染料
            // { id: "minecraft:brown_dye", ratio: 10 },        // 棕色染料
            { id: "minecraft:green_dye", ratio: 10 },        // 绿色染料
            { id: "minecraft:red_dye", ratio: 10 },          // 红色染料
            { id: "minecraft:black_dye", ratio: 10 },        // 黑色染料
        ]
    },
    
    {
        groupName: "rubbish",
        groupWeight: 70,  
        min: 1, max: 2,
        items: [
            { id: "minecraft:gold_nugget", ratio: 10 },
            { id: "minecraft:paper", ratio: 10 },
            { id: "minecraft:bone", ratio: 10 },
            { id: "minecraft:rotten_flesh", ratio: 10 },
            { id: "minecraft:string", ratio: 10 },
            { id: "minecraft:gunpowder", ratio: 10 },
            // { id: "minecraft:tnt", ratio: 10 },
            { id: "minecraft:clay_ball", ratio: 10 },
            { id: "minecraft:stick", ratio: 10 },

        ]
    },

    {
        groupName: "seed",
        groupWeight: 10,  
        min: 1, max: 2,
        items: [
            { reference: "lootjs:wheat_seeds", ratio: 10 },
            { reference: "lootjs:barley_seeds", ratio: 10 },
            { reference: "lootjs:onion", ratio: 10 },
            { id: "kaleidoscope_tavern:grapevine", ratio: 10 },
            { reference: "lootjs:melon_seeds", ratio: 10 },
            { reference: "lootjs:chickpea", ratio: 10 },
            { reference: "lootjs:date_sapling", ratio: 10 },
            { reference: "lootjs:fig_sapling", ratio: 10 },
            { reference: "lootjs:flax_seeds", ratio: 10 },
            { reference: "lootjs:garlic_clove", ratio: 10 },
        ]
    },
]


const desert_pyramid_rare = [
    {
        groupName: "wealth",
        groupWeight: 35,  
        min: 2, max: 3,
        items: [
            { reference: "lootjs:gold_ingot_and_gold_ingot_block", ratio: 10 },
            { reference: "lootjs:gold_ingot", ratio: 40 },
            { reference: "lootjs:emerald_and_emerald_block", ratio: 10 },
            { reference: "lootjs:emerald", ratio: 40 },

        ]
    },
    
    {
        groupName: "potion",
        groupWeight: 20,
        min: 1, max: 1,
        items: [

            // --- 法老可能会喜欢的药水效果 ---
            // 烈日抗性（抗火）
            { id: "minecraft:potion", ratio: 4, potion: "minecraft:fire_resistance" }, 
            { id: "minecraft:potion", ratio: 1, potion: "minecraft:long_fire_resistance" },
            
            // 统治者的力量（力量）
            { id: "minecraft:potion", ratio: 4, potion: "minecraft:strength" },
            { id: "minecraft:potion", ratio: 1, potion: "minecraft:strong_strength" },
            
            // 迅捷如沙暴（迅捷）
            { id: "minecraft:potion", ratio: 4, potion: "minecraft:swiftness" },
            { id: "minecraft:potion", ratio: 1, potion: "minecraft:long_swiftness" },
            
            // 不朽与恩赐（治疗与再生）
            { id: "minecraft:potion", ratio: 4, potion: "minecraft:healing" },
            { id: "minecraft:potion", ratio: 1, potion: "minecraft:strong_healing" },
            
            // // 法老的诅咒（负面药水，赐予胆敢盗墓者的惩罚）
            // { id: "minecraft:potion", ratio: 2, potion: "minecraft:harming" },     // 瞬间伤害
            // { id: "minecraft:potion", ratio: 2, potion: "minecraft:poison" },      // 剧毒
            // { id: "minecraft:potion", ratio: 2, potion: "minecraft:weakness" },    // 虚弱
            // { id: "minecraft:potion", ratio: 1, potion: "minecraft:slowness" },    // 迟缓

            { id: "minecraft:experience_bottle", ratio: 10 },      

        ]
    },

    {
        groupName: "enchanted book",
        groupWeight: 12,
        min: 1, max: 1,
        items: desert_pyramid_enchanted_book_item
    },
    {
        groupName: "magic item",
        groupWeight: 6,
        min: 1, max: 1,
        items: [
            { id: "minecraft:ender_pearl", ratio: 10 },
            { id: "minecraft:totem_of_undying", ratio: 1 },
            { id: "minecraft:golden_apple", ratio: 10 },
            { id: "minecraft:enchanted_golden_apple", ratio: 1 },

            { id: "touhou_little_maid:fall_protect_bauble", ratio: 10 },
            { id: "touhou_little_maid:explosion_protect_bauble", ratio: 10 },

        ]
    },
    {
        groupName: "pharaoh equipment", // 法老生前装备
        groupWeight: 25,
        min: 1, max: 1,        
        
        enchantLevels: [1, 30], 
        damage: [0.4, 0.9],
        items: [
            // --- 法老仪仗盔甲 (Pharaoh's Royal Regalia) ---
            { id: "minecraft:golden_helmet", ratio: 12 },        // 法老金冠 (Nemys)
            { id: "minecraft:golden_chestplate", ratio: 10 },    // 仪式黄金胸甲
            { id: "minecraft:golden_leggings", ratio: 10 },      // 黄金腿甲
            { id: "minecraft:golden_boots", ratio: 10 },         // 镀金战靴

            // --- 统治者的兵戈与权柄 (Weapons & Scepters) ---
            { id: "minecraft:golden_sword", ratio: 12 },         // 黄金佩剑 (弯刀 Khopesh 象征)
            // { id: "minecraft:golden_axe", ratio: 8 },            // 仪式战斧
            // { id: "minecraft:golden_hoe", ratio: 6 },            // 连枷权杖象征 (牧羊杖与连枷)
            { id: "minecraft:bow", ratio: 8 },                   // 沙漠征伐战弓
            // { id: "minecraft:crossbow", ratio: 6 },              // 统治者重弩

            // --- 御用坐骑与战车配具 (Royal Steed Gear) ---
            { id: "minecraft:golden_horse_armor", ratio: 8 },    // 皇家战马金铠
            { id: "minecraft:saddle", ratio: 6 },                // 战马古鞍
        ]
    },
    {
        groupName: "Diamond Products",
        groupWeight: 2,
        min: 1, max: 1,        
        
        enchantLevels: [1, 30], 
        damage: [0.4, 0.9],
        items: [
            // 钻石制工具与武器
            { id: "minecraft:diamond", ratio: 10 },
            { id: "minecraft:diamond_sword", ratio: 5 },
            // { id: "minecraft:diamond_pickaxe", ratio: 10 },
            // { id: "minecraft:diamond_axe", ratio: 10 },
            // { id: "minecraft:diamond_shovel", ratio: 10 },
            // { id: "minecraft:diamond_hoe", ratio: 10 },
            // // 钻石制盔甲
            // { id: "minecraft:diamond_helmet", ratio: 10 },
            // { id: "minecraft:diamond_chestplate", ratio: 10 },
            // { id: "minecraft:diamond_leggings", ratio: 10 },
            // { id: "minecraft:diamond_boots", ratio: 10 },
            // { id: "minecraft:diamond_horse_armor", ratio: 10 }, // 钻石马铠
            // // 钻石原材料
            // // { id: "minecraft:diamond_block", ratio: 10 }        // 钻石块
        ]
    },


    // {
    //     groupName: "empty",
    //     groupWeight: 70,
    //     items: [
    //         { id: "empty" },
    //     ]
    // },
]

// =================================================================
// 事件注册区域
// =================================================================
const desert_pyramid_content = [
    [desert_pyramid_common, 3, 4],
    [desert_pyramid_rare, 2, 3],
];

const loot_desert_pyramid = [
    [desert_pyramid_content, 1],
];