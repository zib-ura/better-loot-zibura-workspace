const village_smith_materials = [
    {        
        groupName: "common_materials",
        groupWeight: 95,
        min: 2, max: 3,
        items: [
            { id: "minecraft:iron_ingot", ratio: 10 },
            // { id: "minecraft:lava_bucket", ratio: 10 , max: 3 },
            // { id: "minecraft:bucket", ratio: 10 , max: 3 },
            { id: "minecraft:coal", ratio: 10 },
            { id: "minecraft:flint", ratio: 10 },
            { id: "minecraft:gold_ingot", ratio: 10 },

        ]
    },
    
    {        
        groupName: "rare_materials",
        groupWeight: 5,
        min: 1, max: 2,
        items: [
            { id: "minecraft:diamond", ratio: 10 },

        ]
    },
]

const village_smith_common_products = [
    {        
        groupName: "common_products",
        groupWeight: 90,
        min: 1, max: 1,
        items: [
            { id: "kaleidoscope_cookery:stockpot", ratio: 10 }, 
            { id: "kaleidoscope_cookery:pot", ratio: 10 }, 
            { id: "kaleidoscope_cookery:stockpot_lid", ratio: 10 }, 
            { id: "kaleidoscope_cookery:kitchen_shovel", ratio: 10 }, 
            { id: "kaleidoscope_cookery:teapot", ratio: 10 }, 

            { id: "farmersdelight:cooking_pot", ratio: 10 }, 
            { id: "farmersdelight:skillet", ratio: 10 },       

            { id: "youkaisfeasts:stockpot", ratio: 10 }, 
            { id: "youkaisfeasts:short_iron_pot", ratio: 10 }, 
            { id: "youkaisfeasts:small_iron_pot", ratio: 10 }, 
            { id: "youkaisfeasts:steamer_pot", ratio: 10 }, 
            { id: "youkaisfeasts:kettle", ratio: 10 },

            // { id: "immersive_melodies:triangle", ratio: 5 },
            // { id: "immersive_melodies:trumpet", ratio: 5 },

            { id: "minecraft:blast_furnace", ratio: 10 },
            // { id: "minecraft:anvil", ratio: 10 },
            { id: "minecraft:stonecutter", ratio: 10 },
            { id: "minecraft:smithing_table", ratio: 10 },
            { id: "minecraft:piston", ratio: 10 },
            { id: "minecraft:lantern", ratio: 10 },
            { id: "minecraft:compass", ratio: 10 },
            { id: "minecraft:bucket", ratio: 10 },
            { id: "minecraft:flint_and_steel", ratio: 10 },

            { id: "minecraft:lightning_rod", ratio: 10 },


            { id: "minecraft:clock", ratio: 10 },
            { id: "minecraft:bell", ratio: 10 },            

            { id: "sawmill:sawmill", ratio: 10 },

            { id: "kaleidoscope_cookery:shawarma_spit", ratio: 10 },

            { id: "touhou_little_maid:item_magnet_bauble", ratio: 10 },
            { id: "touhou_little_maid:servant_bell", ratio: 10 },
            { id: "touhou_little_maid:chisel", ratio: 10 },
          
        ]
    },
]

const village_smith_nametag = [
    {        
        groupName: "nametag",
        groupWeight: 95,
        min: 1, max: 1,
        items: [
            { id: "minecraft:name_tag", ratio: 10 },
        ]
    },
]

const village_smith_small_iron_knife = [
    {        
        groupName: "small_iron_knife",
        groupWeight: 95,
        min: 1, max: 1,
        items: [
            { reference: "lootjs:small_iron_knife", ratio: 10 },

        ]
    },
]