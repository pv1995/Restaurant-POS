<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="additional-charge-inner bg-white q-mt-md q-ma-xl">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa q-mt-sm">{{this.$route.params.id ? 'Edit Additional Charges' : 'Add Additional Charges'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Additional Charges Details</div>
                    <div class="text-caption text-grey-7 q-pl-md lato">Delivery charges, parcel charges, service charges etc. can be setup as additional charges.</div>
                    <div class="text-caption text-grey-7 q-pl-md lato">Additional charges are applied on top of the discounted subtotal. Also, additional charges can have taxes.</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label style="padding-top:20px">
                                Additional Charge Name
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Additional Charge Name" v-model="additionalChargeName" outlined class="q-mt-sm" :rules="[val => !!val || 'Additional Charge Name is required']" bottom-slots/>
                        </q-item-section>
                        <q-item-section class="q-py-sm">
                            <q-item-label>Additional Charge Type</q-item-label>
                            <q-select outlined v-model="additionalChargeType" :options="additionalChargeTypes" class="q-mt-sm" dense label="Select Additional Charge Type" />
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Additional Charge Value</q-item-label>
                            <q-input dense placeholder="Additional Charge Value" v-model="additionalChargeValue" outlined class="q-mt-sm" type="number"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm">
                            <q-item-label>Select Tax Group</q-item-label>
                            <q-select outlined v-model="taxGroup" :options="taxGroups" class="q-mt-sm" dense label="Select Tax Group" />
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section>
                            <q-checkbox v-model="applyAutomatically" label="Apply Additional Charge Automatically" class="lato" />
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="saveAdditionalCharge" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveAdditionalCharge" v-else/>
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
            additionalChargeTypes: ['cash', 'percentage'],
            taxGroup: '',
            taxGroups: ['GST', 'Service Tax'],
            showCancelModal: false
        }
    },
    created() {
        if(this.$route.params.id) {
            this.$store.dispatch('setup/getAdditionalCharge', this.$route.params.id)
        }
    },
    computed: {
        getAdditionalCharge() {
            return this.$store.getters['setup/getAdditionalCharge']
        },
        additionalChargeName: {
            get() {
                if(this.getAdditionalCharge !== {}) {
                    return this.getAdditionalCharge.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                this.$store.commit('setup/editAdditionalCharge', data)
            }
        },
        additionalChargeType: {
            get() {
                if(this.getAdditionalCharge !== {}) {
                    return this.getAdditionalCharge.type
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'type'
                }
                this.$store.commit('setup/editAdditionalCharge', data)
            }
        },
        additionalChargeValue: {
            get() {
                if(this.getAdditionalCharge !== {}) {
                    return this.getAdditionalCharge.value
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'value'
                }
                this.$store.commit('setup/editAdditionalCharge', data)
            }
        },
        applyAutomatically: {
            get() {
                if(this.getAdditionalCharge !== {}) {
                    return this.getAdditionalCharge.addedAutomatically
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'addedAutomatically'
                }
                this.$store.commit('setup/editAdditionalCharge', data)
            }
        }
    },
    methods: {
        saveAdditionalCharge() {
            var payload = {
                name: this.additionalChargeName,
                type: this.additionalChargeType,
                value: this.additionalChargeValue,
                addedAutomatically: this.applyAutomatically
            }
            this.$store.dispatch('setup/addAdditionalCharge', payload)
        },
        updateAdditionalCharge() {
            var payload = {
                id: this.getAdditionalCharge.id,
                name: this.additionalChargeName,
                type: this.additionalChargeType,
                value: this.additionalChargeValue,
                addedAutomatically: this.applyAutomatically
            }
            this.$store.dispatch('setup/updateAdditionalCharge', payload)
        },
        resetValues() {
            this.$store.commit('setup/resetAdditionalCharge')
        },
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        },
        goBack() {
            this.toggleShowCancelModal()
            this.resetValues();
            this.$router.push({
                name: 'additional-charges'
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>