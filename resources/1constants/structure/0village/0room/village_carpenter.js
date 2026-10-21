// // ==========================================
// // 木匠配置区域 (Carpenter)
// // ==========================================
//
// // 1. 定义每个群系对应的木材类型映射表
// const carpenterBiomeWoods = {
//     plains: ["oak"],
//     savanna: ["acacia"],
//     snowy: ["spruce"],
//     taiga: ["spruce"],
//     swamp: ["oak"],
//     mangrove: ["mangrove"],
//     jungle: ["jungle", "bamboo"],
//     dark_forest: ["dark_oak"],
//     cherry: ["cherry"],
// };
//
// /**
//  * 自动化生成木匠群系专属物品组的工厂函数（通用完全体）
//  * @param {string} biomeName - 群系名称
//  * @param {string} groupName - 组名
//  * @param {Array<Object>} productTemplates - 产物模版列表
//  * @param {Object} config - 配置项控制，包含 { groupWeight, min, max }
//  */
// function createCarpenterBiomeGroup(biomeName, groupName, productTemplates, config) {
//     const woods = carpenterBiomeWoods[biomeName] || [];
//     const items = [];
//
//     // 默认配置兜底
//     const groupWeight = config.groupWeight !== undefined ? config.groupWeight : 20;
//     const min = config.min !== undefined ? config.min : 1;
//     const max = config.max !== undefined ? config.max : 3;
//
//     // 遍历该群系拥有的每种木材类型
//     woods.forEach(function(woodType) {
//         productTemplates.forEach(function(template) {
//             // 1. 处理带 [WOOD] 的动态模板
//             if (template.id.indexOf("[WOOD]") !== -1) {
//                 let itemId = template.id.replace("[WOOD]", woodType);
//
//                 // 特殊木材名称修正
//                 if (woodType === "bamboo") {
//                     itemId = itemId.replace("bamboo_log", "bamboo_block")
//                                    .replace("bamboo_sapling", "bamboo");
//                 } else if (woodType === "mangrove") {
//                     itemId = itemId.replace("mangrove_sapling", "mangrove_propagule");
//                 }
//
//                 // 直接浅拷贝 template 继承所有属性（包括 min, max, damage 等），仅覆盖 id
//                 items.push(Object.assign({}, template, { id: itemId }));
//             } else {
//                 items.push(Object.assign({}, template));
//             }
//         });
//     });
//
//
//     return [
//         {
//             groupName: groupName,
//             groupWeight: groupWeight,
//             min: min, max: max,
//             items: items
//         }
//     ];
// }
//
// // ==========================================
// // 木匠核心配置：定义统一的模版
// // ==========================================
//
// // 1.1 功能方块模版
// const carpenterUtilityTemplates = [
//     { id: "minecraft:chest", ratio: 10 },
//     { id: "lolmcv:[WOOD]_chest", ratio: 10 },
//     { id: "minecraft:crafting_table", ratio: 10 },
//     { id: "minecraft:barrel", ratio: 10 },
//     { id: "minecraft:loom", ratio: 10 },
//     { id: "minecraft:fletching_table", ratio: 10 },
//     { id: "minecraft:cartography_table", ratio: 10 },
//     { id: "minecraft:composter", ratio: 10 },
//     // { id: "minecraft:bookshelf", ratio: 10 },
//     { id: "minecraft:chiseled_bookshelf", ratio: 10 },
//     { id: "minecraft:lectern", ratio: 10 },
//     { id: "minecraft:bowl", ratio: 10 },
//     { id: "minecraft:ladder", ratio: 10 },
//     { id: "farm_and_charm:sturdy_ladder", ratio: 10 },
//     { id: "woodenshears:wooden_shears", ratio: 10 },
//     { id: "farmersdelight:wooden_basket", ratio: 10 },
//     { id: "kaleidoscope_cookery:fruit_basket", ratio: 10 },
//
// ];
//
// // 1.2 家具模版
// const carpenterFurnitureTemplates = [
//     // { id: "minecraft:[WOOD]_stairs", ratio: 10 },
//     // { id: "minecraft:[WOOD]_slab", ratio: 10 },
//     { id: "minecraft:[WOOD]_door", ratio: 10 },
//     { id: "minecraft:[WOOD]_trapdoor", ratio: 10 },
//     // { id: "minecraft:[WOOD]_fence", ratio: 10 },
//     { id: "minecraft:[WOOD]_sign", ratio: 10 },
//     { id: "minecraft:[WOOD]_hanging_sign", ratio: 10 },
//     { id: "kaleidoscope_cookery:table_[WOOD]", ratio: 10 },
//     { id: "kaleidoscope_cookery:chair_[WOOD]", ratio: 10 },
//     { id: "kaleidoscope_cookery:cook_stool_[WOOD]", ratio: 10 },
//     { id: "farmersdelight:[WOOD]_cabinet", ratio: 10 },
//     // { id: "brewery:sideboard", ratio: 10 },
//     // { id: "brewery:cabinet", ratio: 10 },
//     // { id: "bakery:cupcake_display", ratio: 10 },
//     // { id: "bakery:cake_display", ratio: 10 },
//     // { id: "bakery:wall_display", ratio: 10 },
//     // { id: "bakery:cabinet", ratio: 10 },
//     // { id: "brewery:table", ratio: 10 },
//     // { id: "farm_and_charm:water_trough", ratio: 10 },
//     // { id: "bakery:breadbox", ratio: 10 },
//     // { id: "kaleidoscope_chinesefood:mooncake_mold", ratio: 10 },
//     { id: "kaleidoscope_tavern:stepladder", ratio: 10 },
//     { id: "kaleidoscope_chinesefood:bowl_stack", ratio: 10 },
//     { id: "kaleidoscope_cookery:kitchenware_racks", ratio: 10 },
//     { id: "youkaisfeasts:[WOOD]_dining_table", ratio: 10 },
//
//     { id: "storagedelight:[WOOD]_single_door_cabinet", ratio: 10 },
//     { id: "storagedelight:[WOOD]_cabinet_with_glass_doors", ratio: 10 },
//     { id: "storagedelight:glass_[WOOD]_cabinet", ratio: 10 },
//     { id: "storagedelight:small_[WOOD]_drawers", ratio: 10 },
//     { id: "storagedelight:[WOOD]_bookshelf_with_door", ratio: 10 },
//     { id: "storagedelight:[WOOD]_drawer_with_books", ratio: 10 },
//     { id: "storagedelight:[WOOD]_drawer_with_door", ratio: 10 },
//     { id: "storagedelight:[WOOD]_drawer", ratio: 10 },
//
//     { id: "handcrafted:[WOOD]_shelf", ratio: 10 },
//     { id: "handcrafted:[WOOD]_table", ratio: 10 },
//     { id: "handcrafted:[WOOD]_side_table", ratio: 10 },
//     { id: "handcrafted:[WOOD]_bench", ratio: 10 },
//     { id: "handcrafted:[WOOD]_drawer", ratio: 10 },
//     { id: "handcrafted:[WOOD]_counter", ratio: 10 },
//     { id: "handcrafted:[WOOD]_desk", ratio: 10 },
//     { id: "handcrafted:[WOOD]_chair", ratio: 10 },
//     { id: "handcrafted:[WOOD]_cupboard", ratio: 10 },
//     { id: "handcrafted:[WOOD]_fancy_bed", ratio: 10 },
//     { id: "handcrafted:[WOOD]_nightstand", ratio: 10 },
//     { id: "handcrafted:[WOOD]_dining_bench", ratio: 10 },
//
//     { id: "beautify:[WOOD]_blinds", ratio: 10 },
//     { id: "beautify:[WOOD]_picture_frame", ratio: 10 },
// ];
// // 2. 基础原料模版
// const carpenterMaterialTemplates = [
//     { id: "minecraft:[WOOD]_log", ratio: 15 },
//     { id: "minecraft:[WOOD]_planks", ratio: 20 },
//     { id: "minecraft:stick", ratio: 15 },
// ];
//
// // 3. 树苗模板
// const carpenterSaplingTemplates = [
//     { id: "minecraft:[WOOD]_sapling", ratio: 10 },
// ];
//
// // 4. 公共池模板（不再需要单独作为独立数组声明）
// const carpenterAxesTemplates = [
//     { id: "minecraft:stone_axe", ratio: 30, damage: [0.3, 0.4] },
//     { id: "minecraft:iron_axe", ratio: 10, damage: [0.5, 0.6] },
// ];
//
// const carpenterSawmillTemplates = [
//     { id: "sawmill:sawmill", ratio: 10 },
// ];
//
// // =================================================================
// // 木匠事件注册区域（自动化动态生成）
// // =================================================================
//
// const carpenterBiomes = ["plains", "savanna", "snowy", "taiga", "swamp", "jungle", "dark_forest", "cherry", "mangrove"];
// const carpenterData = {};
//
// // /**
// //  * 动态获取组合好的群系总配置
// //  */
// // function getCarpenterConfig(biomeName) {
// //     // 1. 动态生成群系专属池（传入自定义的权重与数量控制）
// //     const utility   = createCarpenterBiomeGroup(biomeName, "utility",   carpenterUtilityTemplates, { groupWeight: 100, min: 1, max: 1 });
// //     const furniture = createCarpenterBiomeGroup(biomeName, "furniture", carpenterFurnitureTemplates, { groupWeight: 100, min: 1, max: 1 });
// //     const materials = createCarpenterBiomeGroup(biomeName, "materials", carpenterMaterialTemplates, { groupWeight: 100, min: 2, max: 3 });
// //     const sapling   = createCarpenterBiomeGroup(biomeName, "sapling",   carpenterSaplingTemplates,   { groupWeight: 100, min: 1, max: 1 });
// //
// //     // 2. 直接用统一函数生成公共池（组权重统一设为 100）
// //     const axes      = createCarpenterBiomeGroup(biomeName, "axes",      carpenterAxesTemplates,      { groupWeight: 100, min: 1, max: 1 });
// //     const sawmills  = createCarpenterBiomeGroup(biomeName, "sawmills",  carpenterSawmillTemplates,  { groupWeight: 100, min: 1, max: 1 });
// //
// //     // 3. 返回组合结果
// //     return [
// //         [utility, 1, 2],
// //         [furniture, 1, 2],
// //         [materials, 2, 3],
// //         [sapling,   1, 2],
// //         [axes,      1, 2],
// //         [sawmills,  1, 1],
// //     ];
// // }
// //
// // // 执行自动化构建
// // carpenterBiomes.forEach(biome => {
// //     carpenterData[biome] = getCarpenterConfig(biome);
// // });
//
//
// // 每个群系、每个 type 单独声明 pool。
//
// // plains
// const carpenter_plains_pools_utility = [{ groupName: "utility", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterUtilityTemplates", param: { wood: "oak" } }, ] }];
// const carpenter_plains_pools_furniture = [{ groupName: "furniture", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterFurnitureTemplates", param: { wood: "oak" } }, ] }];
// const carpenter_plains_pools_materials = [{ groupName: "materials", groupWeight: 100, min: 2, max: 3, items: [ { template: "carpenterMaterialTemplates", param: { wood: "oak" } }, ] }];
// const carpenter_plains_pools_sapling = [{ groupName: "sapling", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSaplingTemplates", param: { wood: "oak" } }, ] }];
// const carpenter_plains_pools_axes = [{ groupName: "axes", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterAxesTemplates", param: { wood: "oak" } }, ] }];
// const carpenter_plains_pools_sawmills = [{ groupName: "sawmills", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSawmillTemplates", param: { wood: "oak" } }, ] }];
//
// // savanna
// const carpenter_savanna_pools_utility = [{ groupName: "utility", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterUtilityTemplates", param: { wood: "acacia" } }, ] }];
// const carpenter_savanna_pools_furniture = [{ groupName: "furniture", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterFurnitureTemplates", param: { wood: "acacia" } }, ] }];
// const carpenter_savanna_pools_materials = [{ groupName: "materials", groupWeight: 100, min: 2, max: 3, items: [ { template: "carpenterMaterialTemplates", param: { wood: "acacia" } }, ] }];
// const carpenter_savanna_pools_sapling = [{ groupName: "sapling", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSaplingTemplates", param: { wood: "acacia" } }, ] }];
// const carpenter_savanna_pools_axes = [{ groupName: "axes", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterAxesTemplates", param: { wood: "acacia" } }, ] }];
// const carpenter_savanna_pools_sawmills = [{ groupName: "sawmills", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSawmillTemplates", param: { wood: "acacia" } }, ] }];
//
// // snowy
// const carpenter_snowy_pools_utility = [{ groupName: "utility", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterUtilityTemplates", param: { wood: "spruce" } }, ] }];
// const carpenter_snowy_pools_furniture = [{ groupName: "furniture", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterFurnitureTemplates", param: { wood: "spruce" } }, ] }];
// const carpenter_snowy_pools_materials = [{ groupName: "materials", groupWeight: 100, min: 2, max: 3, items: [ { template: "carpenterMaterialTemplates", param: { wood: "spruce" } }, ] }];
// const carpenter_snowy_pools_sapling = [{ groupName: "sapling", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSaplingTemplates", param: { wood: "spruce" } }, ] }];
// const carpenter_snowy_pools_axes = [{ groupName: "axes", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterAxesTemplates", param: { wood: "spruce" } }, ] }];
// const carpenter_snowy_pools_sawmills = [{ groupName: "sawmills", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSawmillTemplates", param: { wood: "spruce" } }, ] }];
//
// // taiga
// const carpenter_taiga_pools_utility = [{ groupName: "utility", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterUtilityTemplates", param: { wood: "spruce" } }, ] }];
// const carpenter_taiga_pools_furniture = [{ groupName: "furniture", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterFurnitureTemplates", param: { wood: "spruce" } }, ] }];
// const carpenter_taiga_pools_materials = [{ groupName: "materials", groupWeight: 100, min: 2, max: 3, items: [ { template: "carpenterMaterialTemplates", param: { wood: "spruce" } }, ] }];
// const carpenter_taiga_pools_sapling = [{ groupName: "sapling", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSaplingTemplates", param: { wood: "spruce" } }, ] }];
// const carpenter_taiga_pools_axes = [{ groupName: "axes", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterAxesTemplates", param: { wood: "spruce" } }, ] }];
// const carpenter_taiga_pools_sawmills = [{ groupName: "sawmills", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSawmillTemplates", param: { wood: "spruce" } }, ] }];
//
// // swamp
// const carpenter_swamp_pools_utility = [{ groupName: "utility", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterUtilityTemplates", param: { wood: "oak" } }, ] }];
// const carpenter_swamp_pools_furniture = [{ groupName: "furniture", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterFurnitureTemplates", param: { wood: "oak" } }, ] }];
// const carpenter_swamp_pools_materials = [{ groupName: "materials", groupWeight: 100, min: 2, max: 3, items: [ { template: "carpenterMaterialTemplates", param: { wood: "oak" } }, ] }];
// const carpenter_swamp_pools_sapling = [{ groupName: "sapling", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSaplingTemplates", param: { wood: "oak" } }, ] }];
// const carpenter_swamp_pools_axes = [{ groupName: "axes", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterAxesTemplates", param: { wood: "oak" } }, ] }];
// const carpenter_swamp_pools_sawmills = [{ groupName: "sawmills", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSawmillTemplates", param: { wood: "oak" } }, ] }];
//
// // jungle
// const carpenter_jungle_pools_utility = [{ groupName: "utility", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterUtilityTemplates", param: { wood: ["jungle", "bamboo"] } }, ] }];
// const carpenter_jungle_pools_furniture = [{ groupName: "furniture", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterFurnitureTemplates", param: { wood: ["jungle", "bamboo"] } }, ] }];
// const carpenter_jungle_pools_materials = [{ groupName: "materials", groupWeight: 100, min: 2, max: 3, items: [ { template: "carpenterMaterialTemplates", param: { wood: "jungle" } }, "carpenterBambooMaterials", ] }];
// const carpenter_jungle_pools_sapling = [{ groupName: "sapling", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSaplingTemplates", param: { wood: "jungle" } }, "carpenterBambooSapling", ] }];
// const carpenter_jungle_pools_axes = [{ groupName: "axes", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterAxesTemplates", param: { wood: ["jungle", "bamboo"] } }, ] }];
// const carpenter_jungle_pools_sawmills = [{ groupName: "sawmills", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSawmillTemplates", param: { wood: ["jungle", "bamboo"] } }, ] }];
//
// // dark_forest
// const carpenter_dark_forest_pools_utility = [{ groupName: "utility", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterUtilityTemplates", param: { wood: "dark_oak" } }, ] }];
// const carpenter_dark_forest_pools_furniture = [{ groupName: "furniture", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterFurnitureTemplates", param: { wood: "dark_oak" } }, ] }];
// const carpenter_dark_forest_pools_materials = [{ groupName: "materials", groupWeight: 100, min: 2, max: 3, items: [ { template: "carpenterMaterialTemplates", param: { wood: "dark_oak" } }, ] }];
// const carpenter_dark_forest_pools_sapling = [{ groupName: "sapling", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSaplingTemplates", param: { wood: "dark_oak" } }, ] }];
// const carpenter_dark_forest_pools_axes = [{ groupName: "axes", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterAxesTemplates", param: { wood: "dark_oak" } }, ] }];
// const carpenter_dark_forest_pools_sawmills = [{ groupName: "sawmills", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSawmillTemplates", param: { wood: "dark_oak" } }, ] }];
//
// // cherry
// const carpenter_cherry_pools_utility = [{ groupName: "utility", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterUtilityTemplates", param: { wood: "cherry" } }, ] }];
// const carpenter_cherry_pools_furniture = [{ groupName: "furniture", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterFurnitureTemplates", param: { wood: "cherry" } }, ] }];
// const carpenter_cherry_pools_materials = [{ groupName: "materials", groupWeight: 100, min: 2, max: 3, items: [ { template: "carpenterMaterialTemplates", param: { wood: "cherry" } }, ] }];
// const carpenter_cherry_pools_sapling = [{ groupName: "sapling", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSaplingTemplates", param: { wood: "cherry" } }, ] }];
// const carpenter_cherry_pools_axes = [{ groupName: "axes", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterAxesTemplates", param: { wood: "cherry" } }, ] }];
// const carpenter_cherry_pools_sawmills = [{ groupName: "sawmills", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSawmillTemplates", param: { wood: "cherry" } }, ] }];
//
// // mangrove
// const carpenter_mangrove_pools_utility = [{ groupName: "utility", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterUtilityTemplates", param: { wood: "mangrove" } }, ] }];
// const carpenter_mangrove_pools_furniture = [{ groupName: "furniture", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterFurnitureTemplates", param: { wood: "mangrove" } }, ] }];
// const carpenter_mangrove_pools_materials = [{ groupName: "materials", groupWeight: 100, min: 2, max: 3, items: [ { template: "carpenterMaterialTemplates", param: { wood: "mangrove" } }, ] }];
// const carpenter_mangrove_pools_sapling = [{ groupName: "sapling", groupWeight: 100, min: 1, max: 1, items: [ "carpenterMangroveSapling", ] }];
// const carpenter_mangrove_pools_axes = [{ groupName: "axes", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterAxesTemplates", param: { wood: "mangrove" } }, ] }];
// const carpenter_mangrove_pools_sawmills = [{ groupName: "sawmills", groupWeight: 100, min: 1, max: 1, items: [ { template: "carpenterSawmillTemplates", param: { wood: "mangrove" } }, ] }];
//
//
//
// const carpenter_content_matrix = {
//     matrixType: "poolToContent",
//     rows: carpenterBiomes,
//     prefix: "carpenter",
//     outputPattern: "carpenter_{row}",
//     columns: [
//         "{prefix}_{row}_pools_utility",
//         "{prefix}_{row}_pools_furniture",
//         "{prefix}_{row}_pools_materials",
//         "{prefix}_{row}_pools_sapling",
//         "{prefix}_{row}_pools_axes",
//         "{prefix}_{row}_pools_sawmills",
//     ],
//     //       utility furniture materials sapling axes sawmills
//     rolls: [
//         [[1,2], [1,2], [2,3], [1,2], [1,2], [1,1]], // plains
//         [[1,2], [1,2], [2,3], [1,2], [1,2], [1,1]], // savanna
//         [[1,2], [1,2], [2,3], [1,2], [1,2], [1,1]], // snowy
//         [[1,2], [1,2], [2,3], [1,2], [1,2], [1,1]], // taiga
//         [[1,2], [1,2], [2,3], [1,2], [1,2], [1,1]], // swamp
//         [[1,2], [1,2], [2,3], [1,2], [1,2], [1,1]], // jungle
//         [[1,2], [1,2], [2,3], [1,2], [1,2], [1,1]], // dark_forest
//         [[1,2], [1,2], [2,3], [1,2], [1,2], [1,1]], // cherry
//         [[1,2], [1,2], [2,3], [1,2], [1,2], [1,1]], // mangrove
//     ],
// };


