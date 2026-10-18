// =================================================================
// 战利品表定义区域
// =================================================================

// Household raw-food structure follows village_plains_house.
// staple: bulk calories; common: everyday vegetables;
// varied: fruit and less-essential produce; special: economic crops.
const village_snowy_staple = [
    { id: "empty", ratio: 1 },

    { reference: "lootjs:wheat_seeds", ratio: 5 },
    { reference: "lootjs:wheat", ratio: 10 },
    { reference: "lootjs:wheat_and_wheat_block", ratio: 10 },

    { reference: "lootjs:potato", ratio: 15 },
    { reference: "lootjs:potato_and_potato_block", ratio: 10 },

    { reference: "lootjs:sweet_potato", ratio: 25 },
];

const village_snowy_common_produce = [
    { id: "empty", ratio: 1 },

    { reference: "lootjs:beetroot_seeds", ratio: 5 },
    { reference: "lootjs:beetroot", ratio: 10 },
    { reference: "lootjs:beetroot_and_beetroot_block", ratio: 10 },

    { reference: "lootjs:onion", ratio: 25 },

    { reference: "lootjs:cabbage_seeds", ratio: 5 },
    { reference: "lootjs:cabbage", ratio: 20 },

    { reference: "lootjs:lettuce_seeds", ratio: 5 },
    { reference: "lootjs:lettuce", ratio: 20 },

    { reference: "lootjs:turnip_seeds", ratio: 5 },
    { reference: "lootjs:turnip", ratio: 20 },

    { reference: "lootjs:garlic", ratio: 25 },

    // Mushrooms gathered from nearby taiga forests.
    { reference: "lootjs:brown_mushroom", ratio: 10 },
    { reference: "lootjs:red_mushroom", ratio: 5 },
];

const village_snowy_varied_produce = [
    { id: "empty", ratio: 1 },

    { reference: "lootjs:blueberry", ratio: 25 },

    { reference: "lootjs:persimmon_sapling", ratio: 5 },
    { reference: "lootjs:persimmon", ratio: 20 },

    { reference: "lootjs:parsley_seeds", ratio: 5 },
    { reference: "lootjs:parsley", ratio: 20 },

    // Less common produce arriving from southern agricultural regions.
    { reference: "lootjs:tomato", ratio: 25 },

    { reference: "lootjs:bell_pepper_seeds", ratio: 5 },
    { reference: "lootjs:bell_pepper_yellow", ratio: 7 },
    { reference: "lootjs:bell_pepper_red", ratio: 7 },
    { reference: "lootjs:bell_pepper_green", ratio: 6 },

    { reference: "lootjs:eggplant", ratio: 25 },
];

const village_snowy_special_produce = [
    { id: "empty", ratio: 1 },
];

const village_snowy_base_crops = [
    { groupName: "staple", groupWeight: 70, min: 2, max: 3, items: village_snowy_staple },
];

const village_snowy_other_crops = [
    { groupName: "common", groupWeight: 70, min: 2, max: 3, items: village_snowy_common_produce },
    { groupName: "varied", groupWeight: 30, min: 2, max: 3, items: village_snowy_varied_produce },
    // No identified specialty/economic crops in the original snowy pool.
];

// snowy crops
const snowy_seed_type = [
// common
    "wheat_seeds",
    "potato",
    "beetroot_seeds",

// special
    "onion",
    "cabbage_seeds",
    "lettuce_seeds",
    "blueberry",
    "persimmon_sapling",
    "sweet_potato",
    "turnip_seeds",
    "parsley_seeds",
];

