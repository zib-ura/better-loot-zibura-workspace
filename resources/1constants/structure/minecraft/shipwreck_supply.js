// const shipwreck_supply_crops = [
//     // =================================================================
//     // 组 1: 新大陆作物与种子 (New World Crops & Seeds)
//     // 模拟从远方土地带回的奇异植物
//     // =================================================================
//     {
//         groupName: "common",
//         groupWeight: 60,
//         min: 2, max: 3,
//         items: [
//             { reference: "lootjs:potato_and_potato_block", ratio: 10 },
//             { reference: "lootjs:carrot_and_carrot_block", ratio: 10 },
//             { reference: "lootjs:beetroot_and_beetroot_block", ratio: 10 },
//             { reference: "lootjs:onion_and_onion_block", ratio: 10 },
//             { reference: "lootjs:cabbage_and_cabbage_block", ratio: 10 },

//             { reference: "lootjs:cod_and_cod_block", ratio: 10 },
//             { reference: "lootjs:salmon_and_salmon_block", ratio: 10 },

//             { id: "rationcraft:crate_of_hardtack", ratio: 5 },
//             { id: "rationcraft:salted_pork", ratio: 10 },
//             { reference: "lootjs:poisonous_potato_and_poisonous_potato_block", ratio: 10 },
//             { id: "kitchenkarrot:rum", ratio: 10 },
//             { id: "brewinandchewin:flaxen_cheese_wheel", ratio: 10 },

//         ]
//     },

//     {
//         groupName: "rare",
//         groupWeight: 30,
//         min: 2, max: 3,
//         items: [
//             // --- 香料与调料 ---
//             { id: "barbequesdelight:chili_powder", ratio: 3 },
//             { id: "barbequesdelight:pepper_powder", ratio: 3 },
//             { id: "barbequesdelight:cumin_powder", ratio: 3 },

//             { id: "minecraft:cocoa_beans", ratio: 10 },
//             { id: "minecraft:sugar_cane", ratio: 10 },
//             { id: "kaleidoscope_cookery:red_chili", ratio: 10 },
//             { id: "farm_and_charm:kernels", ratio: 10 },
//             { id: "rusticdelight:cotton_seeds", ratio: 10 },            
//             { id: "youkaisfeasts:tea_seeds", ratio: 10 },            
//             { id: "rusticdelight:coffee_beans", ratio: 10 },            


//         ]
//     },
//     // // =================================================================
//     // // 组 3: 压舱货与补给 (Ballast & General Supplies)
//     // // 船上携带的普通补给和资源
//     // // =================================================================
//     // {
//     //     groupName: "Ballast & General Supplies",
//     //     groupWeight: 30,
//     //     min: 2, max: 6,
//     //     items: [
//     //         { id: "minecraft:paper", ratio: 8 },
//     //         { id: "minecraft:glass_bottle", ratio: 10 },
//     //         { id: "minecraft:string", ratio: 12 },
//     //         { id: "minecraft:lantern", ratio: 5 },
//     //         { id: "minecraft:coal", ratio: 8 },
//     //         { id: "farmersdelight:rope", ratio: 10 },
//     //         { id: "farmersdelight:canvas", ratio: 8 },      // 帆布
//     //     ]
//     // }
// ];



const shipwreck_supply_provisions = [
    {
        groupName: "staple_foods", // 基础主食与谷物
        groupWeight: 50,
        min: 2, max: 4,
        items: [
            { reference: "lootjs:wheat_and_hay_block", ratio: 5 },
            { reference: "lootjs:wheat", ratio: 20 },
            { reference: "lootjs:flour_and_flour_block", ratio: 5 },
            { reference: "lootjs:flour", ratio: 20 },
            { reference: "lootjs:rice_and_rice_block", ratio: 5 },
            { reference: "lootjs:rice", ratio: 20 },
            { reference: "lootjs:bread_and_bread_block", ratio: 5 },
            { reference: "lootjs:bread", ratio: 20 },
            { reference: "lootjs:oat_and_oat_block", ratio: 5 },
            { reference: "lootjs:oat", ratio: 20 },
            { reference: "lootjs:potato_and_potato_block", ratio: 5 },
            { reference: "lootjs:potato", ratio: 20 },
            { reference: "lootjs:sweet_potato_and_sweet_potato_block", ratio: 5 },
            { reference: "lootjs:sweet_potato", ratio: 20 },
            { reference: "lootjs:pumpkin_and_pumpkin_block", ratio: 5 },
            { reference: "lootjs:pumpkin", ratio: 20 },
            // { reference: "lootjs:chickpea_and_chickpea_block", ratio: 5 },
            // { reference: "lootjs:chickpea", ratio: 20 },
            // { reference: "lootjs:adzuki_beans_and_adzuki_beans_block", ratio: 5 },
            // { reference: "lootjs:adzuki_beans", ratio: 20 },
            // { reference: "lootjs:soybean_and_soybean_block", ratio: 5 },
            // { reference: "lootjs:soybean", ratio: 20 },
            { reference: "lootjs:turnip_and_turnip_block", ratio: 5 },
            { reference: "lootjs:turnip", ratio: 20 },
            { reference: "lootjs:barley", ratio: 25 },
        ]
    },
    {
        groupName: "preserved_foods", // 腌制与高阶保存食品
        groupWeight: 30,
        min: 1, max: 3,
        items: [
            { reference: "lootjs:sugar_and_sugar_block", ratio: 5 },
            { reference: "lootjs:sugar", ratio: 20 },
            { reference: "lootjs:honey_and_honey_block", ratio: 5 },
            { reference: "lootjs:honey", ratio: 20 },
            { reference: "lootjs:cheese_slice_and_cheese_block", ratio: 5 },
            { reference: "lootjs:cheese_slice", ratio: 20 },
            { reference: "lootjs:salt", ratio: 25 },
            { reference: "lootjs:bacon", ratio: 25 },
            { reference: "lootjs:ham", ratio: 25 },
            { reference: "lootjs:pickle", ratio: 25 },

            { id: "vintagedelight:salted_cod", ratio: 25 },
            { id: "vintagedelight:salted_salmon", ratio: 25 },
            { id: "vintagedelight:surstromming", ratio: 25 },
            { id: "vintagedelight:pickled_onion", ratio: 25 },
            { id: "vintagedelight:pickled_beetroot", ratio: 25 },
            { id: "vintagedelight:pickled_pepper", ratio: 25 },
            { id: "rationcraft:corned_beef", ratio: 25 },
            { id: "rationcraft:salted_pork", ratio: 25 },
        ]
    },
    {
        groupName: "anti_scurvy_fruits", // 防坏血病水果
        groupWeight: 20,
        min: 1, max: 2,
        items: [
            { reference: "lootjs:lemon_and_lemon_block", ratio: 5 },
            { reference: "lootjs:lemon", ratio: 20 },
            { reference: "lootjs:lime_and_lime_block", ratio: 5 },
            { reference: "lootjs:lime", ratio: 20 },
            { reference: "lootjs:orange_and_orange_block", ratio: 5 },
            { reference: "lootjs:orange", ratio: 20 },
            { reference: "lootjs:apple_and_apple_block", ratio: 5 },
            { reference: "lootjs:apple", ratio: 20 },
        ]
    }
];

