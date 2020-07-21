<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Menu Item Options</div>
            <q-btn color="primary" label="Add Combo Group" icon="add" class="create-order-button lato" @click="toggleShowComboGroup" v-if="tab=== 'menucombogroups'"/>
            <q-btn color="primary" label="Add Addons" icon="add" class="create-order-button lato" @click="toggleAddOn" v-else-if="tab === 'addons'" />
            <q-btn color="primary" label="Add Addon Group" icon="add" class="create-order-button lato" @click="toggleShowAddOnGroup" v-else-if="tab === 'addongroups'" />
            <q-btn color="primary" label="Add Variant" icon="add" class="create-order-button lato" @click="toggleShowVariant" v-else-if="tab === 'variant'" />
            <q-btn color="primary" label="Add Variant Group" icon="add" class="create-order-button lato" @click="toggleShowVariantGroup" v-else />
        </section>
        <section class="analytics-graphics q-mt-lg">
            <div class="flex justify-center items-center">
                <q-card class="bg-accent q-mx-sm" style="width:250px;height:250px" flat>
                </q-card>
                <q-card class="bg-accent q-mx-sm" style="width:250px;height:250px" flat>
                </q-card>
            </div>
        </section>
        <section class="register-table q-mt-xl bg-white">
            <q-tabs
                v-model="tab"
                dense
                align="left"  
                active-color="secondary"
                indicator-color="secondary"
                >
                <q-tab name="menucombogroups" class="tab-style lato" label="Menu Combo Groups" />
                <q-tab name="addons" class="tab-style lato" label="Add Ons" />
                <q-tab name="addongroups" class="tab-style lato" label="Add On Groups" />
                <q-tab name="variant" class="tab-style lato" label="Variant" />
                <q-tab name="variantgroups" class="tab-style lato" label="Variant Groups" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="menucombogroups">
                    <div class="row">
                        <div class="col-sm-2 q-pa-md">
                            <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown" no-caps>
                                <q-list>
                                    <q-item clickable v-for="(opt,i) in getAddOnSearchOptions" :key="i" v-close-popup @click="onItemClick(opt.label)">
                                        <q-item-section>
                                            <q-item-label>{{ opt.label }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-btn-dropdown>
                        </div>
                        <div class="col-md-3 q-pa-md">
                            <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                <template v-slot:append>
                                    <q-icon class="search-icon" name="search" />
                                </template>
                            </q-input>
                        </div>
                    </div>
                    <div>
                        <customTable :getAllDetails="getComboGroups" :withCheckbox="withCheckbox" :withRowActions="withRowActions" :headers="getAddOnHeaders" @edit="toggleEditMenuComboGroup"/> 
                    </div>
                </q-tab-panel>

                <q-tab-panel name="addons">
                    <div class="row">
                        <div class="col-sm-2 q-pa-md">
                            <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown" no-caps>
                                <q-list>
                                    <q-item clickable v-for="(opt,i) in getAddOnSearchOptions" :key="i" v-close-popup @click="onItemClick(opt.label)">
                                        <q-item-section>
                                            <q-item-label>{{ opt.label }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-btn-dropdown>
                        </div>
                        <div class="col-md-3 q-pa-md">
                            <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                <template v-slot:append>
                                    <q-icon class="search-icon" name="search" />
                                </template>
                            </q-input>
                        </div>
                    </div>
                    <div>
                        <customTable :getAllDetails="getAllAddOns" :withCheckbox="withCheckbox" :headers="getAddOnHeaders" :tableType="'addon'" :withRowActions="withRowActions" @edit="toggleEditAddons"/> 
                    </div>
                </q-tab-panel>

                <q-tab-panel name="addongroups">
                    <div class="row">
                        <div class="col-sm-2">
                            <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown" no-caps>
                                <q-list>
                                    <q-item clickable v-for="(opt,i) in getAddOnGroupSearchOptions" :key="i" v-close-popup @click="onItemClick(opt.label)">
                                        <q-item-section>
                                            <q-item-label>{{ opt.label }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-btn-dropdown>
                        </div>
                        <div class="col-md-3 q-pa-md">
                            <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                <template v-slot:append>
                                    <q-icon class="search-icon" name="search" />
                                </template>
                            </q-input>
                        </div>
                    </div>
                    <div>
                        <customTable :getAllDetails="getAllAddOnGroups" :withCheckbox="withCheckbox" :headers="getAddOnGroupHeaders" :tableType="'addon-group'" :withRowActions="withRowActions" @edit="toggleEditAddOnGroup"/> 
                    </div>
                </q-tab-panel>

                <q-tab-panel name="variant">
                    <div class="row">
                        <div class="col-sm-2 q-pa-md">
                            <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown" no-caps>
                                <q-list>
                                    <q-item clickable v-for="(opt,i) in getVariantSearchOptions" :key="i" v-close-popup @click="onItemClick(opt.label)">
                                        <q-item-section>
                                            <q-item-label>{{ opt.label }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-btn-dropdown>
                        </div>
                        <div class="col-md-3 q-pa-md">
                            <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                <template v-slot:append>
                                    <q-icon class="search-icon" name="search" />
                                </template>
                            </q-input>
                        </div>
                    </div>
                    <div>
                        <customTable :getAllDetails="getAllVariants" :withCheckbox="withCheckbox" :headers="getVariantHeaders" :tableType="'variant'" :withRowActions="withRowActions" @edit="toggleEditVariant"/> 
                    </div>
                </q-tab-panel>
                
                <q-tab-panel name="variantgroups">
                    <div class="row">
                        <div class="col-sm-2 q-pa-md">
                            <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown" no-caps>
                                <q-list>
                                    <q-item clickable v-for="(opt,i) in getVariantGroupSearchOptions" :key="i" v-close-popup @click="onItemClick(opt.label)">
                                        <q-item-section>
                                            <q-item-label>{{ opt.label }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-btn-dropdown>
                        </div>
                        <div class="col-md-3 q-pa-md">
                            <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                <template v-slot:append>
                                    <q-icon class="search-icon" name="search" />
                                </template>
                            </q-input>
                        </div>
                    </div>
                    <div>
                        <customTable :getAllDetails="getAllVariantGroups" :withCheckbox="withCheckbox" :headers="getVariantGroupHeaders" :tableType="'variant-group'" :withRowActions="withRowActions" @edit="toggleEditVariantGroup"/> 
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </section>
    </q-page>
</template>
<script>
import customTable from 'src/components/table.vue';

export default {
    components: {
        customTable
    },
    data() {
        return {
            showAddComboGroup: false,
            withCheckbox: true,
            showFilters: false,
            tab: '',
            showAddOn: false,
            showAddOnGroup: false,
            showAddVariant: false,
            showAddVariantGroup: false,
            withRowActions: true,
            selectedAddOn: null,
            selectedAddOnGroup: null,
            selectedVariant: null,
            selectedVariantGroup: null,
            label: 'Search By',
            search: ''
        }
    },
    created() {
        this.$store.dispatch('setup/getAllAddOns');
        this.$store.dispatch('setup/getAllAddOnGroups')
        this.$store.dispatch('setup/getAllVariants')
        this.$store.dispatch('setup/getAllVariantGroups')
        if(this.$route.params.type) {
            this.tab = this.$route.params.type
        }
        else {
            this.tab = 'addons'
        }
    },
    computed: {
        getComboGroups() {
            return this.$store.getters['menu/getComboGroups'];
        },
        getAllAddOns() {
            return this.$store.getters['setup/getAllAddOns']
        },
        getAllAddOnGroups() {
            return this.$store.getters['setup/getAllAddOnGroups']
        },
        getAllVariants() {
            return this.$store.getters['setup/getAllVariants']
        },
        getAllVariantGroups() {
            return this.$store.getters['setup/getAllVariantGroups'];
        },
        getAddOnHeaders() {
            return this.$store.getters['tableHeaders/getAddOnHeaders']
        },
        getAddOnGroupHeaders() {
            return this.$store.getters['tableHeaders/getAddOnGroupHeaders']
        },
        getVariantHeaders() {
            return this.$store.getters['tableHeaders/getVariantHeaders']
        },
        getVariantGroupHeaders() {
            return this.$store.getters['tableHeaders/getVariantGroupHeaders']
        },
        getAddOnSearchOptions() {
            return this.$store.getters['tableSearch/getAddOn'];
        },
        getAddOnGroupSearchOptions() {
            return this.$store.getters['tableSearch/getAddOnGroup'];
        },
        getVariantSearchOptions() {
            return this.$store.getters['tableSearch/getVariant'];
        },
        getVariantGroupSearchOptions() {
            return this.$store.getters['tableSearch/getVariantGroup']
        }
    },
    methods: {
        toggleShowComboGroup() {
            this.$router.push({
                name: 'menu-combo-group'
            })
        },
        toggleAddOn() {
            this.$router.push({
                name: 'addon-inner'
            })
        },
        toggleShowAddOnGroup() {
            this.$router.push({
                name: 'addon-group-inner'
            })
        },
        toggleShowVariant() {
            this.$router.push({
                name: 'variant-inner'
            })
        },
        toggleShowVariantGroup() {
            this.$router.push({
                name: 'variant-group-inner'
            })
        },
        toggleEditAddons(val) {
            this.$router.push({
                name: 'addon-inner',
                params: {
                    id: val.name
                }
            })
        },
        toggleEditAddOnGroup(val) {
            this.$router.push({
                name: 'addon-group-inner',
                params: {
                    id: val.name
                }
            })
        },
        toggleEditVariant(val) {
            this.$router.push({
                name: 'variant-inner',
                params: {
                    id: val.name
                }
            })
        },
        toggleEditVariantGroup(val) {
            this.$router.push({
                name: 'variant-group-inner',
                params: {
                    id: val.name
                }
            })
        },
        toggleEditMenuComboGroup(val) {
            this.$router.push({
                name: 'menu-combo-group',
                params: {
                    id: val.name
                }
            })
        },
        onItemClick(val) {
            this.label = val
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>