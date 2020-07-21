<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Dine-In Tables</div>
            <q-btn color="primary" label="Add Tables" icon="add" class="create-order-button" @click="toggleShowTables"/>
        </section>
        <q-card>
        <section class="q-mt-xl bg-white">
            <div class="row">
                <div class="col-sm-2">
                    <div class="q-pa-md">
                        <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown">
                            <q-list>
                                <q-item clickable v-for="(header,i) in headers" :key="i" v-close-popup @click="onItemClick(header.label)">
                                    <q-item-section>
                                        <q-item-label>{{ header.label }}</q-item-label>
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
            <customTable :getAllDetails="getAllTables" :withCheckbox="withCheckbox" :headers="getTablesHeaders" :tableType="'dine-in-table'" :withRowActions="withRowActions" @edit="editTable"/>
        </section>
        </q-card>
    </q-page>
</template>
<script>
import customTable from 'src/components/table.vue';

export default {
    components: {
        customTable
    },
    created() {
        this.$store.dispatch('setup/getAllTables')
    },
    computed: {
        getAllTables() {
            return this.$store.getters['setup/getAllTables']
        },
        getTablesHeaders() {
            return this.$store.getters['tableHeaders/getTablesHeaders']
        }
    },
    data() {
        return {
            showTables: false,
            withCheckbox: false,
            withRowActions: true,
            selectedTable: null
        }
    },
    methods: {
        toggleShowTables() {
            this.$router.push({
                name: 'table-inner'
            })
        },
        editTable(val) {
            this.$router.push({
                name: 'table-inner',
                params: {
                    id: val.number
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>