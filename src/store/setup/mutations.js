/*
export function someMutation (state) {
}
*/

//mutations for taxes
export function SET_ALL_TAXES(state, payload) {
    state.taxes = payload
}

export function SET_TAX(state, payload) {
    state.tax = payload
}

export function editTax(state, payload) {
    if(payload.type === 'name') {
        state.tax = {...state.tax, name: payload.info}
    }
    else if(payload.type === 'percentage') {
        state.tax = {...state.tax, percentage: payload.info}
    }
}

export function resetTax(state) {
    state.tax = {}
}

export function SET_ALL_TAX_GROUPS(state, payload) {
    state.taxGroups = payload;
}

export function SET_TAX_GROUP(state, payload) {
    state.taxGroup = payload;
}

export function editTaxGroup(state, payload) {
    if(payload.type === 'name') {
        state.taxGroup = {...state.taxGroup, name: payload.info}
    }
    else if(payload.type === 'inclusiveProductPrice') {
        state.taxGroup = {...state.taxGroup, inclusiveProductPrice: payload.info}
    }
    else if(payload.type === 'taxIds') {
        state.taxGroup = {...state.taxGroup, taxIds: payload.info}
        console.log(state.taxGroup)
    }
}

export function resetTaxGroup(state) {
    state.taxGroup = {}
}


//mutations for addons
export function SET_ALL_ADDONS(state, payload) {
    state.addOns = payload;
}

export function SET_ADDON(state, payload) {
    state.addon = payload;
}

export function editAddOn(state, payload) {
    if(payload.type === 'name') {
        state.addon = {...state.addon, name: payload.info}
    }
    else if(payload.type === 'price') {
        state.addon = {...state.addon, price: payload.info}
    }
}

export function resetAddOn(state) {
    state.addon = {}
}

export function SET_ALL_ADDON_GROUPS(state, payload) {
    state.addOnGroups = payload;
}

export function SET_ADDON_GROUP(state, payload) {
    state.addOnGroup = payload
}

export function editAddOnGroup(state, payload) {
    if(payload.type === 'name') {
        state.addOnGroup = {...state.addOnGroup, name: payload.info}
    }
    else if(payload.type === 'minSelectable') {
        state.addOnGroup = {...state.addOnGroup, minSelectable: payload.info}
    }
    else if(payload.type === 'maxSelectable') {
        state.addOnGroup = {...state.addOnGroup, maxSelectable: payload.info}
    }
    else if(payload.type === 'addOnIds') {
        console.log(payload.info)
        state.addOnGroup = {...state.addOnGroup, addOnIds: payload.info}
    }
}

export function resetAddOnGroup(state) {
    state.addOnGroup = {}
}


//mutations for variants
export function SET_ALL_VARIANTS(state, payload) {
    state.variants = payload
}

export function SET_VARIANT(state, payload) {
    state.variant = payload
}

export function editVariant(state, payload) {
    if(payload.type === 'name') {
        state.variant = {...state.variant, name: payload.info}
    }
    else if(payload.type === 'price') {
        state.variant = {...state.variant, priceRatio: payload.info}
    }
    else if(payload.type === 'description') {
        state.variant = {...state.variant, comment: payload.info}
    }
}

export function resetVariant(state) {
    state.variant = {};
}

export function SET_ALL_VARIANT_GROUPS(state, payload) {
    state.variantGroups = payload
}

export function SET_VARIANT_GROUP(state, payload) {
    state.variantGroup = payload
}

export function editVariantGroup(state, payload) {
    if(payload.type === 'name') {
        state.variantGroup = {...state.variantGroup, name: payload.info}
    }
    else if(payload.type === 'comment') {
        state.variantGroup = {...state.variantGroup, comment: payload.info}
    }
    else if(payload.type === 'variantIds') {
        state.variantGroup = {...state.variantGroup, variantIds: payload.info}
    }
}

export function resetVariantGroup(state) {
    state.variantGroup = {}
}

//mutations for additional charges
export function SET_ALL_ADDITIONAL_CHARGES(state, payload) {
    state.additionalCharges = payload
}

export function SET_ADDITIONAL_CHARGE(state, payload) {
    state.additionalCharge = payload
}

export function editAdditionalCharge(state, payload) {
    if(payload.type === 'name') {
        state.additionalCharge = {...state.additionalCharge, name: payload.info}
    }
    else if(payload.type === 'type') {
        state.additionalCharge = {...state.additionalCharge, type: payload.info}
    }
    else if(payload.type === 'value') {
        state.additionalCharge = {...state.additionalCharge, value: payload.info}
    }
    else if(payload.type === 'addedAutomatically') {
        state.additionalCharge = {...state.additionalCharge, addedAutomatically: payload.info}
    }
}

