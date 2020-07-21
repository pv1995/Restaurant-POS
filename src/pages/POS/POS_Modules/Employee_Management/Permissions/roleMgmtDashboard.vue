<template>
    <q-page class="q-pa-lg page-background">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Employee Permissions</div>
        </section>
        <section>
            <div class="q-pt-md">
                <div class="q-pa-md flex justify-center">
                    <q-card class="role-mgmt-card">
                        <q-card-section>
                            <div class="q-pt-sm q-pl-sm">
                            <q-knob
                            readonly
                            v-model="value"
                            show-value
                            size="150px"
                            :thickness="0.22"
                            color="secondary"
                            track-color="accent"
                            class="text-accent q-ma-md"
                            />
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </section>
        <div class="row justify-left q-mt-xl">
            <div class="col-3 q-pa-md" v-for="category in getUniqueEmpRoles" :key="category.name">
                <empCard cardType = 'employee-category' :empCategory='category' :count='calcTotalEmps(category.name)'/>
            </div>
        </div>
    </q-page>
</template>

<script>

import empCard from 'src/components/card.vue';
// import addEmployee from 'src/components/addEmp.vue';

export default {
    data(){
        return{
            // addEmpModal: 'false',
            value: 40,
            empCategories: [],
            totalEmps: []
        }
    },
    components: {
        empCard,
    
    },
    mounted(){ 
        console.log('Role MGMT Dashboard ran !!!!')
        console.log(this.getAllEmployeeDetails)
        //console.log(this.$storgetJobDescription() {
            console.log(this.getAllEmployeeDetails, '@@@@@@')
        
    },
    computed: {
        getAllEmployeeDetails() {
            return this.$store.getters['EmpDetails/getAllEmployeeDetails'];
        },
        totalEmpsLength() {
           this.value = this.getAllEmployeeDetails !=undefined? this.getAllEmployeeDetails.length : 0 
        },
        getUniqueEmpRoles() {
            return this.$store.getters['EmpDetails/getUniqueEmpRoles'];
        }
       
    },
    created() {
      this.$store.dispatch('EmpDetails/getAllEmployees');
      
    },
    methods: {
        calcTotalEmps(role) {
            return this.getAllEmployeeDetails.filter(({jobDescription})=> jobDescription === role).length
            // Dont Remove For now;
            // var c_length = this.getAllEmployeeDetails.filter(function({jobDescription}){
            //     if(jobDescription === role) {
            //         return true
            //     }
            // })
            // return c_length.length
        }
        
    }
    // methods: {
    //     getJobDescription() {
            
    //         var allRoles = this.getAllEmployeeDetails.map(employees=>{
    //         return employees.jobDescription
    //         })
    //         console.log(allRoles, "All Api Roles")
    //         this.empCategories=allRoles.filter((value,index,self)=>{
    //             return self.indexOf(value) === index
    //         })
    //         console.log(this.empCategories, "Unique Api Roles")
    //     },
    // }
}
</script>

<style scoped lang='stylus'>
.role-mgmt-card 
  width: 240px;
  height: 240px;

.add-emp-btn
  font-family: Comfortaa
  font-size: 14px
  text-align: center
  color: #fafaf6

</style>