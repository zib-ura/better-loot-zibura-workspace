// // =================================================================
// // 事件注册区域
// // =================================================================
// LootJS.lootTables(event => {
//     let lootTableId = "trek:pillagers/outpost_barrel";
//     if (event.hasLootTable(lootTableId)) {
//         let Loot = event.getLootTable("trek:pillagers/outpost_barrel");
//         Loot.clear(); 
//         Loot.createPool(pool => {
//             pool.addEntry(LootEntry.reference("minecraft:chests/pillager_outpost"));
//         });
//     }
// });