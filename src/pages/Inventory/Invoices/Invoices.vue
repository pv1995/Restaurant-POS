<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Invoices</div>
            <q-btn color="primary" label="New Invoice" icon="add" class="create-order-button lato" @click="toggleShowAddInvoice"/>
        </section>
        <section class="invoice-table q-mt-xl bg-white">
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
            <customTable :getAllDetails="getInvoices" :withCheckbox="withCheckbox" :headers="getInvoiceHeaders"/> 
        </section>
        <addInvoice :open="showAddInvoice" @close="toggleShowAddInvoice" />
    </q-page>
</template>
<script>
import customTable from 'src/components/table.vue'
import addInvoice from 'src/components/addInvoice.vue'

export default {
    components: {
        customTable,
        addInvoice
    },
    data() {
        return {
            withCheckbox: false,
            showAddInvoice: false
        }
    },
    computed: {
        getInvoices() {
            return this.$store.getters['inventory/getInvoices'];
        },
        getInvoiceHeaders() {
            return this.$store.getters['tableHeaders/getInvoiceHeaders'];
        }
    },
    methods: {
        toggleShowAddInvoice() {
            this.showAddInvoice = !this.showAddInvoice
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>