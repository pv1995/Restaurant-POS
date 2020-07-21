<template>
    <q-page class="q-pa-lg page-background">
        <section class="page-actions flex justify-end">
            <q-btn color="primary" dense label="Export" class="create-order-button lato q-px-md q-ma-xs" />
        </section>
        
        <section class="register-table q-mt-lg">
            <q-card>
            <q-tabs
                v-model="tab"
                dense
                align="left"  
                active-color="secondary"
                indicator-color="secondary"
                >
                <q-tab name="history" class="tab-style lato" label="History" />
            
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="history">
                    <div>
                         <customTable  :withCheckbox="checkReq" :headers="getWasteHistoryHeaders" :getAllDetails="getRawMaterials" /> 
                        
                    </div>
                </q-tab-panel>


                <!-- ********* HAVE TO ADD ONCE INTEGRATED FIRST PAGE ********* -->
                <!-- <q-tab-panel name="raw">
                    <div v-if="getRawMaterialCategoryHeaders">
                        <customTable :getAllDetails="getRawMaterialCategories" :withCheckbox="withCheckbox" :headers="getRawMaterialCategoryHeaders"/> 
                    </div>
                </q-tab-panel>
                <q-tab-panel name="processed">
                    <div v-if="getRawMaterialHeaders">
                        <customTable :getAllDetails="getProcessedGoods" :withCheckbox="withCheckbox" :headers="getRawMaterialHeaders"/> 
                    </div>
                </q-tab-panel> -->
                <!-- ********* HAVE TO ADD ONCE INTEGRATED FIRST PAGE ********* -->

            </q-tab-panels>
            </q-card>
        </section>
    </q-page>
</template>
<script>
import customTable from 'src/components/table.vue'
import wasteTableModal from 'src/components/wasteTableModal.vue'

export default {
    components: {
        customTable,
        wasteTableModal
    },
    data() {
        return {
            tab: 'history',
            checkReq: false,
            // showRawMaterial: false,
    
            

           
        }
    },
    computed: {
        // getRawMaterials() {
        //     return this.$store.getters['inventory/getRawMaterials'];
        // },
        getRawMaterials() {
            return this.$store.getters['inventory/getRawMaterials'];
        },
        getWasteHistoryHeaders() {
            return this.$store.getters['tableHeaders/getWasteHistoryHeaders'];
        },

    },
    methods: {
    //    openWasteModal(x) {
    //         this.wasteModal = !this.wasteModal
    //         this.wasteStatus = x
    //     },
        
    }
}
</script>
<style lang="stylus" scoped>

</style>