// Carpenter — wood-based recursive template proposal. No biome mappings or JS functions.

// param: exactly one key, whose value is an array or a registry name resolving to an array.

// Nested template calls inherit wood; output may appear inside content entries.

// Requires the NEW Java recursive template/output resolver (not supported by the current parser).



const carpenter_woods = ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "cherry"];

const carpenter_bamboo_woods = ["bamboo"];

const carpenter_mangrove_woods = ["mangrove"];



const carpenterUtilityTemplates = [
    {"id": "minecraft:chest", "ratio": 10},
    {"id": "lolmcv:{wood}_chest", "ratio": 10},
    {"id": "minecraft:crafting_table", "ratio": 10},
    {"id": "minecraft:barrel", "ratio": 10},
    {"id": "minecraft:loom", "ratio": 10},
    {"id": "minecraft:fletching_table", "ratio": 10},
    {"id": "minecraft:cartography_table", "ratio": 10},
    {"id": "minecraft:composter", "ratio": 10},
    {"id": "minecraft:chiseled_bookshelf", "ratio": 10},
    {"id": "minecraft:lectern", "ratio": 10},
    {"id": "minecraft:bowl", "ratio": 10},
    {"id": "minecraft:ladder", "ratio": 10},
    {"id": "farm_and_charm:sturdy_ladder", "ratio": 10},
    {"id": "woodenshears:wooden_shears", "ratio": 10},
    {"id": "farmersdelight:wooden_basket", "ratio": 10},
    {"id": "kaleidoscope_cookery:fruit_basket", "ratio": 10}
];

