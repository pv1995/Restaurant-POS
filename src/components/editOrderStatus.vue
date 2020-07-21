<template>
      <q-dialog v-model="open" >
      <q-card class="add-emp-dialog">
         <q-toolbar>
                    <q-avatar color="transparent" text-color="accent" square icon="local_shipping" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">Add Employee</q-toolbar-title>
                    <div class="q-pa-sm">
                    <q-btn outline color="accent" dense label="Print Bill" @click="printBill" />
                    </div>
                    <div class="q-pa-sm">
                    <q-btn dense  color="secondary" label="Payment Pending" @click="completePayment" />
                    </div>
                    <q-btn flat round color="grey-6" dense icon="delete_forever" @click="deleteOrder" />
                </q-toolbar>
          <q-separator />
        <q-card-section class="items-center q-pb-none">
        <q-item>
            <q-item-section side class="text-dark">
                <q-avatar square size="42px" color="dark"/>
            </q-item-section>
            <q-item-section>
                <q-item-label class='text-h6 company-pos-title comfortaa'> Company POS <q-btn class="q-pb-md" size="sm" flat round color="grey-6" dense icon="edit" @click="editPOSName" /> </q-item-label>
                <q-item-label caption class='q-pb-sm comfortaa text-caption'>ordered at 5:00pm</q-item-label>
            </q-item-section>
    
        </q-item>
        <q-item>
            <q-item-section>
              <q-item-label class='body1 text-primary comfortaa'> Invoice No. # A0001 </q-item-label>
              <q-item-label caption class='body2 text-dark comfortaa'> Order Time Remaining  <span class='body2 text-accent comfortaa'> 29 mins </span> </q-item-label>
            </q-item-section>
        </q-item>

        </q-card-section>


        <q-card-section>

        <q-stepper
      v-model="step"
      ref="stepper"
      done-color="accent"
      active-color="primary"
      inactive-color="secondary"
      alternative-labels
      animated
    >
      <q-step
        :name="1"
        :title="done1 ? 'Accepted' : 'Accept'"
        active-icon="check"
        :done="done1"
      >
        
          <q-btn outline dense @click="() => { done1 = true; step = 2 }" color="primary" label="Accept" />
      
        
      </q-step>

      <q-step
        :name="2"
        :title="done2 ? 'Order Prepared' : 'Preparing'"
        active-icon="kitchen"
        :done="done2"
      >

          <q-btn outline dense @click="() => { done2 = true; step = 3 }" color="primary" label="Mark Prepared" />
       
     
      </q-step>

      <q-step
        :name="3"
        :title="done3 ? 'Order Ready to be Delivered' : 'Prepared'"
        active-icon="add_comment"
        :done="done3"
      >
     
          <q-btn outline dense @click="() => { done3 = true; step = 4 }" color="primary" label="Mark Ready" />
       
      </q-step>
      <q-step
        :name="4"
        :title="done4 ? 'Order is on the Way!' : 'Dispatch'"
        active-icon="two_wheeler"
        :done="done4"
      >
          <q-btn outline dense @click="() => { done4 = true; step = 5 }" color="primary" label="Mark Dispatched" />
        
      </q-step>

      <q-step
        :name="5"
        :title="done5 ? 'Completed!' : 'Make Payment'"
        :color="done5 ? 'accent' : 'secondary'"
        active-icon="attach_money"
        :done="done5"
      >
    
          <q-btn outline dense @click="() => { done5 = true }" color="primary" label="Mark Paid" />
       
      </q-step>

    </q-stepper>
        </q-card-section>

        <q-card-section>

            <q-item>
            <q-item-section side class="text-dark">
                <q-avatar oval size="38px" color="secondary"/>
            </q-item-section>
            </q-item>
            <q-item>
            <q-item-section>
                <q-item-label class='body2 company-pos-title comfortaa'> Customer Information <q-btn class="q-pb-md" size="sm" flat round color="grey-6" dense icon="edit" @click="editPOSName" /> </q-item-label>
                <q-item-label class='comfortaa body1 company-pos-title'>John Doe <span> <q-img class="money-bag" src="statics/icons/money-bag.png"/> </span> <span class="text-dark comfortaa body1 company-pos-title"> 500 coins </span>
</q-item-label>
            </q-item-section>
        </q-item>


        </q-card-section>
