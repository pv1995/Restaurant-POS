<template>
  <q-layout view="lHh Lpr lFf">
    <mainHeader @clicked="leftDrawerOpen = !leftDrawerOpen" />
    <sidebar :links="essentialLinks" :sidebarOpen="leftDrawerOpen" :currentSystem="'Order Management'" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import {appName} from '../config.js'
import mainHeader from '../components/header.vue'
import sidebar from '../components/sidebar.vue';

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    mainHeader,
    sidebar
  },

  data () {
    return {
      leftDrawerOpen: true,
      essentialLinks: [
        {
          title: 'Home',
          route: 'select-dashboard',
          icon: 'restaurant'
        },
        {
          title: 'Restaurant POS',
          route: 'order-dashboard',
          icon: 'restaurant'
        },
        {
          title: 'CRM',
          route: '/crm',
          icon: 'people'
        }
      ],
      globalName: ''
    }
  },
  created() {
    this.globalName = appName;
  }
}
</script>
