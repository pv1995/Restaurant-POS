/*
export function someAction (context) {
}
*/

import axios from 'axios';
import router from '../../router';
// import { baseAPIUrl } from 'src/config.js';

let baseURL = 'https://mad-shark-tyson-marshal.herokuapp.com/api/v1'

export function getAllEmployees({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/merchant/employees`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('t')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ALL_EMPLOYEES', res.data.employees)
    })
}

export function getEachEmployee({commit},payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/merchant/employees/${payload}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('t')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_EACH_EMPLOYEE', res.data.employee)
    })
}

export function getAllLeaves({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/merchant/leave`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('t')}`
        }
    })
    .then((res) => {
        // console.log(res,"LALALALAAAAAAAAA");
        commit('SET_ALL_LEAVES', res.data)
    })
}
export function getEachLeave({commit},payload) {
    return new Promise((resolve,reject)=>{
        axios({
            method: 'GET',
            url: `${baseURL}/merchant/leave/${payload}`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('t')}`
            }
        })
        .then((res) => {
            // console.log(res,"LALALALAAAAAAAAA");
            commit('SET_EACH_LEAVE', res.data)
            resolve(true)
        },err=>{
            resolve(false)
        })
    })  
}

export function addEmployeeDetail({dispatch}, payload) {
    var dataToSend = new FormData()
    for (var key in payload) {
        dataToSend.append(key, payload[key])
    }
    axios({
        method: 'POST',
        url: `${baseURL}/merchant/employees`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('t')}`,
        },
        data: dataToSend
    })
    .then((response) => {
        console.log(response)
        dispatch('getAllEmployees')
        this.$router.push('/employee')
    })
}

export function applyNewLeave({dispatch}, payload) {
    
    axios({
        method: 'POST',
        url: `${baseURL}/employee/apply-leave`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`,
        },
        data: payload
    })
    .then((response) => {
        console.log(response)
        dispatch('getAllLeaves')
        this.$router.push('/leaves')
    })
}


export function handleLeave({dispatch}, payload) {
    axios({
        method: 'PUT',
        url: `${baseURL}/merchant/handle-leave`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('t')}`
        },
        data: payload
    })
    .then((res) => {
        console.log(res);
        dispatch('getAllLeaves')
    })
}


// export function acceptLeave({dispatch}, payload) {
//     axios({
//         method: 'PUT',
//         url: `${baseURL}/merchant/handle-leave`,
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem('t')}`
//         },
//         data: payload
//     })
//     .then((res) => {
//         console.log(res);
//         dispatch('getAllLeaves')
//     })
// }