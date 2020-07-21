<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Menu Categories</div>
            <q-btn color="primary" label="Add Menu Category" icon="add" class="create-order-button lato" @click="toggleAddMenuCategory" v-if="tab === 'menuCategories'"/>
            <q-btn color="primary" label="Add Order Ticket Group" icon="add" class="create-order-button lato" @click="toggleAddOrderTicketGroup" v-else/>
        </section>
        <section class="analytics-graphics q-mt-lg">
            <div class="flex justify-center items-center">
                <q-card class="bg-accent q-mx-sm" style="width:250px;height:250px" flat>
                </q-card>
                <q-card class="bg-accent q-mx-sm" style="width:250px;height:250px" flat>
                </q-card>
            </div>
        </section>
        <section class="register-table q-mt-xl bg-white">
            <q-tabs
                v-model="tab"
                dense
                align="left"  
                active-color="secondary"
                indicator-color="secondary"
                >
                <q-tab name="menuCategories" class="tab-style lato" label="Menu Categories" />
                <q-tab name="orderTicketGroups" class="tab-style lato" label="Order Ticket Groups" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="menuCategories">
                    <div v-if="getMenuCategories">
                        <div class="row">
                            <div class="col-sm-2">
                                <div class="q-pa-md">
                                    <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown lato">
                                        <q-list>
                                            <q-item clickable v-for="(opt,i) in getMenuCategorySearchOptions" :key="i" v-close-popup @click="onItemClick(opt.label)">
                                                <q-item-section class="lato">
                                                    <q-item-label>{{ opt.label }}</q-item-label>
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
                            <div class="col-7">
                                <div class="q-pa-md">
                                    <div class="q-gutter-sm ">
                                        <q-checkbox v-model="selectedShift" color='grey-8' :val="shift" v-for="(shift,i) in getShiftNames" :key="i" :label='shift' input = displayVal() />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <customTable :getAllDetails="getMenuCategories" :withCheckbox="withCheckbox" :headers="getMenuCategoryHeaders" :tableType="'menu-category'" :withRowActions="withRowActions" @edit="toggleEditMenuCategory"/> 
                    </div>
                </q-tab-panel>

                <q-tab-panel name="orderTicketGroups">
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="q-pa-md">
                                <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown lato">
                                    <q-list>
                                        <q-item clickable v-for="(opt,i) in getOrderTicketGroupSearchOptions" :key="i" v-close-popup @click="onItemClick(opt.label)">
                                            <q-item-section class="lato">
                                                <q-item-label>{{ opt.label }}</q-item-label>
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
                    <div v-if="getAllOrderTicketGroups">
                        <customTable :getAllDetails="getAllOrderTicketGroups" :withCheckbox="withCheckbox" :headers="getTicketGroupHeaders" :tableType="'ticket-group'" :withRowActions="withRowActions" @edit="toggleEditTicketGroup"/> 
                    </div>
                </q-tab-panel>
            </q-tab-panels>
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
        this.$store.dispatch('menu/getAllMenuCategories');
        this.$store.dispatch('setup/getAllOrderTicketGroups');
        this.$store.dispatch('setup/getAllShifts')
        if(this.$route.params.type) {
            this.tab = this.$route.params.type
        }
        else {
            this.tab = 'menuCategories'
        }
    },
    computed: {
        getMenuCategories() {
            return this.$store.getters['menu/getMenuCategories'];
        },
        getMenuCategoryHeaders() {
            return this.$store.getters['tableHeaders/getMenuCategoryHeaders']
        },
        getAllOrderTicketGroups() {
            return this.$store.getters['setup/getAllOrderTicketGroups'];
        },
        getTicketGroupHeaders() {
            return this.$store.getters['tableHeaders/getTicketGroupHeaders'];
        },
        getAllShifts() {
            return this.$store.getters['setup/getAllShiftDetails']
        },
        getShiftNames() {
            return this.getAllShifts.map(shift => {
                return shift.name
            })
        },
        getMenuCategorySearchOptions() {
            return this.$store.getters['tableSearch/getMenuCategory'];
        },
        getOrderTicketGroupSearchOptions() {
            return this.$store.getters['tableSearch/getTicketGroup'];
        }
    },
    data() {
        return {
            withCheckbox: true,
            showAddMenuCategory: false,
            tab: '',
            showAddTicketGroup: false,
            withRowActions: true,
            selectedMenuCategory: null,
            selectedTicketGroup: null,
            selectedShift: [],
            label: 'Search By',
            search: ''
        }
    },
    methods: {
        toggleAddMenuCategory() {
            this.$router.push({
                name: 'menu-category-inner',
            })
        },
        toggleAddOrderTicketGroup() {
            this.$router.push({
                name: 'order-ticket-inner'
            })
        },
        toggleEditMenuCategory(val) {
            this.$router.push({
                name: 'menu-category-inner',
                params: {
                    id: val.name
                }
            })
        },
        toggleEditTicketGroup(val) {
            this.$router.push({
                name: 'order-ticket-inner',
                params: {
                    id: val.name
                }
            })
        },
        onItemClick(val) {
            this.label = val
        }
    }
}
</script>
<style lang="stylus" scoped>
.tab-style
    font-family: Comfortaa
    font-size: 16px
    font-weight: bold
    letter-spacing: 0.5px
    color: #222222
    text-transform: none
</style>