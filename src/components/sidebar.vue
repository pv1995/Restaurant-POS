<template>
    <div>
        <q-drawer
        v-model="sidebarOpen"
        show-if-above
        bordered
        content-class="drawer-class text-white"
        v-if="currentSystem === 'Shop Setup'"
        >
            <q-list class="q-pt-lg">
                <q-item>
                    <q-item-section top avatar>
                        <q-avatar color="transparent" text-color="white" square icon="menu_book" size="lg"/>
                    </q-item-section>

                    <q-item-section>
                        <q-item-label class="text-h6">MadShark</q-item-label>
                        <q-item-label caption class="text-weight-bold text-white">POS</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item class="q-pl-lg q-pb-lg">
                    <q-item-section>
                        <q-btn-dropdown color="white" :label="currentSystem" class="text-dark service-dropdown" text-color="dark" content-class="dropdown-text" unelevated>
                            <q-list>
                                <q-item clickable v-close-popup @click="handleDropdown(service)" v-for="service in services" :key="service.id">
                                    <q-item-section>
                                        <q-item-label>{{service.name}}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                    </q-item-section>
                </q-item>
                <q-separator color="white" class="q-mb-md"/>
                <q-list class="rounded-borders">
                <q-item clickable @click="goToSystem('shop-setup')" class="q-pl-lg" :class="this.$route.name === 'shop-setup' ? 'sidebar-active' : ''">
                    <q-item-section avatar style="min-width:36px">
                           <q-icon name="img:statics/shop-setup.svg" size="xs" color="white"/> 
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Shop</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable @click="goToSystem('registers')" class="q-pl-lg" :class="this.$route.name === 'registers' ? 'sidebar-active' : ''">
                    <q-item-section avatar style="min-width:36px">
                           <q-icon name="receipt" size="xs"/> 
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Register</q-item-label>
                    </q-item-section>
                </q-item>
                
                <q-expansion-item
                    expand-separator
                    class="setup-sidebar-drpdown"
                    header-class="q-pl-lg"
                    :content-inset-level="0"
                    expand-icon-class="text-white"
                >
                    <template v-slot:header>
                        <q-item-section avatar style="min-width:36px">
                            <q-icon name="menu_book" size="xs"/>  
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Menu Management</q-item-label>
                        </q-item-section>
                    </template>
                    <q-item clickable @click="goToSystem('menu-categories')" style="padding-left:50px" class="q-pl-xl" :class="this.$route.name === 'menu-categories' ? 'sidebar-active' : ''">
                        <q-item-section>
                            <q-item-label>Menu Category Management</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable @click="goToSystem('menu-item-management')" class="q-pl-xl" :class="this.$route.name === 'menu-item-management' ? 'sidebar-active' : ''">
                        <q-item-section>
                            <q-item-label>Menu Item Management</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable @click="goToSystem('menu-item-options')" class="q-pl-xl" :class="this.$route.name === 'menu-item-options' ? 'sidebar-active' : ''">
                        <q-item-section>
                            <q-item-label>Menu Item Options</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-expansion-item>
                
                <q-item clickable @click="goToSystem('taxes')" class="q-pl-lg" :class="this.$route.name === 'taxes' ? 'sidebar-active' : ''">
                    <q-item-section avatar style="min-width:36px">
                        <q-icon name="fas fa-percentage" size="xs"/>  
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Taxes</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable @click="goToSystem('discount-rules')" class="q-pl-lg" :class="this.$route.name === 'discount-rules' ? 'sidebar-active' : ''">
                    <q-item-section avatar style="min-width:36px">
                           <q-icon name="local_offer" size="xs"/> 
                        </q-item-section>
                    <q-item-section>
                        <q-item-label>Discount Rules</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable @click="goToSystem('additional-charges')" class="q-pl-lg" :class="this.$route.name === 'additional-charges' ? 'sidebar-active' : ''">
                    <q-item-section avatar style="min-width:36px">
                           <q-icon name="add_shopping_cart" size="xs"/> 
                        </q-item-section>
                    <q-item-section>
                        <q-item-label>Additional Charges</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable @click="goToSystem('custom-fields')" class="q-pl-lg" :class="this.$route.name === 'custom-fields' ? 'sidebar-active' : ''">
                    <q-item-section avatar style="min-width:36px">
                        <q-icon name="post_add" size="xs"/>  
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Custom Fields</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable @click="goToSystem('dine-in-tables')" class="q-pl-lg" :class="this.$route.name === 'dine-in-tables' ? 'sidebar-active' : ''">
                    <q-item-section avatar style="min-width:36px">
                        <q-icon name="img:statics/tables.png" size="xs"/>  
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Tables</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable @click="goToSystem('shift-setup')" class="q-pl-lg" :class="this.$route.name === 'shift-setup' ? 'sidebar-active' : ''">
                    <q-item-section avatar style="min-width:36px">
                        <q-icon name="track_changes" size="xs"/>  
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Shifts</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable @click="goToSystem('help')" class="q-pl-lg">
                    <q-item-section avatar style="min-width:36px">
                        <q-icon name="help_outline" size="xs"/> 
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Help</q-item-label>
                    </q-item-section>
                </q-item>
                <div class="absolute-bottom">
                    <q-item clickable class="q-pl-lg" @click="goToSystem('shop-setup')">
                        <q-item-section avatar style="min-width:36px">
                            <q-icon color="tertiary" name="build" size="xs"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Setup</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable class="q-pl-lg settings-section">
                        <q-item-section avatar style="min-width:36px">
                            <q-icon color="tertiary" name="settings" size="xs"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Settings</q-item-label>
                        </q-item-section> 
                    </q-item>
                    
                </div>
                </q-list>
            </q-list>
        </q-drawer>
        <q-drawer
        v-model="sidebarOpen"
        show-if-above
        bordered
        content-class="drawer-class text-white"
        v-else-if="currentSystem === 'Inventory Management'"
        >
            <q-list class="q-pt-lg">
                <q-item>
                    <q-item-section top avatar>
                        <q-avatar color="transparent" text-color="white" square icon="menu_book" size="lg"/>
                    </q-item-section>

                    <q-item-section>
                        <q-item-label class="text-h6">MadShark</q-item-label>
                        <q-item-label caption class="text-weight-bold text-white">POS</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item class="q-pl-lg q-pb-lg">
                    <q-item-section>
                        <q-btn-dropdown color="white" :label="currentSystem" class="text-dark service-dropdown" text-color="dark" content-class="dropdown-text" unelevated>
                            <q-list>
                                <q-item clickable v-close-popup @click="handleDropdown(service)" v-for="service in services" :key="service.id">
                                    <q-item-section>
                                        <q-item-label>{{service.name}}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                    </q-item-section>
                </q-item>
                <q-separator color="white" class="q-mb-md"/>
                <q-item clickable @click="goToSystem('stock-view')" class="q-pl-lg" :class="this.$route.name === 'stock-view' ? 'sidebar-active' : ''">
                    <q-item-section avatar style="min-width:36px">
                          <q-icon name="kitchen" class="sidebar-icon-size" size="xs"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Stock View</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable @click="goToSystem('kitchen-inventory')" class="q-pl-lg" :class="this.$route.name === 'kitchen-inventory' ? 'sidebar-active' : ''">
                <q-item-section avatar style="min-width:36px">
                          <q-icon name="kitchen" class="sidebar-icon-size" size="xs"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Kitchen Inventory</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable @click="goToSystem('purchase-orders')" class="q-pl-lg" :class="this.$route.name === 'purchase-orders' ? 'sidebar-active' : ''">
                <q-item-section avatar style="min-width:36px">
                          <q-icon name="shopping_cart" class="sidebar-icon-size" size="xs"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Purchase Orders</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable @click="goToSystem('invoices')" class="q-pl-lg" :class="this.$route.name === 'invoices' ? 'sidebar-active' : ''">
                <q-item-section avatar style="min-width:36px">
                          <q-icon name="people" class="sidebar-icon-size" size="xs"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Invoices</q-item-label>
                    </q-item-section>
                </q-item>
                <q-expansion-item
                    expand-separator
                    label="Audit"
                    header-class="q-pl-lg"
                    :content-inset-level="0.25"
                    expand-icon-class="text-white"
                >
                <template v-slot:header>
                        <q-item-section avatar style="min-width:36px">
                            <q-icon name="verified_user" size="xs"/>  
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Audit</q-item-label>
                        </q-item-section>
                    </template>
                    <q-item clickable @click="goToSystem('stock-level-audit')" class="q-pl-lg" :class="this.$route.name === 'stock-level-audit' ? 'sidebar-active' : ''">
                        <q-item-section>
                            <q-item-label>Stock Level Audit</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable @click="goToSystem('requisition')" class="q-pl-lg" :class="this.$route.name === 'requisition' ? 'sidebar-active' : ''">
                        <q-item-section>
                            <q-item-label>Requisition Audit</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable @click="goToSystem('purchase-audit')" class="q-pl-lg" :class="this.$route.name === 'purchase-audit' ? 'sidebar-active' : ''">
                        <q-item-section>
                            <q-item-label>Purchase Audit</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-expansion-item>
                <q-item clickable @click="goToSystem('receiving')" class="q-pl-lg" :class="this.$route.name === 'receiving' ? 'sidebar-active' : ''">
                <q-item-section avatar style="min-width:36px">
                          <q-icon name="system_update_alt" class="sidebar-icon-size" size="xs"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Receiving</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable @click="goToSystem('wastage')" class="q-pl-lg" :class="this.$route.name === 'wastage' ? 'sidebar-active' : ''">
                <q-item-section avatar style="min-width:36px">
                          <q-icon name="delete_sweep" class="sidebar-icon-size" size="xs"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Wastage</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable @click="goToSystem('/help')" class="q-pl-lg">
                <q-item-section avatar style="min-width:36px">
                          <q-icon name="help_outline" class="sidebar-icon-size" size="xs"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Help</q-item-label>
                    </q-item-section>
                </q-item>
                <div class="absolute-bottom">
                    <q-item clickable class="q-pl-lg" @click="goToSystem('shop-setup')">
                        <q-item-section avatar style="min-width:36px">
                            <q-icon color="tertiary" name="build" size="xs"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Setup</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable class="q-pl-lg settings-section" @click="goToSystem('settings')">
                        <q-item-section avatar style="min-width:36px">
                            <q-icon color="tertiary" name="settings" size="xs"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Settings</q-item-label>
                        </q-item-section> 
                    </q-item>
                </div>
            </q-list>
        </q-drawer>
        <q-drawer
        v-model="sidebarOpen"
        show-if-above
        bordered
        content-class="drawer-class text-white"
        v-else
        >
            <q-list class="q-pt-lg">
                <q-item>
                    <q-item-section top avatar>
                        <q-avatar color="transparent" text-color="white" square icon="menu_book" size="lg"/>
                    </q-item-section>

                    <q-item-section>
                        <q-item-label class="text-h6">MadShark</q-item-label>
                        <q-item-label caption class="text-weight-bold text-white">POS</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item class="q-pl-lg q-pb-lg">
                    <q-item-section>
                        <q-btn-dropdown color="white" :label="currentSystem" class="text-dark service-dropdown" text-color="dark" content-class="dropdown-text" unelevated>
                            <q-list>
                                <q-item clickable v-close-popup @click="handleDropdown(service)" v-for="service in services" :key="service.id">
                                    <q-item-section>
                                        <q-item-label>{{service.name}}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                    </q-item-section>
                </q-item>
                <q-separator color="white" class="q-mb-md"/>
                <q-item clickable @click="routeClicked(link.route)" v-for="link in links" :key="link.title" class="q-pl-lg" :class="link.route === getCurrentRoute ? 'sidebar-active' : ''">
                    <q-item-section avatar style="min-width:36px">
                          <q-icon outlined :name="link.icon" class="sidebar-icon-size" size="xs"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ link.title }}</q-item-label>
                        <q-item-label caption>{{ link.caption }}</q-item-label>
                    </q-item-section>
                </q-item>
                <div class="absolute-bottom">
                    <q-item clickable class="q-pl-lg" @click="goToSystem('shop-setup')">
                        <q-item-section avatar style="min-width:36px">
                            <q-icon color="tertiary" name="build" size="xs"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Setup</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable class="q-pl-lg settings-section" @click="goToSystem('settings')">
                        <q-item-section avatar style="min-width:36px">
                            <q-icon color="tertiary" name="settings" size="xs"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Settings</q-item-label>
                        </q-item-section> 
                    </q-item>
                </div>
            </q-list>
        </q-drawer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            services: [
                {
                    id: 1,
                    name: 'Shop Setup',
                    route: 'shop-setup'
                },
                {
                    id: 2,
                    name: 'Order Management System',
                    route: 'order-dashboard'
                },
                {
                    id: 3,
                    name: 'Kitchen Display System',
                    route: 'kds'
                },
                {
                    id: 4,
                    name: 'Inventory Management',
                    route: 'stock-view'
                },
                {
                    id: 5,
                    name: 'Cash/Finance Management',
                    route: 'cash-management'
                },
                {
                    id: 6,
                    name: 'Employee Management',
                    route: 'emp-dashboard'
                }
            ],
            routeName: ''
        }
    },
    props: {
        sidebarOpen: {
            type: Boolean,
            required: true,
            default: false
        },
        links: {
            type: Array,
            required: true
        },
        currentSystem: {
            type: String,
            required: true,
            default: 'Order Management System'
        },
        sidebarInset: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    mounted() {    
        this.routeName = this.$route.name
    },
    computed: {
        getCurrentRoute() {
            return this.$route.name
        }
    },
    methods: {
        goToSystem(route) {
            if(route === 'menu-item-options') {
                this.$router.push({
                    name: route,
                    params: {
                        type: 'addons'
                    }
                })
            }
            else {
                this.$router.push({
                name: route
            })
            }
        },
        handleDropdown(route) {
            this.$router.push({
                name: route.route
            })
            this.$emit('valueChanged',route)
        },
        routeClicked(val) {
            this.$emit('clicked', val)
        }
    }
}
</script>
<style lang="stylus">
.drawer-class
    background-image : linear-gradient(to top, $primary -10%, $transition_primary 100%);

.service-dropdown
    width 175px;
    font-size: 10px;

.dropdown-text
    color: $dark;
    font-size: 10px;

.settings-section
    bottom: 2%;

.sidebar-active
    opacity: 1;
    visibility: visible;
    border-left: 5px solid
    border-left-color: $secondary
    transition: all 0.25s
</style>