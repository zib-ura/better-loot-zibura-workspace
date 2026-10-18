// =================================================================
// 战利品表定义区域
// =================================================================

// =================================================================
// Household raw-food structure (aligned with plains)
// staple  -> basic calories / bulk foods
// common  -> frequently used household produce, stored dates/chickpeas, eggs/chicken
// varied  -> supplementary vegetables/fruit, livestock meat and dairy
// special -> economic / specialty crops
// =================================================================

const village_desert_staple = [
    { id: "empty", ratio: 1 },

    { reference: "lootjs:wheat_seeds", ratio: 5 },
    { reference: "lootjs:wheat", ratio: 10 },
    { reference: "lootjs:wheat_and_wheat_block", ratio: 10 },
    { reference: "lootjs:barley_seeds", ratio: 5 },
    { reference: "lootjs:barley", ratio: 10 },
    { reference: "lootjs:barley_and_barley_block", ratio: 10 },
    { reference: "lootjs:potato", ratio: 12 },
    { reference: "lootjs:rice", ratio: 12 },
];

const village_desert_common_produce = [
    { id: "empty", ratio: 1 },

    { reference: "lootjs:tomato_seeds", ratio: 5 },
    { reference: "lootjs:tomato", ratio: 10 },
    { reference: "lootjs:tomato_and_tomato_block", ratio: 10 },

    { reference: "lootjs:onion", ratio: 15 },
    { reference: "lootjs:onion_and_onion_block", ratio: 10 },

    { reference: "lootjs:pepper_seeds", ratio: 5 },
    { reference: "lootjs:pepper", ratio: 10 },
    { reference: "lootjs:pepper_and_pepper_block", ratio: 10 },

    { reference: "lootjs:eggplant_seeds", ratio: 5 },
    { reference: "lootjs:eggplant", ratio: 20 },

    { reference: "lootjs:zucchini_seeds", ratio: 5 },
    { reference: "lootjs:zucchini", ratio: 20 },

    { reference: "lootjs:garlic_clove", ratio: 5 },
    { reference: "lootjs:garlic", ratio: 20 },

    { reference: "lootjs:carrot", ratio: 25 },

    { reference: "lootjs:date_sapling", ratio: 5 },
    { reference: "lootjs:date", ratio: 20 },

    // Everyday household animal foods
    { reference: "lootjs:egg", ratio: 25 },

    { reference: "lootjs:chicken_cuts", ratio: 20 },
    { reference: "lootjs:chicken", ratio: 5 },

    { reference: "lootjs:chickpea", ratio: 25 },
];


const village_desert_varied_produce = [
    { id: "empty", ratio: 1 },

    { reference: "lootjs:black_grape_seeds", ratio: 2 },
    { reference: "lootjs:black_grape", ratio: 6 },
    { reference: "lootjs:white_grape_seeds", ratio: 2 },
    { reference: "lootjs:white_grape", ratio: 6 },
    { reference: "lootjs:red_grape_seeds", ratio: 2 },
    { reference: "lootjs:red_grape", ratio: 7 },

    { id: "kaleidoscope_tavern:grape", ratio: 20 },
    { id: "kaleidoscope_tavern:green_grape", ratio: 5 },
    { id: "kaleidoscope_tavern:grapevine", ratio: 25 },

    { reference: "lootjs:orange_sapling", ratio: 5 },
    { reference: "lootjs:orange", ratio: 20 },

    { reference: "lootjs:fig_sapling", ratio: 5 },
    { reference: "lootjs:fig", ratio: 20 },

    // Livestock protein and dairy broaden household diet
    { reference: "lootjs:minced_beef", ratio: 20 },
    { reference: "lootjs:beef", ratio: 5 },

    { reference: "lootjs:raw_lamb_chops", ratio: 20 },
    { reference: "lootjs:mutton", ratio: 5 },

    { id: "farmersdelight:milk_bottle", ratio: 25 },

    { reference: "lootjs:cabbage_seeds", ratio: 5 },
    { reference: "lootjs:cabbage", ratio: 20 },

    { reference: "lootjs:lettuce_seeds", ratio: 5 },
    { reference: "lootjs:lettuce", ratio: 20 },

    { reference: "lootjs:melon_seeds", ratio: 5 },
    { reference: "lootjs:melon_slice", ratio: 20 },

    { reference: "lootjs:hamimelon_seeds", ratio: 5 },
    { reference: "lootjs:hamimelon_slice", ratio: 20 },

    { reference: "lootjs:lemon_seeds", ratio: 5 },
    { reference: "lootjs:lemon", ratio: 20 },
];

