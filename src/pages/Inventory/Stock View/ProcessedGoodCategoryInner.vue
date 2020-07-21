<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="processed-good-category-inner bg-white q-mt-md q-ma-lg">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa q-mt-sm">{{this.$route.params.id ? 'Edit Processed Good Category' : 'Add Processed Good Category'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Processed Good Category Details</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Processed Good Category Name</q-item-label>
                            <q-input dense placeholder="Processed Good Category Name" v-model="processedGoodCategoryName" outlined class="q-mt-sm"/>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateProcessedGoodCategory" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveProcessedGoodCategory" v-else/>
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
        getProcessedGoodCategory() {
            return this.$store.getters['inventory/getProcessedGoodCategory']
        },
        processedGoodCategoryName: {
            get() {
                if(this.getProcessedGoodCategory != {}) {
                    return this.getProcessedGoodCategory.name
                }
                return ''
            },
            set(payload) {
                return this.$store.commit('inventory/editProcessedGoodCategory', payload)
            }
        }
    },
    methods: {
        saveProcessedGoodCategory() {
            var payload = {
                name: this.processedGoodCategoryName,
                type: 'Processed Goods'
            }
            this.$store.dispatch('inventory/addCategory', payload)
        },
        updateProcessedGoodCategory() {
            var payload = {
                id: this.getProcessedGoodCategory.id,
                name: this.processedGoodCategoryName,
                type: 'Processed Goods'
            }
            this.$store.dispatch('inventory/updateCategory', payload)
        },
        resetValues() {
            this.$store.commit('inventory/resetProcessedGoodCategory')
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
                    type: 'processedGoodCategory'
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>