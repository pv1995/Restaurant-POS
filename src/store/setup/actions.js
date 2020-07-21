/*
export function someAction (context) {
}
*/
import axios from 'axios';
import { Notify } from 'quasar';

let baseURL = 'https://mad-shark-tyson-marshal.herokuapp.com/api/v1'


//API calls for taxes
export function getAllTaxes({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/tax`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ALL_TAXES', res.data)
    })
}

export function getTax({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/tax/${encodeURI(payload)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        commit('SET_TAX', res.data)
    })
}

export function getAllTaxGroups({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/tax-group`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ALL_TAX_GROUPS', res.data)
    })
}

export function getTaxGroup({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/tax-group/${encodeURIComponent(payload)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        commit('SET_TAX_GROUP', res.data)
    })
}

export function addTax({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/tax`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name,
            percentage: payload.percentage
        }
    })
    .then(() => {
        dispatch('getAllTaxes')
        commit('resetTax');
        this.$router.push({
            name: 'taxes',
            params: {
                type: 'taxes'
            }
        })
        Notify.create({
            message: 'New Tax successfully created.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function updateTax({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/tax`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            name: payload.name,
            percentage: payload.percentage
        }
    })
    .then(() => {
        dispatch('getAllTaxes')
        commit('resetTax');
        this.$router.push({
            name: 'taxes',
            params: {
                type: 'taxes'
            }
        })
        Notify.create({
            message: 'Tax successfully updated.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function addTaxGroup({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/tax-group`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name,
            inclusiveProductPrice: payload.inclusiveProductPrice,
            taxIds: payload.taxIds
        }
    })
    .then(() => {
        dispatch('getAllTaxGroups');
        commit('resetTaxGroup')
        this.$router.push({
            name: 'taxes',
            params: {
                type: 'taxgroups'
            }
        })
        Notify.create({
            message: 'New Tax Group successfully created.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function updateTaxGroup({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/tax-group`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            name: payload.name,
            inclusiveProductPrice: payload.inclusiveProductPrice,
            taxIds: payload.taxIds
        }
    })
    .then(() => {
        dispatch('getAllTaxGroups');
        commit('resetTaxGroup')
        this.$router.push({
            name: 'taxes',
            params: {
                type: 'taxgroups'
            }
        })
        Notify.create({
            message: 'Tax Group successfully updated.',
            color: 'green',
            icon: 'check'
        })
    })
}


//API calls for add-ons

export function getAllAddOns({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/addon`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ALL_ADDONS', res.data)
    })
}

export function getAddOn({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/addon/${encodeURI(payload)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        commit('SET_ADDON', res.data)
    })
}

export function getAllAddOnGroups({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/addon-group`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ALL_ADDON_GROUPS', res.data)
    })
}

export function getAddOnGroup({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/addon-group/${encodeURI(payload)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        commit('SET_ADDON_GROUP', res.data)
    })
}

export function addAddOn({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/addon`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name,
            price: payload.price
        }
    })
    .then((res) => {
        dispatch('getAllAddOns')
        commit('resetAddOn')
        this.$router.push({
            name: 'menu-item-options',
            params: {
                type: 'addons'
            }
        })
        Notify.create({
            message: 'New Add-on successfully created.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function updateAddOn({dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/addon`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            name: payload.name,
            price: payload.price
        }
    })
    .then((res) => {
        dispatch('getAllAddOns')
        commit('resetAddOn')
        this.$router.push({
            name: 'menu-item-options',
            params: {
                type: 'addons'
            }
        })
        Notify.create({
            message: 'Add-on successfully updated.',
            color: 'green',
            icon: 'check'
        })
    })
}



