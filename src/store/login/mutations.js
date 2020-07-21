/*
export function someMutation (state) {
}
*/
export function SET_MERCHANT(state, payload) {
    state.merchant = payload;
}

export function SET_LOGIN_ERROR(state, payload) {
    state.loginError = 'Username or password is incorrect. Please fill the correct details.'
}

export function SET_USER_DATA(state, payload) {
    state.user = payload
}

export function SET_MERCHANT_DETAILS(state, payload) {
    state.merchant = payload;
}

export function SET_EMPLOYEE_DETAILS(state, payload) {
    state.user = payload
}

//mutations for setUserData
export function editUserInfo(state, payload) {
    if(payload.type === 'fullName') {
        state.user.fullName = payload.info
    }
}