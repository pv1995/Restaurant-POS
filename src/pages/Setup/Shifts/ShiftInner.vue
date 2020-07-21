<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="shift-inner bg-white q-mt-md q-ma-xl">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{this.$route.params.id ? 'Edit Shift' : 'Add Shift'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />

                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Shift Details</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class="lato">
                            <q-item-label>
                                Shift Name
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Shift Name" v-model="name" outlined class="q-mt-sm" type="number" :rules="[val => !!val || 'Shift Name is required']" bottom-slots/>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="lato">
                            <q-item-label>
                                Start Time
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input outlined v-model="timeFrom" mask="time" :rules="['time', () => val = !!val || 'Start Time is required']" dense class="q-mt-sm" placeholder="Select Start Time" bottom-slots>
                                <template v-slot:append>
                                    <q-icon name="access_time" class="cursor-pointer">
                                        <q-popup-proxy ref="qTimeProxy" transition-show="scale" transition-hide="scale">
                                            <q-time v-model="timeFrom" @input="() => $refs.qTimeProxy.hide()" />
                                        </q-popup-proxy>
                                    </q-icon>
                                </template>
                            </q-input>
                        </q-item-section>
                        <q-item-section class="lato">
                            <q-item-label>
                                Shift Duration
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Shift Duration (in hrs)" v-model="duration" outlined class="q-mt-sm" type="number" :rules="[val => !!val || 'Shift Duration is required']" bottom-slots/>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateShift" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveShift" v-else/>
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
            this.$store.dispatch('setup/getShift', this.$route.params.id)
        }
    },
    computed: {
        getShift() {
            return this.$store.getters['setup/getShift']
        },
        name: {
            get() {
                if(this.getShift !== {}) {
                    return this.getShift.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                return this.$store.commit('setup/editShift', data)
            }
        },
        timeFrom: {
            get() {
                if(this.getShift !== {}) {
                    return this.getShift.timeFrom
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'timeFrom'
                }
                return this.$store.commit('setup/editShift', data)
            }
        },
        duration: {
            get() {
                if(this.getShift !== {}) {
                    return this.getShift.duration
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'duration'
                }
                return this.$store.commit('setup/editShift', data)
            }
        }
    },
    methods: {
        goBack() {
            this.toggleShowCancelModal()
            this.resetValues()
            this.$router.push({
                name: 'shift-setup'
            })
        },
        saveShift() {
            var payload = {
                name: this.name,
                duration: this.duration,
                timeFrom: this.timeFrom
            }
            this.$store.dispatch('setup/saveShift', payload)
        },
        updateShift() {
            var payload = {
                id: this.getShift.id,
                name: this.name,
                duration: this.duration,
                timeFrom: this.timeFrom
            }
            this.$store.dispatch('setup/updateShift', payload)
        },
        resetValues() {
            this.$store.commit('setup/resetShift')
        },
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>