//item card, product card, analytic card, employee card,

<template>
    
        <div v-if="cardType === 'employee-login'">
            <q-card class="employee-login-card" @click="showPinModal(employee.userName)">
                <q-card-section>
                    <div class="text-h6">{{employee.fullName}}</div>
                    <div class="text-caption">{{employee.jobDescription}}</div>
                </q-card-section>
            </q-card>
        </div>



        <div v-else-if="cardType === 'daily-employee-info'">
            <q-card class="daily-emp-analysis-card">
                <q-card-section>
                    <q-item >
                            <q-item-section class="text-left">
                            <q-avatar color="secondary" text-color="white" />
                            </q-item-section>
                        
                         <q-item-section class="text-right">
                          <div class="total-emp-title">Total Employees</div>
                          <div class="text-caption total-emp-caption">{{ count }}</div>
                          </q-item-section>
                    </q-item>
                    <q-linear-progress :value="progress" color="secondary" class="q-mt-sm" />
                    <div class="row">
                        <div class="col-md-6">
                            <div class="text-caption progress-caption">Present {{ count }} </div> 
                            <!-- <div class="text-caption progress-caption">{{ count }}</div> -->
                        </div>
                    <div class="col-md-6">
                            <div class="text-caption text-right progress-caption">Absent {{ count }} </div>
                            <!-- <div class="text-caption progress-caption">{{ count }}</div> -->
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </div>

         
         <div v-else-if="cardType === 'employee-category'">
            <q-card class="employee-category-card">
                <q-card-section class="edit-button">
                    <q-item>
                         <q-item-section class="q-pl-sm q-pr-sm q-pb-md">
                            <q-avatar :color="empCategory.color"/>
                        </q-item-section>
                    <q-item-section class="absolute-top-right">
                       <q-btn flat size='sm' round >
                           <template v-slot:default>
                               <q-icon name='edit' class='text-grey-6'/>
                           </template>
                       </q-btn>
                    </q-item-section>
                        <div class="q-pl-xl q-pt-xl">
                            <div class="emp-category-title" :class="`text-${empCategory.color}`">{{ empCategory.name | capitalize }}</div>
                            <div class="text-caption total-emp-caption" :class="`text-${empCategory.color}`">{{count}}</div>
                        </div>
                    </q-item>
                </q-card-section>
                <q-separator />
                <q-card-section class="button-padding">
                    <div class="permission-button">
                        <q-btn no-caps outline :color="empCategory.color" label="View Employees" @click="viewEmps()"/>
                    </div>
                </q-card-section>
            </q-card>
        </div>


       <div v-else-if="cardType === 'employee-permission'">
            <q-card class="employee-permission-card">
                <q-card-section class="edit-button">
                    <div class="absolute-top-right">
                       <q-btn flat size='sm' round >
                           <template v-slot:default>
                               <q-icon name='edit' class='text-grey-5'/>
                           </template>
                       </q-btn>
                    </div>
                </q-card-section>
                <q-card-section class="emp-info">
                    <div class="emp-card-info">
                        <div class="emp-name">{{empDetails.fullName}}</div>
                        <div class="emp-designation q-pa-sm">{{empDetails.roleType | capitalize}}</div>
                    </div>
                </q-card-section>
                <q-card-section class="no-padding">
                    <div class="permission-button q-pb-sm">
                        <q-btn no-caps color="primary" label="View Permissions" @click="showPermissions()"/>
                    </div>
                </q-card-section>
            </q-card>
        </div>


        <div v-else-if="cardType === 'employee-shift'">
            <q-card class="employee-permission-card">
                <q-card-section class="edit-button">
                    <div class="absolute-top-right">
                       <q-btn flat size='sm' round >
                           <template v-slot:default>
                               <q-icon name='edit' class='text-grey-5'/>
                           </template>
                       </q-btn>
                    </div>
                </q-card-section>
                <q-card-section class="emp-info">
                    <div class="emp-card-info">
                        <div class="emp-name">{{empDetails.name}}</div>
                        <div class="emp-designation">{{empDetails.shift}}</div>
                    </div>
                </q-card-section>
                <q-card-section class="button-padding">
                    <div class="permission-button">
                        <q-btn no-caps color="primary" label="View Shifts" @click="showShifts()"/>
                    </div>
                </q-card-section>      
            </q-card>
        </div>

        <div v-else-if="cardType === 'employee-info'">
            <q-card class="employee-info-card">
                <q-card-section class="no-padding">
                    <q-item>
                        <!-- <div class="row"> -->
                            <q-item-section class="no-padding text-left"> 
                                
                                   <!--  <div class="q-pt-sm q-pl-md"> -->
                                        <q-avatar color="primary" text-color="white" />
                                    <!-- </div>  -->
                                
                            </q-item-section>
                            <q-space />
                            <q-item-section class="emp-card-info">
                                <!-- <div class="q-pt-sm q-pr-md"> -->
                                    <span class="info-name text-primary">{{empDetails.fullName}}</span>
                                    <span class="info-role q-pt-md text-secondary">{{empDetails.roleType | capitalize}}</span>
                                    <span class="text-caption">XYZ Branch</span>
                                <!-- </div> -->
                            </q-item-section>
                        <!-- </div> -->
                    </q-item>
                    <!-- <div class="text-right">
                        <p class="info-role text-secondary">{{empDetails.roleType | capitalize}}</p>
                        <p class="text-caption">XYZ Branch</p> 
                    </div> -->
                </q-card-section>
            </q-card>
        </div>

        <div v-else-if="cardType === 'product'">
            <q-card class="product-card text-center text-white flex flex-center cursor-pointer" @click="goToSystem(product.route)">
                <q-card-section class="q-mt-md">
                    <q-icon color="white" :name="product.icon" size="xl" style="width:60px"/>
                    <div class="text-h5 q-pt-md">{{product.name}}</div>
                </q-card-section>
                <q-card-section>
                    <div class="text-subtitle">{{product.caption}}</div>
                </q-card-section>
                <q-card-section>
                    <q-btn unelevated color="white" label="Enter" text-color="primary" class="q-mb-md" @click="goToSystem(product.route)"/>
                </q-card-section>
            </q-card>
        </div>
        <div v-else-if="cardType === 'menu-item'">
            <q-card class="item-card">
                <q-card-section>
                    <div class="text-subtitle2 text-dark">{{item.name}}</div>
                    <div class="text-caption">{{item.price}}</div>
                </q-card-section>
            </q-card>
        </div>
        <div v-else-if="cardType === 'stock-level'">
            <q-card class="stock-level-card q-mx-md q-pa-sm" :class="`text-${stockCardInfo.color}`">
                <q-item>
                    <q-item-section avatar>
                        <q-avatar :color="stockCardInfo.color">
                            
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <div class="text-subtitle1 lato text-right">{{stockCardInfo.name}}</div>
                        <div class="text-subtitle2 lato text-right">{{stockCardInfo.alert}}</div>
                    </q-item-section>
                </q-item>
                <q-item style="padding-bottom:0">
                    <q-item-section>
                        <q-linear-progress :value="stockCardInfo.progress" class="q-mt-md" :color="stockCardInfo.color"/>
                    </q-item-section>
                </q-item>
                <q-item style="padding-top:0">
                    <q-item-section class="text-left">
                        <q-item-label class="text-caption" caption>Current Stock Value</q-item-label>
                        <q-item-label caption>{{stockCardInfo.stockLevel}} kg</q-item-label>
                    </q-item-section>
                    <q-item-section class="text-right">
                        <q-item-label class="text-caption" caption>Max Stock Value</q-item-label>
                        <q-item-label caption>{{stockCardInfo.maxStockLevel}} kg</q-item-label>
                    </q-item-section>
                </q-item>
            </q-card>
        </div>
        <div v-else-if="cardType === 'tablesCard'">
            <q-card class="q-ma-md q-pa-sm">
                <q-card-section class="no-padding">
                   <q-item-label caption class="text-grey-8">Waiter 1</q-item-label>
                </q-card-section>
                <q-card-section class="no-padding">
                    <q-item class="no-padding">
                        <q-item-section class="q-pb-sm q-pt-md">
                            <q-avatar rounded class="avatar-style" :color="tableDetails.color" text-color="white">{{tableDetails.capacity}}</q-avatar>
                        </q-item-section>
                        <q-item-section class="q-pb-sm q-pt-md text-center">
                            <q-item-label class="text-h6 text-secondary">{{tableDetails.status}}</q-item-label> 
                            <q-item-label caption class="text-grey">3 sec ago</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-card-section>
            </q-card>
        </div>
    
