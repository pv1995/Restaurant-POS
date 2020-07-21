<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-end">
            <q-btn color="primary" label="Export to CSV" icon="add" class="create-order-button lato" @click="exportToCSV" />
        </section>
        <section class="bg-white stock-level-inner q-mt-lg">
            <q-item>
                <q-item-section>
                    <q-item-label>Date: {{getSelectedRMAudit[0].date}}</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section class="col-3"> 
                    <q-item-label>Opening Balance</q-item-label>
                    <q-item-label caption>{{getSelectedRMAudit[0].openingBalance}}</q-item-label>
                </q-item-section>
                <q-item-section class="col-3">
                    <q-item-label>Closing Balance</q-item-label>
                    <q-item-label caption>{{getSelectedRMAudit[0].closingBalance}}</q-item-label>
                </q-item-section>
                <q-item-section class="col-3">
                    <q-item-label>Turnover</q-item-label>
                    <q-item-label caption>{{getSelectedRMAudit[0].turnover}} %</q-item-label>
                </q-item-section>
            </q-item>
            <div v-if="getInnerAuditHeaders">
                <customTable :getAllDetails="getInnerStockAudit" :headers="getInnerAuditHeaders" />
            </div>
        </section>
    </q-page>
</template>
<script>
import customTable from 'src/components/table.vue';

export default {
    components: {
        customTable
    },
    created() {
        this.auditDataId = this.$route.params.id
    },
    data() {
        return {
            auditDataId: null
        }
    },
    computed: {
        getRMStockLevelAudit() {
            return this.$store.getters['inventory/getRMStockLevelAudit'];
        },
        getSelectedRMAudit() {
            return this.getRMStockLevelAudit.filter(rm => {
                if(rm.id === this.auditDataId) {
                    return rm
                }
            })
        },
        getInnerAuditHeaders() {
            return this.$store.getters['tableHeaders/getInnerAuditHeaders']
        },
        getInnerStockAudit() {
            return this.$store.getters['inventory/getInnerStockAudit'];
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>