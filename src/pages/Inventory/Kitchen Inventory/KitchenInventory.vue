<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Kitchen Inventory</div>
            <q-btn color="primary" label="New Re-Stock Request" icon="add" class="create-order-button lato" @click="toggleShowRestockRequest"/>
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
                <q-tab name="rawMaterial" class="tab-style lato" label="Raw Materials" />
                <q-tab name="processedGood" class="tab-style lato" label="Processed Goods" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="rawMaterial">
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
                    <div v-if="getRawMaterialHeaders">
                        <customTable :getAllDetails="getRawMaterials" :withCheckbox="withCheckbox" :headers="getRawMaterialHeaders"/> 
                    </div>
                </q-tab-panel>

                <q-tab-panel name="processedGood">
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
                    <div v-if="getRawMaterialHeaders">
                        <customTable :getAllDetails="getRawMaterials" :withCheckbox="withCheckbox" :headers="getRawMaterialHeaders"/> 
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </section>
    </q-page>
</template>
<script>
import customTable from 'src/components/table.vue'

export default {
    components: {
        customTable
    },
    data() {
        return {
            tab: 'rawMaterial',
            withCheckbox: false
        }
    },
    computed: {
        getRawMaterials() {
            return this.$store.getters['inventory/getRawMaterials'];
        },
        getRawMaterialHeaders() {
            return this.$store.getters['tableHeaders/getRawMaterialHeaders'];
        },
        getProcessedGoods() {
            return this.$store.getters['inventory/getProcessedGoods'];
        }
    },
    methods: {
        toggleShowRestockRequest() {
            this.$router.push({
                name: 'restock-inner'
            })
        }
    }
}
</script>
<style lang="stylus">

</style>