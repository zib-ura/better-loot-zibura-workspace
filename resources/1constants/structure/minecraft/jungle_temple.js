const jungle_temple_treasure_equipment = [
    // =================================================================
    // GROUP: 稀有宝藏 & 附魔书
    // =================================================================
    {
        groupName: "Treasure",
        groupWeight: 20,
        min: 1, max: 2,
        items: [
            { id: "minecraft:diamond", ratio: 10 },
            { id: "minecraft:ender_pearl", ratio: 10 },
            { id: "minecraft:emerald", ratio: 15 },
            { id: "minecraft:golden_apple", ratio: 20 },
            { id: "minecraft:enchanted_golden_apple", ratio: 1 },
            { id: "minecraft:totem_of_undying", ratio: 1 },

            { id: "touhou_little_maid:projectile_protect_bauble", ratio: 10 },
        ]
    },

];

const jungle_temple_smithing_templates = [
    {
        groupName: "Smithing Templates",
        groupWeight: 25,  
        min: 1, max: 1,
        items: [
            { id: "minecraft:wild_armor_trim_smithing_template", ratio: 10 },
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

const jungle_temple_gold = [
    {
        groupName: "gold",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { reference: "lootjs:gold_ingot_and_gold_ingot_block", ratio: 10 },
            { reference: "lootjs:gold_ingot", ratio: 20 },        
        ]
    },
];

const jungle_temple_enchanted_book = [
    {
        groupName: "jungle_temple",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:unbreaking"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:mending"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:conductivity_curse"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:photosynthesis"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:protection"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:projectile_protection"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:fire_protection"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:thorns"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:light"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:outreach"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:antidote"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:feather_falling"] }, 
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
    }
];

// =================================================================
// 事件注册区域
// =================================================================
const jungle_temple_content = [
    [jungle_temple_treasure_equipment, 1, 2],
    [jungle_temple_smithing_templates, 2, 2],
    [vine, 3, 4],
    [jungle_temple_gold, 4, 6],
    [jungle_temple_enchanted_book, 1, 1],
];

const loot_jungle_temple = [
    [jungle_temple_content, 1],
];