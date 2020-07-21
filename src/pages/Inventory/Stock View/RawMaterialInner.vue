<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="raw-material-inner bg-white q-mt-md q-ma-lg">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa q-mt-sm">{{this.$route.params.id ? 'Edit Raw Materials' : 'Add Raw Materials'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa q-mt-md">Raw Material Details</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Raw Material Name</q-item-label>
                            <q-input dense placeholder="Raw Material Name" v-model="rawMaterialName" outlined class="q-mt-sm"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm">
                            <q-item-label>Raw Material Category</q-item-label>
                            <q-select outlined v-model="rawMaterialCategory" :options="getRawMaterialCategories" class="q-mt-sm" dense label="Select Raw Material Category" emit-value map-options/>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Unit</q-item-label>
                            <q-input dense placeholder="Unit" v-model="unit" outlined class="q-mt-sm"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm">
                            <q-item-label>Average Cost Per Unit</q-item-label>
                            <q-input dense placeholder="Avg Cost Per Unit" v-model="costPerUnit" outlined class="q-mt-sm"/>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Max Stock Quantity</q-item-label>
                            <q-input dense placeholder="Max Stock Quantity" v-model="maxQuantity" outlined class="q-mt-sm"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm">
                            <q-item-label>Alert Stock Quantity</q-item-label>
                            <q-input dense placeholder="Alert Stock Quantity" v-model="alertQuantity" outlined class="q-mt-sm"/>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato col-6">
                            <q-item-label>Available Stock Quantity (Main Inventory)</q-item-label>
                            <q-input dense placeholder="Available Stock Quantity (Main Inventory)" v-model="availableQuantityMain" outlined class="q-mt-sm"/>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato col-6">
                            <q-item-label>Yield to be calculated</q-item-label>
                            <div class="flex items-center">
                                No
                            <q-toggle
                                v-model="shouldCalculateYield"
                                checked-icon="check"
                                color="green"
                                unchecked-icon="clear"
                            />
                                Yes
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato col-6">
                            <q-item-label>Yield Quantity Per Unit</q-item-label>
                            <q-input dense placeholder="Yield Quantity Per Unit" v-model="yieldQuantityPerUnit" outlined class="q-mt-sm"/>
                        </q-item-section>
                        <q-item-section class="lato" style="margin-left:24px">
                            <div class="flex items-baseline q-pt-lg">
                            <q-item-label class="text-subtitle1">Yield Cost Per Unit:</q-item-label>
                            <div class="q-ml-md text-subtitle1">{{this.getRawMaterial.yieldCostPerUnit || (costPerUnit/yieldQuantityPerUnit)}}</div>
                            </div>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateRawMaterial" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveRawMaterial" v-else/>
                    </div>
                </q-card-section>
             </q-card>
        </section>
        <cancel-modal :open="showCancelModal" @close="toggleShowCancelModal" @back="goBack" />
    </q-page>
</template>
<script>
import cancelModal from 'src/components/modals/cancelModal.vue'

export default {
    components: {
        "cancel-modal": cancelModal
    },
    data() {
        return {
            showCancelModal: false
        }
    },
    created() {
        if(this.$route.params.id) {
            this.$store.dispatch('inventory/getRawMaterial', this.$route.params.id)
        }
        console.log(this.$route)
    },
    computed: {
        getRawMaterial() {
            return this.$store.getters['inventory/getRawMaterial'];
        },
        getRawMaterialCategories() {
            return this.$store.getters['inventory/getRawMaterialCategories'].map(cat => {
                return {
                    label: cat.name,
                    value: cat.id
                }
            })
        },
        rawMaterialName: {
            get() {
                if(this.getRawMaterial !== {}) {
                    return this.getRawMaterial.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                this.$store.commit('inventory/editRawMaterial', data)
            }
        },
        rawMaterialCategory: {
            get() {
                if(this.getRawMaterial !== {}) {
                    return this.getRawMaterial.category
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'category'
                }
                this.$store.commit('inventory/editRawMaterial', data)
            }
        },
        unit: {
            get() {
                if(this.getRawMaterial !== {}) {
                    return this.getRawMaterial.unit
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'unit'
                }
                this.$store.commit('inventory/editRawMaterial', data)
            }
        },
        costPerUnit: {
            get() {
                if(this.getRawMaterial !== {}) {
                    return this.getRawMaterial.perUnitCost
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'perUnitCost'
                }
                this.$store.commit('inventory/editRawMaterial', data)
            }
        },
        maxQuantity: {
            get() {
                if(this.getRawMaterial !== {}) {
                    return this.getRawMaterial.maxStockQuantity
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'maxStockQuantity'
                }
                this.$store.commit('inventory/editRawMaterial', data)
            }
        },
        alertQuantity: {
            get() {
                if(this.getRawMaterial !== {}) {
                    return this.getRawMaterial.alertStockQuantity
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'alertStockQuantity'
                }
                this.$store.commit('inventory/editRawMaterial', data)
            }
        },
        availableQuantityMain: {
            get() {
                if(this.getRawMaterial !== {}) {
                    return this.getRawMaterial.currentStockQuantityMain
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'currentStockQuantityMain'
                }
                this.$store.commit('inventory/editRawMaterial', data)
            }
        },
        shouldCalculateYield: {
            get() {
                if(this.getRawMaterial !== {}) {
                    return this.getRawMaterial.shouldCalculateYield
                }
                return false
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'shouldCalculateYield'
                }
                this.$store.commit('inventory/editRawMaterial', data)
            }
        },
        yieldQuantityPerUnit: {
            get() {
                if(this.getRawMaterial !== {}) {
                    return this.getRawMaterial.yieldQuantityPerUnit
                }
                return false
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'yieldQuantityPerUnit'
                }
                this.$store.commit('inventory/editRawMaterial', data)
            }
        }
    },
    methods: {
        saveRawMaterial() {
            var payload = {
                name: this.rawMaterialName,
                category: this.rawMaterialCategory,
                unit: this.unit,
                perUnitCost: this.costPerUnit,
                maxStockQuantity: this.maxQuantity,
                alertStockQuantity: this.alertQuantity,
                currentStockQuantity: this.availableQuantityMain,
                shouldCalculateYield: this.shouldCalculateYield,
                yieldQuantityPerUnit: this.yieldQuantityPerUnit
            }
            this.$store.dispatch('inventory/addRawMaterial', payload);
        },
        updateRawMaterial() {
            var payload = {
                id: this.getRawMaterial.id,
                name: this.rawMaterialName,
                category: this.rawMaterialCategory,
                unit: this.unit,
                perUnitCost: this.costPerUnit,
                maxStockQuantity: this.maxQuantity,
                alertStockQuantity: this.alertQuantity,
                currentStockQuantity: this.availableQuantityMain,
                shouldCalculateYield: this.shouldCalculateYield,
                yieldQuantityPerUnit: this.yieldQuantityPerUnit
            }
            this.$store.dispatch('inventory/updateRawMaterial', payload);
        },
        resetValues() {
            this.$store.commit('inventory/resetRawMaterial')
        },
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        },
        goBack() {
            this.toggleShowCancelModal()
            this.resetValues()
            this.$router.push({
                name: 'stock-view',
                params: {
                    type: 'rawMaterial'
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>