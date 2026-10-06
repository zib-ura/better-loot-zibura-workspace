// const village_plains_photo = [
//     // =================================================================
//     // Group 1: Photos & Misc
//     // =================================================================
//     {
//         groupName: "Photos & Misc",
//         groupWeight: 5,
//         min: 1, max: 2,
//         items: [
//             {
//                 id: "exposure:aged_photograph",
//                 ratio: 100,
//                 jsonFunction: {
//                     "function": "minecraft:set_components",
//                     "components": {
//                         "exposure:photograph_frame": {
//                             "identifier": {
//                                 "texture": "exposure:textures/exposure/village/attack_1.png"
//                             }
//                         }
//                     }                
//                 }
//             },

//             {
//                 id: "exposure:aged_photograph",
//                 ratio: 1,
//                 jsonFunction: {
//                     "function": "minecraft:set_components",
//                     "components": {
//                         "exposure:photograph_frame": {
//                             "identifier": {
//                                 "texture": "exposure:textures/exposure/village/attack_2.png"
//                             }
//                         }
//                     }
//                 }
//             },
//             {
//                 id: "exposure:aged_photograph",
//                 ratio: 1,
//                 jsonFunction: {
//                     "function": "minecraft:set_components",
//                     "components": {
//                         "exposure:photograph_frame": {
//                             "identifier": {
//                                 "texture": "exposure:textures/exposure/village/village_1.png"
//                             }
//                         }
//                     }
//                 }
//             },
//             {
//                 id: "exposure:aged_photograph",
//                 ratio: 1,
//                 jsonFunction: {
//                     "function": "minecraft:set_components",
//                     "components": {
//                         "exposure:photograph_frame": {
//                             "identifier": {
//                                 "texture": "exposure:textures/exposure/village/village_2.png"
//                             }
//                         }
//                     }
//                 }
//             },
//             {
//                 id: "exposure:aged_photograph",
//                 ratio: 1,
//                 jsonFunction: {
//                     "function": "minecraft:set_components",
//                     "components": {
//                         "exposure:photograph_frame": {
//                             "identifier": {
//                                 "texture": "exposure:textures/exposure/village/village_3.png"
//                             }
//                         }
//                     }
//                 }
//             },
//             {
//                 id: "exposure:aged_photograph",
//                 ratio: 1,
//                 jsonFunction: {
//                     "function": "minecraft:set_components",
//                     "components": {
//                         "exposure:photograph_frame": {
//                             "identifier": {
//                                 "texture": "exposure:textures/exposure/village/village_4.png"
//                             }
//                         }
//                     }
//                 }
//             },
//         ]
//     },

//     {
//         groupName: "empty",
//         groupWeight: 0,
//         items: [
//             { id: "empty", ratio: 10 }
//         ]
//     },
// ]

// LootJS.lootTables(event => {
//     const Loot = event.getLootTable("minecraft:chests/village/village_plains_house");

//     addCustomLoot(Loot, village_plains_photo, 1, 1);
// });