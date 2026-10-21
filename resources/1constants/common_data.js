
const village_desert_colors = ["white", "green", "cyan", "blue", "lime"];
const village_snowy_colors = ["white", "red", "blue"];
const village_taiga_colors = ["white", "red", "blue", "purple"];
const village_swamp_colors = ["light_blue", "gray", "white"];
const village_jungle_colors = ["green", "brown", "yellow", "white"];
const village_plains_colors = ["red", "yellow", "blue", "white"];
const village_cherry_colors = ["pink", "white"];
const village_savanna_colors = ["orange", "yellow", "red", "white"];
const village_badlands_colors = ["red", "brown", "orange", "light_gray"];
const village_beach_colors = ["white", "light_blue", "yellow", "orange"];
const village_dark_forest_colors = ["green", "brown", "gray", "white"];
const village_mushroom_colors = ["red", "white", "purple", "brown"];
const village_ocean_colors = ["blue", "cyan", "light_blue", "white"];


// 群系统一作为数组参数；plains 羊毛组有专属物品，因此单独展开。
const village_biomes = [
    "plains", "desert", "savanna", "taiga", "snowy",
    "badlands", "beach", "cherry", "dark_forest",
    "jungle", "mushroom", "ocean", "swamp"
];

// Wood mappings for furniture. Empty means beds and common items only.
const village_plains_woods = ["oak"];
const village_desert_woods = [];
const village_savanna_woods = ["acacia"];
const village_taiga_woods = ["spruce"];
const village_snowy_woods = ["spruce"];
const village_badlands_woods = [];
const village_beach_woods = [];
const village_cherry_woods = ["cherry"];
const village_dark_forest_woods = ["dark_oak"];
const village_jungle_woods = ["jungle"];
const village_mushroom_woods = [];
const village_ocean_woods = [];
const village_swamp_woods = ["oak"];