</template>
<script>
import pinlogin from './pinlogin.vue';

export default {
    components: {
        pinlogin
    },
    filters:{
        capitalize(val) {
            return val.charAt(0).toUpperCase() + val.slice(1)
        }
    },
    props: {
        cardType: {
            type: String,
            required: true
        },
        employee: {
            type: Object
        },
        product: {
            type: Object
        },
        empDetails: {
            type: Object
        },
        count : {
            type: Number
        },
        item: {
            type: Object
        },
        empCategory: {
            type: Object
        },
        stockCardInfo: {
            type: Object
        },
        tableStatusColors: {
            type: Array
        },
        tableDetails: {
            type: Object
        }
    },
    data() {
        return {
            showModal: false,
            progress: 0.6,
            noOfEmp: ''
        }
    },
    created() { 
        console.log('component ran -> empCard')
    },
    computed: {
       calculateObjLength () {
           this.noOfEmp = this.empDetails.length
       }
    },
    methods: {
        showPinModal(x) {
            this.$emit('toggleModal', x)
        },
        goToSystem(route) {
            this.$router.push(route);
        },
        viewEmps() {
            if(this.$route.path=="/emp-roles"){
                this.$router.push({
                name: 'category-wise-emp',
                params: {name : this.empCategory.name}
            })
            }
            else{
                this.$router.push({
                name: 'shift-wise-emp',
                params: {name : this.empCategory.name}
            })
            }
        },
        showShifts() {
            this.$router.push({
                name: 'manage-shifts',
                params: {name : this.empDetails.fullName}
            })
        },
        showPermissions() {
            this.$router.push({
                name: 'manage-permissions',
                params: {name : this.empDetails.fullName}
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.product-card
    width: 320px;
    height: 360px;
    border-radius: 20px;
    background-image : linear-gradient(to top, $primary -10%, $transition_primary 100%);

.employee-permission-card
    min-height: 144px;
    max-height: 144px;
    min-width: 240px;
    max-width: 240px;
    margin: 0 auto;

.avatar-style
    height: 48px !important;
    // max-height: 48px; !important
    width: 120px !important;
    // max-width: 120px; !important

.employee-info-card
    min-height: 100px;
    max-height: 100px;
    min-width: 250px;
    max-width: 250px;

.employee-category-card
  width: 250px;
  height: 160px;

.permission-button
    text-align: center
    font-family: Comfortaa
    font-size: 12px

.button-padding
     padding: 8px;

.edit-button
    padding: 2px;

.emp-card-info
    text-align: center

.emp-category-title
    // color: $primary;
    font-family: Comfortaa

.emp-info
    //padding: 4px;
    color: $primary;
    font-family: Comfortaa

.info-name
    font-family: Lato
    font-size: 14px

.info-role
    font-family: Lato
    font-size: 16px

.emp-name
    font-size: 16px

.emp-designation
    font-size: 16px

// .info-card
//     display: flex

.daily-emp-analysis-card
  width: 236px
  height: 133px

.total-emp-title
  font-family: Comfortaa
  font-size: 14px
  text-align: right
  color: $secondary

.total-emp-caption
  font-family: Comfortaa
  font-size: 14px
  letter-spacing: 0.44px
  text-align: right
  color: $secondary

.progress-caption
  font-family: AvenirNext
  font-size: 9px
  color: $icon_grey
</style>