<template>
    <q-layout view="lHh Lpr lFf">
        <mainHeader @clicked="leftDrawerOpen = !leftDrawerOpen" />
        <sidebar :links="essentialLinks" :sidebarOpen="leftDrawerOpen"  :currentSystem="currentSystem" :sidebarInset="sidebarInset" @clicked="goToSystem"/> 
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
            currentSystem: 'Order Management',
            sidebarInset: false,
            essentialLinks: [
                {
                title: 'Orders',
                route: 'order-dashboard',
                icon:  'img:statics/Orders_18.png'
                },
                {
                title: 'Table Management',
                route: 'dineIn-dashboard',
                icon: 'img:statics/tables.png'
                },
                {
                title: 'Order Support',
                route: '/order-support',
                icon: 'img:statics/order_help.png'
                },
                {
                title: 'Bills',
                route: '/bills',
                icon: 'img:statics/Bills.png'
                },
                {
                title: 'Analytics',
                route: '/order-analytics',
                icon: 'img:statics/Analytics.png'
                },
                {
                title: 'Help',
                route: '/tables',
                icon: 'help_outline'
                }
            ]
        }
    },
    methods: {
        goToSystem(val) {
            this.$router.push({
                name: val
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>