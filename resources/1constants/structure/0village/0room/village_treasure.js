const village_valuable_block = [

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
        groupName: "Village rare products",
        groupWeight: 10,
        min: 1, max: 1,
        items: [
            { id: "minecraft:enchanting_table", ratio: 1 }, 
            { id: "minecraft:anvil", ratio: 10 },             
            { id: "minecraft:brewing_stand", ratio: 10 },    
            { id: "minecraft:saddle", ratio: 10 },    
                  
            // { id: "minecraft:bell", ratio: 5 },                      // 钟（村庄核心象征）
            { id: "minecraft:jukebox", ratio: 5 },                   // 唱片机
            // { id: "minecraft:lead", ratio: 10, max: 2 },             // 缰绳
            { id: "minecraft:name_tag", ratio: 5 },                  // 命名牌
            { id: "minecraft:golden_apple", ratio: 5 },              // 金苹果
            // { id: "minecraft:lodestone", ratio: 1 },                 // 磁石（极稀有导航）
            // { id: "minecraft:respawn_anchor", ratio: 1 },            // 重生锚      
        ]
    },


    {
        groupName: "Village Currency",
        groupWeight: 50,  
        min: 1, max: 1,
        items: [
            { id: "minecraft:emerald_block", ratio: 5 },
            { id: "minecraft:emerald", ratio: 20 },
            { id: "minecraft:diamond", ratio: 1 },
      
        ]
    },

    {   
        groupName: "Book",
        groupWeight: 10, 
        min: 1, max: 1,
        items: all_Available_Enchant_books
    },

    // {
    //     groupName: "empty",
    //     groupWeight: 90,
    //     items: [
    //         { id: "empty" },
    //     ]
    // },
];
// =================================================================
// 2. 事件注册与抽数控制区域
// =================================================================

const village_treasure_content = [
    [village_valuable_block, 6, 7],                 

];

const loot_village_treasure = [
    [village_treasure_content, 1], 
]