$G.registerLootTables = function(lootMap) {
    Object.entries(lootMap).forEach(([tableId, config]) => {
        if (config && !Array.isArray(config) && typeof config === "object") {
            createLootTableReference(tableId, config.data, config.mode || "REPLACE");
        } else {
            createLootTableReference(tableId, config, "REPLACE");
        }
    });
}