<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Receiving</div>
            <q-btn color="primary" label="Direct Delivery" icon="add" class="create-order-button lato" @click="toggleShowDirectPurchase"/>
        </section>
        <section class="register-table q-mt-xl bg-white">
            <q-tabs
                v-model="tab"
                dense
                align="left"  
                active-color="secondary"
                indicator-color="secondary"
                >
                <q-tab name="newDeliveries" class="tab-style lato" label="New Deliveries" />
                <q-tab name="deliveryHistory" class="tab-style lato" label="Delivery History" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="newDeliveries">
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
                    <div v-if="getReceivingPO">
                        <customTable :getAllDetails="getReceivingPO" :withCheckbox="withCheckbox" :headers="getReceivingHeaders"/> 
                    </div>
                </q-tab-panel>

                <q-tab-panel name="deliveryHistory">
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
                    <div v-if="getReceivingPO">
                        <customTable :getAllDetails="getReceivingPO" :withCheckbox="withCheckbox" :headers="getReceivingHeaders"/> 
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </section>
        <directPurchase :open="showDirectPurchase" @close="toggleShowDirectPurchase" />
    </q-page>
</template>
<script>
import customTable from 'src/components/table.vue'
import directPurchase from 'src/components/directPurchase.vue'

export default {
    components: {
        customTable,
        directPurchase
    },
    data() {
        return {
            tab: 'newDeliveries',
            withCheckbox: false,
            showDirectPurchase: false
        }
    },
    computed: {
        getReceivingHeaders() {
            return this.$store.getters['tableHeaders/getReceivingHeaders'];
        },
        getReceivingPO() {
            return this.$store.getters['inventory/getReceivingPO']
        }
    },
    methods: {
        toggleShowDirectPurchase() {
            this.showDirectPurchase = !this.showDirectPurchase
        }
    }
}
</script>
<style lang="stylus">

</style>