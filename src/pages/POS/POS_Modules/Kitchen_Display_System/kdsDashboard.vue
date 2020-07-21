//Landing Order management page with all orders table and create order option
<template>
    <q-page class="q-pa-xl page-background">
      
        <!-- <div class="q-pt-sm q-mt-sm"> -->
        <div class="kds-background">
        <!-- <div class="q-mt-md"> -->


         <q-card>
        <q-tabs
          v-model="tab"
          dense
          align="left"  
          active-color="secondary"
          indicator-color="secondary"
        >
          <q-tab name="allorders" class="tab-style" label="All" />
          <q-tab name="delivery" class="tab-style" label="Delivery" />
          <q-tab name="dinein" class="tab-style" label="Dine-in" />
          <q-tab name="takeaway" class="tab-style" label="Take-away" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="allorders">
            <div>
              <q-item class="no-padding">
                
                <q-item-section>
                  <q-scroll-area class="order-status-scroll-area">
                  <q-card class="q-pa-sm dashboard-main-card">
                    <q-card-section class="text-tertiary bg-primary text-center comfortaa card-heading">
                      New Orders   <!--  {{bind order type}} -->
                    </q-card-section>
                    <q-separator />
                    <q-card-section class="no-padding" v-if="(currentCardType=='New Order') || (currentCardType=='To Be Prepared')">
                      <kdscard class="q-ma-sm" :currentCardType='currentCardType' :currentGateway='currentGateway' :currentOrderType='currentOrderType' @clicked="moveOrder"/>
                    </q-card-section>
                  </q-card>
                  </q-scroll-area>
                </q-item-section>
                
                
              <q-item-section >
                <q-scroll-area class="order-status-scroll-area">
              <q-card class="q-pa-sm dashboard-main-card">
                <q-card-section class="text-tertiary bg-primary comfortaa text-center card-heading">
                   Preparing   <!--  {{bind order type}} -->
                </q-card-section>
                <q-separator />
                <q-card-section class="no-padding" v-if="currentCardType=='Preparing'">
                  <kdscard class="q-ma-sm" :currentCardType='currentCardType' :currentGateway='currentGateway' :currentOrderType='currentOrderType' @clicked="moveOrder"/>
                </q-card-section>
              </q-card>
               </q-scroll-area>
              </q-item-section>
               
                
              <q-item-section >
                <q-scroll-area class="order-status-scroll-area">
              <q-card class="q-pa-sm dashboard-main-card">
                <q-card-section class="text-tertiary bg-primary comfortaa text-center card-heading">
                   Prepared   <!--  {{bind order type}} -->
                </q-card-section>
                <q-separator />
                <q-card-section class="no-padding" v-if="currentCardType=='Prepared'">
                  <kdscard class="q-ma-sm" :currentCardType='currentCardType' :currentGateway='currentGateway' :currentOrderType='currentOrderType' @clicked="moveOrder"/>
                </q-card-section>
              </q-card>
               </q-scroll-area>
              </q-item-section>
               
               
              <q-item-section >
                 <q-scroll-area class="order-status-scroll-area">
              <q-card class="q-pa-sm dashboard-main-card">
                <q-card-section class="text-tertiary bg-primary text-center card-heading">
                   Dispatched   <!--  {{bind order type}} -->
                </q-card-section>
                <q-separator />
                <q-card-section class="no-padding" v-if="currentCardType=='Dispatched'">
                  <kdscard class="q-ma-sm" :currentCardType='currentCardType' :currentGateway='currentGateway' :currentOrderType='currentOrderType' @clicked="moveOrder"/>
                </q-card-section>
              </q-card>
               </q-scroll-area>
              </q-item-section>
               

              </q-item>
            </div>
          </q-tab-panel>

          <q-tab-panel name="delivery">
            <div>
            <kdscard :currentCardType='currentCardType' :currentGateway='currentGateway' @clicked="moveOrder"/>
            </div>
          </q-tab-panel>

          <q-tab-panel name="dinein">
            <div>
            <kdscard :currentCardType='currentCardType' :currentGateway='currentGateway' @clicked="moveOrder"/>
            </div>
          </q-tab-panel>

          <q-tab-panel name="takeaway">
            <div>
            <kdscard :currentCardType='currentCardType' :currentGateway='currentGateway' @clicked="moveOrder"/>
            </div>
          </q-tab-panel>

        </q-tab-panels>
      </q-card>

      
       <!-- <div>
            <customTable />  
        </div> -->
        
        </div>
        <!-- </div>
        </div> -->
       
    </q-page>
</template>
<script>
import kdscard from 'src/components/kdsCard.vue';

export default {

    components: {
        kdscard,
    },
    data() {
        return {
            tab: 'allorders',
            cardTypes: ['New Order', 'To Be Prepared', 'Preparing', 'Prepared', 'Dispatched'],
            currentCardType: 'New Order',
            receiveType: ['POS', 'Swiggy', 'Zomato'],
            currentGateway: 'Swiggy',
            orderType: ['Dine In', 'Take Away', 'Delivery'],
            currentOrderType: 'Dine In'
           
        }
    },
     computed: {
        getAllOrders() {
            return this.$store.getters['Orders/getAllOrders'];
        },
    },
    mounted() {
        
    },
    methods: {
     moveOrder(cardType) {
       console.log(cardType)
       switch (cardType) {
         case 'New Order': 
         this.currentCardType = 'To Be Prepared';
         break;
         case 'To Be Prepared': 
         this.currentCardType = 'Preparing';
         break;
         case 'Preparing': 
         this.currentCardType = 'Prepared';
         break;
         case 'Prepared': 
         this.currentCardType = 'Dispatched';
         break;
       } 
       
     }
    }
}
</script>
<style lang="stylus" scoped>
.create-order-button
    width: 175px;

.kds-background
    background-color: #fafaf6

.dashboard-main-card
  height: 750px
.order-status-scroll-area
  height: 750px

.tab-style, .q-tab__label
  font-family: Comfortaa
  font-size: 16px
  font-weight: bold
  letter-spacing: 0.5px
  color: #222222
  text-transform: none

</style>