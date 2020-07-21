<template>
      <q-page class="flex flex-center q-py-xl page-background">
      <q-card class="emp-leave-dialog">
         <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="goBack" class="q-mr-md"/>
                    <q-avatar color="transparent" text-color="accent" square icon="date_range" size="lg"/>

                    <q-toolbar-title v-if="applyEditLeave=='New Leave'" class="no-padding text-h6 text-dark new-order-title comfortaa">New Leave Request</q-toolbar-title>
                    <q-toolbar-title v-else class="no-padding text-h6 text-dark new-order-title comfortaa">Edit Leave Request</q-toolbar-title>

                </q-toolbar>
          <q-separator />
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-dark q-pl-md comfortaa">Basic Details</div>
          
        </q-card-section>

        <q-card-section>

         <q-item>
                        
                <q-item-section class="q-py-sm lato">
                            <q-item-label>Employee Name</q-item-label>
                            <q-select outlined dense v-model="empId" label="Select Employee" :options="getEmpNames" class="q-mt-sm" emit-value map-options>
                            <template v-slot:option="scope">
                            <q-item
                              v-bind="scope.itemProps"
                              v-on="scope.itemEvents"
                            >
                              <q-item-section>
                                <q-item-label v-html="scope.opt.label" />
                                <q-item-label caption>{{ scope.opt.userName }}</q-item-label>
                              </q-item-section>
                            </q-item>
                          </template>
                          </q-select>
        
                        </q-item-section>
                         <!-- <q-item-section v-else class="q-py-sm lato">
                            <q-item-label>Employee Name</q-item-label>
                            <q-select outlined dense v-model="empName" label="Select Employee" :options="getEmpNames" class="q-mt-sm" emit-value map-options>
                            <template v-slot:option="scope">
                            <q-item
                              v-bind="scope.itemProps"
                              v-on="scope.itemEvents"
                            >
                              <q-item-section>
                                <q-item-label v-html="scope.opt.label" />
                                <q-item-label caption>{{ scope.opt.userName }}</q-item-label>
                              </q-item-section>
                            </q-item>
                          </template>
                          </q-select>
        
                        </q-item-section> -->
                        <q-item-section class="q-py-sm lato">
                <q-item-label>Leave Type</q-item-label>
                <q-select outlined dense v-model="leaveType" label="Leave Type" :options="leaves" class="q-mt-sm" />
            </q-item-section>
         </q-item>
        <q-item>
            
            <q-item-section class="q-py-sm lato">
                <q-item-label>Start Date</q-item-label>
                  <q-input outlined v-model="startDate" placeholder="Leave Start Date" class="q-mt-sm" dense >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy class="q-pa-sm" ref="sDateProxy" transition-show="scale" transition-hide="scale">
                          <q-date landscape v-model="startDate" @input="() => $refs.sDateProxy.hide()" >
                            <template v-slot:default>
                            <div class="text-right"> 
                              <q-btn label="OK" color="primary" flat v-close-popup />
                            </div> 
                            </template>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
            </q-item-section>
            <q-item-section class="q-py-sm lato">
                <q-item-label>End Date</q-item-label>
                <q-input outlined v-model="endDate" placeholder="Leave End Date" class="q-mt-sm" dense >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="eDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date landscape v-model="endDate" @input="() => $refs.eDateProxy.hide()" >
                           <template v-slot:default>
                            <div class="text-right"> 
                              <q-btn label="OK" color="primary" flat v-close-popup />
                            </div>
                           </template>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
            </q-item-section>
        </q-item>
        </q-card-section>

        <q-card-section>
            <q-item>
                <q-item-section class="q-py-sm lato">
                  <q-item-label>Leave Description</q-item-label>
                  <q-input outlined autogrow v-model="desc" placeholder="Reason for Leave"  class="q-mt-sm" />      
                </q-item-section>
            </q-item>
        </q-card-section>
        <q-separator />
        <q-card-section>
            <q-item class="no-padding">
                <q-item-section class="q-ml-xl lato">
              <q-btn label="Cancel" outline color="primary" class="q-ml-xl q-px-sm" @click="resetValues"/>
                </q-item-section>
                <q-item-section class="q-mr-xl lato">
              <q-btn label="Apply" unelevated color="primary" class="q-mr-xl q-px-sm" @click="saveLeaveDetails"/>
                </q-item-section>
            </q-item>
        </q-card-section>
      </q-card>
      </q-page>
