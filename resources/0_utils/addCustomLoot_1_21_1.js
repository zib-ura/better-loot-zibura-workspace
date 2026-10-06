//#region 模块主入口: 自定义战利品表生成函数
$G.addCustomLoot_1_21_1 = function(event, lootTableId, config, minRolls, maxRolls, conditionJson) {
    // 检查目标战利品表是否存在
    if (!event.hasLootTable(lootTableId)) return;

    //#region 映射与常量定义
    const CONDITION_MAP = {
        "matchTool": "matchTool",
        "matchMainHand": "matchTool", 
        "survivesExplosion": "survivesExplosion",
        "randomChance": "randomChance",
        "killedByPlayer": "killedByPlayer",
        "matchBiome": "matchBiome",
        "matchDimension": "matchDimension",
        "matchTime": "matchTime",
        "matchCustomCondition": "matchCustomCondition",
    };
    const CONDITION_KEYS = Object.keys(CONDITION_MAP);
    //#endregion

    //#region 辅助函数: 验证逻辑 (模组/附魔/药水检测)
    
    // 检查附魔ID是否合法且已加载
    function isEnchantmentValid(enchantId) {
        if (!enchantId) return false;
        let parts = enchantId.split(":");
        if (parts.length < 2) return false;
        let modId = parts[0];
        if (modId === "minecraft") {
            return allAvailableEnchantments.includes(enchantId);
        }
        return Platform.isLoaded(modId);
    }

    // 检查药水/效果ID是否合法且已加载
    function isPotionValid(potionId) {
        if (!potionId) return false;
        let parts = potionId.split(":");
        if (parts.length < 2) return false;
        let modId = parts[0];
        if (modId === "minecraft") {
            return allAvailablePotions.includes(potionId);
        }
        return Platform.isLoaded(modId);
    }
    //#endregion

    //#region 第一阶段: 配置预处理、暗号解析与有效性清洗
    let cleanConfig = [];
    // const configMap = {};
    // if (typeof mergeItem !== "undefined" && Array.isArray(mergeItem)) {
    //     mergeItem.forEach(entry => { configMap[entry.result] = entry.candidates; });
    // }
    const resolvedCache = {};
    const skipRegex = /^lootjs:([a-zA-Z0-9_]+)_and_\1_block$/;

    config.forEach(group => {
        // 构建标准化的组对象
        let cleanGroup = {
            groupName: group.groupName || "default",
            groupWeight: group.groupWeight || 1,
            min: group.min,
            max: group.max,
            damage: group.damage !== undefined ? group.damage : undefined,
            enchantChance: group.enchantChance !== undefined ? group.enchantChance : 0,
            enchantLevels: group.enchantLevels !== undefined ? group.enchantLevels : undefined,
            exactEnchants: group.exactEnchants !== undefined ? group.exactEnchants : undefined,
            enchantRandomly: group.enchantRandomly !== undefined ? group.enchantRandomly : undefined, 
            jsonFunction: group.jsonFunction !== undefined ? group.jsonFunction : undefined,
            conditions: {},
            items: []
        };

        // 收集组级别的生成条件
        CONDITION_KEYS.forEach(key => {
            if (group[key] !== undefined) {
                cleanGroup.conditions[key] = group[key];
            }
        });

        if (group.items) {
            group.items.forEach(rawItem => {
                let item = Object.assign({}, rawItem);

                //#region 2.1 特殊模板引用的解析 (Crate / Single 字符串拼接解析)
                if (item.reference) {
                    let match = item.reference.match(/^lootjs:([a-zA-Z0-9_]+)_and_\1_block$/);
                    if (match) {
                        let baseName = match[1];
                        // 1. 优先拼接 _block (如 lootjs:apple_block) 查找方块/箱子
                        let crateRef = `lootjs:${baseName}_block`;
                        // 2. 备用直接拼接 (如 lootjs:apple) 查找单个物品
                        let singleRef = `lootjs:${baseName}`;

                        // 获取对应的候选物品数组
                        let candidates = configMap[crateRef] || configMap[singleRef];
                        let finalId = null;

                        if (candidates && candidates.length > 0) {
                            for (let candidate of candidates) {
                                if (Item.exists(candidate)) { 
                                    finalId = candidate;
                                    break;
                                }
                            }
                        }

                        if (finalId) {
                            item.id = finalId;
                            delete item.reference;
                        } else {
                            item = null; // 无有效候选，标记废弃
                        }
                    }
                }

                if (!item) return;
                //#endregion

                // 妖怪归家兼容
                if (Platform.isLoaded("youkaishomecoming") && item.id && item.id.startsWith("youkaisfeasts:")) {
                    item.id = item.id.replace("youkaisfeasts:", "youkaishomecoming:");
                }
                if (Platform.isLoaded("youkaisfeasts") && item.id && item.id.startsWith("youkaishomecoming:")) {
                    item.id = item.id.replace("youkaishomecoming:", "youkaisfeasts:");
                }

                //#region 候选/引用物品 (Reference) 解析
                if (item.reference && !skipRegex.test(item.reference)) {
                    let refId = item.reference;
                    if (configMap[refId] ) {
                        if (resolvedCache[refId]) {
                            item.id = resolvedCache[refId];
                            delete item.reference;
                        } else {
                            let candidates = configMap[refId];
                            let foundValidId = null;

                            // 遍历候选列表，选择第一个游戏中实际存在的物品
                            for (let candidate of candidates) {
                                if (Item.exists(candidate)) {
                                    foundValidId = candidate;
                                    break;
                                }
                            }

                            if (foundValidId) {
                                item.id = foundValidId;
                                resolvedCache[refId] = foundValidId;
                                delete item.reference;
                            } else {
                                return; // 无有效候选，直接丢弃该项
                            }
                        }
                    } else {
                        return; // 映射表中未找到暗号，丢弃该项
                    }
                }
                //#endregion

                //#region 物品属性检测与清洗 (附魔/药水)
                // 1. 过滤随机附魔
                let finalEnchantRandomly = item.enchantRandomly ?? group.enchantRandomly;
                if (finalEnchantRandomly && Array.isArray(finalEnchantRandomly)) {
                    let filteredEnchants = finalEnchantRandomly.filter(e => isEnchantmentValid(e));
                    if (filteredEnchants.length === 0) return; // 附魔全无效则抛弃
                    item.enchantRandomly = filteredEnchants;
                }

                // 2. 过滤药水效果
                let finalPotion = item.potion ?? group.potion;
                if (finalPotion) {
                    if (Array.isArray(finalPotion)) {
                        let filteredPotion = finalPotion.filter(p => isPotionValid(p));
                        if (filteredPotion.length === 0) return;
                        item.potion = filteredPotion;
                    } else if (typeof finalPotion === "string") {
                        if (!isPotionValid(finalPotion)) return;
                        item.potion = finalPotion;
                    }
                }

                // 3. 特殊逻辑：单附魔书转远古书
                if (item.id === "minecraft:book" && item.enchantRandomly && Array.isArray(item.enchantRandomly) && item.enchantRandomly.length === 1) {
                    if (Item.exists("immersiveenchanting:ancient_book")) {
                        item.id = "immersiveenchanting:ancient_book";
                    }
                }
                //#endregion

                //#region 物品合法性校验
                let isValid = false;
                if (item.id === "empty" || item.type === "empty" || item.empty === true) {
                    isValid = true;
                } else if (item.reference || item.type === "reference") {
                    let refId = item.reference || item.id;
                    if (event.hasLootTable(refId)) isValid = true;
                } else {
                    if (item.id && Item.exists(item.id)) isValid = true;
                }

                if (isValid) {
                    cleanGroup.items.push(item);
                }
                //#endregion
            });
        }

        if (cleanGroup.items.length > 0) {
            cleanConfig.push(cleanGroup);
        }
    });

    if (cleanConfig.length === 0) return;
    //#endregion

    //#region 第二阶段: 计算组内生成比例 (Ratio)
    cleanConfig.forEach(group => {
        let totalRatio = 0;
        group.items.forEach(item => {
            totalRatio += (item.ratio !== undefined ? item.ratio : 1);
        });
        group._totalRatio = totalRatio;
    });
    //#endregion

    //#region 第三阶段: 构建 LootTable 池 (Pool) 与条目 (Entries)
    let commonMultiplier = 100000; // 用于比例计算的权重放大系数

    let lootTable = event.getLootTable(lootTableId);
    lootTable.createPool(pool => {
        cleanConfig.forEach(group => {
            if (group._totalRatio === 0) return;

            group.items.forEach(item => {
                let entry;
                let isNormalItem = false;
                let isReference = false;

                //#region 3.1 创建基础 LootEntry
                if (item.id === "empty" || item.type === "empty" || item.empty === true) {
                    entry = LootEntry.empty();
                } else if (item.reference || item.type === "reference") {
                    entry = LootEntry.reference(item.reference || item.id);
                    isReference = true;
                } else {
                    entry = LootEntry.of(item.id);
                    isNormalItem = true;                    
                }

                // 依据 groupWeight 与 ratio 动态计算并设置最终权重
                let itemWeight = (group.groupWeight * (item.ratio || 1) * commonMultiplier) / group._totalRatio;
                entry.withWeight(Math.round(itemWeight));
                //#endregion

                //#region 3.2 应用生成条件与概率控制
                CONDITION_KEYS.forEach(key => {
                    let conditionValue = item[key] !== undefined ? item[key] : group.conditions[key];
                    if (conditionValue !== undefined) {
                        let targetApi = CONDITION_MAP[key];
                        if (typeof entry[targetApi] === "function") {
                            if (conditionValue === true) {
                                entry[targetApi]();
                            } else if (Array.isArray(conditionValue)) {
                                entry[targetApi].apply(entry, conditionValue);
                            } else {
                                entry[targetApi](conditionValue);
                            }
                        }
                    }
                });

                if (item.randomChance !== undefined) {
                    entry.randomChance(item.randomChance);
                }
                //#endregion

                //#region 3.3 计算继承后的最终物品属性
                let maxCount = item.max ?? group.max ?? 1;
                let minCount = (item.max !== undefined && group.min !== undefined && item.max < group.min) ? 0 : (item.min ?? group.min ?? 1);

                let finalDamage = item.damage ?? group.damage;
                let finalEnchantLevels = item.enchantLevels ?? group.enchantLevels;
                let finalExactEnchants = item.exactEnchants ?? group.exactEnchants;
                let finalEnchantRandomly = item.enchantRandomly ?? group.enchantRandomly;
                let finalNbt = item.nbt ?? group.nbt;
                let finalJsonFunction = item.jsonFunction ?? group.jsonFunction;
                let finalPotion = item.potion ?? group.potion;
                //#endregion

                //#region 3.4 写入常规物品属性 (针对 1.21.1 协议适配)
                if (isNormalItem) {
                    entry.setCount([minCount, maxCount]);
                    
                    if (finalNbt) entry.setCustomData(finalNbt); 
                    // if (finalJsonFunction) entry.jsonFunction(finalJsonFunction);

                    if (finalJsonFunction) {
                        // 如果传入的是单个对象，转为单元素数组；如果本身就是数组，保持不变
                        let functionsArray = Array.isArray(finalJsonFunction) 
                            ? finalJsonFunction 
                            : [finalJsonFunction];

                        functionsArray.forEach(fn => {
                            entry.jsonFunction(fn);
                        });
                    }  
                    if (finalPotion) entry.addPotion(finalPotion);
                    if (finalDamage !== undefined) entry.damage(finalDamage);
                    
                    if (finalEnchantLevels) {
                        entry.enchantWithLevels(finalEnchantLevels); 
                    }
                    if (finalExactEnchants) {
                        entry.enchant(builder => {
                            for (let enchId in finalExactEnchants) {
                                builder.withEnchantment(enchId, finalExactEnchants[enchId]);
                            }
                        });
                    }

                    //#region 统一的附魔注入逻辑 (有等级 / 无等级区分)
                    if (finalEnchantRandomly) {
                        if (Array.isArray(finalEnchantRandomly)) {
                            finalEnchantRandomly = cleanEnchantments(finalEnchantRandomly);
                            let withLevels = finalEnchantRandomly.filter(e => enchantmentsWithLevels.includes(e));
                            let withoutLevels = finalEnchantRandomly.filter(e => enchantmentsWithoutLevels.includes(e));

                            // 情况 A: 远古书 (Immersive Enchanting 模组)
                            if (item.id === "immersiveenchanting:ancient_book") {
                                let levelsComponent = {};
                                withLevels.forEach(e => { levelsComponent[e] = 1; });
                                withoutLevels.forEach(e => { levelsComponent[e] = 1; });
                                
                                if (Object.keys(levelsComponent).length > 0) {
                                    entry.jsonFunction({
                                        "function": "minecraft:set_components",
                                        "components": {
                                            "minecraft:stored_enchantments": {
                                                "levels": levelsComponent
                                            }
                                        }
                                    });
                                }
                            }
                            // 情况 B: 其他普通物品/武器/工具/装备
                            else {
                                // 有等级附魔处理
                                if (withLevels.length > 0) {
                                    entry.enchantRandomly(withLevels);
                                }
                                // 无等级附魔强制赋予 1 级
                                if (withoutLevels.length > 0) {
                                    entry.enchant(builder => {
                                        withoutLevels.forEach(e => {
                                            builder.withEnchantment(e, 1);
                                        });
                                    });
                                }
                            }
                        } else {
                            entry.enchantRandomly(); 
                        }
                    }
                    //#endregion
                }

                if (isReference) {
                    entry.setCount([minCount, maxCount]);
                }
                //#endregion

                pool.addEntry(entry);
            });
        });

        //#region 3.5 设置 Pool 级别的 Rolls 与 全局条件判断
        pool.rolls([minRolls, maxRolls]);

        if (conditionJson && typeof conditionJson === "object") {
            pool.when(c => {
                const applyConditions = (ctx, json) => {
                    Object.keys(json).forEach(key => {
                        let actualApiKey = CONDITION_MAP[key] || key;
                        if (typeof ctx[actualApiKey] === "function") {
                            let val = json[key];
                            if ((actualApiKey === "matchAnyOf" || actualApiKey === "matchAllOf") && Array.isArray(val)) {
                                ctx[actualApiKey](subCtx => {
                                    val.forEach(subJson => applyConditions(subCtx, subJson));
                                });
                            } 
                            else if (Array.isArray(val)) {
                                ctx[actualApiKey].apply(ctx, val);
                            } else {
                                ctx[actualApiKey](val);
                            }
                        }
                    });
                };
                applyConditions(c, conditionJson);
            });
        } else if (typeof conditionJson === "function") {
            pool.when(conditionJson);
        }
        //#endregion
    });
    //#endregion
};
//#endregion