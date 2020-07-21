<template>
     <q-page class="flex flex-center q-py-xl page-background">
      <q-card class="add-emp-dialog">
          
         <q-toolbar>
             <q-btn flat round dense icon="arrow_back" @click="goBack" class="q-mr-md"/>
                    <q-avatar color="transparent" text-color="accent" square icon="account_box" size="lg"/>
                    <q-toolbar-title v-if="addEditStatus=='editEmp'" class="no-padding text-h6 text-dark new-order-title comfortaa">Edit Employee</q-toolbar-title>
                    <q-toolbar-title v-else class="no-padding text-h6 text-dark new-order-title comfortaa">Add Employee</q-toolbar-title>

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
                            <q-input outlined dense v-model="fullName" placeholder="First Name"  class="q-mt-sm" />
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Username</q-item-label>
                            <q-input outlined dense v-model="userName" placeholder="Username"  class="q-mt-sm" />
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Pin</q-item-label>
                            <q-input outlined dense v-model="pin" placeholder="pin"  class="q-mt-sm" />
                        </q-item-section>
                        
                    </q-item>

        <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Gender</q-item-label>
                            <q-select outlined dense v-model="sex" label="Gender" :options="gender" class="q-mt-sm" />
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Date of Birth</q-item-label>
                             <q-input outlined v-model="dob" placeholder="Date of Birth" class="q-mt-sm" dense >
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                <q-date v-model="dob" @input="() => $refs.qDateProxy1.hide()" />
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                      </q-input>
              
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Phone Number</q-item-label>
                            <q-input outlined dense v-model="phoneNumber" placeholder="Phone Number"  class="q-mt-sm" />
                        </q-item-section>
                        
        </q-item>
        <q-item>
                <q-item-section class="q-py-sm lato">
                    <q-item-label>Address</q-item-label>
                    <q-input outlined dense v-model="address" placeholder="Address"  class="q-mt-sm" />
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
                            <q-input outlined v-model="doj" placeholder="Date of Joining"  class="q-mt-sm" dense >
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                                <q-date v-model="doj" @input="() => $refs.qDateProxy1.hide()" />
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                      </q-input>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Designation</q-item-label>
                            <q-select outlined dense v-model="empRole" label="Designation" :options="role" class="q-mt-sm" />
                        </q-item-section>
                       
       </q-item>

        <q-item>
            <q-item-section class="q-py-sm lato">
                <q-item-label>Salary</q-item-label>
                <q-input outlined dense v-model="salary" placeholder="Salary"  class="q-mt-sm" />
            </q-item-section>
            <q-item-section class="q-py-sm lato">
                <q-item-label>Salary Rotation</q-item-label>
                <q-select outlined dense v-model="salaryRotation" label="Salary Rotation" :options="salTiming" class="q-mt-sm" />
            </q-item-section>
                        
        </q-item>
        <q-item>
            <q-item-section class="q-py-sm lato">
                    <q-item-label>Job Description</q-item-label>
                   
                    <q-select outlined dense v-model="description" label="Role" :options="epmloyeeRole" class="q-mt-sm" />
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
                  <q-select multiple use-chips outlined dense v-model="monShifts" label="Select Shift" :options="createShifts" class="q-mt-sm" emit-value
        map-options/>
              </q-item-section>
              <q-item-section class="q-py-sm lato">
                  <q-item-label>Tuesday</q-item-label>
                  <q-select multiple use-chips outlined dense v-model="tueShifts" label="Select Shift" :options="createShifts" class="q-mt-sm" emit-value
        map-options/>
              </q-item-section>
              <q-item-section class="q-py-sm lato">
                  <q-item-label>Wednesday</q-item-label>
                  <q-select multiple use-chips outlined dense v-model="wedShifts" label="Select Shift" :options="createShifts" class="q-mt-sm" emit-value
        map-options/>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="q-py-sm lato">
                  <q-item-label>Thursday</q-item-label>
                  <q-select multiple use-chips outlined dense v-model="thuShifts" label="Select Shift" :options="createShifts" class="q-mt-sm" emit-value
        map-options/>
                  
              </q-item-section>
              <q-item-section class="q-py-sm lato">
                  <q-item-label>Friday</q-item-label>
                  <q-select multiple use-chips outlined dense v-model="friShifts" label="Select Shift" :options="createShifts" class="q-mt-sm" emit-value
        map-options/>
              </q-item-section>
              <q-item-section class="q-py-sm lato">
                  <q-item-label>Saturday</q-item-label>
                  <q-select multiple use-chips outlined dense v-model="satShifts" label="Select Shift" :options="createShifts" class="q-mt-sm" emit-value
        map-options/>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="q-py-sm lato">
                  <q-item-label>Sunday</q-item-label>
                  <q-select multiple use-chips outlined dense v-model="sunShifts" label="Select Shift" :options="createShifts" class="q-mt-sm" emit-value
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
                            <q-file outlined dense bottom-slots v-model="photo" placeholder="Upload Image" class="q-mt-sm" counter>
        <template v-slot:prepend>
          <q-icon name="cloud_upload" @click.stop />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.stop="photo = null" class="cursor-pointer" />
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
    //     addEditStatus: {
    //         type: String,
    //         required: true
    //     },
    //     empDetails: {
    //       type: Object,
    //       required: false
    //     }
    // },
    data() {
        return {
           addEditStatus: '',
           empUsername: '',
           //empInfo:{},
           gender: ['Female', 'Male', 'Prefers not to share'],
           role: ['Admin', 'Store Manager', 'Manager', 'Floor Supervisor', 'Kitchen Head', 'Financial Controller', 'Kitchen Employees', 'Cashier', 'Other Employees'],
        //    shifts: [],
           salTiming: ['daily', 'weekly', 'monthly', 'quaterly', 'bi-yearly', 'yearly', 'boss'],
        //    fullName: '',
        //    userName: '',
        //    pin: '',
        //    phoneNumber: '',
        //    sex: '',
        //    dob: '',
        //    empRole: '',
        //    address: '',
        //    doj: '',
        //    description: '',
        //    salary: '',
        //    salaryRotation: '',
        //    sunShifts: [],
        //    monShifts: [],
        //    tueShifts: [],
        //    wedShifts: [],
        //    thuShifts: [],
        //    friShifts: [],
        //    satShifts: [],
        //    photo: null
           //epmloyeeRole: ['god','super-admin','admin','employee','manager']
        }
    },
    created() {
      this.$store.dispatch('setup/getAllShifts');
        this.addEditStatus = this.$route.params.type
        if (this.addEditStatus == 'editEmp') {
         this.empUsername = this.$route.params.name
         this.$store.dispatch('EmpDetails/getEachEmployee', this.empUsername)
        }
        
    
    
    },
    mounted() {
        //   this.empInfo = this.empDetails
          console.log(this.empInfo, "ROW DATA IN EDIT EMP FORM")
        
    },
    computed: {
      epmloyeeRole(){
        return ['god','super-admin','admin','employee','manager']
      },
    getAllShiftDetails() {
        return this.$store.getters['setup/getAllShiftDetails'];
    },
    getEachEmpDetails() {
        return this.$store.getters['EmpDetails/getEachEmpDetails'];
    },
    createShifts() {
            return this.getAllShiftDetails.map(shift=>{
            return{
            label: shift.name,
            value: shift.id
            }
        })  
    },

    fullName: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.fullName
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'fullName'
                }
                return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    userName: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.userName
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'userName'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    pin: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.pin
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'pin'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    phoneNumber: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.phoneNumber
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'phoneNumber'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    sex: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.gender
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'gender'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    dob: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.dob
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'dob'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    address: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.address
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'address'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    doj: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.doj
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'doj'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    empRole: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.roleType
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'roleType'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    salary: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.salary
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'salary'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    salaryRotation: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.salaryRotation
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'salaryRotation'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    description: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.jobDescription
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'jobDescription'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    sunShifts: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.sundayShifts
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'sundayShifts'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    monShifts: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.mondayShifts
                }
                return ''
            },
            set(payload) {
                console.log(payload)
                var data = {
                    info: payload,
                    type: 'mondayShifts'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    tueShifts: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.tuesdayShifts
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'tuesdayShifts'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    wedShifts: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.wednesdayShifts
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'wednesdayShifts'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    thuShifts: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.thursdayShifts
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'thursdayShifts'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    friShifts: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.fridayShifts
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'fridayShifts'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    satShifts: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.saturdayShifts
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'saturdayShifts'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },

    photo: {
            get() {
                if(this.getEachEmpDetails !== {}) {
                    return this.getEachEmpDetails.photo
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'photo'
                }
               return this.$store.commit('EmpDetails/editEmpDetails', data)
            }
        },
    
    getRouteParams() {
        this.addEditStatus = this.$route.params.type
        this.empUsername = this.$route.params.name
    }
    //   emp(){
    //     if(!this.empDetails){
    //       return this.empInfo
    //     }
    //     return this.empDetails
    //   }
        
        
    },
    methods: {
        goBack() {
           this.$router.push('/employee')
        },
        closeModal() {
          console.log("CLOSE")
            this.$emit('close')
        },
        saveEmpDetails() {
          console.log(this.doj)
          //const dob = date.formatDate(this.dobirth, 'x')
          //console.log('44',dob)          
          var payload = {
            
                fullName: this.fullName,
                userName: this.userName,
                gender: this.sex,
                dob: date.formatDate(this.dob, 'x'),
                phoneNumber: this.phoneNumber,
                address: this.address,
                pin: this.pin,
                doj: date.formatDate(this.doj, 'x'),
                roleType: this.empRole,
                jobDescription: this.description,
                salary: this.salary,
                salaryRotation: this.salaryRotation,
                mondayShifts: this.monShift,
                tuesdayShifts: this.tueShift,
                wednesdayShifts: this.wedShift,
                thursdayShifts: this.thuShift,
                fridayShifts: this.friShift,
                saturdaySifts: this.satShift,
                sundayShifts: this.sunShift,
                photo: this.photo,
            }
            //console.log(this.empInfo)
            this.$store.dispatch('EmpDetails/addEmployeeDetail', payload)
            this.$emit('close')
        },
        resetValues() {
           this.fullName= '',
           this.userName= '',
           this.pin= '',
           this.phoneNumber= '',
           this.sex= '',
           this.dob= '',
           this.address= '',
           this.doj= '',
           this.designation= '',
           this.salary= '',
           this.salaryRotation= ''
        }
    }
}
</script>

<style lang="stylus" scoped>

.add-emp-dialog
    max-width: 1600px !important
    width: 800px
</style>