const carpenterFurnitureTemplates = [
    {"id": "minecraft:{wood}_door", "ratio": 10},
    {"id": "minecraft:{wood}_trapdoor", "ratio": 10},
    {"id": "minecraft:{wood}_sign", "ratio": 10},
    {"id": "minecraft:{wood}_hanging_sign", "ratio": 10},
    {"id": "kaleidoscope_cookery:table_{wood}", "ratio": 10},
    {"id": "kaleidoscope_cookery:chair_{wood}", "ratio": 10},
    {"id": "kaleidoscope_cookery:cook_stool_{wood}", "ratio": 10},
    {"id": "farmersdelight:{wood}_cabinet", "ratio": 10},
    {"id": "kaleidoscope_tavern:stepladder", "ratio": 10},
    {"id": "kaleidoscope_chinesefood:bowl_stack", "ratio": 10},
    {"id": "kaleidoscope_cookery:kitchenware_racks", "ratio": 10},
    {"id": "youkaisfeasts:{wood}_dining_table", "ratio": 10},
    {"id": "storagedelight:{wood}_single_door_cabinet", "ratio": 10},
    {"id": "storagedelight:{wood}_cabinet_with_glass_doors", "ratio": 10},
    {"id": "storagedelight:glass_{wood}_cabinet", "ratio": 10},
    {"id": "storagedelight:small_{wood}_drawers", "ratio": 10},
    {"id": "storagedelight:{wood}_bookshelf_with_door", "ratio": 10},
    {"id": "storagedelight:{wood}_drawer_with_books", "ratio": 10},
    {"id": "storagedelight:{wood}_drawer_with_door", "ratio": 10},
    {"id": "storagedelight:{wood}_drawer", "ratio": 10},
    {"id": "handcrafted:{wood}_shelf", "ratio": 10},
    {"id": "handcrafted:{wood}_table", "ratio": 10},
    {"id": "handcrafted:{wood}_side_table", "ratio": 10},
    {"id": "handcrafted:{wood}_bench", "ratio": 10},
    {"id": "handcrafted:{wood}_drawer", "ratio": 10},
    {"id": "handcrafted:{wood}_counter", "ratio": 10},
    {"id": "handcrafted:{wood}_desk", "ratio": 10},
    {"id": "handcrafted:{wood}_chair", "ratio": 10},
    {"id": "handcrafted:{wood}_cupboard", "ratio": 10},
    {"id": "handcrafted:{wood}_fancy_bed", "ratio": 10},
    {"id": "handcrafted:{wood}_nightstand", "ratio": 10},
    {"id": "handcrafted:{wood}_dining_bench", "ratio": 10},
    {"id": "beautify:{wood}_blinds", "ratio": 10},
    {"id": "beautify:{wood}_picture_frame", "ratio": 10}
];

