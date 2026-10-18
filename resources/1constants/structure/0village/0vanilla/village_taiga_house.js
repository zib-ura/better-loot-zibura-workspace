
const village_taiga_staple = [
    { id: "empty", ratio: 1 },

    // Wheat
    { reference: "lootjs:wheat_seeds", ratio: 5 },
    { reference: "lootjs:wheat", ratio: 10 },
    { reference: "lootjs:wheat_and_wheat_block", ratio: 10 },

    // Potato
    { reference: "lootjs:potato", ratio: 15 },
    { reference: "lootjs:potato_and_potato_block", ratio: 10 },

    // Barley
    { reference: "lootjs:barley_seeds", ratio: 5 },
    { reference: "lootjs:barley", ratio: 20 },

    // Sweet potato
    { reference: "lootjs:sweet_potato", ratio: 25 },
];

const village_taiga_crops = [
    { id: "empty", ratio: 1 },

    // Pumpkin
    { reference: "lootjs:pumpkin_seeds", ratio: 5 },
    { reference: "lootjs:pumpkin_slice", ratio: 10 },
    { reference: "lootjs:pumpkin_slice_and_pumpkin_slice_block", ratio: 10 },

    // Beetroot
    { reference: "lootjs:beetroot_seeds", ratio: 5 },
    { reference: "lootjs:beetroot", ratio: 10 },
    { reference: "lootjs:beetroot_and_beetroot_block", ratio: 10 },

    // Carrot
    { reference: "lootjs:carrot", ratio: 25 },

    // Tomato
    { reference: "lootjs:tomato_seeds", ratio: 5 },
    { reference: "lootjs:tomato", ratio: 20 },

    // Onion
    { reference: "lootjs:onion", ratio: 25 },

    // Cabbage
    { reference: "lootjs:cabbage_seeds", ratio: 5 },
    { reference: "lootjs:cabbage", ratio: 20 },

    // Lettuce
    { reference: "lootjs:lettuce_seeds", ratio: 5 },
    { reference: "lootjs:lettuce", ratio: 20 },

    // Cauliflower
    { reference: "lootjs:cauliflower_seeds", ratio: 5 },
    { reference: "lootjs:cauliflower", ratio: 20 },

    // Turnip
    { reference: "lootjs:turnip_seeds", ratio: 5 },
    { reference: "lootjs:turnip", ratio: 20 },

    // Parsley
    { reference: "lootjs:parsley_seeds", ratio: 5 },
    { reference: "lootjs:parsley", ratio: 20 },

    // Hops — economic crop
    { reference: "lootjs:hops", ratio: 25 },
];


const village_taiga_livestock = [
    { id: "empty", ratio: 1 },

    // Eggs and dairy
    { reference: "lootjs:egg", ratio: 25 },
    { id: "farmersdelight:milk_bottle", ratio: 25 },

    // Pork
    { reference: "lootjs:bacon", ratio: 20 },
    { reference: "lootjs:porkchop", ratio: 5 },

    // Chicken
    { reference: "lootjs:chicken_cuts", ratio: 20 },
    { reference: "lootjs:chicken", ratio: 5 },

    // Beef
    { reference: "lootjs:minced_beef", ratio: 20 },
    { reference: "lootjs:beef", ratio: 5 },

    // Mutton
    { reference: "lootjs:raw_lamb_chops", ratio: 20 },
    { reference: "lootjs:mutton", ratio: 5 },
];

const village_taiga_fish = [
    { id: "empty", ratio: 1 },

    // Cod
    { reference: "lootjs:cod_slice", ratio: 20 },
    { reference: "lootjs:cod", ratio: 5 },

    // Salmon
    { reference: "lootjs:salmon_slice", ratio: 20 },
    { reference: "lootjs:salmon", ratio: 5 },
];

const village_taiga_forage = [
    { id: "empty", ratio: 1 },

    // Wild berries
    { reference: "lootjs:sweet_berry_pips", ratio: 5 },
    { reference: "lootjs:sweet_berries", ratio: 15 },
    { reference: "lootjs:berry_and_berry_block", ratio: 10 },

    { reference: "lootjs:blueberry", ratio: 25 },

    { reference: "lootjs:hawberry_sapling", ratio: 5 },
    { reference: "lootjs:hawberry", ratio: 20 },

    // { reference: "lootjs:persimmon_sapling", ratio: 5 },
    // { reference: "lootjs:persimmon", ratio: 20 },

    // Forest mushrooms
    { reference: "lootjs:red_mushroom", ratio: 25 },
    { reference: "lootjs:brown_mushroom", ratio: 25 },

    { reference: "lootjs:honey", ratio: 5 },
];

