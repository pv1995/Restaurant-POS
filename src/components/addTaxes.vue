<template>
    <div>
        <q-dialog v-model="open" persistent>
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-avatar>
                        <q-icon name="fas fa-percentage" style="width:40%" color="accent"/>
                    </q-avatar>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">Taxes & Charges</q-toolbar-title>

                    <q-btn flat round dense icon="close" @click="closeModal" />
                </q-toolbar>

                <q-separator />

                <q-card-section class="tax-card-section">
                    <div class="text-subtitle1 text-dark q-pl-lg lato">Applied Charges</div>
                    <q-item tag="label" dense v-for="charge in charges" :key="charge.id">
                        <q-item-section avatar class="col-1">
                            <q-checkbox v-model="chargesApplied" :val="charge.id" color="primary" />
                        </q-item-section>
                        <q-item-section class="col-9">
                            <q-item-label>{{charge.name}}</q-item-label>
                        </q-item-section>
                        <q-item-section side class="col-2">
                            <q-input dense outlined type="number" v-model="charge.amount"/>
                        </q-item-section>
                    </q-item>
                    <div class="text-subtitle1 text-dark q-pl-lg q-mt-md lato">Applied Taxes</div>
                    <q-item class="q-pl-lg lato">
                        <q-item-section>
                            <q-item-label>CGST (₹ {{cartValue}} @ 2.5%)</q-item-label>
                        </q-item-section>
                        <q-item-section side class="text-dark">
                            {{calcTaxAmount}}
                        </q-item-section>
                    </q-item>
                </q-card-section>

                <q-separator />

                <q-card-section>
                    <div class="flex justify-between items-center lato">
                        <div>
                            <div class="text-subtitle1 text-dark">Current Tax</div>
                            <div class="text-subtitle1 text-dark">₹ {{getTotalAmount}}</div>
                        </div>
                        <div>
                            <q-btn label="Reset" outline color="primary" no-caps @click="closeModal" class="q-mx-md q-px-sm lato"/>
                            <q-btn label="Continue" color="primary" no-caps @click="closeModal" class="lato"/>
                        </div>
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
        },
        cartValue: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            chargesApplied: [],
            charges: [
                {
                    id: 1,
                    name: 'Delivery Charge (@ ₹ 20)',
                    amount: 0
                },
                {
                    id: 2,
                    name: 'Packing Charge (@ ₹ 10)',
                    amount: 0
                }
            ],
            totalCharges: 0
        }
    },
    computed: {
        calcTaxAmount() {
            return (this.cartValue * 2.5/100)
        },
        getTotalCharges() {
            return this.charges.map(charge => {
                return parseInt(charge.amount)
            })
        },
        getTotalAmount() {
            return this.getTotalCharges.reduce((a,b) => a + b, 0) + this.calcTaxAmount
        }
    },
    methods: {
        closeModal() {
            this.$emit("close");
        }
    }
}
</script>
<style lang="stylus">
.tax-card-section
    min-height: 400px
</style>