export function addAddOnGroup({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/addon-group`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name,
            price: payload.price,
            minSelectable: payload.minSelectable,
            maxSelectable: payload.maxSelectable,
            addOnIds: payload.addons
        }
    })
    .then((res) => {
        dispatch('getAllAddOnGroups')
        commit('resetAddOnGroup');
        this.$router.push({
            name: 'menu-item-options',
            params: {
                type: 'addongroups'
            }
        })
        Notify.create({
            message: 'New Add-on Group successfully created.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function updateAddOnGroup({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/addon-group`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            name: payload.name,
            price: payload.price,
            minSelectable: payload.minSelectable,
            maxSelectable: payload.maxSelectable,
            addOnIds: payload.addons
        }
    })
    .then((res) => {
        dispatch('getAllAddOnGroups')
        commit('resetAddOnGroup');
        this.$router.push({
            name: 'menu-item-options',
            params: {
                type: 'addongroups'
            }
        })
        Notify.create({
            message: 'Add-on Group successfully updated.',
            color: 'green',
            icon: 'check'
        })
    })
}

//API calls for variants

export function getAllVariants({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/variant`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ALL_VARIANTS', res.data)
    })
}

export function getVariant({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/variant/${encodeURI(payload)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        commit('SET_VARIANT', res.data)
    })
}

export function getAllVariantGroups({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/variant-group`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ALL_VARIANT_GROUPS', res.data)
    })
}

export function getVariantGroup({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/variant-group/${encodeURI(payload)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_VARIANT_GROUP', res.data)
    })
}

export function addVariant({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/variant`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name,
            comment: payload.comment,
            priceRatio: payload.price
        }
    })
    .then(() => {
        dispatch('getAllVariants');
        commit('resetVariant');
        this.$router.push({
            name: 'menu-item-options',
            params: {
                type: 'variant'
            }
        })
        Notify.create({
            message: 'New Variant successfully created.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function updateVariant({dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/variant`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            name: payload.name,
            comment: payload.comment,
            price: payload.price
        }
    })
    .then(() => {
        dispatch('getAllVariants');
        commit('resetVariant');
        this.$router.push({
            name: 'menu-item-options',
            params: {
                type: 'variant'
            }
        })
        Notify.create({
            message: 'Variant successfully updated.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function addVariantGroup({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/variant-group`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name,
            variantIds: payload.variantIds
        }
    })
    .then(() => {
        dispatch('getAllVariantGroups');
        commit('resetVariantGroup')
        this.$router.push({
            name: 'menu-item-options',
            params: {
                type: 'variantgroups'
            }
        })
        Notify.create({
            message: 'New Variant Group successfully created.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function updateVariantGroup({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/variant-group`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            name: payload.name,
            variantIds: payload.variantIds
        }
    })
    .then(() => {
        dispatch('getAllVariantGroups');
        commit('resetVariantGroup');
        this.$router.push({
            name: 'menu-item-options',
            params: {
                type: 'variantgroups'
            }
        })
        Notify.create({
            message: 'Variant Group successfully updated.',
            color: 'green',
            icon: 'check'
        })
    })
}

//API calls for additional charges

export function getAllAdditionalCharges({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/additional-charge`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ALL_ADDITIONAL_CHARGES', res.data);
    })
}

export function getAdditionalCharge({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/additional-charge/${encodeURI(payload)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ADDITIONAL_CHARGE', res.data);
    })
}

export function addAdditionalCharge({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/additional-charge`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name,
            type: payload.type,
            value: payload.value,
            addedAutomatically: payload.addedAutomatically
        }
    })
    .then((res) => {
        dispatch('getAllAdditionalCharges')
        commit('resetAdditionalCharge')
        this.$router.push({
            name: 'additional-charges'
        })
        Notify.create({
            message: 'New Additional Charge successfully created.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function updateAdditionalCharge({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/additional-charge`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            name: payload.name,
            type: payload.type,
            value: payload.value,
            addedAutomatically: payload.addedAutomatically
        }
    })
    .then((res) => {
        dispatch('getAllAdditionalCharges')
        commit('resetAdditionalCharge')
        this.$router.push({
            name: 'additional-charges'
        })
        Notify.create({
            message: 'Additional Charge successfully updated.',
            color: 'green',
            icon: 'check'
        })
    })
}

//API calls for discount rules

