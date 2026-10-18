// =================================================================
// 战利品表定义区域
// =================================================================
// =================================================================
// Household raw-food structure
// staple  -> basic calories / foods kept in bulk
// common  -> basic everyday vegetables and cooking produce
// varied  -> foods that broaden diet: animal foods, legumes/nuts,
//            fruit and less-essential produce
// special -> specialty / economic crops outside the basic household diet
// =================================================================

const village_plains_staple = [
    { id: "empty", ratio: 1 },

    { reference: "lootjs:wheat_seeds", ratio: 5 },
    { reference: "lootjs:wheat", ratio: 10 },
    { reference: "lootjs:wheat_and_wheat_block", ratio: 10 },

    { reference: "lootjs:potato", ratio: 15 },
    { reference: "lootjs:potato_and_potato_block", ratio: 10 },

    { reference: "lootjs:rice", ratio: 15 },
    { reference: "lootjs:rice_and_rice_block", ratio: 10 },

    { reference: "lootjs:barley_seeds", ratio: 5 },
    { reference: "lootjs:barley", ratio: 20 },

    { reference: "lootjs:oat_seeds", ratio: 5 },
    { reference: "lootjs:oat", ratio: 20 },

    { reference: "lootjs:sweet_potato", ratio: 25 },

    { reference: "lootjs:corn_seeds", ratio: 5 },
    { reference: "lootjs:corn", ratio: 20 },
]

const village_plains_common_produce = [
    { id: "empty", ratio: 1 },

    { reference: "lootjs:carrot", ratio: 15 },
    { reference: "lootjs:carrot_and_carrot_block", ratio: 10 },

    { reference: "lootjs:pumpkin_seeds", ratio: 5 },
    { reference: "lootjs:pumpkin_slice", ratio: 10 },
    { reference: "lootjs:pumpkin_slice_and_pumpkin_slice_block", ratio: 10 },

    { reference: "lootjs:tomato_seeds", ratio: 5 },
    { reference: "lootjs:tomato", ratio: 10 },
    { reference: "lootjs:tomato_and_tomato_block", ratio: 10 },

    { reference: "lootjs:onion", ratio: 15 },
    { reference: "lootjs:onion_and_onion_block", ratio: 10 },

    { reference: "lootjs:cabbage_seeds", ratio: 5 },
    { reference: "lootjs:cabbage", ratio: 10 },
    { reference: "lootjs:cabbage_and_cabbage_block", ratio: 10 },

    { reference: "lootjs:lettuce_seeds", ratio: 5 },
    { reference: "lootjs:lettuce", ratio: 10 },
    { reference: "lootjs:lettuce_and_lettuce_block", ratio: 10 },

    { reference: "lootjs:pepper_seeds", ratio: 5 },
    { reference: "lootjs:pepper", ratio: 10 },
    { reference: "lootjs:pepper_and_pepper_block", ratio: 10 },

    { reference: "lootjs:cucumber_seeds", ratio: 5 },
    { reference: "lootjs:cucumber", ratio: 20 },

    { reference: "lootjs:chinese_cabbage_seeds", ratio: 5 },
    { reference: "lootjs:chinese_cabbage", ratio: 20 },

    { reference: "lootjs:turnip_seeds", ratio: 5 },
    { reference: "lootjs:turnip", ratio: 20 },

    { reference: "lootjs:eggplant_seeds", ratio: 5 },
    { reference: "lootjs:eggplant", ratio: 20 },

    { reference: "lootjs:bell_pepper_seeds", ratio: 5 },
    { reference: "lootjs:bell_pepper_yellow", ratio: 7 },
    { reference: "lootjs:bell_pepper_red", ratio: 7 },
    { reference: "lootjs:bell_pepper_green", ratio: 6 },

    { reference: "lootjs:broccoli_seeds", ratio: 5 },
    { reference: "lootjs:broccoli", ratio: 20 },

    { reference: "lootjs:zucchini_seeds", ratio: 5 },
    { reference: "lootjs:zucchini", ratio: 20 },

    // Common fruit
    { reference: "lootjs:apple_sapling", ratio: 5 },
    { reference: "lootjs:apple", ratio: 20 },

    { reference: "lootjs:pear_sapling", ratio: 5 },
    { reference: "lootjs:pear", ratio: 20 },

    { reference: "lootjs:orange_sapling", ratio: 5 },
    { reference: "lootjs:orange", ratio: 20 },

    { reference: "lootjs:lemon_seeds", ratio: 5 },
    { reference: "lootjs:lemon", ratio: 20 },

    { reference: "lootjs:lime_sapling", ratio: 5 },
    { reference: "lootjs:lime", ratio: 20 },

    { reference: "lootjs:strawberry_seeds", ratio: 5 },
    { reference: "lootjs:strawberry", ratio: 20 },

    // Common household animal foods
    { reference: "lootjs:egg", ratio: 25 },

    // Pork
    { reference: "lootjs:bacon", ratio: 20 },
    { reference: "lootjs:porkchop", ratio: 5 },

    // Chicken
    { reference: "lootjs:chicken_cuts", ratio: 20 },
    { reference: "lootjs:chicken", ratio: 5 },
]

const village_plains_varied_produce = [
    { id: "empty", ratio: 1 },

    // Protein / fat sources
    { reference: "lootjs:soybean", ratio: 25 },

    { reference: "lootjs:redbean", ratio: 25 },

    { reference: "lootjs:peanut", ratio: 25 },

    { id: 'farmersdelight:milk_bottle', ratio: 25 },

    // Less-common / higher-value animal foods

    // Beef
    { reference: "lootjs:minced_beef", ratio: 20 },
    { reference: "lootjs:beef", ratio: 5 },

    // Mutton
    { reference: "lootjs:raw_lamb_chops", ratio: 20 },
    { reference: "lootjs:mutton", ratio: 5 },

    // Fish
    { reference: "lootjs:cod_slice", ratio: 20 },
    { reference: "lootjs:cod", ratio: 5 },

    { reference: "lootjs:salmon_slice", ratio: 20 },
    { reference: "lootjs:salmon", ratio: 5 },

    // Produce that increases household food variety
    { reference: "lootjs:fennel_seeds", ratio: 5 },
    { reference: "lootjs:fennel", ratio: 20 },

    { reference: "lootjs:parsley_seeds", ratio: 5 },
    { reference: "lootjs:parsley", ratio: 20 },

    { reference: "lootjs:garlic_chive_seeds", ratio: 5 },
    { reference: "lootjs:garlic_chive", ratio: 20 },

    { reference: "lootjs:greenonion", ratio: 25 },

    { reference: "lootjs:garlic_clove", ratio: 5 },
    { reference: "lootjs:garlic", ratio: 20 },

    // Less-common / specialized fruit
    { reference: "lootjs:fig_sapling", ratio: 5 },
    { reference: "lootjs:fig", ratio: 20 },

    { reference: "lootjs:kiwi_sapling", ratio: 5 },
    { reference: "lootjs:kiwi", ratio: 20 },

    // Grapes — keep the entire crop family together
    { reference: "lootjs:black_grape_seeds", ratio: 2 },
    { reference: "lootjs:black_grape", ratio: 6 },

    { reference: "lootjs:white_grape_seeds", ratio: 2 },
    { reference: "lootjs:white_grape", ratio: 6 },

    { reference: "lootjs:red_grape_seeds", ratio: 2 },
    { reference: "lootjs:red_grape", ratio: 7 },

    { id: "kaleidoscope_tavern:grape", ratio: 20 },
    { id: "kaleidoscope_tavern:green_grape", ratio: 5 },
    { id: "kaleidoscope_tavern:grapevine", ratio: 10 },
]

