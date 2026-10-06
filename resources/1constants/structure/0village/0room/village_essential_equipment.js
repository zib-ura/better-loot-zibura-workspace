const common_cooking_equipment = [

    { id: "kaleidoscope_cookery:stockpot", ratio: 10 }, 
    { id: "kaleidoscope_cookery:pot", ratio: 10 }, 
    { id: "kaleidoscope_cookery:stockpot_lid", ratio: 10 }, 
    { id: "kaleidoscope_cookery:kitchen_shovel", ratio: 10 }, 

    { id: "farmersdelight:cooking_pot", ratio: 10 }, 
    { id: "farmersdelight:skillet", ratio: 10 },    
    { id: "farmersdelight:iron_knife", ratio: 10 },
]

const village_cooking_equipment_more = [
    {
        groupName: "cooking_equipment",
        groupWeight: 50,
        min: 1, max: 1, damage: [0.8, 0.9],
        items: [
            { id: "kaleidoscope_cookery:stockpot", ratio: 10 }, 
            { id: "kaleidoscope_cookery:pot", ratio: 10 }, 
            { id: "kaleidoscope_cookery:stockpot_lid", ratio: 10 }, 
            { id: "kaleidoscope_cookery:kitchen_shovel", ratio: 10 }, 

            { id: "farmersdelight:cooking_pot", ratio: 10 }, 
            { id: "farmersdelight:skillet", ratio: 10 },    
            { id: "farmersdelight:iron_knife", ratio: 10 },
        ]
    },
    {   
        groupName: "empty",
        groupWeight: 50, 
        items: [
            { id: "empty"},
        ]
    },
]

const village_cooking_equipment_less = [
    {
        groupName: "cooking_equipment",
        groupWeight: 30,
        min: 1, max: 1, damage: [0.8, 0.9],
        items: [
            { id: "kaleidoscope_cookery:stockpot", ratio: 10 }, 
            { id: "kaleidoscope_cookery:pot", ratio: 10 }, 
            { id: "kaleidoscope_cookery:stockpot_lid", ratio: 10 }, 
            { id: "kaleidoscope_cookery:kitchen_shovel", ratio: 10 }, 

            { id: "farmersdelight:cooking_pot", ratio: 10 }, 
            { id: "farmersdelight:skillet", ratio: 10 },    
            { id: "farmersdelight:iron_knife", ratio: 10 },
        ]
    },
    {   
        groupName: "empty",
        groupWeight: 70, 
        items: [
            { id: "empty"},
        ]
    },
]