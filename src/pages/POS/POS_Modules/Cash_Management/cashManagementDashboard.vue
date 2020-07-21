<template>
     <q-page class="q-pl-xl q-pr-xl q-pb-xl page-background">
         <div class="q-pa-xl">
         <q-item>
             <q-item-section class="col-md-3 q-pa-sm text-center">
                 <q-card class="q-pa-md">
                     <q-card-section class="q-pa-sm" style="min-width:36px">
                         <q-icon name="import_contacts" color="accent" size="sm"/>
                     </q-card-section>
                     <q-card-section class="no-padding">
                         <span class="comfortaa text-secondary body1"> Rs 35000/-</span>  <!-- Bind Opening Balance -->   
                     </q-card-section>
                      <q-card-section class="no-padding">
                         <span class="comfortaa text-primary text-h6"> Opening Balance</span>  <!-- Bind Opening Balance -->   
                     </q-card-section>
                 </q-card>
             </q-item-section>
             <q-item-section class="col-md-6 q-pa-lg center-card-section">
                 <q-card class="center-card">
                     <q-card-section class="no-padding">
                         <q-item class="no-padding"> 
                         <q-item-section class="q-pl-md comfortaa text-primary text-h6 text-right">
                             Sales
                         </q-item-section>
                         <q-item-section class="q-pr-md comfortaa text-primary text-h6 text-right">
                             Non-Sales
                         </q-item-section>
                         </q-item>
                         <q-separator />
                     </q-card-section>
                     <q-card-section class="no-padding">
                         <q-item class="no-padding">
                             <q-item-section class="q-pl-md comfortaa text-accent body1 text-left">
                                 Cash In
                             </q-item-section>
                             <q-separator vertical/>
                             <q-item-section class="q-pl-md comfortaa text-accent body1 text-left">
                                 Rs 1000/- <!-- Bind Sales Cash In -->
                             </q-item-section>
                         
                             <!-- <q-item-section class="q-px-md comfortaa text-accent body1 text-left">
                                 Cash In
                             </q-item-section> -->
                             <q-item-section class="q-pr-md comfortaa text-accent body1 text-right">
                                 Rs 1000/- <!-- Bind Non-Sales Cash In -->
                             </q-item-section>
                         </q-item>
                     </q-card-section>
                     <q-card-section class="no-padding">
                         <q-item class="no-padding">
                             <q-item-section class="q-pl-md comfortaa text-secondary body1 text-left">
                                 Cash Out
                             </q-item-section>
                             <q-separator vertical/>
                             <q-item-section class="q-pl-md comfortaa text-primary body1 text-left">
                                 Rs 1000/- <!-- Bind Sales Cash Out-->
                             </q-item-section>
            
                             <!-- <q-item-section class="q-pl-md comfortaa text-secondary body1 text-left">
                                 Cash Out
                             </q-item-section> -->
                             <q-item-section class="q-pr-md comfortaa text-primary body1 text-right">
                                 Rs 1000/- <!-- Bind Non-Sales Cash Out -->
                             </q-item-section>
                         </q-item>
                     </q-card-section>
                 </q-card>
                 
             </q-item-section>
             <q-item-section class="col-md-3 q-pa-sm text-center">
                 <q-card class="q-pa-md">
                     <q-card-section class="q-pa-sm" style="min-width:36px">
                         <q-icon name="account_balance_wallet" color="accent" size="sm"/>
                     </q-card-section>
                     <q-card-section class="no-padding">
                         <span class="comfortaa text-secondary body1"> Rs 55000/-</span>  <!-- Bind Opening Balance -->   
                     </q-card-section>
                      <q-card-section class="no-padding">
                         <span class="comfortaa text-primary text-h6"> Closing Balance</span>  <!-- Bind Opening Balance -->   
                     </q-card-section>
                 </q-card>
             </q-item-section>
         </q-item>
         </div>
         <div class="q-px-lg">
             <q-card class="q-pt-sm">
               <q-tabs
                  v-model="tab"
                  dense
                  align="left"  
                  active-color="secondary"
                  indicator-color="secondary"
                >
                  <q-tab name="nonsale" class="tab-style" label="Non-Sale" />
                  <q-tab name="sale" class="tab-style" label="Sale" />
                </q-tabs>

                <q-separator />
                <q-tab-panels v-model="tab" animated>
                    <q-tab-panel name="nonsale">
                        <div class="row">
                            <div class="col-sm-2">
                                <div class="q-pa-md">
                                    <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown">
                                        <q-list>
                                            <q-item clickable v-for="(header,i) in headers" :key="i" v-close-popup @click="onItemClick(header.label)">
                                                <q-item-section>
                                                    <q-item-label>{{ header.label }}</q-item-label>
                                                </q-item-section>
                                            </q-item>
                                        </q-list>
                                    </q-btn-dropdown>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="q-pa-md">
                                    <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                                        <template v-slot:append>
                                            <q-icon class="search-icon" name="search" />
                                        </template>
                                    </q-input>
                                </div>
                            </div>
                            <div class="col-7 text-right">
                                <q-btn outline dense color="positive" class="lato q-px-xl q-ma-md" label="Add Cash"  @click="openCashModal('Add Cash')"/>
                                <q-btn outline dense color="negative" class="lato q-px-xl q-ma-md" label="Remove Cash"  @click="openCashModal('Remove Cash')"/>
                            </div>
                        </div>
                        <div>
                            <customTable  :withCheckbox="checkReq" :headers="getCashSaleHeaders" :showCashMgmntButton="showButtons" :getAllDetails="getAllEmployeeDetails" @clickCashModal="openCashModal"/> 
                            <cashMgmntModal :open='cashModal' @close='cashModal = false'  :status='cashStatus'/>
                        </div>
                    </q-tab-panel>
                </q-tab-panels>
            </q-card>
         </div>
     </q-page>
</template>

<script>
import customTable from '../../../../components/table.vue';
import cashMgmntModal from '../../../../components/cashModal.vue';
export default {
    
    data() {
        return {
         tab: 'nonsale',
         checkReq: false,
         showButtons: true,
         cashModal: false,
         cashStatus: ''
        }
    },
    components: {
        customTable,
        cashMgmntModal,
        
    },
    computed: {
        getCashSaleHeaders() {
          return this.$store.getters['tableHeaders/getCashSaleHeaders']
        },
        getAllEmployeeDetails() {
            return this.$store.getters['EmpDetais/getAllEmployeeDetails'];
        },
    },
    methods: {
        openCashModal(x) {
            this.cashModal = !this.cashModal
            this.cashStatus = x
        },
        
    }
    
}
</script>

<style scoped lang='stylus'>
.tab-style, .q-tab__label
  font-family: Comfortaa
  font-size: 16px
  font-weight: bold
  letter-spacing: 0.5px
  color: #222222
  text-transform: none

.center-card
    min-width: 420px;
    max-width: 420px;
    min-height: 145px;
    max-height: 145px;

.center-card-section
    align-items: center;

</style>