const carpenterMaterialTemplates = [{"id": "minecraft:{wood}_log", "ratio": 15}, {"id": "minecraft:{wood}_planks", "ratio": 20}, {"id": "minecraft:stick", "ratio": 15}];

const carpenterSaplingTemplates = [{"id": "minecraft:{wood}_sapling", "ratio": 10}];

const carpenterAxesTemplates = [{"id": "minecraft:stone_axe", "ratio": 30, "damage": [0.3, 0.4]}, {"id": "minecraft:iron_axe", "ratio": 10, "damage": [0.5, 0.6]}];

const carpenterSawmillTemplates = [{"id": "sawmill:sawmill", "ratio": 10}];

const carpenterBambooMaterials = [{"id": "minecraft:bamboo_block", "ratio": 15}, {"id": "minecraft:bamboo_planks", "ratio": 20}, {"id": "minecraft:stick", "ratio": 15}];

const carpenterBambooSapling = [{"id": "minecraft:bamboo", "ratio": 10}];

const carpenterMangroveSapling = [{"id": "minecraft:mangrove_propagule", "ratio": 10}];



const carpenter_utility_group_template = [
    { groupName: "utility", groupWeight: 100, min: 1, max: 1, items: [
            { template: "carpenterUtilityTemplates" },
        ] },
];

