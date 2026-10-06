// =================================================================
// 战利品表定义区域
// =================================================================



const village_butcher_side_product = [
    {
        groupName: "side_product",
        groupWeight: 90, 
        min: 2, max: 3,
        items: [

            { id: "minecraft:bone", ratio: 10 },
            { reference: "lootjs:cooking_oil", ratio: 10 },

        ]
    },
]

const village_butcher_equipment = [
    {
        groupName: "Equipment",
        groupWeight: 20,
        min: 1, max: 1, damage: [0.7, 0.8],
        items: [
            { id: "farmersdelight:iron_knife", ratio: 10 },
            { id: "farmersdelight:cutting_board", ratio: 10 },

            { id: "kaleidoscope_cookery:iron_kitchen_knife", ratio: 10 },
            { id: "kaleidoscope_cookery:chopping_board", ratio: 10 },

            // { id: "minecraft:lantern", ratio: 5 },
            { id: "minecraft:iron_sword", ratio: 10 },
            { id: "minecraft:iron_axe", ratio: 10 },


        ]
    },
]

const plains_village_butcher_meat = [
    {
        groupName: "plains_meat",
        groupWeight: 90,
        min: 2, max: 3,
        items: [
            { id: "minecraft:beef", ratio: 10 },
            { id: "minecraft:porkchop", ratio: 10 },
            { id: "minecraft:chicken", ratio: 10 },
            { id: "minecraft:mutton", ratio: 10 },

            { reference: "lootjs:bacon", ratio: 10 },
            { reference: "lootjs:minced_beef", ratio: 10 },
            { reference: "lootjs:chicken_cuts", ratio: 10 },
            { reference: "lootjs:raw_lamb_chops", ratio: 10 },
            { reference: "lootjs:ham", ratio: 5 },

            // 平原特产补充：野牛、鲶鱼、龟肉
            { reference: "lootjs:raw_bison_meat", ratio: 10 },
            { reference: "lootjs:raw_bison_meat_cubes", ratio: 10 },

        ]
    }
];

const savanna_village_butcher_meat = [
    {
        groupName: "savanna_meat",
        groupWeight: 90,
        min: 2, max: 3,
        items: [
            { id: "minecraft:beef", ratio: 10 },
            { id: "minecraft:chicken", ratio: 10 },
            { id: "minecraft:mutton", ratio: 10 },

            { reference: "lootjs:minced_beef", ratio: 10 },
            { reference: "lootjs:chicken_cuts", ratio: 10 },
            { reference: "lootjs:raw_lamb_chops", ratio: 10 },

            // 热带草原特产补充：袋鼠、鸸鹋
            { reference: "lootjs:kangaroo_meat", ratio: 10 },
            { reference: "lootjs:raw_kangaroo_meat_slice", ratio: 10 },
            { reference: "lootjs:raw_emu", ratio: 10 },
            { reference: "lootjs:raw_emu_leg", ratio: 10 },
        ]
    }
];

const snowy_village_butcher_meat = [
    {
        groupName: "snowy_meat",
        groupWeight: 90,
        min: 2, max: 3,
        items: [
            { id: "minecraft:beef", ratio: 10 },
            { id: "minecraft:porkchop", ratio: 10 },
            { id: "minecraft:chicken", ratio: 10 },
            { id: "minecraft:mutton", ratio: 10 },

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
        ]
    }
];

const taiga_village_butcher_meat = [
    {
        groupName: "taiga_meat",
        groupWeight: 90,
        min: 2, max: 3,
        items: [
            { id: "minecraft:beef", ratio: 10 },
            { id: "minecraft:porkchop", ratio: 10 },
            { id: "minecraft:chicken", ratio: 10 },
            { id: "minecraft:mutton", ratio: 10 },

            { reference: "lootjs:bacon", ratio: 10 },
            { reference: "lootjs:minced_beef", ratio: 10 },
            { reference: "lootjs:chicken_cuts", ratio: 10 },
            { reference: "lootjs:raw_lamb_chops", ratio: 10 },

            // 针叶林特产补充：驼鹿、熊肉
            { reference: "lootjs:moose_ribs", ratio: 10 },
            { reference: "lootjs:raw_moose_rib_piece", ratio: 10 },
            { reference: "lootjs:raw_bear_meat", ratio: 10 },
            { reference: "lootjs:raw_bear_meat_slice", ratio: 10 },
        ]
    }
];

