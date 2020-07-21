<template>
    <q-page class="q-px-xl page-background">
                <div class="row justify-center">
            <div class="col-md-3 text-left q-pl-md q-pb-md" v-for="employee in getAllEmployeeDetails" :key="employee.id">
                <div v-if="employee.name === getEmpInfo">
                <empCard cardType = 'employee-info' :empDetails='employee'/>
            </div>
        </div>
                </div>
       <div class="order-table">
        <div class="q-mt-sm">


         <q-card>
        <q-tabs
          v-model="tab"
          dense
          align="left"  
          active-color="secondary"
          indicator-color="secondary"
        >
          <q-tab name="monday" class="tab-style" label="Monday" />
          <q-tab name="tuesday" class="tab-style" label="Tuesday" />
          <q-tab name="wednesday" class="tab-style" label="Wednesday" />
          <q-tab name="thursday" class="tab-style" label="Thursday" />
          <q-tab name="friday" class="tab-style" label="Friday" />
          <q-tab name="saturday" class="tab-style" label="Saturday" />
          <q-tab name="sunday" class="tab-style" label="Sunday" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="monday">
            <div>
            <div class="q-pa-md">
             <q-table
              :data="shifts"
              :columns="Headers"
              row-key="name"
             >
             
             <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="shift" :props="props">
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

          <q-tab-panel name="tuesday">
            <div>
        
             <div class="q-pa-md">
             <q-table
              :data="shifts"
              :columns="Headers"
              row-key="name"
             >
             
             <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="shift" :props="props">
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

          <q-tab-panel name="wednesday">
            <div>
          
              <div class="q-pa-md">
             <q-table
              :data="shifts"
              :columns="Headers"
              row-key="name"
             >
             
             <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="shift" :props="props">
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

          <q-tab-panel name="thursday">
            <div>

              <div class="q-pa-md">
             <q-table
              :data="shifts"
              :columns="Headers"
              row-key="name"
             >
             
             <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="shift" :props="props">
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

          <q-tab-panel name="friday">
            <div>

           <div class="q-pa-md">
             <q-table
              :data="shifts"
              :columns="Headers"
              row-key="name"
             >
             
             <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="shift" :props="props">
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

          <q-tab-panel name="saturday">
            <div>

           <div class="q-pa-md">
             <q-table
              :data="shifts"
              :columns="Headers"
              row-key="name"
             >
             
             <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="shift" :props="props">
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

          <q-tab-panel name="sunday">
            <div>

           <div class="q-pa-md">
             <q-table
              :data="shifts"
              :columns="Headers"
              row-key="name"
             >
             
             <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="shift" :props="props">
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
            shiftStatus: '',
            tab: 'monday',
            showAddEmp: false,
            Headers: [
        {
          name: 'shift',
          required: true,
          label: 'Shifts',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'status', align: 'center', label: 'Status', field: 'status' },
      ],
      shifts: [
        {
          name: 'Morning',
          status: false,
        },
        {
          name: 'Afternoon',
          status: true,
        },
        {
          name: 'Evening',
          status: false,
        },
        {
          name: 'Night',
          status: true,
        },
      ]
        }
    },
    mounted(){ 
        console.log('emp Dashboard ran !!!!')
        console.log(this.getAllEmployeeDetails)
        console.log(this.$store.getters['EmpDetais/getAllEmployeeDetails'])
    },
    computed: {
        getAllEmployeeDetails() {
            return this.$store.getters['EmpDetais/getAllEmployeeDetails'];
        },
        getEmpInfo() {
            return this.$route.params.name
        },
        getshiftStatus() {
         this.shiftStatus = this.shifts.status
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