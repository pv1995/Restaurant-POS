/*
export function someMutation (state) {
}
*/
export function SET_ALL_EMPLOYEES(state, payload) {
    state.employees = payload;
}

export function SET_EACH_EMPLOYEE(state, payload) {
    state.singleEmp = payload;
}

export function SET_ALL_LEAVES(state, payload) {
    state.leaves = payload;
}

export function SET_EACH_LEAVE(state, payload) {
    state.singleLeave = payload;
}


export function editEmpLeave(state, payload) {
    if(payload.type === 'employeeId') {
        state.singleLeave = {...state.singleLeave, employeeId: payload.info}
    }
    else if(payload.type === 'type') {
        state.singleLeave = {...state.singleLeave, type: payload.info}
    }
    else if(payload.type === 'from') {
        state.singleLeave = {...state.singleLeave, from: payload.info}
    }
    else if(payload.type === 'to') {
        state.singleLeave = {...state.singleLeave, to: payload.info}
    }
    else if(payload.type === 'notes') {
        state.singleLeave = {...state.singleLeave, notes: payload.info}
    }
}

export function editEmpDetails(state, payload) {
    if(payload.type === 'fullName') {
        state.singleLeave = {...state.singleLeave, fullName: payload.info}
    }
    else if(payload.type === 'userName') {
        state.singleLeave = {...state.singleLeave, userName: payload.info}
    }
    else if(payload.type === 'pin') {
        state.singleLeave = {...state.singleLeave, pin: payload.info}
    }
    else if(payload.type === 'roleType') {
        state.singleLeave = {...state.singleLeave, roleType: payload.info}
    }
    else if(payload.type === 'jobDescription') {
        state.singleLeave = {...state.singleLeave, jobDescription: payload.info}
    }
    else if(payload.type === 'phoneNumber') {
        state.singleLeave = {...state.singleLeave, phoneNumber: payload.info}
    }
    else if(payload.type === 'gender') {
        state.singleLeave = {...state.singleLeave, gender: payload.info}
    }
    else if(payload.type === 'dob') {
        state.singleLeave = {...state.singleLeave, dob: payload.info}
    }
    else if(payload.type === 'doj') {
        state.singleLeave = {...state.singleLeave, doj: payload.info}
    }
    else if(payload.type === 'salary') {
        state.singleLeave = {...state.singleLeave, salary: payload.info}
    }
    else if(payload.type === 'salaryRotation') {
        state.singleLeave = {...state.singleLeave, salaryRotation: payload.info}
    }
    else if(payload.type === 'address') {
        state.singleLeave = {...state.singleLeave, address: payload.info}
    }
    else if(payload.type === 'mondayShifts') {
        state.singleLeave = {...state.singleLeave, mondayShifts: payload.info}
    }
    else if(payload.type === 'tuesdayShifts') {
        state.singleLeave = {...state.singleLeave, tuesdayShifts: payload.info}
    }
    else if(payload.type === 'wednesdayShifts') {
        state.singleLeave = {...state.singleLeave, wednesdayShifts: payload.info}
    }
    else if(payload.type === 'thursdayShifts') {
        state.singleLeave = {...state.singleLeave, thursdayShifts: payload.info}
    }
    else if(payload.type === 'fridayShifts') {
        state.singleLeave = {...state.singleLeave, fridayShifts: payload.info}
    }
    else if(payload.type === 'saturdayShifts') {
        state.singleLeave = {...state.singleLeave, saturdayShifts: payload.info}
    }
    else if(payload.type === 'sundayShifts') {
        state.singleLeave = {...state.singleLeave, sundayShifts: payload.info}
    }
    else if(payload.type === 'photo') {
        state.singleLeave = {...state.singleLeave, photo: payload.info}
    }
}
