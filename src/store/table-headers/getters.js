/*
export function someGetter (state) {
}
*/

//getters for register table
export function getRegisterHeaders(state) {
    return state.register
}


//getters for menu categories
export function getMenuCategoryHeaders(state) {
    return state.menuCategory
}


//getters for taxes
export function getTaxHeaders(state) {
    return state.tax
}

export function getTaxGroupHeaders(state) {
    return state.taxGroup
}

//getters for addons
export function getAddOnHeaders(state) {
    return state.addon
}

export function getAddOnGroupHeaders(state) {
    return state.addOnGroup
}

//getters for variants
export function getVariantHeaders(state) {
    return state.variant
}

export function getVariantGroupHeaders(state) {
    return state.variantGroup
}


//getters for discount rules
export function getDiscountRuleHeaders(state) {
    return state.discountRule
}

//getters for additional charges
export function getAdditionalChargeHeaders(state) {
    return state.additionalCharges
}

//getters for orders
export function getOrderHeaders(state) {
    return state.orders
}

//getters for order ticket group
export function getTicketGroupHeaders(state) {
    return state.orderTicketGroup
}

//getters for custom fields
export function getPaymentTypeHeaders(state) {
    return state.paymentType
}

export function getAdditionalDetailHeaders(state) {
    return state.additionalDetail
}

export function getTagHeaders(state) {
    return state.tag
}

//getters for tables
export function getTablesHeaders(state) {
    return state.tables
}

//getters for shifts
export function getShiftHeaders(state) {
    return state.shift
}

//getters for raw materials
export function getRawMaterialHeaders(state) {
    return state.rawMaterials
}

export function getRawMaterialCategoryHeaders(state) {
    return state.rawMaterialCategories
}

export function getRawMaterialListPGHeaders(state) {
    return state.rawMaterialListPG
}

//getters for templates
export function getTemplateHeaders(state) {
    return state.templates
}

//getters for purchase orders
export function getRawMaterialListPOHeaders(state) {
    return state.rawMaterialListPO
}

export function getPurchaseOrderHeaders(state) {
    return state.purchaseOrders
}

//getters for receiving
export function getReceivingHeaders(state) {
    return state.receiving
}

//getters for invoices
export function getInvoiceHeaders(state) {
    return state.invoices
}

export function getEmpMgmntHeaders(state) {
    return state.employeeData
}


export function getUnhandledLeaveMgmntHeaders(state) {
    return state.unhandledLeaves
}

export function getHandledLeaveMgmntHeaders(state) {
    return state.handledLeaves
}

export function getSalMgmntHeaders(state) {
    return state.salaryTable
}


//getters for audit
export function getStockLevelAuditHeaders(state) {
    return state.stockLevelAudit
}

export function getInnerAuditHeaders(state) {
    return state.innerAuditTable
}

export function getRequisitionHeaders(state) {
    return state.requisition
}

export function getPurchaseAuditHeaders(state) {
    return state.purchaseAudit
}


export function getCashSaleHeaders(state) {
    return state.cashSales
}

export function getWasteMenuItemHeaders(state) {
    return state.wasteMenuItems
}

export function getWasteHistoryHeaders(state) {
    return state.wasteHistoryHeaders
}