<q-separator />
    
    <q-card-section>
        <div class="row">
            <div class="col-md-4">
                <q-item>
                    <q-item-section>
                <span class="q-pl-md body1 comfortaa company-pos-title text-dark"> Item Details </span>
                    </q-item-section>
                </q-item>
            </div>
            <div class="col-md-8">
                <q-item>
                    <q-item-section>
                        <q-btn dense  color="primary" icon="attach_money" label="Edit Charges" @click="completePayment" />
                    </q-item-section>
                    <q-item-section>
                       <q-btn dense  color="primary" icon="add" label="Add Items" @click="completePayment" />
                    </q-item-section>
                    <q-item-section>
                        <q-btn dense  color="primary" icon="receipt" label="Edit Discounts" @click="completePayment" />
                    </q-item-section>
                </q-item>
            
        </div>
        </div>
    </q-card-section>
    <q-card-section>
        <div class="row">
            <div class="col-md-4">
                <q-item>
                    <q-item-section>
                <span class="q-pl-md body1 comfortaa company-pos-title text-dark"> KOT #1  </span>
                    </q-item-section>
                </q-item>
            </div>
            <div class="col-md-8">
                <q-item>
                    <q-item-section>
                        <q-btn dense  outline color="accent" label="Print KOT" @click="completePayment" />
                    </q-item-section>
                    <q-item-section>
                       <q-btn dense outline color="primary" label="Edit KOT" @click="completePayment" />
                    </q-item-section>
                    <q-item-section>
                        <q-btn dense outline color="secondary" label="Cancel KOT" @click="completePayment" />
                    </q-item-section>
                </q-item>
            
        </div>
        </div>
        
    </q-card-section>
    <q-card-section>
        <q-item>
            <q-item-section>
                <span class="q-pl-md body1 comfortaa company-pos-title text-dark"> Dish 1  </span>
            </q-item-section>
            <q-item-section>
                <div class="text-center">
                <q-btn-group outline>
      <q-btn outline dense color="primary" icon="remove" @click="removeItem"/>
      <q-btn outline dense color="primary" :label="counter" />
      <q-btn outline dense color="primary" icon="add" @click="addItem"/>
    </q-btn-group>
                </div>
            </q-item-section>
             <q-item-section class="text-right">
                 <span class="q-pl-md body2 comfortaa company-pos-title text-dark"> 200/-  </span>
             </q-item-section>
        </q-item>
    </q-card-section>
    <q-separator />
    <q-card-section>
        <div class="q-pl-xl q-pb-md q-pr-xl">
            <div class="q-pl-x q-pr-x bg-primary total-bill-text text-center body1 comfortaa "> Total Bill Amount </div>
        </div>
    </q-card-section>
    <q-card-section>
        <div class="row">
            <div class="col-md-6">
            </div>
            <div class="col-md-6">
                <span class="q-pl-md text-h6 comfortaa text-dark"> Bill Details </span>
                <q-item>
                    <q-item-section class='comfortaa body2 company-pos-title text-left'> Item Total </q-item-section>
                    <q-item-section class='comfortaa body2 company-pos-title text-right'> 200/- </q-item-section>
                </q-item>
                 <q-item>
                    <q-item-section class='comfortaa body2 company-pos-title text-left'> Restaurant Charges </q-item-section>
                    <q-item-section class='comfortaa body2 company-pos-title text-right'> 30/- </q-item-section>
                </q-item>
                 <q-item>
                    <q-item-section class='comfortaa body2 company-pos-title text-left'> Delivery Charges </q-item-section>
                    <q-item-section class='comfortaa body2 company-pos-title text-right'> 40/- </q-item-section>
                </q-item>
                 <q-item>
                    <q-item-section class='comfortaa body2 company-pos-title text-left'> Taxes </q-item-section>
                    <q-item-section class='comfortaa body2 company-pos-title text-accent text-right'> 30/- </q-item-section>
                </q-item>
            </div>
        </div>
    </q-card-section>
     <q-separator />
     <q-card-section>
        <div class="row">
            <div class="col-md-6">
            </div>
            <div class="col-md-6">
                
                <q-item>
                    <q-item-section class='comfortaa text-h6 company-pos-title text-left'> Subtotal </q-item-section>
                    <q-item-section class='comfortaa text-h6 company-pos-title text-right'> 300/- </q-item-section>
                </q-item>
                 
            </div>
        </div>
    </q-card-section>

      </q-card>
    </q-dialog>
</template>
 
<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            step: 1,
            done1: false,
            done2: false,
            done3: false,
            done4: false,
            done5: false,
            counter: 0
    
        }
    },
    methods: {
        deleteOrder() {
            this.$emit('close')
        },
        printBill() {
          this.$emit('close')
        },
        completePayment() {
          this.$emit('close')
        },
        editPOSName() {
           console.log(this.done5)
        },
        removeItem() {
            if(this.counter > 0 ) {
               this.counter = this.counter - 1
            } 
        },
        addItem() {
           
               this.counter = this.counter + 1
         
        }

    }
}
</script>

<style lang="stylus" scoped>
.total-bill-text
    color: $tertiary
    padding: 7px
.money-bag
   width: 16px;
   height: 16px;
.company-pos-title
    line-height: 0.2em !important
.add-emp-dialog
    max-width: 1600px !important
    width: 1000px
</style>