<template>
    <q-page class="q-pa-xl page-background">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Employee Permissions</div>
        </section>
        <div class="row justify-left q-mt-lg">
            <div class="col-3" v-for="employee in getCategoryEmployees" :key="employee.id">
                <empCard cardType='employee-permission' :empDetails='employee' />
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
    },
    computed: {
        getAllEmployeeDetails() {
            return this.$store.getters['EmpDetails/getAllEmployeeDetails'];
        },
        getEmpCategory() {
            return this.$route.params.name
        },
        getCategoryEmployees() {
            return this.getAllEmployeeDetails.filter(emp => {
                if(emp.roleType === this.getEmpCategory) {
                    return emp
                }
            })
        }
    },
    created() {
      this.$store.dispatch('EmpDetails/getAllEmployees');
      
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