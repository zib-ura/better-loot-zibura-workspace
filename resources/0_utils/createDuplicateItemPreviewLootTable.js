
$G.createDuplicateItemPreviewLootTable_1_21_1 = function(config) {
    LootJS.lootTables(event => {
        config.forEach(item => {
            // 过滤出当前整合包中真正存在的物品 ID，并转换为 LootEntry
            let validEntries = item.candidates
                .filter(id => Item.exists(id))
                .map(id => LootEntry.of(id));

            // 如果存在有效的候选物品，则创建对应的替代战利品表
            if (validEntries.length > 0) {
                event.create(item.result).createPool(pool => {
                    pool.addEntry(LootEntry.alternative.apply(null, validEntries));
                });
            }
        });
    });
}

$G.createDuplicateItemPreviewLootTable_1_20_1 = function(config) {
    
    // 1. 注册虚拟战利品表
    ServerEvents.genericLootTables(e => {
        config.forEach(item => {
            // 过滤出当前游戏里真正存在的物品
            let validIds = item.candidates.filter(id => Item.exists(id));
            
            // 如果存在有效候选物品，直接以 item.result 作为 ID 注册战利品表
            if (validIds.length > 0) {
                e.addGeneric(item.result, builder => {builder.addPool(pool => {})});
            }
        });
    });

    LootJS.modifiers(event => {
        config.forEach(item => {
            let validIds = item.candidates.filter(id => Item.exists(id));
            
            if (validIds.length > 0) {
                let validEntries = validIds.map(id => LootEntry.of(id));

                // 1. 创建并保存同一个修改器实例
                let modifier = event.addLootTableModifier(item.result);
                
                // 2. 确保执行方法和 this 上下文是同一个实例
                modifier.addAlternativesLoot.apply(modifier, validEntries);
            }
        });
    });
}