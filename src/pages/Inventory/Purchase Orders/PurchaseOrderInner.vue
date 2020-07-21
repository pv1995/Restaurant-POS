<template>
    <q-page class="q-pa-xl">
        <div v-if="getRawMaterialCategories && getRawMaterials">
            <section class="page-actions">
            
            </section>
            <section class="template-inner bg-white q-mt-md q-ma-lg">
                <q-card flat class="modal-card">
                    <q-toolbar>
                        <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                        <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                        <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa q-mt-sm">{{this.$route.params.id ? 'Edit Purchase Order' : 'New Purchase Order'}}</q-toolbar-title>
                    </q-toolbar>

                    <q-separator />
                    <q-card-section>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label class="text-body1 text-dark lato">Purchase Order PO#0001</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label class="text-body1 text-dark lato">Select Template</q-item-label>
                                <q-select outlined v-model="template" :options="getFormattedTemplates" class="q-mt-sm" dense label="Select Template"/>
                            </q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section class="q-py-sm lato col-4">
                                <q-item-label class="text-body1 text-dark lato">Select Raw Material Category</q-item-label>
                                <q-select outlined v-model="rawMaterialCategory" :options="getFormattedRMCategories" class="q-mt-sm" dense label="Select Raw Material Category"/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato col-4">
                                <q-item-label class="text-body1 text-dark lato">Select Raw Material</q-item-label>
                                <q-select outlined v-model="rawMaterial" :options="getFormattedRawMaterials" class="q-mt-sm" dense label="Select Raw Material"/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato col-2">
                                <q-item-label class="text-body1 text-dark lato">Quantity</q-item-label>
                                <q-input dense v-model="quantity" class="q-mt-sm" label="Quantity" outlined/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato col-2">
                                <q-btn label="Add" outline color="primary" class="q-mx-sm q-px-sm lato q-mt-lg" @click="addItemToList"/>
                            </q-item-section>
                        </q-item>
                        <q-item v-if="rawMaterialList.length > 0">
                            <q-item-section class="q-py-sm lato">
                                <q-item-label class="text-body1 text-dark lato">Raw Material List</q-item-label>
                                <q-table
                                style="max-height:300px;"
                                :data="rawMaterialList"
                                :columns="getRawMaterialListPOHeaders"
                                row-key="index"
                                virtual-scroll
                                flat
                                class="q-mt-md"
                                >
                                    <template v-slot:bottom class="bg-transparent">
                                        <div class="flex justify-end full-width q-pr-lg">
                                            <div class="text-body2 lato">Subtotal</div>
                                            <div class="text-body2 text-weight-bold q-ml-xl lato">300</div>
                                        </div>
                                    </template>
                                </q-table>
                            </q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label class="text-body1 text-dark lato">Special Instructions</q-item-label>
                                <q-input placeholder="Shipping Notes" v-model="specialInstructions" outlined class="q-mt-sm" />
                            </q-item-section>
                        </q-item>
                    </q-card-section>
                    <q-card-section>
                        <div class="flex items-center justify-center">
                            <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="resetValues"/>
                            <q-btn label="Save as draft" unelevated color="primary" class="q-px-xs lato" @click="saveAsDraft" v-if="this.$route.params.id"/>
                            <q-btn label="Save" unelevated color="primary" class="q-px-md lato q-ml-sm" @click="savePurchaseOrder" v-else/>
                        </div>
                    </q-card-section>
                </q-card>
            </section>
        </div>
        <div v-else class="flex flex-center loader-div-height">
            <q-spinner-oval color="secondary" size="xl"/>
        </div>
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
            showCancelModal: false,
            rawMaterialList: []
        }
    },
    created() {
        this.$store.dispatch('inventory/getCategories');
        this.$store.dispatch('inventory/getAllRaw');
        this.$store.dispatch('inventory/getAllProcessed')
    },
    computed: {
        getTemplates() {
            return this.$store.getters['inventory/getTemplates'];
        },
        getFormattedTemplates() {
            return this.getTemplates.map(template => {
                return {
                    label: template.name,
                    value: template.name
                }
            })
        },
        getRawMaterialCategories() {
            return this.$store.getters['inventory/getRawMaterialCategories']
        },
        getFormattedRMCategories() {
            return this.getRawMaterialCategories.map(cat => {
                return {
                    label: cat.name,
                    value: cat.name
                }
            })
        },
        getRawMaterials() {
            return this.$store.getters['inventory/getRawMaterials'];
        },
        getFormattedRawMaterials() {
            return this.getRawMaterials.map(rm => {
                return {
                    label: rm.name,
                    value: rm.name
                }
            })
        },
        getRawMaterialListPOHeaders() {
            return this.$store.getters['tableHeaders/getRawMaterialListPOHeaders'];
        },
        getSelectedRawMaterial() {
            return this.getRawMaterials.filter(rm => {
                if(rm === this.rawMaterial) {
                    return rm
                }
            })
        }
    },
    methods: {
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        },
        resetValues() {
            this.$store.commit('inventory/resetPurchaseOrder')
        },
        goBack() {
            this.$router.push({
                name: 'purchase-orders'
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>