const village_plains_special_produce = [
    { id: "empty", ratio: 1 },

    { reference: "lootjs:tea_seeds", ratio: 25 },

    { id: "minecraft:sugar_cane", ratio: 25 },

    { id: "minecraft:honey_bottle", ratio: 25 },

    { reference: "lootjs:flax_seeds", ratio: 5 },
    { reference: "lootjs:flax", ratio: 20 },

    { reference: "lootjs:cotton_seeds", ratio: 5 },
    { reference: "lootjs:cotton", ratio: 20 },


]

const plains_seed_type = [
    // Vanilla & Farmer"s Delight Crops
    "wheat_seeds",
    "carrot",
    "potato",
    "pumpkin_seeds",
    "tomato_seeds",
    "onion",
    "cabbage_seeds",
    "lettuce_seeds",
    "rice",
    "pepper_seeds",

    // vegetable
    "barley_seeds",
    "cucumber_seeds",
    "oat_seeds",
    "soybean",
    "redbean",
    "chinese_cabbage_seeds",
    "garlic_clove",
    "peanut",
    "eggplant_seeds",
    "bell_pepper_seeds",
    "broccoli_seeds",
    "turnip_seeds",
    "sweet_potato",
    "corn_seeds",
    "zucchini_seeds",

    // fruit
    "apple_sapling",
    "fig_sapling",
    "kiwi_sapling",
    "orange_sapling",
    "lemon_seeds",
    "pear_sapling",
    "black_grape_seeds",
    "white_grape_seeds",
    "red_grape_seeds",
    "grapevine",
    "strawberry_seeds",
    "lime_sapling",

    // special
    "tea_seeds",
    "flax_seeds",
    "fennel_seeds",
    "garlic_chive_seeds",
    "greenonion",
    "parsley_seeds",
    "cotton_seeds",
];

