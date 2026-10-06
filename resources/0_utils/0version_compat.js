const $G = (function() {
    if (typeof globalThis !== "undefined") return globalThis;
    if (typeof this !== "undefined") return this;
    return Function("return this")();
})();

// ==========================================
// 1. 核心路由分发器（使用 arguments）
// ==========================================
function dispatchVersionedMethod(baseMethodName, args) {
    const versionStr = String(Platform.getMinecraftVersion());
    
    const versionSuffixMap = {
        "2101": "_1_21_1",
        "2001": "_1_20_1"
    };

    const suffix = versionSuffixMap[versionStr];

    if (suffix) {
        const targetMethodName = baseMethodName + suffix;
        if (typeof $G[targetMethodName] === "function") {
            // 使用 apply 透传类数组对象 args (arguments)
            return $G[targetMethodName].apply(this, args);
        }
    }
    
}

// ==========================================
// 2. 批量定义对外 API
// ==========================================
const methodsToDefine = [
    "addCustomLoot",
    "addEnchantedBook",
    "clearLootTable",
    "replaceLootTable",
    "removeGlobalModifiersBatch",
    "createLootTable",
    "createDuplicateItemPreviewLootTable",
    "createLootTable2Pool",
    "createLootTableReference",
    "createLootTableConst",
    "generateEnchantmentLootTables",
    "LootReferencesToItem",
    "cleanEnchantments",
    "crateLootReferencesToItems",
    "getSeedBagConfig",
];

methodsToDefine.forEach(function(methodName) {
    $G[methodName] = function() {
        // 直接将当前函数的内置 arguments 传给分发器
        return dispatchVersionedMethod(methodName, arguments);
    };
});