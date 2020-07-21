<template>
    <div>
        <q-item class="q-my-lg">
            <q-item-section>
                <q-item-label class="comfortaa text-h6 text-dark">Selling Preferences</q-item-label>
                <q-item-label class="lato" caption>Customize how you sell, enable order tickets/KOTs.</q-item-label>
            </q-item-section>
        </q-item>
        <q-item class="q-mb-lg">
            <q-item-section>
                <q-checkbox v-model="noRoundTotal" label="Do not roundoff sale total" class="q-mb-sm"/>
                <q-checkbox v-model="sequentialReceiptNo" label="Enforce sequential receipt numbers" class="q-mb-sm"/>
                <q-checkbox v-model="enableKOT" label="Enable order ticket/KOT generation" class="q-mb-sm"/>
                <q-checkbox v-model="enforceCustomerMobile" label="Enforce customer mobile number" class="q-mb-sm"/>
                <q-checkbox v-model="enableBillingAfterShift" label="Enable billing only when shift is opened" />
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
            noRoundTotal: false,
            sequentialReceiptNo: false,
            enableKOT: false,
            enforceCustomerMobile: false,
            enableBillingAfterShift: false
        }
    },
    methods: {
        resetValues() {
            
        },
        saveDetails() {
            this.$emit('save', this.employee)
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>