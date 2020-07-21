<template>
    <q-layout view="lHh Lpr lFf">
        <mainHeader @clicked="leftDrawerOpen = !leftDrawerOpen" />
        <sidebar :links="essentialLinks" :sidebarOpen="leftDrawerOpen" :currentSystem="currentSystem"/>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
<script>
import mainHeader from '../components/header.vue';
import sidebar from '../components/sidebar.vue'

export default {
    components: {
        mainHeader,
        sidebar
    },
    data() {
        return {
            leftDrawerOpen: true,
            currentSystem: 'Inventory Management',
            essentialLinks: [
                {
                title: 'Stock View',
                route: '/inventory',
                icon: 'restaurant'
                },
                {
                title: 'Kitchen Inventory',
                route: '/kitchen-inventory',
                icon: 'kitchen'
                },
                {
                title: 'Purchase Order',
                route: '/purchase-order',
                icon: 'shopping_cart'
                },
                {
                title: 'Receiving',
                route: '/receiving',
                icon: 'system_update_alt'
                },
                {
                title: 'Invoices',
                route: '/invoices',
                icon: 'people'
                },
                {
                title: 'Audit',
                route: '/audit',
                icon: 'verified_user'
                },
                {
                title: 'Wastage',
                route: '/wastage',
                icon: 'delete_sweep'
                },
                {
                title: 'Help',
                route: '/help',
                icon: 'help_outline'
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>