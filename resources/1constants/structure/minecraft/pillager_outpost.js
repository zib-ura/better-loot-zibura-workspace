const pillager_outpost_Special = [
    {
        groupName: "Combat Gear",
        groupWeight: 30,
        min: 1, max: 1,  damage: [0.2, 0.4],
        items: [
            { id: "minecraft:crossbow", ratio: 10 },
            { id: "minecraft:iron_axe", ratio: 10 },
        ]
    },
];

const pillager_outpost_Supplies = [
    // =================================================================
    // GROUP: Food
    // =================================================================
    {
        groupName: "canned",
        groupWeight: 30,
        min: 1, max: 2,
        items: [
            { id: "rationcraft:tea_bag", ratio: 10 },
            { id: "rationcraft:sweetberry_gum", ratio: 10 },
            { id: "rationcraft:sugar_candy", ratio: 10 },
            { id: "rationcraft:scho_ka_kola", ratio: 10 },
            { id: "rationcraft:salted_pork", ratio: 10 },
            { id: "rationcraft:roasted_sausage", ratio: 10 },
            { id: "rationcraft:package_of_sugar_candy", ratio: 10 },
            { id: "rationcraft:package_of_hardtack", ratio: 10 },
            // { id: "rationcraft:open_rabit_stew", ratio: 10 },
            // { id: "rationcraft:open_potato", ratio: 10 },
            // { id: "rationcraft:open_mutton", ratio: 10 },
            // { id: "rationcraft:open_fish", ratio: 10 },
            // { id: "rationcraft:open_cookies", ratio: 10 },
            // { id: "rationcraft:open_carrots", ratio: 10 },
            // { id: "rationcraft:open_cannedbreaded_ham", ratio: 10 },
            // { id: "rationcraft:open_canned_rabbit", ratio: 10 },
            // { id: "rationcraft:open_canned_pumpkin_pie", ratio: 10 },
            // { id: "rationcraft:open_canned_pork", ratio: 10 },
            // { id: "rationcraft:open_canned_mushrooms", ratio: 10 },
            // // { id: "rationcraft:open_canned_melon", ratio: 10 },
            // { id: "rationcraft:open_canned_chicken", ratio: 10 },
            // { id: "rationcraft:open_canned_bread", ratio: 10 },
            // { id: "rationcraft:open_canned_beets", ratio: 10 },
            // { id: "rationcraft:open_canned_beef", ratio: 10 },
            // { id: "rationcraft:open_canned_apples", ratio: 10 },
            // // { id: "rationcraft:open_can_of_condensed_milk", ratio: 10 },
            // { id: "rationcraft:open_cake", ratio: 10 },
            // { id: "rationcraft:open_breaded_fish", ratio: 10 },
            // { id: "rationcraft:open_borscht", ratio: 10 },
            { id: "rationcraft:milk_scho_ka_kola", ratio: 10 },
            // { id: "rationcraft:iron_cup", ratio: 10 },
            { id: "rationcraft:instant_coffee", ratio: 10 },
            // { id: "rationcraft:iced_tea", ratio: 10 },
            // { id: "rationcraft:hot_water_cup", ratio: 10 },
            // { id: "rationcraft:hot_tea", ratio: 10 },
            { id: "rationcraft:hot_chocolate_mix", ratio: 10 },
            // { id: "rationcraft:hot_chocolate", ratio: 10 },
            { id: "rationcraft:hardtack", ratio: 10 },
            { id: "rationcraft:glowberry_gum", ratio: 10 },
            { id: "rationcraft:dummy", ratio: 10 },
            { id: "rationcraft:dry_sausage", ratio: 10 },
            // { id: "rationcraft:covfefe", ratio: 10 },
            { id: "rationcraft:corned_beef", ratio: 10 },
            { id: "rationcraft:citrus_drink", ratio: 10 },
            { id: "rationcraft:citrus_beverage_base", ratio: 10 },
            { id: "rationcraft:canned_whole_rabbit", ratio: 10 },
            { id: "rationcraft:canned_whole_chicken", ratio: 10 },
            { id: "rationcraft:canned_rabbit_stew", ratio: 10 },
            { id: "rationcraft:canned_pumpkin_pie_mix", ratio: 10 },
            { id: "rationcraft:canned_potato", ratio: 10 },
            { id: "rationcraft:canned_pork", ratio: 10 },
            { id: "rationcraft:canned_mutton", ratio: 10 },
            { id: "rationcraft:canned_mushrooms", ratio: 10 },
            { id: "rationcraft:canned_melon", ratio: 10 },
            { id: "rationcraft:canned_fish", ratio: 10 },
            { id: "rationcraft:canned_cookies", ratio: 10 },
            { id: "rationcraft:canned_carrots", ratio: 10 },
            { id: "rationcraft:canned_cake", ratio: 10 },
            { id: "rationcraft:canned_breaded_ham", ratio: 10 },
            { id: "rationcraft:canned_breaded_fish", ratio: 10 },
            { id: "rationcraft:canned_bread", ratio: 10 },
            { id: "rationcraft:canned_borscht", ratio: 10 },
            { id: "rationcraft:canned_beets", ratio: 10 },
            { id: "rationcraft:canned_beef", ratio: 10 },
            { id: "rationcraft:canned_apple_slices", ratio: 10 },
            // { id: "rationcraft:can_of_condensed_milk", ratio: 10 }        

            { id: "kitchenkarrot:canned_sweet_berry_milk", ratio: 10 },
            { id: "kitchenkarrot:canned_pork_beetroot", ratio: 10 },
            { id: "kitchenkarrot:canned_mutton_pumpkin", ratio: 10 },
            { id: "kitchenkarrot:canned_candied_apple", ratio: 10 },
            { id: "kitchenkarrot:canned_beef_potato", ratio: 10 },
            
            { id: "youkaisfeasts:canned_flesh", ratio: 10 },
            { id: "kitchenkarrot:pillager_pie", ratio: 10 },

        ]
    },

    {
        groupName: "cooked_meat",
        groupWeight: 60,
        min: 2, max: 3,
        items: [
            { id: "minecraft:cooked_beef", ratio: 10 },
            { id: "minecraft:cooked_chicken", ratio: 10 },
            { id: "minecraft:cooked_mutton", ratio: 10 },
            { id: "minecraft:cooked_porkchop", ratio: 10 },
            // { id: "minecraft:cooked_cod", ratio: 10 },
            // { id: "minecraft:cooked_salmon", ratio: 10 },
            { id: "youkaisfeasts:cooked_flesh", ratio: 10 },



        ]
    },
];

