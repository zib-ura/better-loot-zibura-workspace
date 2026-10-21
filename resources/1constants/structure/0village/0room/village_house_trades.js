const village_profession_item = [
    {
        groupName: "shepherd and tannery",
        groupWeight: 25,
        min: 1,  max: 1,
        items: [
            { id: "minecraft:white_banner", ratio: 10 },
            { id: "minecraft:white_carpet", ratio: 10 },
            { id: "supplementaries:bunting_white", ratio: 10 },
            { id: "supplementaries:flag_white", ratio: 10 },
            { id: "minecraft:white_bed", ratio: 10 },
            { id: "minecraft:painting", ratio: 10 },
            { id: "minecraft:item_frame", ratio: 10 },

        ]
    },


    {
        groupName: "cartographer",
        groupWeight: 25,
        min: 1, max: 1,
        items: [
            { id: "minecraft:map", ratio: 10 },
            { id: "minecraft:compass", ratio: 10 },
            { id: "minecraft:spyglass", ratio: 10 },
            { id: "minecraft:book", ratio: 10 },
            { id: "minecraft:writable_book", ratio: 10 },
            { id: "supplementaries:globe", ratio: 10 },
            { id: "minecraft:clock", ratio: 10 },
            { id: "minecraft:painting", ratio: 10 },
            { id: "minecraft:paper", ratio: 10 },

        ]
    },

    {
        groupName: "mason",
        groupWeight: 25,
        min: 1, max: 1,
        items: [
            { id: "minecraft:furnace", ratio: 10 },
            { id: "minecraft:armor_stand", ratio: 10 },
            { id: "supplementaries:hat_stand", ratio: 10 },
            { id: "supplementaries:statue", ratio: 10 },
            { id: "supplementaries:stone_lamp", ratio: 10 },
            { id: "supplementaries:pedestal", ratio: 10 },

        ]
    },

    {
        groupName: "smith",
        groupWeight: 25,
        min: 1, max: 1,
        items: [

            { id: "minecraft:piston", ratio: 10 },
            { id: "minecraft:lantern", ratio: 10 },
            { id: "minecraft:bucket", ratio: 10 },
            { id: "minecraft:lightning_rod", ratio: 10 },

        ]
    },

    {
        groupName: "empty",
        groupWeight: 100,
        items: [
            { id: "empty" },
        ]
    },
]


// Trade goods grouped by villagers' purchasing purposes.
// Profession items are also eligible; every real item has ratio: 10.

// Cooking and food preparation
const village_plains_food_preparation_trade_goods = [
    { id: "kaleidoscope_cookery:stockpot", ratio: 10 },
    { id: "kaleidoscope_cookery:pot", ratio: 10 },
    { id: "kaleidoscope_cookery:stockpot_lid", ratio: 10 },
    { id: "kaleidoscope_cookery:kitchen_shovel", ratio: 10 },
    { id: "kaleidoscope_cookery:teapot", ratio: 10 },
    { id: "farmersdelight:cooking_pot", ratio: 10 },
    { id: "farmersdelight:skillet", ratio: 10 },
    { id: "trailandtales_delight:pottery_cooking_pot", ratio: 10 },
    { id: "minecraft:bowl", ratio: 10 },
    { id: "minecraft:flint_and_steel", ratio: 10 },

];

// Food storage and transport
const village_plains_food_storage_trade_goods = [
    { id: "minecraft:glass_bottle", ratio: 10 },
    { id: "kaleidoscope_chinesefood:pickle_jar", ratio: 10 },
    { id: "farmersdelight:wooden_basket", ratio: 10 },
    { id: "kaleidoscope_cookery:fruit_basket", ratio: 10 },
    { id: "minecraft:barrel", ratio: 10 },
    { id: "supplementaries:sack", ratio: 10 },

];

// Farming and gathering
const village_plains_productive_trade_goods = [
    { id: "minecraft:iron_hoe", ratio: 10 },
    { id: "minecraft:iron_shovel", ratio: 10 },
    { id: "minecraft:iron_axe", ratio: 10 },
    { id: "minecraft:iron_pickaxe", ratio: 10 },
    { id: "minecraft:shears", ratio: 10 },
    { id: "kaleidoscope_cookery:sickle", ratio: 10 },
    { id: "farmersdelight:rope", ratio: 10 },
    { id: "supplementaries:rope", ratio: 10 },
    { id: "minecraft:bucket", ratio: 10 },
];

// Travel and carrying belongings
const village_common_travel_trade_goods = [
    { id: "minecraft:bundle", ratio: 10 },
    { id: "travelersbackpack:standard", ratio: 10 },
    { id: "minecraft:saddle", ratio: 10 },
    { id: "minecraft:map", ratio: 10 },
    { id: "minecraft:compass", ratio: 10 },
    { id: "minecraft:spyglass", ratio: 10 },
    { id: "minecraft:brush", ratio: 10 },
];

// Reading, writing and record keeping
const village_common_knowledge_trade_goods = [
    // { id: "minecraft:paper", ratio: 10 },
    { id: "minecraft:book", ratio: 10 },
    { id: "minecraft:writable_book", ratio: 10 },

];


