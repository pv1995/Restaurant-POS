<template>
    <q-page>
        <q-toolbar>
            <q-btn color="accent" icon="keyboard_backspace" flat round class="q-mr-sm" @click="goToTakeOrder"/>
            <q-toolbar-title class="no-padding text-h6 text-dark new-order-title">Payment</q-toolbar-title>
        </q-toolbar>

        <q-separator />
        <div class="q-pa-lg">
            <div class="row">
                <div class="col-5 q-pa-lg q-px-xl">
                    <div class="delivery-information">
                        <div class="text-subtitle1 text-dark q-mb-lg">Delivery Information</div>
                        <div class="q-mb-md">
                            <div class="text-subtitle2 text-dark text-uppercase">Delivery Address</div>
                            <div class="text-subtitle1 text-dark">1115, Mahaveer Maple</div>
                        </div>
                        <div class="q-mb-md">
                            <div class="text-subtitle2 text-dark text-uppercase">Delivery Type</div>
                            <div class="q-my-sm">
                                <q-btn-toggle
                                    v-model="deliveryType"
                                    toggle-color="primary"
                                    :options="deliveryTypes"
                                    spread
                                />
                            </div>
                        </div>
                        <div class="q-mb-xl">
                            <div class="text-subtitle2 text-dark text-uppercase">Delivery Time</div>
                            <div class="q-my-sm">
                                <q-btn-toggle
                                    v-model="deliveryTime"
                                    toggle-color="primary"
                                    :options="deliveryTimes"
                                    
                                />
                                <q-input class="q-mt-md" label="Enter time in mins" outlined dense v-model="customTime" v-if="deliveryTime==='enter'" style="width:50%"/>
                            </div>
                        </div>
                        <div class="q-mb-md">
                            <div class="text-subtitle2 text-dark text-uppercase">Delivery Partner</div>
                            <div class="q-my-sm">
                                <q-btn-toggle
                                    v-model="deliveryPartner"
                                    toggle-color="primary"
                                    :options="getDeliveryPartners1"
                                    spread
                                />
                            </div>
                            <div class="q-my-sm">
                                <q-btn-toggle
                                    v-model="deliveryPartner"
                                    toggle-color="primary"
                                    :options="getDeliveryPartners2"
                                    spread
                                />
                            </div>
                        </div>
                        <div class="q-mb-md" v-if="deliveryPartner === 'self'">
                            <div class="text-subtitle2 text-dark text-uppercase">Delivery Person</div>
                            <div class="q-my-sm">
                                <q-btn-toggle
                                    v-model="deliveryPerson"
                                    toggle-color="primary"
                                    :options="deliveryPersons"
                                    spread
                                />
                            </div>
                        </div>
                        <div class="q-mb-md">
                            <div class="text-subtitle2 text-dark text-uppercase">Order Source</div>
                            <div class="q-my-sm">
                                <q-btn-toggle
                                    v-model="orderSource"
                                    toggle-color="primary"
                                    :options="orderSources"
                                    spread
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 q-pa-lg q-px-sm">
                    <div class="order-information">
                        <div class="text-subtitle1 text-dark q-mb-lg q-pl-sm">Order Information</div>
                        <q-checkbox v-model="orderPaid" label="Mark Order Paid" />
                        <div class="q-my-md">
                            <div class="text-subtitle2 text-dark text-uppercase">Payment Type</div>
                            <div class="q-my-sm">
                                <q-btn-toggle
                                    v-model="paymentType"
                                    toggle-color="primary"
                                    :options="getPaymentType1"
                                    spread
                                />
                            </div>
                            <div class="q-my-sm">
                                <q-btn-toggle
                                    v-model="paymentType"
                                    toggle-color="primary"
                                    :options="getPaymentType2"
                                    spread
                                />
                            </div>
                        </div>
                        <div class="q-my-sm">
                            <div class="text-subtitle2 text-dark text-uppercase q-mb-md">Remarks</div>
                            <q-input outlined dense label="Enter Remarks" />
                        </div>
                    </div>
                </div>
                
                <div class="col-4 q-pa-lg">
                    <cart :cartItems="cartItems" @increase="addQuantity" @reduce="subQuantity" :cartTotal="cartTotal" :cartDiscount="cartDiscount" :restaurantCharges="restaurantCharges" />
                </div>
            </div>
        </div>
    </q-page>
</template>
<script>
import cart from 'src/components/cart.vue';

export default {
    components: {
        cart
    },
    computed: {
        getDeliveryPartners1() {
            return this.deliveryPartners.filter((p,i) => {
                if(i <3) {
                    return p
                }
            })
        },
        getDeliveryPartners2() {
            return this.deliveryPartners.filter((p, i) => {
                if(i>=3 && i<6) {
                    return p
                }
            })
        },
        getPaymentType1() {
            return this.paymentTypes.filter((p, i) => {
                if(i < 3) {
                    return p
                }
            })
        },
        getPaymentType2() {
            return this.paymentTypes.filter((p, i) => {
                if(i>=3 && i<6) {
                    return p
                }
            })
        }
    },
    data() {
        return {
            deliveryTypes: [
                {
                    label: 'Immediate',
                    value: 'immediate'
                },
                {
                    label: 'Future',
                    value: 'future'
                }
            ],
            deliveryType: 'immediate',
            deliveryTimes: [
                {
                    label: '30m',
                    value: '30'
                },
                {
                    label: '45m',
                    value: '45'
                },
                {
                    label: '60m',
                    value: '60'
                },
                {
                    label: 'Enter time in mins',
                    value: 'enter'
                }
            ],
            deliveryTime: '30',
            customTime: '',
            deliveryPartner: '',
            deliveryPartners: [
                {
                    label: 'Grab',
                    value: 'grab'
                },
                {
                    label: 'Delhivery',
                    value: 'delhivery'
                },
                {
                    label: 'Pickingo',
                    value: 'pickingo'
                },
                {
                    label: 'Dunzo',
                    value: 'dunzo'
                },
                {
                    label: 'Roadrunnr',
                    value: 'roadrunnr'
                },
                {
                    label: 'Self-Delivery',
                    value: 'self'
                }
            ],
            deliveryPersons: [
                {
                    label: 'Delivery Person 1',
                    value: 'boy1'
                },
                {
                    label: 'Delivery Person 2',
                    value: 'boy2'
                }
            ],
            deliveryPerson: '',
            orderSources: [
                {
                    label: 'Swiggy',
                    value: 'swiggy'
                },
                {
                    label: 'Zomato',
                    value: 'zomato'
                },
                {
                    label: 'Uber Eats',
                    value: 'ubereats'
                },
                {
                    label: 'Others',
                    value: 'others'
                }
            ],
            orderSource: '',
            orderPaid: false,
            paymentTypes: [
                {
                    label: 'Card',
                    value: 'card'
                },
                {
                    label: 'Cash',
                    value: 'cash'
                },
                {
                    label: 'Mobikwik',
                    value: 'mobikwik'
                },
                {
                    label: 'Paytm',
                    value: 'paytm'
                },
                {
                    label: 'PhonePe',
                    value: 'phonepe'
                },
                {
                    label: 'Google Pay',
                    value: 'gpay'
                }
            ],
            paymentType: ''
        }
    },
    methods: {
        goToTakeOrder() {
            this.$router.push('/takeorder')
        }
    }
}
</script>
<style lang="stylus">

</style>