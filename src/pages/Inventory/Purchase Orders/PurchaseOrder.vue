<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Purchase Orders</div>
            <q-btn color="primary" label="New Purchase Order" icon="add" class="create-order-button lato" @click="toggleShowPurchaseOrder"/>
        </section>
        <section class="analytics-graphics q-mt-xl">
            <div class="flex justify-center items-center">
                <q-card class="bg-accent q-mx-sm" style="width:250px;height:250px" flat>
                </q-card>
                <q-card class="bg-accent q-mx-sm" style="width:250px;height:250px" flat>
                </q-card>
            </div>
        </section>
        <section class="register-table q-mt-lg bg-white">
            <q-tabs
                v-model="tab"
                dense
                align="left"  
                active-color="secondary"
                indicator-color="secondary"
                >
                <q-tab name="templates" class="tab-style lato" label="Templates" />
                <q-tab name="drafts" class="tab-style lato" label="Drafts" />
                <q-tab name="pending" class="tab-style lato" label="Pending" />
                <q-tab name="closed" class="tab-style lato" label="Closed" />
                <q-tab name="history" class="tab-style lato" label="History" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="templates">
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
                        <div class="col-7 text-right">
                            <q-btn outline color="primary" label="New Template" class="q-mt-md q-mr-md" @click="toggleShowNewTemplate"/>
                        </div>
                    </div>
                    <div v-if="getTemplates">
                        <customTable :getAllDetails="getTemplates" :withCheckbox="withCheckbox" :headers="getTemplateHeaders" :showButton="showButton" @clicked="toggleShowNewTemplate"/> 
                    </div>
                </q-tab-panel>

                <q-tab-panel name="drafts">
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
                    </div>
                    <div v-if="getTemplates">
                        <customTable :getAllDetails="getTemplates" :withCheckbox="withCheckbox" :headers="getTemplateHeaders"/> 
                    </div>
                </q-tab-panel>
                <q-tab-panel name="pending">
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
                    </div>
                    <div v-if="getTemplates">
                        <customTable :getAllDetails="getPurchaseOrders" :withCheckbox="withCheckbox" :headers="getPurchaseOrderHeaders"/> 
                    </div>
                </q-tab-panel>
                <q-tab-panel name="closed">
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
                    </div>
                    <div v-if="getTemplates">
                        <customTable :getAllDetails="getPurchaseOrders" :withCheckbox="withCheckbox" :headers="getPurchaseOrderHeaders"/> 
                    </div>
                </q-tab-panel>
                <q-tab-panel name="history">
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
                    </div>
                    <div v-if="getTemplates">
                        <customTable :getAllDetails="getPurchaseOrders" :withCheckbox="withCheckbox" :headers="getPurchaseOrderHeaders"/> 
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </section>
        <newTemplate :open="showNewTemplate" @close="toggleShowNewTemplate" />
        <newPurchaseOrder :open="showPurchaseOrder" @close="toggleShowPurchaseOrder" />
    </q-page>
</template>
<script>
import customTable from 'src/components/table.vue'
import newPurchaseOrder from 'src/components/newPurchaseOrder.vue'

export default {
    components: {
        customTable,
        newPurchaseOrder
    },
    data() {
        return {
            withCheckbox: false,
            showButton: true,
            tab: 'templates',
            showNewTemplate: false,
            showPurchaseOrder: false
        }
    },
    created() {
      this.$store.dispatch('inventory/getAllTemplates');
    },
    computed: {
        getTemplates() {
            return this.$store.getters['inventory/getTemplates'];
        },
        getTemplateHeaders() {
            return this.$store.getters['tableHeaders/getTemplateHeaders'];
        },
        getPurchaseOrders() {
            return this.$store.getters['inventory/getPurchaseOrders'];
        },
        getPurchaseOrderHeaders() {
            return this.$store.getters['tableHeaders/getPurchaseOrderHeaders'];
        }
    },
    methods: {
        toggleShowNewTemplate() {
            this.$router.push({
                name: 'template-inner'
            })
        },
        toggleShowPurchaseOrder() {
            this.$router.push({
                name: 'purchase-order-inner'
            })
        }
    }
}
</script>
<style lang="stylus">

</style>