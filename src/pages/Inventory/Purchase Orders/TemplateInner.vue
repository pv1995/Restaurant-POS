<template>
    <q-page class="q-pa-xl">
        <div v-if="getMerchant && getUserData && getTemplate">
            <section class="page-actions">
            
            </section>
            <section class="template-inner bg-white q-mt-md q-ma-lg">
                <q-card flat class="modal-card">
                    <q-toolbar>
                        <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                        <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                        <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa q-mt-sm">{{this.$route.params.id ? 'Edit Template' : 'Add New Template'}}</q-toolbar-title>
                    </q-toolbar>

                    <q-separator />
                    <q-card-section>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label class="text-body1 text-dark lato">
                                    Template Name
                                    <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                                </q-item-label>
                                <q-input dense placeholder="Template Name" v-model="templateName" outlined class="q-mt-sm"/>
                            </q-item-section>
                        </q-item>
                        <div class="text-body1 text-dark lato q-pl-md q-mt-md">Company Details</div>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>City</q-item-label>
                                <q-item-label class="text-dark lato" caption>{{getMerchant.city}}</q-item-label>
                                <!-- <q-select outlined v-model="city" :options="cities" class="q-mt-sm" dense label="Select City"/> -->
                            </q-item-section>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Select Branch</q-item-label>
                                <q-item-label class="text-dark lato" caption>{{getMerchant.branch}}</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label class="lato">Requisitioner Name</q-item-label>
                                <q-item-label class="text-dark lato" caption>{{getUserData.fullName}}</q-item-label>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label class="lato">Requisitioner Designation</q-item-label>
                                <q-item-label class="text-dark lato" caption>{{getUserData.jobDescription}}</q-item-label>
                            </q-item-section>
                        </q-item>
                        <div class="text-body1 text-dark lato q-pl-md q-mt-md">Vendor Details</div>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Company Name</q-item-label>
                                <q-input dense placeholder="Company Name" v-model="vendorName" outlined class="q-mt-sm"/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Department</q-item-label>
                                <q-input dense placeholder="Department" v-model="vendorDepartment" outlined class="q-mt-sm"/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Email</q-item-label>
                                <q-input dense placeholder="Email" v-model="vendorEmail" outlined class="q-mt-sm"/>
                            </q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Phone</q-item-label>
                                <q-input dense placeholder="Phone" v-model="vendorPhone" outlined class="q-mt-sm"/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Fax</q-item-label>
                                <q-input dense placeholder="Fax" v-model="vendorFax" outlined class="q-mt-sm"/>
                            </q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Address</q-item-label>
                                <q-input dense placeholder="Bulding name or address" v-model="vendorAddress" outlined class="q-mt-sm"/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>City</q-item-label>
                                <q-input dense placeholder="City" v-model="vendorCity" outlined class="q-mt-sm"/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Pincode</q-item-label>
                                <q-input dense placeholder="Pincode" v-model="vendorPincode" outlined class="q-mt-sm"/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Landmark</q-item-label>
                                <q-input dense placeholder="Landmark" v-model="vendorLandmark" outlined class="q-mt-sm"/>
                            </q-item-section>
                        </q-item>
                        <div class="text-body1 text-dark lato q-pl-md q-mt-md">Shipping Details</div>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Department</q-item-label>
                                <q-input dense placeholder="Department" v-model="shippingDepartment" outlined class="q-mt-sm"/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Phone</q-item-label>
                                <q-input dense placeholder="Phone" v-model="shippingPhone" outlined class="q-mt-sm"/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Email</q-item-label>
                                <q-input dense placeholder="Email" v-model="shippingEmail" outlined class="q-mt-sm"/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Fax</q-item-label>
                                <q-input dense placeholder="Fax" v-model="shippingFax" outlined class="q-mt-sm"/>
                            </q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Address</q-item-label>
                                <q-input dense placeholder="Bulding name or address" v-model="shippingAddress" outlined class="q-mt-sm"/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>City</q-item-label>
                                <q-input dense placeholder="City" v-model="shippingCity" outlined class="q-mt-sm"/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Pincode</q-item-label>
                                <q-input dense placeholder="Pincode" v-model="shippingPincode" outlined class="q-mt-sm"/>
                            </q-item-section>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Landmark</q-item-label>
                                <q-input dense placeholder="Landmark" v-model="shippingLandmark" outlined class="q-mt-sm"/>
                            </q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section class="q-py-sm lato">
                                <q-item-label>Shipping Notes</q-item-label>
                                <q-input placeholder="Shipping Notes" v-model="shippingNotes" outlined class="q-mt-sm" type="placeholder" />
                            </q-item-section>
                        </q-item>
                    </q-card-section>
                    <q-card-section>
                        <div class="flex items-center justify-center">
                            <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                            <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateNewTemplate" v-if="this.$route.params.id"/>
                            <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveNewTemplate" v-else/>
                        </div>
                    </q-card-section>
                </q-card>
            </section>
        </div>
        <div v-else class="flex flex-center loader-div-height">
            <q-spinner-oval color="secondary" size="xl"/>
        </div>
        <cancel-modal :open="showCancelModal" :close="toggleShowCancelModal" @back="goBack" />
    </q-page>
