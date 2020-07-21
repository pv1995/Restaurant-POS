/*
export function someGetter (state) {
}
*/
export function getMenuCategories(state) {
    return state.menuCategories.map(cat => {
        return {
            id: cat.id,
            name: cat.name,
            orderTicketKOT: cat.ticketGroup ? cat.ticketGroup.name : '-'
        }
    })
}

export function getMenuCategory(state) {
    return state.menuCategory
}

export function getComboGroups(state) {
    return state.comboGroups
}