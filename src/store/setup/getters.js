/*
export function someGetter (state) {
}
*/
//getters for registers

export function getAllRegisters(state) {
    return state.registers
}

export function getRegister(state) {
    return state.register
}


//getters for taxes
export function getAllTaxes(state) {
    return state.taxes
}

export function getTax(state) {
    return state.tax
}

export function getAllTaxGroups(state) {
    return state.taxGroups
}

export function getTaxGroup(state) {
    return state.taxGroup
}

//getters for addons
export function getAllAddOns(state) {
    return state.addOns
}

export function getAddOn(state) {
    return state.addon
}

export function getAllAddOnGroups(state) {
    return state.addOnGroups
}

export function getAddOnGroup(state) {
    return state.addOnGroup
}

//getters for variants
export function getAllVariants(state) {
    return state.variants
}

export function getVariant(state) {
    return state.variant
}

export function getAllVariantGroups(state) {
    return state.variantGroups
}

export function getVariantGroup(state) {
    return state.variantGroup
}

//getters for discount rules
export function getAllDiscountRules(state) {
    return state.discountRules
}

export function getDiscountRule(state) {
    return state.discountRule
}


//getters for additional charges
export function getAllAdditionalCharges(state) {
    return state.additionalCharges
}

export function getAdditionalCharge(state) {
    return state.additionalCharge
}


//getters for custom fields
export function getAllPaymentTypes(state) {
    return state.paymentTypes
}

export function getPaymentType(state) {
    return state.paymentType
}

export function getAllAdditionalDetails(state) {
    return state.additionalDetails
}

export function getAdditionalDetail(state) {
    return state.additionalDetail
}

export function getAllTags(state) {
    return state.tags
}

export function getTag(state) {
    return state.tag
}


//getters for order ticket groups
export function getAllOrderTicketGroups(state) {
    return state.orderTicketGroups
}

export function getTicketGroup(state) {
    return state.ticketGroup
}

//getters for tables
export function getAllTables(state) {
    return state.tables
}

export function getDineInTable(state) {
    return state.dineInTable
}

//getters for shifts
export function getAllShiftDetails(state) {
    return state.shifts
}

export function getShift(state) {
    return state.shift
}