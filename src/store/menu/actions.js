/*
export function someAction (context) {
}
*/
import axios from 'axios';
import router from '../../router';

let baseURL = 'https://mad-shark-tyson-marshal.herokuapp.com/api/v1'


//API calls for menu category
export function getAllMenuCategories({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/menu-category`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ALL_MENU_CATEGORIES', res.data)
    })
}

export function getMenuCategory({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/menu-category/${encodeURI(payload)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_MENU_CATEGORY', res.data)
    })
}

export function addMenuCategory({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/menu-category`,
        data: {
            name: payload.name,
            ticketGroup: payload.ticketGroup
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        dispatch('getAllMenuCategories');
        this.$router.push('/menu-categories')
    })
}

export function updateMenuCategory({dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/menu-category`,
        data: {
            id: payload.id,
            name: payload.name,
            ticketGroup: payload.ticketGroup
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        dispatch('getAllMenuCategories');
        this.$router.push('menu-categories')
    })
}