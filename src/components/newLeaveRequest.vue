<template>
      <q-dialog v-model="open" @show="fillEditLeaveForm" @hide="clearObject" persistent >
      <q-card class="emp-leave-dialog">
         <q-toolbar>
                    <q-avatar color="transparent" text-color="accent" square icon="date_range" size="lg"/>

                    <q-toolbar-title v-if="applyEditLeave=='New Leave'" class="no-padding text-h6 text-dark new-order-title comfortaa">New Leave Request</q-toolbar-title>
                    <q-toolbar-title v-else class="no-padding text-h6 text-dark new-order-title comfortaa">Edit Leave Request</q-toolbar-title>

                    <q-btn flat round dense icon="close" @click="closeModal" />
                </q-toolbar>
          <q-separator />
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-dark q-pl-md comfortaa">Basic Details</div>
          
        </q-card-section>

        <q-card-section>

         <q-item>
                        
                <q-item-section class="q-py-sm lato">
                            <q-item-label>Employee Name</q-item-label>
                            <q-select outlined dense v-model="leaveData.empId" label="Select Employee" :options="getEmpNames" class="q-mt-sm" emit-value map-options>
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
                            <q-select outlined dense v-model="leaveData.empName" label="Select Employee" :options="getEmpNames" class="q-mt-sm" emit-value map-options>
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
                <q-select outlined dense v-model="leaveData.leaveType" placeholder="Leave Type" :options="leaves" class="q-mt-sm" />
            </q-item-section>
         </q-item>
        <q-item>
            
            <q-item-section class="q-py-sm lato">
                <q-item-label>Start Date</q-item-label>
                  <q-input outlined v-model="leaveData.startDate" placeholder="Leave Start Date" class="q-mt-sm" dense >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                          <q-date v-model="leaveData.startDate" @input="() => $refs.qDateProxy.hide()" />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
            </q-item-section>
            <q-item-section class="q-py-sm lato">
                <q-item-label>End Date</q-item-label>
                <q-input outlined v-model="leaveData.endDate" placeholder="Leave End Date" class="q-mt-sm" dense >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date v-model="leaveData.endDate" @input="() => $refs.qDateProxy.hide()" />
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
                  <q-input outlined autogrow v-model="leaveData.desc" placeholder="Reason for Leave"  class="q-mt-sm" />      
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
    </q-dialog>
</template>
 
<script>
import { date } from 'quasar';
export default {
    props: {
        open: {
            type: Boolean,
            required: true
        },
        applyEditLeave: {
             type: String,
             required: true
        },
        getEachLeave: {
             type: Object,
             required: true
        }
    },
    data() {
        return {
           leaves: ['Casual Leave', 'Personal Paid Leave', 'Personal Unpaid Leave', 'Emergency Leave', 'Medical Paid Leave', 'Medical Unpaid Leave'],
           leaveData: {}
          //  empName: '',
          //  uname: '',
          //  leaveType: '',
          //  startDate: '',
          //  endDate: '',
          //  desc: ''
           
        }
    },
    created() {
      this.$store.dispatch('EmpDetails/getAllEmployees');
    },
    computed: {
        getAllEmployeeDetails() {
            return this.$store.getters['EmpDetails/getAllEmployeeDetails'];
          },
          
        getEmpNames() {
          return this.getAllEmployeeDetails.map(employee=>{
              return{
                label: employee.fullName,
                value: employee.id,
                userName: employee.userName
              }
            })
          }
       },
    methods: {
          fillEditLeaveForm() {
            if(this.getEachLeave !== undefined && this.applyEditLeave == 'Edit Leave') {
            this.leaveData.empId = this.getEachLeave.employee.id
            this.leaveData.leaveType = this.getEachLeave.type
            this.leaveData.desc = this.getEachLeave.notes
            var fromDate = new Date(parseInt(this.getEachLeave.from)).toDateString()
            const [, month, day, year] = fromDate.split(' ')
            this.leaveData.startDate = `${day}/${month}/${year}`
            var toDate = new Date(parseInt(this.getEachLeave.to)).toDateString()
            const [, mm, dd, yyyy] = toDate.split(' ')
            this.leaveData.endDate = `${dd}/${mm}/${yyyy}`
            }
            this.$forceUpdate()
          },
          clearObject() {
            this.leaveData = {}
          },
          closeModal() {
              this.$emit('close')
          },
          saveLeaveDetails() {
            const from = date.formatDate(this.leaveData.startDate, 'x')
            const to = date.formatDate(this.leaveData.endDate, 'x')
                    
            var payload = {
                  employeeId: this.leaveData.empId,
                  type: this.leaveData.leaveType,
                  notes: this.leaveData.desc,
                  from,
                  to
              }
              console.log(payload)
              
              this.$store.dispatch('EmpDetails/applyNewLeave', payload)
              this.closeModal()
          },
          resetValues() {
            this.empId= '',
            this.uname= '',
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