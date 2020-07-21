/*
export function someMutation (state) {
}
*/

//mutations for inventory
export function SET_ALL_INVENTORIES(state, payload) {
    state.inventories = payload
}
export function SET_MAIN_INVENTORY(state, payload) {
    state.mainInventory = payload
    state.rawMaterials = payload.rawMaterials
    state.processedGoods = payload.processedMaterials
}
//mutations for categories - raw material and processed good
export function SET_ALL_CATEGORIES(state, payload) {
    state.categories = payload;
}

export function SET_CATEGORY(state, payload) {
    if(payload.type === 'Raw Material') {
        state.rawMaterialCategory = payload
    }
    else {
        state.processedGoodCategory = payload
    }
}

export function editRawMaterialCategory(state, payload) {
    state.rawMaterialCategory = {...state.rawMaterialCategory, name: payload}
}

export function resetRawMaterialCategory(state, payload) {
    state.rawMaterialCategory = {}
}

export function editProcessedGoodCategory(state, payload) {
    state.processedGoodCategory = {...state.processedGoodCategory, name: payload}
}

export function resetProcessedGoodCategory(state) {
    state.processedGoodCategory = {}
}

//mutations for raw materials
export function SET_ALL_RAW(state, payload) {
    state.rawMaterials = payload;
}

export function SET_RAW_MATERIAL(state, payload) {
    state.rawMaterial = payload
}

export function editRawMaterial(state, payload) {
    if(payload.type === 'name') {
        state.rawMaterial = {...state.rawMaterial, name: payload.info}
    }
    else if(payload.type === 'category') {
        state.rawMaterial = {...state.rawMaterial, category: payload.info}
    }
    else if(payload.type === 'unit') {
        state.rawMaterial = {...state.rawMaterial, unit: payload.info}
    }
    else if(payload.type === 'perUnitCost') {
        state.rawMaterial = {...state.rawMaterial, perUnitCost: payload.info}
    }
    else if(payload.type === 'maxStockQuantity') {
        state.rawMaterial = {...state.rawMaterial, maxStockQuantity: payload.info}
    }
    else if(payload.type === 'alertStockQuantity') {
        state.rawMaterial = {...state.rawMaterial, alertStockQuantity: payload.info}
    }
    else if(payload.type === 'currentStockQuantityMain') {
        state.rawMaterial = {...state.rawMaterial, currentStockQuantityMain: payload.info}
    }
    else if(payload.type === 'currentStockQuantityKitchen') {
        state.rawMaterial = {...state.rawMaterial, currentStockQuantityKitchen: payload.info}
    }
    else if(payload.type === 'shouldCalculateYield') {
        state.rawMaterial = {...state.rawMaterial, shouldCalculateYield: payload.info}
    }
    else if(payload.type === 'yieldQuantityPerUnit') {
        state.rawMaterial = {...state.rawMaterial, yieldQuantityPerUnit: payload.info}
    }
}

export function resetRawMaterial(state) {
    state.rawMaterial = {}
}

//mutations for processed goods
export function SET_ALL_PROCESSED(state, payload) {
    state.processedGoods = payload;
}

export function SET_PROCESSED_MATERIAL(state, payload) {
    state.processedGood = payload
}

export function editProcessedMaterial(state, payload) {
    if(payload.type === 'name') {
        state.processedGood = {...state.processedGood, name: payload.info}
    }
    else if(payload.type === 'category') {
        state.processedGood = {...state.processedGood, category: payload.info}
    }
    else if(payload.type === 'unit') {
        state.processedGood = {...state.processedGood, unit: payload.info}
    }
    else if(payload.type === 'quantity') {
        state.processedGood = {...state.processedGood, quantity: payload.info}
    }
}


//mutations for purchase orders
export function SET_ALL_TEMPLATES(state, payload) {
    state.templates = payload;
}

export function editTemplate(state, payload) {
    if(payload.type === 'name') {
        state.template = {...state.template, name: payload.info}
    }
    else if(payload.type === 'vendorName') {
        state.template = {...state.template, vendorName: payload.info}
    }
    else if(payload.type === 'vendorDepartment') {
        state.template = {...state.template, vendorDepartment: payload.info}
    }
    else if(payload.type === 'vendorPhone') {
        state.template = {...state.template, vendorPhone: payload.info}
    }
    else if(payload.type === 'vendorEmail') {
        state.template = {...state.template, vendorEmail: payload.info}
    }
    else if(payload.type === 'vendorFax') {
        state.template = {...state.template, vendorFax: payload.info}
    }
    else if(payload.type === 'vendorAddress') {
        state.template = {...state.template, vendorAddress: payload.info}
    }
    else if(payload.type === 'vendorCity') {
        state.template = {...state.template, vendorCity: payload.info}
    }
    else if(payload.type === 'vendorPincode') {
        state.template = {...state.template, vendorPincode: payload.info}
    }
    else if(payload.type === 'vendorLandmark') {
        state.template = {...state.template, vendorLandmark: payload.info}
    }
    else if(payload.type === 'shippingDepartment') {
        state.template = {...state.template, shippingDepartment: payload.info}
    }
    else if(payload.type === 'shippingPhone') {
        state.template = {...state.template, shippingPhone: payload.info}
    }
    else if(payload.type === 'shippingEmail') {
        state.template = {...state.template, shippingEmail: payload.info}
    }
    else if(payload.type === 'shippingFax') {
        state.template = {...state.template, shippingFax: payload.info}
    }
    else if(payload.type === 'shippingAddress') {
        state.template = {...state.template, shippingAddress: payload.info}
    }
    else if(payload.type === 'shippingCity') {
        state.template = {...state.template, shippingCity: payload.info}
    }
    else if(payload.type === 'shippingPincode') {
        state.template = {...state.template, shippingPincode: payload.info}
    }
    else if(payload.type === 'shippingLandmark') {
        state.template = {...state.template, shippingLandmark: payload.info}
    }
    else if(payload.type === 'shippingInfoText') {
        state.template = {...state.template, shippingInfoText: payload.info}
    }
}

