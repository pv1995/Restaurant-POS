<template>
    <div>
        <q-dialog v-model="open" persistent>
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-avatar>
                        <q-icon name="local_offer" style="width:40%" color="accent"/>
                    </q-avatar>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">Item Discounts</q-toolbar-title>

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
                            style="width:50%"
                        >
                        
                            <q-tab class="" :class="{'bg-grey-3 text-dark': (tab != 'onitem')}" name="onitem" label="On Item" />
                            <q-tab class="q-mx-sm" :class="{'bg-grey-3 text-dark': (tab != 'complimentary')}" name="complimentary" label="Complimentary" />
                        </q-tabs>
                        <div class="q-gutter-y-sm">
                            <q-tab-panels
                                v-model="tab"
                                animated
                                transition-prev="scale"
                                transition-next="scale"
                                class="lato"
                            >
                                <q-tab-panel name="onitem" class="no-padding discount-panel">
                                    <q-radio v-model="onItemType" val="flat" label="Flat Discount (max ₹ 120)" color="primary"/>
                                    <q-input outlined dense label="Add Amount" v-model="itemDiscountValue" style="padding-left:40px"/>
                                    <q-radio v-model="onItemType" val="percentage" label="Percentage Discount (max ₹ 120)" color="primary"/>
                                    <div class="flex q-mb-md" style="padding-left:40px">
                                        <q-btn outline label="2%" color="primary" class="q-mr-sm"/>
                                        <q-btn outline label="30%" color="primary" class="q-ml-sm"/>
                                    </div>
                                    <q-input outlined dense label="Enter Percentage" v-model="itemDiscountValue" style="padding-left:40px"/>
                                    <q-btn color="secondary" label="Apply" style="margin-left:40px" class="q-mt-md"/>
                                </q-tab-panel>
                                <q-tab-panel name="complimentary" class="no-padding discount-panel">
                                    <div class="text-subtitle2 text-dark">Choose Complimentary Items</div>
                                    <q-item v-for="item in complimentaryItems" :key="item.name" class="no-padding cart-row">
                                        <q-item-section class="col-6">
                                            <q-item-label>{{item.name}}</q-item-label>
                                            <q-item-label caption v-if="item.customised" class="text-secondary">Customised</q-item-label>
                                            <q-item-label caption v-else class="cursor-pointer">Customise</q-item-label>
                                        </q-item-section>
                                        <q-item-section class="col-3">
                                            <div class="row items-center" style="width:75px;">
                                                <div class="col-3">
                                                    <q-btn outline color="primary" icon="remove" dense class="quantity-buttons" @click="reduceQuantity(item.id)"/>
                                                </div>
                                                <div class="col-6">
                                                    <q-input readonly dense hide-bottom-space borderless v-model="item.quantity" :input-class="'text-center'" />
                                                </div>
                                                <div class="col-3">
                                                    <q-btn outline color="primary" icon="add" dense class="quantity-buttons" @click="increaseQuantity(item.id)"/>
                                                </div>
                                            </div>
                                        </q-item-section>
                                        <q-item-section class="text-center col-3">
                                            <q-item-label class="text-body1">₹{{item.price}}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                    <q-btn color="secondary" label="Apply" class="q-mt-sm"/>
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
                                <q-item clickable v-close-popup @click="toggleDiscountReason" v-for="option in discountOptions" :key="option.id" class="lato">
                                    <q-item-section>
                                        <q-item-label>{{option.name}}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                        <q-input outlined v-model="otherReason" class="q-ml-md lato" dense label="Type Reason Here" style="min-width:450px">
                            <template v-slot:before>
                                <div class="text-subtitle2 text-dark">Other Reason:</div>
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
            tab: 'onitem',
            onItemType: 'flat',
            itemDiscountValue: null,
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
            ],
            amountAfterDiscount: 120,
            complimentaryItems: [
                {
                    id: 1,
                    name: 'Thandi Kheer',
                    price: 40,
                    quantity: 1
                },
                {
                    id: 2,
                    name: 'Choco Bomb',
                    price: 60,
                    quantity: 1
                }
            ],
            otherReason: ''
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        toggleDiscountReason() {
            console.log("clickedd")
        }
    }
}
</script>
<style lang="stylus">
.discount-panel
    width: 65% !important;
    min-height: 200px

.quantity-buttons
    font-size: 8px;

.quantity-input
    height: 22px !important;
</style>