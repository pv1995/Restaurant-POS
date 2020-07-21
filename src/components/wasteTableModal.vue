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
                            <q-item-label>Raw Material Name</q-item-label>
                            <q-input outlined dense v-model="rName" placeholder="Enter Name" class="q-mt-sm" />
                        </q-item-section>
                        <q-item-section class="q-py-sm q-pr-xl lato">
                            <q-item-label>Raw Material Category</q-item-label>
                            <q-input outlined dense v-model="rCategory" placeholder="Enter Category" class="q-mt-sm" />
                        </q-item-section>
                    </q-item>
                    <q-item class="q-px-md">
                        <q-item-section v-if="status=='Wastage'" class="q-py-sm q-pl-xl lato">
                            <q-item-label> Quantity Reduced</q-item-label>
                            <q-input outlined dense v-model="quantity" placeholder="Enter Quantity Reduced" class="q-mt-sm" />   
                        </q-item-section>
                        <q-item-section v-else class="q-py-sm q-pl-xl lato">
                            <q-item-label> Quantity Added</q-item-label>
                            <q-input outlined dense v-model="quantity" placeholder="Enter Quantity Added" class="q-mt-sm" />
                        </q-item-section>
                        <q-item-section class="q-py-sm q-pr-xl lato">
                            <q-item-label>Enter Notes</q-item-label>
                            <q-input outlined dense v-model="notes" placeholder="Notes" class="q-mt-sm" />
                        </q-item-section>
                    </q-item>
         </q-card-section>
         <q-card-section>
             <q-item class="text-center">
               <q-item-section class="q-py-sm q-pl-xl q-ml-xl lato">
              <q-btn label="Cancel" outline color="negative" @click="resetValues"/>
               </q-item-section>
                <q-item-section class="q-py-sm q-pr-xl q-mr-xl lato">
              <q-btn label="Save" outline color="positive" @click="saveWasteDetails"/>
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
            rName: '',
            rCategory: '',
            quantity: '',
            notes: ''
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