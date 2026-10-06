/**
 * Function to automatically create loot tables based on the main table ID and lootArray
 * @param {string} tableId Main loot table ID (e.g., "minecraft:chests/woodland_mansion")
 * @param {Array} lootArray Format: [[subTableDataArray, weight], [subTableDataArray, weight]]
 * Where the subTableDataArray format is: [[itemArray, minRolls, maxRolls, conditionCallback (e.g.  c => c.biome("minecraft:desert"))], ...]
 */
/**
 * 自动根据主表 ID 和子表数组创建战利品表的函数
 * @param {string} tableId 主战利品表 ID (例如 "minecraft:chests/woodland_mansion")
 * @param {Array} lootArray 格式: [[子表数据数组, 权重], [子表数据数组, 权重]]
 * 其中子表数据数组格式: [[物品组数组, 最小抽数, 最大抽数, 条件(e.g.  c => c.biome("minecraft:desert"))], ...]
 */

$G.createLootTableReference_1_21_1 = function(tableId, lootArray, mode) {

    // // 1. 自动化处理物品引用与合并
    // lootArray.forEach(([subTableData]) => {
    //     if (Array.isArray(subTableData)) {
    //         subTableData.forEach(([lootGroup]) => {
    //             crateLootReferencesToItems(lootGroup);
    //             LootReferencesToItem(lootGroup, mergeItem);
    //             youkaisCompat(lootGroup);
    //         });
    //     }
    // });

    // // 2. 自动化清空原表
    // if (mode === "REPLACE" && tableId.split(":")[0] !== "minecraft" && tableId.split(":")[0] !== "repurposed_structures") {
    //     clearLootTable([tableId]);
    // }
    
    LootJS.lootTables(event => {
        // 1. 先计算总权重（决定时间轴的总长度）[cite: 1]
        let totalWeight = 0;
        lootArray.forEach(([_, weight]) => {
            totalWeight += weight;
        });

        // 2. 遍历数组，按权重分配时间段[cite: 1]
        let currentOffset = 0; // 记录当前时间段的起点[cite: 1]
        
        lootArray.forEach(([contentArray, weight]) => {
            // 计算当前选项在时间轴上的落点范围 [min, max][cite: 1]
            let minTime = currentOffset;
            let maxTime = currentOffset + weight - 1;
            
            // 累加偏移量，给下一个选项用[cite: 1]
            currentOffset += weight;

            if (Array.isArray(contentArray)) {
                contentArray.forEach(([itemArray, minRolls, maxRolls, conditionCallback]) => {
                    
                    // 1. 先初始化包含时间轴的基础条件对象
                    let finalCondition = {
                        "matchTime": [totalWeight, minTime, maxTime]
                    };

                    // 2. 动态安全合并：如果用户传了像 { matchBiome: ... } 这样的 JSON 条件对象
                    if (conditionCallback && typeof conditionCallback === "object") {
                        // 使用极其稳妥的 Object.assign 进行对象的属性合并，避免找不到方法的报错
                        finalCondition = Object.assign({}, finalCondition, conditionCallback);
                    } 
                    // 3. 如果传入的是老款的闭包函数 (c => c.biome(...))，则用包装函数将其与时间轴链式组合[cite: 1]
                    else if (typeof conditionCallback === "function") {
                        let originalCallback = conditionCallback;
                        finalCondition = (c) => {
                            c.matchTime(totalWeight, minTime, maxTime);
                            originalCallback(c);
                        };
                    }
                    
                    // ⭐ 传入合并了时间与生物群系等多个条件后的 finalCondition
                    $G.addCustomLoot_1_21_1(event, tableId, itemArray, minRolls, maxRolls, finalCondition);
                });
            }
        });
    });
}

$G.createLootTableReference_1_20_1 = function(tableId, lootArray, mode) {
    // // 1. 自动化处理物品引用与合并（由于是嵌套数组，需要双重循环解包）
    // lootArray.forEach(([subTableData]) => {
    //     if (Array.isArray(subTableData)) {
    //         subTableData.forEach(([lootGroup]) => {
    //             crateLootReferencesToItems(lootGroup);
    //             LootReferencesToItem(lootGroup, mergeItem);
    //             youkaisCompat(lootGroup)

    //         });
    //     }
    // });

    // // 2. 自动化清空原表
    // if (mode === "REPLACE" && tableId.split(":")[0] !== "minecraft" && tableId.split(":")[0] !== "repurposed_structures") {
    //     clearLootTable([tableId]);
    // }
    
    LootJS.modifiers(event => {
        // 1. 先计算总权重（决定时间轴的总长度）
        let totalWeight = 0;
        lootArray.forEach(([_, weight]) => {
            totalWeight += weight;
        });

        // 2. 遍历数组，按权重分配时间段
        let currentOffset = 0; // 记录当前时间段的起点
        
        lootArray.forEach(([contentArray, weight]) => {
            // 计算当前选项在时间轴上的落点范围 [min, max]
            let minTime = currentOffset;
            let maxTime = currentOffset + weight - 1;
            
            // 累加偏移量，给下一个选项用
            currentOffset += weight;

            if (Array.isArray(contentArray)) {
                contentArray.forEach(([itemArray, minRolls, maxRolls, conditionCallback]) => {
                    // ⭐ 核心修复：每个独立的子组，都去申请一个全新的独立修改器，并套上时间轴
                    let independentLoot = event.addLootTableModifier(tableId);
                    let modifier = independentLoot.timeCheck(totalWeight, minTime, maxTime);
                    
                    // 传入这个绝对独立的 modifier
                    addCustomLoot(modifier, itemArray, minRolls, maxRolls, conditionCallback);
                });
            }
        });
    });
}