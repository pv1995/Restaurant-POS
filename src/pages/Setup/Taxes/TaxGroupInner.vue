<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="tax-group-inner bg-white q-mt-md q-ma-xl">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{this.$route.params.id ? 'Edit Tax Group' : 'Create Tax Group'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Tax Group Details</div>
                    <div class="text-caption text-grey-7 q-pl-md lato">One or more taxes can be grouped under a tax group and applied to products.</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>
                                Tax Group Name
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Tax Group Name" v-model="taxGroupName" outlined class="q-mt-sm" />
                            <div class="flex items-center">
                                <q-checkbox v-model="inclusivePrice" label="Taxes inclusive in product price" class="q-mt-md" />
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding q-mt-sm q-ml-xs">*</q-badge>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="lato">
                            <q-item-label>Select Taxes</q-item-label>
                            <q-select outlined v-model="taxGroups" :options="getAllTaxes" class="q-mt-sm" dense label="Select Taxes" multiple emit-value map-options/>
                        </q-item-section>
                    </q-item>
                    <!-- <div v-if="this.taxGroups.length > 0">
                        <div class="flex q-ml-md">
                            <q-badge outline color="primary" v-for="tax in taxGroups" :key="tax" :label="tax.label" class="q-mr-sm lato"/>
                        </div>
                    </div> -->
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateTaxGroup" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveTaxGroup" v-else/>
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
            this.$store.dispatch('setup/getTaxGroup', this.$route.params.id)
        }
    },
    computed: {
        getTaxes() {
            return this.$store.getters['setup/getAllTaxes']
        },
        getAllTaxes() {
            return this.getTaxes.map(tax => {
                return {
                    label: tax.name,
                    value: tax.id
                }
            })
        },
        getSelectedTaxes() {
            return this.taxGroup.map(tax => {
                return tax.value
            })
        },
        getTaxGroup() {
            return this.$store.getters['setup/getTaxGroup']
        },
        taxGroupName: {
            get() {
                if(this.getTaxGroup !== {}) {
                    return this.getTaxGroup.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                return this.$store.commit('setup/editTaxGroup', data)
            }
        },
        inclusivePrice: {
            get() {
                if(this.getTaxGroup !== {}) {
                    return this.getTaxGroup.inclusiveProductPrice
                }
                return false
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'inclusiveProductPrice'
                }
                return this.$store.commit('setup/editTaxGroup', data)
            }
        },
        taxGroups: {
            get() {
                if(this.getTaxGroup !== {}) {
                    return this.getTaxGroup.taxIds
                }
                return []
            },
            set(payload) {
                console.log(payload)
                var data = {
                    info: payload,
                    type: 'taxIds'
                }
                return this.$store.commit('setup/editTaxGroup', data)
            }
        }
    },
    methods: {
        saveTaxGroup() {
            var payload = {
                name: this.taxGroupName,
                inclusiveProductPrice: this.inclusivePrice,
                taxIds: this.taxGroups
            }
            console.log(payload)
            this.$store.dispatch('setup/addTaxGroup', payload)
        },
        updateTaxGroup() {
            var payload = {
                id: this.getTaxGroup.id,
                name: this.taxGroupName,
                inclusiveProductPrice: this.inclusivePrice,
                taxIds: this.taxGroups
            }
            this.$store.dispatch('setup/updateTaxGroup', payload)
        },
        resetValues() {
            this.$store.commit('setup/resetTaxGroup')
        },
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        },
        goBack() {
            this.toggleShowCancelModal()
            this.resetValues()
            this.$router.push({
                name: 'taxes',
                params: {
                    type: 'taxgroups'
                }
            });
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>