const village_plains_seed_bag = [
    {
        groupName: "bundle",
        groupWeight: 50,
        min: 1, max: 1,
        items: getSeedBagConfig("minecraft:bundle", plains_seed_type, 2)
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
];

// // 3. 花卉、稻草与相关方块
// const flowers_and_straw = [
//     // =================================================================
//     // Group 1: Flowers & Straw Items
//     // =================================================================
//     {
//         groupName: "Flowers & Straw",
//         groupWeight: 90,
//         min: 2, max: 6,
//         items: [
//             // --- Vanilla Small Flowers ---
//             { id: "minecraft:dandelion", ratio: 5 },
//             { id: "minecraft:poppy", ratio: 5 },
//             { id: "minecraft:azure_bluet", ratio: 5 },
//             { id: "minecraft:red_tulip", ratio: 5 },
//             { id: "minecraft:orange_tulip", ratio: 5 },
//             { id: "minecraft:white_tulip", ratio: 5 },
//             { id: "minecraft:pink_tulip", ratio: 5 },
//             { id: "minecraft:oxeye_daisy", ratio: 5 },
//             { id: "minecraft:cornflower", ratio: 5 },

//             // --- Straw ---
//             { id: "farmersdelight:straw", ratio: 10 }
//         ]
//     },
//     // =================================================================
//     // Group 2: Straw Bales
//     // =================================================================
//     {
//         groupName: "Straw Bales",
//         groupWeight: 10,
//         min: 1, max: 2,
//         items: [
//             { id: "farmersdelight:straw_bale", ratio: 10 }
//         ]
//     }
// ];




// =================================================================
// Food classification for village social/economic semantics
// common -> simple_food by default; special -> dish by default.
// Clearly preserved or independently prepared foods override that baseline.
// =================================================================

const village_plains_preserved_food = [
    { id: "empty", ratio: 1 },


    { id: "kaleidoscope_chinesefood:salted_egg", ratio: 10 },
    { id: "kaleidoscope_chinesefood:century_egg", ratio: 10 },
    { id: "vintagedelight:pickled_egg", ratio: 10 },
    { id: "vintagedelight:pickled_pepper", ratio: 10 },
    { reference: "lootjs:pickle", ratio: 10 },
    { id: "vintagedelight:kimchi", ratio: 10 },
    { id: "vintagedelight:pickled_onion", ratio: 10 },
    { id: "vintagedelight:pickled_beetroot", ratio: 10 },
];

const village_plains_simple_food = [
    { id: "empty", ratio: 1 },

    // ============================================================
    // 欧洲 / 西式乡村日常饮食
    // ============================================================

    // ------------------------------------------------------------
    // 1. 主食 - 面包、谷物与粥
    // ------------------------------------------------------------

    // 面包类
    { id: "minecraft:bread", ratio: 10 },
    { id: "farm_and_charm:farmers_bread", ratio: 10 },

    // 燕麦、谷物粥
    { id: "vintagedelight:oatmeal", ratio: 10 },
    { id: "kitchenkarrot:fruit_cereal_porridge", ratio: 10 },

    // ------------------------------------------------------------
    // 2. 主食 - 面食与面点
    // ------------------------------------------------------------

    // 奶酪、蔬菜意面
    { id: "vintagedelight:cheese_pasta", ratio: 10 },
    { id: "farm_and_charm:pasta_with_onion_sauce", ratio: 10 },
    { id: "veggiesdelight:pasta_with_broccoli", ratio: 10 },

    // 烘焙面点
    { id: "casualnessdelight:yorkshire_pudding", ratio: 10 },

    // ------------------------------------------------------------
    // 3. 沙拉与凉拌菜
    // ------------------------------------------------------------

    // 混合蔬菜沙拉
    { id: "farmersdelight:mixed_salad", ratio: 10 },
    { id: "farm_and_charm:farmer_salad", ratio: 10 },
    { id: "culturaldelights:hearty_salad", ratio: 10 },

    // 叶菜、十字花科蔬菜沙拉
    { id: "veggiesdelight:broccoli_salad", ratio: 10 },
    { id: "veggiesdelight:cesar_salad", ratio: 10 },
    { id: "veggiesdelight:coleslaw", ratio: 10 },

    // 根茎蔬菜沙拉
    { id: "veggiesdelight:turnip_salad", ratio: 10 },

    // 土豆沙拉
    { id: "moredelight:potato_salad", ratio: 10 },
    { id: "brewery:potato_salad", ratio: 10 },
    { id: "rusticdelight:potato_salad", ratio: 10 },

    // 肉类沙拉
    { id: "moredelight:chicken_salad", ratio: 10 },

    // ------------------------------------------------------------
    // 4. 汤类 - 蔬菜、谷物与蛋
    // ------------------------------------------------------------

    // 土豆、洋葱汤
    { id: "farm_and_charm:potato_soup", ratio: 10 },
    { id: "farm_and_charm:onion_soup", ratio: 10 },

    // 番茄汤
    { id: "farm_and_charm:simple_tomato_soup", ratio: 10 },

    // 谷物汤
    { id: "farm_and_charm:barley_soup", ratio: 10 },

    // 十字花科蔬菜汤
    { id: "veggiesdelight:broccoli_soup", ratio: 10 },
    { id: "veggiesdelight:cauliflower_soup", ratio: 10 },

    // 蛋汤
    { id: "mynethersdelight:egg_soup", ratio: 10 },

    // ------------------------------------------------------------
    // 5. 蔬菜料理 - 土豆、玉米及其他蔬菜
    // ------------------------------------------------------------

    // 土豆泥
    { id: "brewery:mashed_potatoes", ratio: 10 },
    { id: "veggiesdelight:mashed_potatoes", ratio: 10 },

    // 玉米料理
    { id: "corn_delight:creamed_corn", ratio: 10 },
    { id: "culturaldelights:creamed_corn", ratio: 10 },

    // 茄子料理
    { id: "culturaldelights:poached_eggplants", ratio: 10 },
    { id: "culturaldelights:smoked_eggplant", ratio: 10 },
    { id: "culturaldelights:smoked_white_eggplant", ratio: 10 },

    // 蘑菇、节瓜料理
    { id: "veggiesdelight:garlic_stuffed_mushrooms", ratio: 10 },
    { id: "veggiesdelight:stuffed_zucchini_boat", ratio: 10 },

    // 彩椒填馅料理
    { id: "rusticdelight:stuffed_bell_pepper_yellow", ratio: 10 },
    { id: "rusticdelight:stuffed_bell_pepper_red", ratio: 10 },
    { id: "rusticdelight:stuffed_bell_pepper_orange", ratio: 10 },
    { id: "veggiesdelight:stuffed_bellpepper", ratio: 10 },

    // 花椰菜与米饭料理
    { id: "veggiesdelight:garlic_rice_with_cauliflower", ratio: 10 },

    // ------------------------------------------------------------
    // 6. 肉类料理 - 鸡肉、牛肉、羊肉及素肉
    // ------------------------------------------------------------

    // 鸡肉 - 烤制、填馅与培根包裹
    { id: "farm_and_charm:roasted_chicken", ratio: 10 },
    { id: "farm_and_charm:stuffed_chicken", ratio: 10 },
    { id: "farm_and_charm:chicken_wrapped_in_bacon", ratio: 10 },

    // 牛肉 - 炖煮、肉饼
    { id: "farm_and_charm:goulash", ratio: 10 },
    { id: "farm_and_charm:beef_patty_with_vegetables", ratio: 10 },

    // 羊肉 - 烤制与配菜
    { id: "farm_and_charm:lamb_with_corn", ratio: 10 },
    { id: "farm_and_charm:baked_lamb_ham", ratio: 10 },

    // 混合肉类、香肠与土豆
    { id: "farm_and_charm:sausage_with_oat_patty", ratio: 10 },
    { id: "farm_and_charm:potato_with_roast_meat", ratio: 10 },

    // 植物蛋白、素肉替代品
    { id: "kitchenkarrot:cooked_vegan_pork", ratio: 10 },
    { id: "kitchenkarrot:cooked_vegan_beef", ratio: 10 },

    // ------------------------------------------------------------
    // 7. 鱼类料理
    // ------------------------------------------------------------

    // 鳕鱼
    { id: "farm_and_charm:cooked_cod", ratio: 10 },

    // 鲑鱼
    { id: "farm_and_charm:cooked_salmon", ratio: 10 },

    // ------------------------------------------------------------
    // 8. 蛋类、豆谷制品与零食
    // ------------------------------------------------------------

    // 鸡蛋与野菜
    { id: "veggiesdelight:dandelion_and_eggs", ratio: 10 },

    // 大麦、土豆谷物饼
    { id: "farm_and_charm:barley_patties_with_potatoes", ratio: 10 },

    // 坚果零食
    { id: "vintagedelight:roasted_peanut", ratio: 10 },


    // ============================================================
    // 亚洲 / 东亚与中式乡村日常饮食
    // ============================================================

    // ------------------------------------------------------------
    // 1. 主食 - 米饭、炒饭与米制品
    // ------------------------------------------------------------

    // 普通米饭
    { id: "kaleidoscope_cookery:cooked_rice", ratio: 10 },

    // 蛋炒饭、什锦炒饭
    { id: "farmersdelight:fried_rice", ratio: 10 },
    { id: "kaleidoscope_cookery:egg_fried_rice", ratio: 10 },
    { id: "kaleidoscope_chinesefood:yangzhou_fried_rice", ratio: 10 },

    // 米制面点
    { id: "kaleidoscope_chinesefood:steamed_rice_rolls", ratio: 10 },

    // 甜米饭
    { id: "casualnessdelight:bowl_of_sweet_rice", ratio: 10 },

    // ------------------------------------------------------------
    // 2. 主食 - 粥类
    // ------------------------------------------------------------

    // 南瓜、蔬菜粥
    { id: "kaleidoscope_chinesefood:pumpkin_porridge", ratio: 10 },

    // 皮蛋粥
    { id: "kaleidoscope_chinesefood:century_egg_congee", ratio: 10 },

    // 鱼肉、龟肉粥
    { id: "alexsmobsdelight:cod_and_turtle_meat_congee", ratio: 10 },

    // ------------------------------------------------------------
    // 3. 主食 - 面条与汤面
    // ------------------------------------------------------------

    // 牛肉面
    { id: "casualnessdelight:beef_noodles", ratio: 10 },
    { id: "kaleidoscope_chinesefood:sauerkraut_beef_noodles", ratio: 10 },
    { id: "kaleidoscope_cookery:beef_noodle", ratio: 10 },

    // 羊肉烩面
    { id: "kaleidoscope_cookery:hui_noodle", ratio: 10 },

    // 猪肉、辣味面
    { id: "kaleidoscope_chinesefood:pork_chili_noodles", ratio: 10 },
    { id: "kaleidoscope_nether:chongqing_noodles", ratio: 10 },

    // 鸡蛋、番茄面
    { id: "kaleidoscope_chinesefood:tomato_egg_noodles", ratio: 10 },

    // 馄饨面
    { id: "kaleidoscope_chinesefood:wonton_noodles", ratio: 10 },

    // 热干面
    { id: "kaleidoscope_cookery:hot_dry_noodles", ratio: 10 },

    // 乌冬面、咖喱乌冬
    { id: "kaleidoscope_cookery:udon_noodle", ratio: 10 },
    { id: "kitchenkarrot:curry_udon", ratio: 10 },

    // ------------------------------------------------------------
    // 4. 盖饭与米饭套餐 - 猪肉、牛肉、鱼肉、蔬菜
    // ------------------------------------------------------------

    // 猪肉盖饭
    { id: "kaleidoscope_nether:braised_pork_rice", ratio: 10 },
    { id: "kaleidoscope_cookery:sweet_and_sour_pork_rice_bowl", ratio: 10 },
    { id: "kaleidoscope_cookery:fish_flavored_shredded_pork_rice_bowl", ratio: 10 },
    { id: "kaleidoscope_cookery:stir_fried_pork_with_peppers_rice_bowl", ratio: 10 },
    { id: "kaleidoscope_chinesefood:twice_cooked_pork_rice", ratio: 10 },

    // 牛肉、牛杂盖饭
    { id: "kaleidoscope_cookery:braised_beef_rice_bowl", ratio: 10 },
    { id: "kaleidoscope_cookery:stir_fried_beef_offal_rice_bowl", ratio: 10 },
    { id: "kaleidoscope_chinesefood:stir_fried_yellow_beef_rice", ratio: 10 },
    { id: "kaleidoscope_chinesefood:beef_with_scrambled_eggs_rice", ratio: 10 },

    // 鱼肉盖饭
    { id: "kaleidoscope_cookery:braised_fish_rice_bowl", ratio: 10 },

    // 豆腐盖饭
    { id: "kaleidoscope_nether:mapo_tofu_rice", ratio: 10 },

    // 鸡蛋、蔬菜盖饭
    { id: "kaleidoscope_cookery:scramble_egg_with_tomatoes_rice_bowl", ratio: 10 },
    { id: "kaleidoscope_chinesefood:stir_fried_three_fresh_vegetables_rice", ratio: 10 },

    // 香辣什锦盖饭
    { id: "kaleidoscope_nether:spicy_pot_rice", ratio: 10 },

    // ------------------------------------------------------------
    // 5. 汤类 - 清汤、肉汤、鱼汤与蛋汤
    // ------------------------------------------------------------

    // 骨汤、高汤
    { id: "farmersdelight:bone_broth", ratio: 10 },

    // 猪肉、排骨汤
    { id: "kaleidoscope_nether:corn_carrot_pork_rib_soup", ratio: 10 },

    // 牛肉、番茄汤
    { id: "kaleidoscope_cookery:tomato_beef_brisket_soup", ratio: 10 },

    // 鱼汤
    { id: "kaleidoscope_chinesefood:yellow_croaker_soup", ratio: 10 },

    // 龟肉汤
    { id: "alexsmobsdelight:turtle_soup", ratio: 10 },

    // 番茄蛋花汤
    { id: "kaleidoscope_chinesefood:tomato_egg_drop_soup", ratio: 10 },

    // ------------------------------------------------------------
    // 6. 家常炒菜 - 蔬菜、鸡蛋与豆制品
    // ------------------------------------------------------------

    // 什锦炒蔬菜
    { id: "kaleidoscope_chinesefood:stir_fried_three_fresh_vegetables", ratio: 10 },
    { id: "kaleidoscope_cookery:country_style_mixed_vegetables", ratio: 10 },

    // 番茄炒蛋
    { id: "kaleidoscope_cookery:scramble_egg_with_tomatoes", ratio: 10 },

    // 豆腐
    { id: "youkaisfeasts:tofu", ratio: 10 },

    // ------------------------------------------------------------
    // 7. 家常肉菜 - 猪肉、牛肉与鸡肉
    // ------------------------------------------------------------

    // 猪肉 - 回锅、炒制
    { id: "kaleidoscope_chinesefood:twice_cooked_pork", ratio: 10 },
    { id: "kaleidoscope_cookery:stir_fried_pork_with_peppers", ratio: 10 },
    { id: "kaleidoscope_cookery:sweet_and_sour_pork", ratio: 10 },
    { id: "kaleidoscope_cookery:fish_flavored_shredded_pork", ratio: 10 },

    // 猪肉 - 水煮、麻辣
    { id: "kaleidoscope_chinesefood:sichuan_boiled_pork_slices", ratio: 10 },

    // 牛肉 - 炖煮、红烧
    { id: "kaleidoscope_cookery:braised_beef", ratio: 10 },

    // 牛肉 - 小炒、蛋炒
    { id: "kaleidoscope_chinesefood:stir_fried_yellow_beef", ratio: 10 },
    { id: "kaleidoscope_chinesefood:beef_with_scrambled_eggs", ratio: 10 },

    // 鸡肉 - 钵钵鸡（鸡肉、土豆、白菜）
    { id: "casualnessdelight:chicken_bobo_chicken", ratio: 10 },
    { id: "casualnessdelight:potato_bobo_chicken", ratio: 10 },
    { id: "casualnessdelight:cabbage_bobo_chicken", ratio: 10 },

    // ------------------------------------------------------------
    // 8. 鱼类料理 - 蒸煮、油泼与麻辣
    // ------------------------------------------------------------

    // 纸包鱼
    { id: "casualnessdelight:bowl_of_paper_wrapped_fish", ratio: 10 },

    // 油泼鱼
    { id: "kaleidoscope_cookery:oil_splashed_fish", ratio: 10 },

    // 川味水煮鱼
    { id: "kaleidoscope_chinesefood:sichuan_boiled_fish", ratio: 10 },

    // ------------------------------------------------------------
    // 9. 蔬菜料理 - 茄子、辣椒与填馅蔬菜
    // ------------------------------------------------------------

    // 茄子填馅
    { id: "kaleidoscope_chinesefood:stuffed_eggplant", ratio: 10 },

    // 虎皮椒填馅
    { id: "kaleidoscope_cookery:stuffed_tiger_skin_pepper", ratio: 10 },

    // ------------------------------------------------------------
    // 10. 什锦烩菜与复合料理
    // ------------------------------------------------------------

    // 麻辣烫、冒菜
    { id: "kaleidoscope_chinesefood:maocai", ratio: 10 },

    // ------------------------------------------------------------
    // 11. 蛋类 - 简单熟食
    // ------------------------------------------------------------

    // 熟鸡蛋
    { reference: "lootjs:cooked_egg", ratio: 10 },

    // 茶叶蛋
    { id: "kaleidoscope_cookery:tea_egg", ratio: 10 },

];


const village_plains_prepared_food = [
    { id: "empty", ratio: 1 },

    // ============================================================
    // 欧洲 / 西式独立成型食品
    // ============================================================

    // ------------------------------------------------------------
    // 1. 烘焙主食 - 馅饼、派与咸挞
    // ------------------------------------------------------------

    // 南瓜、种子馅饼
    { id: "minecraft:pumpkin_pie", ratio: 10 },
    { id: "kitchenkarrot:seed_pie", ratio: 10 },

    // 鸡蛋、奶酪与蔬菜咸挞
    { id: "casualnessdelight:quiche_lorraine", ratio: 10 },
    { id: "veggiesdelight:zucchini_quiche", ratio: 10 },

    // ------------------------------------------------------------
    // 2. 烘焙主食 - 披萨与千层面
    // ------------------------------------------------------------

    // 普通披萨、盛宴披萨
    { id: "brewinandchewin:pizza", ratio: 10 },
    { id: "vanillacookbook:pizza", ratio: 10 },
    { id: "kitchenkarrot:feast_pizza", ratio: 10 },

    // 奶酪、肉类披萨
    { id: "vintagedelight:cheese_pizza", ratio: 10 },
    { id: "vintagedelight:meat_pizza", ratio: 10 },

    // 植物性披萨
    { id: "veggiesdelight:vegan_pizza", ratio: 10 },

    // 意式千层面切片
    { id: "veggiesdelight:lasagna_slice", ratio: 10 },

    // ------------------------------------------------------------
    // 3. 面点 - 煎饼与糕点
    // ------------------------------------------------------------

    // 燕麦煎饼
    { id: "farm_and_charm:oat_pancake", ratio: 10 },

    // 花卉糕点
    { id: "kitchenkarrot:flower_cake", ratio: 10 },

    // ------------------------------------------------------------
    // 4. 肉类熟食 - 香肠、火腿与冷切肉
    // ------------------------------------------------------------

    // 香肠
    { id: "brewery:sausage", ratio: 10 },

    // 火腿切片
    { id: "kaleidoscope_cookery:cold_cut_ham_slices", ratio: 10 },

    // 冷切烤肉
    { id: "kaleidoscope_cookery:cold_roasted_meat", ratio: 10 },

    // ------------------------------------------------------------
    // 5. 蔬菜、植物蛋白与独立成型食品
    // ------------------------------------------------------------

    // 卷心菜肉卷或菜卷
    { id: "farmersdelight:cabbage_rolls", ratio: 10 },

    // 素食肉饼
    { id: "veggiesdelight:cooked_vegetarian_patty", ratio: 10 },

    // ------------------------------------------------------------
    // 6. 便携零食 - 坚果与混合干粮
    // ------------------------------------------------------------

    // 混合坚果、干果
    { id: "vanillacookbook:trail_mix", ratio: 10 },


    // ============================================================
    // 亚洲 / 中式与东亚独立成型食品
    // ============================================================

    // ------------------------------------------------------------
    // 1. 面点 - 包子、馒头与生煎
    // ------------------------------------------------------------

    // 包子、馒头
    { id: "kaleidoscope_cookery:baozi", ratio: 10 },
    { id: "kaleidoscope_cookery:mantou", ratio: 10 },
    { id: "youkaisfeasts:bun", ratio: 10 },

    // 生煎馒头
    { id: "kaleidoscope_cookery:shengjian_mantou", ratio: 10 },

    // ------------------------------------------------------------
    // 2. 面点 - 饺子、馄饨与春卷
    // ------------------------------------------------------------

    // 水饺
    { id: "farmersdelight:dumplings", ratio: 10 },
    { id: "kaleidoscope_cookery:dumpling", ratio: 10 },
    { id: "dumplings_delight:pork_cabbage_boiled_dumpling", ratio: 2 },
    { id: "dumplings_delight:pork_celery_boiled_dumpling", ratio: 2 },
    { id: "dumplings_delight:pork_potato_boiled_dumpling", ratio: 2 },
    { id: "dumplings_delight:pork_fennel_boiled_dumpling", ratio: 2 },
    { id: "dumplings_delight:tomato_egg_boiled_dumpling", ratio: 2 },
    { id: "dumplings_delight:beef_tomato_boiled_dumpling", ratio: 2 },
    { id: "dumplings_delight:mutton_boiled_dumpling", ratio: 2 },
    { id: "dumplings_delight:chicken_mushroom_boiled_dumpling", ratio: 2 },
    { id: "dumplings_delight:cod_boiled_dumpling", ratio: 2 },
    { id: "dumplings_delight:salmon_boiled_dumpling", ratio: 2 },
    { id: "dumplings_delight:eggplant_egg_boiled_dumpling", ratio: 2 },
    { id: "dumplings_delight:mushroom_boiled_dumpling", ratio: 2 },
    { id: "dumplings_delight:garlic_chive_egg_boiled_dumpling", ratio: 2 },
    { id: "dumplings_delight:dandelion_leaf_boiled_dumpling", ratio: 2 },


    // 煎饺
    { id: "rusticdelight:fried_dumplings", ratio: 10 },

    // 馄饨
    { id: "kaleidoscope_chinesefood:sichuan_wonton", ratio: 10 },
    { id: "dumplings_delight:pork_carrot_wonton", ratio: 2 },
    { id: "dumplings_delight:pork_mushroom_wonton", ratio: 2 },
    { id: "dumplings_delight:pork_cabbage_wonton", ratio: 2 },

    // 春卷
    { id: "rusticdelight:spring_rolls", ratio: 10 },

    // ------------------------------------------------------------
    // 3. 面点 - 煎饼与卷饼
    // ------------------------------------------------------------

    // 中式煎饼
    { id: "kitchenkarrot:chinese_crepe", ratio: 10 },

    // ------------------------------------------------------------
    // 4. 米制食品 - 米糕、饭团与米卷
    // ------------------------------------------------------------

    // 米糕
    { id: "kitchenkarrot:rice_cake", ratio: 10 },

    // 猪肉饭团
    { id: "youkaisfeasts:pork_rice_ball", ratio: 10 },

    // 红米肠粉、米卷
    { id: "kaleidoscope_chinesefood:red_rice_roll", ratio: 10 },

    // 粽子（原始配置中禁用）
    // { id: "kaleidoscope_cookery:zongzi", ratio: 10 },

    // ------------------------------------------------------------
    // 5. 肉类熟食 - 肉丸与烤串
    // ------------------------------------------------------------

    // 熟肉丸
    { id: "kaleidoscope_cookery:cooked_meatball", ratio: 10 },

    // 日式烤鸡串
    { id: "kaleidoscope_cookery:yakitori", ratio: 10 },

    // ------------------------------------------------------------
    // 6. 植物蛋白与蔬菜糕点
    // ------------------------------------------------------------

    // 烤面筋
    { id: "casualnessdelight:roast_gluten", ratio: 10 },

    // 萝卜糕
    { id: "veggiesdelight:turnip_cake", ratio: 10 },

    // ------------------------------------------------------------
    // 7. 甜食 - 糖制水果与根茎
    // ------------------------------------------------------------

    // 冰糖炖梨
    { id: "fruitsdelight:pear_with_rock_sugar", ratio: 10 },

    // 拔丝土豆
    { id: "kaleidoscope_cookery:candied_potato", ratio: 10 },

    // 牛皮糖
    { id: "kaleidoscope_cookery:sticky_candy", ratio: 10 },
];


const village_plains_dish = [
    { id: "empty", ratio: 1 },

    // ============================================================
    // 欧洲 / 西式正式菜肴与高价值料理
    // ============================================================

    // ------------------------------------------------------------
    // 1. 汤类 - 蔬菜汤、肉汤与炖汤
    // ------------------------------------------------------------

    // 洋葱、南瓜汤
    { id: "farmersdelight:onion_soup", ratio: 10 },
    { id: "farmersdelight:pumpkin_soup", ratio: 10 },

    // 玉米汤
    { id: "corn_delight:corn_soup", ratio: 10 },

    // 鸡肉汤
    { id: "farmersdelight:chicken_soup", ratio: 10 },

    // ------------------------------------------------------------
    // 2. 炖菜 - 牛肉、鸡肉与根茎蔬菜
    // ------------------------------------------------------------

    // 牛肉炖菜
    { id: "farmersdelight:beef_stew", ratio: 10 },
    { id: "veggiesdelight:turnip_beef_stew", ratio: 10 },

    // 鸡肉炖菜
    { id: "veggiesdelight:garlic_chicken_stew", ratio: 10 },
    { id: "veggiesdelight:cacciatore", ratio: 10 },

    // 无花果炖鸡
    { id: "fruitsdelight:fig_chicken_stew", ratio: 10 },

    // ------------------------------------------------------------
    // 3. 主食 - 意面、焗面与千层面
    // ------------------------------------------------------------

    // 鸡肉奶油意面
    { id: "moredelight:creamy_pasta_with_chicken_cuts", ratio: 10 },

    // 火腿奶油意面
    { id: "moredelight:creamy_pasta_with_ham", ratio: 10 },

    // 蔬菜意面
    { id: "farmersdelight:vegetable_noodles", ratio: 10 },
    { id: "rusticdelight:bell_pepper_pasta", ratio: 10 },

    // 意式千层面
    { id: "veggiesdelight:lasagna_pan", ratio: 10 },

    // ------------------------------------------------------------
    // 4. 烘焙主菜 - 肉馅派、填馅蔬菜与焗菜
    // ------------------------------------------------------------

    // 牧羊人派
    { id: "farmersdelight:shepherds_pie", ratio: 10 },

    // 填馅南瓜
    { id: "farmersdelight:stuffed_pumpkin", ratio: 10 },

    // 填馅彩椒
    { id: "veggiesdelight:stuffed_bellpeppers_block", ratio: 10 },

    // 茄子帕尔马干酪焗菜
    { id: "culturaldelights:eggplant_parmesan", ratio: 10 },

    // 玉米面包填馅
    { id: "corn_delight:cornbread_stuffing", ratio: 10 },

    // ------------------------------------------------------------
    // 5. 肉类主菜 - 烤鸡与早餐拼盘
    // ------------------------------------------------------------

    // 烤鸡
    { id: "farmersdelight:roast_chicken", ratio: 10 },

    // 农夫早餐拼盘
    { id: "farm_and_charm:farmers_breakfast", ratio: 10 },

    // ------------------------------------------------------------
    // 6. 鱼类主菜 - 烤鱼与奶油鱼料理
    // ------------------------------------------------------------

    // 蒜香烤鳕鱼
    { id: "veggiesdelight:garlic_baked_cod", ratio: 10 },

    // 托斯卡纳风味鲑鱼
    { id: "youkaisfeasts:tuscan_salmon", ratio: 10 },

    // ------------------------------------------------------------
    // 7. 蔬菜料理 - 烤蔬菜、炖蔬菜与沙拉
    // ------------------------------------------------------------

    // 法式炖蔬菜
    { id: "farmersdelight:ratatouille", ratio: 10 },

    // 烤制混合蔬菜
    { id: "veggiesdelight:roasted_vegetables", ratio: 10 },

    // 彩椒什锦
    { id: "rusticdelight:bell_pepper_medley", ratio: 10 },

    // 黄瓜沙拉
    { id: "vintagedelight:cucumber_salad", ratio: 10 },

    // ------------------------------------------------------------
    // 8. 浓汤与特色炖菜
    // ------------------------------------------------------------

    // 腌黄瓜汤
    { id: "vintagedelight:pickle_soup", ratio: 10 },

    // 辣味炖菜
    { id: "vintagedelight:ghostly_chili", ratio: 10 },


    // ============================================================
    // 亚洲 / 中式、东亚与东南亚正式菜肴
    // ============================================================

    // ------------------------------------------------------------
    // 1. 主食 - 米饭、炒饭与烩饭
    // ------------------------------------------------------------

    // 龟肉炒饭
    { id: "alexsmobsdelight:turtle_meat_fried_rice", ratio: 10 },

    // 蔬菜米饭
    { id: "veggiesdelight:rice_and_vegetables", ratio: 10 },

    // ------------------------------------------------------------
    // 2. 主食 - 面条、米粉与节庆面食
    // ------------------------------------------------------------

    // 长寿面
    { id: "youkaisfeasts:longevity_noodles", ratio: 10 },

    // 柳州螺蛳粉
    { id: "kaleidoscope_nether:luosifen", ratio: 10 },

    // 泰式炒河粉
    { id: "vintagedelight:pad_thai", ratio: 10 },

    // 土豆面条
    { id: "veggiesdelight:potato_noodles", ratio: 10 },

    // ------------------------------------------------------------
    // 3. 汤类 - 鱼汤、肉汤与复合滋补汤
    // ------------------------------------------------------------

    // 鲶鱼炖汤
    { id: "alexsmobsdelight:catfish_stew", ratio: 10 },

    // 黄花鱼豆腐汤
    { id: "kaleidoscope_chinesefood:yellow_croaker_tofu_soup", ratio: 10 },

    // 胡椒猪肚鸡汤
    { id: "kaleidoscope_nether:pepper_pork_belly_chicken_soup", ratio: 10 },

    // 四喜丸子汤
    { id: "kaleidoscope_cookery:four_joy_meatball_soup", ratio: 10 },

    // 佛跳墙
    { id: "kaleidoscope_cookery:buddha_jumps_over_the_wall", ratio: 10 },

    // ------------------------------------------------------------
    // 4. 猪肉料理 - 红烧、凉拌与特色肉菜
    // ------------------------------------------------------------

    // 红烧排骨
    { id: "kaleidoscope_cookery:braised_pork_ribs", ratio: 10 },

    // 夫妻肺片
    { id: "kaleidoscope_nether:couples_lung_slice", ratio: 10 },

    // 橙香腌制猪肉
    { id: "fruitsdelight:orange_marinated_pork", ratio: 10 },

    // 粉蒸肉（原始配置中禁用）
    // { id: "youkaisfeasts:rice_powder_pork", ratio: 10 },

    // 东坡肉
    { id: "kaleidoscope_cookery:dongpo_pork", ratio: 10 },
    // ------------------------------------------------------------
    // 5. 肉丸料理 - 狮子头与四喜丸子
    // ------------------------------------------------------------

    // 四喜丸子
    { id: "kaleidoscope_chinesefood:four_joy_meatballs", ratio: 10 },

    // 红烧狮子头
    { id: "kaleidoscope_nether:braised_lion_head", ratio: 10 },

    // 狮子头
    { id: "youkaisfeasts:lions_head", ratio: 10 },

    // ------------------------------------------------------------
    // 6. 鸡肉料理 - 麻辣、凉拌与果香
    // ------------------------------------------------------------

    // 钵钵鸡
    { id: "casualnessdelight:bobo_chicken", ratio: 10 },

    // 辣子鸡
    { id: "kaleidoscope_cookery:spicy_chicken", ratio: 10 },

    // 橙香鸡肉
    { id: "fruitsdelight:orange_chicken", ratio: 10 },

    // ------------------------------------------------------------
    // 7. 鱼类料理 - 酱烤鱼
    // ------------------------------------------------------------

    // 酱汁烤鱼
    { id: "youkaisfeasts:sauce_grilled_fish", ratio: 10 },

    // ------------------------------------------------------------
    // 8. 麻辣特色料理 - 血旺、兔肉与其他食材
    // ------------------------------------------------------------

    // 麻辣血旺
    { id: "kaleidoscope_cookery:spicy_blood_stew", ratio: 10 },

    // 麻辣兔头
    { id: "kaleidoscope_cookery:spicy_rabbit_head", ratio: 10 },

    // ------------------------------------------------------------
    // 9. 特殊蛋白料理 - 昆虫
    // ------------------------------------------------------------

    // 油炸毛毛虫
    { id: "kaleidoscope_cookery:fried_caterpillar", ratio: 10 },

    // ------------------------------------------------------------
    // 10. 传统甜品与药膳
    // ------------------------------------------------------------

    // 龟苓膏
    { id: "alexsmobsdelight:turtle_jelly", ratio: 10 },
];


// Food pools are intentionally semantic rather than a strict value ladder:
// preserved/prepared describe form; simple/dish preserve the former common/special social tier.
const village_plains_food = [
    {
        groupName: "preserved_food",
        groupWeight: 15,
        min: 1, max: 2,
        items: village_plains_preserved_food
    },
    {
        groupName: "simple_food",
        groupWeight: 45,
        min: 1, max: 2,
        items: village_plains_simple_food
    },
    {
        groupName: "prepared_food",
        groupWeight: 25,
        min: 1, max: 2,
        items: village_plains_prepared_food
    },
    {
        groupName: "dish",
        groupWeight: 15,
        min: 1, max: 2,
        items: village_plains_dish
    },
];

const village_plains_drinks = [
    {
        groupName: "tea",
        groupWeight: 16,
        min: 1, max: 1,
        items: [

            { id: "minecraft:potion", ratio: 10 , potion: "minecraft:water" },

            { id: "youkaisfeasts:genmai_tea", ratio: 10 },
            { id: "youkaisfeasts:cornflower_tea", ratio: 10 },
            { id: "youkaisfeasts:yellow_tea", ratio: 10 },
            { id: "youkaisfeasts:dark_tea", ratio: 10 },
            { id: "youkaisfeasts:oolong_tea", ratio: 10 },
            { id: "youkaisfeasts:black_tea", ratio: 10 },
            { id: "youkaisfeasts:white_tea", ratio: 10 },
            { id: "youkaisfeasts:green_tea", ratio: 10 },
            { id: "youkaisfeasts:green_water", ratio: 10 },


            { id: "kaleidoscope_chinesefood:hk_milk_tea", ratio: 10 },
            { id: "kaleidoscope_cookery:flower_tea", ratio: 10 },
            { id: "kaleidoscope_cookery:tieguanyin", ratio: 10 },
            { id: "kaleidoscope_cookery:barley_tea", ratio: 10 },
            { id: "kaleidoscope_chinesefood:lapsang", ratio: 10 },
        ]
    },

    // {
    //     groupName: "condiments",
    //     groupWeight: 50,
    //     min: 1, max: 1,
    //     items: [
    //         { id: "rusticdelight:cooking_oil", ratio: 10 },
    //         { id: "youkaisfeasts:soy_sauce_bottle", ratio: 10 },
    //     ]
    // },

    {
        groupName: "wine",
        groupWeight: 16,
        min: 1, max: 1,
        items: [
            { id: "youkaisfeasts:mio", ratio: 10 },
            // { id: "youkaisfeasts:red_wine_bottle", ratio: 10 },
            // { id: "youkaisfeasts:white_wine_bottle", ratio: 10 },
            { id: "brewery:beer_hops", ratio: 3 },
            { id: "brewery:beer_barley", ratio: 3 },
            { id: "brewery:beer_wheat", ratio: 3 },
            { id: "kitchenkarrot:mead", ratio: 10 },
            { id: "kitchenkarrot:acorn_wine", ratio: 10 },
            // { id: "kaleidoscope_tavern:wine", ratio: 10 },
        ]
    },

    {
        groupName: "juice",
        groupWeight: 16,
        min: 1, max: 1,
        items: [
            { id: "vanillacookbook:apple_juice", ratio: 10 },
            { id: "farmersdelight:apple_cider", ratio: 10 },
            { id: "farm_and_charm:strawberry_tea", ratio: 10 },

            { id: "fruitsdelight:kiwi_juice", ratio: 10 },
            { id: "fruitsdelight:orange_juice", ratio: 10 },
            { id: "fruitsdelight:lemon_juice", ratio: 10 },
            { id: "fruitsdelight:pear_juice", ratio: 10 }
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

const village_plains_bakery_products = [
    {
        groupName: "plains_cakes",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "minecraft:cake", ratio: 10 },
            { id: "bakery:strawberry_cake", ratio: 10 },
            { id: "bakery:bundt_cake", ratio: 10 },
            { id: "vanillacookbook:carrot_cake", ratio: 10 },
            { id: "vanillacookbook:cheesecake", ratio: 10 },
            { id: "vanillacookbook:ice_cream_cake", ratio: 10 },

            // Veggies Delight Cakes
            { id: "veggiesdelight:carrot_cake", ratio: 10 },

            { id: "rusticdelight:pancakes", ratio: 10 },
            { id: "rusticdelight:vegetable_pancakes", ratio: 10 },
            { id: "rusticdelight:pumpkin_pancakes", ratio: 10 },
            // Veggies Delight Pancakes
            { id: "veggiesdelight:sweet_potato_pancakes", ratio: 10 },

            { id: "neapolitan:vanilla_cake", ratio: 10 },
            { id: "neapolitan:strawberry_cake", ratio: 10 },
        ]
    },

    {
        groupName: "plains_tarts_pies",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "bakery:linzer_tart", ratio: 10 },
            { id: "bakeries:egg_tart", ratio: 10 },
            { id: "fruitsdelight:fig_tart", ratio: 10 },
            { id: "fruitsdelight:lemon_tart", ratio: 10 },
            { id: "kitchenkarrot:carrot_tart", ratio: 10 },
            { id: "kitchenkarrot:egg_tart", ratio: 10 },
            { id: "seeddelight:seed_tart", ratio: 10 },
            { id: "youkaishomecoming:tarte_lune", ratio: 10 },
            { id: "rusticdelight:syrup_cheesecake", ratio: 10 },
            { id: "bakery:apple_pie", ratio: 10 },
            { id: "farmersdelight:apple_pie", ratio: 10 },
            { id: "kaleidoscope_cookery:fondant_pie", ratio: 10 },
            { id: "kitchenkarrot:seed_pie", ratio: 10 },
            { id: "kitchenkarrot:flower_cake", ratio: 10 },
            { id: "minecraft:pumpkin_pie", ratio: 10 },
            { id: "vanillacookbook:apple_pie", ratio: 10 },

            // Veggies Delight Trays & Pies
            { id: "veggiesdelight:sweet_potato_pie", ratio: 10 },
        ]
    },

    {
        groupName: "plains_dessert_puddings_cold",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "bakery:pudding", ratio: 10 },
            { id: "fruitsdelight:fig_pudding", ratio: 10 },
            { id: "vanillacookbook:pudding", ratio: 10 },

            { id: "fruitsdelight:kiwi_popsicle", ratio: 10 },
            { id: "youkaishomecoming:big_popsicle", ratio: 10 },
            { id: "youkaishomecoming:milk_popsicle", ratio: 10 },

            { id: "vanillacookbook:ice_cream", ratio: 10 },
            { id: "vanillacookbook:pumpsicle", ratio: 10 },
            { id: "kaleidoscope_twilight:frozen_bun", ratio: 10 },

            { id: "veggiesdelight:beetroot_brownie_tray", ratio: 10 },

        ]
    },

    {
        groupName: "plains_dessert_teatime_treats_slices",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            // 小点心类
            { id: "bakery:cornet", ratio: 10 },
            { id: "bakery:jam_roll", ratio: 10 },
            { id: "youkaisfeasts:candy_apple", ratio: 10 },
            { id: "kaleidoscope_cookery:sticky_candy", ratio: 10 },

            { id: "fruitsdelight:baked_pear", ratio: 10 },

            { id: "bakery:strawberry_glazed_cookie", ratio: 10 },
            { id: "fruitsdelight:lemon_cookie", ratio: 10 },
            { id: "rusticdelight:syrup_cookie", ratio: 10 },
            { id: "vanillacookbook:potato_cookie", ratio: 10 },
            { id: "vanillacookbook:pumpkin_cookie", ratio: 10 },
            { id: "vintagedelight:oatmeal_cookie", ratio: 10 },

            { id: "bakery:apple_cupcake", ratio: 10 },
            { id: "bakery:strawberry_cupcake", ratio: 10 },
            // Veggies Delight Cupcake
            { id: "veggiesdelight:sweet_potato_cupcake", ratio: 10 },

            // 切片/单品类
            { id: "bakery:bundt_cake_slice", ratio: 10 },
            { id: "bakery:strawberry_cake_slice", ratio: 10 },
            { id: "farmersdelight:cake_slice", ratio: 10 },
            { id: "vanillacookbook:carrot_cake_slice", ratio: 10 },
            { id: "vanillacookbook:ice_cream_cake_slice", ratio: 10 },
            { id: "bakery:apple_pie_slice", ratio: 10 },
            { id: "bakery:linzer_tart_slice", ratio: 10 },
            { id: "farmersdelight:apple_pie_slice", ratio: 10 },
            { id: "farmersdelight:pumpkin_pie_slice", ratio: 10 },
            { id: "youkaishomecoming:tarte_lune_slice", ratio: 10 },
            { id: "bakery:pudding_slice", ratio: 10 },
            { id: "fruitsdelight:fig_pudding_slice", ratio: 10 },

            // Veggies Delight Slices & Individual Treats
            { id: "veggiesdelight:beetroot_brownie", ratio: 10 },
            { id: "veggiesdelight:carrot_cake_slice", ratio: 10 },
            { id: "veggiesdelight:sweet_potato_pie_slice", ratio: 10 },

            { id: "rusticdelight:fruit_beignet", ratio: 10 },
            { id: "rusticdelight:pancake", ratio: 10 },
            { id: "rusticdelight:vegetable_pancake", ratio: 10 },
            { id: "rusticdelight:pumpkin_pancake", ratio: 10 },
            { id: "rusticdelight:syrup_cheesecake_slice", ratio: 10 },


            { id: "neapolitan:strawberry_scones", ratio: 10 },
            { id: "neapolitan:adzuki_bun", ratio: 10 },

        ]
    },

    {
        groupName: "plains_bread",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "minecraft:bread", ratio: 10 },
            { id: "bakery:bread_with_jam", ratio: 10 },
            { id: "bakery:misslilitu_biscuit", ratio: 10 },
            { id: "bakery:waffle", ratio: 10 },
            { id: "bakery:bun", ratio: 10 },
            { id: "bakery:braided_bread", ratio: 10 },
            { id: "bakery:toast", ratio: 10 },
            { id: "bakery:baguette", ratio: 10 },
            { id: "bakery:bread", ratio: 10 },
            { id: "bakery:crusty_bread", ratio: 10 },
            { id: "bakery:croissant", ratio: 10 },

            { id: "corn_delight:cornbread", ratio: 10 },

            { id: "neapolitan:vanilla_fudge", ratio: 10 },
        ]
    },

]

