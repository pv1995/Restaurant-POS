<template>
    <q-page class="q-pa-lg">
        <div v-if="this.getRegister != {}">
            <section class="page-actions">
            
            </section>
            <section class="bg-white register-inner-form q-mt-md q-ma-xl">
                <q-card flat class="modal-card">
                    <q-toolbar>
                        <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                        <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                        <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{this.$route.params.name ? 'Edit Register' : 'Add Register'}}</q-toolbar-title>
                    </q-toolbar>

                    <q-separator />

                    <q-card-section>
                        <div class="text-h6 text-dark q-pl-md comfortaa">Your Register Details</div>
                        <div class="text-caption text-grey-7 q-pl-md lato">Enable receipt printing to print receipts while billing with this register.</div>
                        <div class="text-caption text-grey-7 q-pl-md lato">By default, The shop name will be printed on the receipt.</div>
                    </q-card-section>
                    <q-card-section>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label style="padding-top:20px">
                                    Register Name
                                    <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                                </q-item-label>
                                <q-input dense placeholder="Register Name" v-model="registerName" outlined class="q-mt-sm" :rules="[val => !!val || 'Register Name is required']" bottom-slots/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Receipt Number Prefix</q-item-label>
                                <q-input dense placeholder="Receipt Number Prefix" v-model="receiptNumberPrefix" outlined class="q-mt-sm" />
                            </q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Bill Header</q-item-label>
                                <q-input type="textarea" dense v-model="billHeader" outlined class="q-mt-sm header-textarea" placeholder="Delhi, India. Mob: 9787083812" />
                            </q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Bill Footer</q-item-label>
                                <q-input type="textarea" dense v-model="billFooter" outlined class="q-mt-sm footer-textarea" placeholder="Thank You. Visit Again." />
                            </q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Printer Type</q-item-label>
                                <q-select outlined v-model="printerType" :options="printerTypes" class="q-mt-sm" dense />
                                <q-checkbox v-model="printOrderTicketsReceipts" label="Print Receipts & Order Tickets" dense class="q-mt-sm"/>
                                <q-checkbox v-model="includeShopLogo" label="Include Shop Logo in printed receipts" dense class="q-mt-sm"/>
                            </q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Table Numbers</q-item-label>
                                <q-input type="textarea" dense v-model="tableNumbers" outlined class="q-mt-sm tableno-textarea" placeholder="Eg. 1-6 or 1,2,3,4,5,6" />
                            </q-item-section>
                        </q-item>
                    </q-card-section>
                    <q-card-section>
                        <div class="flex items-center justify-center">
                            <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                            <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateRegister" v-if="this.$route.params.name"/>
                            <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveRegister" v-else/>
                        </div>
                    </q-card-section>
                </q-card>
            </section>
        </div>
        <div v-else>
            <q-spinner-oval color="secondary" />
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
            printerTypes: ['3 inch receipt','2 inch receipt','A4 size','A5 size'], 
            printOrderTicketsReceipts: true,
            includeShopLogo: false,
            tableNumbers: '',
            showCancelModal: false
        }
    },
    created() {
        if(this.$route.params.name) {
            var payload = this.$route.params.name
            this.$store.dispatch('setup/getRegister', payload)
        }
        console.log(this.$route)
    },
    computed: {
        getRegister() {
            return this.$store.getters['setup/getRegister']
        },
        registerName: {
            get() {
                if(this.getRegister !== {}) {
                    return this.getRegister.name
                }
                return ''
            },
            set(payload) {
                console.log(payload);
                var data = {
                    info: payload,
                    type: 'name'
                }
                return this.$store.commit('setup/editRegister', data)
            }
        },
        receiptNumberPrefix: {
            get() {
                if(this.getRegister !== {}) {
                    return this.getRegister.receiptNumberPrefix
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'receiptNumberPrefix'
                }
                return this.$store.commit('setup/editRegister', data)
            }
        },
        billHeader: {
            get() {
                if(this.getRegister !== {}) {
                    return this.getRegister.billHeader
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'billHeader'
                }
                return this.$store.commit('setup/editRegister', data)
            }
        },
        billFooter: {
            get() {
                if(this.getRegister !== {}) {
                    return this.getRegister.billFooter
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'billFooter'
                }
                return this.$store.commit('setup/editRegister', data)
            }
        },
        printerType: {
            get() {
                if(this.getRegister !== {}) {
                    return this.getRegister.printerType
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'printerType'
                }
                return this.$store.commit('setup/editRegister', data)
            }
        }
    },
    methods: {
        closeModal() {
            this.$store.commit('setup/resetRegisterValues')
        },
        saveRegister() {
            var payload = {
                name: this.registerName,
                receiptNumberPrefix: this.receiptNumberPrefix,
                billHeader: this.billHeader,
                billFooter: this.billFooter,
                printerType: this.printerType
            }
            this.$store.dispatch('setup/addRegister', payload)
        },
        updateRegister() {
            var payload = {
                id: this.getRegister.id,
                name: this.registerName,
                receiptNumberPrefix: this.receiptNumberPrefix,
                billHeader: this.billHeader,
                billFooter: this.billFooter,
                printerType: this.printerType
            }
            this.$store.dispatch('setup/updateRegister', payload)
        },
        resetValues() {
            this.$store.commit('setup/resetRegisterValues');
        },
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        },
        goBack() {
            this.showCancelModal = !this.showCancelModal
            this.resetValues();
            this.$router.push('/registers')
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>