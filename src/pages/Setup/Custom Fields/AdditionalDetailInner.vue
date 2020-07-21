<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="additional-detail-inner bg-white q-mt-md q-ma-xl">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{this.$route.params.id ? 'Edit Additional Details' : 'Add Additional Details'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Additional Details</div>
                    <div class="text-caption text-grey-7 q-pl-md lato">With additional details and tags you can capture more customer and sales data.</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label style="padding-top:20px">
                                Additonal Detail Name
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Additional Detail Name" v-model="additionalDetailName" outlined class="q-mt-sm" :rules="[val => !!val || 'Additional Detail Name is required']" bottom-slots/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Additional Detail Type</q-item-label>
                            <q-select outlined v-model="additionalDetailType" :options="additionalDetailTypes" class="q-mt-sm" dense label="Select Additional Detail Type"/>
                        </q-item-section>
                    </q-item>
                    <q-item class="no-padding q-ml-sm">
                        <q-item-section class="lato">
                            <q-checkbox v-model="printOnReceipts" label="Print On Receipts" class=""/>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateAdditionalDetail" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveAdditionalDetail" v-else/>
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
            additionalDetailTypes: ['Sale Data', 'Customer Data'],
            showCancelModal: false
        }
    },
    created() {
        if(this.$route.params.id) {
            var payload = {
                info: this.$route.params.id,
                type: 'additionalDetail'
            }
            this.$store.dispatch('setup/getAdditionalDetail', payload)
        }
    },
    computed: {
        getAdditionalDetail() {
            return this.$store.getters['setup/getAdditionalDetail']
        },
        additionalDetailName: {
            get() {
                if(this.getAdditionalDetail !== {}) {
                    return this.getAdditionalDetail.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                return this.$store.commit('setup/editAdditionalDetail', data)
            }
        },
        additionalDetailType: {
            get() {
                if(this.getAdditionalDetail !== {}) {
                    return this.getAdditionalDetail.additionalDetailType
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'additionalDetailType'
                }
                return this.$store.commit('setup/editAdditionalDetail', data)
            }
        },
        printOnReceipts: {
            get() {
                if(this.getAdditionalDetail !== {}) {
                    return this.getAdditionalDetail.toBePrinted
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'toBePrinted'
                }
                return this.$store.commit('setup/editAdditionalDetail', data)
            }
        }
    },
    methods: {
        saveAdditionalDetail() {
            var payload = {
                name: this.additionalDetailName,
                additionalDetailType: this.additionalDetailType,
                toBePrinted: this.printOnReceipts,
                type: 'Additional Detail'
            }
            this.$store.dispatch('setup/addAdditionalDetail', payload)
        },
        updateAdditionalDetail() {
            var payload = {
                id: this.additionalDetail.id,
                name: this.additionalDetailName,
                additionalDetailType: this.additionalDetailType,
                toBePrinted: this.printOnReceipts,
                type: 'Additional Detail'
            }
            this.$store.dispatch('setup/updateAdditionalDetail', payload)
        },
        resetValues() {
            this.$store.commit('setup/resetAdditionalDetail')
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
                    type: 'additional-details'
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>