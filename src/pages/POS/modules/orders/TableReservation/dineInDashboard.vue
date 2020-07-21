<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-end">
            <q-btn color="primary" label="Create Order" icon="add" class="q-mb-xl q-mt-md create-order-button" @click="openCreateOrder"/>
            <create-order :createOrder="createOrder" :createOrderTab="createOrderTab" @close="closeCreateOrder" :allTables="getAllTables"/>
        </section>
        <div class="q-mx-md q-mt-xl q-pa-md bg-white">
         <div class="row q-pb-lg">
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
                <div class="col-md-7 text-right">
                    <div class="q-pa-md">
                        <div class="q-gutter-sm"> 
                        <q-checkbox v-model="selection" color='grey-6' :val="tableStatus" v-for="(tableStatus,i) in tableFilters" :key="i" :label='tableStatus' input = displayVal() />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3" v-for="table in getAllTables" :key="table.id">
                    <empCard cardType='tablesCard' :tableDetails='table' />
                </div>
            </div>
        </div>
    </q-page>
</template>
<script>
import empCard from 'src/components/card.vue';
import createOrder from 'src/components/createOrder.vue';
export default { 
     data() {
        return {
            selection: [],
            createOrder: false,
            createOrderTab: 'dinein',
            tableFilters: ['Empty', 'Seated', 'Ordered', 'Prepared', 'Served'],
            // tableStatusColors: [
            //     {
            //        status: 'Empty',
            //        color: 'teal-5'
            //     },
            //     {
            //        status: 'Seated',
            //        color: 'blue-8'
            //     },
            //     {
            //        status: 'Ordered',
            //        color: 'orange-6'
            //     },
            //     {
            //        status: 'Prepared',
            //        color: 'deep-orange-5'
            //     },
            //     {
            //        status: 'Served',
            //        color: 'red'
            //     },
            // ] 
        }
     },
    components: {
        empCard,
        createOrder
    },
    created() {
        this.$store.dispatch('setup/getAllTables')
        console.log(this.getAllTables)
    },
    computed: {
        getAllTables() {
            return this.$store.getters['setup/getAllTables']
        },
    },
    methods: {
        openCreateOrder() {
            this.createOrder = !this.createOrder;
        },
        closeCreateOrder() {
            this.createOrder = false;
        },
    }
}
</script>
<style lang="stylus" scoped>
.create-order-button
    width: 175px;
</style>