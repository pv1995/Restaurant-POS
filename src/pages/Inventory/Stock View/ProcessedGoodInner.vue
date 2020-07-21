<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="processed-good-inner bg-white q-mt-md q-ma-lg">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="goBack" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa q-mt-sm">{{this.$route.params.id ? 'Edit Processed Goods' : 'Add Processed Goods'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Processed Material Details</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Processed Material Name</q-item-label>
                            <q-input dense placeholder="Processed Material Name" v-model="name" outlined class="q-mt-sm"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm">
                            <q-item-label>Processed Material Category</q-item-label>
                            <q-select outlined v-model="category" :options="getProcessedGoodCategories" class="q-mt-sm" dense label="Select Processed Material Category" map-options emit-value/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato col-1">
                            <q-item-label>Unit</q-item-label>
                            <q-input dense placeholder="Unit" v-model="unit" outlined class="q-mt-sm"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Available Stock Quantity</q-item-label>
                            <q-input dense placeholder="Current Stock Quantity" v-model="availableStock" outlined class="q-mt-sm"/>
                        </q-item-section>
                    </q-item>
                    <!-- <q-item>
                        <q-item-section class="q-py-sm">
                            <q-item-label>Average Cost Per Unit</q-item-label>
                            <q-input dense placeholder="Avg Cost Per Unit" v-model="costPerUnit" outlined class="q-mt-sm"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Max Stock Quantity</q-item-label>
                            <q-input dense placeholder="Max Stock Quantity" v-model="maxQuantity" outlined class="q-mt-sm"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm">
                            <q-item-label>Alert Stock Quantity</q-item-label>
                            <q-input dense placeholder="Alert Stock Quantity" v-model="alertQuantity" outlined class="q-mt-sm"/>
                        </q-item-section>
                    </q-item> -->
                    <!-- <q-item>
                        <q-item-section class="q-py-sm">
                            <q-item-label>Kitchen Stock Quantity</q-item-label>
                            <q-input dense placeholder="Avg Cost Per Unit" v-model="kitchenStock" outlined class="q-mt-sm"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Available Stock Quantity</q-item-label>
                            <q-input dense placeholder="Max Stock Quantity" v-model="availableStock" outlined class="q-mt-sm"/>
                        </q-item-section>
                    </q-item> -->
                    <q-item>
                        <q-item-section>
                            <q-item-label>Add Raw Materials used per unit</q-item-label>
                            <div class="row no-padding items-center">
                                <div class="col-4 q-pr-sm">
                                    <q-select outlined v-model="rawMaterialCategory" :options="getRawMaterialCategories" class="q-mt-sm" dense label="Select Raw Material Category" emit-value map-options />
                                </div>
                                <div class="col-3 q-pr-sm">
                                    <q-select outlined v-model="rawMaterial" :options="getRawBasedOnCategoryOptions" class="q-mt-sm" dense label="Select Raw Material" emit-value map-options :readonly="!rawMaterialCategory"/>
                                </div>
                                <div class="col-3 q-pr-sm">
                                    <q-input dense placeholder="Quantity" v-model="rawMaterialQuantity" outlined class="q-mt-sm"/>
                                </div>
                                <div class="col-2 items-center">
                                    <q-btn label="Add" outline color="primary" class="q-mx-sm q-px-sm lato q-mt-sm" @click="addRawMaterialToList"/>
                                </div>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item v-if="rawMaterialsUsed.length > 0">
                        <q-item-section class="q-py-sm lato">
                            <q-item-label class="text-body1 text-dark lato">Raw Material List</q-item-label>
                            <q-table
                            style="max-height:300px;"
                            :data="rawMaterialsUsed"
                            :columns="getRawMaterialListPGHeaders"
                            row-key="index"
                            virtual-scroll
                            flat
                            class="q-mt-md"
                            >
                                <template v-slot:bottom class="bg-transparent">
                                    <div class="flex justify-end full-width">
                                        <div class="text-body2 lato">Subtotal</div>
                                        <div class="text-body2 text-weight-bold q-ml-xl lato">{{Math.round(getRawMaterialSum * 100) / 100}}</div>
                                    </div>
                                </template>
                            </q-table>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Reset" outline color="primary" class="q-mx-sm q-px-sm lato" @click="resetValues"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateProcessedMaterial" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveProcessedMaterial" v-else/>
                    </div>
                </q-card-section>
            </q-card>
        </section>
    </q-page>
