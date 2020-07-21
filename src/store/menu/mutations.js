/*
export function someMutation (state) {
}
*/

//mutations for menu category
export function SET_ALL_MENU_CATEGORIES(state, payload) {
    state.menuCategories = payload
}

export function SET_MENU_CATEGORY(state, payload) {
    state.menuCategory = payload
}

export function editMenuCategory(state, payload) {
    if(payload.type === 'name') {
        state.menuCategory = {...state.menuCategory, name: payload.info}
    }
    else if(payload.type === 'orderTicketKOT') {
        state.menuCategory = {...state.menuCategory, orderTicketKOT: payload.info}
    }
}

export function resetMenuCategory(state) {
    state.menuCategory = {}
}