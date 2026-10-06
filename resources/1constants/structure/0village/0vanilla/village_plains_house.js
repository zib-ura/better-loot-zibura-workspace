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

// const village_plains_staple = [
//     {
//         groupName: "staples",
//         groupWeight: 35,
//         min: 2, max: 3,
//         items: [
const village_plains_staple = [

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
    { reference: "lootjs:tea_seeds", ratio: 5 },
    { id: "youkaisfeasts:green_tea_leaves", ratio: 10 },
    { id: "youkaisfeasts:white_tea_leaves", ratio: 10 },

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



const village_plains_essential_wealth_equipment = [

    {
        groupName: "Villager Daily Essentials",
        groupWeight: 30,
        min: 2, max: 3,
        items: [
            { id: "minecraft:lantern", ratio: 10 },
            { id: "minecraft:glass_bottle", ratio: 10 },
            { id: "minecraft:bowl", ratio: 10 },
            { id: "farmersdelight:rope", ratio: 10 },
            { id: "supplementaries:sack", ratio: 10 },
            { id: "farmersdelight:wooden_basket", ratio: 10 },
            { id: "kaleidoscope_cookery:fruit_basket", ratio: 10 },
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

];

// =================================================================
// Food classification for village social/economic semantics
// common -> simple_food by default; special -> dish by default.
// Clearly preserved or independently prepared foods override that baseline.
// =================================================================

const village_plains_preserved_food = [

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
    // Europe / western-style common household food
    { id: "minecraft:bread", ratio: 10 },
    { id: "farmersdelight:mixed_salad", ratio: 10 },
    { id: "moredelight:chicken_salad", ratio: 10 },
    { id: "moredelight:potato_salad", ratio: 10 },
    { id: "kitchenkarrot:cooked_vegan_pork", ratio: 10 },
    { id: "kitchenkarrot:cooked_vegan_beef", ratio: 10 },
    { id: "kitchenkarrot:fruit_cereal_porridge", ratio: 10 },
    { id: "farm_and_charm:farmer_salad", ratio: 10 },
    { id: "farm_and_charm:goulash", ratio: 10 },
    { id: "farm_and_charm:roasted_chicken", ratio: 10 },
    { id: "farm_and_charm:sausage_with_oat_patty", ratio: 10 },
    { id: "farm_and_charm:beef_patty_with_vegetables", ratio: 10 },
    { id: "farm_and_charm:barley_patties_with_potatoes", ratio: 10 },
    { id: "farm_and_charm:pasta_with_onion_sauce", ratio: 10 },
    { id: "farm_and_charm:potato_soup", ratio: 10 },
    { id: "farm_and_charm:onion_soup", ratio: 10 },
    { id: "farm_and_charm:barley_soup", ratio: 10 },
    { id: "farm_and_charm:simple_tomato_soup", ratio: 10 },
    { id: "farm_and_charm:farmers_bread", ratio: 10 },
    { id: "farm_and_charm:stuffed_chicken", ratio: 10 },
    { id: "farm_and_charm:potato_with_roast_meat", ratio: 10 },
    { id: "brewery:potato_salad", ratio: 10 },
    { id: "brewery:mashed_potatoes", ratio: 10 },
    { id: "vintagedelight:cheese_pasta", ratio: 10 },
    { id: "vintagedelight:roasted_peanut", ratio: 10 },
    { id: "vintagedelight:oatmeal", ratio: 10 },
    { id: "culturaldelights:poached_eggplants", ratio: 10 },
    { id: "culturaldelights:hearty_salad", ratio: 10 },
    { id: "rusticdelight:potato_salad", ratio: 10 },
    { id: "rusticdelight:stuffed_bell_pepper_yellow", ratio: 10 },
    { id: "rusticdelight:stuffed_bell_pepper_red", ratio: 10 },
    { id: "rusticdelight:stuffed_bell_pepper_orange", ratio: 10 },
    { id: "casualnessdelight:yorkshire_pudding", ratio: 10 },
    { id: "mynethersdelight:egg_soup", ratio: 10 },
    { id: "veggiesdelight:broccoli_salad", ratio: 10 },
    { id: "veggiesdelight:cesar_salad", ratio: 10 },
    { id: "veggiesdelight:coleslaw", ratio: 10 },
    { id: "veggiesdelight:turnip_salad", ratio: 10 },
    { id: "veggiesdelight:garlic_stuffed_mushrooms", ratio: 10 },
    { id: "veggiesdelight:stuffed_zucchini_boat", ratio: 10 },
    { id: "veggiesdelight:pasta_with_broccoli", ratio: 10 },
    { id: "veggiesdelight:garlic_rice_with_cauliflower", ratio: 10 },
    { id: "veggiesdelight:stuffed_bellpepper", ratio: 10 },
    { id: "veggiesdelight:broccoli_soup", ratio: 10 },
    { id: "veggiesdelight:cauliflower_soup", ratio: 10 },
    { id: "veggiesdelight:mashed_potatoes", ratio: 10 },
    { id: "veggiesdelight:dandelion_and_eggs", ratio: 10 },
    { id: "farm_and_charm:lamb_with_corn", ratio: 10 },
    { id: "corn_delight:creamed_corn", ratio: 10 },
    { id: "culturaldelights:creamed_corn", ratio: 10 },
    { id: "farm_and_charm:cooked_cod", ratio: 10 },
    { id: "farm_and_charm:chicken_wrapped_in_bacon", ratio: 10 },
    { id: "farm_and_charm:baked_lamb_ham", ratio: 10 },
    { id: "farm_and_charm:cooked_salmon", ratio: 10 },
    { id: "culturaldelights:smoked_eggplant", ratio: 10 },
    { id: "culturaldelights:smoked_white_eggplant", ratio: 10 },

    // Asia / ordinary household and everyday prepared meals
    { id: "alexsmobsdelight:turtle_soup", ratio: 10 },
    { id: "alexsmobsdelight:cod_and_turtle_meat_congee", ratio: 10 },
    { id: "casualnessdelight:potato_bobo_chicken", ratio: 10 },
    { id: "casualnessdelight:cabbage_bobo_chicken", ratio: 10 },
    { id: "casualnessdelight:chicken_bobo_chicken", ratio: 10 },
    { id: "casualnessdelight:bowl_of_sweet_rice", ratio: 10 },
    { id: "farmersdelight:fried_rice", ratio: 10 },
    { id: "farmersdelight:bone_broth", ratio: 10 },
    { id: "kaleidoscope_chinesefood:maocai", ratio: 10 },
    { id: "kaleidoscope_chinesefood:pumpkin_porridge", ratio: 10 },
    { id: "kaleidoscope_chinesefood:tomato_egg_drop_soup", ratio: 10 },
    { id: "kaleidoscope_chinesefood:century_egg_congee", ratio: 10 },
    { id: "kaleidoscope_chinesefood:twice_cooked_pork", ratio: 10 },
    { id: "kaleidoscope_chinesefood:stir_fried_yellow_beef", ratio: 10 },
    { id: "kaleidoscope_chinesefood:beef_with_scrambled_eggs", ratio: 10 },
    { id: "kaleidoscope_chinesefood:stir_fried_three_fresh_vegetables", ratio: 10 },
    { id: "kaleidoscope_cookery:country_style_mixed_vegetables", ratio: 10 },
    { id: "kaleidoscope_cookery:tomato_beef_brisket_soup", ratio: 10 },
    { id: "kaleidoscope_cookery:cooked_rice", ratio: 10 },
    { id: "kaleidoscope_cookery:egg_fried_rice", ratio: 10 },
    { id: "kaleidoscope_cookery:scramble_egg_with_tomatoes", ratio: 10 },
    { id: "kaleidoscope_cookery:braised_beef", ratio: 10 },
    { id: "kaleidoscope_cookery:stir_fried_pork_with_peppers", ratio: 10 },
    { reference: "lootjs:cooked_egg", ratio: 10 },
    { id: "youkaisfeasts:tofu", ratio: 10 },
    { id: "casualnessdelight:beef_noodles", ratio: 10 },
    { id: "casualnessdelight:bowl_of_paper_wrapped_fish", ratio: 10 },
    { id: "kaleidoscope_cookery:hot_dry_noodles", ratio: 10 },
    { id: "kaleidoscope_cookery:oil_splashed_fish", ratio: 10 },
    { id: "kitchenkarrot:curry_udon", ratio: 10 },
    { id: "kaleidoscope_cookery:udon_noodle", ratio: 10 },
    { id: "kaleidoscope_chinesefood:wonton_noodles", ratio: 10 },
    { id: "kaleidoscope_chinesefood:yangzhou_fried_rice", ratio: 10 },
    { id: "kaleidoscope_chinesefood:steamed_rice_rolls", ratio: 10 },
    { id: "kaleidoscope_nether:braised_pork_rice", ratio: 10 },
    { id: "kaleidoscope_nether:chongqing_noodles", ratio: 10 },
    { id: "kaleidoscope_nether:mapo_tofu_rice", ratio: 10 },
    { id: "kaleidoscope_nether:spicy_pot_rice", ratio: 10 },
    { id: "kaleidoscope_cookery:braised_fish_rice_bowl", ratio: 10 },
    { id: "kaleidoscope_cookery:sweet_and_sour_pork_rice_bowl", ratio: 10 },
    { id: "kaleidoscope_cookery:scramble_egg_with_tomatoes_rice_bowl", ratio: 10 },
    { id: "kaleidoscope_cookery:fish_flavored_shredded_pork_rice_bowl", ratio: 10 },
    { id: "kaleidoscope_cookery:stir_fried_pork_with_peppers_rice_bowl", ratio: 10 },
    { id: "kaleidoscope_cookery:braised_beef_rice_bowl", ratio: 10 },
    { id: "kaleidoscope_cookery:stir_fried_beef_offal_rice_bowl", ratio: 10 },
    { id: "kaleidoscope_cookery:stuffed_tiger_skin_pepper", ratio: 10 },
    { id: "kaleidoscope_chinesefood:stir_fried_three_fresh_vegetables_rice", ratio: 10 },
    { id: "kaleidoscope_chinesefood:stir_fried_yellow_beef_rice", ratio: 10 },
    { id: "kaleidoscope_chinesefood:twice_cooked_pork_rice", ratio: 10 },
    { id: "kaleidoscope_chinesefood:sichuan_boiled_fish", ratio: 10 },
    { id: "kaleidoscope_chinesefood:sichuan_boiled_pork_slices", ratio: 10 },
    { id: "kaleidoscope_chinesefood:yellow_croaker_soup", ratio: 10 },
    { id: "kaleidoscope_chinesefood:stuffed_eggplant", ratio: 10 },
    { id: "kaleidoscope_chinesefood:sauerkraut_beef_noodles", ratio: 10 },
    { id: "kaleidoscope_chinesefood:beef_with_scrambled_eggs_rice", ratio: 10 },
    { id: "kaleidoscope_chinesefood:tomato_egg_noodles", ratio: 10 },
    { id: "kaleidoscope_chinesefood:pork_chili_noodles", ratio: 10 },
    { id: "kaleidoscope_nether:corn_carrot_pork_rib_soup", ratio: 10 },
];

const village_plains_prepared_food = [
    // Common: independently formed / portioned / ready-to-eat products
    { id: "farmersdelight:cabbage_rolls", ratio: 10 },
    { id: "kitchenkarrot:flower_cake", ratio: 10 },
    { id: "kitchenkarrot:seed_pie", ratio: 10 },
    { id: "kitchenkarrot:chinese_crepe", ratio: 10 },
    { id: "vanillacookbook:trail_mix", ratio: 10 },
    { id: "farm_and_charm:oat_pancake", ratio: 10 },
    { id: "brewery:sausage", ratio: 10 },
    { id: "veggiesdelight:cooked_vegetarian_patty", ratio: 10 },

    { id: "kitchenkarrot:rice_cake", ratio: 10 },
    { id: "farmersdelight:dumplings", ratio: 10 },
    { id: "kaleidoscope_cookery:shengjian_mantou", ratio: 10 },
    // { id: "kaleidoscope_cookery:zongzi", ratio: 10 },
    { id: "kaleidoscope_cookery:dumpling", ratio: 10 },
    { id: "kaleidoscope_cookery:baozi", ratio: 10 },
    { id: "kaleidoscope_cookery:mantou", ratio: 10 },
    { id: "kaleidoscope_cookery:cooked_meatball", ratio: 10 },
    { id: "youkaisfeasts:bun", ratio: 10 },
    { id: "youkaisfeasts:pork_rice_ball", ratio: 10 },
    { id: "rusticdelight:spring_rolls", ratio: 10 },
    { id: "rusticdelight:fried_dumplings", ratio: 10 },
    { id: "casualnessdelight:roast_gluten", ratio: 10 },
    { id: "fruitsdelight:pear_with_rock_sugar", ratio: 10 },
    { id: "kaleidoscope_chinesefood:sichuan_wonton", ratio: 10 },

    // Special foods whose identity is more strongly an independent prepared product
    { id: "minecraft:pumpkin_pie", ratio: 10 },
    { id: "casualnessdelight:quiche_lorraine", ratio: 10 },
    { id: "brewinandchewin:pizza", ratio: 10 },
    { id: "kitchenkarrot:feast_pizza", ratio: 10 },
    { id: "vanillacookbook:pizza", ratio: 10 },
    { id: "vintagedelight:cheese_pizza", ratio: 10 },
    { id: "vintagedelight:meat_pizza", ratio: 10 },
    { id: "veggiesdelight:vegan_pizza", ratio: 10 },
    { id: "veggiesdelight:zucchini_quiche", ratio: 10 },
    { id: "veggiesdelight:lasagna_slice", ratio: 10 },

    { id: "kaleidoscope_chinesefood:red_rice_roll", ratio: 10 },
    { id: "kaleidoscope_cookery:yakitori", ratio: 10 },
    { id: "kaleidoscope_cookery:candied_potato", ratio: 10 },
    { id: "veggiesdelight:turnip_cake", ratio: 10 },

    { id: "kaleidoscope_cookery:cold_cut_ham_slices", ratio: 10 },
    { id: "kaleidoscope_cookery:cold_roasted_meat", ratio: 10 },
];

const village_plains_dish = [
    // Higher-value / special European meals
    { id: "farmersdelight:onion_soup", ratio: 10 },
    { id: "farmersdelight:pumpkin_soup", ratio: 10 },
    { id: "farmersdelight:chicken_soup", ratio: 10 },
    { id: "farmersdelight:beef_stew", ratio: 10 },
    { id: "farmersdelight:stuffed_pumpkin", ratio: 10 },
    { id: "farmersdelight:shepherds_pie", ratio: 10 },
    { id: "farmersdelight:roast_chicken", ratio: 10 },
    { id: "farmersdelight:vegetable_noodles", ratio: 10 },
    { id: "farmersdelight:ratatouille", ratio: 10 },
    { id: "farm_and_charm:farmers_breakfast", ratio: 10 },
    { id: "moredelight:creamy_pasta_with_chicken_cuts", ratio: 10 },
    { id: "moredelight:creamy_pasta_with_ham", ratio: 10 },
    { id: "vintagedelight:cucumber_salad", ratio: 10 },
    { id: "culturaldelights:eggplant_parmesan", ratio: 10 },
    { id: "rusticdelight:bell_pepper_pasta", ratio: 10 },
    { id: "rusticdelight:bell_pepper_medley", ratio: 10 },
    { id: "veggiesdelight:garlic_chicken_stew", ratio: 10 },
    { id: "veggiesdelight:roasted_vegetables", ratio: 10 },
    { id: "veggiesdelight:stuffed_bellpeppers_block", ratio: 10 },
    { id: "corn_delight:cornbread_stuffing", ratio: 10 },
    { id: "corn_delight:corn_soup", ratio: 10 },
    { id: "veggiesdelight:cacciatore", ratio: 10 },
    { id: "veggiesdelight:lasagna_pan", ratio: 10 },
    { id: "veggiesdelight:garlic_baked_cod", ratio: 10 },
    { id: "veggiesdelight:turnip_beef_stew", ratio: 10 },

    // Higher-value / special Asian meals
    { id: "alexsmobsdelight:turtle_jelly", ratio: 10 },
    { id: "alexsmobsdelight:catfish_stew", ratio: 10 },
    { id: "alexsmobsdelight:turtle_meat_fried_rice", ratio: 10 },
    { id: "casualnessdelight:bobo_chicken", ratio: 10 },
    { id: "kaleidoscope_chinesefood:four_joy_meatballs", ratio: 10 },
    { id: "kaleidoscope_chinesefood:yellow_croaker_tofu_soup", ratio: 10 },
    { id: "kaleidoscope_cookery:spicy_blood_stew", ratio: 10 },
    { id: "kaleidoscope_cookery:spicy_rabbit_head", ratio: 10 },
    { id: "kaleidoscope_cookery:spicy_chicken", ratio: 10 },
    { id: "kaleidoscope_cookery:fried_caterpillar", ratio: 10 },
    { id: "kaleidoscope_cookery:four_joy_meatball_soup", ratio: 10 },
    { id: "kaleidoscope_cookery:braised_pork_ribs", ratio: 10 },
    { id: "kaleidoscope_cookery:buddha_jumps_over_the_wall", ratio: 10 },
    { id: "kaleidoscope_nether:luosifen", ratio: 10 },
    { id: "kaleidoscope_nether:pepper_pork_belly_chicken_soup", ratio: 10 },
    { id: "kaleidoscope_nether:couples_lung_slice", ratio: 10 },
    { id: "kaleidoscope_nether:braised_lion_head", ratio: 10 },
    { id: "youkaisfeasts:longevity_noodles", ratio: 10 },
    { id: "youkaisfeasts:tuscan_salmon", ratio: 10 },
    { id: "youkaisfeasts:lions_head", ratio: 10 },
    // { id: "youkaisfeasts:rice_powder_pork", ratio: 10 },
    { id: "youkaisfeasts:sauce_grilled_fish", ratio: 10 },
    { id: "vintagedelight:pickle_soup", ratio: 10 },
    { id: "vintagedelight:ghostly_chili", ratio: 10 },
    { id: "vintagedelight:pad_thai", ratio: 10 },
    { id: "fruitsdelight:orange_chicken", ratio: 10 },
    { id: "fruitsdelight:fig_chicken_stew", ratio: 10 },
    { id: "fruitsdelight:orange_marinated_pork", ratio: 10 },
    { id: "veggiesdelight:potato_noodles", ratio: 10 },
    { id: "veggiesdelight:rice_and_vegetables", ratio: 10 },
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
const village_plains_everyone_staple = [
    { groupName: "common",  groupWeight: 100, min: 2, max: 3, items: village_plains_staple },
]

const village_plains_smallholder_farming_produce = [
    { groupName: "common",  groupWeight: 70, min: 2, max: 3, items: village_plains_common_produce },
    { groupName: "varied",  groupWeight: 25, min: 2, max: 3, items: village_plains_varied_produce },
    { groupName: "special", groupWeight: 5,  min: 2, max: 3, items: village_plains_special_produce },
]

const village_plains_smallholder_life_produce = [
    { groupName: "common",  groupWeight: 65, min: 2, max: 3, items: village_plains_common_produce },
    { groupName: "varied",  groupWeight: 30, min: 2, max: 3, items: village_plains_varied_produce },
    { groupName: "special", groupWeight: 5,  min: 2, max: 3, items: village_plains_special_produce },
]

const village_plains_large_scale_farming_produce = [
    { groupName: "common",  groupWeight: 30, min: 2, max: 3, items: village_plains_common_produce },
    { groupName: "varied",  groupWeight: 30, min: 2, max: 3, items: village_plains_varied_produce },
    { groupName: "special", groupWeight: 30, min: 2, max: 3, items: village_plains_special_produce },
]

const village_plains_large_scale_farm_life_produce = [
    { groupName: "common",  groupWeight: 40, min: 2, max: 3, items: village_plains_common_produce },
    { groupName: "varied",  groupWeight: 40, min: 2, max: 3, items: village_plains_varied_produce },
    { groupName: "special", groupWeight: 20, min: 2, max: 3, items: village_plains_special_produce },
]

const village_plains_non_farm_households_produce = [
    { groupName: "common",  groupWeight: 45, min: 2, max: 3, items: village_plains_common_produce },
    { groupName: "varied",  groupWeight: 45, min: 2, max: 3, items: village_plains_varied_produce },
    { groupName: "special", groupWeight: 10, min: 2, max: 3, items: village_plains_special_produce },
]



const village_plains_smallholder_farming_food = [
    { groupName: "simple_food",    groupWeight: 0, min: 1, max: 2, items: village_plains_simple_food },
    { groupName: "prepared_food",  groupWeight: 0 , min: 1, max: 2, items: village_plains_prepared_food },
    { groupName: "preserved_food", groupWeight: 0, min: 1, max: 2, items: village_plains_preserved_food },
    { groupName: "dish",           groupWeight: 0 , min: 1, max: 2, items: village_plains_dish },
]

const village_plains_smallholder_life_food = [
    { groupName: "simple_food",    groupWeight: 30, min: 1, max: 2, items: village_plains_simple_food },
    { groupName: "prepared_food",  groupWeight: 20, min: 1, max: 2, items: village_plains_prepared_food },
    { groupName: "preserved_food", groupWeight: 35, min: 1, max: 2, items: village_plains_preserved_food },
    { groupName: "dish",           groupWeight: 15, min: 1, max: 2, items: village_plains_dish },
]

const village_plains_large_scale_farming_food = [
    { groupName: "simple_food",    groupWeight: 45, min: 1, max: 2, items: village_plains_simple_food },
    { groupName: "prepared_food",  groupWeight: 30, min: 1, max: 2, items: village_plains_prepared_food },
    { groupName: "preserved_food", groupWeight: 25, min: 1, max: 2, items: village_plains_preserved_food },
    { groupName: "dish",           groupWeight: 0 , min: 1, max: 2, items: village_plains_dish },
]

const village_plains_large_scale_farm_life_food = [
    { groupName: "simple_food",    groupWeight: 30, min: 1, max: 2, items: village_plains_simple_food },
    { groupName: "prepared_food",  groupWeight: 10, min: 1, max: 2, items: village_plains_prepared_food },
    { groupName: "preserved_food", groupWeight: 10, min: 1, max: 2, items: village_plains_preserved_food },
    { groupName: "dish",           groupWeight: 50, min: 1, max: 2, items: village_plains_dish },
]

const village_plains_non_farm_households_food = [
    { groupName: "simple_food",    groupWeight: 20, min: 1, max: 2, items: village_plains_simple_food },
    { groupName: "prepared_food",  groupWeight: 50, min: 1, max: 2, items: village_plains_prepared_food },
    { groupName: "preserved_food", groupWeight: 0, min: 1, max: 2, items: village_plains_preserved_food },
    { groupName: "dish",           groupWeight: 30, min: 1, max: 2, items: village_plains_dish },
]

// =================================================================
// 事件注册区域
// =================================================================

const village_plains_bakery_content = [

    [village_plains_bakery_products, 2, 2],
    [village_plains_bakery_baking_material, 2, 3],
    [village_smith_small_iron_knife, 1, 1],
];


const village_plains_smallholder_farming_content = [
    [village_plains_everyone_staple, 2, 3],
    [village_plains_smallholder_farming_produce, 1, 2],
    [village_plains_smallholder_farming_food, 0, 0],
    [village_plains_seed_bag, 1, 1],
    [village_profession_item, 1, 1],
    [village_cooking_equipment_less, 0, 0],
]

const village_plains_smallholder_life_content = [
    [village_plains_everyone_staple, 1, 1],
    [village_plains_smallholder_life_produce, 1, 2],
    [village_plains_smallholder_life_food, 1, 2],
    [village_plains_seed_bag, 1, 1],
    [village_profession_item, 1, 1],
    [village_cooking_equipment_less, 1, 1],
    [village_plains_drinks, 1, 1],
]

const village_plains_large_scale_farming_content = [
    [village_plains_everyone_staple, 2, 3],
    [village_plains_large_scale_farming_produce, 2, 3],
    [village_plains_large_scale_farming_food, 1, 2],
    [village_plains_seed_bag, 1, 1],
    [village_profession_item, 1, 1],
    [village_cooking_equipment_less, 1, 1],
    [village_plains_essential_wealth_equipment, 1, 1],
]

const village_plains_large_scale_farm_life_content = [
    [village_plains_everyone_staple, 1, 2],
    [village_plains_large_scale_farm_life_produce, 1, 2],
    [village_plains_large_scale_farm_life_food, 2, 3],
    [village_profession_item, 1, 1],
    [village_cooking_equipment_more, 1, 1],
    [village_plains_drinks, 1, 1],
    [village_recipe_item, 1, 1],
    [village_plains_essential_wealth_equipment, 1, 1],
]

const village_plains_non_farm_households_content = [
    [village_plains_everyone_staple, 0, 0],
    [village_plains_non_farm_households_produce, 2, 3],
    [village_plains_non_farm_households_food, 1, 2],
    [village_profession_item, 1, 1],
    [village_cooking_equipment_more, 1, 1],
    [village_plains_drinks, 1, 1],
    [village_recipe_item, 1, 1],
    [village_plains_essential_wealth_equipment, 1, 1],
]


const loot_village_plains_house = [
    // Farm households — 10
    [village_plains_smallholder_farming_content, 3],
    [village_plains_smallholder_life_content, 2],
    [village_plains_large_scale_farming_content, 2],
    [village_plains_large_scale_farm_life_content, 1],
    [village_plains_non_farm_households_content, 2],

    // Specialized households — 2
    [carpenterData.plains, 1],
    [village_plains_bakery_content, 1],
]