const village_snowy_seed_bag = [
    {
        groupName: "bundle",
        groupWeight: 50,
        min: 1, max: 1,
        items: getSeedBagConfig("minecraft:bundle", snowy_seed_type, 2)
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
];

const village_snowy_essential_wealth_equipment = [


    {
        groupName: "Villager Daily Essentials",
        groupWeight: 30,
        min: 2, max: 3,
        items: [
            // --- Household Utilities ---
            { id: "minecraft:lantern", ratio: 10 },
            { id: "minecraft:glass_bottle", ratio: 10 },
            { id: "minecraft:bowl", ratio: 10 },
            { id: "supplementaries:sack", ratio: 10 },
            // { id: "farmersdelight:wooden_basket", ratio: 10 },
            // { id: "kaleidoscope_cookery:fruit_basket", ratio: 10 },
        ]
    },

    {
        groupName: "Village Wealth",
        groupWeight: 15,
        min: 3, max: 4,
        items: [
            { id: "minecraft:emerald", ratio: 20 },

        ]
    },

]

// Food pools are semantic rather than a strict value ladder.
// Preserved and independently prepared products override common/special tiers.
const village_snowy_preserved_food = [
    { id: "empty", ratio: 1 },

    { id: "fruitsdelight:dried_persimmon", ratio: 10 },
];


const village_snowy_simple_food = [
    { id: "empty", ratio: 1 },

    // ============================================================
    // 1. 主食 - 面包与根茎作物
    // ============================================================

    // 面包
    { id: "minecraft:bread", ratio: 10 },

    // 土豆、红薯
    { id: "minecraft:baked_potato", ratio: 10 },
    { id: "veggiesdelight:baked_sweet_potato", ratio: 10 },

    // ============================================================
    // 2. 蔬菜料理 - 甜菜根与蘑菇
    // ============================================================

    // 甜菜根沙拉
    { id: "kitchenkarrot:beetroot_salad", ratio: 10 },

    // 蘑菇炒蛋
    { id: "vanillacookbook:mushroom_scrambled_eggs", ratio: 10 },

    // ============================================================
    // 3. 汤类 - 蔬菜汤与菌菇汤
    // ============================================================

    // 甜菜根汤、罗宋汤
    { id: "minecraft:beetroot_soup", ratio: 10 },
    { id: "kaleidoscope_cookery:borscht", ratio: 10 },

    // 蘑菇汤、蘑菇炖菜
    { id: "youkaisfeasts:mushroom_soup", ratio: 10 },
    { id: "minecraft:mushroom_stew", ratio: 10 },

    // ============================================================
    // 4. 汤类 - 骨汤与肉汤
    // ============================================================

    // 基础骨汤、猪骨汤
    { id: "farmersdelight:bone_broth", ratio: 10 },
    { id: "kaleidoscope_cookery:pork_bone_soup", ratio: 10 },

    // 驴肉汤
    { id: "kaleidoscope_cookery:donkey_soup", ratio: 10 },

    // 牛肉丸汤
    { id: "kaleidoscope_cookery:beef_meatball_soup", ratio: 10 },

    // 羊肉萝卜汤
    { id: "kaleidoscope_cookery:lamb_and_radish_soup", ratio: 10 },

    // 野兔蘑菇汤
    { id: "kaleidoscope_cookery:wild_mushroom_rabbit_soup", ratio: 10 },

    // ============================================================
    // 5. 汤类 - 面食汤
    // ============================================================

    // 面疙瘩汤
    { id: "kaleidoscope_cookery:dough_drop_soup", ratio: 10 },

    // ============================================================
    // 6. 炖菜 - 牛肉、鸡肉与蔬菜
    // ============================================================

    // 土豆炖牛肉
    { id: "kaleidoscope_cookery:braised_beef_with_potatoes", ratio: 10 },

    // 小鸡炖蘑菇
    { id: "kaleidoscope_cookery:chicken_and_mushroom_stew", ratio: 10 },
];



const village_snowy_prepared_food = [
    { id: "empty", ratio: 1 },

    // ============================================================
    // 1. 面点 - 普通饺子
    // ============================================================

    // 通用饺子
    { id: "farmersdelight:dumplings", ratio: 10 },
    { id: "kaleidoscope_cookery:dumpling", ratio: 10 },

    // ============================================================
    // 2. 水饺 - 猪肉馅
    // ============================================================

    // 猪肉白菜馅
    { id: "dumplings_delight:pork_cabbage_boiled_dumpling", ratio: 2 },

    // 猪肉芹菜馅
    { id: "dumplings_delight:pork_celery_boiled_dumpling", ratio: 2 },

    // 猪肉土豆馅
    { id: "dumplings_delight:pork_potato_boiled_dumpling", ratio: 2 },

    // 猪肉茴香馅
    { id: "dumplings_delight:pork_fennel_boiled_dumpling", ratio: 2 },

    // ============================================================
    // 3. 水饺 - 牛肉、羊肉与禽肉馅
    // ============================================================

    // 牛肉番茄馅
    { id: "dumplings_delight:beef_tomato_boiled_dumpling", ratio: 2 },

    // 羊肉馅
    { id: "dumplings_delight:mutton_boiled_dumpling", ratio: 2 },

    // 鸡肉蘑菇馅
    { id: "dumplings_delight:chicken_mushroom_boiled_dumpling", ratio: 2 },

    // ============================================================
    // 4. 水饺 - 鱼肉与野味馅
    // ============================================================

    // 鳕鱼馅
    { id: "dumplings_delight:cod_boiled_dumpling", ratio: 2 },

    // 鲑鱼馅
    { id: "dumplings_delight:salmon_boiled_dumpling", ratio: 2 },

    // 兔肉馅
    { id: "dumplings_delight:rabbit_meat_boiled_dumpling", ratio: 2 },

    // ============================================================
    // 5. 水饺 - 蔬菜、鸡蛋与菌菇馅
    // ============================================================

    // 番茄鸡蛋馅
    { id: "dumplings_delight:tomato_egg_boiled_dumpling", ratio: 2 },

    // 茄子鸡蛋馅
    { id: "dumplings_delight:eggplant_egg_boiled_dumpling", ratio: 2 },

    // 蘑菇馅
    { id: "dumplings_delight:mushroom_boiled_dumpling", ratio: 2 },

    // 韭菜鸡蛋馅
    { id: "dumplings_delight:garlic_chive_egg_boiled_dumpling", ratio: 2 },

    // 蒲公英叶馅
    { id: "dumplings_delight:dandelion_leaf_boiled_dumpling", ratio: 2 },

    // ============================================================
    // 6. 馄饨 - 猪肉与蔬菜、菌菇馅
    // ============================================================

    // 猪肉胡萝卜馅
    { id: "dumplings_delight:pork_carrot_wonton", ratio: 2 },

    // 猪肉蘑菇馅
    { id: "dumplings_delight:pork_mushroom_wonton", ratio: 2 },

    // 猪肉白菜馅
    { id: "dumplings_delight:pork_cabbage_wonton", ratio: 2 },

    // ============================================================
    // 7. 油炸面点 - 春卷
    // ============================================================

    // 炸春卷
    { id: "kaleidoscope_cookery:fried_spring_roll", ratio: 10 },
];


const village_snowy_dish = [
    { id: "empty", ratio: 1 },

    // ============================================================
    // 1. 菌菇料理 - 特色蘑菇炖锅
    // ============================================================

    // 褐蘑菇炖锅
    { id: "kaleidoscope_cookery:brown_mushroom_pot_soup", ratio: 10 },

    // 红蘑菇炖锅
    { id: "kaleidoscope_cookery:red_mushroom_pot_soup", ratio: 10 },

    // ============================================================
    // 2. 特色汤菜 - 甜菜根与肉类
    // ============================================================

    // 罗宋汤
    { id: "youkaisfeasts:borscht", ratio: 10 },

    // ============================================================
    // 3. 野味炖菜 - 兔肉与驼鹿肉
    // ============================================================

    // 兔肉炖菜
    { id: "minecraft:rabbit_stew", ratio: 10 },

    // 驼鹿肉炖菜
    { id: "alexsmobsdelight:moose_stew", ratio: 10 },

    // ============================================================
    // 4. 野味主菜 - 驼鹿肉与鲑鱼
    // ============================================================

    // 驼鹿香肠配鲑鱼
    { id: "alexsmobsdelight:bowl_of_moose_sausage_with_salmon", ratio: 10 },

    // 蜂蜜釉烤驼鹿排骨
    { id: "alexsmobsdelight:honey_glazed_moose_ribs", ratio: 10 },

    // ============================================================
    // 5. 野味主菜 - 熊肉与鲑鱼
    // ============================================================

    // 蜂蜜釉熊肉配鲑鱼
    { id: "alexsmobsdelight:bowl_of_honey_glazed_bear_meat_with_salmon", ratio: 10 },
];


const village_snowy_food = [

    { groupName: "preserved_food", groupWeight: 15, min: 1, max: 2, items: village_snowy_preserved_food },
    { groupName: "simple_food", groupWeight: 45, min: 1, max: 2, items: village_snowy_simple_food },
    { groupName: "prepared_food", groupWeight: 25, min: 1, max: 2, items: village_snowy_prepared_food },
    { groupName: "dish", groupWeight: 15, min: 1, max: 2, items: village_snowy_dish },
];

const village_snowy_drinks = [
    {
        groupName: "vodka",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "minecraft:potion", ratio: 10 , potion: "minecraft:water" },

            // { id: "kitchenkarrot:vodka", ratio: 10 },
            // { id: "brewinandchewin:vodka", ratio: 10 },
            // { id: "kaleidoscope_tavern:vodka", ratio: 10 },
        ]
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty"},
        ]
    },
]

