$G.cleanEnchantments_1_21_1 = function(enchantList) {
    return enchantList;

}

$G.cleanEnchantments_1_20_1 = function(enchantList) {

        // 1.21 新增魔咒列表
        let v121Enchants = ["minecraft:density", "minecraft:breach", "minecraft:wind_burst"];
        
        return enchantList
            // 过滤掉 1.20.1 不存在的魔咒
            .filter(id => !v121Enchants.includes(id))
            // 将 1.21 的横扫之刃 ID 替换回 1.20.1 的旧 ID
            .map(id => id === "minecraft:sweeping_edge" ? "minecraft:sweeping" : id);
    
    // 如果是 1.21.x 版本，无需处理，直接返回原数组
    return enchantList;
}