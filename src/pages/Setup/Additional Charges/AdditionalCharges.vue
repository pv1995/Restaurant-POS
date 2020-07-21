<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Additional Charges</div>
            <q-btn color="primary" label="Add Additional Charges" icon="add" class="create-order-button lato" @click="toggleShowAdditionalCharges"/>
        </section>
        <section class="discount-table q-mt-xl bg-white" v-if="getAdditionalCharges">
            <div class="row">
                <div class="col-sm-2 q-pa-md">
                    <q-btn-dropdown outline size='md' color='grey-8' label='Search By' class="search-dropdown lato" no-caps>
                        <q-list>
                            <q-item clickable v-for="(opt,i) in getSearchOptions" :key="i" v-close-popup @click="onItemClick(opt.label)">
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
            <customTable :getAllDetails="getAdditionalCharges" :withCheckbox="withCheckbox" :headers="getAdditionalChargeHeaders" :tableType="'additional-charge'" :withRowActions="withRowActions" @edit="toggleEditAdditionalCharge"/>
        </section>
    </q-page>
</template>
<script>
import customTable from 'src/components/table.vue'

export default {
    components: {
        customTable
    },
    data() {
        return {
            showAdditionalCharges: false,
            withCheckbox: true,
            showFilters: false,
            withRowActions: true,
            selectedAdditionalCharge: null,
            label: 'Search By',
            search: ''
        }
    },
    created() {
        this.$store.dispatch('setup/getAllAdditionalCharges');
    },
    computed: {
        getAdditionalCharges() {
            return this.$store.getters['setup/getAllAdditionalCharges']
        },
        getAdditionalChargeHeaders() {
            return this.$store.getters['tableHeaders/getAdditionalChargeHeaders']
        },
        getSearchOptions() {
            return this.$store.getters['tableSearch/getAdditionalCharge']
        }
    },
    methods: {
        toggleShowAdditionalCharges() {
            this.$router.push({
                name: 'additional-charge-inner'
            })
        },
        toggleEditAdditionalCharge(val) {
            this.$router.push({
                name: 'additional-charge-inner',
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