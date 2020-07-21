/*
export function someAction (context) {
}
*/
import axios from 'axios';
import router from '../../router';
// import { baseAPIUrl } from 'src/config.js';

let baseURL = 'https://mad-shark-tyson-marshal.herokuapp.com/api/v1'

//login APIs
export function merchantLogin({commit, dispatch}, payload) {
    console.log(payload);
    axios({
        method: 'PUT',
        url: `${baseURL}/entrance/merchant-login`,
        data: {
            emailAddress: payload.email,
            password: payload.password
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        console.log(res);
        localStorage.setItem('t', res.data.token)
        dispatch('getMerchantDetails');
        this.$router.push('/employees')
    })
    .catch((err) => {
        console.log(err)
        commit('SET_LOGIN_ERROR')
    })
}

export function employeeLogin({commit, dispatch}, payload) {
    axios({
        method: 'PUT',
        url: `${baseURL}/entrance/user-login`,
        data: {
            userName: payload.userName,
            pin: payload.pin
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('t')}`
        }
    })
    .then((res) => {
        console.log(res);
        localStorage.setItem('ut', res.data.token)
        dispatch('getCurrentEmployee')
        commit('SET_USER_DATA', res.data.user)
        this.$router.push('/main')
    })
}

//get all employees
// export function getAllEmployees({commit}) {
//     axios({
//         method: 'GET',
//         url: `${baseURL}/merchant/employees`,
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem('t')}`
//         }
//     })
//     .then((res) => {
//         console.log(res);
//         commit('SET_ALL_EMPLOYEES', res.data.employees)
//     })
// }

//actions for merchant
export function getMerchantDetails({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/merchant/me`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('t')}`
        }
    })
    .then((res) => {
        console.log(res)
        commit('SET_MERCHANT_DETAILS', res.data)
    })
}

//actions for current employee
export function getCurrentEmployee({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/employee/me`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        commit('SET_EMPLOYEE_DETAILS', res.data)
    })
}

export function editUserData({commit}, payload) {
    console.log(payload)
}
