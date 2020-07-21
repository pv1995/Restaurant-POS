<template>
    <q-page class="q-pa-lg">
         <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Main Inventory</div>
            <q-btn color="primary" label="Add Raw Materials" icon="add" class="create-order-button lato" @click="toggleShowRawMaterial" v-if="tab === 'rawMaterial'"/>
            <q-btn color="primary" label="Add Raw Material Category" icon="add" class="create-order-button lato" @click="toggleShowRawMaterialCategory" v-else-if="tab === 'rawMaterialCategory'"/>
            <q-btn color="primary" label="Add Processed Goods" icon="add" class="create-order-button lato" @click="toggleShowProcessedGood" v-else-if="tab === 'processedGood'"/>
            <q-btn color="primary" label="Add Processed Good Category" icon="add" class="create-order-button lato" @click="toggleShowProcessedGoodCategory" v-else/>
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
                <q-tab name="rawMaterialCategory" class="tab-style lato" label="Raw Material Categories" />
                <q-tab name="processedGood" class="tab-style lato" label="Processed Goods" />
                <q-tab name="processedGoodCategory" class="tab-style lato" label="Processed Goods Categories" />
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
                        <customTable :getAllDetails="getRawMaterials" :withCheckbox="withCheckbox" :headers="getRawMaterialHeaders" :withRowActions="withRowActions" @edit="toggleEditRawMaterial" /> 
                    </div>
                </q-tab-panel>
                <q-tab-panel name="rawMaterialCategory">
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
                    <div v-if="getRawMaterialCategoryHeaders">
                        <customTable :getAllDetails="getRawMaterialCategories" :withCheckbox="withCheckbox" :headers="getRawMaterialCategoryHeaders" :withRowActions="withRowActions" @edit="toggleEditRawMaterialCategory"/> 
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
                        <customTable :getAllDetails="getProcessedGoods" :withCheckbox="withCheckbox" :headers="getRawMaterialHeaders" :withRowActions="withRowActions"/> 
                    </div>
                </q-tab-panel>
                <q-tab-panel name="processedGoodCategory">
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
                        <customTable :getAllDetails="getProcessedGoodCategories" :withCheckbox="withCheckbox" :headers="getRawMaterialCategoryHeaders" :withRowActions="withRowActions" @edit="toggleEditProcessedGoodCategory"/> 
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
        customTable,
    },
    data() {
        return {
            tab: '',
            withCheckbox: false,
            showRawMaterial: false,
            showProcessedGood: false,
            showRawMaterialCategory: false,
            showProcessedGoodCategory: false,
            withRowActions: true,
            search: ''
        }
    },
    created() {
        this.$store.dispatch('inventory/getAllInventories')
        // this.$store.dispatch('inventory/getMainInventory')
        this.$store.dispatch('inventory/getCategories');
        this.$store.dispatch('inventory/getAllRaw');
        this.$store.dispatch('inventory/getAllProcessed')
        if(this.$route.params.type) {
            this.tab = this.$route.params.type
        }
        else {
            this.tab = 'rawMaterial'
        }
    },
    computed: {
        getMainInventory() {
            return this.$store.getters['inventory/getMainInventory']
        },
        getRawMaterials() {
            return this.$store.getters['inventory/getRawMaterials'] || []
        },
        getRawMaterialHeaders() {
            return this.$store.getters['tableHeaders/getRawMaterialHeaders'];
        },
        getRawMaterialCategories() {
            return this.$store.getters['inventory/getRawMaterialCategories']
        },
        getRawMaterialCategoryHeaders() {
            return this.$store.getters['tableHeaders/getRawMaterialCategoryHeaders'];
        },
        getProcessedGoods() {
            return this.$store.getters['inventory/getProcessedGoods'] || []
        },
        getProcessedGoodCategories() {
            return this.$store.getters['inventory/getProcessedGoodCategories'];
        }
    },
    methods: {
        toggleShowRawMaterial() {
            this.$router.push({
                name: 'raw-material-inner'
            })
        },
        toggleShowProcessedGood() {
            this.$router.push({
                name: 'processed-material-inner'
            })
        },
        toggleShowRawMaterialCategory() {
            this.$router.push({
                name: 'raw-category-inner'
            })
        },
        toggleShowProcessedGoodCategory() {
            this.$router.push({
                name: 'processed-category-inner'
            })
        },
        toggleEditRawMaterial(val) {
            this.$router.push({
                name: 'raw-material-inner',
                params: {
                    id: val.name
                }
            })
        },
        toggleEditProcessedGood(val) {
            this.$router.push({
                name: 'processed-material-inner',
                params: {
                    id: val.name
                }
            })
        },
        toggleEditRawMaterialCategory(val) {
            this.$router.push({
                name: 'raw-category-inner',
                params: {
                    id: val.name
                }
            })
        },
        toggleEditProcessedGoodCategory(val) {
            console.log(val, '!!!')
            this.$router.push({
                name: 'processed-category-inner',
                params: {
                    id: val.name
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>