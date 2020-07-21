<template>
    <q-layout view="lHh Lpr lFf">
        <mainHeader @clicked="leftDrawerOpen = !leftDrawerOpen" />
        <sidebar :links="essentialLinks" :sidebarOpen="leftDrawerOpen" :currentSystem="currentSystem" :sidebarInset="sidebarInset"/>
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
            currentSystem: 'Shop Setup',
            sidebarInset: true,
            essentialLinks: []
        }
    },
   
}
</script>
<style lang="stylus" scoped>

</style>