const village_ctov_mountain_dish = [
    {
        groupName: "common",
        groupWeight: 90,
        min: 1, max: 2,
        items: [
            { id: "youkaisfeasts:mochi", ratio: 10 },
            { id: "youkaisfeasts:yakumo_inari", ratio: 10 },
            { id: "youkaisfeasts:sekibankiyaki", ratio: 10 },
            { id: "youkaisfeasts:senbei", ratio: 10 },
            { id: "youkaisfeasts:onigili", ratio: 10 },
            { id: "youkaisfeasts:yashouma_dango", ratio: 10 },
            { id: "youkaisfeasts:matcha_mochi", ratio: 10 },
            { id: "youkaisfeasts:tsukimi_dango", ratio: 10 },
            { id: "youkaisfeasts:onigili", ratio: 10 },  

            { id: "farmersdelight:salmon_roll", ratio: 10 },
            { id: "farmersdelight:cod_roll", ratio: 10 },            
            { id: "farmersdelight:kelp_roll_slice", ratio: 10 },   

            { id: "rusticdelight:calamari_roll", ratio: 10 },  
            { id: "culturaldelights:tropical_roll", ratio: 10 },
            { id: "culturaldelights:sushi", ratio: 10 },
            { id: "culturaldelights:pufferfish_roll", ratio: 10 },
            { id: "culturaldelights:midori_roll_slice", ratio: 10 },
            { id: "culturaldelights:egg_roll", ratio: 10 },
            { id: "culturaldelights:chicken_roll_slice", ratio: 10 },
            { id: "culturaldelights:calamari_roll", ratio: 10 },
            { id: "culturaldelights:tamago", ratio: 10 },
            { id: "culturaldelights:rice_ball", ratio: 10 },
        ]
    },
    {
        groupName: "special",
        groupWeight: 10,
        min: 1, max: 1,
        items: [
            { id: "youkaisfeasts:mitarashi_dango", ratio: 10 },
            { id: "youkaisfeasts:kinako_dango", ratio: 10 },
            { id: "farmersdelight:kelp_roll", ratio: 10 },  
            { id: "farmersdelight:rice_roll_medley_block", ratio: 10 },  
           
            { id: "culturaldelights:midori_roll", ratio: 10 },
            { id: "culturaldelights:chicken_roll", ratio: 10 },
            { id: "culturaldelights:exotic_roll_medley", ratio: 10 },
        ]
    },
]

// =================================================================
// 事件注册区域
// =================================================================
const village_mountain_content = [
    [village_snowy_base_crops, 1, 1],
    [village_ctov_mountain_dish, 1, 1],
    [village_snowy_essential_wealth_equipment, 1, 1],
    [village_cooking_equipment_less, 1, 1],
    [village_snowy_drinks, 1, 1],
];

const loot_ctov_village_mountain = [
    [village_mountain_content, 1],
];
