//getters for inventories
export function getAllInventories(state) {
    return state.inventories
}

export function getMainInventory(state) {
    return state.mainInventory
}

//getters for stock view
export function getRawMaterials(state) {
    return state.rawMaterials
}

export function getRawMaterial(state) {
    return state.rawMaterial
}

export function getProcessedGoods(state) {
    return state.processedGoods
}

export function getProcessedMaterial(state) {
    return state.processedGood
}

export function getRawMaterialCategory(state) {
    return state.rawMaterialCategory
}

export function getProcessedGoodCategory(state) {
    return state.processedGoodCategory
}

export function getRawMaterialCategories(state) {
    return state.categories.filter(cat => {
        if(cat.type === 'Raw Material') {
            return cat
        }
    })
}

export function getProcessedGoodCategories(state) {
    return state.categories.filter(cat => {
        if(cat.type !== 'Raw Material') {
            return cat
        }
    })
}

//getters for purchase order
export function getTemplates(state) {
    return state.templates
}

export function getTemplate(state) {
    return state.template
}

//getters for receiving
export function getReceivingPO(state) {
    return state.receiving
}

//getters for invoices
export function getInvoices(state) {
    return state.invoices
}

//getters for purchase orders
export function getPurchaseOrders(state) {
    return state.purchaseOrders
}

//getters for audit
export function getRMStockLevelAudit(state) {
    return state.RMStockLevelAudit
}

export function getInnerStockAudit(state) {
    return state.innerStockLevelTable
}

export function getAllRequisitions(state) {
    return state.requisitions
}