const swamp_village_butcher_meat = [
    {
        groupName: "swamp_meat",
        groupWeight: 90,
        min: 2, max: 3,
        items: [
            { id: "minecraft:beef", ratio: 10 },
            { id: "minecraft:porkchop", ratio: 10 },
            { id: "minecraft:chicken", ratio: 10 },
            { id: "minecraft:mutton", ratio: 10 },

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
        ]
    }
];


const desert_village_butcher_meat = [
    {
        groupName: "desert_meat",
        groupWeight: 90,
        min: 2, max: 3,
        items: [
            { id: "minecraft:beef", ratio: 10 },
            { id: "minecraft:mutton", ratio: 10 },
            { id: "minecraft:chicken", ratio: 10 },
            { id: "minecraft:rabbit", ratio: 10 },

            { reference: "lootjs:minced_beef", ratio: 10 },
            { reference: "lootjs:chicken_cuts", ratio: 10 },
            { reference: "lootjs:raw_lamb_chops", ratio: 20 },
            { id: "kaleidoscope_cookery:raw_cut_small_meats", ratio: 10 },

            // // 沙漠特产补充：沙漠鳉(Pupfish)、食蛾鹰(Tarantula Hawk)
            // { reference: "lootjs:raw_devils_hole_pupfish", ratio: 10 },
            // { reference: "lootjs:raw_devils_hole_pupfish_slice", ratio: 10 },
            // { reference: "lootjs:raw_tarantula_hawk_larva", ratio: 10 },
            // { reference: "lootjs:raw_tarantula_hawk_abdomen", ratio: 10 },
        ]
    }
];

const common_village_butcher_meat = [
    {
        groupName: "common_meat",
        groupWeight: 90,
        min: 2, max: 3,
        items: [
            { id: "minecraft:beef", ratio: 10 },
            { id: "minecraft:porkchop", ratio: 10 },
            { id: "minecraft:chicken", ratio: 10 },
            { id: "minecraft:mutton", ratio: 10 },

            { reference: "lootjs:bacon", ratio: 10 },
            { reference: "lootjs:minced_beef", ratio: 10 },
            { reference: "lootjs:chicken_cuts", ratio: 10 },
            { reference: "lootjs:raw_lamb_chops", ratio: 10 },
        ]
    }
];

// const village_butcher_products = [
//     {
//         groupName: "Products",
//         groupWeight: 5,
//         min: 1, max: 1,
//         items: [
//             { id: "rationcraft:corned_beef", ratio: 10 },
//             { id: "rationcraft:salted_pork", ratio: 10 },
//             { id: "rationcraft:dry_sausage", ratio: 10 },
//         ]
//     },
// ]

// const desert_village_butcher_products = [
//     {
//         groupName: "Products",
//         groupWeight: 5,
//         min: 1, max: 1,
//         items: [
//             { id: "rationcraft:corned_beef", ratio: 10 },
//         ]
//     },
// ]


const village_butcher_enchanted_book = [
    {
        groupName: "plains",
        groupWeight: 10,
        min: 1, max: 1,
        items: [
            { id: "minecraft:book", ratio: 10, enchantRandomly: ["farmersdelight:backstabbing"] },
        ]
    },
    {
        groupName: "empty",
        groupWeight: 90,
        items: [
            { id: "empty" },
        ]
    },
];
// =================================================================
// 事件注册区域
// =================================================================
const village_butcher_content = [

    [plains_village_butcher_meat, 1, 2, { matchBiome: ["#minecraft:has_structure/village_plains"] }],
    [savanna_village_butcher_meat, 1, 2, { matchBiome: ["#minecraft:has_structure/village_savanna"] }],
    [snowy_village_butcher_meat, 1, 2, { matchBiome: ["#minecraft:has_structure/village_snowy"] }],
    [taiga_village_butcher_meat, 1, 2, { matchBiome: ["#minecraft:has_structure/village_taiga"] }],
    [desert_village_butcher_meat, 1, 2, { matchBiome: ["#minecraft:has_structure/village_desert"] }],
    [swamp_village_butcher_meat, 1, 2, { matchBiome: ["minecraft:swamp"] }],
    [common_village_butcher_meat, 1, 2, { matchBiome: ["#better_loot_zibura:butcher/other"] }],

    [village_butcher_side_product, 2, 3],
    [village_butcher_equipment, 1, 2],
    [village_butcher_enchanted_book, 1, 1],
];


const loot_village_butcher = [
    [village_butcher_content, 1],
];