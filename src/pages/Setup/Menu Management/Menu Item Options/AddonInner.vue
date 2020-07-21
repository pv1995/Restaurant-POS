<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="addon-inner bg-white q-mt-md q-ma-xl">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{this.$route.params.id ? 'Edit Add On' : 'Add Add On'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />

                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>
                                Add-on Name
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Add-on Name" v-model="addOnName" outlined class="q-mt-sm" :rules="[val => !!val || 'Add-on Name is required']" bottom-slots/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>
                                Price
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Add-on Price" v-model="addOnPrice" outlined class="q-mt-sm" type="number" :rules="[val => !!val || 'Add-on Price is required']" bottom-slots/>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Select Add-on Category</q-item-label>
                            <q-select outlined v-model="category" :options="getAddOnGroups" class="q-mt-sm" dense label="Select Category" emit-value map-options/>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateAddOn" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveAddOn" v-else/>
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
            category: '',
            showCancelModal: false
        }
    },
    created() {
        if(this.$route.params.id) {
            this.$store.dispatch('setup/getAddOn', this.$route.params.id)
        }
    },
    computed: {
        getAddOn() {
            return this.$store.getters['setup/getAddOn']
        },
        addOnCategories() {
            return this.$store.getters['setup/getAllAddOnGroups']
        },
        getAddOnGroups() {
            return this.addOnCategories.map(cat => {
                return {
                    label: cat.name,
                    value: cat.id
                }
            })
        },
        addOnName: {
            get() {
                if(this.getAddOn !== {}) {
                    return this.getAddOn.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                return this.$store.commit('setup/editAddOn', data)
            }
        },
        addOnPrice: {
            get() {
                if(this.getAddOn !== {}) {
                    return this.getAddOn.price
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'price'
                }
                return this.$store.commit('setup/editAddOn', data)
            }
        }
    },
    methods: {
        saveAddOn() {
            var payload = {
                name: this.addOnName,
                price: this.addOnPrice
            }
            this.$store.dispatch('setup/addAddOn', payload)
        },
        updateAddOn() {
            var payload = {
                id: this.getAddOn.id,
                name: this.addOnName,
                price: this.addOnPrice
            }
            this.$store.dispatch('setup/updateAddOn', payload)
        },
        resetValues() {
            this.$store.commit('setup/resetAddOn')
        },
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        },
        goBack() {
            this.toggleShowCancelModal()
            this.resetValues();
            this.$router.push({
                name: 'menu-item-options',
                params: {
                    type: 'addons'
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>