</template>
 
<script>
import { date } from 'quasar';
export default {
    // props: {
    //     open: {
    //         type: Boolean,
    //         required: true
    //     },
    //     applyEditLeave: {
    //          type: String,
    //          required: true
    //     },
    //     getEachLeave: {
    //          type: Object,
    //          required: true
    //     }
    // },
    data() {
        return {
           leaves: ['Casual Leave', 'Personal Paid Leave', 'Personal Unpaid Leave', 'Emergency Leave', 'Medical Paid Leave', 'Medical Unpaid Leave'],
           //leaveData: {},
           applyEditLeave: '',
           leaveId: '',
          //  empId: '',
          //  leaveType: '',
          //  startDate: '',
          //  endDate: '',
          //  desc: ''
           
        }
    },
    created() {
      this.$store.dispatch('EmpDetails/getAllEmployees');
      this.applyEditLeave = this.$route.params.type
        if (this.applyEditLeave == 'editEmp') {
         this.leaveId = this.$route.params.id
         this.$store.dispatch('EmpDetails/getEachLeave',data.id)
        }
    },
    computed: {
        getAllEmployeeDetails() {
            return this.$store.getters['EmpDetails/getAllEmployeeDetails'];
          },
        getEachLeave() {
            return this.$store.getters['EmpDetails/getEachLeave']
        },
          
        getEmpNames() {
          return this.getAllEmployeeDetails.map(employee=>{
              return{
                label: employee.fullName,
                value: employee.id,
                userName: employee.userName
              }
            })
          },
        empId: {
            get() {
                if(this.getEachLeave !== {}) {
                    return this.getEachLeave.employeeId
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'employeeId'
                }
                this.$store.commit('EmpDetails/editEmpLeave', data)
            }
        },
        leaveType: {
            get() {
                if(this.getEachLeave !== {}) {
                    return this.getEachLeave.type
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'type'
                }
                this.$store.commit('EmpDetails/editEmpLeave', data)
            }
        },
        startDate: {
            get() {
                if(this.getEachLeave !== {}) {
                    return this.getEachLeave.from
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'from'
                }
                this.$store.commit('EmpDetails/editEmpLeave', data)
            }
        },
        endDate: {
            get() {
                if(this.getEachLeave !== {}) {
                    return this.getEachLeave.to
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'to'
                }
                this.$store.commit('EmpDetails/editEmpLeave', data)
            }
        },
        desc: {
            get() {
                if(this.getEachLeave !== {}) {
                    return this.getEachLeave.notes
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'notes'
                }
                this.$store.commit('EmpDetails/editEmpLeave', data)
            }
        },
       },
    methods: {
        goBack() {
           this.$router.push('/leaves')
        },
          saveLeaveDetails() {
            const from = date.formatDate(this.startDate, 'x')
            const to = date.formatDate(this.endDate, 'x')
                    
            var payload = {
                  employeeId: this.empId,
                  type: this.leaveType,
                  notes: this.desc,
                  from,
                  to
              }
              console.log(payload)
              
              this.$store.dispatch('EmpDetails/applyNewLeave', payload)
              
          },
          
          resetValues() {
            this.empId= '',
            this.leaveType= '',
            this.startDate= '',
            this.endDate= '',
            this.desc= ''
          }
    }
}
</script>

<style lang="stylus" scoped>

.emp-leave-dialog
    max-width: 1600px !important
    width: 800px
</style>