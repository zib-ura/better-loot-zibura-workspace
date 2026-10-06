const food_supply = [
    {
        groupName: "common_food",
        groupWeight: 70,
        min: 2, max: 3,
        items: [
            // 1. 南瓜 (Pumpkin) - 有 seeds
            { reference: "lootjs:pumpkin_seeds", ratio: 5 },
            { reference: "lootjs:pumpkin_slice", ratio: 10 },
            { reference: "lootjs:pumpkin_slice_and_pumpkin_slice_block", ratio: 10 },

            // 2. 西瓜 (Melon) - 有 seeds
            { reference: "lootjs:melon_seeds", ratio: 5 },
            { reference: "lootjs:melon_slice", ratio: 10 },
            { reference: "lootjs:melon_slice_and_melon_slice_block", ratio: 10 },

            // 3. 苹果 (Apple) - 有 sapling
            { reference: "lootjs:apple_sapling", ratio: 5 },
            { reference: "lootjs:apple", ratio: 10 },
            { reference: "lootjs:apple_and_apple_block", ratio: 10 },

            // 4. 甜菜根 (Beetroot) - 有 seeds
            { reference: "lootjs:beetroot_seeds", ratio: 5 },
            { reference: "lootjs:beetroot", ratio: 10 },
            { reference: "lootjs:beetroot_and_beetroot_block", ratio: 10 },

            // 5. 棕色蘑菇 (Brown Mushroom) - 无 seed
            { reference: "lootjs:brown_mushroom", ratio: 15 },
            { reference: "lootjs:brown_mushroom_and_brown_mushroom_block", ratio: 10 },

            // 6. 红色蘑菇 (Red Mushroom) - 无 seed
            { reference: "lootjs:red_mushroom", ratio: 15 },
            { reference: "lootjs:red_mushroom_and_red_mushroom_block", ratio: 10 },

            // 7. 胡萝卜 (Carrot) - 无 seed
            { reference: "lootjs:carrot", ratio: 15 },
            { reference: "lootjs:carrot_and_carrot_block", ratio: 10 },

            // 8. 土豆 (Potato) - 无 seed
            { reference: "lootjs:potato", ratio: 15 },
            { reference: "lootjs:potato_and_potato_block", ratio: 10 },

            // 9. 卷心菜 (Cabbage) - 有 seeds
            { reference: "lootjs:cabbage_seeds", ratio: 5 },
            { reference: "lootjs:cabbage", ratio: 10 },
            { reference: "lootjs:cabbage_and_cabbage_block", ratio: 10 },

            // 10. 生菜 (Lettuce) - 有 seeds
            { reference: "lootjs:lettuce_seeds", ratio: 5 },
            { reference: "lootjs:lettuce", ratio: 10 },
            { reference: "lootjs:lettuce_and_lettuce_block", ratio: 10 },

            // 11. 洋葱 (Onion) - 无 seed
            { reference: "lootjs:onion", ratio: 15 },
            { reference: "lootjs:onion_and_onion_block", ratio: 10 },

            // 13. 番茄 (Tomato) - 有 seeds
            { reference: "lootjs:tomato_seeds", ratio: 5 },
            { reference: "lootjs:tomato", ratio: 10 },
            { reference: "lootjs:tomato_and_tomato_block", ratio: 10 },

            // 14. 水稻/大米 (Rice) - 无 seed
            { reference: "lootjs:rice", ratio: 15 },
            { reference: "lootjs:rice_and_rice_block", ratio: 10 },

            // 15. 小麦 (Wheat) - 有 seeds
            { reference: "lootjs:wheat_seeds", ratio: 5 },
            { reference: "lootjs:wheat", ratio: 10 },
            { reference: "lootjs:wheat_and_wheat_block", ratio: 10 },

            // 16. 辣椒 (Pepper) - 有 seeds
            { reference: "lootjs:pepper_seeds", ratio: 5 },
            { reference: "lootjs:pepper", ratio: 10 },
            { reference: "lootjs:pepper_and_pepper_block", ratio: 10 },


        ]
    },

    {
        groupName: "rare_food",
        groupWeight: 30,
        min: 2, max: 3,
        items: [


            // 甜椒 (Bell Pepper)
            { reference: "lootjs:bell_pepper_seeds", ratio: 5 },
            { reference: "lootjs:bell_pepper_yellow", ratio: 10 },
            { reference: "lootjs:bell_pepper_yellow_and_bell_pepper_yellow_block", ratio: 10 },

            // 大白菜 (Chinese Cabbage)
            { reference: "lootjs:chinese_cabbage_seeds", ratio: 5 },
            { reference: "lootjs:chinese_cabbage", ratio: 10 },
            { reference: "lootjs:chinese_cabbage_and_chinese_cabbage_block", ratio: 10 },

            // 玉米 (Corn)
            { reference: "lootjs:corn_seeds", ratio: 5 },
            { reference: "lootjs:corn", ratio: 10 },
            { reference: "lootjs:corn_and_corn_block", ratio: 10 },

            // 黄瓜 (Cucumber)
            { reference: "lootjs:cucumber_seeds", ratio: 5 },
            { reference: "lootjs:cucumber", ratio: 10 },
            { reference: "lootjs:cucumber_and_cucumber_block", ratio: 10 },

            // 茄子 (Eggplant)
            { reference: "lootjs:eggplant_seeds", ratio: 5 },
            { reference: "lootjs:eggplant", ratio: 10 },
            { reference: "lootjs:eggplant_and_eggplant_block", ratio: 10 },

            // 茴香 (Fennel)
            { reference: "lootjs:fennel_seeds", ratio: 5 },
            { reference: "lootjs:fennel", ratio: 10 },
            { reference: "lootjs:fennel_and_fennel_block", ratio: 10 },

            // 韭菜 (Garlic Chive)
            { reference: "lootjs:garlic_chive_seeds", ratio: 5 },
            { reference: "lootjs:garlic_chive", ratio: 10 },
            { reference: "lootjs:garlic_chive_and_garlic_chive_block", ratio: 10 },

            // 韭黄/葱 (Green Onion)
            { reference: "lootjs:garlic_clove", ratio: 5 },
            { reference: "lootjs:garlic", ratio: 10 },
            { reference: "lootjs:garlic_and_garlic_block", ratio: 10 },

            // 西兰花 (Broccoli)
            { reference: "lootjs:broccoli_seeds", ratio: 5 },
            { reference: "lootjs:broccoli", ratio: 10 },
            { reference: "lootjs:broccoli_and_broccoli_block", ratio: 10 },

            // 菜花 (Cauliflower)
            { reference: "lootjs:cauliflower_seeds", ratio: 5 },
            { reference: "lootjs:cauliflower", ratio: 10 },
            { reference: "lootjs:cauliflower_and_cauliflower_block", ratio: 10 },

            // 芜菁/萝卜 (Turnip)
            { reference: "lootjs:turnip_seeds", ratio: 5 },
            { reference: "lootjs:turnip", ratio: 10 },
            { reference: "lootjs:turnip_and_turnip_block", ratio: 10 },

            // 西葫芦 (Zucchini)
            { reference: "lootjs:zucchini_seeds", ratio: 5 },
            { reference: "lootjs:zucchini", ratio: 10 },
            { reference: "lootjs:zucchini_and_zucchini_block", ratio: 10 },

            // 欧芹 (Parsley)
            { reference: "lootjs:parsley_seeds", ratio: 5 },
            { reference: "lootjs:parsley", ratio: 10 },
            { reference: "lootjs:parsley_and_parsley_block", ratio: 10 },

            // 大麦 (Barley)
            { reference: "lootjs:barley_seeds", ratio: 5 },
            { reference: "lootjs:barley", ratio: 10 },
            { reference: "lootjs:barley_and_barley_block", ratio: 10 },

            // 燕麦 (Oat)
            { reference: "lootjs:oat_seeds", ratio: 5 },
            { reference: "lootjs:oat", ratio: 10 },
            { reference: "lootjs:oat_and_oat_block", ratio: 10 },

            // 黄豆 (Soybean)
            { reference: "lootjs:soybean_seeds", ratio: 5 },
            { reference: "lootjs:soybean", ratio: 10 },
            { reference: "lootjs:soybean_and_soybean_block", ratio: 10 },

            // 亚麻 (Flax)
            { reference: "lootjs:flax_seeds", ratio: 5 },
            { reference: "lootjs:flax", ratio: 10 },
            { reference: "lootjs:flax_and_flax_block", ratio: 10 },

            // // 茶树 (Tea)
            // { reference: "lootjs:tea_seeds", ratio: 5 },
            // { reference: "lootjs:tea_leaves", ratio: 10 },

            // 黑葡萄 (Black Grape)
            { reference: "lootjs:black_grape_seeds", ratio: 5 },
            { reference: "lootjs:black_grape", ratio: 10 },
            { reference: "lootjs:black_grape_and_black_grape_block", ratio: 10 },

            // 白葡萄 (White Grape)
            { reference: "lootjs:white_grape_seeds", ratio: 5 },
            { reference: "lootjs:white_grape", ratio: 10 },
            { reference: "lootjs:white_grape_and_white_grape_block", ratio: 10 },

            // 红葡萄 (Red Grape)
            { reference: "lootjs:red_grape_seeds", ratio: 5 },
            { reference: "lootjs:red_grape", ratio: 10 },
            { reference: "lootjs:red_grape_and_red_grape_block", ratio: 10 },

            // 哈密瓜 (Hamimelon)
            { reference: "lootjs:hamimelon_seeds", ratio: 5 },
            { reference: "lootjs:hamimelon_slice", ratio: 10 },
            { reference: "lootjs:hamimelon_slice_and_hamimelon_block", ratio: 10 },

            // 柠檬 (Lemon)
            { reference: "lootjs:lemon_seeds", ratio: 5 },
            { reference: "lootjs:lemon", ratio: 10 },
            { reference: "lootjs:lemon_and_lemon_block", ratio: 10 },

            // 草莓 (Strawberry)
            { reference: "lootjs:strawberry_seeds", ratio: 5 },
            { reference: "lootjs:strawberry", ratio: 10 },
            { reference: "lootjs:strawberry_and_strawberry_block", ratio: 10 },

            // 发光浆果 (Glowberry)
            { reference: "lootjs:glowberry_seeds", ratio: 5 },
            { reference: "lootjs:glowberry", ratio: 10 },
            { reference: "lootjs:glowberry_and_glowberry_block", ratio: 10 },

            // 牛油果 (Avocado)
            { reference: "lootjs:avocado_sapling", ratio: 5 },
            { reference: "lootjs:avocado", ratio: 10 },
            { reference: "lootjs:avocado_and_avocado_block", ratio: 10 },

            // 杨梅 (Bayberry)
            { reference: "lootjs:bayberry_sapling", ratio: 5 },
            { reference: "lootjs:bayberry", ratio: 10 },
            { reference: "lootjs:bayberry_and_bayberry_block", ratio: 10 },

            // 榴莲 (Durian)
            { reference: "lootjs:durian_sapling", ratio: 5 },
            { reference: "lootjs:durian_flesh", ratio: 10 },
            { reference: "lootjs:durian_flesh_and_durian_block", ratio: 10 },

            // 无花果 (Fig)
            { reference: "lootjs:fig_sapling", ratio: 5 },
            { reference: "lootjs:fig", ratio: 10 },
            { reference: "lootjs:fig_and_fig_block", ratio: 10 },

            // 山楂 (Hawberry)
            { reference: "lootjs:hawberry_sapling", ratio: 5 },
            { reference: "lootjs:hawberry", ratio: 10 },
            { reference: "lootjs:hawberry_and_hawberry_block", ratio: 10 },

            // 猕猴桃 (Kiwi)
            { reference: "lootjs:kiwi_sapling", ratio: 5 },
            { reference: "lootjs:kiwi", ratio: 10 },
            { reference: "lootjs:kiwi_and_kiwi_block", ratio: 10 },

            // 青柠 (Lime)
            { reference: "lootjs:lime_sapling", ratio: 5 },
            { reference: "lootjs:lime", ratio: 10 },
            { reference: "lootjs:lime_and_lime_block", ratio: 10 },

            // 荔枝 (Lychee)
            { reference: "lootjs:lychee_sapling", ratio: 5 },
            { reference: "lootjs:lychee", ratio: 10 },
            { reference: "lootjs:lychee_and_lychee_block", ratio: 10 },

            // 芒果 (Mango)
            { reference: "lootjs:mango_sapling", ratio: 5 },
            { reference: "lootjs:mango", ratio: 10 },
            { reference: "lootjs:mango_and_mango_block", ratio: 10 },

            // 山竹 (Mangosteen)
            { reference: "lootjs:mangosteen_sapling", ratio: 5 },
            { reference: "lootjs:mangosteen", ratio: 10 },
            { reference: "lootjs:mangosteen_and_mangosteen_block", ratio: 10 },

            // 橙子 (Orange)
            { reference: "lootjs:orange_sapling", ratio: 5 },
            { reference: "lootjs:orange", ratio: 10 },
            { reference: "lootjs:orange_and_orange_block", ratio: 10 },

            // 桃子 (Peach)
            { reference: "lootjs:peach_sapling", ratio: 5 },
            { reference: "lootjs:peach", ratio: 10 },
            { reference: "lootjs:peach_and_peach_block", ratio: 10 },

            // 梨 (Pear)
            { reference: "lootjs:pear_sapling", ratio: 5 },
            { reference: "lootjs:pear", ratio: 10 },
            { reference: "lootjs:pear_and_pear_block", ratio: 10 },

            // 柿子 (Persimmon)
            { reference: "lootjs:persimmon_sapling", ratio: 5 },
            { reference: "lootjs:persimmon", ratio: 10 },
            { reference: "lootjs:persimmon_and_persimmon_block", ratio: 10 },

            // 菠萝 (Pineapple)
            { reference: "lootjs:pineapple_sapling", ratio: 5 },
            { reference: "lootjs:pineapple", ratio: 10 },
            { reference: "lootjs:pineapple_and_pineapple_block", ratio: 10 },

            // 椰枣 (Date)
            { reference: "lootjs:date_sapling", ratio: 5 },
            { reference: "lootjs:date", ratio: 10 },
            { reference: "lootjs:date_and_date_block", ratio: 10 },

            // 香蕉 (Banana)
            { reference: "lootjs:banana_frond", ratio: 5 },
            { reference: "lootjs:banana", ratio: 10 },
            { reference: "lootjs:banana_and_banana_block", ratio: 10 },
        


            // // 毒土豆 (Poisonous Potato)
            // { reference: "lootjs:poisonous_potato", ratio: 15 },
            // { reference: "lootjs:poisonous_potato_and_poisonous_potato_block", ratio: 10 },

            // 鹰嘴豆 (Chickpea)
            { reference: "lootjs:chickpea", ratio: 15 },
            { reference: "lootjs:chickpea_and_chickpea_block", ratio: 10 },

            // 红豆 (Redbean)
            { reference: "lootjs:redbean", ratio: 15 },
            { reference: "lootjs:redbean_and_redbean_block", ratio: 10 },

            // 水稻/大米 (Rice)
            { reference: "lootjs:rice", ratio: 15 },
            { reference: "lootjs:rice_and_rice_block", ratio: 10 },

            // 红薯 (Sweet Potato)
            { reference: "lootjs:sweet_potato", ratio: 15 },
            { reference: "lootjs:sweet_potato_and_sweet_potato_block", ratio: 10 },

            // 花生 (Peanut)
            { reference: "lootjs:peanut", ratio: 15 },
            { reference: "lootjs:peanut_and_peanut_block", ratio: 10 },

            // 蓝莓 (Blueberry)
            { reference: "lootjs:blueberry", ratio: 15 },
            { reference: "lootjs:blueberry_and_blueberry_block", ratio: 10 },

            // 樱桃 (Cherry)
            { reference: "lootjs:cherry", ratio: 15 },
            { reference: "lootjs:cherry_and_cherry_block", ratio: 10 },

            // 蔓越莓 (Cranberry)
            { reference: "lootjs:cranberry", ratio: 15 },
            { reference: "lootjs:cranberry_and_cranberry_block", ratio: 10 },

            // 刺玫果 (Rosehip)
            { reference: "lootjs:rosehip", ratio: 15 },
            { reference: "lootjs:rosehip_and_rosehip_block", ratio: 10 },

            // 可可豆 (Cocoa Beans)
            { reference: "lootjs:cocoabeans", ratio: 15 },
            { reference: "lootjs:cocoabeans_and_cocoabeans_block", ratio: 10 },

            // 生咖啡豆 (Raw Coffee Beans)
            { reference: "lootjs:raw_coffee_beans", ratio: 15 },
            { reference: "lootjs:raw_coffee_beans_and_raw_coffee_beans_block", ratio: 10 },

            // 熟咖啡豆 (Roasted Coffee Beans)
            { reference: "lootjs:roasted_coffee_beans", ratio: 15 },
            { reference: "lootjs:roasted_coffee_beans_and_roasted_coffee_beans_block", ratio: 10 },

            // 啤酒花 (Hops)
            { reference: "lootjs:hops", ratio: 25 },

            // 棉花 (Cotton)
            { reference: "lootjs:cotton", ratio: 15 },
            { reference: "lootjs:cotton_and_cotton_block", ratio: 10 },

            // 甘蔗 (Sugar Cane)
            { reference: "lootjs:sugar_cane", ratio: 25 },

            // 香草荚 (Vanilla Pods)
            { reference: "lootjs:vanilla_pods", ratio: 15 },
            { reference: "lootjs:vanilla_pods_and_vanilla_pods_block", ratio: 10 },

            // 橡果 (Acorn)
            { reference: "lootjs:acorn", ratio: 15 },
            { reference: "lootjs:acorn_and_acorn_block", ratio: 10 },

            // 松果 (Pinecone)
            { reference: "lootjs:pinecone", ratio: 15 },
            { reference: "lootjs:pinecone_and_pinecone_block", ratio: 10 },

            // 海带 (Kelp)
            { reference: "lootjs:kelp", ratio: 15 },
            { reference: "lootjs:kelp_and_dried_kelp_block", ratio: 10 },
        ]
    },
];

// =================================================================
// 事件注册区域
// =================================================================
const food_supply_content = [
    [food_supply, 4, 5],
];

const loot_food_supply = [
    [food_supply_content, 1],
];