import Vue from 'vue'
import Vuex from 'vuex'
import login from './login';
import Orders from './allOrders';
import EmpDetails from './Employees';
import SideBarTabs from './SidebarMenu';
import menu from './menu';
import customers from './customers';
import setup from './setup';
import tableHeaders from './table-headers';
import inventory from './inventory';
import tableSearch from './table-search';
// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      login,
      Orders,
      EmpDetails,
      SideBarTabs,
      menu,
      customers,
      setup,
      tableHeaders,
      inventory,
      tableSearch
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
