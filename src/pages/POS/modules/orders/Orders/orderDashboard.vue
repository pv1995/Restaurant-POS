//Landing Order management page with all orders table and create order option
<template>
    <q-page class="q-pa-xl page-background">
        <section class="page-actions flex justify-end">
            <q-btn color="primary" label="Create Order" icon="add" class="create-order-button" @click="openCreateOrder"/>
        </section>
        <div class="q-pt-xl q-mt-xl">
          <div class="order-table">
            <div class="q-mt-md">
             <q-card>
                <q-tabs
                  v-model="tab"
                  dense
                  align="left"  
                  active-color="secondary"
                  indicator-color="secondary"
                >
                  <q-tab name="allorders" class="tab-style" label="All" />
                  <q-tab name="delivery" class="tab-style" label="Delivery" />
                  <q-tab name="dinein" class="tab-style" label="Dine-in" />
                  <q-tab name="takeaway" class="tab-style" label="Take-away" />
                </q-tabs>
                
                <q-separator />

                <q-tab-panels v-model="tab" animated>
                  <q-tab-panel name="allorders">
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="q-pa-md">
                                <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown">
                                    <q-list>
                                        <q-item clickable v-for="(header,i) in headers" :key="i" v-close-popup @click="onItemClick(header.label)">
                                            <q-item-section>
                                                <q-item-label>{{ header.label }}</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="q-pa-md">
                                <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                    <template v-slot:append>
                                        <q-icon class="search-icon" name="search" />
                                    </template>
                                </q-input>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="q-pa-md">
                              <div class="q-gutter-sm">
                                <q-checkbox v-model="selection" color='grey-8' :val="orderStatus" v-for="(orderStatus,i) in orderFilters" :key="i" :label='orderStatus' input = displayVal() />
                              </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="getAllOrders">
                      <customTable :getAllDetails="getAllOrders" :headers="getOrderHeaders" :withCheckbox="withCheckbox" @clicked="goToEditOrderStatus()" />  
                    </div>
                  </q-tab-panel>

                  <q-tab-panel name="delivery">
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="q-pa-md">
                                <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown">
                                    <q-list>
                                        <q-item clickable v-for="(header,i) in headers" :key="i" v-close-popup @click="onItemClick(header.label)">
                                            <q-item-section>
                                                <q-item-label>{{ header.label }}</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="q-pa-md">
                                <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                    <template v-slot:append>
                                        <q-icon class="search-icon" name="search" />
                                    </template>
                                </q-input>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="q-pa-md">
                              <div class="q-gutter-sm">
                                <q-checkbox v-model="selection" color='grey-8' :val="orderStatus" v-for="(orderStatus,i) in orderFilters" :key="i" :label='orderStatus' input = displayVal() />
                              </div>
                            </div>
                        </div>
                    </div>
                    <div>
                      <customTable :getAllDetails="getAllOrders" :headers="getOrderHeaders" :withCheckbox="withCheckbox" @clicked="goToEditOrderStatus()"/>  
                    </div>
                  </q-tab-panel>

                  <q-tab-panel name="dinein">
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="q-pa-md">
                                <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown">
                                    <q-list>
                                        <q-item clickable v-for="(header,i) in headers" :key="i" v-close-popup @click="onItemClick(header.label)">
                                            <q-item-section>
                                                <q-item-label>{{ header.label }}</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="q-pa-md">
                                <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                    <template v-slot:append>
                                        <q-icon class="search-icon" name="search" />
                                    </template>
                                </q-input>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="q-pa-md">
                              <div class="q-gutter-sm">
                                <q-checkbox v-model="selection" color='grey-8' :val="orderStatus" v-for="(orderStatus,i) in orderFilters" :key="i" :label='orderStatus' input = displayVal() />
                              </div>
                            </div>
                        </div>
                    </div>
                    <div>
                      <customTable :getAllDetails="getAllOrders" :headers="getOrderHeaders" :withCheckbox="withCheckbox" @clicked="goToEditOrderStatus()"/>  
                    </div>
                  </q-tab-panel>

                  <q-tab-panel name="takeaway">
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="q-pa-md">
                                <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown">
                                    <q-list>
                                        <q-item clickable v-for="(header,i) in headers" :key="i" v-close-popup @click="onItemClick(header.label)">
                                            <q-item-section>
                                                <q-item-label>{{ header.label }}</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="q-pa-md">
                                <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                    <template v-slot:append>
                                        <q-icon class="search-icon" name="search" />
                                    </template>
                                </q-input>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="q-pa-md">
                              <div class="q-gutter-sm">
                                <q-checkbox v-model="selection" color='grey-8' :val="orderStatus" v-for="(orderStatus,i) in orderFilters" :key="i" :label='orderStatus' input = displayVal() />
                              </div>
                            </div>
                        </div>
                    </div>
                    <div>
                      <customTable :getAllDetails="getAllOrders" :headers="getOrderHeaders" :withCheckbox="withCheckbox" @clicked="goToEditOrderStatus()"/>  
                    </div>
                  </q-tab-panel>

                </q-tab-panels>
              </q-card>        
            </div>
          </div>
        </div>
        <create-order :createOrder="createOrder" :createOrderTab="createOrderTab" @close="closeCreateOrder"/>
       <orderStatus :open='orderStatusModal' @close='orderStatusModal = false'/>
    </q-page>
</template>
<script>
import customTable from 'src/components/table.vue';
import createOrder from 'src/components/createOrder.vue';
import orderStatus from 'src/components/editOrderStatus.vue';

export default {
    components: {
        customTable,
        createOrder,
        orderStatus
    },
    data() {
        return {
            createOrder: false,
            tab: 'allorders',
            withCheckbox: false,
            orderStatusModal: false,
            orderFilters: ['Pending', 'Accepted', 'Dispatched', 'Preparing'],
            selection: [],
            createOrderTab: 'delivery',
        }
    },
     computed: {
        getAllOrders() {
            return this.$store.getters['Orders/getAllOrders'];
        },
        getOrderHeaders() {
          return this.$store.getters['tableHeaders/getOrderHeaders']
        }
    },
    mounted() {
         console.log(this.getAllOrders,"from dashboard")
    },
    methods: {
        openCreateOrder() {
            this.createOrder = !this.createOrder;
        },
        closeCreateOrder() {
            this.createOrder = false;
        },
        goToEditOrderStatus() {
            this.orderStatusModal = !this.orderStatusModal
            
        }
    }
}
</script>
<style lang="stylus" scoped>
.create-order-button
    width: 175px;

.order-table
    background-color: #fafaf6

.tab-style, .q-tab__label
  font-family: Comfortaa
  font-size: 16px
  font-weight: bold
  letter-spacing: 0.5px
  color: #222222
  text-transform: none

</style>