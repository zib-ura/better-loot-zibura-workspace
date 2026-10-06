const village_cartographer_maps_and_guides = [
    {
        groupName: "maps_and_guides",
        groupWeight: 20,
        min: 1, max: 1,
        items: [
            { id: "minecraft:map", ratio: 10 },
            { id: "supplementaries:slice_map", ratio: 10 },
        ]
    }
];

const village_cartographer_cartography_tools = [
    {
        groupName: "cartography_tools",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "minecraft:compass", ratio: 10 },
            { id: "minecraft:spyglass", ratio: 10 },
            { id: "naturescompass:naturescompass", ratio: 3 },
            { id: "explorerscompass:explorerscompass", ratio: 3 },
        ]
    }
];

const village_cartographer_records_and_ink = [
    {
        groupName: "records_and_ink",
        groupWeight: 20,
        min: 1, max: 1,
        items: [
            { id: "minecraft:book", ratio: 15 },
            { id: "minecraft:writable_book", ratio: 8 },
            { id: "supplementaries:antique_ink", ratio: 10 },
            { id: "minecraft:ink_sac", ratio: 12 },
            { id: "minecraft:glow_ink_sac", ratio: 5 }, 
        ]
    }
];

const village_cartographer_office_decorations = [
    {
        groupName: "office_decorations",
        groupWeight: 10,
        min: 1, max: 1,
        items: [
            { id: "supplementaries:globe", ratio: 5 }, 
            { id: "supplementaries:globe_sepia", ratio: 5 },
            { id: "minecraft:clock", ratio: 5 },
            { id: "minecraft:painting", ratio: 8 }, 
        ]
    }
];

const village_cartographer_marking_materials = [
    {
        groupName: "marking_materials",
        groupWeight: 15,
        min: 1, max: 1,
        items: [
            { id: "minecraft:white_banner", ratio: 10 },
            { id: "minecraft:blue_banner", ratio: 5 },
            { id: "minecraft:red_banner", ratio: 5 },
            { id: "minecraft:frame", ratio: 12 }, 
            { id: "minecraft:glow_item_frame", ratio: 4 }, 
        ]
    }
];

// =================================================================
// 事件注册区域
// =================================================================

const village_cartographer_content = [
    [village_cartographer_maps_and_guides, 1, 2],
    [village_cartographer_cartography_tools, 1, 2], 
    [village_cartographer_records_and_ink, 2, 3], 
    [village_cartographer_office_decorations, 1, 1], 
    [village_cartographer_marking_materials, 1, 2], 
    [village_chess, 1, 1],
    [paper, 4, 5],
];

const loot_village_cartographer = [
    [village_cartographer_content, 1],
];