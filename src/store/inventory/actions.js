import axios from 'axios';

let baseURL = 'https://mad-shark-tyson-marshal.herokuapp.com/api/v1'

//APIs for all inventories
export function getAllInventories({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/inventory`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ALL_INVENTORIES', res.data)
    })
}

export function getMainInventory({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/inventory/main-inventory`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_MAIN_INVENTORY', res.data)
    })
}

//APIs for all categories - raw material and processed good
export function getCategories({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/inventory/category`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ALL_CATEGORIES', res.data)
    })
}

export function getCategory({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/inventory/category/${encodeURI(payload)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_CATEGORY', res.data)
    })
}

export function addCategory({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/inventory/category`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name,
            type: payload.type
        }
    })
    .then((res) => {
        if(payload.type === 'Raw Material') {
            commit('resetRawMaterialCategory')
            dispatch('getCategories');
            this.$router.push({
                name: 'stock-view',
                params: {
                    type: 'rawMaterialCategory'
                }
            })
        }
        else {
            commit('resetProcessedGoodCategory')
            dispatch('getCategories');
            this.$router.push({
                name: 'stock-view',
                params: {
                    type: 'processedGoodCategory'
                }
            })
        }
    })
}

export function updateCategory({commit, dispatch}, payload) {
    axios({
        method: 'PUT',
        url: `${baseURL}/inventory/category`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            name: payload.name,
            type: payload.type
        }
    })
    .then((res) => {
        if(payload.type === 'Raw Material') {
            commit('resetRawMaterialCategory')
            dispatch('getCategories');
            this.$router.push({
                name: 'stock-view',
                params: {
                    type: 'rawMaterialCategory'
                }
            })
        }
        else {
            commit('resetProcessedGoodCategory')
            dispatch('getCategories');
            this.$router.push({
                name: 'stock-view',
                params: {
                    type: 'processedGoodCategory'
                }
            })
        }
    })
}

//APIs for Raw Materials
export function getAllRaw({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/inventory/raw-material`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res)
        commit('SET_ALL_RAW', res.data.data)
    })
}

export function getRawMaterial({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/inventory/raw-material/${encodeURI(payload)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        commit('SET_RAW_MATERIAL', res.data.data)
    })
}

export function addRawMaterial({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/inventory/raw-material`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name,
            category: payload.category,
            unit: payload.unit,
            perUnitCost: payload.perUnitCost,
            max: payload.maxStockQuantity,
            alert: payload.alertStockQuantity,
            current: payload.currentStockQuantity,
            shouldCalculateYield: payload.shouldCalculateYield,
            yieldQuantityPerUnit: payload.yieldQuantityPerUnit
        }
    })
    .then((res) => {
        commit('resetRawMaterial')
        dispatch('getMainInventory')
        this.$router.push({
            name: 'stock-view',
            params: {
                type: 'rawMaterial'
            }
        })
    })
}

export function updateRawMaterial({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/inventory/raw-material`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            name: payload.name,
            category: payload.category,
            unit: payload.unit,
            perUnitCost: payload.perUnitCost,
            max: payload.maxStockQuantity,
            alert: payload.alertStockQuantity,
            current: payload.currentStockQuantity,
            shouldCalculateYield: payload.shouldCalculateYield,
            yieldQuantityPerUnit: payload.yieldQuantityPerUnit
        }
    })
    .then((res) => {
        commit('resetRawMaterial')
        dispatch('getMainInventory')
        this.$router.push({
            name: 'stock-view',
            params: {
                type: 'rawMaterial'
            }
        })
    })
}


//APIs for Processed Goods
export function getAllProcessed({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/inventory/processed-material`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res, '!!!!')
        commit('SET_ALL_PROCESSED', res.data.processedMaterial)
    })
}

export function getProcessedMaterial({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/inventory/processed-material/${encodeURIComponent(payload)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res)
        // commit('SET_PROCESSED_MATERIAL', res.data.processedMaterial)
    })
}

export function addProcessedMaterial({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/inventory/processed-material`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name,
            category: payload.category,
            unit: payload.unit,
            quantity: payload.quantity,
            rawMaterials: payload.rawMaterials
        }
    })
    .then((res) => {
        console.log(res)
    })
}


//APIs for Purchase Orders
export function getAllTemplates({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/inventory/template`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res,"GET ALL PROCESSED");
        commit('SET_ALL_TEMPLATES', res.data)
    })
}

export function addTemplate({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/inventory/template`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name,
            merchantCity: payload.merchantCity,
            merchantBranch: payload.merchantBranch,
            reqEmail: payload.reqEmail,
            reqDesignation: payload.reqDesignation,
            vendorName: payload.vendorName,
            vendorDepartment: payload.vendorDepartment,
            vendorPhone: payload.vendorPhone,
            vendorEmail: payload.vendorEmail,
            vendorFax: payload.vendorFax,
            vendorAddress: payload.vendorAddress,
            vendorCity: payload.vendorCity,
            vendorPincode: payload.vendorPincode,
            vendorLandmark: payload.vendorLandmark,
            shippingDepartment: payload.shippingDepartment,
            shippingPhone: payload.shippingPhone,
            shippingEmail: payload.shippingEmail,
            shippingFax: payload.shippingFax,
            shippingAddress: payload.shippingAddress,
            shippingCity: payload.shippingCity,
            shippingPincode: payload.shippingPincode,
            shippingLandmark: payload.shippingLandmark,
            shippingTermLink: payload.shippingTermLink,
            shippingInfoText: payload.shippingInfoText
        }
    })
    .then((res) => {
        dispatch('getAllTemplates')
        this.$router.push({
            name: 'purchase-orders'
        })
    })
}
