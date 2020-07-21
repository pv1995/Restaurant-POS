<template>
    <div>
        <q-dialog v-model="open" persistent>
             <q-card flat class="modal-card">
                <q-toolbar>
                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa q-mt-sm">Add Invoice</q-toolbar-title>

                    <q-btn flat round dense icon="close" @click="closeModal" />
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Invoice Details</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label class="text-body1 text-dark lato">Invoice No IN#0001</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label class="text-body1 text-dark lato">Vendor Name</q-item-label>
                            <q-input dense v-model="vendorName" class="q-mt-sm" placeholder="Vendor Name" outlined/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label class="text-body1 text-dark lato">Amount</q-item-label>
                            <q-input dense v-model="amount" class="q-mt-sm" placeholder="Invoice Amount" outlined/>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label class="text-body1 text-dark lato">Invoice Date</q-item-label>
                            <q-input v-model="invoiceDate" mask="date" :rules="['date']" dense class="q-mt-sm" hide-bottom-space outlined>
                                <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                        <q-date v-model="invoiceDate" @input="() => $refs.qDateProxy.hide()" />
                                    </q-popup-proxy>
                                    </q-icon>
                                </template>
                            </q-input>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label class="text-body1 text-dark lato">Select Purchase Order</q-item-label>
                            <q-select outlined v-model="purchaseOrderNo" :options="getPurchaseOrderOptions" class="q-mt-sm" dense label="Select City"/>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Back" outline color="primary" class="q-mx-sm q-px-sm lato" @click="resetValues"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato q-ml-sm" @click="saveInvoice"/>
                    </div>
                </q-card-section>
             </q-card>
        </q-dialog>
    </div>
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
            vendorName: '',
            invoiceAmount: '',
            invoiceDate: '',
            purchaseOrderNo: ''
        }
    },
    computed: {
        getPurchaseOrders() {
            return this.$store.getters['inventory/getPurchaseOrders'];
        },
        getPurchaseOrderOptions() {
            return this.getPurchaseOrders.map(po => {
                return {
                    label: po.purchaseOrderNo,
                    value: po.purchaseOrderNo
                }
            })
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        },
        saveInvoice() {
            this.closeModal()
        },
        resetValues() {
            this.vendorName = '';
            this.invoiceAmount = '';
            this.invoiceDate = '';
            this.purchaseOrderNo = '';
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>