export function resetAdditionalCharge(state) {
    state.additionalCharge = {}
}

//mutations for discount rules
export function SET_ALL_DISCOUNT_RULES(state, payload) {
    state.discountRules = payload
} 

export function SET_DISCOUNT_RULE(state, payload) {
    state.discountRule = payload
}

export function editDiscountRule(state, payload) {
    if(payload.type === 'code') {
        state.discountRule = {...state.discountRule, code: payload.info}
    }
    else if(payload.type === 'level') {
        state.discountRule = {...state.discountRule, level: payload.info}
    }
    else if(payload.type === 'type') {
        state.discountRule = {...state.discountRule, type: payload.info}
    }
    else if(payload.type === 'discountAmount') {
        state.discountRule = {...state.discountRule, discountAmount: payload.info}
    }
    else if(payload.type === 'startDate') {
        state.discountRule = {...state.discountRule, startDate: payload.info}
    }
    else if(payload.type === 'endDate') {
        state.discountRule = {...state.discountRule, endDate: payload.info}
    }
    else if(payload.type === 'happyHourFromTime') {
        state.discountRule = {...state.discountRule, happyHourFromTime: payload.info}
    }
    else if(payload.type === 'happyHourToTime') {
        state.discountRule = {...state.discountRule, happyHourToTime: payload.info}
    }
    else if(payload.type === 'percentage') {
        state.discountRule = {...state.discountRule, percentage: payload.info}
    }
    else if(payload.type === 'limitAmount') {
        state.discountRule = {...state.discountRule, limitAmount: payload.info}
    }
}

export function resetDiscountRule(state) {
    state.discountRule = {}
}

//mutations for order ticket groups
export function SET_ALL_TICKET_GROUPS(state, payload) {
    state.orderTicketGroups = payload
}

export function SET_TICKET_GROUP(state, payload) {
    state.ticketGroup = payload
}

export function editTicketGroup(state, payload) {
    if(payload.type === 'name') {
        state.ticketGroup = {...state.ticketGroup, name: payload.info}
    }
}

export function resetTicketGroup(state) {
    state.ticketGroup = {}
}

export function DELETE_TICKET_GROUP(state, payload) {
    state.orderTicketGroups = state.orderTicketGroups.filter(tktgrp => {
        if(tktgrp.id !== payload) {
            return tktgrp
        }
    })
}

//mutations for custom fields
export function SET_ALL_TAGS(state, payload) {
    state.tags = payload;
}

export function SET_TAG(state, payload) {
    state.tag = payload
}

export function editTag(state, payload) {
    if(payload.type === 'name') {
        state.tag = {...state.tag, name: payload.info}
    }
    else if(payload.type === 'tagType') {
        state.tag = {...state.tag, additionalDetailType: payload.info}
    }
    else if(payload.type === 'tagColor') {
        state.tag = {...state.tag, tagColor: payload.info}
    }
    else if(payload.type === 'toBePrinted') {
        state.tag = {...state.tag, toBePrinted: payload.info}
    }
}

export function resetTag(state) {
    state.tag = {}
}

export function SET_ALL_PAYMENT_TYPES(state, payload) {
    state.paymentTypes = payload
}

export function SET_PAYMENT_TYPE(state, payload) {
    state.paymentType = payload
}

export function editPaymentType(state, payload) {
    if(payload.type === 'name') {
        state.paymentType = {...state.paymentType, name: payload.info}
    }
    else if(payload.type === 'description') {
        state.paymentType = {...state.paymentType, description: payload.info}
    }
}

export function resetPaymentType(state) {
    state.paymentType = {}
}

export function SET_ALL_ADDITIONAL_DETAILS(state, payload) {
    state.additionalDetails = payload
}

export function SET_ADDITIONAL_DETAIL(state, payload) {
    state.additionalDetail = payload
}

export function editAdditionalDetail(state, payload) {
    if(payload.type === 'name') {
        state.additionalDetail = {...state.additionalDetail, name: payload.info}
    }
    else if(payload.type === 'additionalDetailType') {
        state.additionalDetail = {...state.additionalDetail, additionalDetailType: payload.info}
    }
    else if(payload.type === 'toBePrinted') {
        state.additionalDetail = {...state.additionalDetail, toBePrinted: payload.info}
    }
}

export function resetAdditionalDetail(state) {
    state.additionalDetail = {}
}

