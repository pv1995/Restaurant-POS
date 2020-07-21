<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="addon-group-inner bg-white q-mt-md q-ma-xl">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{this.$route.params.id ? 'Edit Add-on Group' : 'Add Add-on Group'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label style="padding-top:20px">
                                Add-On Group Name
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Add On Name" v-model="addonGroupName" outlined class="q-mt-sm" :rules="[val => !!val || 'Add-on Group Name is required']" bottom-slots/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Price</q-item-label>
                            <q-input dense placeholder="Add-on Price" v-model="addonGroupPrice" outlined class="q-mt-sm" type="number"/>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Minimum Add-Ons</q-item-label>
                            <q-input dense placeholder="Min Add-Ons" v-model="minaddOns" outlined class="q-mt-sm" type="number"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Maximum Add-Ons</q-item-label>
                            <q-input dense placeholder="Max Add-Ons" v-model="maxaddOns" outlined class="q-mt-sm" type="number"/>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Select Add-ons</q-item-label>
                            <q-select outlined v-model="addons" :options="getAllAddOns" class="q-mt-sm" dense label="Select Category" multiple emit-value map-options/>
                        </q-item-section>
                    </q-item>
                    <!-- <div v-if="this.addons.length > 0">
                        <div class="flex q-ml-md">
                            <q-badge outline color="primary" v-for="addon in addons" :key="addon" :label="addon.label" class="q-mr-sm lato"/>
                        </div>
                    </div> -->
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateAddOnGroup" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveAddOnGroup" v-else/>
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
            addonGroupPrice: '',
            showCancelModal: false
        }
    },
    created() {
        if(this.$route.params.id) {
            this.$store.dispatch('setup/getAddOnGroup', this.$route.params.id)
        }
    },
    computed: {
        getAddOns() {
            return this.$store.getters['setup/getAllAddOns'];
        },
        getAllAddOns() {
            return this.getAddOns.map(addon => {
                return {
                    label: addon.name,
                    value: addon.id
                }
            })
        },
        getSelectedAddOns() {
            return this.addons.map(addon => {
                return addon.value
            })
        },
        getAddOnGroup() {
            return this.$store.getters['setup/getAddOnGroup']
        },
        addonGroupName: {
            get() {
                if(this.getAddOnGroup !== {}) {
                    return this.getAddOnGroup.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                return this.$store.commit('setup/editAddOnGroup', data)
            }
        },
        minaddOns: {
            get() {
                if(this.getAddOnGroup !== {}) {
                    return this.getAddOnGroup.minSelectable
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'minSelectable'
                }
                return this.$store.commit('setup/editAddOnGroup', data)
            }
        },
        maxaddOns: {
            get() {
                if(this.getAddOnGroup !== {}) {
                    return this.getAddOnGroup.maxSelectable
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'maxSelectable'
                }
                return this.$store.commit('setup/editAddOnGroup', data)
            }
        },
        addons: {
            get() {
                if(this.getAddOnGroup !== {}) {
                    return this.getAddOnGroup.addOnIds
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'addOnIds'
                }
                return this.$store.commit('setup/editAddOnGroup', data)
            }
        }
    },
    methods: {
        saveAddOnGroup() {
            var payload = {
                name: this.addonGroupName,
                price: this.addonGroupPrice,
                minSelectable: parseInt(this.minaddOns),
                maxSelectable: parseInt(this.maxaddOns),
                addons: this.addons
            }
            this.$store.dispatch('setup/addAddOnGroup', payload)
        },
        updateAddOnGroup() {
            var payload = {
                id: this.getAddOnGroup.id,
                name: this.addonGroupName,
                price: this.addonGroupPrice,
                minSelectable: parseInt(this.minaddOns),
                maxSelectable: parseInt(this.maxaddOns),
                addons: this.addons
            }
            this.$store.dispatch('setup/updateAddOnGroup', payload)
        },
        resetValues() {
            this.$store.commit('setup/resetAddOnGroup')
        },
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        },
        goBack() {
            this.toggleShowCancelModal()
            this.resetValues()
            this.$router.push({
                name: 'menu-item-options',
                params: {
                    type: 'addongroups'
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>