export function getAllDiscountRules({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/discount-rule`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ALL_DISCOUNT_RULES', res.data);
    })
}

export function getDiscountRule({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/discount-rule/${encodeURI(payload)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        commit('SET_DISCOUNT_RULE', res.data);
    })
}

export function addDiscountRule({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/discount-rule`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            code: payload.code,
            type: payload.type,
            level: payload.level,
            discountAmount: payload.discountAmount,
            percentage: payload.percentage,
            limitAmount: payload.limitAmount,
            startDate: payload.startDate,
            endDate: payload.endDate
        }
    })
    .then(() => {
        dispatch('getAllDiscountRules');
        commit('resetDiscountRule')
        this.$router.push({
            name: 'discount-rules'
        })
        Notify.create({
            message: 'New Discount Rule successfully created.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function updateDiscountRule({dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/discount-rule`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            code: payload.code,
            type: payload.type,
            level: payload.level,
            discountAmount: payload.discountAmount,
            percentage: payload.percentage,
            limitAmount: payload.limitAmount,
            startDate: payload.startDate,
            endDate: payload.endDate
        }
    })
    .then(() => {
        dispatch('getAllDiscountRules');
        commit('resetDiscountRule')
        this.$router.push({
            name: 'discount-rules'
        })
        Notify.create({
            message: 'Discount Rule successfully updated.',
            color: 'green',
            icon: 'check'
        })
    })
}


//API calls for order ticket groups

export function getAllOrderTicketGroups({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/ticket-group`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res)
        commit('SET_ALL_TICKET_GROUPS', res.data)
    })
}

export function getTicketGroup({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/ticket-group/${encodeURIComponent(payload)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res)
        commit('SET_TICKET_GROUP', res.data)
    })
}

export function addTicketGroup({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/ticket-group`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name
        }
    })
    .then(() => {
        dispatch('getAllOrderTicketGroups')
        commit('resetTicketGroup');
        this.$router.push({
            name: 'menu-categories',
            params: {
                type: 'orderTicketGroups'
            }
        });
        Notify.create({
            message: 'New Ticket Group successfully created.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function updateTicketGroup({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/ticket-group`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            name: payload.name
        }
    })
    .then(() => {
        dispatch('getAllOrderTicketGroups')
        commit('resetTicketGroup');
        this.$router.push({
            name: 'menu-categories',
            params: {
                type: 'orderTicketGroups'
            }
        });
        Notify.create({
            message: 'Ticket Group successfully updated.',
            color: 'green',
            icon: 'check'
        })
    })
}

//API calls for custom fields
export function getCustomFields({commit}, payload) {
    console.log(payload);
    axios({
        method: 'GET',
        url: `${baseURL}/setup/custom-field?type=${payload.type}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res)
        if(payload.type === 'Tag') {
            commit('SET_ALL_TAGS', res.data)
        }
        else if(payload.type === 'Payment Type') {
            commit('SET_ALL_PAYMENT_TYPES', res.data)
        }
        else {
            commit('SET_ALL_ADDITIONAL_DETAILS', res.data)
        }
    })
}

export function getCustomField({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/custom-field?name=${encodeURI(payload.info)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        if(payload.type === 'paymentType') {
            commit('SET_PAYMENT_TYPE', res.data)
        }
        else if(payload.type === 'additionalDetail') {
            commit('SET_ADDITIONAL_DETAIL', res.data)
        }
        else if(payload.type === 'tag') {
            commit('SET_TAG', res.data)
        }
    })
}

export function addPaymentType({commit, dispatch}, payload) {
    console.log(payload)
    axios({
        method: 'POST',
        url: `${baseURL}/setup/custom-field`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.paymentName,
            description: payload.paymentDescription
        }
    })
    .then(() => {
        dispatch('getCustomFields', {
            type: 'Payment Type'
        })
        commit('resetPaymentType')
        this.$router.push({
            name: 'custom-fields',
            params: {
                type: 'payment-type'
            }
        })
        Notify.create({
            message: 'New Payment Type successfully created.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function updatePaymentType({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/custom-field`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            name: payload.paymentName,
            description: payload.paymentDescription
        }
    })
    .then(() => {
        dispatch('getCustomFields', {
            type: 'Payment Type'
        })
        commit('resetPaymentType')
        this.$router.push({
            name: 'custom-fields',
            params: {
                type: 'payment-type'
            }
        })
        Notify.create({
            message: 'Payment Type successfully updated.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function addAdditionalDetail({dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/custom-field`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name,
            additionalDetailType: payload.additionalDetailType,
            toBePrinted: payload.toBePrinted,
            type: payload.type
        }
    })
    .then(() => {
        dispatch('getCustomFields', {
            type: 'Additional Detail'
        })
        commit('resetAdditionalDetail')
        this.$router.push({
            name: 'custom-fields',
            params: {
                type: 'additional-details'
            }
        })
        Notify.create({
            message: 'New Additional Detail successfully created.',
            color: 'green',
            icon: 'check'
        })
    })
}


