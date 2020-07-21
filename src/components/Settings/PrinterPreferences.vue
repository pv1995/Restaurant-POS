<template>
    <div>
        <q-item class="q-my-lg">
            <q-item-section>
                <q-item-label class="comfortaa text-h6 text-dark">Printer Preferences</q-item-label>
                <q-item-label class="lato" caption>Customize how you print receipts and order tickets. Make sure the register is setup to allow printing.</q-item-label>
            </q-item-section>
        </q-item>
        <q-item class="q-mb-lg">
            <q-item-section>
                <q-checkbox v-model="paymentAftterReceipt" label="Print receipt first, then accept payment" class="q-mb-sm"/>
                <q-checkbox v-model="printProductNotes" label="Print product notes in the receipt" class="q-mb-sm"/>
                <q-checkbox v-model="notPrintTaxRates" label="Do not print tax rates against each product" class="q-mb-sm"/>
                <q-checkbox v-model="notPrintMerchantCoopy" label="Do not print copy of receipt and order tickets" class="q-mb-sm"/>
                <q-checkbox v-model="printKOT" label="Print order ticket / KOT number in the receipt" />
            </q-item-section>
        </q-item>
        <q-separator />
        <q-item class="justify-center">
            <q-item-section class="col-2 q-mt-md">
                <div class="flex">
                    <q-btn label="Reset" outline color="primary" class="q-mx-sm q-px-sm lato" @click="resetValues"/>
                    <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveDetails"/>
                </div>
            </q-item-section>
        </q-item>
    </div>
</template>
<script>
export default {
    data() {
        return {
            paymentAftterReceipt: false,
            printProductNotes: false,
            notPrintTaxRates: false,
            notPrintMerchantCoopy: false,
            printKOT: false
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>