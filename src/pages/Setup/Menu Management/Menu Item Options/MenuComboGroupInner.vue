<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="menu-combo-group-inner bg-white q-mt-md q-ma-xl">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="goBack" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{this.$route.params.id ? 'Edit Menu Combo Group' : 'Add Menu Combo Group'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Menu Combo Group Details</div>
                    <div class="text-caption text-grey-7 q-pl-md lato">Create an item group that can be attached to a combo.</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class=" lato">
                            <q-item-label style="padding-top:20px">
                                Menu Combo Name
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Variant Name" v-model="variantName" outlined class="q-mt-sm" :rules="[val => !!val || 'Variant Name is required']" bottom-slots/>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="lato">
                            <q-item-label>Select Menu Category</q-item-label>
                            <q-select outlined v-model="variantGroup" :options="getAllVariantGroups" class="q-mt-sm" dense label="Select Variant" multiple/>
                        </q-item-section>
                        <q-item-section class="lato">
                            <q-item-label>Select Menu Item(s)</q-item-label>
                            <q-select outlined v-model="variantGroup" :options="getAllVariantGroups" class="q-mt-sm" dense label="Select Variant" multiple/>
                        </q-item-section>
                    </q-item>
                </q-card-section>
            </q-card>
        </section>
    </q-page>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    created() {
        this.$store.dispatch('menu/getMenuCategories');
    },
    computed: {
        getMenuCategories() {
            return this.$store.getters['menu/getMenuCategories']
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>