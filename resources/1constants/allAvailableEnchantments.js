// 1. 定义基础魔咒数组（以 1.21.1 为基准）
let enchantmentsWithLevels = [
    // ==================== [原版 Minecraft] ====================
    "minecraft:smite",
    "minecraft:soul_speed",
    "minecraft:sweeping_edge", // 1.20.5+ 的 ID
    "minecraft:swift_sneak",
    "minecraft:thorns",
    "minecraft:unbreaking",
    "minecraft:wind_burst",        // 1.21+ 新增
    "minecraft:bane_of_arthropods",
    "minecraft:blast_protection",
    "minecraft:breach",            // 1.21+ 新增
    "minecraft:density",           // 1.21+ 新增
    "minecraft:depth_strider",
    "minecraft:efficiency",
    "minecraft:feather_falling",
    "minecraft:fire_aspect",
    "minecraft:fire_protection",
    "minecraft:fortune",
    "minecraft:frost_walker",
    "minecraft:impaling",
    "minecraft:knockback",
    "minecraft:looting",
    "minecraft:loyalty",
    "minecraft:luck_of_the_sea",
    "minecraft:lure",
    "minecraft:piercing",
    "minecraft:power",
    "minecraft:projectile_protection",
    "minecraft:protection",
    "minecraft:punch",
    "minecraft:quick_charge",
    "minecraft:respiration",
    "minecraft:riptide",
    "minecraft:sharpness",

    "enchantencore:weaving_aspect",

    "farmersdelight:backstabbing",

    "create:capacity",
    "create:potato_recovery",

    "kaleidoscope_end:void_assault",
    "kaleidoscope_end:void_echo",
    "kaleidoscope_end:void_shot",

    "kattersstructures:heavy",
    "kattersstructures:light",
    // "kattersstructures:raj_ambient",
    // "kattersstructures:raj_lightning",
    // "kattersstructures:raj_minion",

    // "nova_structures:boss_behaviour",
    // "nova_structures:conductivity_curse",
    "nova_structures:ghasted",
    "nova_structures:gravity",
    "nova_structures:illagers_bane",
    "nova_structures:outreach",
    "nova_structures:piercing",
    "nova_structures:power",
    // "nova_structures:shulker_boss",
    // "nova_structures:shulker_miniboss",
    "nova_structures:traveler",

    "touhou_little_maid:impeding",
    "touhou_little_maid:speedy",
];
enchantmentsWithLevels = cleanEnchantments(enchantmentsWithLevels);

const enchantmentsWithoutLevels = [
    "kaleidoscope_end:void_walker",
    "kaleidoscope_nether:lava_walker",
    "kattersstructures:blunt",
    "kattersstructures:enlightning",
    "kattersstructures:ocean_heart",
    "kattersstructures:web_walker",
    "minecraft:aqua_affinity",
    "minecraft:channeling",
    "minecraft:flame",
    "minecraft:infinity",
    "minecraft:mending",
    "minecraft:multishot",
    "minecraft:silk_touch",
    "mynethersdelight:poaching",
    "nova_structures:antidote",
    "nova_structures:multishot",
    "nova_structures:photosynthesis",
    "nova_structures:wax_wings",
    "nova_structures:wither_coated",
    "supplementaries:stasis",
    "touhou_little_maid:enders_ender",
];

const allAvailableEnchantments = enchantmentsWithLevels.concat(enchantmentsWithoutLevels);


// ==================== 统一的魔咒列表 ====================
const all_Available_Enchant_books =[

    // ========================================================
    // [原版 & 模组魔咒 - 按附魔可用对象归类]
    // ========================================================
    
    // ---- 装备通用 (工具/武器/防具) ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:unbreaking"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:mending"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:conductivity_curse"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:photosynthesis"] },

    // ---- 防具通用 ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:protection"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:projectile_protection"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:fire_protection"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:blast_protection"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:thorns"] }, 

    // ---- 头部 (头盔) ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:respiration"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:aqua_affinity"] },

    // ---- 躯干 (胸甲) ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:alchemy_curse"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:light"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:ocean_heart"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:outreach"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:antidote"] },

    // ---- 腿部 (护腿) ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:swift_sneak"] }, 

    // ---- 脚部 (靴子) ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:feather_falling"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:depth_strider"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:frost_walker"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:soul_speed"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kaleidoscope_end:void_walker"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kaleidoscope_nether:lava_walker"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:web_walker"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:traveler"] },

    // ---- 飞行 (鞘翅) ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:wax_wings"] },

    // ---- 近战武器 (剑/通用斧) ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:sharpness"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:smite"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:bane_of_arthropods"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:knockback"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:fire_aspect"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:looting"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:sweeping_edge"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["enchantencore:weaving_aspect"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["farmersdelight:backstabbing"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kaleidoscope_end:void_assault"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kaleidoscope_end:void_echo"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:heavy"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:blunt"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:crystal_curse"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:illagers_bane"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["mynethersdelight:poaching"] },

    // ---- 1.21 新增武器：重锤 (Mace) ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:wind_burst"] },        
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:breach"] },            
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:density"] },           

    // ---- 远程武器：弓 (Bow) ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:power"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:punch"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:flame"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:infinity"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:piercing"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:multishot"] },

    // ---- 远程武器：弩 (Crossbow) ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:quick_charge"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:piercing"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:multishot"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["kaleidoscope_end:void_shot"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:ghasted"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:gravity"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:power"] },

    // ---- 远程武器：三叉戟 (Trident) ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:impaling"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:loyalty"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:riptide"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:channeling"] },

    // ---- 采集工具 (镐/斧/铲/锄) ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:efficiency"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:fortune"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:silk_touch"] },

    // ---- 钓鱼竿 (Fishing Rod) ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:luck_of_the_sea"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["minecraft:lure"] }, 

    // ---- 机械动力 (Create) 相关特定装备 ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["create:capacity"] },
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["create:potato_recovery"] },

    // ---- 补充辅助 (Supplementaries) 专属工具 ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["supplementaries:stasis"] },

    // ---- 车万女仆 (Touhou Little Maid) 御币专用 ----
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["touhou_little_maid:impeding"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["touhou_little_maid:speedy"] }, 
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["touhou_little_maid:enders_ender"] },

    // ========================================================
    // [整行注释的魔咒 - 放在最后]
    // ========================================================
    // { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:enlightning"] },
    // { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:raj_ambient"] },
    // { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:raj_lightning"] },
    // { id: "minecraft:book", ratio: 10, enchantRandomly: ["kattersstructures:raj_minion"] },
    // { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:boss_behaviour"] },
    // { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:shulker_boss"] },
    // { id: "minecraft:book", ratio: 10, enchantRandomly: ["nova_structures:shulker_miniboss"] },

];