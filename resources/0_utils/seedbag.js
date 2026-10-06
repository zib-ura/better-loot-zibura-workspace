$G.getSeedBagConfig_1_21_1 = function(bag_type, seed_type, count) {
    let valid_seed_type = [];
    if (!Item.exists(bag_type)) {
        return [];
    }
    seed_type.forEach(type => {
        if (configMap["lootjs:".concat(type)]) {
            let ValidId = null;
            let candidate = configMap["lootjs:".concat(type)];
            for (let id of candidate) {
                if (Item.exists(id)) {
                    ValidId = id;
                    break;
                } 
            }

            if (ValidId) {
                valid_seed_type.push(ValidId);
            }
            else {
                return;
            }
        } else {
            return;
        }
    })

    let bundleList = [];
    let groupSize = Math.min(Math.ceil(valid_seed_type.length / 6), 3);
    if (bag_type === "minecraft:bundle") {
        // 第一步：拆分成每 4 个一组
        // let groups = [];
        // for (let i = 0; i < valid_seed_type.length; i += groupSize) {
        //     groups.push(valid_seed_type.slice(i, i + groupSize));
        // }

        let groups = [];
        let offsets = [1, 0, -1]; // 波动规则
        let offsetIdx = 0; // 记录当前使用的是哪个偏移量

        let i = 0;
        while (i < valid_seed_type.length) {
            // 1. 计算当前组的波动态大小（基础大小 + 动态偏移量）
            let currentOffset = offsets[offsetIdx % offsets.length];
            let currentSize = groupSize + currentOffset;

            // 防止 currentSize < 0 导致死循环（容错处理）
            if (currentSize < 0) currentSize = 0;

            // 2. 切片并推入结果
            groups.push(valid_seed_type.slice(i, i + currentSize));

            // 3. 递进索引 i，并更新偏移量指针
            i += currentSize;
            offsetIdx++;
        }        

        // 第二步：如果只有 1 组，单独生成一个 bundle
        if (groups.length === 1) {
            let seedContents = groups[0].map(id => ({ id: id, count: count }));
            bundleList.push({
                id: "minecraft:bundle",
                ratio: 10,
                jsonFunction: {
                    "function": "minecraft:set_components",
                    "components": {
                        "minecraft:bundle_contents": seedContents
                    }
                }
            });
        }

        // 第三步：两两组合生成最终的 bundle 对象
        for (let i = 0; i < groups.length; i++) {
            for (let j = i + 1; j < groups.length; j++) {
                let seedContents = [];

                // 处理第一组
                for (let k = 0; k < groups[i].length; k++) {
                    seedContents.push({
                        id: groups[i][k],
                        count: count
                    });
                }

                // 处理第二组
                for (let k = 0; k < groups[j].length; k++) {
                    seedContents.push({
                        id: groups[j][k],
                        count: count
                    });
                }

                bundleList.push({
                    id: "minecraft:bundle",
                    ratio: 10,
                    jsonFunction: {
                        "function": "minecraft:set_components",
                        "components": {
                            "minecraft:bundle_contents": seedContents
                        }
                    }
                });
            }
        }
    }

    return bundleList;
};

