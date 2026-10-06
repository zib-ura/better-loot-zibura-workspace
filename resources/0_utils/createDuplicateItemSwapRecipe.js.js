$G.createDuplicateItemSwapRecipe = function(config) {
    ServerEvents.recipes(event => {
        config.forEach(group => {
            // 确保 candidates 存在，防止因拼写错误导致脚本崩溃
            if (!group.candidates || !Array.isArray(group.candidates)) return;

            // 1. 过滤出当前整合包中真正存在的物品
            let validItems = group.candidates.filter(item => Item.exists(item));
            
            // 2. 如果有效的同类物品少于 2 个，则无法进行互相转换，跳过
            if (validItems.length < 2) return;
            
            // 3. 双重循环，让数组内的物品两两生成无序转换配方
            for (let i = 0; i < validItems.length; i++) {
                for (let j = 0; j < validItems.length; j++) {
                    // 跳过自己转换成自己的情况
                    if (i === j) continue;
                    
                    let inputItem = validItems[i];
                    let outputItem = validItems[j];
                    
                    // 注册 1对1 的无序合成配方
                    event.shapeless(outputItem, [inputItem]);
                }
            }
        });
    });
}