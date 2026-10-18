const village_fisher_aquatic_catch_items = [
    { id: "empty", ratio: 1 },


    { reference: "lootjs:cod_and_cod_block", ratio: 5 },
    { reference: "lootjs:cod", ratio: 20 },

    { reference: "lootjs:salmon_and_salmon_block", ratio: 5 },
    { reference: "lootjs:salmon", ratio: 20 },

    // { reference: "lootjs:tropical_fish_and_tropical_fish_block", ratio: 5 },
    { reference: "lootjs:tropical_fish", ratio: 1 },

    { reference: "lootjs:pufferfish_and_pufferfish_block", ratio: 1 },
    { reference: "lootjs:pufferfish", ratio: 4 },

    { reference: "lootjs:crab_and_crab_block", ratio: 5 },
    { reference: "lootjs:crab", ratio: 20 },

    { reference: "lootjs:lobster_and_lobster_block", ratio: 5 },
    { reference: "lootjs:lobster", ratio: 20 },

    { reference: "lootjs:shrimp_and_shrimp_block", ratio: 5 },
    { reference: "lootjs:shrimp", ratio: 20 },

    { reference: "lootjs:clam_and_clam_block", ratio: 5 },
    { reference: "lootjs:clam", ratio: 20 },

    { id: "youkaisfeasts:raw_lamprey", ratio: 25 },
    { id: "kaleidoscope_chinesefood:yellow_croaker", ratio: 25 },


    { id: "minecraft:pufferfish_bucket", ratio: 5 },
    { id: "minecraft:cod_bucket", ratio: 25 },
    { id: "minecraft:salmon_bucket", ratio: 25 },
    // { id: "minecraft:tropical_fish_bucket", ratio: 25 },
    { id: "youkaishomecoming:lamprey_bucket", ratio: 25 },
    { id: "crabbersdelight:crab_bucket", ratio: 25 },
];

const village_fisher_aquatic_catches = [
    {
        groupName: "aquatic_catches",
        groupWeight: 20,
        min: 1, max: 1,
        items: village_fisher_aquatic_catch_items
    },
];

const village_fisher_seafood_byproduct_items = [
    { id: "empty", ratio: 1 },


    { id: "minecraft:ink_sac", ratio: 10 },
    { id: "minecraft:bone_meal", ratio: 10 },
    { id: "crabbersdelight:pearl", ratio: 10 },
    { reference: "lootjs:fish_bone", ratio: 10 },

    { reference: "lootjs:crab_claw", ratio: 10 },
    { reference: "lootjs:raw_clam_meat", ratio: 10 },
    { reference: "lootjs:raw_squid_tentacles", ratio: 10 },
    { reference: "lootjs:crab_legs", ratio: 10 },
    { reference: "lootjs:pufferfish_slice", ratio: 10 },
    { reference: "lootjs:tropical_fish_slice", ratio: 10 },
    { reference: "lootjs:cod_slice", ratio: 10 },
    { reference: "lootjs:salmon_slice", ratio: 10 },
    { reference: "lootjs:roe", ratio: 10 },
    { reference: "lootjs:crab_roe", ratio: 10 },
    { reference: "lootjs:raw_lamprey_fillet", ratio: 10 },
    { reference: "lootjs:calamari", ratio: 10 },
];

const village_fisher_seafood_byproducts = [
    {
        groupName: "seafood_byproducts",
        groupWeight: 20,
        min: 2, max: 3,
        items: village_fisher_seafood_byproduct_items
    },
];

const village_fisher_preserved_seafood_items = [
    { id: "empty", ratio: 1 },



    { id: "vintagedelight:salted_cod", ratio: 10 },
    { id: "vintagedelight:salted_salmon", ratio: 10 },
    { id: "vintagedelight:surstromming", ratio: 10 },
];

const village_fisher_preserved_seafood = [
    {
        groupName: "preserved_seafood",
        groupWeight: 20,
        min: 1, max: 1,
        items: village_fisher_preserved_seafood_items
    },
];

const village_fisher_fishing_and_processing_tool_items = [
    { id: "empty", ratio: 1 },


    { id: "minecraft:fishing_rod", ratio: 10 },
    { id: "minecraft:bucket", ratio: 10 },
    { id: "minecraft:water_bucket", ratio: 10 },

    { id: "farmersdelight:iron_knife", ratio: 10 },
    { id: "farmersdelight:cutting_board", ratio: 10 },

    { id: "kaleidoscope_cookery:iron_kitchen_knife", ratio: 10 },
    { id: "kaleidoscope_cookery:chopping_board", ratio: 10 },
];

const village_fisher_fishing_and_processing_tools = [
    {
        groupName: "fishing_and_processing_tools",
        groupWeight: 20,
        min: 1, max: 1,  damage: [0.2, 0.8],
        items: village_fisher_fishing_and_processing_tool_items
    },
]

// =================================================================
// 事件注册区域
// =================================================================
const village_fisher_loot_categories = [
    [village_fisher_aquatic_catches, 2, 3],
    [village_fisher_fishing_and_processing_tools, 1, 2],
    [village_fisher_preserved_seafood, 0, 1],
    [village_fisher_seafood_byproducts, 1, 2]

];

const loot_village_fisher = [
    [village_fisher_loot_categories, 1],
];