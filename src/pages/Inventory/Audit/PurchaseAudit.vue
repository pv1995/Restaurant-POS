<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Purchase Audit</div>
            <q-btn color="primary" label="Export to CSV" icon="add" class="create-order-button lato" @click="exportToCSV" />
        </section>
        <section class="new-requisitions bg-white q-mt-xl">
            <div class="text-subtitle1 text-dark comfortaa q-pl-md q-pt-md">New Purchase Orders</div>
            <customTable :getAllDetails="getNewPurchaseOrders" :headers="getPurchaseAuditHeaders" :purchaseAudit="purchaseAudit" :withRowActions="withRowActions" @goToPurchaseInner="goToPurchaseInner"/>
            <div class="text-subtitle1 text-dark comfortaa q-pl-md q-pt-md">Past Purchase Orders</div>
            <customTable :getAllDetails="getPastPurchaseOrders" :headers="getPurchaseAuditHeaders" :purchaseAudit="purchaseAudit" :withRowActions="withRowActions" @goToPurchaseInner="goToPurchaseInner"/>
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
            purchaseAudit: true,
            withRowActions: true
        }
    },
    created() {
        // this.$store.dispatch('inventory/getPurchaseOrders')
    },
    computed: {
        getAllPurchaseOrders() {
            return this.$store.getters['inventory/getPurchaseOrders']
        },
        getNewPurchaseOrders() {
            return this.getAllPurchaseOrders.filter(po => {
                if(po.type === 'New') {
                    return po
                }
            })
        },
        getPastPurchaseOrders() {
            return this.getAllPurchaseOrders.filter(po => {
                if(po.type !== 'New') {
                    return po
                }
            })
        },
        getPurchaseAuditHeaders() {
            return this.$store.getters['tableHeaders/getPurchaseAuditHeaders']
        }
    },
    methods: {
        goToPurchaseInner(data) {
            this.$router.push({
                name: 'purchase-audit-inner',
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