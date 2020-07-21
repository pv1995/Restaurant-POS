<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Stock Level Audit</div>
            <q-btn color="primary" label="Export to CSV" icon="add" class="create-order-button lato" @click="exportToCSV" />
        </section>
        <section class="analytics-graphics q-mt-xl">
            <div class="flex justify-center items-center">
                <stockLevelCard :cardType="'stock-level'" :stockCardInfo="rawMaterialStockLevel" />
                <stockLevelCard :cardType="'stock-level'" :stockCardInfo="processedGoodStockLevel" />
            </div>
        </section>
        <section class="stock-audit-table q-mt-lg bg-white">
            <q-tabs
                v-model="tab"
                dense
                align="left"  
                active-color="secondary"
                indicator-color="secondary"
                >
                <q-tab name="Raw Materials" class="tab-style lato" label="Raw Materials" />
                <q-tab name="Processed Materials" class="tab-style lato" label="Processed Materials" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="Raw Materials">
                    <div class="row">
                        <div class="col-2">
                            <div class="q-pa-md">
                                <q-btn-dropdown outline size='md' color='grey-8' label='Select City' class="search-dropdown">
                                    <q-list>
                                        <q-item clickable v-for="city in cities" :key="city" v-close-popup>
                                            <q-item-section>
                                                <q-item-label>{{ city }}</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="q-pa-md">
                                <q-btn-dropdown outline size='md' color='grey-8' label='Select Branch' class="search-dropdown">
                                    <q-list>
                                        <q-item clickable v-for="branch in branches" :key="branch" v-close-popup>
                                            <q-item-section>
                                                <q-item-label>{{ branch }}</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
                            </div>
                        </div>
                    </div>
                    <div v-if="getStockLevelAuditHeaders">
                        <customTable :getAllDetails="getRMStockLevelAudit" :headers="getStockLevelAuditHeaders" :withRowActions="withRowActions" @goToStockLevelInner="goToStockLevelInner"/> 
                    </div>
                </q-tab-panel>
                <q-tab-panel name="Processed Materials">
                    <div class="row">
                        <div class="col-2">
                            <div class="q-pa-md">
                                <q-btn-dropdown outline size='md' color='grey-8' label='Select City' class="search-dropdown">
                                    <q-list>
                                        <q-item clickable v-for="city in cities" :key="city" v-close-popup>
                                            <q-item-section>
                                                <q-item-label>{{ city }}</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="q-pa-md">
                                <q-btn-dropdown outline size='md' color='grey-8' label='Select Branch' class="search-dropdown">
                                    <q-list>
                                        <q-item clickable v-for="branch in branches" :key="branch" v-close-popup>
                                            <q-item-section>
                                                <q-item-label>{{ branch }}</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
                            </div>
                        </div>
                    </div>
                    <div v-if="getStockLevelAuditHeaders">
                        <customTable :getAllDetails="getRMStockLevelAudit" :headers="getStockLevelAuditHeaders" :withRowActions="withRowActions" @goToStockLevelInner="goToStockLevelInner"/> 
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </section>
    </q-page>
</template>
<script>
import stockLevelCard from 'src/components/card.vue';
import customTable from 'src/components/table.vue'

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
            tab: 'Raw Materials',
            stockLevelAudit: true,
            withRowActions: true
        }
    },
    computed: {
        getStockLevelAuditHeaders() {
            return this.$store.getters['tableHeaders/getStockLevelAuditHeaders'];
        },
        getRMStockLevelAudit() {
            return this.$store.getters['inventory/getRMStockLevelAudit'];
        }
    },
    methods: {
        exportToCSV() {

        },
        goToStockLevelInner(data) {
            console.log(data);
            this.$router.push({
                name: 'stock-level-audit-inner',
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