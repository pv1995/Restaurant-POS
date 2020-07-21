/*
export function someGetter (state) {
}
*/
import colors from '../../utils/mapRolesToColors'
export function getAllEmployeeDetails (state) {
    
    return state.employees;
    
}

export function getEachEmpDetails (state) {
    
    return state.singleEmp;
    
}

export function getUniqueEmpRoles (state) {
    // console.log(colors, "COLORSSS")
    var allRoles = state.employees.map(employee=>{
        return employee.roleType
    })
    console.log(allRoles,'***')
    var uniqueRoles =  allRoles.filter((value,index,self)=>{
        return self.indexOf(value) === index
    })
    console.log(uniqueRoles,'LLL')
    var toSend =  uniqueRoles.map(role=>{
        return {
            name: role,
            color: colors[role]
        }
    })
    console.log(toSend,'%%')
    return toSend
}

export function getAllEmployeeLeaves (state) {
    
    return state.leaves;
    
}

export function getEachLeave (state) {
    
    return state.singleLeave;
    
}