// =================================================================
// Snowy Plains household matrices (Taiga-compatible schema)
// =================================================================

const village_snowy_wood = [
    { id: "minecraft:spruce_log", ratio: 25 },
];
const village_snowy_charcoal_production = [
    { id: "minecraft:charcoal", ratio: 10 },
];

// Guaranteed basic household fuel; independent of market possessions.
const village_snowy_household_charcoal = [
    { groupName: "household_charcoal", groupWeight: 100, min: 2, max: 3,
        items: [{ id: "minecraft:charcoal", ratio: 10 }] },
];



const village_snowy_household_types = [
    "farm_household", "forest_household", "herder_household",
    "fisher_household", "village_household",
];
const village_snowy_production_household_types = [
    "farm_household", "forest_household",
];

// Existing Taiga profession pools are reused unchanged.
const village_snowy_herder_household_production = village_butcher_snowy_meat_groups;
const village_snowy_fisher_household_production = village_fisher_aquatic_catches;

const village_snowy_production_matrix = {
    matrixType: "groupToPool",
    rows: village_snowy_production_household_types,
    columns: [
        { groupName: "staple", min: 2, max: 3, items: village_snowy_staple },
        { groupName: "common", min: 2, max: 3, items: village_snowy_common_produce },
        { groupName: "varied", min: 2, max: 3, items: village_snowy_varied_produce },
        { groupName: "wood", min: 2, max: 3, items: village_snowy_wood },
        { groupName: "charcoal", min: 2, max: 3, items: village_snowy_charcoal_production },
    ],
    //                     staple common varied wood charcoal
    weights: [
        [                       55,    35,    10,   0,       0 ], // Farm
        [                        0,     0,     0,  45,      55 ], // Forest
    ],
    outputPattern: "village_snowy_{row}_production",
};

