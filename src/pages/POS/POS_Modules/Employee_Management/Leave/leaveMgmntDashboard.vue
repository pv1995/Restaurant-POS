<template>
    <q-page class="q-pa-lg page-background">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Employee Leaves</div>
            <q-btn class="add-leave-btn" color="primary" icon="add" no-caps label="Apply Leave" @click="ApplyLeaveRequest()"/>
        </section>
        <div class="q-mt-xl">   
            <q-card class="q-mt-lg q-pa-md">    
            <div class="text-h6 text-dark q-pl-md comfortaa">Unhandled Leave Requests</div>
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
            <div class="q-pa-sm">
                <customTable :showFilters="showSearch" :getAllDetails="getUnhandledLeaves" :headers="getUnhandledLeaveMgmntHeaders" :leaveApprovalButtons="rowActions" :withRowActions="rowActions" @edit="EditLeave"/>  
                <!-- :getAllDetails="getAllEmployeeDetails" -->
            </div>
            </q-card>
            <q-card class="q-mt-xl q-pa-md">
            <div class="text-h6 text-dark q-pl-md comfortaa">Handled Leave Requests</div>
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
                <div class="col-md-7">
                    <div class="q-pa-md">
                        <div class="q-gutter-sm">
                        <q-checkbox v-model="selection" color='grey-8' :val="leaveStatus" v-for="(leaveStatus,i) in leaveFilters" :key="i" :label='leaveStatus' input = displayVal() />
                        </div>
                    </div>
                </div>
            </div>
            <div class="q-pa-sm">
                <customTable :showFilters="showSearch" :getAllDetails="getHandledLeaves" :headers="getHandledLeaveMgmntHeaders"/>  
            </div>
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
         showSearch: true,
         //applyLeave: false,
         rowActions: true,
         editApply: '',
         leaveFilters: ['Approved', 'Rejected'],
         selection: []
         //getEachLeave: {}
        }     
    },
    components: {
        empCard,
        customTable,
        //applyLeave
    },
    created() {
        this.$store.dispatch('EmpDetails/getAllEmployees');
        this.$store.dispatch('EmpDetails/getAllLeaves');
       
    },
    computed: {
        getAllEmployeeDetails() {
            return this.$store.getters['EmpDetails/getAllEmployeeDetails'];
        },
        getAllEmployeeLeaves() {
            return this.$store.getters['EmpDetails/getAllEmployeeLeaves'];
        },
        getHandledLeaves() {
                return this.getAllEmployeeLeaves.filter(leave => {
                if(leave.status !== 'Unhandled') {
                    return leave
                }
            })
        },
        getUnhandledLeaves() {
                return this.getAllEmployeeLeaves.filter(leave => {
                if(leave.status === 'Unhandled') {
                    return leave
                }
            })
        },
        // totalEmpsLength() {
        //    return this.getAllEmployeeDetails !=undefined? this.getAllEmployeeDetails.length : 0 
        // },
        getHandledLeaveMgmntHeaders() {
            return this.$store.getters['tableHeaders/getHandledLeaveMgmntHeaders']
        },
        getUnhandledLeaveMgmntHeaders() {
          return this.$store.getters['tableHeaders/getUnhandledLeaveMgmntHeaders']
        }
        
    },
    methods: {
        ApplyLeaveRequest() {
            this.editApply = 'New Leave'
            this.$router.push({
                name: 'apply-leave',
                params: {type : this.editApply}
            })
        },
        EditLeave(data) {
            this.editApply = 'Edit Leave'
            this.$router.push({
                name: 'apply-leave',
                params: {type : this.editApply,
                         id: data.id
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