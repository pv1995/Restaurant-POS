<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Custom Fields</div>
            <q-btn color="primary" label="Add Payment Type" icon="add" class="create-order-button lato" @click="toggleShowPaymentType" v-if="tab === 'payment-type'"/>
            <q-btn color="primary" label="Add Additional Detail" icon="add" class="create-order-button lato" @click="toggleShowAdditionalDetail" v-else-if="tab === 'additional-details'"/>
            <q-btn color="primary" label="Add Tag" icon="add" class="create-order-button lato" @click="toggleShowTags" v-else/>
        </section>
        <section class="discount-table q-mt-xl bg-white">
            <q-tabs
                v-model="tab"
                dense
                align="left"  
                active-color="secondary"
                indicator-color="secondary"
                >
                <q-tab name="payment-type" class="tab-style lato" label="Payment Types" />
                <q-tab name="additional-details" class="tab-style lato" label="Additional Details" />
                <q-tab name="tags" class="tab-style lato" label="Tags" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="payment-type">
                    <div class="row">
                        <div class="col-sm-2 q-pa-md">
                            <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown lato" no-caps>
                                <q-list>
                                    <q-item clickable v-for="(opt,i) in getPaymentTypeSearchOptions" :key="i" v-close-popup @click="onItemClick(opt.label)">
                                        <q-item-section class="lato">
                                            <q-item-label>{{ opt.label }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-btn-dropdown>
                        </div>
                        <div class="col-md-3 q-pa-md">
                            <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                <template v-slot:append>
                                    <q-icon class="search-icon" name="search" />
                                </template>
                            </q-input>
                        </div>
                    </div>
                    <div>
                        <customTable :getAllDetails="getPaymentTypes" :withCheckbox="withCheckbox" :headers="getPaymentTypeHeaders" :tableType="'custom-field'" :customFieldType="'payment-type'" :withRowActions="withRowActions" @edit="toggleEditPaymentType"/> 
                    </div>
                </q-tab-panel>
                <q-tab-panel name="additional-details">
                    <div class="row">
                        <div class="col-sm-2 q-pa-md">
                            <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown lato" no-caps>
                                <q-list>
                                    <q-item clickable v-for="(opt,i) in getAdditionalDetailSearchOptions" :key="i" v-close-popup @click="onItemClick(opt.label)">
                                        <q-item-section class="lato">
                                            <q-item-label>{{ opt.label }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-btn-dropdown>
                        </div>
                        <div class="col-md-3 q-pa-md">
                            <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                <template v-slot:append>
                                    <q-icon class="search-icon" name="search" />
                                </template>
                            </q-input>
                        </div>
                    </div>
                    <div>
                        <customTable :getAllDetails="getAdditionalDetails" :withCheckbox="withCheckbox" :headers="getAdditionalDetailHeaders" :tableType="'custom-field'" :customFieldType="'additional-detail'" :withRowActions="withRowActions" @edit="toggleEditAdditionalDetail"/> 
                    </div>
                </q-tab-panel>
                <q-tab-panel name="tags">
                    <div class="row">
                        <div class="col-sm-2 q-pa-md">
                            <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown lato" no-caps>
                                <q-list>
                                    <q-item clickable v-for="(opt,i) in getTagSearchOptions" :key="i" v-close-popup @click="onItemClick(opt.label)">
                                        <q-item-section class="lato">
                                            <q-item-label>{{ opt.label }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-btn-dropdown>
                        </div>
                        <div class="col-md-3 q-pa-md">
                            <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                <template v-slot:append>
                                    <q-icon class="search-icon" name="search" />
                                </template>
                            </q-input>
                        </div>
                    </div>
                    <div>
                        <customTable :getAllDetails="getTags" :withCheckbox="withCheckbox" :headers="getTagHeaders" :tableType="'custom-field'" :customFieldType="'tag'" :withRowActions="withRowActions" @edit="toggleEditTag"/> 
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </section>
    </q-page>
</template>
<script>
import customTable from 'src/components/table.vue'

export default {
    components: {
        customTable
    },
    data() {
        return {
            showPaymentType: false,
            showAdditionalDetail: false,
            showTags: false,
            tab: '',
            withCheckbox: true,
            showFilters: false,
            withRowActions: true,
            selectedPaymentType: null,
            selectedAdditionalDetail: null,
            selectedTag: null,
            label: 'Search By',
            search: ''
        }
    },
    created() {
        this.$store.dispatch('setup/getCustomFields', {
            type: 'Tag'
        })
        this.$store.dispatch('setup/getCustomFields', {
            type: 'Additional Detail'
        })
        this.$store.dispatch('setup/getCustomFields', {
            type: 'Payment Type'
        })
        if(this.$route.params.type) {
            this.tab = this.$route.params.type
        }
        else {
            this.tab = 'payment-type'
        }
    },
    computed: {
        getPaymentTypes() {
            return this.$store.getters['setup/getAllPaymentTypes']
        },
        getAdditionalDetails() {
            return this.$store.getters['setup/getAllAdditionalDetails']
        },
        getTags() {
            return this.$store.getters['setup/getAllTags']
        },
        getPaymentTypeHeaders() {
            return this.$store.getters['tableHeaders/getPaymentTypeHeaders']
        },
        getAdditionalDetailHeaders() {
            return this.$store.getters['tableHeaders/getAdditionalDetailHeaders']
        },
        getTagHeaders() {
            return this.$store.getters['tableHeaders/getTagHeaders']
        },
        getPaymentTypeSearchOptions() {
            return this.$store.getters['tableSearch/getPaymentType']
        },
        getAdditionalDetailSearchOptions() {
            return this.$store.getters['tableSearch/getAdditionalDetail']
        },
        getTagSearchOptions() {
            return this.$store.getters['tableSearch/getTag'];
        }
    },
    methods: {
        toggleShowPaymentType() {
            this.$router.push({
                name: 'payment-type-inner'
            })
        },
        toggleShowAdditionalDetail() {
            this.$router.push({
                name: 'additional-detail-inner'
            })
        },
        toggleShowTags() {
            this.$router.push({
                name: 'tag-inner'
            })
        },
        toggleEditPaymentType(val) {
            this.$router.push({
                name: 'payment-type-inner',
                params: {
                    id: val.name
                }
            })
        },
        toggleEditAdditionalDetail(val) {
            this.$router.push({
                name: 'additional-detail-inner',
                params: {
                    id: val.name
                }
            })
        },
        toggleEditTag(val) {
            this.$router.push({
                name: 'tag-inner',
                params: {
                    id: val.name
                }
            })
        },
        onItemClick(val) {
            this.label = val;
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>