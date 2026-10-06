const trial_chambers_spawners_common_key = [
    {
        groupName: "common_key", 
        groupWeight: 50,
        min: 1, max: 1, 
        items: [
            { id: "minecraft:trial_key", ratio: 20 },               
        ]
    },
    {
        groupName: "empty",
        groupWeight: 50,
        items: [
            { id: "empty" },
        ]
    },    
];

const trial_chambers_spawners_ominous_key = [
    {
        groupName: "ominous_key", 
        groupWeight: 30,
        min: 1, max: 1, 
        items: [
            { id: "minecraft:ominous_trial_key", ratio: 20 },               
        ]
    },
    {
        groupName: "empty",
        groupWeight: 70,
        items: [
            { id: "empty" },
        ]
    },
];

const trial_chambers_common_spawners_content = [
    [trial_chambers_survival, 1, 1],
    [trial_chambers_spawners_common_key, 1, 1],
];

const loot_trial_chambers_common_spawners = [
    [trial_chambers_common_spawners_content, 1],
]

const trial_chambers_ominous_spawners_content = [
    [trial_chambers_survival, 1, 1],
    [trial_chambers_spawners_ominous_key, 1, 1],
];

const loot_trial_chambers_ominous_spawners = [
    [trial_chambers_ominous_spawners_content, 1],
]