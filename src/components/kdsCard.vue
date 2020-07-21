<template>
    <q-card class="q-pa-sm kds-card">
        <q-card-section class="no-padding card-heading">
           <q-item class="no-padding">
               <q-item-section v-if="currentOrderType=='Delivery'" class="no-padding">
                 <span class="no-padding comfortaa text-h6">  <q-icon color="accent" :name="delivery" size="md"/>  {{currentOrderType}}  </span><!--  {{bind order type}} -->
               </q-item-section>
               <q-item-section v-if="currentOrderType=='Take Away'" class="no-padding">
                 <span class="no-padding comfortaa text-h6">  <q-icon color="accent" :name="takeAway" size="md"/>  {{currentOrderType}}  </span><!--  {{bind order type}} -->
               </q-item-section>
               <q-item-section v-if="currentOrderType=='Dine In'" class="no-padding">
                 <span class="no-padding comfortaa text-h6">  <q-img :src="dineIn" height='24px' width='24px'/>  {{currentOrderType}}  </span><!--  {{bind order type}} -->
               </q-item-section>
               <q-item-section v-if="currentCardType=='Preparing'" class="text-right text-dark no-padding">
           <span class="no-padding comfortaa body2"> <q-icon color="grey" name="alarm" size="xs"/>  xx:xx  </span> <!--  {{bind order preparation time}} -->
        </q-item-section>
           </q-item> 
        </q-card-section>
        
        <q-separator />
        <!-- <div v-bind:class="{ 
                    bgRed: currentCardType === 'New Order', 
                    bgOrange: currentCardType === 'To Be Prepared', 
                    bgYellow: currentCardType === 'Preparing', 
                    bgBlue: currentCardType === 'Prepared', 
                    bgGreen: currentCardType === 'Dispatched' 
                    }"> -->
        <q-card-section class="no-padding">
            <q-item class="no-padding">
                <q-item-section class="q-px-sm">
                    <span class="body2 text-dark comfortaa text-left"> Order ID XXX </span> <!-- {{bind order id}} -->
                </q-item-section>
                <q-item-section class="q-px-sm">
                    <span class="body2 text-dark comfortaa text-right"> Received : <q-badge outline color="accent" :label="currentGateway" /> </span>  <!-- {{bind order's Current Gateway}} -->
                    
                </q-item-section>
            </q-item>
    
            <q-item class="no-padding">
                <q-item-section class="q-px-sm">
                    <span class="text-caption text-grey comfortaa text-left"> Order Received XXXX </span> <!-- {{bind order receive time}} -->
                    <span class="text-caption text-grey comfortaa text-left"> ETD XXXX </span>  <!-- {{bind order Estimated Delivery Time}} -->
                </q-item-section>
                <q-item-section class="q-px-sm" v-if="currentOrderType=='Dine In'">
                   <span class="body2 text-dark comfortaa text-right"> Table No <q-badge  color="secondary" label="22" /> </span> <!-- {{bind dine in table number :label=}} -->
                </q-item-section>
                <q-item-section class="q-px-sm" v-else>
                   <span class="body2 text-dark comfortaa text-right"> Table No -- </span>
                </q-item-section>
            </q-item>
        </q-card-section>
            <q-card-section class="no-padding">
                <!-- loop over multiple items in order -->
                <q-scroll-area class="ordered-items">
                <q-item class="no-padding">
                    <q-item-section class="q-px-sm">
                    <span class="body2 text-dark comfortaa text-left"> Butter Chicken </span>  <!-- {{bind Dish Name}} -->
        
            
                    <span class="text-caption text-secondary comfortaa text-left"> extra cream </span> 
    
                </q-item-section>
                <q-item-section class="q-px-sm">
                    <span class="body2 text-dark comfortaa text-right"> <q-badge outline color="primary" label="x2" /> </span>  <!-- {{bind quantity :label=}} -->
                </q-item-section>
                </q-item>

                </q-scroll-area>
            </q-card-section>
                  <q-separator />
                <q-card-section v-if="currentCardType=='New Order'" class="no-padding text-center">
                     <q-btn class="q-ma-sm q-px-md" outline dense color="primary" text-color="dark"  label="Reject" />
                      <q-btn class="q-ma-sm q-px-md text-tertiary" dense color="accent"  label="Accept" @click="processOrder('New Order')"/>
                </q-card-section>
                <q-card-section v-else-if="currentCardType=='To Be Prepared'" class="no-padding text-center">
                     <q-btn class="q-ma-sm q-px-md orange_button text-tertiary" dense  label="Mark Preparing" @click="processOrder('To Be Prepared')"/>
                </q-card-section>
                <q-card-section v-else-if="currentCardType=='Preparing'" class="no-padding text-center">
                     <q-btn class="q-ma-sm q-px-md green_button text-tertiary" dense  label="Mark Prepared" @click="processOrder('Preparing')"/>
                </q-card-section>
                <q-card-section v-else-if="currentCardType=='Prepared'" class="no-padding text-center">
                     <q-btn class="q-ma-sm q-px-md red_button text-tertiary" dense  label="Dispatched" @click="processOrder('Prepared')"/>
                </q-card-section>
                <q-card-section v-else-if="currentCardType=='Dispatched'" class="no-padding text-center">
                     <q-btn class="q-ma-sm q-px-md blue_button text-tertiary" dense  label="Mark Complete" />
                </q-card-section>
        <!-- </div> -->
    </q-card>
</template>

<script>
export default {
    data () {
        return {
            delivery : 'local_shipping',
            takeAway : 'local_mall',
            dineIn : '/statics/dineIn_Icon.png'
        }
    },
    props: {
        currentCardType: {
         type: String,
         required: true,
         default: 'New Order'
        },
        currentGateway: {
         type: String,
         required: true
        },
        currentOrderType: {
         type: String,
         required: true
        }
    },
    methods: {
        processOrder(cardType) {
            // console.log(cardType)
            this.$emit('clicked', cardType)
        },
        // markPreparing() {
        //      this.$emit('markPreparing')
        // }
    }
    
}
</script>

<style scoped>
.ordered-items{
   height: 132px
}
.kds-card {
    height: 332px
}

.bgRed{
    background: red;
}
.bgYellow{
    background: yellow;
}
.bgGreen{
    background: green;
}
.bgBlue{
    background: blue;
}
.bgOrange{
    background: orange;
}
</style>