const village_taiga_game = [
    { id: "empty", ratio: 1 },


    // Moose and bear raw meat:
    // Add exact item IDs after registry verification.
];

const village_taiga_wood = [
    { id: "empty", ratio: 1 },

    { id:"minecraft:spruce_log", ratio: 25 },
];

// taiga crops
const taiga_seed_type = [
// base_crops
    "wheat_seeds",
    "pumpkin_seeds",
    "potato",
    "beetroot_seeds",

// taiga
    "sweet_berry_pips",
    "hops",
    "red_mushroom",
    "brown_mushroom",

// other
    "carrot",
    "tomato_seeds",
    "onion",
    "cabbage_seeds",
    "lettuce_seeds",
    "blueberry",
    "hawberry_sapling",
    "persimmon_sapling",
    "barley_seeds",
    "cauliflower_seeds",
    "sweet_potato",
    "turnip_seeds",
    "parsley_seeds",
];


const village_taiga_seed_bag = [
    {
        groupName: "bundle",
        groupWeight: 50, 
        min: 1, max: 1,
        items: getSeedBagConfig("minecraft:bundle", taiga_seed_type, 2)
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
];


// =================================================================
// Food classification for village social/economic semantics
// common -> simple_food by default; special -> dish by default.
// Clearly preserved or independently prepared foods override that baseline.
// Former bakery products are integrated into household food pools.
// =================================================================


const village_taiga_preserved_food = [
    { id: "empty", ratio: 1 },

    // ============================================================
    // 1. 果酱 - 浆果与其他水果
    // ============================================================

    // 甜浆果果酱
    { reference: "lootjs:sweetberry_jam", ratio: 10 },

    // 蓝莓果酱
    { id: "fruitsdelight:blueberry_jam", ratio: 10 },

    // 山楂果酱
    { id: "fruitsdelight:hawberry_jam", ratio: 10 },

    // 柿子果酱
    { id: "fruitsdelight:persimmon_jam", ratio: 10 },

    // ============================================================
    // 2. 盐渍鱼类 - 鳕鱼与鲑鱼
    // ============================================================

    // 盐渍鳕鱼
    { id: "vintagedelight:salted_cod", ratio: 10 },

    // 盐渍鲑鱼
    { id: "vintagedelight:salted_salmon", ratio: 10 },

    // ============================================================
    // 3. 发酵鱼类 - 传统保存食品
    // ============================================================

    // 瑞典发酵鲱鱼
    { id: "vintagedelight:surstromming", ratio: 10 },
];



const village_taiga_simple_food = [
    { id: "empty", ratio: 1 },

    // ============================================================
    // 1. 主食 - 面包
    // ============================================================

    // 普通面包
    { id: "minecraft:bread", ratio: 10 },

    // ============================================================
    // 2. 菌菇料理 - 煎炒与炖煮
    // ============================================================

    // 炒蘑菇
    { id: "rusticdelight:fried_mushrooms", ratio: 10 },

    // 蘑菇炒蛋
    { id: "vanillacookbook:mushroom_scrambled_eggs", ratio: 10 },

    // 蘑菇炖菜
    { id: "minecraft:mushroom_stew", ratio: 10 },

    // ============================================================
    // 3. 汤类 - 菌菇汤与骨汤
    // ============================================================

    // 蘑菇汤
    { id: "youkaisfeasts:mushroom_soup", ratio: 10 },

    // 骨汤
    { id: "farmersdelight:bone_broth", ratio: 10 },

    // ============================================================
    // 4. 肉类熟食 - 牛肉、猪肉、羊肉与鸡肉
    // ============================================================

    // 熟牛肉
    { id: "minecraft:cooked_beef", ratio: 10 },

    // 熟猪肉
    { id: "minecraft:cooked_porkchop", ratio: 10 },

    // 熟羊肉
    { id: "minecraft:cooked_mutton", ratio: 10 },

    // 熟鸡肉
    { id: "minecraft:cooked_chicken", ratio: 10 },

    // ============================================================
    // 5. 森林野味 - 驼鹿与浆果肉类
    // ============================================================

    // 驼鹿炖菜
    { id: "alexsmobsdelight:moose_stew", ratio: 10 },

    // 甜浆果肉丸
    { id: "berry_good:sweet_berry_meatballs", ratio: 10 },
];



const village_taiga_prepared_food = [
    { id: "empty", ratio: 1 },

    // ============================================================
    // 1. 浆果蛋糕 - 整蛋糕与切片（原始配置中禁用）
    // ============================================================

    // 甜浆果蛋糕
    // { id: "bakery:sweetberry_cake", ratio: 10 },

    // 浆果蛋糕
    // { id: "vanillacookbook:berry_cake", ratio: 10 },

    // 浆果蛋糕切片
    // { id: "vanillacookbook:berry_cake_slice", ratio: 10 },

    // 甜浆果蛋糕切片
    // { id: "bakery:sweetberry_cake_slice", ratio: 10 },

    // ============================================================
    // 2. 烘焙食品 - 浆果挞与水果派
    // ============================================================

    // 甜浆果挞
    { id: "kitchenkarrot:sweet_berry_tart", ratio: 10 },

    // 浆果派
    { id: "vanillacookbook:berry_pie", ratio: 10 },

    // ============================================================
    // 3. 肉类烘焙食品 - 野味肉派
    // ============================================================

    // 驼鹿肉派切片
    { id: "alexsmobsdelight:slice_of_moose_pie", ratio: 10 },

    // ============================================================
    // 4. 饼干 - 浆果与水果
    // ============================================================

    // 甜浆果饼干
    { id: "farmersdelight:sweet_berry_cookie", ratio: 10 },

    // 浆果饼干
    { id: "vanillacookbook:berry_cookie", ratio: 10 },

    // 柿子饼干（原始配置中禁用）
    // { id: "fruitsdelight:persimmon_cookie", ratio: 10 },

    // ============================================================
    // 5. 煎饼 - 浆果
    // ============================================================

    // 浆果煎饼
    { id: "vanillacookbook:berry_pancake", ratio: 10 },
];



const village_taiga_dish = [
    { id: "empty", ratio: 1 },

    // ============================================================
    // 1. 鱼类主菜 - 鲑鱼
    // ============================================================

    // 烤鲑鱼
    { id: "farmersdelight:grilled_salmon", ratio: 10 },

    // ============================================================
    // 2. 菌菇料理 - 特色蘑菇炖锅
    // ============================================================

    // 褐蘑菇炖锅
    { id: "kaleidoscope_cookery:brown_mushroom_pot_soup", ratio: 10 },

    // 红蘑菇炖锅
    { id: "kaleidoscope_cookery:red_mushroom_pot_soup", ratio: 10 },

    // ============================================================
    // 3. 森林野味 - 驼鹿肉派与香肠
    // ============================================================

    // 驼鹿肉派
    { id: "alexsmobsdelight:moose_pie", ratio: 10 },

    // 驼鹿香肠配鲑鱼
    { id: "alexsmobsdelight:bowl_of_moose_sausage_with_salmon", ratio: 10 },

    // ============================================================
    // 4. 森林野味 - 蜂蜜釉烤肉
    // ============================================================

    // 蜂蜜釉驼鹿排骨
    { id: "alexsmobsdelight:honey_glazed_moose_ribs", ratio: 10 },

    // 蜂蜜釉熊肉配鲑鱼
    { id: "alexsmobsdelight:bowl_of_honey_glazed_bear_meat_with_salmon", ratio: 10 },
];

const village_taiga_food = [

    { groupName: "preserved_food", groupWeight: 15, min: 1, max: 2, items: village_taiga_preserved_food },
    { groupName: "simple_food", groupWeight: 45, min: 1, max: 2, items: village_taiga_simple_food },
    { groupName: "prepared_food", groupWeight: 25, min: 1, max: 2, items: village_taiga_prepared_food },
    { groupName: "dish", groupWeight: 15, min: 1, max: 2, items: village_taiga_dish },
];

const village_taiga_drinks = [
    {
        groupName: "berry",
        groupWeight: 50,
        min: 1, max: 2,
        items: [
            { id: "minecraft:potion", ratio: 10 , potion: "minecraft:water" }, 

            { id: "fruitsdelight:hawberry_tea", ratio: 10 },
            { id: "kitchenkarrot:mead", ratio: 10 },
            { id: "youkaisfeasts:mead", ratio: 10 },
        ]
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [{ id: "empty"},]
    },
]



const village_taiga_bakery_products = [
    {
        groupName: "taiga_cakes",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "bakery:sweetberry_cake", ratio: 10 },
            { id: "vanillacookbook:berry_cake", ratio: 10 },
        ]
    },

    {
        groupName: "taiga_tarts_pies",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "farmersdelight:sweet_berry_cheesecake", ratio: 10 },
            { id: "kitchenkarrot:sweet_berry_tart", ratio: 10 },
            { id: "vanillacookbook:berry_pie", ratio: 10 },

            { id: "alexsmobsdelight:moose_pie", ratio: 10 },

        ]
    },

    {
        groupName: "taiga_dessert_puddings_cold",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "fruitsdelight:blueberry_custard", ratio: 10 },
            { id: "vanillacookbook:berry_ice_cream", ratio: 10 },
        ]
    },

    {
        groupName: "taiga_dessert_teatime_treats_slices",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "farmersdelight:sweet_berry_cheesecake_slice", ratio: 10 },
            { id: "farmersdelight:sweet_berry_cookie", ratio: 10 },
            { id: "vanillacookbook:berry_cookie", ratio: 10 },
            { id: "vanillacookbook:berry_pancake", ratio: 10 },
            { id: "vanillacookbook:berry_brownie", ratio: 10 },
            { id: "vanillacookbook:berry_candy", ratio: 10 },
            { id: "vanillacookbook:berry_cake_slice", ratio: 10 },
            { id: "bakery:sweetberry_cake_slice", ratio: 10 },
            { id: "bakery:sweetberry_glazed_cookie", ratio: 10 },
            { id: "bakery:sweetberry_cupcake", ratio: 10 },

            { id: "fruitsdelight:dried_persimmon", ratio: 10 },
            { id: "fruitsdelight:persimmon_cookie", ratio: 10 },
            { id: "fruitsdelight:blueberry_muffin", ratio: 10 },
            { id: "fruitsdelight:hawberry_stick", ratio: 10 },
            { id: "fruitsdelight:hawberry_roll", ratio: 10 },
            { id: "fruitsdelight:hawberry_sheet", ratio: 10 },
            { id: "rusticdelight:fruit_beignet", ratio: 10 },

            { id: "alexsmobsdelight:slice_of_moose_pie", ratio: 10 },

        ]
    },

    {
        groupName: "taiga_bread",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "minecraft:bread", ratio: 10 },
        ]
    },

]

