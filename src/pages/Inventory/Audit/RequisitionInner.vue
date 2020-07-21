<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-end">
            <q-btn color="primary" label="Export to CSV" icon="add" class="create-order-button lato" @click="exportToCSV" />
        </section>
        <section class="requisition-list q-mt-lg bg-white">
            <div class="row">
                <div class="col-7">
                    <q-item>
                        <q-item-section class="lato col-3">
                            <q-item-label>Requisition ID</q-item-label>
                            <q-item-label caption>{{getSelectedRequisition[0].id}}</q-item-label>
                        </q-item-section>
                        <q-item-section class="lato col-3">
                            <q-item-label>Requested On</q-item-label>
                            <q-item-label caption>{{getSelectedRequisition[0].requestDate}}</q-item-label>
                        </q-item-section>
                        <q-item-section class="lato col-3">
                            <q-item-label>Requested By</q-item-label>
                            <q-item-label caption>{{getSelectedRequisition[0].requestedBy}}</q-item-label>
                        </q-item-section>
                        <q-item-section class="lato col-3">
                            <q-item-label>Status</q-item-label>
                            <q-item-label caption>{{getSelectedRequisition[0].type}}</q-item-label>
                        </q-item-section>
                    </q-item>
                </div>
                <div class="col-5">
                    
                </div>
            </div>
        </section>
    </q-page>
</template>
<script>
impor
export default {
    data() {
        return {
            selected: null
        }
    },
    created() {
        this.selected = this.$route.params.id
    },
    computed: {
        getAllRequisitions() {
            return this.$store.getters['inventory/getAllRequisitions'];
        },
        getSelectedRequisition() {
            return this.getAllRequisitions.filter(req => {
                if(req.id === this.selected) {
                    return req
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>