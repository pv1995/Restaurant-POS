<template>
    <q-page class="q-pa-lg page-background">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Employee Shifts</div>
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
        <div class="row q-ml-xl q-mt-xl">
            <div class="col-3 q-pa-md" v-for="shift in empCategories" :key="shift.id">
                <empCard cardType = 'employee-category' :empCategory='shift'/>
            </div>
        </div>
    </q-page>
</template>

<script>

import empCard from 'src/components/card.vue';

// import addEmployee from '../../../../components/addEmp.vue';
export default {
    data(){
        return{
            // addEmpModal: 'false',
            value: 40,
            empCategories: [
                {
                    id: 1,
                    name: 'Morning',
                    color: 'accent'

                },
                {
                    id: 2,
                    name: 'Afternoon',
                    color: 'primary'

                },
                {
                    id: 3,
                    name: 'Evening',
                    color: 'secondary'

                },
                {
                    id: 4,
                    name: 'Night',
                    color: 'info'

                },
        
            ]
        }
    },
    components: {
        empCard,
    
    },
    mounted(){ 
        console.log('Role MGMT Dashboard ran !!!!')
        console.log(this.getAllEmployeeDetails)
        console.log(this.$store.getters['EmpDetais/getAllEmployeeDetails'])
    },
    computed: {
        getAllEmployeeDetails() {
            return this.$store.getters['EmpDetais/getAllEmployeeDetails'];
        },
        totalEmpsLength() {
           this.value = this.getAllEmployeeDetails !=undefined? this.getAllEmployeeDetails.length : 0 
        }
    },
    // methods: {
    //     goToAddEmp() {
    //         this.addEmpModal = !this.addEmpModal
    //     }
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