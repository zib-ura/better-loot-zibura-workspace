$G.clearLootTable_1_21_1 = function(configArray) {
    LootJS.lootTables(event => {
        configArray.forEach(lootTable => {
            if (event.hasLootTable(lootTable)) {
                event.modifyLootTables(lootTable).removeEntry(entry => true);
            }
        });
    });
}


// $G.clearLootTable_1_20_1 = function(configArray) {
//     LootJS.modifiers(event => {
//         configArray.forEach(lootTable => {
//             event.addLootTableModifier(lootTable)
//                 .removeLoot(Ingredient.all)
            
//         });
//     });
// }

$G.clearLootTable_1_20_1 = function(configArray) {
    LootJS.modifiers(event => {
        configArray.forEach(lootTable => {
            event.addLootTableModifier(lootTable)
                // 自定义过滤器：如果物品 ID 不是附魔书，就执行删除
                .removeLoot(Ingredient.all);
        });
    });
}