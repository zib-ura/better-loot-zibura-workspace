// =================================================================
// 独立物品数组定义区域
// =================================================================

const village_butcher_byproduct_items = [

    { id: "minecraft:bone", ratio: 10 },
    { reference: "lootjs:cooking_oil", ratio: 10 },

];

const village_butcher_tool_items = [
    { reference: "lootjs:small_iron_knife", ratio: 10 },
    { id: "farmersdelight:cutting_board", ratio: 10 },

    { id: "kaleidoscope_cookery:iron_kitchen_knife", ratio: 10 },
    { id: "kaleidoscope_cookery:chopping_board", ratio: 10 },

    // { id: "minecraft:lantern", ratio: 5 },
    { id: "minecraft:iron_sword", ratio: 10 },
    { id: "minecraft:iron_axe", ratio: 10 },


];

const village_butcher_plains_meat_items = [
    { reference: "lootjs:beef", ratio: 10 },
    { reference: "lootjs:porkchop", ratio: 10 },
    { reference: "lootjs:chicken", ratio: 10 },
    { reference: "lootjs:mutton", ratio: 10 },

    { reference: "lootjs:bacon", ratio: 10 },
    { reference: "lootjs:minced_beef", ratio: 10 },
    { reference: "lootjs:chicken_cuts", ratio: 10 },
    { reference: "lootjs:raw_lamb_chops", ratio: 10 },
    { reference: "lootjs:ham", ratio: 5 },

    // 平原特产补充：野牛、鲶鱼、龟肉
    { reference: "lootjs:raw_bison_meat", ratio: 10 },
    { reference: "lootjs:raw_bison_meat_cubes", ratio: 10 },

];

const village_butcher_savanna_meat_items = [
    { reference: "lootjs:beef", ratio: 10 },
    { reference: "lootjs:chicken", ratio: 10 },
    { reference: "lootjs:mutton", ratio: 10 },

    { reference: "lootjs:minced_beef", ratio: 10 },
    { reference: "lootjs:chicken_cuts", ratio: 10 },
    { reference: "lootjs:raw_lamb_chops", ratio: 10 },

    // 热带草原特产补充：袋鼠、鸸鹋
    { reference: "lootjs:kangaroo_meat", ratio: 10 },
    { reference: "lootjs:raw_kangaroo_meat_slice", ratio: 10 },
    { reference: "lootjs:raw_emu", ratio: 10 },
    { reference: "lootjs:raw_emu_leg", ratio: 10 },
];

const village_butcher_snowy_meat_items = [
    { reference: "lootjs:beef", ratio: 10 },
    { reference: "lootjs:porkchop", ratio: 10 },
    { reference: "lootjs:chicken", ratio: 10 },
    { reference: "lootjs:mutton", ratio: 10 },
    { reference: "lootjs:rabbit", ratio: 10 },

    { reference: "lootjs:bacon", ratio: 10 },
    { reference: "lootjs:minced_beef", ratio: 10 },
    { reference: "lootjs:chicken_cuts", ratio: 10 },
    { reference: "lootjs:raw_lamb_chops", ratio: 10 },

    { reference: "lootjs:moose_ribs", ratio: 10 },
    { reference: "lootjs:raw_moose_rib_piece", ratio: 10 },
    { reference: "lootjs:raw_tusklin_meat", ratio: 10 },
    { reference: "lootjs:raw_tusklin_meat_piece", ratio: 10 },
    // { id: "alexsmobsdelight:raw_froststalker_meat", ratio: 10 },
    // { id: "alexsmobsdelight:raw_froststalker_leg", ratio: 10 },
];

const village_butcher_taiga_meat_items = [
    { reference: "lootjs:beef", ratio: 10 },
    { reference: "lootjs:porkchop", ratio: 10 },
    { reference: "lootjs:chicken", ratio: 10 },
    { reference: "lootjs:mutton", ratio: 10 },

    { reference: "lootjs:bacon", ratio: 10 },
    { reference: "lootjs:minced_beef", ratio: 10 },
    { reference: "lootjs:chicken_cuts", ratio: 10 },
    { reference: "lootjs:raw_lamb_chops", ratio: 10 },

    // 针叶林特产补充：驼鹿、熊肉
    { reference: "lootjs:moose_ribs", ratio: 10 },
    { reference: "lootjs:raw_moose_rib_piece", ratio: 10 },
    { reference: "lootjs:raw_bear_meat", ratio: 10 },
    { reference: "lootjs:raw_bear_meat_slice", ratio: 10 },
];

const village_butcher_swamp_meat_items = [
    { reference: "lootjs:beef", ratio: 10 },
    { reference: "lootjs:porkchop", ratio: 10 },
    { reference: "lootjs:chicken", ratio: 10 },
    { reference: "lootjs:mutton", ratio: 10 },

    { reference: "lootjs:bacon", ratio: 10 },
    { reference: "lootjs:minced_beef", ratio: 10 },
    { reference: "lootjs:chicken_cuts", ratio: 10 },
    { reference: "lootjs:raw_lamb_chops", ratio: 10 },
    { reference: "lootjs:ham", ratio: 5 },

    // 沼泽特产补充：鳄鱼、水蚺、弹涂鱼、鳄龟
    { reference: "lootjs:raw_whole_crocodile", ratio: 5 },
    { reference: "lootjs:raw_anaconda", ratio: 10 },
    { reference: "lootjs:raw_mudskipper", ratio: 10 },
    { reference: "lootjs:raw_mudskipper_slice", ratio: 10 },
    { reference: "lootjs:raw_turtle_meat", ratio: 10 },
];