const carpenter_furniture_group_template = [
    { groupName: "furniture", groupWeight: 100, min: 1, max: 1, items: [
            { template: "carpenterFurnitureTemplates" },
        ] },
];

const carpenter_materials_group_template = [
    { groupName: "materials", groupWeight: 100, min: 2, max: 3, items: [
            { template: "carpenterMaterialTemplates" },
        ] },
];

const carpenter_sapling_group_template = [
    { groupName: "sapling", groupWeight: 100, min: 1, max: 1, items: [
            { template: "carpenterSaplingTemplates" },
        ] },
];

const carpenter_axes_group_template = [
    { groupName: "axes", groupWeight: 100, min: 1, max: 1, items: [
            { template: "carpenterAxesTemplates" },
        ] },
];

const carpenter_sawmills_group_template = [
    { groupName: "sawmills", groupWeight: 100, min: 1, max: 1, items: [
            { template: "carpenterSawmillTemplates" },
        ] },
];



const carpenter_bamboo_materials_group_template = [
    { groupName: "materials", groupWeight: 100, min: 2, max: 3, items: ["carpenterBambooMaterials"] },
];

const carpenter_bamboo_sapling_group_template = [
    { groupName: "sapling", groupWeight: 100, min: 1, max: 1, items: ["carpenterBambooSapling"] },
];

