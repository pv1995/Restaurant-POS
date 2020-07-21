<template>   
    <q-layout view="lHh Lpr lFf">
        <mainHeader @clicked="leftDrawerOpen = !leftDrawerOpen" /> 
        <sidebar :links="essentialLinks" :sidebarOpen="leftDrawerOpen" :currentSystem="currentSystem" @clicked="goToSystem"/>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
<script>
import mainHeader from '../components/header.vue';
import sidebar from '../components/sidebar.vue';

export default {
    components: {
        mainHeader,
        sidebar,
       
    },
    
    data() {
        return {
            
            leftDrawerOpen: true,
            currentSystem: 'Employee Management',
            essentialLinks: [
                
                {
                title: 'Home',
                route: 'emp-dashboard',
                icon: 'restaurant'
                },
                {
                title: 'Role Management',
                route: 'emp-roles',
                icon: 'restaurant'
                },
                {
                title: 'Shift Management',
                route: 'emp-shift',
                icon: 'restaurant'
                },
                {
                title: 'Leaves',
                route: 'emp-leaves',
                icon: 'restaurant'
                },
                {
                title: 'Salaries',
                route: 'emp-salaries',
                icon: 'restaurant'
                },
                {
                title: 'Help',
                route: '/emphelp',
                icon: 'restaurant'
                },
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