//mutations for registers
export function SET_ALL_REGISTERS(state, payload) {
    state.registers = payload
}

export function SET_REGISTER(state, payload) {
    state.register = payload
}

export function editRegister(state, payload) {
    if(payload.type === 'name') {
        state.register = {...state.register, name: payload.info}
    }
    else if(payload.type === 'receiptNumberPrefix') {
        state.register = {...state.register, receiptNumberPrefix: payload.info}
    }
    else if(payload.type === 'billHeader') {
        state.register = {...state.register, billHeader: payload.info}
    }
    else if(payload.type === 'billFooter') {
        state.register = {...state.register, billFooter: payload.info}
    }
    else if(payload.type === 'printerType') {
        state.register = {...state.register, printerType: payload.info}
    }
}

export function resetRegisterValues(state) {
    state.register = {}   
}

//mutations for tables (dine-in)
export function SET_ALL_TABLES(state, payload) {
    state.tables = payload
}

export function SET_TABLE(state, payload) {
    state.dineInTable = payload[0]
}

export function editDineInTable(state, payload) {
    if(payload.type === 'number') {
        state.dineInTable = {...state.dineInTable, number: payload.info}
    }
    else {
        state.dineInTable = {...state.dineInTable, capacity: payload.info}
    }
}

export function resetTables(state) {
    state.dineInTable = {}
}

//mutations for shifts
export function SET_ALL_SHIFTS(state, payload) {
    state.shifts = payload
}

export function SET_SHIFT(state, payload) {
    state.shift = payload
}

export function editShift(state, payload) {
    if(payload.type === 'name') {
        state.shift = {...state.shift, name: payload.info}
    }
    else if(payload.type === 'duration') {
        state.shift = {...state.shift, duration: payload.info}
    }
    else if(payload.type === 'timeFrom') {
        state.shift = {...state.shift, timeFrom: payload.info}
    }
}

export function resetShift(state, payload) {
    state.shift = {}
}

//muatations for all deletes
export function DELETE_REGISTER(state, payload) {
    state.registers = state.registers.filter(reg => {
        if(reg.id !== payload) {
            return reg
        }
    })
}

export function DELETE_MENU_CATEGORY(state, payload) {
    payload.state.menu.menuCategories = payload.state.menu.menuCategories.filter(cat => {
        if(cat.id !== payload.id) {
            return cat
        }
    })
}

export function DELETE_ADDON(state, payload) {
    state.addOns = state.addOns.filter(addon => {
        if(addon.id !== payload) {
            return addon
        }
    })
}

export function DELETE_ADDON_GROUP(state, payload) {
    state.addOnGroups = state.addOnGroups.filter(grp => {
        if(grp.id !== payload) {
            return grp
        }
    })
}

export function DELETE_VARIANT(state, payload) {
    state.variants = state.variants.filter(variant => {
        if(variant.id !== payload) {
            return variant
        }
    })
}

export function DELETE_VARIANT_GROUP(state, payload) {
    state.variantGroups = state.variantGroups.filter(grp => {
        if(grp.id !== payload) {
            return grp
        }
    })
}

export function DELETE_TAX(state, payload) {
    state.taxes = state.taxes.filter(tax => {
        if(tax.id !== payload) {
            return tax
        }
    })
}

export function DELETE_TAX_GROUP(state, payload) {
    state.taxGroups = state.taxGroups.filter(grp => {
        if(grp.id !== payload) {
            return grp
        }
    })
}

export function DELETE_DISCOUNT_RULE(state, payload) {
    state.discountRules = state.discountRules.filter(rule => {
        if(rule.id !== payload) {
            return rule
        }
    })
}

export function DELETE_ADDITIONAL_CHARGE(state, payload) {
    state.additionalCharges = state.additionalCharges.filter(charge => {
        if(charge.id !== payload) {
            return charge
        }
    })
}

export function DELETE_DINEIN_TABLE(state, payload) {
    state.tables = state.tables.filter(table => {
        if(table.id !== payload) {
            return table
        }
    })
}

export function DELETE_PAYMENT_TYPE(state, payload) {
    state.paymentTypes = state.paymentTypes.filter(type => {
        if(type.id !== payload) {
            return type
        }
    })
}

export function DELETE_ADDITIONAL_DETAIL(state, payload) {
    state.additionalDetails = state.additionalDetails.filter(detail => {
        if(detail.id !== payload) {
            return detail
        }
    })
}

export function DELETE_TAG(state, payload) {
    state.tags = state.tags.filter(tag => {
        if(tag.id !== payload) {
            return tag
        }
    })
}