const village_plains_bakery_baking_material = [
    {
        groupName: "baking_material",
        groupWeight: 15,
        min: 2, max: 3,
        items: basic_baking_material
    },

    {
        groupName: "plains_jam",
        groupWeight: 15,
        min: 1, max: 1,
        items: [

            { reference: "lootjs:apple_jam", ratio: 10 },
            { id: "bakery:strawberry_jam", ratio: 10 },
            { id: "fruitsdelight:fig_jam", ratio: 10 },
            { id: "fruitsdelight:kiwi_jam", ratio: 10 },
            { id: "fruitsdelight:lemon_jam", ratio: 10 },
            { id: "fruitsdelight:orange_jam", ratio: 10 },
            { id: "fruitsdelight:pear_jam", ratio: 10 },
            { id: "rusticdelight:syrup", ratio: 10 },

        ]
    },
]


const village_plains_household_types = [
    "smallholder_farming",
    "smallholder_life",
    "large_scale_farming",
    "large_scale_farm_life",
    "non_farm_households",
];

// =================================================================
// 平原住宅：家庭类型矩阵
//
// 行顺序（以下所有矩阵统一使用 village_plains_household_types）：
//   1. smallholder_farming     小农生产型：偏原料储备与生产工具
//   2. smallholder_life        小农生活型：偏日常消费与家庭用品
//   3. large_scale_farming     大农生产型：生产投入较高，并持有更多财富
//   4. large_scale_farm_life   大农生活型：饮食、消费与财富水平较高
//   5. non_farm_households     非农家庭：依赖市场，知识/加工商品占比更高
//
// weight 矩阵中的数字均为同一行内各组的相对权重；
// 同一次抽取只会命中一个组，多次调用同一矩阵时不同组可以共存。
// =================================================================

