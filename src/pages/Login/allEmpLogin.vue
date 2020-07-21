//allEmpLogin will  have all employees listed including manager for pin based login - level 2 login
<template>
    <div>
        <mainHeader @clicked="leftDrawerOpen = !leftDrawerOpen" />
        <section class="select-staff-section text-primary q-pa-xl">
            <div class="q-px-xl">
                <div class="text-h5">Staff</div>
                <div class="text-caption">Click on your profile to login</div>
                <div class="row card-row">
                    <div class="col-3 q-pa-md" v-for="employee in getAllEmployees" :key="employee.id">
                        <card :cardType="'employee-login'" :employee="employee" @toggleModal="showPinModal"/>
                    </div>
                </div>
                <pinlogin v-if="showModal" @close="showPinModal" @dashboard="goToDashboard"/>
            </div>
        </section>
    </div>
</template>
<script>
import mainHeader from 'src/components/header.vue';
import card from 'src/components/card.vue';
import pinlogin from 'src/components/pinlogin.vue'

export default {
    components: {
        mainHeader,
        card,
        pinlogin
    },
    data() {
        return {
            leftDrawerOpen: false,
            showModal: false,
            userName: '',
            pin: ''
        }
    },
    created() {
        this.$store.dispatch('EmpDetails/getAllEmployees')
    },
    computed: {
        getAllEmployees() {
            return this.$store.getters['EmpDetails/getAllEmployeeDetails'];
        }
    },
    methods: {
        showPinModal(value) {
            console.log(value);
            this.userName = value;              
            this.showModal = !this.showModal;
        },
        goToDashboard(value) {
            this.pin = value;
            this.$store.dispatch('login/employeeLogin', {
                userName: this.userName,
                pin: this.pin
            })
        }
    } 
}
</script>
<style lang="stylus" scoped>
.select-staff-section
    margin-top 50px !important;

.card-row
    margin-left: -16px;
</style>