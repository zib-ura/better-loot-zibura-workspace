const trek_pillager_jungle_food = [

    {
        groupName: "common",
        groupWeight: 60,
        min: 2, max: 3,
        items: [
            { id: "farmersdelight:potato_crate", ratio: 10 },
            { id: "farmersdelight:carrot_crate", ratio: 10 },
            { id: "farmersdelight:beetroot_crate", ratio: 10 },
            { id: "farmersdelight:onion_crate", ratio: 10 },
            { id: "farmersdelight:cabbage_crate", ratio: 10 },
            { id: "farmersdelight:tomato_crate", ratio: 10 },
            { id: "corn_delight:corn_crate", ratio: 10 },       
            { id: "minecraft:hay_block", ratio: 10 },                
            { id: "kaleidoscope_tavern:wine", ratio: 10 },                
        
                 
            // { id: "farmersdelight:rice_bag", ratio: 2 },

            // { id: "cratedelight:cod_crate", ratio: 10 },
            // { id: "cratedelight:salmon_crate", ratio: 10 },
            // { id: "rationcraft:crate_of_hardtack", ratio: 5 },
            { id: "rationcraft:salted_pork", ratio: 10 },
            { id: "voidlessframework:salt_block", ratio: 12 },
            { id: "cratedelight:sugar_bag", ratio: 12 },

            // { id: "kitchenkarrot:rum", ratio: 10 },
            { id: "brewinandchewin:flaxen_cheese_wheel", ratio: 10 },

            { id: "minecraft:coal_block", ratio: 10 },

        ]
    },]

const trek_pillager_jungle_tool = [

    {
        groupName: "Equipment",
        groupWeight: 20,
        min: 1, max: 1,
        items: [

            { id: "kaleidoscope_cookery:stockpot", ratio: 2 }, 
            { id: "kaleidoscope_cookery:pot", ratio: 2 }, 
            { id: "kaleidoscope_cookery:stockpot_lid", ratio: 2 }, 
            { id: "kaleidoscope_cookery:kitchen_shovel", ratio: 2 }, 
            { id: "minecraft:water_bucket", ratio: 2 }, 

        ]},]

const trek_pillager_jungle_vine = [

    {
        groupName: "Vine",
        groupWeight: 20,
        min: 2, max: 4,
        items: [

            { id: "minecraft:vine", ratio: 10 },

        ]},]
// LootJS.lootTables(event => {
//     let LootTableId = "trek:pillagers/outpost_jungle";
//     if (event.hasLootTable(LootTableId)) {
//         let Loot = event.getLootTable(LootTableId);
//         Loot.clear(); 
//         addCustomLoot(Loot, trek_pillager_jungle_food, 2, 4);
//         addCustomLoot(Loot, trek_pillager_jungle_tool, 2, 4);
//         addCustomLoot(Loot, trek_pillager_jungle_vine, 4, 8);
//     }

// });