const carpenter_mangrove_sapling_group_template = [
    { groupName: "sapling", groupWeight: 100, min: 1, max: 1, items: ["carpenterMangroveSapling"] },
];



const carpenter_content_template = [
    [{ template: "carpenter_utility_group_template", output: "carpenter_{wood}_pools_utility" }, 1, 2],
    [{ template: "carpenter_furniture_group_template", output: "carpenter_{wood}_pools_furniture" }, 1, 2],
    [{ template: "carpenter_materials_group_template", output: "carpenter_{wood}_pools_materials" }, 2, 3],
    [{ template: "carpenter_sapling_group_template", output: "carpenter_{wood}_pools_sapling" }, 1, 2],
    [{ template: "carpenter_axes_group_template", output: "carpenter_{wood}_pools_axes" }, 1, 2],
    [{ template: "carpenter_sawmills_group_template", output: "carpenter_{wood}_pools_sawmills" }, 1, 1],
];



const carpenter_content_template_bamboo = [
    [{ template: "carpenter_utility_group_template", output: "carpenter_{wood}_pools_utility" }, 1, 2],
    [{ template: "carpenter_furniture_group_template", output: "carpenter_{wood}_pools_furniture" }, 1, 2],
    [{ template: "carpenter_bamboo_materials_group_template", output: "carpenter_{wood}_pools_materials" }, 2, 3],
    [{ template: "carpenter_bamboo_sapling_group_template", output: "carpenter_{wood}_pools_sapling" }, 1, 2],
    [{ template: "carpenter_axes_group_template", output: "carpenter_{wood}_pools_axes" }, 1, 2],
    [{ template: "carpenter_sawmills_group_template", output: "carpenter_{wood}_pools_sawmills" }, 1, 1],
];