const pillager_outpost_Treasure = [
    // =================================================================
    // GROUP: treasure
    // =================================================================
    {
        groupName: "Treasure",
        groupWeight: 30,
        min: 2, max: 3,
        items: [
            { id: "minecraft:emerald", ratio: 60 },
            { id: "minecraft:gold_ingot", ratio: 30 },
            { id: "minecraft:diamond", ratio: 10 },
        ]
    }
];

const pillager_outpost_Arrow = [
    {
        groupName: "Arrow",
        groupWeight: 30,
        min: 1, max: 3,
        items: [
            { id: "minecraft:arrow", ratio: 20 },
        ]
    }
];

const pillager_outpost_crate_of_hardtack = [
    {
        groupName: "crate_of_hardtack",
        groupWeight: 10,
        min: 1, max: 1,
        items: [
            { id: "rationcraft:crate_of_hardtack", ratio: 10 }
        ]
    },
    {
        groupName: "empty",
        groupWeight: 90,
        items: [
            { id: "empty" },
        ]
    },
]

const pillager_outpost_enchanted_book = [
    {
        groupName: "pillager",
        groupWeight: 20,
        min: 1, max: 1,
        items: [

            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:unbreaking"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:mending"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:quick_charge"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:piercing"] }, 
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:multishot"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["kaleidoscope_end:void_shot"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:ghasted"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:gravity"] },
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:power"] },
        ]
    },
    {
        groupName: "empty",
        groupWeight: 80,
        items: [
            { id: "empty" },
        ]
    },
];

const pillager_outpost_camera = [
    {
        groupName: "camera",
        groupWeight: 50,
        min: 1, max: 1, damage: [0.9, 0.9],
        items: [
            { id: "touhou_little_maid:camera", ratio: 10 }, 
        ]
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },
];

const pillager_outpost_goat_horn = [
    {
        groupName: "goat_horn",
        groupWeight: 50,
        min: 1, max: 1,
        // items: [
        //     { id: "minecraft:goat_horn", ratio: 10, jsonFunction: { "function": "minecraft:set_components", "components": { "minecraft:instrument": "minecraft:ponder_goat_horn" } } },
        //     { id: "minecraft:goat_horn", ratio: 10, jsonFunction: { "function": "minecraft:set_components", "components": { "minecraft:instrument": "minecraft:sing_goat_horn" } } },
        //     { id: "minecraft:goat_horn", ratio: 10, jsonFunction: { "function": "minecraft:set_components", "components": { "minecraft:instrument": "minecraft:seek_goat_horn" } } },
        //     { id: "minecraft:goat_horn", ratio: 10, jsonFunction: { "function": "minecraft:set_components", "components": { "minecraft:instrument": "minecraft:feel_goat_horn" } } },
        // ]

        items: [
            { id: "minecraft:goat_horn", ratio: 10, jsonFunction: { "function": "minecraft:set_instrument", "options": "#minecraft:regular_goat_horns" } },
        ]
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
// 事件注册区域
// =================================================================
const pillager_outpost_content = [
    [pillager_outpost_Treasure, 0, 1],
    [pillager_outpost_Special, 2, 3],
    [pillager_outpost_Supplies, 2, 3],
    [pillager_outpost_crate_of_hardtack, 1, 1],
    [pillager_outpost_enchanted_book, 1, 1],
    [pillager_outpost_camera, 1, 1],
    [food_supply, 1, 1],
    [pillager_outpost_goat_horn, 1, 1],
];

const loot_pillager_outpost = [
    [pillager_outpost_content, 1],
];