const village_butcher_desert_meat_items = [
    { reference: "lootjs:beef", ratio: 10 },
    { reference: "lootjs:mutton", ratio: 10 },
    { reference: "lootjs:chicken", ratio: 10 },
    { reference: "lootjs:rabbit", ratio: 10 },

    { reference: "lootjs:minced_beef", ratio: 10 },
    { reference: "lootjs:chicken_cuts", ratio: 10 },
    { reference: "lootjs:raw_lamb_chops", ratio: 20 },

    // // 沙漠特产补充：沙漠鳉(Pupfish)、食蛾鹰(Tarantula Hawk)
    // { reference: "lootjs:raw_devils_hole_pupfish", ratio: 10 },
    // { reference: "lootjs:raw_devils_hole_pupfish_slice", ratio: 10 },
    // { reference: "lootjs:raw_tarantula_hawk_larva", ratio: 10 },
    // { reference: "lootjs:raw_tarantula_hawk_abdomen", ratio: 10 },
];

const village_butcher_common_meat_items = [
    { reference: "lootjs:beef", ratio: 10 },
    { reference: "lootjs:porkchop", ratio: 10 },
    { reference: "lootjs:chicken", ratio: 10 },
    { reference: "lootjs:mutton", ratio: 10 },

    { reference: "lootjs:bacon", ratio: 10 },
    { reference: "lootjs:minced_beef", ratio: 10 },
    { reference: "lootjs:chicken_cuts", ratio: 10 },
    { reference: "lootjs:raw_lamb_chops", ratio: 10 },
];

const village_butcher_enchanted_book_items = [
    { id: "minecraft:book", ratio: 10, enchantRandomly: ["farmersdelight:backstabbing"] },
];

const village_butcher_empty_fallback_items = [
    { id: "empty" },
];

// =================================================================
// 战利品表定义区域
// =================================================================
const village_butcher_byproduct_groups = [
    { groupName: "butcher_byproducts", groupWeight: 90, min: 1, max: 2, items: village_butcher_byproduct_items },
];

const village_butcher_tool_groups = [
    { groupName: "butcher_tools", groupWeight: 20, min: 1, max: 1, damage: [0.7, 0.8], items: village_butcher_tool_items },
];

const village_butcher_plains_meat_groups = [
    { groupName: "plains_raw_meat", groupWeight: 90, min: 2, max: 3, items: village_butcher_plains_meat_items },
];

const village_butcher_savanna_meat_groups = [
    { groupName: "savanna_raw_meat", groupWeight: 90, min: 2, max: 3, items: village_butcher_savanna_meat_items },
];

const village_butcher_snowy_meat_groups = [
    { groupName: "snowy_raw_meat", groupWeight: 90, min: 2, max: 3, items: village_butcher_snowy_meat_items },
];

const village_butcher_taiga_meat_groups = [
    { groupName: "taiga_raw_meat", groupWeight: 90, min: 2, max: 3, items: village_butcher_taiga_meat_items },
];

const village_butcher_swamp_meat_groups = [
    { groupName: "swamp_raw_meat", groupWeight: 90, min: 2, max: 3, items: village_butcher_swamp_meat_items },
];

const village_butcher_desert_meat_groups = [
    { groupName: "desert_raw_meat", groupWeight: 90, min: 2, max: 3, items: village_butcher_desert_meat_items },
];

const village_butcher_common_meat_groups = [
    { groupName: "common_raw_meat", groupWeight: 90, min: 2, max: 3, items: village_butcher_common_meat_items },
];

const village_butcher_enchanted_book_groups = [
    {
        groupName: "butcher_enchanted_book",
        groupWeight: 10,
        min: 1, max: 1,
        items: village_butcher_enchanted_book_items
    },
    {
        groupName: "no_enchanted_book",
        groupWeight: 90,
        items: village_butcher_empty_fallback_items
    },
];
// =================================================================
// 事件注册区域
// =================================================================

const village_butcher_content = [

    [village_butcher_plains_meat_groups, 1, 2, { matchBiome: ["#minecraft:has_structure/village_plains"] }],
    [village_butcher_savanna_meat_groups, 1, 2, { matchBiome: ["#minecraft:has_structure/village_savanna"] }],
    [village_butcher_snowy_meat_groups, 1, 2, { matchBiome: ["#minecraft:has_structure/village_snowy"] }],
    [village_butcher_taiga_meat_groups, 1, 2, { matchBiome: ["#minecraft:has_structure/village_taiga"] }],
    [village_butcher_desert_meat_groups, 1, 2, { matchBiome: ["#minecraft:has_structure/village_desert"] }],
    [village_butcher_swamp_meat_groups, 1, 2, { matchBiome: ["minecraft:swamp"] }],
    [village_butcher_common_meat_groups, 1, 2, { matchBiome: ["#better_loot_zibura:butcher/other"] }],

    [village_butcher_byproduct_groups, 2, 3],
    [village_butcher_tool_groups, 1, 2],
    [village_butcher_enchanted_book_groups, 1, 1],
];


const loot_village_butcher = [
    [village_butcher_content, 1],
];