const village_plains_everyone_staple = [
    { groupName: "common",  groupWeight: 100, min: 2, max: 3, items: village_plains_staple },
]

const village_plains_produce_matrix = {
    matrixType: "groupToPool",
    rows: village_plains_household_types,
    columns: [
        { groupName: "common",  min: 2, max: 3, items: village_plains_common_produce },
        { groupName: "varied",  min: 2, max: 3, items: village_plains_varied_produce },
        { groupName: "special", min: 2, max: 3, items: village_plains_special_produce },
    ],

    // 农产品结构权重
    //                         common  varied  special
    weights: [
        [                          70,     25,       5 ], // smallholder_farming
        [                          65,     30,       5 ], // smallholder_life
        [                          30,     30,      30 ], // large_scale_farming
        [                          40,     40,      20 ], // large_scale_farm_life
        [                          45,     45,      10 ], // non_farm_households
    ],
    outputPattern: "village_plains_{row}_produce",
};

const village_plains_market_possessions_matrix = {
    matrixType: "groupToPool",
    rows: village_plains_household_types,
    columns: [
        { groupName: "household_goods",       min: 1, max: 1, items: village_household_trade_goods },
        { groupName: "productive_goods",      min: 1, max: 1, damage: [0.5, 0.9], items: village_productive_trade_goods },
        { groupName: "textile_leather_goods", min: 1, max: 1, items: village_textile_leather_trade_goods },
        { groupName: "knowledge_goods",        min: 1, max: 2, items: village_knowledge_trade_goods },
        { groupName: "security_goods",         min: 1, max: 1, damage: [0.5, 0.9], items: village_security_trade_goods },
        { groupName: "liquid_wealth",          min: 1, max: 3, items: [{ id: "minecraft:emerald", ratio: 10 }] },
        { groupName: "empty",                                  items: [{ id: "empty" }] },
    ],

    // 市场占有物结构权重
    // household : 厨具、容器、照明等家庭耐用品
    // productive: 农具、工具及生产性用品
    // textile   : 纺织、皮革与随身收纳商品
    // knowledge : 书写、地图、导航与文化用品
    // security  : 武器、防具及家庭防卫用品
    // emerald   : 尚未转化为商品的流动财富
    // empty     : 本次没有额外市场资产
    //
    //                         household  productive  textile  knowledge  security  emerald  empty
    weights: [
        [                          20,          35,       15,         5,        5,       5,    15 ], // smallholder_farming
        [                          35,          20,       20,         5,        5,       5,    10 ], // smallholder_life
        [                          25,          30,       15,         5,        5,      15,     5 ], // large_scale_farming
        [                          35,          15,       15,        10,        5,      15,     5 ], // large_scale_farm_life
        [                          30,          10,       15,        20,        5,      15,     5 ], // non_farm_households
    ],
    outputPattern: "village_plains_{row}_market_possessions",
};

