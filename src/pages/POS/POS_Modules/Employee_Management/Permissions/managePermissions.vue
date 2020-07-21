<template>
    <q-page class="q-pa-xl page-background">
                
       
        <div class="q-mt-sm">
         <!-- <div class="row q-pl-sm  justify-center"> -->
            <div class="col-md-3 text-left q-pb-lg" v-for="employee in getAllEmployeeDetails" :key="employee.id">
                <div v-if="employee.fullName === getEmpInfo">
                <empCard cardType = 'employee-info' :empDetails='employee'/>
            </div>
        <!-- </div> -->
                </div>
<div class="order-table q-mt-lg">
         <q-card class="q-pt-md">
        <q-tabs
          v-model="tab"
          dense
          align="left"  
          active-color="secondary"
          indicator-color="secondary"
        >
          <q-tab name="orderMng" class="tab-style" label="Order Managemnet" />
          <q-tab name="inventoryMng" class="tab-style" label="Inventory Management" />
          <q-tab name="KDS" class="tab-style" label="Kitchen Display System" />
          <q-tab name="cashMng" class="tab-style" label="Cash Management" />
          <q-tab name="empMng" class="tab-style" label="Employee Management" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="orderMng">
            <div>
            <div class="q-pa-md">
             <q-table
              :data="permissions"
              :columns="Headers"
              row-key="name"
             >
             
             <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="permission" :props="props">
                        <div> {{props.row.name}} </div>
                    </q-td>
                    <q-td key="status" :props="props">
                        <q-toggle size="xl" color="accent" v-model="props.row.status"  />
                    </q-td>
                </q-tr>
       
             </template>
             
             </q-table>
            </div>


            </div>
          </q-tab-panel>

          <q-tab-panel name="inventoryMng">
            <div>
        
             <div class="q-pa-md">
             <q-table
              :data="permissions"
              :columns="Headers"
              row-key="name"
             >
             
             <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="permission" :props="props">
                        <div> {{props.row.name}} </div>
                    </q-td>
                    <q-td key="status" :props="props">
                        <q-toggle size="xl" color="accent" v-model="props.row.status"  />
                    </q-td>
                </q-tr>
       
             </template>
             
             </q-table>
            </div>

            </div>
          </q-tab-panel>

          <q-tab-panel name="KDS">
            <div>
          
              <div class="q-pa-md">
             <q-table
              :data="permissions"
              :columns="Headers"
              row-key="name"
             >
             
             <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="permission" :props="props">
                        <div> {{props.row.name}} </div>
                    </q-td>
                    <q-td key="status" :props="props">
                        <q-toggle size="xl" color="accent" v-model="props.row.status"  />
                    </q-td>
                </q-tr>
       
             </template>
             
             </q-table>
            </div>

            </div>
          </q-tab-panel>

          <q-tab-panel name="cashMng">
            <div>

              <div class="q-pa-md">
             <q-table
              :data="permissions"
              :columns="Headers"
              row-key="name"
             >
             
             <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="permission" :props="props">
                        <div> {{props.row.name}} </div>
                    </q-td>
                    <q-td key="status" :props="props">
                        <q-toggle size="xl" color="accent" v-model="props.row.status"  />
                    </q-td>
                </q-tr>
       
             </template>
             
             </q-table>
            </div>

            </div>
          </q-tab-panel>

          <q-tab-panel name="emphMng">
            <div>

           <div class="q-pa-md">
             <q-table
              :data="permissions"
              :columns="Headers"
              row-key="name"
             >
             
             <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="permission" :props="props">
                        <div> {{props.row.name}} </div>
                    </q-td>
                    <q-td key="status" :props="props">
                        <q-toggle size="xl" color="accent" v-model="props.row.status"  />
                    </q-td>
                </q-tr>
       
             </template>
             
             </q-table>
            </div>
            
            </div>
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
     
        
        </div>
       </div>
        
            
    </q-page>
</template>

<script>

import empCard from 'src/components/card.vue';
import addEmpDialog from 'src/components/addEmp.vue'

export default {
    components: {
        empCard,
        "add-emp" : addEmpDialog
    },
    data() {
        return {
            permissionStatus: '',
            tab: 'orderMng',
            showAddEmp: false,
            Headers: [
        {
          name: 'permission',
          required: true,
          label: 'Permissions',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'status', align: 'center', label: 'Status', field: 'status' },
      ],
      permissions: [
        {
          name: 'Permission 1',
          status: true,
        },
        {
          name: 'Permission 2',
          status: true,
        },
        {
          name: 'Permission 3',
          status: false,
        },
        {
          name: 'Permission 4',
          status: false,
        },
        {
          name: 'Permission 5',
          status: true,
        },
      ]
        }
    },
    mounted(){ 
        console.log('emp Dashboard ran !!!!')
        console.log(this.getAllEmployeeDetails)
        console.log(this.$store.getters['EmpDetails/getAllEmployeeDetails'])
    },
    computed: {
        getAllEmployeeDetails() {
            return this.$store.getters['EmpDetails/getAllEmployeeDetails'];
        },
        getEmpInfo() {
            return this.$route.params.name
        },
        getPermissionStatus() {
         this.permissionStatus = this.permissions.status
        }    
        },
    
}
</script>

<style scoped lang='stylus'>
.manage-employees-title 
  font-family: Comfortaa
  font-size: 32px
  letter-spacing: 0.75px
  text-align: center
  color: $primary

.add-emp-btn
  font-family: Comfortaa
  font-size: 14px
  text-align: center
  color: #fafaf6

.order-table
   background-color: #fafaf6

.tab-style, .q-tab__label
  font-family: Comfortaa
  font-size: 16px
  font-weight: bold
  letter-spacing: 0.5px
  color: #222222
  text-transform: none

</style>