<template>
      <q-dialog v-model="open" persistent >
 
      <q-card class="add-emp-dialog">
         <q-toolbar>
                    <q-avatar color="transparent" text-color="accent" square icon="account_box" size="lg"/>
                    <q-toolbar-title v-if="addEditStatus=='editEmp'" class="no-padding text-h6 text-dark new-order-title comfortaa">Edit Employee</q-toolbar-title>
                    <q-toolbar-title v-else class="no-padding text-h6 text-dark new-order-title comfortaa">Add Employee</q-toolbar-title>
    

                    <q-btn flat round dense icon="close" @click="closeModal" />
                </q-toolbar>
          <q-separator />
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-dark q-pl-md comfortaa">Basic Details</div>
          
        </q-card-section>
 <q-form>
        <q-card-section>
      
         <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Full Name</q-item-label>
                            <q-input outlined dense v-model="empInfo.fullName" placeholder="First Name"  class="q-mt-sm" />
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Username</q-item-label>
                            <q-input outlined dense v-model="empInfo.userName" placeholder="Username"  class="q-mt-sm" />
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Pin</q-item-label>
                            <q-input outlined dense v-model="empInfo.pin" placeholder="pin"  class="q-mt-sm" />
                        </q-item-section>
                        
                    </q-item>

        <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Gender</q-item-label>
                            <q-select outlined dense v-model="empInfo.gender" label="Gender" :options="gender" class="q-mt-sm" />
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Date of Birth</q-item-label>
                             <q-input outlined v-model="empInfo.dob" placeholder="Date of Birth" class="q-mt-sm" dense >
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                <q-date v-model="empInfo.dob" @input="() => $refs.qDateProxy1.hide()" />
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                      </q-input>
              
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Phone Number</q-item-label>
                            <q-input outlined dense v-model="empInfo.phoneNumber" placeholder="Phone Number"  class="q-mt-sm" />
                        </q-item-section>
                        
        </q-item>
        <q-item>
                <q-item-section class="q-py-sm lato">
                    <q-item-label>Address</q-item-label>
                    <q-input outlined dense v-model="empInfo.address" placeholder="Address"  class="q-mt-sm" />
                </q-item-section>
                
        </q-item>
        </q-card-section>


        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-dark q-pl-md comfortaa">Job Details</div>
        </q-card-section>

        <q-card-section>
       
       <q-item>
        <q-item-section class="q-py-sm lato">
                            <q-item-label>Date of Joining</q-item-label>
                            <q-input outlined v-model="empInfo.doj" placeholder="Date of Joining"  class="q-mt-sm" dense >
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                                <q-date v-model="empInfo.doj" @input="() => $refs.qDateProxy1.hide()" />
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                      </q-input>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Designation</q-item-label>
                            <q-select outlined dense v-model="empInfo.jobDescription" label="Designation" :options="role" class="q-mt-sm" />
                        </q-item-section>
                       
       </q-item>

        <q-item>
            <q-item-section class="q-py-sm lato">
                    <q-item-label>Employee Role</q-item-label>
                   
                    <q-select outlined dense v-model="empInfo.roleType" label="Role" :options="epmloyeeRole" class="q-mt-sm" />
                </q-item-section>
            <q-item-section class="q-py-sm lato">
                <q-item-label>Salary</q-item-label>
                <q-input outlined dense v-model="empInfo.salary" placeholder="Salary"  class="q-mt-sm" />
            </q-item-section>
            <q-item-section class="q-py-sm lato">
                <q-item-label>Salary Rotation</q-item-label>
                <q-select outlined dense v-model="empInfo.salaryRotation" label="Salary Rotation" :options="salTiming" class="q-mt-sm" />
            </q-item-section>
                        
        </q-item>
        </q-card-section>

        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-dark q-pl-md comfortaa">Shift Details</div>
        </q-card-section>

         <q-card-section>
       
            <q-item>
              <q-item-section class="q-py-sm lato">
                  <q-item-label>Monday</q-item-label>
                  <q-select multiple use-chips outlined dense v-model="empInfo.mondayShifts" label="Select Shift" :options="createShifts" class="q-mt-sm" emit-value
        map-options/>
              </q-item-section>
              <q-item-section class="q-py-sm lato">
                  <q-item-label>Tuesday</q-item-label>
                  <q-select multiple use-chips outlined dense v-model="empInfo.tuesdayShifts" label="Select Shift" :options="createShifts" class="q-mt-sm" emit-value
        map-options/>
              </q-item-section>
              <q-item-section class="q-py-sm lato">
                  <q-item-label>Wednesday</q-item-label>
                  <q-select multiple use-chips outlined dense v-model="empInfo.wednesdayShifts" label="Select Shift" :options="createShifts" class="q-mt-sm" emit-value
        map-options/>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="q-py-sm lato">
                  <q-item-label>Thursday</q-item-label>
                  <q-select multiple use-chips outlined dense v-model="empInfo.thursdayShifts" label="Select Shift" :options="createShifts" class="q-mt-sm" emit-value
        map-options/>
                  
              </q-item-section>
              <q-item-section class="q-py-sm lato">
                  <q-item-label>Friday</q-item-label>
                  <q-select multiple use-chips outlined dense v-model="empInfo.fridayShifts" label="Select Shift" :options="createShifts" class="q-mt-sm" emit-value
        map-options/>
              </q-item-section>
              <q-item-section class="q-py-sm lato">
                  <q-item-label>Saturday</q-item-label>
                  <q-select multiple use-chips outlined dense v-model="empInfo.saturdayShifts" label="Select Shift" :options="createShifts" class="q-mt-sm" emit-value
        map-options/>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="q-py-sm lato">
                  <q-item-label>Sunday</q-item-label>
                  <q-select multiple use-chips outlined dense v-model="empInfo.sundayShifts" label="Select Shift" :options="createShifts" class="q-mt-sm" emit-value
        map-options/>
              </q-item-section>
              <q-item-section class="q-py-sm lato">
              </q-item-section>
              <q-item-section class="q-py-sm lato">
              </q-item-section>
            </q-item>
         </q-card-section>

        <q-card-section>
            <q-item>
                <q-item-section class="q-py-sm lato">
                            <q-item-label>Upload Image</q-item-label>
                            <q-file outlined dense bottom-slots v-model="empInfo.photo" placeholder="Upload Image" class="q-mt-sm" counter>
        <template v-slot:prepend>
          <q-icon name="cloud_upload" @click.stop />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.stop="empInfo.photo = null" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          .jpg, .jpeg only
        </template>
                          
      </q-file>
        </q-item-section>
            </q-item>
        </q-card-section>
        <q-separator />
        <q-card-section>
            <q-item>
                <q-item-section class="q-py-sm q-pl-xl q-ml-xl lato">
              <q-btn label="Cancel" outline color="primary" @click="resetValues"/>
                </q-item-section>
                <q-item-section class="q-py-sm q-pr-xl q-mr-xl lato">
              <q-btn label="Save" unelevated color="primary" @click="saveEmpDetails"/>
                </q-item-section>
            </q-item>    

        </q-card-section>

  </q-form>
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
        addEditStatus: {
            type: String,
            required: true
        },
        empDetails: {
          type: Object,
          required: false
        }
    },
    data() {
        return {
          empInfo:{},
           gender: ['Female', 'Male', 'Prefers not to share'],
           role: ['Admin', 'Manager', 'Cashier', 'Waiter', 'Chef'],
           shifts: [],
           salTiming: ['daily', 'weekly', 'monthly', 'quaterly', 'bi-yearly', 'yearly', 'boss'],
          //  fullName: 'Dhruv Mishra',
          //  uname: 'dhruv17',
          //  pin: '1794',
          //  phnum: '9790010748',
          //  sex: 'Male',
          //  dobirth: '17/02/2008',
          //  address: 'C-602, Amarpali Platinum',
          //  doj: '12/07/2008',
          //  designation: 'Manager',
          //  salary: '50000',
          //  salRotation: 'Monthly',
          //  empRole: '',
          //  empImg: null,
          //  sunShift: [],
          //  monShift: [],
          //  tueShift: [],
          //  wedShift: [],
          //  thuShift: [],
          //  friShift: [],
          //  satShift: [],
           //epmloyeeRole: ['god','super-admin','admin','employee','manager']
        }
    },
    created() {
      this.$store.dispatch('setup/getAllShifts');
    
    },
    mounted() {
          this.empInfo = this.empDetails
          console.log(this.empInfo, "ROW DATA IN EDIT EMP FORM")
        
    },
    computed: {
      epmloyeeRole(){
        return ['god','super-admin','admin','employee','manager']
      },
        getAllShiftDetails() {
            return this.$store.getters['setup/getAllShiftDetails'];
        },
        createShifts() {
            // this.shifts = {
            //   label : this.getAllShiftDetails.name,
            //   value : this.getAllShiftDetails.id
            // }
             return this.getAllShiftDetails.map(shift=>{
              return{
                label: shift.name,
                value: shift.id
              }
            })
            
        },
      emp(){
        if(!this.empDetails){
          return this.empInfo
        }
        return this.empDetails
      }
        
        
    },
    methods: {
        closeModal() {
          console.log("CLOSE")
            this.$emit('close')
        },
        saveEmpDetails() {
          console.log(this.doj)
          //const dob = date.formatDate(this.dobirth, 'x')
          //console.log('44',dob)          
          //var payload = {
            
                // fullName: this.fullName,
                // userName: this.uname,
                // gender: this.sex,
                // dob: date.formatDate(this.dobirth, 'x'),
                // phoneNumber: this.phnum,
                // address: this.address,
                // pin: this.pin,
                // doj: date.formatDate(this.doj, 'x'),
                // jobDescription: this.designation,
                // salary: this.salary,
                // salaryRotation: this.salRotation,
                // mondayShifts: this.monShift,
                // tuesdayShifts: this.tueShift,
                // wednesdayShifts: this.wedShift,
                // thursdayShifts: this.thuShift,
                // fridayShifts: this.friShift,
                // saturdaySifts: this.satShift,
                // sundayShifts: this.sunShift,
                // photo: this.empImg,
                // roleType: this.empRole,
            //}
            console.log(this.empInfo)
            this.$store.dispatch('EmpDetails/addEmployeeDetail', this.empInfo)
            this.$emit('close')
        },
        resetValues() {
           this.fullName= '',
           this.uname= '',
           this.pin= '',
           this.phnum= '',
           this.sex= '',
           this.dobirth= '',
           this.address= '',
           this.doj= '',
           this.designation= '',
           this.salary= '',
           this.salRotation= ''
        }
    }
}
</script>

<style lang="stylus" scoped>

.add-emp-dialog
    max-width: 1600px !important
    width: 800px
</style>