const village_plains_food_matrix = {
    matrixType: "groupToPool",
    rows: village_plains_household_types,
    columns: [
        { groupName: "simple_food",    min: 1, max: 2, items: village_plains_simple_food },
        { groupName: "prepared_food",  min: 1, max: 2, items: village_plains_prepared_food },
        { groupName: "preserved_food", min: 1, max: 2, items: village_plains_preserved_food },
        { groupName: "dish",           min: 1, max: 2, items: village_plains_dish },
    ],

    // 食品结构权重
    // simple   : 普通家庭熟食 / 基础餐食
    // prepared : 独立加工、分份或即食食品
    // preserved: 腌制、保存食品
    // dish     : 更完整、价值更高的菜肴
    //
    //                         simple  prepared  preserved  dish
    weights: [
        [                           0,        0,          0,    0 ], // smallholder_farming：生产型，不直接生成成品食物
        [                          30,       20,         35,   15 ], // smallholder_life
        [                          45,       30,         25,    0 ], // large_scale_farming
        [                          30,       10,         10,   50 ], // large_scale_farm_life
        [                          20,       50,          0,   30 ], // non_farm_households
    ],
    outputPattern: "village_plains_{row}_food",
};

// =================================================================
// 事件注册区域
// =================================================================

const village_plains_bakery_content = [
    [village_plains_bakery_products, 2, 2],
    [village_plains_bakery_baking_material, 2, 3],
    [village_smith_small_iron_knife, 1, 1],
];

