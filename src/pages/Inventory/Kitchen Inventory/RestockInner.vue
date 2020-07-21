<template>
    <q-page class="q-pa-lg">
        <section class="restock-request-inner bg-white q-mt-md q-ma-lg">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa q-mt-sm">{{this.$route.params.id ? 'Edit Purchase Order' : 'New Purchase Order'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label class="text-body1 text-dark lato">Requisition RE#0001</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-card-section>
            </q-card>
        </section>
    </q-page>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>

</style>