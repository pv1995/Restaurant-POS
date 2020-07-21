<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Requisition Audit</div>
            <q-btn color="primary" label="Export to CSV" icon="add" class="create-order-button lato" @click="exportToCSV" />
        </section>
        <section class="analytics-graphics q-mt-xl">
            <div class="flex justify-center items-center">
                <stockLevelCard :cardType="'stock-level'" :stockCardInfo="rawMaterialStockLevel" />
                <stockLevelCard :cardType="'stock-level'" :stockCardInfo="processedGoodStockLevel" />
            </div>
        </section>
        <section class="new-requisitions bg-white q-mt-lg">
            <div class="text-subtitle1 text-dark comfortaa q-pl-md q-pt-md">New Requisition Requests</div>
            <customTable :getAllDetails="getNewRequisitions" :headers="getRequisitionHeaders" :requisitionAudit="requisitionAudit" :withRowActions="withRowActions" @goToRequisitionInner="goToRequisitionInner"/>
            <div class="text-subtitle1 text-dark comfortaa q-pl-md q-pt-md">Requisition History</div>
            <customTable :getAllDetails="getPastRequisitions" :headers="getRequisitionHeaders" :requisitionAudit="requisitionAudit" :withRowActions="withRowActions" @goToRequisitionInner="goToRequisitionInner"/>
        </section>
    </q-page>
</template>
<script>
import stockLevelCard from 'src/components/card.vue';
import customTable from 'src/components/table.vue';

export default {
    components: {
        stockLevelCard,
        customTable
    },
    data() {
        return {
            rawMaterialStockLevel: {
                name: 'Raw Materials',
                alert: 'High Stock',
                stockLevel: '300',
                maxStockLevel: '500',
                progress: 0.6,
                color: 'secondary'
            },
            processedGoodStockLevel: {
                name: 'Processed Materials',
                alert: 'Low Stock',
                stockLevel: '100',
                maxStockLevel: '500',
                progress: 0.2,
                color: 'accent'
            },
            requisitionAudit: true,
            withRowActions: true
        }
    },
    computed: {
        getAllRequisitions() {
            return this.$store.getters['inventory/getAllRequisitions'];
        },
        getNewRequisitions() {
            return this.getAllRequisitions.filter(req => {
                if(req.type === 'New') {
                    return req
                }
            })
        },
        getPastRequisitions() {
            return this.getAllRequisitions.filter(req => {
                if(req.type !== 'New') {
                    return req
                }
            })
        },
        getRequisitionHeaders() {
            return this.$store.getters['tableHeaders/getRequisitionHeaders'];
        }
    },
    methods: {
        exportToCSV() {

        },
        goToRequisitionInner(data) {
            this.$router.push({
                name: 'requisition-inner',
                params: {
                    id: data.id
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>