const village_desert_special_produce = [
    { id: "empty", ratio: 1 },

    { reference: "lootjs:cotton_seeds", ratio: 5 },
    { reference: "lootjs:cotton", ratio: 20 },

    { reference: "lootjs:sugar_cane", ratio: 25 },

    { reference: "lootjs:flax_seeds", ratio: 5 },
    { reference: "lootjs:flax", ratio: 20 },
];

const village_desert_crops = [
    { groupName: "staple", groupWeight: 35, min: 2, max: 3, items: village_desert_staple },
    { groupName: "common_produce", groupWeight: 30, min: 2, max: 3, items: village_desert_common_produce },
    { groupName: "varied_produce", groupWeight: 25, min: 2, max: 3, items: village_desert_varied_produce },
    { groupName: "special_produce", groupWeight: 10, min: 2, max: 3, items: village_desert_special_produce },
];

// desert crops
const desert_seed_type = [
// base_crops
    "wheat_seeds",
    "barley_seeds",

// desert special
    "tomato_seeds",
    "onion",
    "pepper_seeds",
    "black_grape_seeds",
    "white_grape_seeds",
    "red_grape_seeds",
    "grapevine",
    "eggplant_seeds",
    "melon_seeds",
    "hamimelon_seeds",
    "chickpea",
    "date_sapling",
    "zucchini_seeds",
    "cotton_seeds",
    "lemon_seeds",
    "orange_sapling",
    "fig_sapling",
    "flax_seeds",
    "garlic_clove",
    "sugar_cane",

// other
    "carrot",
    "potato",
    "cabbage_seeds",
    "lettuce_seeds",
    "rice",
];

