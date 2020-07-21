<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="variant-group-inner bg-white q-mt-md q-ma-xl">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{this.$route.params.id ? 'Edit Variant Group' : 'Add Variant Group'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Variant Group Details</div>
                    <div class="text-caption text-grey-7 q-pl-md lato">Variant groups are used to bunch a set of variants and attach it to a product. Only one variant can be chosen from a variant group.</div>
                </q-card-section>

                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label style="padding-top:20px">
                                Variant Group Name
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Variant Group Name" v-model="variantGroupName" outlined class="q-mt-sm" :rules="[val => !!val || 'Variant Group Name is required']" bottom-slots/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Variant Group Description</q-item-label>
                            <q-input dense placeholder="Variant Group Description" v-model="variantGroupDescription" outlined class="q-mt-sm" />
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Select Variants</q-item-label>
                            <q-select outlined v-model="variants" :options="getAllVariants" class="q-mt-sm" dense label="Select Variants" multiple emit-value map-options/>
                        </q-item-section>
                    </q-item>
                    <!-- <div v-if="variants.length > 0">
                        <div class="flex q-ml-md">
                            <q-badge outline color="primary" v-for="variant in variants" :key="variant" :label="variant.label" class="q-mr-sm lato"/>
                        </div>
                    </div> -->
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateVariantGroup" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveVariantGroup" v-else/>
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
        "cancel-modal": cancelModal
    },
    data() {
        return {
            showCancelModal: false
        }
    },
    created() {
        if(this.$route.params.id) {
            this.$store.dispatch('setup/getVariantGroup', this.$route.params.id)
        }
    },
    computed: {
        getVariants() {
            return this.$store.getters['setup/getAllVariants']
        },
        getAllVariants() {
            return this.getVariants.map(variant => {
                return {
                    label: variant.name,
                    value: variant.id
                }
            })
        },
        getSelectedVariants() {
            return this.variants.map(variant => {
                return variant.value
            })
        },
        getVariantGroup() {
            return this.$store.getters['setup/getVariantGroup']
        },
        variantGroupName: {
            get() {
                if(this.getVariantGroup !== {}) {
                    return this.getVariantGroup.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                return this.$store.commit('setup/editVariantGroup', data)
            }
        },
        variantGroupDescription: {
            get() {
                if(this.getVariantGroup !== {}) {
                    return this.getVariantGroup.comment
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'comment'
                }
                return this.$store.commit('setup/editVariantGroup', data)
            }
        },
        variants: {
            get() {
                if(this.getVariantGroup !== {}) {
                    return this.getVariantGroup.variantIds
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'variantIds'
                }
                return this.$store.commit('setup/editVariantGroup', data)
            }
        }
    },
    methods: {
        saveVariantGroup() {
            var payload = {
                name: this.variantGroupName,
                variantIds: this.variants,
                comment: this.variantGroupDescription 
            }
            this.$store.dispatch('setup/addVariantGroup', payload);
        },
        updateVariantGroup() {
            var payload = {
                id: this.getVariantGroup.id,
                name: this.variantGroupName,
                variantIds: this.variants, 
                comment: this.variantGroupDescription
            }
            this.$store.dispatch('setup/updateVariantGroup', payload);
        },
        resetValues() {
            this.$store.commit('setup/resetVariantGroup');
        },
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        },
        goBack() {
            this.toggleShowCancelModal()
            this.resetValues()
            this.$router.push({
                name: 'menu-item-options',
                params: {
                    type: 'variantgroups'
                }
            });
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>