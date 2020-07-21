<template>
    <q-page class="q-pa-xl page-background">
        <div class="q-pt-md">
            <div class="q-pa-md">
                <p class="manage-employees-title">Manage Employee Shifts</p>
            </div>
        </div>
        <div class="row justify-center">
            <div class="col-3 q-pa-md" v-for="employee in getCategoryEmployees" :key="employee.id">
                <empCard cardType='employee-shift' :empDetails='employee' />
            </div>
        </div>
    </q-page>
</template>

<script>
import empCard from 'src/components/card.vue';
export default {
    data() {
     return {
         
     }
    },
    components: {
        empCard,
    },
    mounted(){ 
        console.log(this.getAllEmployeeDetails)
        console.log(this.$route.params)
       

    },
    computed: {
        getAllEmployeeDetails() {
            return this.$store.getters['EmpDetais/getAllEmployeeDetails'];
        },
        getEmpCategory() {
            return this.$route.params.name
        },
        getCategoryEmployees() {
            return this.getAllEmployeeDetails.filter(emp => {
                if(emp.shift === this.getEmpCategory) {
                    return emp
                }
            })
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

</style>