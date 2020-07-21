<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Taxes</div>
            <q-btn color="primary" label="Add Taxes" icon="add" class="create-order-button" @click="toggleShowTaxes" v-if="tab === 'taxes'"/>
            <q-btn color="primary" label="Add Tax Groups" icon="add" class="create-order-button" @click="toggleShowTaxGroups" v-else/>
        </section>
        <section class="tax-table q-mt-xl bg-white">
            <q-tabs
                v-model="tab"
                dense
                align="left"  
                active-color="secondary"
                indicator-color="secondary"
                >
                <q-tab name="taxes" class="tab-style lato" label="Taxes" />
                <q-tab name="taxgroups" class="tab-style lato" label="Tax Groups" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="taxes">
                    <div class="row">
                        <div class="col-sm-2 q-pa-md">
                            <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown lato" no-caps>
                                <q-list>
                                    <q-item clickable v-for="(opt,i) in getTaxSearchOptions" :key="i" v-close-popup @click="onItemClick(opt.label)">
                                        <q-item-section class="lato">
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
                        <customTable :getAllDetails="getAllTaxes" :withCheckbox="withCheckbox" :headers="getTaxHeaders" :tableType="'tax'" :withRowActions="withRowActions" @edit="toggleEditTax"/> 
                    </div>
                </q-tab-panel>
                <q-tab-panel name="taxgroups">
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="q-pa-md">
                                <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown">
                                    <q-list>
                                        <q-item clickable v-for="(opt,i) in getTaxGroupSearchOptions" :key="i" v-close-popup @click="onItemClick(opt.label)">
                                            <q-item-section>
                                                <q-item-label>{{ opt.label }}</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="q-pa-md">
                                <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                    <template v-slot:append>
                                        <q-icon class="search-icon" name="search" />
                                    </template>
                                </q-input>
                            </div>
                        </div>
                    </div>
                    <div>
                        <customTable :getAllDetails="getAllTaxGroups" :withCheckbox="withCheckbox" :headers="getTaxGroupHeaders" :tableType="'tax-group'" :withRowActions="withRowActions" @edit="toggleEditTaxGroup"/> 
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
            tab: '',
            withCheckbox: true,
            showFilters: false,
            showTaxes: false,
            showTaxGroups: false,
            withRowActions: true,
            selectedTax: null,
            selectedTaxGroup: null,
            label: 'Search By',
            search: ''
        }
    },
    created() {
        this.$store.dispatch('setup/getAllTaxes')
        this.$store.dispatch('setup/getAllTaxGroups');
        if(this.$route.params.type) {
            this.tab = this.$route.params.type
        }
        else {
            this.tab = 'taxes'
        }
    },
    computed: {
        getAllTaxes() {
            return this.$store.getters['setup/getAllTaxes'];
        },
        getAllTaxGroups() {
            return this.$store.getters['setup/getAllTaxGroups'];
        },
        getTaxHeaders() {
            return this.$store.getters['tableHeaders/getTaxHeaders']
        },
        getTaxGroupHeaders() {
            return this.$store.getters['tableHeaders/getTaxGroupHeaders']
        },
        getTaxSearchOptions() {
            return this.$store.getters['tableSearch/getTax'];
        },
        getTaxGroupSearchOptions() {
            return this.$store.getters['tableSearch/getTaxGroup']
        }
    },
    methods: {
        toggleShowTaxes() {
            this.$router.push({
                name: 'tax-inner'
            })
        },
        toggleShowTaxGroups() {
            this.$router.push({
                name: 'tax-group-inner'
            })
        },
        toggleEditTax(val) {
            this.$router.push({
                name: 'tax-inner',
                params: {
                    id: val.name
                }
            })
        },
        toggleEditTaxGroup(val) {
            this.$router.push({
                name: 'tax-group-inner',
                params: {
                    id: val.name
                }
            })
        },
        onItemClick(val) {
            this.label = val;
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>