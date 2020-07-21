<template>
    <q-page class="q-pa-lg page-background">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Employees Dashboard</div>
            <q-btn class="create-order-button lato" color="primary" icon="add" no-caps label="Add Employee" @click="goToAddEmp"/>
        </section>
        <section class="analytics-graphics q-mt-xl">
            <div class="flex justify-center">
                <div class="col-md-6">
                    <div class="row">
                        <div class="q-pb-xl">
                            <empCard cardType = 'daily-employee-info'  :count='totalEmpsLength'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="">
          <q-card>
            <q-tabs
              v-model="tab"
              dense
              align="left"  
              active-color="secondary"
              indicator-color="secondary"
            >
              <q-tab name="allemp" class="tab-style" label="All"/>
              <q-tab name="morningshift" class="tab-style" label="Morning Shift" />
              <q-tab name="eveningshift" class="tab-style" label="Evening Shift" />
              <q-tab name="nightshift" class="tab-style" label="Night Shift" />
            </q-tabs>
            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="allemp">
                <div class="row">
                    <div class="col-sm-2">
                        <div class="q-pa-md">
                            <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown">
                                <q-list>
                                    <q-item clickable v-for="(header,i) in headers" :key="i" v-close-popup @click="onItemClick(header.label)">
                                        <q-item-section>
                                            <q-item-label>{{ header.label }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-btn-dropdown>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="q-pa-md">
                            <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                <template v-slot:append>
                                    <q-icon class="search-icon" name="search" />
                                </template>
                            </q-input>
                        </div>
                    </div>
                </div>
                <div>
                  <customTable :showFilters="showSearch" :withCheckbox="checkReq" :withRowActions="rowActions" :headers="getEmpMgmntHeaders" @edit="editEmp" :getAllDetails="getAllEmployeeDetails"/>  
                </div>
              </q-tab-panel>

              <q-tab-panel name="morningshift">
                <div class="row">
                    <div class="col-sm-2">
                        <div class="q-pa-md">
                            <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown">
                                <q-list>
                                    <q-item clickable v-for="(header,i) in headers" :key="i" v-close-popup @click="onItemClick(header.label)">
                                        <q-item-section>
                                            <q-item-label>{{ header.label }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-btn-dropdown>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="q-pa-md">
                            <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                <template v-slot:append>
                                    <q-icon class="search-icon" name="search" />
                                </template>
                            </q-input>
                        </div>
                    </div>
                </div>
                <div>
                  <customTable :showFilters="showSearch" :withCheckbox="checkReq" :withRowActions="rowActions" :headers="getEmpMgmntHeaders" :getAllDetails="getAllEmployeeDetails"/>  
                </div>
              </q-tab-panel>

              <q-tab-panel name="eveningshift">
                <div class="row">
                    <div class="col-sm-2">
                        <div class="q-pa-md">
                            <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown">
                                <q-list>
                                    <q-item clickable v-for="(header,i) in headers" :key="i" v-close-popup @click="onItemClick(header.label)">
                                        <q-item-section>
                                            <q-item-label>{{ header.label }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-btn-dropdown>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="q-pa-md">
                            <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                <template v-slot:append>
                                    <q-icon class="search-icon" name="search" />
                                </template>
                            </q-input>
                        </div>
                    </div>
                </div>
                <div>
                  <customTable :showFilters="showSearch" :withCheckbox="checkReq" :withRowActions="rowActions" :headers="getEmpMgmntHeaders" :getAllDetails="getAllEmployeeDetails"/>  
                </div>
              </q-tab-panel>

              <q-tab-panel name="nightshift">
                <div class="row">
                    <div class="col-sm-2">
                        <div class="q-pa-md">
                            <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown">
                                <q-list>
                                    <q-item clickable v-for="(header,i) in headers" :key="i" v-close-popup @click="onItemClick(header.label)">
                                        <q-item-section>
                                            <q-item-label>{{ header.label }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-btn-dropdown>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="q-pa-md">
                            <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                <template v-slot:append>
                                    <q-icon class="search-icon" name="search" />
                                </template>
                            </q-input>
                        </div>
                    </div>
                </div>
                <div>
                  <customTable :showFilters="showSearch" :withCheckbox="checkReq" :withRowActions="rowActions" :headers="getEmpMgmntHeaders" :getAllDetails="getAllEmployeeDetails"/>  
                </div>
              </q-tab-panel>

            </q-tab-panels>
          </q-card>
        </div>
    </q-page>
</template>

<script>
import customTable from 'src/components/table.vue';
import empCard from 'src/components/card.vue';

export default {
    data() {
        return {
         tab: 'allemp',
         checkReq: false,
         showSearch: true,
         rowActions: true,
         addEditEmp: '',
         empData: {}
        }     
    },
    components: {
        empCard,
        customTable,
        // addEmployee
    },
    created() {
      this.$store.dispatch('EmpDetails/getAllEmployees');
    },
    computed: {
        getAllEmployeeDetails() {
            return this.$store.getters['EmpDetails/getAllEmployeeDetails'];
        },
        totalEmpsLength() {
           return this.getAllEmployeeDetails !=undefined? this.getAllEmployeeDetails.length : 0 
        },
        getEmpMgmntHeaders() {
          return this.$store.getters['tableHeaders/getEmpMgmntHeaders']
        }
    },
    methods: {
        goToAddEmp() {
            this.addEditEmp = 'addEmp'
            this.$router.push({
                name: 'add-new-emp',
                params: {type : this.addEditEmp}
            })
        },
        editEmp(data) {
            this.addEditEmp = 'editEmp'
            this.$router.push({
                name: 'add-new-emp',
                params: {type : this.addEditEmp,
                         name : data.userName
                        }
            })
        }
    },
    
}
</script>

<style scoped lang='stylus'>

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