</template>
<script>
import cancelModal from 'src/components/modals/cancelModal.vue'

export default {
    components: {
        "cancel-modal" : cancelModal
    },
    data() {
        return {
            branches: ['Sec-29, Gurugram', '100 ft Road, Indiranagar', 'Powai', 'M Block Market, GK-II'],
            branch: '',
            showCancelModal: false
        }
    },
    created() {
        if(this.$route.params.id) {
            this.$store.dispatch('inventory/getTemplate');
        }
        this.$store.dispatch('login/getMerchantDetails')
        this.$store.dispatch('login/getCurrentEmployee')
    },
    computed: {
        getUserData() {
            return this.$store.getters['login/getUserData'];
        },
        getTemplate() {
            return this.$store.getters['inventory/getTemplate']
        },
        getMerchant() {
            return this.$store.getters['login/getMerchant'];
        },
        templateName: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        vendorName: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.vendorName
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'vendorName'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        vendorDepartment: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.vendorDepartment
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'vendorDepartment'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        vendorPhone: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.vendorPhone
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'vendorPhone'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        vendorEmail: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.vendorEmail
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'vendorEmail'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        vendorFax: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.vendorFax
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'vendorFax'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        vendorAddress: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.vendorAddress
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'vendorAddress'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        vendorCity: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.vendorCity
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'vendorCity'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        vendorPincode: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.vendorPincode
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'vendorPincode'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        vendorLandmark: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.vendorLandmark
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'vendorLandmark'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        shippingDepartment: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.shippingDepartment
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'shippingDepartment'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        shippingPhone: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.shippingPhone
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'shippingPhone'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        shippingEmail: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.shippingEmail
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'shippingEmail'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        shippingFax: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.shippingFax
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'shippingFax'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        shippingAddress: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.shippingAddress
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'shippingAddress'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        shippingCity: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.shippingCity
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'shippingCity'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        shippingPincode: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.shippingPincode
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'shippingPincode'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        shippingLandmark: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.shippingLandmark
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'shippingLandmark'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        },
        shippingNotes: {
            get() {
                if(this.getTemplate !== {}) {
                    return this.getTemplate.shippingInfoText
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'shippingInfoText'
                }
                return this.$store.commit('inventory/editTemplate', data)
            }
        }
    },
    methods: {
        saveNewTemplate() {
            var payload = {
                name: this.templateName,
                merchantCity: this.getMerchant.city,
                merchantBranch: this.getMerchant.branch,
                reqEmail: this.getUserData.email,
                reqDesignation: this.getUserData.roleType,
                vendorName: this.vendorName,
                vendorDepartment: this.vendorDepartment,
                vendorEmail: this.vendorEmail,
                vendorPhone: this.vendorPhone,
                vendorFax: this.vendorFax,
                vendorAddress: this.vendorAddress,
                vendorCity: this.vendorCity,
                vendorPincode: this.vendorPincode,
                vendorLandmark: this.vendorLandmark,
                shippingDepartment: this.shippingDepartment,
                shippingPhone: this.shippingPhone,
                shippingEmail: this.shippingEmail,
                shippingFax: this.shippingFax,
                shippingAddress: this.shippingAddress,
                shippingCity: this.shippingCity,
                shippingPincode: this.shippingPincode,
                shippingLandmark: this.shippingLandmark,
                shippingTermLink: 'sample link 1',
                shippingInfoText: this.shippingNotes
            }
            console.log(payload)
            this.$store.dispatch('inventory/addTemplate', payload)
        },
        resetValues() {
            this.$store.dispatch('inventory/resetTemplate')
        },
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        },
        goBack() {
            this.toggleShowCancelModal()
            // this.resetValues()
            this.$router.push({
                name: 'purchase-orders'
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>