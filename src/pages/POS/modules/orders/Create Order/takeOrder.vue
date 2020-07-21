<template>
    <q-page>
        <div class="q-pa-lg">
            <div class="row">
                <div class="col-8">
                    <div class="search-section q-py-xl">
                        <q-input outlined v-model="searchValue" dense placeholder="Search Menu Items">
                            <template v-slot:append>
                                <q-icon name="search" />
                            </template>
                        </q-input>
                    </div>
                    <menuPage />
                </div>
                <div class="col-4">
                    <div class="q-mt-xl q-px-lg">
                        <cart :cartItems="cartItems" @increase="addQuantity" @reduce="subQuantity" :cartTotal="cartTotal" :cartDiscount="cartDiscount" :restaurantCharges="restaurantCharges"/>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>
<script>

import menuPage from 'src/components/menu.vue'
import cart from 'src/components/cart.vue'

export default {
    components: {
        menuPage,
        cart
    },
    data() {
        return {
            searchValue: '',
            cartItems: [
                {
                    id: 1,
                    name: 'Afghani Rumali Roti',
                    quantity: 1,
                    price: 50,
                    discountApplied: false
                },
                {
                    id: 1,
                    name: 'Dal Makhani',
                    quantity: 1,
                    price: 120,
                    discountApplied: true
                },
                {
                    id: 1,
                    name: 'Garlic Naan',
                    quantity: 1,
                    price: 35,
                    discountApplied: false
                },
                {
                    id: 1,
                    name: 'Kadhai Chicken',
                    quantity: 1,
                    price: 180,
                    discountApplied: true
                }
            ],
            cartTotal: 385,
            cartDiscount: 50,
            restaurantCharges: 30
        }
    },
    methods: {
        addQuantity(val) {
            
        },
        subQuantity(val) {
            
        }
    }
}
</script>
<style lang="stylus" scoped>
.search-section
    width: 700px;
    margin: 0 auto
</style>