// Personal and village defense
const village_common_security_trade_goods = [
    { id: "minecraft:shield", ratio: 10 },
    { id: "minecraft:bow", ratio: 10 },
    { id: "supplementaries:slingshot", ratio: 10 },
    { id: "minecraft:stone_sword", ratio: 10 },
    { id: "minecraft:iron_sword", ratio: 10 },
    { id: "supplementaries:quiver", ratio: 10 },
    { id: "minecraft:crossbow", ratio: 10 },
    { id: "minecraft:chainmail_helmet", ratio: 10 },
    { id: "minecraft:chainmail_chestplate", ratio: 10 },
];

const village_household_trade_goods =[]
const village_productive_trade_goods=[]
const village_textile_leather_trade_goods=[]
const village_knowledge_trade_goods=[]
const village_security_trade_goods=[]




// Household living, comfort and utilities
// Furniture trade goods are generated from biome, color and wood templates below.

// Decoration — Carpenter-style recursive template/output generation.
// Reuse shepherdWoolColorTemplates (four colored items plus painting).
// The shepherd template inherits {color} from the enclosing biome color expansion.
// Grouped biome array parameters -> selected full template -> biome color array.
// Each item type appears once per color; uncolored IDs intentionally repeat.
// Uncolored entries intentionally repeat once per color. Patterned carpet is its own type.
const village_decoration_common_items_template = [
    { template: "shepherdWoolColorTemplates" },
    { id: "supplementaries:statue", ratio: 10 },
    { id: "supplementaries:pedestal", ratio: 10 },
    { id: "minecraft:flower_pot", ratio: 10 },
    { id: "minecraft:item_frame", ratio: 10 },
    { id: "minecraft:armor_stand", ratio: 10 },
    { id: "supplementaries:hat_stand", ratio: 10 },
    { id: "minecraft:lantern", ratio: 10 },
    { id: "supplementaries:stone_lamp", ratio: 10 },
    { id: "minecraft:clock", ratio: 10 },
];

const village_decoration_plains_items_template = [
    { template: "shepherdWoolColorTemplates" },
    { id: "brewery:patterned_carpet", ratio: 10 },
    { id: "supplementaries:statue", ratio: 10 },
    { id: "supplementaries:pedestal", ratio: 10 },
    { id: "minecraft:flower_pot", ratio: 10 },
    { id: "minecraft:item_frame", ratio: 10 },
    { id: "minecraft:armor_stand", ratio: 10 },
    { id: "supplementaries:hat_stand", ratio: 10 },
    { id: "minecraft:lantern", ratio: 10 },
    { id: "supplementaries:stone_lamp", ratio: 10 },
    { id: "minecraft:clock", ratio: 10 },
];

const village_decoration_desert_items_template = [
    { template: "shepherdWoolColorTemplates" },
    { id: "supplementaries:statue", ratio: 10 },
    { id: "supplementaries:pedestal", ratio: 10 },
    { id: "minecraft:flower_pot", ratio: 10 },
    { id: "minecraft:item_frame", ratio: 10 },
    { id: "minecraft:armor_stand", ratio: 10 },
    { id: "supplementaries:hat_stand", ratio: 10 },
    { id: "minecraft:lantern", ratio: 10 },
    { id: "supplementaries:stone_lamp", ratio: 10 },
    { id: "minecraft:clock", ratio: 10 },
    { id: "minecraft:decorated_pot", ratio: 10 },
    { id: "supplementaries:globe", ratio: 10 },
];

// Shared wrapper: expand the full item template once for every biome color.
const village_decoration_regular_template = [
    { template: "village_decoration_common_items_template", param: { color: "village_{biome}_colors" } }
];

const village_decoration_plains_template = [
    { template: "village_decoration_plains_items_template", param: { color: "village_{biome}_colors" } }
];

const village_decoration_desert_template = [
    { template: "village_decoration_desert_items_template", param: { color: "village_{biome}_colors" } }
];

// Like carpenter_contents: shared biomes and special biomes use separate calls.
const village_decoration_regular_biomes = [
    "savanna", "taiga", "snowy", "badlands", "beach", "cherry",
    "dark_forest", "jungle", "mushroom", "ocean", "swamp"
];
const village_decoration_special_biomes = ["plains", "desert"];

const village_decoration_generation = [
    { template: "village_decoration_regular_template", param: { biome: "village_decoration_regular_biomes" }, output: "village_{biome}_decoration_trade_goods" },
    { template: "village_decoration_{biome}_template", param: { biome: "village_decoration_special_biomes" }, output: "village_{biome}_decoration_trade_goods" }
];


// Furniture trade templates (only this category is changed).

const villageTradeBedTemplate = [{ id: "minecraft:{color}_bed", ratio: 5 }];

const villageTradeFurnitureTemplate = [
    { template: "villageTradeBedTemplate", param: { color: "village_{biome}_colors" } },
    { id: "minecraft:chest", ratio: 10 },
    { id: "minecraft:furnace", ratio: 10 },
    { template: "carpenterFurnitureTemplates", param: { wood: "village_{biome}_woods" } }
];

// Eager compilation creates village_{biome}_furniture_trade_goods registries.
const village_trade_furniture_generation = [
    {
        template: "villageTradeFurnitureTemplate",
        param: { biome: "village_biomes" },
        output: "village_{biome}_furniture_trade_goods"
    }
];
