<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-end">
            <q-btn color="primary" label="Export to CSV" icon="add" class="create-order-button lato" @click="exportToCSV" />
        </section>
        <section class="purchase-list q-mt-lg bg-white">
            <q-item>
                <q-item-section class="lato col-3">
                    <q-item-label>Purchase Order No</q-item-label>
                    <q-item-label caption>{{getSelectedPurchaseOrder[0].purchaseOrderNo}}</q-item-label>
                </q-item-section>
                <q-item-section class="lato col-3">
                    <q-item-label>Requested On</q-item-label>
                    <q-item-label caption>{{getSelectedPurchaseOrder[0].requestDate}}</q-item-label>
                </q-item-section>
                <q-item-section class="lato col-3">
                    <q-item-label>Requested By</q-item-label>
                    <q-item-label caption>{{getSelectedPurchaseOrder[0].requestedBy}}</q-item-label>
                </q-item-section>
                <q-item-section class="lato col-3">
                    <q-item-label>Status</q-item-label>
                    <q-item-label caption>{{getSelectedPurchaseOrder[0].type}}</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                    <q-item-label class="lato">Raw Material List</q-item-label>
                </q-item-section>
            </q-item>
            <customTable :getAllDetails="getRawMaterials" :headers="getRawMaterialHeaders" />
            <q-item>
                <q-item-section class="lato col-3">
                    <div class="flex items-center">
                        <q-item-label>Quality Audit</q-item-label>
                        <q-toggle
                        v-model="qualityAudit"
                        checked-icon="check"
                        color="green"
                        unchecked-icon="clear"
                        />
                    </div>
                    <q-input
                    v-model="qualityAuditNotes"
                    outlined
                    autogrow
                    placeholder="Quality Audit Notes"
                    dense
                    />
                </q-item-section>
                <q-item-section class="lato col-3">
                    <div class="flex items-center">
                        <q-item-label>Quantity Audit</q-item-label>
                        <q-toggle
                        v-model="quantityAudit"
                        checked-icon="check"
                        color="green"
                        unchecked-icon="clear"
                        />
                    </div>
                    <q-input
                    v-model="quantityAuditNotes"
                    outlined
                    autogrow
                    placeholder="Quantity Audit Notes"
                    dense
                    />
                </q-item-section>
            </q-item>
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
            selected: null,
            qualityAudit: false,
            quantityAudit: false,
            qualityAuditNotes: '',
            quantityAuditNotes: ''
        }
    },
    created() {
        this.selected = this.$route.params.id
    },
    computed: {
        getAllPurchaseOrders() {
            return this.$store.getters['inventory/getPurchaseOrders'];
        },
        getSelectedPurchaseOrder() {
            return this.getAllPurchaseOrders.filter(po => {
                if(po.id === this.selected) {
                    return po
                }
            })
        },
        getRawMaterials() {
            return this.$store.getters['inventory/getRawMaterials'];
        },
        getRawMaterialHeaders() {
            return this.$store.getters['tableHeaders/getRawMaterialHeaders'];
        }
    },
    methods: {
        exportToCSV() {

        }
    }
}
</script>
<style lang="stylus" scoped>

</style>