const carpenter_content_template_mangrove = [
    [{ template: "carpenter_utility_group_template", output: "carpenter_{wood}_pools_utility" }, 1, 2],
    [{ template: "carpenter_furniture_group_template", output: "carpenter_{wood}_pools_furniture" }, 1, 2],
    [{ template: "carpenter_materials_group_template", output: "carpenter_{wood}_pools_materials" }, 2, 3],
    [{ template: "carpenter_mangrove_sapling_group_template", output: "carpenter_{wood}_pools_sapling" }, 1, 2],
    [{ template: "carpenter_axes_group_template", output: "carpenter_{wood}_pools_axes" }, 1, 2],
    [{ template: "carpenter_sawmills_group_template", output: "carpenter_{wood}_pools_sawmills" }, 1, 1],
];



// Top-level output creates one independent content per wood.

// Inner output creates reusable group registry entries for that same wood.

const carpenter_contents = [

    { template: "carpenter_content_template", param: { wood: "carpenter_woods" }, output: "carpenter_{wood}" },

    { template: "carpenter_content_template_bamboo", param: { wood: "carpenter_bamboo_woods" }, output: "carpenter_{wood}" },

    { template: "carpenter_content_template_mangrove", param: { wood: "carpenter_mangrove_woods" }, output: "carpenter_{wood}" },

];