export function updateAdditionalDetail({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/custom-field`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            name: payload.name,
            additionalDetailType: payload.additionalDetailType,
            toBePrinted: payload.toBePrinted,
            type: payload.type
        }
    })
    .then(() => {
        dispatch('getCustomFields', {
            type: 'Additional Detail'
        })
        commit('resetAdditionalDetail')
        this.$router.push({
            name: 'custom-fields',
            params: {
                type: 'additional-details'
            }
        })
        Notify.create({
            message: 'Additional Detail successfully updated.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function addTag({dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/custom-field`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name,
            additionalDetailType: payload.additionalDetailType,
            tagColor: payload.tagColor,
            toBePrinted: payload.toBePrinted,
            type: payload.type
        }
    })
    .then(() => {
        dispatch('getCustomFields', {
            type: 'Tag'
        })
        commit('resetTag');
        this.$router.push({
            name: 'custom-fields',
            params: {
                type: 'tags'
            }
        })
        Notify.create({
            message: 'New Tag successfully created.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function updateTag({dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/custom-field`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            name: payload.name,
            additionalDetailType: payload.additionalDetailType,
            tagColor: payload.tagColor,
            toBePrinted: payload.toBePrinted,
            type: payload.type
        }
    })
    .then(() => {
        dispatch('getCustomFields', {
            type: 'Tag'
        })
        commit('resetTag');
        this.$router.push({
            name: 'custom-fields',
            params: {
                type: 'tags'
            }
        })
        Notify.create({
            message: 'Tag successfully updated.',
            color: 'green',
            icon: 'check'
        })
    })
}

//API calls for Registers

export function getAllRegisters({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/register`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ALL_REGISTERS', res.data)
    })
}

export function getRegister({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/register/${encodeURI(payload)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_REGISTER', res.data)
    })
}


export function addRegister({dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/register`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name,
            receiptNumberPrefix: payload.receiptNumberPrefix,
            billHeader: payload.billHeader,
            billFooter: payload.billFooter,
            printerType: payload.printerType
        }
    })
    .then(() => {
        dispatch('getAllRegisters')
        this.$router.push({
            name: 'regsiters'
        })
        Notify.create({
            message: 'New Register successfully created.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function updateRegister({dispatch}, payload) {
    axios({ 
        method: 'POST',
        url: `${baseURL}/setup/register`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            name: payload.name,
            receiptNumberPrefix: payload.receiptNumberPrefix,
            billHeader: payload.billHeader,
            billFooter: payload.billFooter,
            printerType: payload.printerType
        }
    })
    .then(() => {
        dispatch('getAllRegisters')
        this.$router.push({
            name: 'regsiters'
        })
        Notify.create({
            message: 'Register successfully updated.',
            color: 'green',
            icon: 'check'
        })
    })
}


//API calls for Tables
export function getAllTables({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/dine-in-table`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ALL_TABLES', res.data)
    })
}

export function getDineInTable({commit}, payload) {
    console.log(payload)
    axios({
        method: 'GET',
        url: `${baseURL}/setup/dine-in-table/${payload}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        commit('SET_TABLE', res.data)
    })
}

export function addTable({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/dine-in-table`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            capacity: payload.capacity
        }
    })
    .then((res) => {
        commit('resetTables');
        dispatch('getAllTables');
        this.$router.push({
            name: 'dine-in-tables'
        })
        Notify.create({
            message: 'New Dine-in Table successfully created.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function updateTable({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/dine-in-table`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            capacity: payload.capacity
        }
    })
    .then((res) => {
        commit('resetTables');
        dispatch('getAllTables');
        this.$router.push({
            name: 'dine-in-tables'
        })
        Notify.create({
            message: 'Dine-in Table successfully updated.',
            color: 'green',
            icon: 'check'
        })
    })
}

