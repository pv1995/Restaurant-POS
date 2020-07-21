/*
export function someGetter (state) {
}
*/
export function getAllOrders (state) {
    console.log(state,"in state")
    return state.orders;
    
}