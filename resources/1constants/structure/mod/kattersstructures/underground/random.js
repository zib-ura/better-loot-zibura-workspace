const kattersstructures_underground_random_materials = [
    {
        "groupName": "materials_wood",
        "groupWeight": 50,
        "min": 2, 
        "max": 3,
        "items": [
            { id: "minecraft:oak_log", ratio: 15 },
            { id: "minecraft:oak_planks", ratio: 20 },
            { id: "minecraft:oak_fence", ratio: 10 }
        ]
    },
    {
        "groupName": "materials_stone",
        "groupWeight": 50,
        "min": 2, 
        "max": 3,
        "items": [
            { id: "minecraft:stone", ratio: 15 },
            { id: "minecraft:cobblestone", ratio: 20 },
            { id: "minecraft:andesite", ratio: 10 },
            { id: "minecraft:diorite", ratio: 10 },
            { id: "minecraft:granite", ratio: 10 }
        ]
    }
];

const kattersstructures_underground_random_ores = [
    {
        groupName: "raw_ores",
        groupWeight: 25,
        min: 2, max: 3,
        items: [
            { id: "minecraft:coal", ratio: 20 },
            { id: "minecraft:raw_iron", ratio: 10 },
            { id: "minecraft:raw_copper", ratio: 10 },
            { id: "minecraft:lapis_lazuli", ratio: 10 },
            { id: "minecraft:raw_gold", ratio: 10 },
            { id: "minecraft:redstone", ratio: 10 },
            { id: "minecraft:diamond", ratio: 1 },
            { id: "minecraft:emerald", ratio: 10 }
        ]
    }
];

const kattersstructures_underground_random_lighting = [
    {
        groupName: "lighting",
        groupWeight: 15,
        min: 3, max: 4,
        items: [
            { id: "minecraft:torch", ratio: 10 },
            { id: "minecraft:lantern", ratio: 10 },
        ]
    }
];

const kattersstructures_underground_random_utility_and_tools = [
    {
        groupName: "utility_blocks",
        groupWeight: 20,
        min: 1, max: 1,
        items: [
            { id: "minecraft:crafting_table", ratio: 15 },
            { id: "minecraft:furnace", ratio: 15 },
            { id: "minecraft:chest", ratio: 10 },
            { id: "minecraft:anvil", ratio: 3 },
            { id: "minecraft:grindstone", ratio: 5 },
            { id: "minecraft:blast_furnace", ratio: 8 }, 
            { id: "minecraft:smoker", ratio: 5 }
        ]
    },
    {        
        groupName: "tools_common",
        groupWeight: 75,
        min: 1, max: 1, 
        //      
        // enchantLevels: [10, 20],   
        damage: [0.4, 0.5],        
        items: [
            { id: "minecraft:iron_pickaxe", ratio: 25 },
            { id: "minecraft:iron_shovel", ratio: 20 },
            { id: "minecraft:iron_axe", ratio: 15 },
            { id: "minecraft:iron_hoe", ratio: 8 },
        ]
    },
    {        
        groupName: "tools_rare",
        groupWeight: 5,           
        min: 1, max: 1, 
             
        enchantLevels: [1, 30],  
        damage: [0.9, 1.0],      
        items: [
            { id: "minecraft:diamond_pickaxe", ratio: 15 }, 
            { id: "minecraft:diamond_shovel", ratio: 10 },
            { id: "minecraft:diamond_axe", ratio: 8 },

        ]
    },
];

const kattersstructures_underground_resource_content = [
    [kattersstructures_underground_random_materials, 2, 3],
    [kattersstructures_underground_random_ores, 2, 3],
];

const kattersstructures_underground_gear_content = [
    [kattersstructures_underground_random_utility_and_tools, 2, 3],
    [kattersstructures_underground_random_lighting, 2, 3],
];


const loot_kattersstructures_underground_random = [
    [kattersstructures_underground_resource_content, 1],
    [kattersstructures_underground_gear_content, 1],
];