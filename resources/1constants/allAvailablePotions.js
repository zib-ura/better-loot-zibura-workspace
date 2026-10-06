// =========================================================================
// 1. 声明 1.20.1 和 1.21.1 独立的药水注册表数据
// =========================================================================

// 1.20.1 完整药水 ID 列表 (包含 14 种经典药水及其延长/强化版本)
const POTIONS_1_20_1 = [
    "minecraft:water", "minecraft:awkward", "minecraft:thick", "minecraft:mundane",
    "minecraft:healing", "minecraft:strong_healing",
    "minecraft:regeneration", "minecraft:long_regeneration", "minecraft:strong_regeneration",
    "minecraft:swiftness", "minecraft:long_swiftness", "minecraft:strong_swiftness",
    "minecraft:strength", "minecraft:long_strength", "minecraft:strong_strength",
    "minecraft:fire_resistance", "minecraft:long_fire_resistance",
    "minecraft:night_vision", "minecraft:long_night_vision",
    "minecraft:invisibility", "minecraft:long_invisibility",
    "minecraft:water_breathing", "minecraft:long_water_breathing",
    "minecraft:leaping", "minecraft:long_leaping", "minecraft:strong_leaping",
    "minecraft:slow_falling", "minecraft:long_slow_falling",
    "minecraft:weakness", "minecraft:long_weakness",
    "minecraft:slowness", "minecraft:long_slowness", "minecraft:strong_slowness",
    "minecraft:poison", "minecraft:long_poison", "minecraft:strong_poison",
    "minecraft:harming", "minecraft:strong_harming",
    "minecraft:turtle_master", "minecraft:long_turtle_master", "minecraft:strong_turtle_master"
];

// 1.21.1 完整药水 ID 列表 (在 1.20.1 的基础上额外增加 1.21 试炼药水系列)
const POTIONS_1_21_1 = POTIONS_1_20_1.concat([
    "minecraft:oozing",       // 渗液药水 (Oozing)
    "minecraft:weaving",      // 织网药水 (Weaving)
    "minecraft:infested",     // 虫蚀药水 (Infested)
    "minecraft:wind_charged"  // 蓄风药水 (Wind Charged)
]);

// =========================================================================
// 2. 无分发器、直接进行版本判定，动态暴露“当前版本”所有可用的药水列表
// =========================================================================

const currentMCVersion = String(Platform.getMinecraftVersion());

// 根据当前加载的游戏版本，自动为全局变量 allAvailablePotions 赋上对应的数据
let allAvailablePotions;
if (currentMCVersion === "2101") {
    allAvailablePotions = POTIONS_1_21_1; // 如果是 1.21.1 运行环境，载入含有新药水的列表
} else {
    allAvailablePotions = POTIONS_1_20_1; // 如果是 1.20.1 运行环境，载入旧版列表
}


// ==========================================
// 正面药水 - 常见 (Common)
// 普通: 30 | 喷溅: 18 | 滞留: 9
// ==========================================
const COMMON_POSITIVE_POTIONS = [
  // 瞬间治疗
  { id: "minecraft:potion", ratio: 30, potion: "minecraft:healing" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "minecraft:healing" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "minecraft:healing" },
  // 再生
  { id: "minecraft:potion", ratio: 30, potion: "minecraft:regeneration" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "minecraft:regeneration" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "minecraft:regeneration" },
  // 力量
  { id: "minecraft:potion", ratio: 30, potion: "minecraft:strength" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "minecraft:strength" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "minecraft:strength" },
  // 迅捷
  { id: "minecraft:potion", ratio: 30, potion: "minecraft:swiftness" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "minecraft:swiftness" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "minecraft:swiftness" },
  // 抗火
  { id: "minecraft:potion", ratio: 30, potion: "minecraft:fire_resistance" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "minecraft:fire_resistance" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "minecraft:fire_resistance" },
  // 夜视
  { id: "minecraft:potion", ratio: 30, potion: "minecraft:night_vision" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "minecraft:night_vision" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "minecraft:night_vision" },
  // 水下呼吸
  { id: "minecraft:potion", ratio: 30, potion: "minecraft:water_breathing" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "minecraft:water_breathing" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "minecraft:water_breathing" },
  // 跳跃提升
  { id: "minecraft:potion", ratio: 30, potion: "minecraft:leaping" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "minecraft:leaping" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "minecraft:leaping" },
  // 缓降
  { id: "minecraft:potion", ratio: 30, potion: "minecraft:slow_falling" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "minecraft:slow_falling" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "minecraft:slow_falling" },
  // 隐形
  { id: "minecraft:potion", ratio: 30, potion: "minecraft:invisibility" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "minecraft:invisibility" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "minecraft:invisibility" },
];

