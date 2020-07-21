<template>
    <q-page class="q-pa-lg page-background">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Wastage</div>
            <q-btn color="primary" dense label="History" class="create-order-button lato q-px-md q-ma-xs"  @click="openHistory()"/>
        </section>
        <section class="analytics-graphics q-mt-xl">
            <div class="flex justify-center items-center">
                <q-card class="bg-accent q-mx-sm" style="width:250px;height:250px" flat>
                </q-card>
                <q-card class="bg-accent q-mx-sm" style="width:250px;height:250px" flat>
                </q-card>
            </div>
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
                <q-tab name="menuItems" class="tab-style lato" label="Menu Items" />
                <q-tab name="raw" class="tab-style lato" label="Raw Materials" />
                <q-tab name="processed" class="tab-style lato" label="Processed Materials" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="menuItems">
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
                        <div class="col-7 text-right">
                            <q-btn outline dense color="positive" class="lato q-px-xl q-ma-md" label="Wastage"  @click="openWasteModal('Wastage')"/>
                            <q-btn outline dense color="negative" class="lato q-px-xl q-ma-md" label="Adjustments"  @click="openWasteModal('Adjustments')"/>
                        </div>
                    </div>
                    <div>
                         <customTable  :withCheckbox="checkReq" :headers="getWasteMenuItemHeaders" :showWasteMgmntButton="showButtons" :getAllDetails="getRawMaterials" @clickWasteModal="openWasteModal"/> 
                         <wasteTableModal :open='wasteModal' @close='wasteModal = false'  :status='wasteStatus'/>
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
            tab: 'menuItems',
            checkReq: false,
            // showRawMaterial: false,
            showButtons: true,
            wasteStatus: '',
            wasteModal: false

           
        }
    },
    computed: {
        // getRawMaterials() {
        //     return this.$store.getters['inventory/getRawMaterials'];
        // },
        getRawMaterials() {
            return this.$store.getters['inventory/getRawMaterials'];
        },
        getWasteMenuItemHeaders() {
            return this.$store.getters['tableHeaders/getWasteMenuItemHeaders'];
        },

    },
    methods: {
       openWasteModal(x) {
            this.wasteModal = !this.wasteModal
            this.wasteStatus = x
        },
        openHistory() {
            this.$router.push('/waste-history')
        }
        
    }
}
</script>
<style lang="stylus" scoped>

</style>