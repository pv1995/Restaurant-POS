<template>
    <div>
        <q-card class="my-card" flat bordered>
            <q-item>
                <q-item-section>
                    <q-item-label class="comfortaa">Customer Details</q-item-label>
                </q-item-section>
            </q-item>

            <q-separator />

            <q-card-section>
                <q-item class="no-padding lato">
                    <q-item-section top style="padding-top:2px">
                        <q-item-label>
                            Shubham Prasanna 
                            <span class="loyalty-points">
                                <q-img src="statics/loyaltypoints.jpeg" width="16px" height="16px"/>
                                <span class="text-caption text-dark" style="padding-left:4px">500 coins</span>
                            </span>
                        </q-item-label>
                        <div class="delivery-type">
                            <q-badge style="font-size:10px;background-color:#1976d3">Delivery</q-badge>
                        </div>
                    </q-item-section>

                    <q-item-section side top>
                        <div class="row">
                            <q-btn round flat icon="edit" size="xs"/>
                            <q-btn round flat icon="delete" size="xs"/>
                        </div>
                    </q-item-section>
                </q-item>
            </q-card-section>

            <q-separator />

            <q-card-section>
                <q-list>
                    <q-item v-for="item in cartItems" :key="item.name" class="no-padding cart-row lato">
                        <q-item-section>
                            <q-item-label>{{item.name}}</q-item-label>
                            <q-item-label caption v-if="item.customised" class="text-secondary">Customised</q-item-label>
                            <q-item-label caption v-else class="cursor-pointer">Customise</q-item-label>
                        </q-item-section>
                        <q-item-section>
                            <div class="row" style="width:75px;">
                                <div class="col-3">
                                    <q-btn outline color="primary" icon="remove" dense class="quantity-buttons" @click="reduceQuantity(item.id)"/>
                                </div>
                                <div class="col-6">
                                    <q-input readonly dense hide-bottom-space borderless v-model="item.quantity" :input-class="'text-center'" :input-style="'height:22px !important'"/>
                                </div>
                                <div class="col-3">
                                    <q-btn outline color="primary" icon="add" dense class="quantity-buttons" @click="increaseQuantity(item.id)"/>
                                </div>
                            </div>
                        </q-item-section>
                        <q-item-section class="text-center">
                            <q-item-label class="text-body1">₹{{item.price}}</q-item-label>
                            <q-item-label caption v-if="item.discountApplied" class="text-secondary caption-text">Discount Applied</q-item-label>
                            <q-item-label caption v-else class="text-accent text-caption cursor-pointer caption-text" @click="toggleItemDiscounts">Apply Discount</q-item-label>
                        </q-item-section>
                        <q-item-section side top>
                            <q-btn icon="clear" dense flat size="xs"></q-btn>
                        </q-item-section>
                    </q-item>
                </q-list>
                <div class="cart-comments">
                    <q-input
                    v-model="comments"
                    outlined
                    autogrow
                    label="Add comments for the order"
                    dense
                    class="lato"
                    />
                </div>
            </q-card-section>

            <q-separator />

            <q-card-section horizontal>
                <q-card-section class="col-10 lato">
                    <div class="text-subtitle2 text-primary">Total Discount</div>
                    <div class="text-caption text-accent caption-text cursor-pointer" @click="toggleCartDiscounts">Apply Discount</div>
                </q-card-section>
                <q-card-section class="col-2 text-right lato">
                    <div class="text-subtitle2 text-dark">₹{{cartDiscount}}</div>
                </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-section>
                <div class="text-body1 q-pb-sm lato">Bill Details</div>
                <q-list dense>
                    <q-item class="no-padding bill-item lato">
                        <q-item-section class="text-caption">
                            Item Total
                        </q-item-section>
                        <q-item-section side>
                            <div class="text-subtitle2 text-dark">₹{{cartTotal}}</div>
                        </q-item-section>
                    </q-item>

                    <q-item class="no-padding bill-item lato">
                        <q-item-section class="text-caption">
                        Restaurant Charges
                        </q-item-section>
                        <q-item-section side>
                            <div class="text-subtitle2 text-dark">₹{{restaurantCharges}}</div>
                        </q-item-section>
                    </q-item>

                    <q-item class="no-padding bill-item lato">
                        <q-item-section class="text-caption">
                        Delivery Charges
                        </q-item-section>
                        <q-item-section side>
                            <div class="text-subtitle2 text-accent caption-text cursor-pointer">Add Charges</div>
                        </q-item-section>
                    </q-item>
                    <q-item class="no-padding bill-item lato">
                        <q-item-section class="text-caption">
                        Taxes
                        </q-item-section>
                        <q-item-section side>
                            <div class="text-subtitle2 text-accent caption-text cursor-pointer" @click="toggleTaxModal">Add Taxes</div>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-card-section>

            <q-separator color="primary" />

            <q-card-section>
                <q-item class="no-padding lato" dense>
                    <q-item-section>
                        <q-item-label>Subtotal</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        ₹ 
                    </q-item-section>
                </q-item>
                <q-btn color="primary" label="Proceed To Payment" icon-right="chevron_right" class="full-width q-mt-sm lato" align="between" @click="goToPayment"/>
            </q-card-section>
        </q-card>
        <item-discounts :open="showItemDiscounts" @close="toggleItemDiscounts"/>
        <cart-discounts :open="showCartDiscounts" @close="toggleCartDiscounts" />
        <add-taxes :open="showTaxModal" @close="toggleTaxModal" :cartValue="cartTotal"/>
    </div>
</template>
<script>
import itemDiscounts from './itemDiscounts.vue';
import cartDiscounts from './cartDiscounts.vue';
import addTaxes from './addTaxes.vue';

export default {
    components: {
        "item-discounts": itemDiscounts,
        "cart-discounts": cartDiscounts,
        "add-taxes": addTaxes
    },
    data() {
        return {
            number: 1,
            comments: '',
            showItemDiscounts: false,
            showCartDiscounts: false,
            showTaxModal: false
        }
    },
    props: {
        cartItems: {
            type: Array,
            required: true
        },
        cartTotal: {
            type: Number,
            required: true
        },
        cartDiscount: {
            type: Number,
            required: true
        },
        restaurantCharges: {
            type: Number,
            required: true
        }
    },
    methods: {
        reduceQuantity(id) {
            this.$emit('reduce', id)
        },
        increaseQuantity(id) {
            this.$emit('increase', id);
        },
        toggleItemDiscounts() {
            this.showItemDiscounts = !this.showItemDiscounts
        },
        toggleCartDiscounts() {
            this.showCartDiscounts = !this.showCartDiscounts
        },
        toggleTaxModal() {
            this.showTaxModal = !this.showTaxModal
        },
        goToPayment() {
            this.$router.push('/payment')
        }
    }
}
</script>
<style lang="stylus" scoped>
.loyalty-points
    padding-left: 3px;

.quantity-buttons
    font-size: 8px;

.quantity-input
    height: 22px !important;

.cart-row
    padding-bottom: 1rem !important;

.cart-comments
    padding-top: 2rem;

.caption-text
    font-size: 10px;

.bill-item
    min-height: 25px;
</style>