const village_snowy_food_trade_matrix = {
    matrixType: "groupToPool",
    rows: village_snowy_household_types,
    columns: [
        { groupName: "staple", min: 1, max: 2, items: village_snowy_staple },
        { groupName: "common", min: 1, max: 2, items: village_snowy_common_produce },
        { groupName: "varied", min: 1, max: 2, items: village_snowy_varied_produce },
        { groupName: "livestock", min: 1, max: 2, items: village_taiga_livestock },
        { groupName: "fish", min: 1, max: 2, items: village_taiga_fish },
    ],
    //                     staple common varied livestock fish
    weights: [
        [                       10,    5,    10,       45,  30 ], // Farm
        [                       40,   25,     5,       20,  10 ], // Forest
        [                       45,   30,     5,        5,  15 ], // Herder
        [                       45,   25,     5,       20,   5 ], // Fisher
        [                       35,   15,    10,       25,  15 ], // Village
    ],
    outputPattern: "village_snowy_{row}_food_trade",
};

const village_snowy_food_matrix = {
    matrixType: "groupToPool",
    rows: village_snowy_household_types,
    columns: [
        { groupName: "simple_food", min: 1, max: 2, items: village_snowy_simple_food },
        { groupName: "prepared_food", min: 1, max: 2, items: village_snowy_prepared_food },
        { groupName: "preserved_food", min: 1, max: 2, items: village_snowy_preserved_food },
        { groupName: "dish", min: 1, max: 2, items: village_snowy_dish },
    ],
    //                     simple prepared preserved dish
    weights: [
        [                       50,      20,       20,  10 ], // Farm
        [                       35,      15,       40,  10 ], // Forest
        [                       45,      15,       30,  10 ], // Herder
        [                       40,      15,       35,  10 ], // Fisher
        [                       30,      35,       15,  20 ], // Village
    ],
    outputPattern: "village_snowy_{row}_food",
};