//API calls for shifts
export function getAllShifts({commit}) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/shift`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_ALL_SHIFTS', res.data)
    })
}

export function getShift({commit}, payload) {
    axios({
        method: 'GET',
        url: `${baseURL}/setup/shift/${encodeURI(payload)}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        commit('SET_SHIFT', res.data)
    })
}

export function saveShift({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/shift`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            name: payload.name,
            duration: payload.duration,
            timeFrom: payload.timeFrom
        }
    })
    .then((res) => {
        dispatch('getAllShifts');
        commit('resetShift')
        this.$router.push({
            name: 'shift-setup'
        })
        Notify.create({
            message: 'New Shift successfully created.',
            color: 'green',
            icon: 'check'
        })
    })
}

export function updateShift({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: `${baseURL}/setup/shift`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        },
        data: {
            id: payload.id,
            name: payload.name,
            duration: payload.duration,
            timeFrom: payload.timeFrom
        }
    })
    .then((res) => {
        dispatch('getAllShifts');
        commit('resetShift')
        this.$router.push({
            name: 'shift-setup'
        })
        Notify.create({
            message: 'Shift successfully updated.',
            color: 'green',
            icon: 'check'
        })
    })
}

//API call for all DELETE
export function deleteItem({commit, rootState}, payload) {
    axios({
        method: 'DELETE',
        url: `${baseURL}/setup/${payload.type}/${payload.id}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ut')}`
        }
    })
    .then((res) => {
        console.log(res);
        if(payload.type === 'register') {
            commit('DELETE_REGISTER', payload.id)
        }
        else if(payload.type === 'menu-category') {
            commit('DELETE_MENU_CATEGORY', {
                id: payload.id,
                state: rootState
            })
        }
        else if(payload.type === 'ticket-group') {
            commit('DELETE_TICKET_GROUP', payload.id)
        }
        else if(payload.type === 'addon') {
            commit('DELETE_ADDON', payload.id)
        }
        else if(payload.type === 'addon-group') {
            commit('DELETE_ADDON_GROUP', payload.id)
        }
        else if(payload.type === 'variant') {
            commit('DELETE_VARIANT', payload.id)
        }
        else if(payload.type === 'variant-group') {
            commit('DELETE_VARIANT_GROUP', payload.id)
        }
        else if(payload.type === 'tax') {
            commit('DELETE_TAX', payload.id)
        }
        else if(payload.type === 'tax-group') {
            commit('DELETE_TAX_GROUP', payload.id)
        }
        else if(payload.type === 'discount-rule') {
            commit('DELETE_DISCOUNT_RULE', payload.id)
        }
        else if(payload.type === 'additional-charge') {
            commit('DELETE_ADDITIONAL_CHARGE', payload.id)
        }
        else if(payload.type === 'dine-in-table') {
            commit('DELETE_DINEIN_TABLE', payload.id)
        }
        else if(payload.type === 'custom-field') {
            if(payload.customFieldType === 'payment-type') {
                commit('DELETE_PAYMENT_TYPE', payload.id)
            }
            else if(payload.customFieldType === 'additional-detail') {
                commit('DELETE_ADDITIONAL_DETAIL', payload.id)
            }
            else {
                commit('DELETE_TAG', payload.id)
            }
        }
    })
}
