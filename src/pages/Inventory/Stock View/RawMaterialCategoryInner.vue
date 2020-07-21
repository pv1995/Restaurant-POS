<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="raw-material-category-inner bg-white q-mt-md q-ma-lg">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa q-mt-sm">{{this.$route.params.id ? 'Edit Raw Material Category' : 'Add Raw Material Category'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Raw Material Category Details</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Raw Material Category Name</q-item-label>
                            <q-input dense placeholder="Raw Material Category Name" v-model="rawMaterialCategoryName" outlined class="q-mt-sm"/>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateRawMaterialCategory" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveRawMaterialCategory" v-else/>
                    </div>
                </q-card-section>
             </q-card>
        </section>
        <cancel-modal :open="showCancelModal" @close="toggleShowCancelModal" @back="goBack" />
    </q-page>
</template>
<script>
import cancelModal from 'src/components/modals/cancelModal.vue'

export default {
    components: {
        "cancel-modal" : cancelModal
    },
    data() {
        return {
            showCancelModal: false
        }
    },
    created() {
        if(this.$route.params.id) {
            this.$store.dispatch('inventory/getCategory', this.$route.params.id)
        }
    },
    computed: {
        getRawMaterialCategory() {
            return this.$store.getters['inventory/getRawMaterialCategory']
        },
        rawMaterialCategoryName: {
            get() {
                if(this.getRawMaterialCategory !== {}) {
                    return this.getRawMaterialCategory.name
                }
                return ''
            },
            set(payload) {
                this.$store.commit('inventory/editRawMaterialCategory', payload)
            }
        }
    },
    methods: {
        saveRawMaterialCategory() {
            var payload = {
                name: this.rawMaterialCategoryName,
                type: 'Raw Material'
            }
            this.$store.dispatch('inventory/addCategory', payload)
        },
        updateRawMaterialCategory() {
            var payload = {
                id: this.getRawMaterialCategory.id,
                name: this.rawMaterialCategoryName,
                type: 'Raw Material'
            }
            this.$store.dispatch('inventory/updateCategory', payload)
        },
        resetValues() {
            this.$store.commit('inventory/resetRawMaterialCategory')
        },
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        },
        goBack() {
            this.toggleShowCancelModal()
            this.resetValues()
            this.$router.push({
                name: 'stock-view',
                params: {
                    type: 'rawMaterialCategory'
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>