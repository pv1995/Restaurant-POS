<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="tax-inner bg-white q-mt-md q-ma-xl">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{this.$route.params.id ? 'Edit Tax' : 'Create Tax'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Tax Details</div>
                    <div class="text-caption text-grey-7 q-pl-md lato">Create separate taxes for different tax rates and types.</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>
                                Tax Name
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Tax Name" v-model="taxName" outlined class="q-mt-sm" :rules="[val => !!val || 'Tax Name is required']" bottom-slots/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>
                                Tax Percentage
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Tax Percentage" v-model="taxPercentage" outlined class="q-mt-sm" type="number" :rules="[val => !!val || 'Tax Percentage is required']" bottom-slots/>
                        </q-item-section>
                    </q-item>
                    <!-- <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Select Tax Group</q-item-label>
                            <q-select outlined v-model="taxGroup" :options="getAllTaxGroups" class="q-mt-sm" dense label="Select Tax Group" />
                        </q-item-section>
                    </q-item> -->
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateTax" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveTax" v-else/>
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
            taxGroup: '',
            showCancelModal: false
        }
    },
    created() {
        if(this.$route.params.id) {
            this.$store.dispatch('setup/getTax', this.$route.params.id)
        }
    },
    computed: {
        getAllTaxGroups() {
            return this.taxGroupOptions.map(opt => {
                return {
                    label: opt.name,
                    value: opt.id
                }
            })
        },
        getTax() {
            return this.$store.getters['setup/getTax']
        },
        taxName: {
            get() {
                if(this.getTax !== {}) {
                    return this.getTax.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                this.$store.commit('setup/editTax', data)
            }
        },
        taxPercentage: {
            get() {
                if(this.getTax !== {}) {
                    return this.getTax.percentage
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'percentage'
                }
                this.$store.commit('setup/editTax', data)
            }
        }
    },
    methods: {
        saveTax() {
            var payload = {
                name: this.taxName,
                percentage: parseInt(this.taxPercentage)
            }
            this.$store.dispatch('setup/addTax', payload)
        },
        updateTax() {
            var payload = {
                id: this.getTax.id,
                name: this.taxName,
                percentage: parseInt(this.taxPercentage)
            }
            this.$store.dispatch('setup/updateTax', payload)
        },
        resetValues() {
            this.$store.commit('setup/resetTax');
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
                    type: 'taxes'
                }
            });
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>