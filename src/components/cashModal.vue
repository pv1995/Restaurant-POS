<template>
      <q-dialog v-model="open" persistent >
      <q-card class="add-emp-dialog">
         <q-toolbar>
                    <q-avatar color="transparent" text-color="accent" square icon="account_box" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{status}}/</q-toolbar-title>

                    <q-btn flat round dense icon="close" @click="closeModal" />
                </q-toolbar>
          <q-separator />
         <q-card-section>

         <q-item class="q-px-md">
                        <q-item-section class="q-py-sm q-pl-xl lato">
                            <q-item-label>Transaction Type</q-item-label>
                            <q-item-label v-if="status=='Add Cash'" class="text-accent text-h6 q-mt-sm"> Cash In </q-item-label>
                            <q-item-label v-else class="text-secondary text-h6 q-mt-sm"> Cash Out </q-item-label>
                        </q-item-section>
                        <q-item-section class="q-py-sm q-pr-xl lato">
                            <q-item-label>Transaction Amount</q-item-label>
                            <q-input outlined dense v-model="tAmount" placeholder="Transaction Amount" class="q-mt-sm" />
                        </q-item-section>
                    </q-item>
                    <q-item class="q-px-md">
                        <q-item-section class="q-py-sm q-pl-xl lato">
                            <q-item-label>Category</q-item-label>
                            <q-input outlined dense v-model="category" placeholder="Enter Category" class="q-mt-sm" />
                        </q-item-section>
                        <q-item-section class="q-py-sm q-pr-xl lato">
                            <q-item-label>Notes</q-item-label>
                            <q-input outlined dense v-model="notes" placeholder="Enter Notes" class="q-mt-sm" />
                        </q-item-section>
                    </q-item>
                    <q-item class="q-px-md">
                        <q-item-section class="q-py-sm q-pl-xl lato">
                            <q-item-label>Transaction Time</q-item-label>
                             <q-input outline v-model="tTime" mask="fulltime" :rules="['fulltime']">
                                <template v-slot:append>
                                <q-icon name="access_time" class="cursor-pointer">
                                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                                    <q-time
                                        v-model="tTime"
                                        with-seconds
                                        format24h
                                        landscape
                                    >
                                    <template v-slot:default>
                                        <div class="text-right"> 
                                        <q-btn label="OK" color="primary" flat v-close-popup />
                                        </div>
                                    </template>
                                    </q-time>

                                    </q-popup-proxy>
                                </q-icon>
                                </template>
                             </q-input>
                        </q-item-section>
                        <q-item-section class="q-py-sm q-pr-xl lato">
                        </q-item-section>
                    </q-item>
         </q-card-section>
         <q-card-section>
             <q-item class="text-center">
               <q-item-section class="q-py-sm q-pl-xl q-ml-xl lato">
              <q-btn label="Cancel" outline color="negative" @click="resetValues"/>
               </q-item-section>
                <q-item-section class="q-py-sm q-pr-xl q-mr-xl lato">
              <q-btn label="Save" outline color="positive" @click="saveEmpDetails"/>
               </q-item-section>
            </q-item>
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
        },
        status:{
            type:String,
            required:true
        }
    },
    
    data () {
        return {
            tAmount: '',
            category: '',
            notes: '',
            tTime: '00:00:00'
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        },
    }
    
    
}
</script>
<style scoped lang="stylus">

.add-emp-dialog
    max-width: 1600px !important
    width: 800px

</style>