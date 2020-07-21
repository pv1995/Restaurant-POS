<template>
    
    <q-layout view="lHh Lpr lFf">
        <mainHeader @clicked="leftDrawerOpen = !leftDrawerOpen" />

        
       
        <!-- <sidebar :links="essentialLinks" :sidebarOpen="leftDrawerOpen"  :currentSystem="currentSystem" /> -->
        <!-- @valueChanged='changeCurrentSystem'   :sidebarInset="sidebarInset" -->
        <q-page-container>
        
            
        
            
          
            <router-view />
        </q-page-container>
    </q-layout>
    

</template>
<script>
import mainHeader from '../components/header.vue';
// import sidebar from '../components/sidebar.vue';

export default {
    components: {
        mainHeader,
        // sidebar,
       
    },
    
    data() {
        return {
            
            leftDrawerOpen: false,
            // currentSystem: 'Kitchen Display System',
            // sidebarInset: false,
            // essentialLinks: [
                
            //     {
            //     title: 'Home',
            //     route: '/kds',
            //     icon: 'restaurant'
            //     },
            //     {
            //     title: 'Prefrences',
            //     route: '/kds-pref',
            //     icon: 'restaurant'
            //     },
            //     {
            //     title: 'Help',
            //     route: '/kds-help',
            //     icon: 'restaurant'
            //     },
            //     {
            //     title: 'Settings',
            //     route: '/kds-settings',
            //     icon: 'restaurant'
            //     },
            
            // ]
        
    }
}
}
</script>
<style lang="stylus" scoped>

</style>