// ==========================================
// 正面药水 - 稀有 (Rare)
// 普通: 15 | 喷溅: 9 | 滞留: 5
// ==========================================
const RARE_POSITIVE_POTIONS = [
  // 瞬间治疗 II
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:strong_healing" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:strong_healing" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:strong_healing" },
  // 再生 (延长)
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:long_regeneration" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:long_regeneration" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:long_regeneration" },
  // 再生 II
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:strong_regeneration" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:strong_regeneration" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:strong_regeneration" },
  // 力量 (延长)
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:long_strength" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:long_strength" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:long_strength" },
  // 力量 II
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:strong_strength" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:strong_strength" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:strong_strength" },
  // 迅捷 (延长)
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:long_swiftness" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:long_swiftness" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:long_swiftness" },
  // 迅捷 II
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:strong_swiftness" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:strong_swiftness" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:strong_swiftness" },
  // 抗火 (延长)
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:long_fire_resistance" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:long_fire_resistance" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:long_fire_resistance" },
  // 夜视 (延长)
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:long_night_vision" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:long_night_vision" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:long_night_vision" },
  // 隐形 (延长)
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:long_invisibility" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:long_invisibility" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:long_invisibility" },
  // 水下呼吸 (延长)
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:long_water_breathing" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:long_water_breathing" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:long_water_breathing" },
  // 跳跃提升 (延长)
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:long_leaping" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:long_leaping" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:long_leaping" },
  // 跳跃提升 II
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:strong_leaping" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:strong_leaping" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:strong_leaping" },
  // 缓降 (延长)
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:long_slow_falling" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:long_slow_falling" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:long_slow_falling" },
];

// ==========================================
// 正面药水 - 史诗 (Epic)
// 普通: 6 | 喷溅: 3 | 滞留: 1
// ==========================================
const EPIC_POSITIVE_POTIONS = [
  // 幸运
  { id: "minecraft:potion", ratio: 6, potion: "minecraft:luck" },
  { id: "minecraft:splash_potion", ratio: 3, potion: "minecraft:luck" },
  { id: "minecraft:lingering_potion", ratio: 1, potion: "minecraft:luck" },
  // 神龟药水
  { id: "minecraft:potion", ratio: 6, potion: "minecraft:turtle_master" },
  { id: "minecraft:splash_potion", ratio: 3, potion: "minecraft:turtle_master" },
  { id: "minecraft:lingering_potion", ratio: 1, potion: "minecraft:turtle_master" },
  // 神龟药水 (延长)
  { id: "minecraft:potion", ratio: 6, potion: "minecraft:long_turtle_master" },
  { id: "minecraft:splash_potion", ratio: 3, potion: "minecraft:long_turtle_master" },
  { id: "minecraft:lingering_potion", ratio: 1, potion: "minecraft:long_turtle_master" },
  // 神龟药水 II
  { id: "minecraft:potion", ratio: 6, potion: "minecraft:strong_turtle_master" },
  { id: "minecraft:splash_potion", ratio: 3, potion: "minecraft:strong_turtle_master" },
  { id: "minecraft:lingering_potion", ratio: 1, potion: "minecraft:strong_turtle_master" },
];

// ==========================================
// 负面药水 - 常见 (Common)
// 普通: 30 | 喷溅: 18 | 滞留: 9
// ==========================================
const COMMON_NEGATIVE_POTIONS = [
  // 瞬间伤害
  { id: "minecraft:potion", ratio: 30, potion: "minecraft:harming" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "minecraft:harming" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "minecraft:harming" },
  // 中毒
  { id: "minecraft:potion", ratio: 30, potion: "minecraft:poison" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "minecraft:poison" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "minecraft:poison" },
  // 缓慢
  { id: "minecraft:potion", ratio: 30, potion: "minecraft:slowness" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "minecraft:slowness" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "minecraft:slowness" },
  // 虚弱
  { id: "minecraft:potion", ratio: 30, potion: "minecraft:weakness" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "minecraft:weakness" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "minecraft:weakness" },

  // 模组负面
  { id: "minecraft:potion", ratio: 30, potion: "crabbersdelight:inky_potion" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "crabbersdelight:inky_potion" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "crabbersdelight:inky_potion" },
  { id: "minecraft:potion", ratio: 30, potion: "rationcraft:im_very_hungry" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "rationcraft:im_very_hungry" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "rationcraft:im_very_hungry" },
  { id: "minecraft:potion", ratio: 30, potion: "vintagedelight:dehydrated" },
  { id: "minecraft:splash_potion", ratio: 18, potion: "vintagedelight:dehydrated" },
  { id: "minecraft:lingering_potion", ratio: 9, potion: "vintagedelight:dehydrated" },
//   { id: "minecraft:potion", ratio: 30, potion: "youkaishomecoming:aphrodisiac" },
//   { id: "minecraft:splash_potion", ratio: 18, potion: "youkaishomecoming:aphrodisiac" },
//   { id: "minecraft:lingering_potion", ratio: 9, potion: "youkaishomecoming:aphrodisiac" },
//   { id: "minecraft:potion", ratio: 30, potion: "youkaishomecoming:hypnosis" },
//   { id: "minecraft:splash_potion", ratio: 18, potion: "youkaishomecoming:hypnosis" },
//   { id: "minecraft:lingering_potion", ratio: 9, potion: "youkaishomecoming:hypnosis" },
];