</template>
<script>
export default {
    data() {
        return {
            rawMaterialCategory: '',
            rawMaterial: null,
            rawMaterialQuantity: '',
            rawMaterialsUsed: []
        }
    },
    created() {
        if(this.$route.params.id) {
            this.$store.dispatch('inventory/getProcessedMaterial', this.$route.params.id)
        }
    },
    computed: {
        getRawMaterialCategories() {
            return this.$store.getters['inventory/getRawMaterialCategories'].map(cat => {
                return {
                    label: cat.name,
                    value: cat.id
                }
            })
        },
        getRawMaterials() {
            return this.$store.getters['inventory/getRawMaterials'];
        },
        getRawBasedOnCategory() {
            return this.getRawMaterials.filter(raw => {
                if(raw.category === this.rawMaterialCategory) {
                    return raw
                }
            })
        },
        getRawBasedOnCategoryOptions() {
            return this.getRawBasedOnCategory.map(raw => {
                return {
                    label: raw.name,
                    value: raw.id
                }
            })
        },
        getRawMaterialListPGHeaders() {
            return this.$store.getters['tableHeaders/getRawMaterialListPGHeaders'];
        },
        getProcessedGoodCategories() {
            return this.$store.getters['inventory/getProcessedGoodCategories'].map(cat => {
                return {
                    label: cat.name,
                    value: cat.id
                }
            })
        },
        getProcessedMaterial() {
            return this.$store.getters['inventory/getProcessedMaterial']
        },
        name: {
            get() {
                if(this.getProcessedMaterial !== {}) {
                    return this.getProcessedMaterial.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                return this.$store.commit('inventory/editProcessedMaterial', data)
            }
        },
        category: {
            get() {
                if(this.getProcessedMaterial !== {}) {
                    return this.getProcessedMaterial.category
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'category'
                }
                return this.$store.commit('inventory/editProcessedMaterial', data)
            }
        },
        unit: {
            get() {
                if(this.getProcessedMaterial !== {}) {
                    return this.getProcessedMaterial.unit
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'unit'
                }
                return this.$store.commit('inventory/editProcessedMaterial', data)
            }
        },
        availableStock: {
            get() {
                if(this.getProcessedMaterial !== {}) {
                    return this.getProcessedMaterial.quantity
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'quantity'
                }
                return this.$store.commit('inventory/editProcessedMaterial', data)
            }
        },
        getSelectedRawMaterialName() {
            return this.getRawMaterials.filter(raw => {
                if(raw.id === this.rawMaterial) {
                    return raw
                }
            })
        },
        getRawMaterialSum() {
            return this.rawMaterialsUsed.reduce((a,b) => {
                return a + b.price
            }, 0)
        },
        getRawMaterialList() {
            return this.rawMaterialsUsed.map(raw => {
                return {
                    id: raw.id,
                    name: raw.name,
                    quantity: raw.quantity
                }
            })
        }
    },
    methods: {
        addRawMaterialToList() {
            this.rawMaterialsUsed.push({
                id: this.rawMaterial,
                name: this.getSelectedRawMaterialName[0].name,
                quantity: this.rawMaterialQuantity,
                price: Math.round((this.rawMaterialQuantity * this.getSelectedRawMaterialName[0].yieldCostPerUnit) * 100) / 100
            })
        },
        saveProcessedMaterial() {
            var payload = {
                name: this.name,
                category: this.category,
                unit: this.unit,
                quantity: this.availableStock,
                rawMaterials: this.getRawMaterialList
            }
            this.$store.dispatch('inventory/addProcessedMaterial', payload)
        },
        resetValues() {
            this.name = '';
            this.category = '';
            this.unit = '';
            this.costPerUnit = '';
            this.maxQuantity = '';
            this.alertQuantity = '';
            this.availableStock = '';
            this.kitchenStock = '';
            this.rawMaterialCategory = '';
            this.rawMaterial = '';
            this.rawMaterialQuantity = '';
            this.rawMaterialsUsed = []
        },
        goBack() {
            this.resetValues()
            this.$router.push({
                name: 'stock-view',
                params: {
                    type: 'processedGood'
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>