const village_taiga_bakery_baking_material = [
    {
        groupName: "baking_material",
        groupWeight: 15,
        min: 2, max: 3,
        items: basic_baking_material
    },

    {
        groupName: "taiga_jam",
        groupWeight: 15,
        min: 1, max: 1,
        items: [

            { reference: "lootjs:sweetberry_jam", ratio: 10 },
            { id: "fruitsdelight:blueberry_jam", ratio: 10 },
            { id: "fruitsdelight:hawberry_jam", ratio: 10 },
            { id: "fruitsdelight:persimmon_jam", ratio: 10 },

        ]
    },

]



// =================================================================
// 事件注册区域
// =================================================================

const village_taiga_household_types = [
    "farm_household",
    "forest_household",
    "hunter_household",
    "fisher_household",
    "village_household",
];

const village_taiga_production_household_types = [
    "farm_household",
    "forest_household",
];
// 仅保留主要生产。
// Hunter / Fisher 不在这里重新设计生产物品。

const village_taiga_hunter_household_production =
    village_butcher_taiga_meat_groups;

const village_taiga_fisher_household_production =
    village_fisher_aquatic_catches;

const village_taiga_production_matrix = {
    matrixType: "groupToPool",
    rows: village_taiga_production_household_types,
    columns: [
        { groupName: "staple",    min: 2, max: 3, items: village_taiga_staple },
        { groupName: "crops",     min: 2, max: 3, items: village_taiga_crops },
        { groupName: "livestock", min: 2, max: 3, items: village_taiga_livestock },
        { groupName: "forage",    min: 2, max: 3, items: village_taiga_forage },
        { groupName: "wood",      min: 2, max: 3, items: village_taiga_wood },
    ],

    //                       staple crops livestock forage wood
    weights: [
        [                       45,   35,       20,     0,   0 ], // Farm
        [                        0,    0,        0,    35,  65 ], // Forest
    ],

    outputPattern: "village_taiga_{row}_production",
};

