<template>
    
    <q-layout view="lHh Lpr lFf">
        <mainHeader @clicked="leftDrawerOpen = !leftDrawerOpen" />

        
       
        <sidebar :links="essentialLinks" :sidebarOpen="leftDrawerOpen"  :currentSystem="currentSystem" />
        <!-- @valueChanged='changeCurrentSystem'   :sidebarInset="sidebarInset" -->
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
            currentSystem: 'Cash Management',
            
            essentialLinks: [
                
                {
                title: 'Home',
                route: 'cash-management',
                icon: 'attach_money'
                },
                {
                title: 'Analytics',
                route: '/cash-analytics',
                icon: 'img:statics/Analytics.png'
                },
                {
                title: 'Help',
                route: '/cash-help',
                icon: 'help_outline'
                },
            ]
        
    }
}
}
</script>
<style lang="stylus" scoped>

</style>