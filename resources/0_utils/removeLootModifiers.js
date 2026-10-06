$G.removeGlobalModifiersBatch_1_21_1 = function(modifierIds) {
    LootJS.modifiers(event => {
        modifierIds.forEach(id => {
            event.removeGlobalModifiers(id);
        });
    });
}

$G.removeGlobalModifiersBatch_1_20_1 = function(modifierIds) {
    LootJS.modifiers(event => {
        modifierIds.forEach(id => {
            event.removeGlobalModifier(id);
        });
    });
}