const village_taiga_food_trade_matrix = {
    matrixType: "groupToPool",
    rows: village_taiga_household_types,
    columns: [
        { groupName: "staple",    min: 1, max: 2, items: village_taiga_staple },
        { groupName: "crops",     min: 1, max: 2, items: village_taiga_crops },
        { groupName: "livestock", min: 1, max: 2, items: village_taiga_livestock },
        { groupName: "fish",      min: 1, max: 2, items: village_taiga_fish },
        { groupName: "forage",    min: 1, max: 2, items: village_taiga_forage },
    ],

    //                       staple crops livestock fish forage
    weights: [
        [                        5,    5,        5,  45,    40 ], // Farm
        [                       35,   25,       15,  25,     0 ], // Forest
        [                       35,   25,       15,  25,     0 ], // Hunter
        [                       35,   25,       20,   0,    20 ], // Fisher
        [                       30,   20,       15,  20,    15 ], // Village
    ],

    outputPattern: "village_taiga_{row}_food_trade",
};

const village_taiga_food_matrix = {
    matrixType: "groupToPool",
    rows: village_taiga_household_types,
    columns: [
        { groupName: "simple_food",    min: 1, max: 2, items: village_taiga_simple_food },
        { groupName: "prepared_food",  min: 1, max: 2, items: village_taiga_prepared_food },
        { groupName: "preserved_food", min: 1, max: 2, items: village_taiga_preserved_food },
        { groupName: "dish",           min: 1, max: 2, items: village_taiga_dish },
    ],

    //                       simple prepared preserved dish
    weights: [
        [                       45,      20,       25,  10 ], // Farm
        [                       35,      15,       40,  10 ], // Forest
        [                       40,      10,       40,  10 ], // Hunter
        [                       40,      10,       40,  10 ], // Fisher
        [                       30,      35,       15,  20 ], // Village
    ],

    outputPattern: "village_taiga_{row}_food",
};

