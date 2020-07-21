<template>
    <div>
        <q-dialog v-model="open" persistent>
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-avatar>
                        <q-icon name="local_offer" style="width:40%" color="accent"/>
                    </q-avatar>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">Cart Discounts</q-toolbar-title>

                    <q-btn flat round dense icon="close" @click="closeModal" />
                </q-toolbar>

                <q-separator />
                
                <q-card-section horizontal>
                    <q-card-section class="col-8">
                        <div class="text-subtitle1 text-dark q-pb-sm lato">Discount Type</div>
                        <q-tabs
                            v-model="tab"
                            align="left"
                            class="q-mb-lg lato"
                            active-bg-color="primary"
                            active-color="white"
                            no-caps
                            dense
                            style="width:75%"
                        >
                        
                            <q-tab class="" :class="{'bg-grey-3 text-dark': (tab != 'loyalty')}" name="loyalty" label="Loyalty" />
                            <q-tab class="q-mx-sm" :class="{'bg-grey-3 text-dark': (tab != 'oncart')}" name="oncart" label="On Cart" />
                            <q-tab class="" :class="{'bg-grey-3 text-dark': (tab != 'offers')}" name="offers" label="Offers" />
                        </q-tabs>
                        <div class="q-gutter-y-sm">
                            <q-tab-panels
                                v-model="tab"
                                animated
                                transition-prev="scale"
                                transition-next="scale"
                                class="lato"
                            >
                                <q-tab-panel name="loyalty" class="no-padding">
                                    <div class="text-subtitle2 text-dark q-mb-sm">Customer Details</div>
                                    <q-item class="no-padding" style="width:75%">
                                        <q-item-section class="col-5">
                                            <q-item-label class="text-dark text-subtitle2">Shubham</q-item-label>
                                            <q-item-label caption class="text-dark">9787083812</q-item-label>
                                        </q-item-section>
                                        <q-item-section class="text-left col-5">
                                            <q-item-label class="flex items-center justify-start">
                                                <q-img src="statics/loyaltypoints.jpeg" width="15px" height="15px" class="q-mr-sm"/>
                                                Silver
                                            </q-item-label>
                                            <q-item-label class="text-subtitle2">500 Coins</q-item-label>
                                            <q-item-label caption>1 coin = ₹0.01</q-item-label>
                                        </q-item-section>
                                        <q-item-section side top class="col-2 text-left">
                                            <q-btn flat round color="grey" icon="edit" size="xs"/>
                                        </q-item-section>
                                    </q-item>
                                    <div class="text-subtitle2 text-dark q-mt-lg q-mb-sm">Mobile Number (A 4-digit verification code will be sent to customer's number)</div>
                                    <q-item class="no-padding" style="width:75%">
                                        <q-item-section class="col-7">
                                            <q-input type="tel" outlined dense label="Mobile Number"/>
                                        </q-item-section>
                                        <q-item-section class="col-5">
                                            <q-btn color="secondary" label="Send Code" style="margin-left:40px" />
                                        </q-item-section>
                                    </q-item>
                                </q-tab-panel>
                                <q-tab-panel name="oncart" class="no-padding discount-panel">
                                    <q-radio v-model="onCartType" val="flat" label="Flat Discount (max ₹ 75)" color="primary"/>
                                    <q-input outlined dense label="Add Amount" v-model="cartDiscountValue" style="padding-left:40px"/>
                                    <q-radio v-model="onCartType" val="percentage" label="Percentage Discount (max ₹ 75)" color="primary"/>
                                    <div class="flex q-mb-md" style="padding-left:40px">
                                        <q-btn outline label="2%" color="primary" class="q-mr-sm"/>
                                        <q-btn outline label="30%" color="primary" class="q-ml-sm"/>
                                    </div>
                                    <q-input outlined dense label="Enter Percentage" v-model="cartDiscountValue" style="padding-left:40px"/>
                                    <q-btn color="secondary" label="Apply" style="margin-left:40px" class="q-mt-md"/>
                                </q-tab-panel>
                                <q-tab-panel name="offers" class="no-padding discount-panel">
                                    <q-item tag="label" v-for="offer in offers" :key="offer.id" class="no-padding q-my-md">
                                        <q-item-section avatar top>
                                            <q-radio v-model="offerType" :val="offer.name" color="primary" />
                                        </q-item-section>
                                        <q-item-section>
                                            <q-item-label>{{offer.name}}</q-item-label>
                                            <q-item-label caption>{{offer.desc}}</q-item-label>
                                            <q-item-label caption>Promocode: {{offer.promocode}}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-btn color="secondary" label="Apply" style="margin-left:40px" class="q-mt-md"/>
                                </q-tab-panel>
                            </q-tab-panels>
                        </div>
                    </q-card-section>
                    <q-card-section class="col-4 lato">
                        <div class="text-subtitle1 text-dark q-pb-sm">Discount Summary</div>
                        <q-card flat bordered style="min-height:100px" class="q-mr-md">
                            
                        </q-card>
                    </q-card-section>
                </q-card-section>
                <q-separator />
                
                <q-card-section>
                    <div class="text-subtitle1 text-dark q-pb-sm lato">Discount (Optional)</div>
                    <div class="flex">
                        <q-btn-dropdown outline color="primary" label="Choose a custom reason" dense class="q-pl-sm lato" no-caps>
                            <q-list>
                                <q-item clickable v-close-popup @click="toggleDiscountReason" v-for="option in discountOptions" :key="option.id">
                                    <q-item-section>
                                        <q-item-label>{{option.name}}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                        <q-input outlined v-model="otherReason" class="q-ml-md lato" dense label="Type Reason Here" style="min-width:450px">
                            <template v-slot:before>
                                <div class="text-subtitle2 text-dark lato">Other Reason:</div>
                            </template>
                        </q-input>
                    </div>
                </q-card-section>

                <q-separator />

                <q-card-section>
                    <div class="flex justify-between items-center lato">
                        <div>
                            <div class="text-subtitle1 text-dark">Updated Bill Amount</div>
                            <div class="text-subtitle1 text-dark">₹ {{amountAfterDiscount}}</div>
                        </div>
                        <div>
                            <q-btn label="Confirm" outline color="primary" no-caps @click="closeModal" class="lato"/>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>
<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            tab: 'loyalty',
            onCartType: 'flat',
            cartDiscountValue: null,
            amountAfterDiscount: 120,
            offerType: 'special',
            offers: [
                {
                    id: 1,
                    name: 'SPECIAL',
                    promocode: 'SPECIAL',
                    desc: 'Special Discount'
                },
                {
                    id: 2,
                    name: 'FLAT30',
                    promocode: 'FLAT30',
                    desc: 'Flat 30% OFF'
                }
            ],
            otherReason: '',
            discountOptions: [
                {
                    id: 1,
                    name: 'Reason 1'
                },
                {
                    id: 2,
                    name: 'Reason 2'
                },
                {
                    id: 3,
                    name: 'Reason 3'
                }
            ]
        }
    },
    methods: {
        closeModal() {
            this.$emit("close")
        },
        toggleDiscountReason() {
            console.log("clickedd")
        }
    }
}
</script>
<style lang="stylus">

</style>