const village_desert_seed_bag = [
    {
        groupName: "bundle",
        groupWeight: 50,
        min: 1, max: 1,
        items: getSeedBagConfig("minecraft:bundle", desert_seed_type, 2)
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
];

const village_desert_essential_wealth_equipment = [

    {
        groupName: "Villager Daily Essentials",
        groupWeight: 30,
        min: 2, max: 3,
        items: [
            // --- Household Utilities ---
            { id: "minecraft:glass_bottle", ratio: 10 },
            { id: "minecraft:bowl", ratio: 10 },
            // { id: "minecraft:bundle", ratio: 10 },
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

// Food pools follow the same semantic structure as plains.
const village_desert_preserved_food = [
    { id: "empty", ratio: 1 },

];


const village_desert_simple_food = [
    { id: "empty", ratio: 1 },

    // ============================================================
    // 1. 主食 - 面包、谷物与米饭
    // ============================================================

    // 普通面包
    { id: "minecraft:bread", ratio: 10 },

    // 鹰嘴豆米饭
    { id: "ramadandelight:chickpea_and_rice", ratio: 10 },

    // ============================================================
    // 2. 肉类熟食 - 牛肉、羊肉与鸡肉
    // ============================================================

    // 熟牛肉
    { id: "minecraft:cooked_beef", ratio: 10 },

    // 熟羊肉
    { id: "minecraft:cooked_mutton", ratio: 10 },

    // 熟鸡肉
    { id: "minecraft:cooked_chicken", ratio: 10 },

    // ============================================================
    // 3. 汤类 - 谷物、豆类与肉汤
    // ============================================================

    // 北非传统浓汤
    { id: "ramadandelight:chorba", ratio: 10 },

    // 摩洛哥豆类浓汤
    { id: "ramadandelight:harira", ratio: 10 },

    // ============================================================
    // 4. 蔬菜料理 - 沙拉与番茄
    // ============================================================

    // 黎凡特欧芹谷物沙拉
    { id: "ramadandelight:tabbouleh", ratio: 10 },

    // 番茄拼盘
    { id: "kaleidoscope_cookery:tomato_platter", ratio: 10 },

    // 北非番茄烩蛋
    { id: "veggiesdelight:shakshouka", ratio: 10 },
    // ============================================================
    // 5. 水果料理 - 鲜果拼盘
    // ============================================================

    // 西瓜拼盘
    { id: "kaleidoscope_cookery:watermelon_platter", ratio: 10 },

    // ============================================================
    // 6. 酱料 - 番茄调味酱
    // ============================================================

    // 番茄酱
    { id: "farmersdelight:tomato_sauce", ratio: 10 },
];



const village_desert_prepared_food = [
    { id: "empty", ratio: 1 },

    // ============================================================
    // 1. 面点 - 馒头、肉夹馍与面饼
    // ============================================================

    // 馒头
    { id: "kaleidoscope_cookery:mantou", ratio: 10 },

    // 肉夹馍
    { id: "kaleidoscope_nether:roujiamo", ratio: 10 },

    // ============================================================
    // 2. 烘焙食品 - 肉馅饼、酥皮与咸派
    // ============================================================

    // 中亚烤包子
    { id: "kaleidoscope_cookery:samsa", ratio: 10 },

    // 肉馅饼
    { id: "kaleidoscope_cookery:meat_pie", ratio: 10 },

    // 萨莫萨三角饺
    { id: "ramadandelight:samosa", ratio: 10 },

    // 北非布里克馅饼
    { id: "ramadandelight:bourek", ratio: 10 },

    // 布里克整盘食品
    { id: "ramadandelight:bourek_block", ratio: 10 },

    // 咸味蛋奶派
    { id: "ramadandelight:quiche", ratio: 10 },

    // 阿尔及利亚夹馅薄饼
    { id: "veggiesdelight:mhadjeb", ratio: 10 },

    // ============================================================
    // 3. 烤串 - 牛肉、羊肉与鸡肉
    // ============================================================

    // 普通烧烤串
    { id: "farmersdelight:barbecue_stick", ratio: 10 },

    // 牛肉烤串
    { id: "barbequesdelight:grilled_beef_skewer", ratio: 2 },

    // 羊肉烤串
    { id: "barbequesdelight:grilled_lamb_skewer", ratio: 2 },

    // 鸡肉烤串
    { id: "barbequesdelight:grilled_chicken_skewer", ratio: 2 },

    // ============================================================
    // 4. 烤串 - 野味、根茎与蔬菜
    // ============================================================

    // 兔肉烤串
    { id: "barbequesdelight:grilled_rabbit_skewer", ratio: 2 },

    // 土豆烤串
    { id: "barbequesdelight:grilled_potato_skewer", ratio: 2 },

    // 萝卜羊肉串
    { id: "veggiesdelight:turnip_mutton_skewer", ratio: 2 },

    // ============================================================
    // 5. 烤肉与卷饼 - 烤肉串、羊肉卷
    // ============================================================

    // 中东烤肉
    { id: "ramadandelight:kebab", ratio: 10 },

    // // 烤肉卷饼
    // { id: "barbequesdelight:kebab_wrap", ratio: 10 },

    // 羊肉卷饼
    { id: "farmersdelight:mutton_wrap", ratio: 10 },

    // ============================================================
    // 6. 豆类加工食品 - 鹰嘴豆与芝麻酱
    // ============================================================

    // 鹰嘴豆泥配芝麻酱
    { id: "ramadandelight:hummus_tahini", ratio: 10 },

    // ============================================================
    // 7. 甜点 - 椰枣、油炸面点与糖浆
    // ============================================================

    // 椰枣夹心饼干
    { id: "ramadandelight:date_stuffed_cookie", ratio: 10 },

    // 北非油炸甜点
    { id: "ramadandelight:zalabiyeh", ratio: 10 },

    // 中东糖浆炸面球
    { id: "ramadandelight:luqaimat", ratio: 10 },

    // 奶酪糖浆酥点整盘
    { id: "ramadandelight:knafeh_tray_block", ratio: 10 },
];



const village_desert_dish = [
    { id: "empty", ratio: 1 },

    // ============================================================
    // 1. 主食 - 抓饭、焖饭与鱼肉米饭
    // ============================================================

    // 羊肉抓饭
    { id: "kaleidoscope_chinesefood:lamb_pilaf", ratio: 10 },

    // 中东倒扣焖饭
    { id: "ramadandelight:maqluba", ratio: 10 },

    // 阿拉伯鱼肉米饭
    { id: "ramadandelight:sayadieh", ratio: 10 },

    // ============================================================
    // 2. 主食 - 羊肉泡馍与面食
    // ============================================================

    // 羊肉泡馍
    { id: "kaleidoscope_chinesefood:yangrou_paomo", ratio: 10 },

    // 新疆大盘鸡拌面
    { id: "kaleidoscope_chinesefood:big_plate_chicken_noodles", ratio: 10 },

    // 牛肉面
    { id: "kaleidoscope_cookery:beef_noodle", ratio: 10 },

    // 烩面
    { id: "kaleidoscope_cookery:hui_noodle", ratio: 10 },

    // ============================================================
    // 3. 炖菜 - 羊肉、谷物与香料
    // ============================================================

    // 北非塔吉锅炖菜
    { id: "ramadandelight:tagine", ratio: 10 },

    // 甜味塔吉锅
    { id: "ramadandelight:sweet_tagine", ratio: 10 },

    // 南亚与中东风味肉类谷物炖粥
    { id: "ramadandelight:haleem", ratio: 10 },

    // ============================================================
    // 4. 羊肉主菜 - 烤制与香料料理
    // ============================================================

    // 烤羊排
    { id: "farmersdelight:roasted_mutton_chops", ratio: 10 },

    // ============================================================
    // 5. 鸡肉主菜 - 烤制、香料与大盘鸡
    // ============================================================

    // 巴勒斯坦香料烤鸡
    { id: "ramadandelight:musakhan", ratio: 10 },

    // 麻辣鸡肉
    { id: "kaleidoscope_cookery:numbing_spicy_chicken", ratio: 10 },

    // 新疆大盘鸡
    { id: "kaleidoscope_chinesefood:big_plate_chicken", ratio: 10 },

    // ============================================================
    // 6. 干锅料理 - 鸡肉、猪排骨与土豆
    // ============================================================

    // 干锅鸡
    { id: "kaleidoscope_chinesefood:dry_pot_chicken", ratio: 10 },

    // 干锅排骨
    // { id: "kaleidoscope_chinesefood:dry_pot_spare_ribs", ratio: 10 },

    // 干锅土豆
    { id: "kaleidoscope_chinesefood:dry_pot_potatoes", ratio: 10 },

    // ============================================================
    // 7. 蔬菜主菜 - 填馅蔬菜与番茄鸡蛋
    // ============================================================

    // 填馅节瓜
    { id: "veggiesdelight:stuffed_zucchinis", ratio: 10 },
];


const village_desert_food = [
    // No preserved foods in the original desert pool; preserved_food omitted until populated.
    { groupName: "simple_food", groupWeight: 45, min: 1, max: 2, items: village_desert_simple_food },
    { groupName: "prepared_food", groupWeight: 25, min: 1, max: 2, items: village_desert_prepared_food },
    { groupName: "dish", groupWeight: 15, min: 1, max: 2, items: village_desert_dish },
];

const village_desert_drinks = [
    {
        groupName: "drinks",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "minecraft:potion", ratio: 10 , potion: "minecraft:water" },
            { id: "farmersdelight:melon_juice", ratio: 10 },
            // { id: "kaleidoscope_tavern:wine", ratio: 10 },
            // { id: "youkaisfeasts:red_wine_bottle", ratio: 10 },
            // { id: "youkaisfeasts:white_wine_bottle", ratio: 10 },
            { id: "fruitsdelight:hamimelon_juice", ratio: 10 },
            { id: "ramadandelight:mahalabia", ratio: 10 },

        ]
    },
    {
        groupName: "condiment",
        groupWeight: 50,
        min: 1, max: 1,
        items: [
            { id: "barbequesdelight:chili_powder", ratio: 10 },
            { id: "barbequesdelight:cumin_powder", ratio: 10 },
            { id: "barbequesdelight:pepper_powder", ratio: 10 },
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
// 沙漠集镇住宅：生产 / 交易 / 饮食分离的五类家庭矩阵
// 行顺序：贫农、中农、地主、小手工业者、大商人
// ratio = 5 + 6 + 2 + 5 + 2 = 20
// 作坊生产物资与商铺库存不进入住宅战利品。
// =================================================================
const village_desert_household_types = [
    "poor_farmer", "middle_farmer", "landlord", "artisan", "merchant",
];

const village_desert_everyone_staple = [
    { groupName: "staple", groupWeight: 100, min: 2, max: 3, items: village_desert_staple },
];

// 仅农业家庭调用；common/varied/special 为农业产出结构而非家庭消费等级。
const village_desert_produce_matrix = {
    matrixType: "groupToPool",
    rows: village_desert_household_types,
    columns: [
        { groupName: "common", min: 2, max: 3, items: village_desert_common_produce },
        { groupName: "varied", min: 2, max: 3, items: village_desert_varied_produce },
        { groupName: "special", min: 2, max: 3, items: village_desert_special_produce },
    ],
    //                  common varied special
    weights: [
        [                    80,    18,     2 ], // 贫农：基本蔬菜和家禽产品
        [                    60,    32,     8 ], // 中农：生产更丰富
        [                    45,    35,    20 ], // 地主：更广泛的农业经营
        [                     0,     0,     0 ], // 手工业者：住宅不生产
        [                     0,     0,     0 ], // 商人：住宅不生产
    ],
    outputPattern: "village_desert_{row}_produce",
};

// 市场财产：消费用品与个人积蓄，不是作坊原料或商铺库存。
// 复用平原住宅已定义的全局贸易物品池。
const village_desert_market_possessions_matrix = {
    matrixType: "groupToPool",
    rows: village_desert_household_types,
    columns: [
        { groupName: "household_goods", min: 1, max: 1, items: village_household_trade_goods },
        { groupName: "productive_goods", min: 1, max: 1, damage: [0.5, 0.9], items: village_productive_trade_goods },
        { groupName: "textile_leather_goods", min: 1, max: 1, items: village_textile_leather_trade_goods },
        { groupName: "knowledge_goods", min: 1, max: 2, items: village_knowledge_trade_goods },
        { groupName: "security_goods", min: 1, max: 1, damage: [0.5, 0.9], items: village_security_trade_goods },
        { groupName: "liquid_wealth", min: 1, max: 3, items: [{ id: "minecraft:emerald", ratio: 10 }] },
        { groupName: "empty", items: [{ id: "empty" }] },
    ],
    //               household productive textile knowledge security wealth empty
    weights: [
        [                   30,       20,      10,       0,       0,     2,   38 ], // 贫农
        [                   35,       20,      15,       5,       5,     5,   15 ], // 中农
        [                   35,       10,      20,      10,       5,    15,    5 ], // 地主
        [                   40,        0,      25,      10,       5,    10,   10 ], // 手工业者：工具留在作坊
        [                   30,        0,      25,      20,       5,    20,    0 ], // 大商人：库存留在商铺
    ],
    outputPattern: "village_desert_{row}_market_possessions",
};

// preserved_food 目前只有 empty，暂不进入食品矩阵。
const village_desert_food_matrix = {
    matrixType: "groupToPool",
    rows: village_desert_household_types,
    columns: [
        { groupName: "simple_food", min: 1, max: 2, items: village_desert_simple_food },
        { groupName: "prepared_food", min: 1, max: 2, items: village_desert_prepared_food },
        { groupName: "dish", min: 1, max: 2, items: village_desert_dish },
    ],
    //                simple prepared dish
    weights: [
        [                  90,      10,    0 ], // 贫农
        [                  65,      30,    5 ], // 中农
        [                  35,      35,   30 ], // 地主
        [                  45,      45,   10 ], // 手工业者：更多购买的加工食品
        [                  20,      35,   45 ], // 大商人
    ],
    outputPattern: "village_desert_{row}_food",
};

const village_desert_content_matrix = {
    matrixType: "poolToContent",
    rows: village_desert_household_types,
    prefix: "village_desert",
    outputPattern: "village_desert_{row}_content",
    columns: [
        "village_desert_everyone_staple",
        "{prefix}_{row}_produce",
        "{prefix}_{row}_food",
        "village_desert_seed_bag",
        "{prefix}_{row}_market_possessions",
        "village_desert_drinks",
        "village_recipe_item",
    ],
    //                staple produce food    seed    market  drinks  recipe
    rolls: [
        [                [1,2], [1,1], [0,1], [1,1], [0,1],   null,   null ], // 贫农
        [                [2,3], [2,3], [1,2], [1,1], [1,2], [0,1],   null ], // 中农
        [                [2,3], [2,3], [2,3], [0,1], [2,3], [1,2],  [0,1] ], // 地主
        [                [1,2],  null, [2,3],  null, [1,2], [1,1],  [0,1] ], // 小手工业者
        [                [2,3],  null, [3,4],  null, [3,4], [1,2],  [1,1] ], // 大商人
    ],
};

const village_desert_household_weight_matrix = {
    matrixType: "contentToTable",
    rows: village_desert_household_types,
    //          贫农 中农 地主 小手工业者 大商人
    weights: [   5,   6,   2,       5,      2 ],
    prefix: "village_desert",
    contentPattern: "{prefix}_{row}_content",
    output: "loot_village_desert_house",
};
