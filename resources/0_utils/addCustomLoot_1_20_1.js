//#region 模块主入口: 1.20.1 自定义战利品表生成函数
$G.addCustomLoot_1_20_1 = function(lootTable, config, minRolls, maxRolls, conditionJson) {

    //#region 映射与常量定义
    const CONDITION_MAP = {
        "matchTool": { api: "matchMainHand", type: "normal" }, 
        "matchMainHand": { api: "matchMainHand", type: "normal" },
        "matchOffHand": { api: "matchOffHand", type: "normal" },
        "matchEquip": { api: "matchEquip", type: "normal" },
        "survivesExplosion": { api: "survivesExplosion", type: "boolean" },
        "matchTime": { api: "timeCheck", type: "normal" }, 
        "matchWeather": { api: "weatherCheck", type: "weather" }, 
        "matchBiome": { api: "biome", type: "normal" }, 
        "matchDimension": { api: "anyDimension", type: "normal" }, 
        "matchStructure": { api: "anyStructure", type: "normal" }, 
        "isLightLevel": { api: "lightLevel", type: "normal" }, 
        "randomChance": { api: "randomChance", type: "normal" },
        "randomTableBonus": { api: "randomChanceWithEnchantment", type: "normal" }, 
        "randomChanceWithEnchantment": { api: "randomChanceWithEnchantment", type: "normal" },
        "killedByPlayer": { api: "killedByPlayer", type: "boolean" },
        "matchEntity": { api: "matchEntity", type: "callback" },
        "matchDirectAttacker": { api: "matchDirectKiller", type: "callback" }, 
        "matchAttacker": { api: "matchKiller", type: "callback" },
        "matchPlayer": { api: "matchPlayer", type: "callback" },
        "matchPlayerCustom": { api: "playerPredicate", type: "callback" },
        "matchEntityCustom": { api: "entityPredicate", type: "callback" },
        "matchAttackerCustom": { api: "killerPredicate", type: "callback" },
        "matchDirectAttackerCustom": { api: "directKillerPredicate", type: "callback" },
        "matchDamageSource": { api: "matchDamageSource", type: "callback" },
        "matchDistance": { api: "distanceToKiller", type: "normal" }, 
        "matchAllOf": { api: "and", type: "callback" }, 
        "matchAnyOf": { api: "or", type: "callback" },  
        "matchCustomCondition": { api: "customCondition", type: "normal" }
    };
    const CONDITION_KEYS = Object.keys(CONDITION_MAP);
    //#endregion

    //#region 辅助函数: 验证逻辑 (模组/附魔/药水检测)
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

    //#region 第一阶段: 绑定战利品表顶层生成条件 (LootTable Level Modifier)
    if (conditionJson && typeof conditionJson === "object") {
        Object.keys(conditionJson).forEach(key => {
            if (CONDITION_MAP[key]) {
                let targetApi = CONDITION_MAP[key].api;
                let targetType = CONDITION_MAP[key].type;
                let conditionValue = conditionJson[key];

                if (targetType === "boolean") {
                    if (conditionValue === true) lootTable[targetApi]();
                }
                else if (targetType === "weather") {
                    if (Array.isArray(conditionValue)) {
                        let weatherObj = {};
                        if (conditionValue[0] !== null) weatherObj.raining = conditionValue[0];
                        if (conditionValue[1] !== null) weatherObj.thundering = conditionValue[1];
                        lootTable[targetApi](weatherObj);
                    } else {
                        lootTable[targetApi](conditionValue);
                    }
                }
                else if ((key === "matchAnyOf" || key === "matchAllOf") && Array.isArray(conditionValue)) {
                    lootTable[targetApi](subCondition => {
                        conditionValue.forEach(subObj => {
                            Object.keys(subObj).forEach(subKey => {
                                if (CONDITION_MAP[subKey]) {
                                    let subApi = CONDITION_MAP[subKey].api;
                                    if (Array.isArray(subObj[subKey])) {
                                        subCondition[subApi].apply(subCondition, subObj[subKey]);
                                    } else {
                                        subCondition[subApi](subObj[subKey]);
                                    }
                                }
                            });
                        });
                    });
                }
                else if (Array.isArray(conditionValue)) {
                    lootTable[targetApi].apply(lootTable, conditionValue);
                }
                else {
                    lootTable[targetApi](conditionValue);
                }
            }
        });
    }

    if (typeof conditionJson === "function") {
        conditionJson(lootTable);
    }
    //#endregion

    //#region 第二阶段: 构建 Pool 与配置预清洗
    lootTable.pool(pool => { 
        pool.rolls([minRolls, maxRolls]);
        
        let cleanConfig = [];
        // const configMap = {};
        // if (typeof mergeItem !== "undefined" && Array.isArray(mergeItem)) {
        //     mergeItem.forEach(entry => { configMap[entry.result] = entry.candidates; });
        // }
        const resolvedCache = {};

        config.forEach(group => {
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

            // 提取组级条件
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
                                    if (Item.exists(candidate)) { // 1.20.1下如需兼容可用 !Item.of(candidate).isEmpty() 或 Item.exists
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

                    //#region 2.2 通用暗号引用解析 (Reference Map)
                    if (item.reference) {
                        let refId = item.reference;
                        if (configMap[refId]) {
                            if (resolvedCache[refId]) {
                                item.id = resolvedCache[refId];
                                delete item.reference;
                            } else {
                                let candidates = configMap[refId];
                                let foundValidId = null;

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
                                    return;
                                }
                            }
                        } else {
                            return;
                        }
                    }
                    //#endregion

                    //#region 2.3 属性清洗 (附魔 / 药水 / 特殊书籍转换)
                    // 1. 清理附魔
                    let finalEnchantRandomly = item.enchantRandomly ?? group.enchantRandomly;
                    if (finalEnchantRandomly && Array.isArray(finalEnchantRandomly)) {
                        let filteredEnchants = finalEnchantRandomly.filter(e => isEnchantmentValid(e));
                        if (filteredEnchants.length === 0) return;
                        item.enchantRandomly = filteredEnchants;
                    }

                    // 2. 清理药水
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

                    // 3. 单附魔书转远古书
                    if (item.id === "minecraft:book" && item.enchantRandomly && Array.isArray(item.enchantRandomly) && item.enchantRandomly.length === 1) {
                        if (Item.exists("immersiveenchanting:ancient_book")) {
                            item.id = "immersiveenchanting:ancient_book";
                        }
                    }
                    //#endregion

                    //#region 2.4 合法性判定并压入 cleanGroup
                    let isValid = false;
                    if (item.id === "empty" || item.type === "empty" || item.empty === true) {
                        isValid = true;
                    } else if (item.reference || item.type === "reference") {
                        isValid = true; 
                    } else {
                        if (item.id && Item.exists(item.id)) {
                            isValid = true;
                        }
                    }

                    if (isValid) {
                        cleanGroup.items.push(item);
                    }
                    //#endregion
                });
            }

            // 计算组内比率和
            let totalRatio = 0;
            cleanGroup.items.forEach(item => {
                totalRatio += (item.ratio !== undefined ? item.ratio : 1);
            });
            cleanGroup._totalRatio = totalRatio;

            if (totalRatio > 0) {
                cleanConfig.push(cleanGroup);
            }
        });
        //#endregion

        //#region 第三阶段: 构建 1.20 战利品项 (Weighted Loot Entries)
        let entries = [];
        let commonMultiplier = 100000;

        cleanConfig.forEach(group => {
            group.items.forEach(item => {
                let entry;
                let isNormalItem = false;
                let isReference = false;

                // 计算加权比例
                let itemWeight = (group.groupWeight * (item.ratio || 1) * commonMultiplier) / group._totalRatio;

                //#region 3.1 创建 LootEntry
                if (item.id === "empty" || item.type === "empty" || item.empty === true) {
                    entry = LootEntry.withChance({ "type": "minecraft:empty" }, itemWeight);
                } else if (item.reference || item.type === "reference") {
                    entry = LootEntry.withChance({
                        "type": "minecraft:loot_table",
                        "name": item.reference || item.id
                    }, itemWeight);
                    isReference = true;
                } else {
                    entry = LootEntry.withChance(item.id, itemWeight);
                    isNormalItem = true;
                }
                //#endregion

                //#region 3.2 注入条目生成条件 (Item Level Conditions)
                CONDITION_KEYS.forEach(key => {
                    let conditionValue = item[key] !== undefined ? item[key] : group.conditions[key];
                    if (conditionValue !== undefined) {
                        let targetApi = CONDITION_MAP[key].api;
                        let targetType = CONDITION_MAP[key].type;

                        entry.when(c => {
                            if (targetType === "boolean") {
                                if (conditionValue === true) c[targetApi]();
                            }
                            else if (targetType === "weather") {
                                if (Array.isArray(conditionValue)) {
                                    let weatherObj = {};
                                    if (conditionValue[0] !== null) weatherObj.raining = conditionValue[0];
                                    if (conditionValue[1] !== null) weatherObj.thundering = conditionValue[1];
                                    c[targetApi](weatherObj);
                                } else {
                                    c[targetApi](conditionValue);
                                }
                            }
                            else if (Array.isArray(conditionValue)) {
                                c[targetApi].apply(c, conditionValue);
                            }
                            else if (targetType === "callback" || typeof conditionValue === "function") {
                                c[targetApi](conditionValue);
                            }
                            else {
                                c[targetApi](conditionValue);
                            }
                        });
                    }
                });

                if (item.randomChance !== undefined) {
                    entry.when((c) => c.randomChance(item.randomChance));
                }
                //#endregion

                //#region 3.3 计算属性继承
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

                //#region 3.4 写入 1.20.1 NBT 与物品逻辑
                if (isNormalItem) {
                    entry.limitCount([minCount, maxCount]);
                    
                    if (finalNbt) entry.addNBT(finalNbt);
                    // if (finalJsonFunction) {
                    //     entry.functions(ItemFilter.ALWAYS_TRUE, (f) => {
                    //         f.customFunction(finalJsonFunction);
                    //     });
                    // }
                    // if (finalNbt) entry.setCustomData(finalNbt); 
                    if (finalJsonFunction) {
                        // 如果传入的是单个对象，转为单元素数组；如果本身就是数组，保持不变
                        let functionsArray = Array.isArray(finalJsonFunction) 
                            ? finalJsonFunction 
                            : [finalJsonFunction];

                        functionsArray.forEach(fn => {
                            entry.functions(ItemFilter.ALWAYS_TRUE, (f) => {
                            // 遍历数组，依次注册每个 customFunction
                                if (fn) {
                                    f.customFunction(fn);
                                }
                            });
                        });
                    }  
                    if (finalPotion) entry.addPotion(finalPotion);
                    if (finalDamage !== undefined) entry.damage(finalDamage);
                    
                    if (finalEnchantLevels !== undefined && finalEnchantLevels !== null) {
                        if (Array.isArray(finalEnchantLevels)) {
                            entry.enchantWithLevels(finalEnchantLevels);
                        }
                    }
                    if (finalExactEnchants) {
                        entry.enchant(builder => {
                            for (let id in finalExactEnchants) {
                                builder.withEnchantment(id, finalExactEnchants[id]);
                            }
                        });
                    }

                    //#region 有等级 / 无等级附魔处理 (1.20.1 专有结构)
                    if (finalEnchantRandomly) {
                        if (Array.isArray(finalEnchantRandomly)) {
                            finalEnchantRandomly = cleanEnchantments(finalEnchantRandomly);
                            let withLevels = finalEnchantRandomly.filter(e => enchantmentsWithLevels.includes(e));
                            let withoutLevels = finalEnchantRandomly.filter(e => enchantmentsWithoutLevels.includes(e));

                            // 1. 远古书直接写入 1.20.1 NBT 数据结构
                            if (item.id === "immersiveenchanting:ancient_book") {
                                let storedEnchants = [];
                                withLevels.forEach(e => storedEnchants.push({ id: e, lvl: 1 }));
                                withoutLevels.forEach(e => storedEnchants.push({ id: e, lvl: 1 }));
                                
                                if (storedEnchants.length > 0) {
                                    entry.addNBT({ StoredEnchantments: storedEnchants });
                                }
                            } 
                            // 2. 通用物品与书籍
                            else {
                                if (withLevels.length > 0) {
                                    entry.enchantRandomly(withLevels);
                                }
                                if (withoutLevels.length > 0) {
                                    entry.functions(ItemFilter.ALWAYS_TRUE, (f) => {
                                        f.customFunction({ "enchantments": withoutLevels, "function": "minecraft:enchant_randomly" });
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
                    entry.limitCount([minCount, maxCount]);
                }
                //#endregion
                
                entries.push(entry);
            });
        });

        // 最终将所有计算好的条目打包放入 Pool
        if (entries.length > 0) {
            pool.addWeightedLoot(entries);
        }
        //#endregion
    });
    //#endregion
};
//#endregion 