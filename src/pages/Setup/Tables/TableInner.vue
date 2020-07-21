<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="tag-inner bg-white q-mt-md q-ma-xl">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{this.$route.params.id + 1 ? 'Edit Table' : 'Add Table'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />

                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Table Details</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class="lato">
                            <q-item-label>Table Number</q-item-label>
                            <q-input dense placeholder="Table Number" v-model="number" outlined class="q-mt-sm" type="number" disable/>
                        </q-item-section>
                        <q-item-section class="lato">
                            <q-item-label>
                                Table Capacity
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Table Capacity" v-model="tableCapacity" outlined class="q-mt-sm" type="number" :rules="[val => !!val || 'Table Capacity is required']" bottom-slots/>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateTable" v-if="this.$route.params.id + 1"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveTable" v-else/>
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
        if(this.$route.params !== {}) {
            this.$store.dispatch('setup/getDineInTable', this.$route.params.id)
        }
    },
    computed: {
        getDineInTable() {
            return this.$store.getters['setup/getDineInTable'];
        },
        number: {
            get() {
                if(this.getDineInTable !== {}) {
                    return this.getDineInTable.number + 1
                }
                return 'Table Number will be auto-generated'
            }
        },
        tableCapacity: {
            get() {
                if(this.getDineInTable !== {}) {
                    return this.getDineInTable.capacity
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'capacity'
                }
                return this.$store.commit('setup/editDineInTable', data)
            }
        }
    },
    methods: {
        saveTable() {
            var payload = {
                capacity: this.tableCapacity
            }
            this.$store.dispatch('setup/addTable', payload)
        },
        updateTable() {
            var payload = {
                id: this.getDineInTable.id,
                capacity: this.tableCapacity
            }
            this.$store.dispatch('setup/updateTable', payload)
        },
        resetValues() {
            this.$store.commit('setup/resetTables');
        },
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        },
        goBack() {
            this.toggleShowCancelModal()
            this.resetValues()
            this.$router.push({
                name: 'dine-in-tables'
            });
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>