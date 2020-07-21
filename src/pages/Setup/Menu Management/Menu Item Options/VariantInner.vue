<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="variant-inner bg-white q-mt-md q-ma-xl">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="goBack" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{this.$route.params.id ? 'Edit Variant' : 'Add Variant'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Variant Details</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class=" lato">
                            <q-item-label style="padding-top:20px">
                                Variant Name
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Variant Name" v-model="variantName" outlined class="q-mt-sm" :rules="[val => !!val || 'Variant Name is required']" bottom-slots/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Variant Description</q-item-label>
                            <q-input dense placeholder="Variant Description" v-model="variantDescription" outlined class="q-mt-sm" />
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label style="padding-top:20px">
                                Variant Price Ratio
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Variant Price" v-model="variantPrice" outlined class="q-mt-sm" type="number" :rules="[val => !!val || 'Variant Price Ratio is required']" bottom-slots/>
                        </q-item-section>
                        <q-item-section class="lato">
                            <q-item-label>Select Variant Group</q-item-label>
                            <q-select outlined v-model="variantGroup" :options="getAllVariantGroups" class="q-mt-sm" dense label="Select Variant"/>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="goBack"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateVariant" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveVariant" v-else/>
                    </div>
                </q-card-section>
             </q-card>
        </section>
    </q-page>
</template>
<script>
export default {
    data() {
        return {
            variantGroup: null,
            variantGroups: ['Plates', 'Boxes', 'Combos']
        }
    },
    created() {
        if(this.$route.params.id) {
            this.$store.dispatch('setup/getVariant', this.$route.params.id)
        }
    },
    computed: {
        getVariantGroups() {
            return this.$store.getters['setup/getAllVariantGroups']
        },
        getAllVariantGroups() {
            return this.getVariantGroups.map(group => {
                return {
                    label: group.name,
                    value: group.id
                }
            })
        },
        getVariant() {
            return this.$store.getters['setup/getVariant'];
        },
        variantName: {
            get() {
                if(this.getVariant !== {}) {
                    return this.getVariant.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                return this.$store.commit('setup/editVariant', data)
            }
        },
        variantPrice: {
            get() {
                if(this.getVariant !== {}) {
                    return this.getVariant.priceRatio
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'price'
                }
                return this.$store.commit('setup/editVariant', data)
            }
        },
        variantDescription: {
            get() {
                if(this.getVariant !== {}) {
                    return this.getVariant.comment
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'description'
                }
                return this.$store.commit('setup/editVariant', data)
            }
        }
    },
    methods: {
        saveVariant() {
            //send variant group as well

            var payload = {
                name: this.variantName,
                price: this.variantPrice,
                comment: this.variantDescription
            }
            this.$store.dispatch('setup/addVariant', payload);
        },
        updateVariant() {
            //send variant group as well

            var payload = {
                id: this.getVariant.id,
                name: this.variantName,
                price: this.variantPrice,
                comment: this.variantDescription
            }
            this.$store.dispatch('setup/updateVariant', payload);
        },
        resetValues() {
            this.variantName = '';
            this.variantDescription = '';
            this.variantGroup = '';
        },
        goBack() {
            this.$store.commit('setup/resetVariant');
            this.$router.push({
                name: 'menu-item-options',
                params: {
                    type: 'variant'
                }
            });
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>