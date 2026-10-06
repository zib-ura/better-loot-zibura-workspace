const trial_chambers_pot = [
    {
        groupName: "ores",
        groupWeight: 10,
        min: 2, max: 3, 
        items: [
            { id: "minecraft:emerald", ratio: 10 },
            { id: "minecraft:diamond", ratio: 10 },
            // { id: "minecraft:lapis_lazuli", ratio: 10 },
            // { id: "minecraft:redstone", ratio: 10 },
            // { id: "minecraft:gold_ingot", ratio: 10 },
        ]
    },
    {
        groupName: "small_items_and_powders",
        groupWeight: 90,
        min: 3, max: 4, 
        items: [
            // --- Common Small Items & Seeds (Ratio: 10) ---
            { id: "minecraft:stick", ratio: 10 },
            { id: "minecraft:flint", ratio: 10 },
            { id: "minecraft:feather", ratio: 10 },
            { id: "minecraft:string", ratio: 10 },
            { id: "minecraft:snowball", ratio: 10 },
            { id: "minecraft:clay_ball", ratio: 10 },
            { id: "minecraft:bone_meal", ratio: 10 },
            { id: "minecraft:sugar", ratio: 10 },

            // // Common Dyes (Ratio: 8)
            // { id: "minecraft:white_dye", ratio: 8 },
            // { id: "minecraft:red_dye", ratio: 8 },
            // { id: "minecraft:yellow_dye", ratio: 8 },
            // { id: "minecraft:blue_dye", ratio: 8 },
            // { id: "minecraft:black_dye", ratio: 8 },
            // { id: "minecraft:brown_dye", ratio: 8 },

            // --- Uncommon Powders & Drops (Ratio: 4 - 5) ---
            { id: "minecraft:redstone", ratio: 5 },
            { id: "minecraft:glowstone_dust", ratio: 5 },
            { id: "minecraft:gunpowder", ratio: 4 },
            { id: "minecraft:slime_ball", ratio: 4 },
            // { id: "minecraft:glow_ink_sac", ratio: 4 },
            // { id: "minecraft:ink_sac", ratio: 5 },
            // { id: "minecraft:cocoa_beans", ratio: 5 },
            // { id: "minecraft:torchflower_seeds", ratio: 4 },

            // // --- Rare Powders & Specialty Drops (Ratio: 1 - 2) ---
            // { id: "minecraft:blaze_powder", ratio: 2 },
            // { id: "minecraft:prismarine_crystals", ratio: 2 },
            // { id: "minecraft:prismarine_shard", ratio: 2 },
            // { id: "minecraft:scute", ratio: 1 },
            // { id: "minecraft:armadillo_scute", ratio: 1 },
            // { id: "minecraft:pitcher_pod", ratio: 2 }
        ]
    },
];

// =================================================================
// 事件注册区域
// =================================================================
const trial_chambers_pot_content = [
    [trial_chambers_pot, 1, 1],
];

const loot_trial_chambers_pot = [
    [trial_chambers_pot_content, 1],
];