const trek_pillager_ocean_food = [

    {
        groupName: "common",
        groupWeight: 30,
        min: 2, max: 3,
        items: [
            { id: "farmersdelight:potato_crate", ratio: 10 },
            { id: "farmersdelight:carrot_crate", ratio: 10 },
            { id: "farmersdelight:beetroot_crate", ratio: 10 },
            { id: "farmersdelight:onion_crate", ratio: 10 },
            { id: "farmersdelight:cabbage_crate", ratio: 10 },
            { id: "farmersdelight:tomato_crate", ratio: 10 },
            { id: "corn_delight:corn_crate", ratio: 10 },

            { id: "farmersdelight:rice_bag", ratio: 10 },
        ]},
    {
        groupName: "ocean",
        groupWeight: 60,
        min: 2, max: 3,
        items: [
            { id: "cratedelight:cod_crate", ratio: 10 },
            { id: "cratedelight:salmon_crate", ratio: 10 },
            { id: "rationcraft:crate_of_hardtack", ratio: 5 },
            { id: "rationcraft:salted_pork", ratio: 10 },
            { id: "voidlessframework:salt_block", ratio: 12 },
            { id: "cratedelight:sugar_bag", ratio: 12 },

            { id: "kitchenkarrot:rum", ratio: 10 },
            { id: "kaleidoscope_tavern:rum", ratio: 10 },

            { id: "brewinandchewin:flaxen_cheese_wheel", ratio: 3 },
            { id: "trailandtales_delight:cheese_wheel", ratio: 3 },
            { id: "kitchenkarrot:cheese_wheel", ratio: 3 },



            { id: "minecraft:coal_block", ratio: 10 },

        ]
    },]

const trek_pillager_ocean_tool = [

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

const trek_pillager_ocean_hardtack = [

    {
        groupName: "Hardtack",
        groupWeight: 20,
        min: 2, max: 4,
        items: [

            { id: "rationcraft:hardtack", ratio: 10 },

        ]},]
// LootJS.lootTables(event => {
//     let lootTableId = "trek:pillagers/ocean";
//     if (event.hasLootTable(lootTableId)) {
//     let Loot = event.getLootTable("trek:pillagers/ocean");
//         Loot.clear(); 
//         // 参数: (战利品表对象, 配置数组, 最小抽数, 最大抽数)
//         addCustomLoot(Loot, trek_pillager_ocean_food, 2, 4);
//         addCustomLoot(Loot, trek_pillager_ocean_tool, 2, 4);
//         addCustomLoot(Loot, trek_pillager_ocean_hardtack, 4, 8);
//     }
// });