$G.getSeedBagConfig_1_20_1 = function(bag_type, seed_type, count) {
    let valid_seed_type = [];
    if (!Item.exists(bag_type)) {
        return [];
    }
    
    seed_type.forEach(type => {
        if (configMap["lootjs:".concat(type)]) {
            let ValidId = null;
            let candidate = configMap["lootjs:".concat(type)];
            for (let id of candidate) {
                if (Item.exists(id)) {
                    ValidId = id;
                    break;
                } 
            }

            if (ValidId) {
                valid_seed_type.push(ValidId);
            } else {
                return;
            }
        } else {
            return;
        }
    });

    let bundleList = [];
    let groupSize = Math.min(Math.ceil(valid_seed_type.length / 6), 3);
    
    if (bag_type === "minecraft:bundle") {
        // 第一步：拆分成每 groupSize 个一组
        let groups = [];
        let offsets = [1, 0, -1]; // 波动规则
        let offsetIdx = 0; // 记录当前使用的是哪个偏移量

        let i = 0;
        while (i < valid_seed_type.length) {
            // 1. 计算当前组的波动态大小（基础大小 + 动态偏移量）
            let currentOffset = offsets[offsetIdx % offsets.length];
            let currentSize = groupSize + currentOffset;

            // 防止 currentSize < 0 导致死循环（容错处理）
            if (currentSize < 0) currentSize = 0;

            // 2. 切片并推入结果
            groups.push(valid_seed_type.slice(i, i + currentSize));

            // 3. 递进索引 i，并更新偏移量指针
            i += currentSize;
            offsetIdx++;
        }  

        // 辅助函数：构建 1.20.1 版本的 jsonFunction (set_nbt)
        let create1201BundleFunction = (seedIdList) => {
            // 1.20.1 的 Bundle 使用 Items 数组，且 Count 必须是 byte 类型 (如 "1b")
            let itemsNbt = seedIdList.map(id => ({
                id: id,
                Count: count 
            }));

            return {
                "function": "minecraft:set_nbt",
                "tag": JSON.stringify({
                    Items: itemsNbt
                })
            };
        };

        // 第二步：如果只有 1 组，单独生成一个 bundle
        if (groups.length === 1) {
            bundleList.push({
                id: "minecraft:bundle",
                ratio: 10,
                jsonFunction: create1201BundleFunction(groups[0])
            });
        }

        // 第三步：两两组合生成最终的 bundle 对象
        for (let i = 0; i < groups.length; i++) {
            for (let j = i + 1; j < groups.length; j++) {
                let combinedSeeds = groups[i].concat(groups[j]);
                
                bundleList.push({
                    id: "minecraft:bundle",
                    ratio: 10,
                    jsonFunction: create1201BundleFunction(combinedSeeds)
                });
            }
        }
    }

    return bundleList;
};


// $G.getSeedBagConfig_1_21_1 = function(bag_type, seed_type, count) {
//     let valid_seed_type = [];
//     if (!Item.exists(bag_type)) {
//         return [];
//     }
//     seed_type.forEach(type => {
//         if (configMap["lootjs:".concat(type)]) {
//             let ValidId = null;
//             let candidate = configMap["lootjs:".concat(type)];
//             for (let id of candidate) {
//                 if (Item.exists(id)) {
//                     ValidId = id;
//                     break;
//                 } 
//             }

//             if (ValidId) {
//                 valid_seed_type.push(ValidId);
//             }
//         }
//     });

//     let bundleList = [];
//     let groupSize = Math.min(Math.ceil(valid_seed_type.length / 10), 4);

//     let buildGroups = (list, size) => {
//         let groups = [];
//         for (let i = 0; i < list.length; i += size) {
//             groups.push(list.slice(i, i + size));
//         }
//         return groups;
//     };

//     let groups = buildGroups(valid_seed_type, groupSize);

//     // 辅助函数：根据容器类型构建 components 内容
//     let createComponents = (seedIdList) => {
//         if (bag_type === "minecraft:bundle") {
//             let seedContents = seedIdList.map(id => ({ id: id, count: count }));
//             return {
//                 "minecraft:bundle_contents": seedContents
//             };
//         } else if (bag_type === "supplementaries:sack") {
//             // 正确方式：使用 minecraft:container 作为组件名
//             let containerContents = seedIdList.map((id, index) => ({
//                 item: {
//                     id: id,
//                     count: count
//                 },
//                 slot: index
//             }));
//             return {
//                 "minecraft:container": containerContents
//             };
//         }
//         return {};
//     };

//     let pushBundle = (seedIdList) => {
//         bundleList.push({
//             id: bag_type,
//             ratio: 10,
//             jsonFunction: {
//                 "function": "minecraft:set_components",
//                 "components": createComponents(seedIdList)
//             }
//         });
//     };

//     // 生成逻辑
//     if (groups.length === 1) {
//         pushBundle(groups[0]);
//     } else {
//         for (let i = 0; i < groups.length; i++) {
//             for (let j = i + 1; j < groups.length; j++) {
//                 pushBundle(groups[i].concat(groups[j]));
//             }
//         }
//     }

//     return bundleList;
// };