<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Discount Rules</div>
            <q-btn color="primary" label="Add Discount Rule" icon="add" class="create-order-button lato" @click="toggleShowDiscountRule"/>
        </section>
        <section class="discount-table q-mt-xl bg-white">
            <div class="row">
                <div class="col-sm-2">
                    <div class="q-pa-md">
                        <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown lato" no-caps>
                            <q-list>
                                <q-item clickable v-for="(opt,i) in getDiscountRuleSearchOptions" :key="i" v-close-popup @click="onItemClick(opt.label)">
                                    <q-item-section class="lato">
                                        <q-item-label>{{opt.label}}</q-item-label>
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
            <customTable :getAllDetails="getDiscountRules" :withCheckbox="withCheckbox" :headers="getDiscountRuleHeaders" :tableType="'discount-rule'" :withRowActions="withRowActions" @edit="toggleEditDiscountRule"/>
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
            showDiscountRule: false,
            withCheckbox: true,
            showFilters: false,
            withRowActions: true,
            selectedDiscountRule: null,
            label: 'Search By',
            search: ''
        }
    },
    created() {
        this.$store.dispatch('setup/getAllDiscountRules')
    },
    computed: {
        getDiscountRules() {
            return this.$store.getters['setup/getAllDiscountRules']
        },
        getDiscountRuleHeaders() {
            return this.$store.getters['tableHeaders/getDiscountRuleHeaders']
        },
        getDiscountRuleSearchOptions() {
            return this.$store.getters['tableSearch/getDiscountRule']
        }
    },
    methods: {
        toggleShowDiscountRule() {
            this.$router.push({
                name: 'discount-inner'
            })
        },
        toggleEditDiscountRule(val) {
            this.$router.push({
                name: 'discount-inner',
                params: {
                    id: val.code
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