const village_taiga_market_possessions_matrix = {
    matrixType: "groupToPool",
    rows: village_taiga_household_types,
    columns: [
        { groupName: "household_goods",        min: 1, max: 1, items: village_household_trade_goods },
        { groupName: "productive_goods",       min: 1, max: 1, damage: [0.5, 0.9], items: village_productive_trade_goods },
        { groupName: "textile_leather_goods",  min: 1, max: 1, items: village_textile_leather_trade_goods },
        { groupName: "knowledge_goods",        min: 1, max: 2, items: village_knowledge_trade_goods },
        { groupName: "security_goods",         min: 1, max: 1, damage: [0.5, 0.9], items: village_security_trade_goods },
        { groupName: "liquid_wealth",          min: 1, max: 3, items: [{ id: "minecraft:emerald", ratio: 10 }] },
        { groupName: "empty",                  items: [{ id: "empty" }] },
    ],

    //                     household productive textile knowledge security wealth empty
    weights: [
        [                       20,        35,     15,        5,       5,     5,   15 ], // Farm
        [                       20,        35,     10,        5,      10,     5,   15 ], // Forest
        [                       15,        30,     10,        5,      25,     5,   10 ], // Hunter
        [                       25,        30,     15,        5,      10,     5,   10 ], // Fisher
        [                       30,        10,     15,       20,       5,    15,    5 ], // Village
    ],

    outputPattern: "village_taiga_{row}_market_possessions",
};

// 以下两个变量需要替换为已有职业房屋中的实际 loot 引用。
// 不能直接使用未定义的变量。
//
// village_taiga_hunter_production
// village_taiga_fisher_production

const village_taiga_content_matrix = {
    matrixType: "poolToContent",
    rows: village_taiga_household_types,
    prefix: "village_taiga",
    outputPattern: "village_taiga_{row}_content",

    columns: [
        "{prefix}_{row}_production",
        "{prefix}_{row}_food_trade",
        "{prefix}_{row}_food",
        "village_taiga_seed_bag",
        "{prefix}_{row}_market_possessions",
        "village_taiga_drinks",
        "village_recipe_item",
    ],

//                              production trade  food   seed   market drinks recipe
    rolls: [
        [                          [2,3], [1,2], [0,1], [1,1], [1,1], [0,1], null  ], // Farm
        [                          [2,3], [2,3], [0,1],  null, [0,1], [0,1], null  ], // Forest
        [                          [1,2], [2,3], [0,1],  null, [1,1], [0,1], null  ], // Hunter
        [                          [1,2], [2,3], [0,1],  null, [0,1], [0,1], null  ], // Fisher
        [                           null, [3,4], [1,2],  null, [1,2], [1,1], [0,1] ], // Village
    ],
};


const village_taiga_household_weight_matrix = {
    matrixType: "contentToTable",
    rows: village_taiga_household_types,

    //                       Farm Forest Hunter Fisher Village
    weights: [                 6,     7,     3,     3,      1 ],

    prefix: "village_taiga",
    contentPattern: "{prefix}_{row}_content",

    extra: [
        [carpenterData.taiga, 1],
    ],

    output: "loot_village_taiga_house",
};