const shipwreck_supply_trade_and_supplies = [
    {
        groupName: "textiles_and_tools", // 帆布、缆绳与随船工具
        groupWeight: 60,
        min: 1, max: 3,
        items: [

            { reference: "lootjs:flax_and_flax_block", ratio: 5 },
            { reference: "lootjs:flax", ratio: 20 },
            { reference: "lootjs:rope", ratio: 25 },
            { reference: "lootjs:small_iron_knife", ratio: 5 },

            { id: "farmersdelight:canvas", ratio: 25 },

        ]
    },
    {
        groupName: "exotic_spices_and_goods", // 异域香料与高价值贸易品
        groupWeight: 40,
        min: 1, max: 2,
        items: [
            { reference: "lootjs:cotton_and_cotton_block", ratio: 5 },
            { reference: "lootjs:cotton", ratio: 20 },
            { reference: "lootjs:cocoabeans_and_cocoabeans_block", ratio: 5 },
            { reference: "lootjs:cocoabeans", ratio: 20 },
            { reference: "lootjs:raw_coffee_beans_and_raw_coffee_beans_block", ratio: 5 },
            { reference: "lootjs:raw_coffee_beans", ratio: 20 },
            // { reference: "lootjs:roasted_coffee_beans_and_roasted_coffee_beans_block", ratio: 5 },
            // { reference: "lootjs:roasted_coffee_beans", ratio: 20 },
            // { reference: "lootjs:vanilla_pods_and_vanilla_pods_block", ratio: 5 },
            // { reference: "lootjs:vanilla_pods", ratio: 20 },
            { reference: "lootjs:tea_seeds", ratio: 25 },
            { reference: "lootjs:pepper", ratio: 20 },
            { reference: "lootjs:pepper_and_pepper_block", ratio: 5 },

            { id: "barbequesdelight:chili_powder", ratio: 3 },
            { id: "barbequesdelight:pepper_powder", ratio: 3 },
            { id: "barbequesdelight:cumin_powder", ratio: 3 },
        ]
    }
];

const shipwreck_supply_armaments_and_metals = [
    {
        groupName: "ship_artillery_and_fuel", // 船用火药与燃料
        groupWeight: 50,
        min: 2, max: 4,
        items: [
            { reference: "lootjs:gunpowder_and_gunpowder_block", ratio: 5 },
            { reference: "lootjs:gunpowder", ratio: 20 },
            { reference: "lootjs:coal_and_coal_block", ratio: 5 },
            { reference: "lootjs:coal", ratio: 20 },
            { id: "supplementaries:cannonball", ratio: 10 },
        ]
    },
    {
        groupName: "maintenance_metals", // 维修改造用基础金属
        groupWeight: 40,
        min: 1, max: 3,
        items: [
            { reference: "lootjs:iron_ingot_and_iron_block", ratio: 5 },
            { reference: "lootjs:iron_ingot", ratio: 20 },
            { reference: "lootjs:copper_ingot_and_copper_block", ratio: 5 },
            { reference: "lootjs:copper_ingot", ratio: 20 },
        ]
    },
    // {
    //     groupName: "precious_trade_currencies", // 硬通货贵金属与宝石
    //     groupWeight: 10,
    //     min: 1, max: 2,
    //     items: [
    //         { reference: "lootjs:gold_ingot_and_gold_block", ratio: 5 },
    //         { reference: "lootjs:gold_ingot", ratio: 20 },
    //         { reference: "lootjs:emerald_and_emerald_block", ratio: 5 },
    //         { reference: "lootjs:emerald", ratio: 20 },
    //         { reference: "lootjs:diamond_and_diamond_block", ratio: 5 },
    //         { reference: "lootjs:diamond", ratio: 20 },
    //     ]
    // },
];
// =================================================================
// 事件注册区域
// =================================================================
const shipwreck_supply_content = [
    [shipwreck_supply_provisions, 2, 3],
    [shipwreck_supply_trade_and_supplies, 1, 2],
    [shipwreck_supply_armaments_and_metals, 1, 1],
    [seagrass, 4, 5],
];

const loot_shipwreck_supply = [
    [shipwreck_supply_content, 1],
];