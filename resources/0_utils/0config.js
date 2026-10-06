// 1. 封装读取配置的函数
function loadConfig() {
    let filePath = "config/better_loot_zibura.json"
    
    // 定义默认配置对象
    let defaultConfig = {
        createDuplicateItemSwapRecipe: true,
        createDuplicateItemPreviewLootTable: true
    }

    // 读取文件
    let config = JsonIO.read(filePath)

    // 情况 A：如果文件完全不存在或读取失败，自动创建默认配置文件并返回
    if (config == null) {
        JsonIO.write(filePath, defaultConfig)
        return defaultConfig
    }

    // 情况 B：如果文件存在，用默认值“垫底”（防止玩家删除了 JSON 里的某一行导致 undefined）
    return Object.assign({}, defaultConfig, config)
}

// 2. 在脚本中直接调用函数获取配置
let config = loadConfig()