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
            { id: "minecraft:book", ratio: 15 },
            { id: "minecraft:writable_book", ratio: 8 },
            { id: "supplementaries:globe", ratio: 5 }, 
            { id: "minecraft:clock", ratio: 5 },
            { id: "minecraft:painting", ratio: 8 }, 
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




// =================================================================
// Household market possessions
// Produced goods from village special buildings are regrouped here by
// household use rather than by profession.  A weight matrix below changes
// the market profile of each household type.
// =================================================================

const village_household_trade_goods = [
    // Smith / mason household wares
    { id: "kaleidoscope_cookery:stockpot", ratio: 10 },
    { id: "kaleidoscope_cookery:pot", ratio: 10 },
    { id: "kaleidoscope_cookery:stockpot_lid", ratio: 8 },
    { id: "kaleidoscope_cookery:kitchen_shovel", ratio: 8 },
    { id: "kaleidoscope_cookery:teapot", ratio: 6 },
    { id: "farmersdelight:cooking_pot", ratio: 10 },
    { id: "farmersdelight:skillet", ratio: 8 },
    { id: "minecraft:bucket", ratio: 10 },
    { id: "minecraft:lantern", ratio: 8 },
    { id: "minecraft:flint_and_steel", ratio: 5 },
    { id: "minecraft:glass_bottle", ratio: 10 },
    { id: "minecraft:flower_pot", ratio: 7 },
    { id: "minecraft:decorated_pot", ratio: 4 },
    { id: "trailandtales_delight:pottery_cooking_pot", ratio: 8 },
    { id: "kaleidoscope_chinesefood:pickle_jar", ratio: 8 },

    // Carpenter household wares
    { id: "minecraft:bowl", ratio: 10 },
    { id: "minecraft:barrel", ratio: 6 },
    { id: "minecraft:chest", ratio: 5 },
    { id: "farmersdelight:wooden_basket", ratio: 10 },
    { id: "kaleidoscope_cookery:fruit_basket", ratio: 8 },
    { id: "supplementaries:sack", ratio: 8 },
];

const village_productive_trade_goods = [
    { id: "minecraft:iron_hoe", ratio: 15 },
    { id: "minecraft:iron_shovel", ratio: 10 },
    { id: "minecraft:iron_axe", ratio: 8 },
    { id: "minecraft:iron_pickaxe", ratio: 5 },
    { id: "minecraft:shears", ratio: 10 },
    { id: "minecraft:brush", ratio: 4 },
    { id: "kaleidoscope_cookery:sickle", ratio: 12 },
    { id: "farmersdelight:rope", ratio: 10 },
    { id: "supplementaries:rope", ratio: 8 },
];

const village_textile_leather_trade_goods = [
    { id: "minecraft:white_wool", ratio: 10 },
    { id: "minecraft:white_carpet", ratio: 10 },
    { id: "minecraft:white_banner", ratio: 5 },
    { id: "supplementaries:bunting_white", ratio: 5 },
    { id: "supplementaries:flag_white", ratio: 5 },
    { id: "minecraft:white_bed", ratio: 6 },
    { id: "minecraft:item_frame", ratio: 8 },
    { id: "minecraft:bundle", ratio: 8 },
    { id: "travelersbackpack:standard", ratio: 3 },
    { id: "minecraft:saddle", ratio: 3 },
];

const village_knowledge_trade_goods = [
    { id: "minecraft:paper", ratio: 15 },
    { id: "minecraft:book", ratio: 15 },
    { id: "minecraft:writable_book", ratio: 8 },
    { id: "minecraft:map", ratio: 10 },
    { id: "minecraft:compass", ratio: 7 },
    { id: "minecraft:spyglass", ratio: 5 },
    { id: "minecraft:painting", ratio: 8 },
    { id: "supplementaries:globe", ratio: 3 },
    { id: "minecraft:clock", ratio: 4 },
];

const village_security_trade_goods = [
    { id: "minecraft:shield", ratio: 10 },
    { id: "minecraft:bow", ratio: 8 },
    { id: "supplementaries:slingshot", ratio: 8 },
    { id: "minecraft:stone_sword", ratio: 5 },
    { id: "minecraft:iron_sword", ratio: 3 },
    { id: "supplementaries:quiver", ratio: 5 },
    { id: "minecraft:crossbow", ratio: 3 },
    { id: "minecraft:chainmail_helmet", ratio: 2 },
    { id: "minecraft:chainmail_chestplate", ratio: 1 },
];