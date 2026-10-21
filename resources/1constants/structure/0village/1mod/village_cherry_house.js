const village_cherry_bakery_cooking_material = [
    {
        groupName: "cooking",
        groupWeight: 15,
        min: 1, max: 2,
        items: [].concat(
            basic_baking_material,
            [
                { reference: "lootjs:honey", ratio: 3 },
                { reference: "lootjs:honey_and_honey_block", ratio: 2 },

                { reference: "lootjs:redbean", ratio: 15 },
                { reference: "lootjs:redbean_and_redbean_block", ratio: 10 },

                { reference: "lootjs:soybean", ratio: 15 },
                { reference: "lootjs:soybean_and_soybean_block", ratio: 10 },

                { reference: "lootjs:rice", ratio: 15 },
                { reference: "lootjs:rice_and_rice_block", ratio: 10 },
            ]
        )
    },

    // {
    //     groupName: "cherry_jam",
    //     groupWeight: 15,
    //     min: 1, max: 1,
    //     items: [
    //         { id: "vintagedelight:honey_mason_jar", ratio: 10 },
            
    //     ]
    // },
];

const village_cherry_plant = [
    {
        groupName: "plant",
        groupWeight: 15,
        min: 1, max: 2,
        items: [
            { id: "minecraft:cherry_sapling", ratio: 10 },
            { id: "minecraft:pink_petals", ratio: 10 },
            { id: "minecraft:cherry_leaves", ratio: 10 },

        ]
    },

];

const village_cherry_essential_wealth_equipment = [

    {
        groupName: "Villager Daily Essentials",
        groupWeight: 80, 
        min: 2, max: 3,
        items: [
            { reference:"lootjs:plate", ratio: 10 },
            { id: "supplementaries:sack", ratio: 10 },       
            { id: "farmersdelight:wooden_basket", ratio: 10 },       
            { id: "kaleidoscope_cookery:fruit_basket", ratio: 10 },   
        ]
    },

    {
        groupName: "Village Wealth",
        groupWeight: 20,
        min: 3, max: 4,
        items: [
            { id: "minecraft:emerald", ratio: 20 },
        ]
    },


];

const village_cherry_drinks = [
    {
        groupName: "tea",
        groupWeight: 25,
        min: 1, max: 1,
        items: [
            { id: "minecraft:potion", ratio: 10 , potion: "minecraft:water" }, 

            { id: "kaleidoscope_cookery:sakura_fubuki", ratio: 10 },
            { id: "youkaisfeasts:sakura_honey_tea", ratio: 10 },
            { id: "trailandtales_delight:cherry_petal_tea", ratio: 10 },
            { id: "vanillacookbook:cherry_blossom_tea", ratio: 10 },
        ]
    },

    {
        groupName: "wine",
        groupWeight: 25,
        min: 1, max: 1,
        items: [
            { id: "youkaisfeasts:suigei", ratio: 10 },
            { id: "youkaisfeasts:kappa_village", ratio: 10 },
            { id: "youkaisfeasts:hakutsuru", ratio: 10 },
            { id: "youkaisfeasts:kiku", ratio: 10 },
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


const village_cherry_dish = [
    {
        groupName: "cherry_cakes",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "rusticdelight:cherry_blossom_cheesecake", ratio: 10 },
            { id: "rusticdelight:cherry_blossom_pancakes", ratio: 10 },
            { id: "rusticdelight:honey_pancakes", ratio: 10 },
            { id: "neapolitan:adzuki_cake", ratio: 10 },

        ]
    },

    {
        groupName: "cherry_tarts_pies",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "trailandtales_delight:cherry_cheese_pie", ratio: 10 },
            { id: "trailandtales_delight:cherry_cake", ratio: 10 },

            { id: "youkaisfeasts:assorted_dango", ratio: 10 },
            { id: "youkaisfeasts:mitarashi_dango", ratio: 10 },
            { id: "youkaisfeasts:kinako_dango", ratio: 10 },

        ]
    },

    {
        groupName: "cherry_dessert_puddings_cold",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "youkaishomecoming:shaved_ice_over_rice", ratio: 10 },
            // { id: "youkaishomecoming:big_popsicle", ratio: 10 },
        ]
    },

    {
        groupName: "cherry_dessert_teatime_treats_slices",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "rusticdelight:cherry_blossom_cookie", ratio: 10 },
            { id: "rusticdelight:cherry_blossom_cheesecake_slice", ratio: 10 },
            { id: "trailandtales_delight:cherry_cake_slice", ratio: 10 },
            { id: "trailandtales_delight:cherry_cheese_pie_slice", ratio: 10 },
            { id: "trailandtales_delight:cherry_cheese_slice", ratio: 10 },
            { id: "rusticdelight:cherry_blossom_pancake", ratio: 10 },


            { id: "farmersdelight:honey_cookie", ratio: 2 },
            { id: "vanillacookbook:honey_cookie", ratio: 2 },
            { id: "vanillacookbook:honey_pancake", ratio: 2 },
            { id: "vanillacookbook:honey_candy", ratio: 2 },
            { id: "rusticdelight:honey_pancake", ratio: 2 },

            { id: "kitchenkarrot:honey_brulee", ratio: 2 },

        ]
    },

    {
        groupName: "bread",
        groupWeight: 15,
        min: 2, max: 3,
        items: [
            { id: "youkaisfeasts:mochi", ratio: 10 },
            { id: "youkaisfeasts:yakumo_inari", ratio: 10 },
            { id: "youkaisfeasts:sekibankiyaki", ratio: 10 },
            { id: "youkaisfeasts:senbei", ratio: 10 },
            { id: "youkaisfeasts:onigili", ratio: 10 },
            { id: "youkaisfeasts:yashouma_dango", ratio: 10 },
            { id: "youkaisfeasts:matcha_mochi", ratio: 10 },
            { id: "youkaisfeasts:tsukimi_dango", ratio: 10 },

            { id: "rusticdelight:cherry_blossom_roll", ratio: 10 },
            { id: "youkaisfeasts:sakura_mochi", ratio: 10 },
        ]
    },

];

// =================================================================
// 事件注册区域
// =================================================================
const village_cherry_house_content = [
    [village_profession_item, 1, 1],
    [village_cherry_bakery_cooking_material, 1, 2],
    [village_cherry_plant, 1, 1],
    [village_cherry_essential_wealth_equipment, 1, 1],
    // [village_cooking_equipment_less, 1, 1],
    [village_cherry_drinks, 1, 1],
    [village_cherry_dish, 2, 2],
];

const loot_village_cherry_house = [
    [village_cherry_house_content, 9],
    [carpenter_cherry, 1],
];