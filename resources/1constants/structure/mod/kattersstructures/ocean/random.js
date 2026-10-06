const kattersstructures_ocean_random_fish = [
    {
        groupName: "raw fish",
        groupWeight: 20,
        min: 2, max: 3,
        items: [

            { reference: "lootjs:cod_and_cod_block", ratio: 25 },
            { reference: "lootjs:salmon_and_salmon_block", ratio: 25 },
            { reference: "lootjs:tropical_fish_and_tropical_fish_block", ratio: 25 },
            { reference: "lootjs:pufferfish_and_pufferfish_block", ratio: 25 },

            { id: "youkaisfeasts:raw_lamprey", ratio: 25 },
            { id: "youkaisfeasts:raw_lamprey_fillet", ratio: 25 },
            { id: "youkaisfeasts:roe", ratio: 5 },
            { id: "kaleidoscope_chinesefood:yellow_croaker", ratio: 25 },

            { id: "minecraft:ink_sac", ratio: 25 },
            { reference: "lootjs:calamari", ratio: 25 },

            { id: "minecraft:kelp", ratio: 25 },
      
            { id: "minecraft:pufferfish_bucket", ratio: 25 },
            { id: "minecraft:cod_bucket", ratio: 25 },
            { id: "minecraft:salmon_bucket", ratio: 25 },
            { id: "minecraft:tropical_fish_bucket", ratio: 25 },
            { id: "youkaishomecoming:lamprey_bucket", ratio: 25 },
            { id: "minecraft:bucket", ratio: 25 },
            { id: "minecraft:water_bucket", ratio: 25 },
        ]
    }
];


const kattersstructures_ocean_random_equipment = [

    {        
        groupName: "material",
        groupWeight: 50,
        min: 3, max: 4, 
        items: [
            { id: "minecraft:string", ratio: 10 },
            { id: "minecraft:stick", ratio: 10 },

        ]
    },

    {        
        groupName: "fishing_rod",
        groupWeight: 5,
        min: 1, max: 1,
        items: [
            { id: "minecraft:fishing_rod", ratio: 10, enchantLevels: [1, 30], damage: [0.8, 0.9]},
            { id: "minecraft:fishing_rod", ratio: 10 },

        ]
    },

    {        
        groupName: "ship",
        groupWeight: 20,
        min: 1, max: 1, 
        items: [

            // --- 普通船系列 ---
            { id: "minecraft:oak_boat", ratio: 10 },
            { id: "minecraft:jungle_boat", ratio: 10 },
            { id: "minecraft:bamboo_raft", ratio: 10 }, 

            // // --- 运输船系列 (带箱子的船) ---
            // { id: "minecraft:oak_chest_boat", ratio: 10 },
            // { id: "minecraft:jungle_chest_boat", ratio: 10 },
            // { id: "minecraft:bamboo_chest_raft", ratio: 10 }, 
        ]
    },

    {        
        groupName: "bucket",
        groupWeight: 25,
        min: 1, max: 1, 
        items: [
            { id: "minecraft:bucket", ratio: 10 },
        ]
    },
]

const kattersstructures_ocean_random_fish_content = [
    [village_fisher_fish, 2, 3],
    [kattersstructures_ocean_random_equipment, 1, 2],



];

const loot_kattersstructures_ocean_random = [
    [kattersstructures_ocean_random_fish_content, 1],
];