// Retain Taiga's seven actual market categories, including the empty outcome.
const village_snowy_market_possessions_matrix = {
    matrixType: "groupToPool",
    rows: village_snowy_household_types,
    columns: [
        { groupName: "household_goods", min: 1, max: 1, items: village_household_trade_goods },
        { groupName: "productive_goods", min: 1, max: 1, damage: [0.5, 0.9], items: village_productive_trade_goods },
        { groupName: "textile_leather_goods", min: 1, max: 1, items: village_textile_leather_trade_goods },
        { groupName: "knowledge_goods", min: 1, max: 2, items: village_knowledge_trade_goods },
        { groupName: "security_goods", min: 1, max: 1, damage: [0.5, 0.9], items: village_security_trade_goods },
        { groupName: "liquid_wealth", min: 1, max: 3, items: [{ id: "minecraft:emerald", ratio: 10 }] },
        { groupName: "empty", items: [{ id: "empty" }] },
    ],
    //                     household productive textile knowledge security wealth empty
    weights: [
        [                       20,        35,     15,        5,       5,     5,   15 ], // Farm
        [                       20,        35,     10,        5,      10,     5,   15 ], // Forest
        [                       20,        30,     20,        5,      10,     5,   10 ], // Herder
        [                       25,        30,     15,        5,      10,     5,   10 ], // Fisher
        [                       30,        10,     15,       20,       5,    15,    5 ], // Village
    ],
    outputPattern: "village_snowy_{row}_market_possessions",
};

const village_snowy_content_matrix = {
    matrixType: "poolToContent",
    rows: village_snowy_household_types,
    prefix: "village_snowy",
    outputPattern: "village_snowy_{row}_content",
    columns: [
        "{prefix}_{row}_production",
        "{prefix}_{row}_food_trade",
        "{prefix}_{row}_food",
        "village_snowy_seed_bag",
        "{prefix}_{row}_market_possessions",
        "village_snowy_drinks",
        "village_recipe_item",
        "village_snowy_household_charcoal",
    ],
    //               production trade  food  seed  market drinks recipe charcoal
    rolls: [
        [              [2,3], [1,2], [0,1], [1,1], [1,1], [0,1],  null, [1,1], ], // Farm
        [              [2,3], [2,3], [0,1],  null, [0,1], [0,1],  null, [1,1], ], // Forest
        [              [1,2], [2,3], [0,1],  null, [1,1], [0,1],  null, [1,1], ], // Herder
        [              [1,2], [2,3], [0,1],  null, [0,1], [0,1],  null, [1,1], ], // Fisher
        [               null, [3,4], [1,2],  null, [1,2], [1,1], [0,1], [1,1], ], // Village
    ],
};

const village_snowy_household_weight_matrix = {
    matrixType: "contentToTable",
    rows: village_snowy_household_types,
    weights: [6, 5, 5, 2, 2],
    prefix: "village_snowy",
    contentPattern: "{prefix}_{row}_content",
    extra: [],
    output: "loot_village_snowy_house",
};