const village_plains_content_matrix = {
    matrixType: "poolToContent",
    rows: village_plains_household_types,
    prefix: "village_plains",
    outputPattern: "village_plains_{row}_content",

    columns: [
        "village_plains_everyone_staple",
        "{prefix}_{row}_produce",
        "{prefix}_{row}_food",
        "village_plains_seed_bag",
        "{prefix}_{row}_market_possessions",
        "village_plains_drinks",
        "village_recipe_item",
    ],

    // 每个单元格为 [最少调用次数, 最多调用次数]；null 表示该家庭类型不调用此列。
    //                         staple  produce   food    seed    market  drinks  recipe
    rolls: [
        [                         [2,3],   [1,2],   null,  [1,1],   [1,1],   null,   null  ], // smallholder_farming
        [                         [1,1],   [1,2],  [1,2],  [1,1],   [1,2],  [1,1],   null  ], // smallholder_life
        [                         [2,3],   [2,3],  [1,2],  [1,1],   [1,2],   null,   null  ], // large_scale_farming
        [                         [1,2],   [1,2],  [2,3],   null,   [1,2],  [1,1],  [1,1] ], // large_scale_farm_life
        [                          null,   [2,3],  [1,2],   null,   [1,2],  [1,1],  [1,1] ], // non_farm_households
    ],
};

const village_plains_household_weight_matrix = {
    matrixType: "contentToTable",
    rows: village_plains_household_types,

    // 最终住宅原型抽取权重；与 village_plains_household_types 的行顺序一一对应。
    //         smallholder_farming  smallholder_life  large_scale_farming  large_scale_farm_life  non_farm_households
    weights: [      3,                 2,                   2,                      1,                    2,         ],
    prefix: "village_plains",
    contentPattern: "{prefix}_{row}_content",
    extra: [
        [carpenterData.plains, 1],
        [village_plains_bakery_content, 1],
    ],
    output: "loot_village_plains_house",
};