// ==========================================
// 负面药水 - 稀有 (Rare)
// 普通: 15 | 喷溅: 9 | 滞留: 5
// ==========================================
const RARE_NEGATIVE_POTIONS = [
  // 瞬间伤害 II
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:strong_harming" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:strong_harming" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:strong_harming" },
  // 中毒 (延长)
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:long_poison" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:long_poison" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:long_poison" },
  // 中毒 II
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:strong_poison" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:strong_poison" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:strong_poison" },
  // 缓慢 (延长)
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:long_slowness" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:long_slowness" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:long_slowness" },
  // 缓慢 II
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:strong_slowness" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:strong_slowness" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:strong_slowness" },
  // 虚弱 (延长)
  { id: "minecraft:potion", ratio: 15, potion: "minecraft:long_weakness" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "minecraft:long_weakness" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "minecraft:long_weakness" },

  // vintagedelight (强化/延长)
  { id: "minecraft:potion", ratio: 15, potion: "vintagedelight:long_dehydrated" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "vintagedelight:long_dehydrated" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "vintagedelight:long_dehydrated" },
  { id: "minecraft:potion", ratio: 15, potion: "vintagedelight:strong_dehydrated" },
  { id: "minecraft:splash_potion", ratio: 9, potion: "vintagedelight:strong_dehydrated" },
  { id: "minecraft:lingering_potion", ratio: 5, potion: "vintagedelight:strong_dehydrated" },
//   // youkaishomecoming (延长)
//   { id: "minecraft:potion", ratio: 15, potion: "youkaishomecoming:long_hypnosis" },
//   { id: "minecraft:splash_potion", ratio: 9, potion: "youkaishomecoming:long_hypnosis" },
//   { id: "minecraft:lingering_potion", ratio: 5, potion: "youkaishomecoming:long_hypnosis" },
//   { id: "minecraft:potion", ratio: 15, potion: "youkaishomecoming:long_aphrodisiac" },
//   { id: "minecraft:splash_potion", ratio: 9, potion: "youkaishomecoming:long_aphrodisiac" },
//   { id: "minecraft:lingering_potion", ratio: 5, potion: "youkaishomecoming:long_aphrodisiac" },
];

// ==========================================
// 负面药水 - 史诗 (Epic)
// 普通: 6 | 喷溅: 3 | 滞留: 1
// ==========================================
const EPIC_NEGATIVE_POTIONS = [
  // 渗粘 (1.21+)
  { id: "minecraft:potion", ratio: 6, potion: "minecraft:oozing" },
  { id: "minecraft:splash_potion", ratio: 3, potion: "minecraft:oozing" },
  { id: "minecraft:lingering_potion", ratio: 1, potion: "minecraft:oozing" },
  // 异虫 (1.21+)
  { id: "minecraft:potion", ratio: 6, potion: "minecraft:infested" },
  { id: "minecraft:splash_potion", ratio: 3, potion: "minecraft:infested" },
  { id: "minecraft:lingering_potion", ratio: 1, potion: "minecraft:infested" },
  // 织网 (1.21+)
  { id: "minecraft:potion", ratio: 6, potion: "minecraft:weaving" },
  { id: "minecraft:splash_potion", ratio: 3, potion: "minecraft:weaving" },
  { id: "minecraft:lingering_potion", ratio: 1, potion: "minecraft:weaving" },
  // 风袭 (1.21+)
  { id: "minecraft:potion", ratio: 6, potion: "minecraft:wind_charged" },
  { id: "minecraft:splash_potion", ratio: 3, potion: "minecraft:wind_charged" },
  { id: "minecraft:lingering_potion", ratio: 1, potion: "minecraft:wind_charged" },
];


const all_positive_potion_item = [].concat(
  COMMON_POSITIVE_POTIONS,
  RARE_POSITIVE_POTIONS,
  EPIC_POSITIVE_POTIONS,
);

const all_negative_potion_item = [].concat(
  COMMON_NEGATIVE_POTIONS,
  RARE_NEGATIVE_POTIONS,
  EPIC_NEGATIVE_POTIONS,
);

const all_rare_or_epic_positive_potion_item = [].concat(
  RARE_POSITIVE_POTIONS,
  EPIC_POSITIVE_POTIONS,
);