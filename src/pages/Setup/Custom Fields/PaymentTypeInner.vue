<template>
    <q-page class="q-pa-lg" v-if="getPaymentType">
        <section class="page-actions">
            
        </section>
        <section class="payment-type-inner bg-white q-mt-md q-ma-xl">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{this.$route.params.id ? 'Edit Payment Type' : 'Add Payment Type'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Payment Type Details</div>
                    <div class="text-caption text-grey-7 q-pl-md lato">Create a new payment type. Default payment types are Card, Cash & Others.</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label style="padding-top:20px">
                                Payment Type Name
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Payment Type Name" v-model="name" outlined class="q-mt-sm" :rules="[val => !!val || 'Payment Type Name is required']" bottom-slots/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Payment Description (Optional)</q-item-label>
                            <q-input dense placeholder="Payment Description (Optional)" v-model="description" outlined class="q-mt-sm" />
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updatePaymentType" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="savePaymentType" v-else/>
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
            var payload = {
                info: this.$route.params.id,
                type: 'paymentType'
            }
            this.$store.dispatch('setup/getCustomField', payload)
        }
    },
    computed: {
        getPaymentType() {
            return this.$store.getters['setup/getPaymentType']
        },
        name: {
            get() {
                if(this.getPaymentType !== {}) {
                    return this.getPaymentType.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                return this.$store.commit('setup/editPaymentType', data)
            }
        },
        description: {
            get() {
                if(this.getPaymentType !== {}) {
                    return this.getPaymentType.description
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'description'
                }
                return this.$store.commit('setup/editPaymentType', data)
            }
        }
    },
    methods: {
        savePaymentType() {
            var payload = {
                paymentName: this.name,
                paymentDescription: this.paymentDescription
            }
            this.$store.dispatch('setup/addPaymentType', payload);
        },
        updatePaymentType() {
            var payload = {
                id: this.getPaymentType.id,
                paymentName: this.name,
                paymentDescription: this.paymentDescription
            }
            this.$store.dispatch('setup/updatePaymentType', payload);
        },
        resetValues() {
            this.$store.commit('setup/resetPaymentType')
        },
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        },
        goBack() {
            this.toggleShowCancelModal()
            this.resetValues();
            this.$router.push({
                name: 'custom-fields',
                params: {
                    type: 'payment-type'
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>