if (Platform.isLoaded("kubeloader")) { 

    let betterLootZiburaOriginalData = {}; 
    betterLootZiburaOriginalData.allLootTables = allLootTables;
    betterLootZiburaOriginalData.crateAndBag = [ DUPLICATE_ITEMS_CONFIG, crateAndBagRegistry]; 
    betterLootZiburaOriginalData.createDuplicateItemSwapRecipe = createDuplicateItemSwapRecipe;
    betterLootZiburaOriginalData.createDuplicateItemPreviewLootTable = createDuplicateItemPreviewLootTable;
    betterLootZiburaOriginalData.tableToClear = tableToClear;
    betterLootZiburaOriginalData.clearLootTable = clearLootTable;
    betterLootZiburaOriginalData.modifiersToRemove = modifiersToRemove;
    betterLootZiburaOriginalData.removeGlobalModifiersBatch = removeGlobalModifiersBatch;
    betterLootZiburaOriginalData.carpenterData = carpenterData;
    betterLootZiburaOriginalData.enchantmentsWithLevels = enchantmentsWithLevels;
    betterLootZiburaOriginalData.enchantmentsWithoutLevels = enchantmentsWithoutLevels;

    betterLootZiburaOriginalData.registerLootTables = registerLootTables;
    
    betterLootZiburaOriginalData.getSeedBagConfig = getSeedBagConfig;


    ContentPacks.putShared("betterLootZiburaOriginalData", betterLootZiburaOriginalData); 

    let sharedData = ContentPacks.getShared("sharedData"); 

    if (sharedData) {
        if (typeof sharedData.registerLootTables === "function") {
            registerLootTables = sharedData.registerLootTables;
        }
        if (typeof sharedData.getSeedBagConfig === "function") {
            getSeedBagConfig = sharedData.getSeedBagConfig;
        }

        if (sharedData.allLootTables) {
            allLootTables = Object.assign({}, allLootTables, sharedData.allLootTables);
        }
    }

    registerLootTables(allLootTables);

} else {
    registerLootTables(allLootTables);
}