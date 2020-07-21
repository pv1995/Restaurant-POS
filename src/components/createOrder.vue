//This is the first step of the create order process. This will route to the menu page.

<template>
    <div>
        <q-dialog v-model="createOrder">
            <q-card class="create-order-dialog">
                <q-toolbar>
                    <q-avatar>
                        <q-img src="statics/newordericon.jpeg" style="width:40%"/>
                    </q-avatar>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">New Order</q-toolbar-title>

                    <q-btn flat round dense icon="close" @click="closeModal" />
                </q-toolbar>
                <q-separator />

                <q-card-section class="no-padding">
                    <div class="row height-500">
                        <div class="col-8 q-px-lg q-pt-lg right-border">
                            <div class="text-subtitle1 text-dark q-pb-sm lato">Order Type</div>
                            <q-tabs
                                v-model="tab"
                                align="left"
                                class="q-mb-lg lato"
                                active-bg-color="primary"
                                active-color="white"
                                no-caps
                            >
                            
                                <q-tab class="" :class="{'bg-grey-3 text-dark': (tab != 'delivery')}" name="delivery" label="Delivery" />
                                <q-tab class="q-mx-sm" :class="{'bg-grey-3 text-dark': (tab != 'takeaway')}" name="takeaway" label="Takeaway" />
                                <q-tab class="" :class="{'bg-grey-3 text-dark': (tab != 'dinein')}" name="dinein" label="Dine-In" />
                            </q-tabs>
                            <div class="q-gutter-y-sm">
                                <q-tab-panels
                                v-model="tab"
                                animated
                                transition-prev="scale"
                                transition-next="scale"
                                class="lato"
                                >
                                    <q-tab-panel name="delivery" class="no-padding q-mt-lg">
                                        <div class="text-subtitle2 text-dark">Add Customer Details <span><q-btn round color="transparent" text-color="dark" icon="edit" unelevated size="xs"/></span></div>
                                        <div class="add-customer-info-input q-mt-sm" v-if="showCustomerSearch">
                                            <q-select outlined v-model="customer" use-input hide-selected label-color="primary" color="primary" fill-input input-debounce="0" :options="customers" @filter="filterFn" dense label="Customer Mobile Number" @input="getCustomerData">
                                                <template v-slot:option="scope">
                                                    <q-item
                                                        v-bind="scope.itemProps"
                                                        v-on="scope.itemEvents"
                                                    >
                                                        <q-item-section>
                                                            <q-item-label v-html="scope.opt.name" />
                                                        </q-item-section>
                                                    </q-item>
                                                </template>
                                                <template v-slot:no-option>
                                                <q-item>
                                                    <q-item-section class="text-grey">
                                                        No results
                                                    </q-item-section>
                                                </q-item>
                                                </template>
                                            </q-select>
                                        </div>
                                        <div v-else class="q-mt-sm">
                                            <div class="row">
                                                <div class="col q-mr-md">
                                                    <div class="row justify-between">
                                                        <div class="col-11 customer-info-left">
                                                            <div class="text-subtitle2 text-dark">{{customer.name}}</div>
                                                            <div class="text-caption">{{customer.phone}}</div>
                                                        </div>
                                                        <div class="col-1 customer-info-right">
                                                            <q-btn round color="transparent" text-color="dark" icon="edit" unelevated size="sm" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col q-ml-md">
                                                    <div class="row">
                                                        <div class="col-1">
                                                            <q-img src="statics/loyaltypoints.jpeg" style="width:70%"/>
                                                        </div>
                                                        <div class="col-11">
                                                            <div class="text-subtitle2">{{customer.coins}} Coins</div>
                                                            <div class="text-caption">1 coin = {{customer.coinValue}} ₹</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="delivery-address q-mt-xl">
                                                <div class="text-subtitle2 text-dark">Select Delivery Address</div>
                                                <q-option-group
                                                    v-model="address"
                                                    :options="addressList"
                                                    color="primary"
                                                />
                                                <q-btn outline color="primary" label="Add Address" class="q-mt-sm" icon="add"/>
                                            </div>
                                        </div>
                                    </q-tab-panel>

                                    <q-tab-panel name="takeaway">
                                        <div class="text-h6">Alarms</div>
                                        Ad molestiae non facere animi nobis, similique nemo velit reiciendis corporis impedit nam in.
                                    </q-tab-panel>

                                    <q-tab-panel name="dinein">
                                        <q-item>
                        
                                            <q-item-section class="q-py-sm lato">
                                                <q-item-label>Select Table</q-item-label>
                                                <q-select outlined dense v-model="tableNo" label="Select Table" :options="getTableInfo" class="q-mt-sm" emit-value map-options>
                                                   <template v-slot:option="scope">
                                                        <q-item
                                                        v-bind="scope.itemProps"
                                                        v-on="scope.itemEvents"
                                                        >
                                                        <q-item-section>
                                                            <!-- <q-item-label v-html="scope.opt.label" /> -->
                                                            <q-item-label> Table No : {{scope.opt.label}} </q-item-label>
                                                            <q-item-label caption>Capacity : {{ scope.opt.tableCapacity }}</q-item-label>
                                                        </q-item-section>
                                                        
                                                        </q-item>
                                                        <q-separator />
                                                   </template>
                                                </q-select>
                                            </q-item-section>
                                        </q-item>
                                    </q-tab-panel>
                                </q-tab-panels>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="customer-notes q-px-lg q-pt-lg q-mb-lg lato">
                                <div class="text-subtitle2 text-dark">Customer Notes</div>
                                <q-input v-model="customerNotes" type="textarea" outlined class="q-mt-sm"/>
                            </div>
                            <div class="other-info q-px-lg lato">
                                <div class="text-subtitle2 text-dark">Other Info</div>
                                <q-checkbox v-model="nonChargeable" label="Mark order as non-chargeable" class="q-mt-sm" size="sm"/>
                            </div>
                            <div v-if="nonChargeable" class="q-px-lg q-pt-md q-mb-lg nonchargeable-section lato">
                                <div class="text-subtitle2 text-dark">Select Category</div>
                                <q-select outlined v-model="nonchargeableCategory" :options="nonChargeableCategories" dense class="q-mt-sm"/>
                                <div class="text-subtitle2 text-dark q-mt-lg">Provide Comments</div>
                                <q-input v-model="nonChargeableComments" type="textarea" outlined class="q-mt-sm"/>
                            </div>
                        </div>
                    </div>
                </q-card-section>
                <div>
                    <q-separator />
                </div>
                <q-card-section>
                    <div class="row">
                        <div class="col">
                            <q-btn color="icon_gray" text-color="dark" label="Change Customer" unelevated v-if="customer" @click="changeCustomer" class="bg-grey-4 q-px-sm lato" no-caps/>
                        </div>
                        <div class="col flex justify-end">
                            <q-btn color="primary" label="Take Order" class="q-px-lg lato" no-caps @click="goToTakeOrder"/>
                        </div>  
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // createOrder: true
            tab: '',
            showCustomerSearch: true,
            tableNo: '',
            customers: [
                {
                    id: 1,
                    name: 'Shubham Prasanna',
                    coins: '526',
                    phone: '9787083812',
                    coinValue: '0.01'
                }
            ],
            addressList: [
                {
                    value: 1,
                    label: 'B2-G02, Tulip Purple, Sec-69',
                    city: 'Gurgaon'
                },
                {
                    value: 2,
                    label: '1115, Mahaveer Maple, Brookefield',
                    city: 'Bengaluru'
                }
            ],
            customer: null,
            address: 1,
            customerNotes: '',
            nonChargeable: false,
            nonchargeableCategory: 'Default',
            nonChargeableCategories: [
                'Default', 'Family', 'BOGO'
            ],
            nonChargeableComments: ''
        }
    },
    props: {
        createOrder: {
            type: Boolean,
            required: true
        },
        createOrderTab: {
            type: String
        },
        allTables: {
            type: Array
        }
    },
    created() {
           console.log(this.createOrderTab)
           if (this.createOrderTab == 'delivery') {
               this.tab = 'delivery'
           }
           else {
               this.tab = 'dinein'
           }
       
    },
    computed: {
        getTableInfo() {
          return this.allTables.map(table=>{
              return{
                label: table.number,
                value: table.id,
                tableCapacity: table.capacity
              }
            })
          },
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        filterFn (val, update, abort) {
            console.log(val);
            if (val.length < 2) {
                abort()
                return
            }

            update(() => {
                const needle = val.toLowerCase()
                this.customers = this.customers.filter(v => v.phone.toLowerCase().indexOf(needle) > -1)
            })
        },
        getCustomerData(value) {
            this.showCustomerSearch = false;
        },
        changeCustomer() {
            this.customer = null;
            this.showCustomerSearch = true;
        },
        goToTakeOrder() {
            this.$router.push('/takeorder')
        }
    }
}
</script>
<style lang="stylus" scoped>
.create-order-dialog
    max-width: 1200px !important;
    width 1024px !important;

.new-order-title
    font-weight: 400;

.add-customer-info-input
    width: 275px;

.right-border
    border-right: 1px solid rgba(0,0,0,0.12)

.customer-notes, .nonchargeable-section
    width: 340px;

.height-500
    min-height: 500px;
</style>