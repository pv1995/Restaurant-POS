<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="discount-rule-inner bg-white q-mt-md q-ma-xl">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{this.$route.params.id ? 'Edit Discount Rule' : 'Add Discount Rule'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Discount Rule Details</div>
                    <div class="text-caption text-grey-7 q-pl-md lato">Choose the type of discount rule you want to create. Discount rules are identified by a unique coupon code.</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Discount Code</q-item-label>
                            <q-input dense placeholder="Discount Code" v-model="discountCode" outlined class="q-mt-sm"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Discount Level</q-item-label>
                            <q-select outlined v-model="discountLevel" :options="discountLevels" class="q-mt-sm" dense placeholder="Select Discount Level"/>
                        </q-item-section>
                    </q-item>
                    <q-item v-if="discountType === 'Fixed Amount'">
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Discount Type</q-item-label>
                            <q-select outlined v-model="discountType" :options="discountTypes" class="q-mt-sm" dense label="Select Discount Type"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Discount Amount</q-item-label>
                            <q-input dense placeholder="Discount Amount" v-model="discountAmount" outlined class="q-mt-sm" type="number"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Min Order Value</q-item-label>
                            <q-input dense placeholder="Discount Amount" v-model="discountAmount" outlined class="q-mt-sm" type="number"/>
                        </q-item-section>
                    </q-item>
                    <q-item v-else>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Discount Type</q-item-label>
                            <q-select outlined v-model="discountType" :options="discountTypes" class="q-mt-sm" dense label="Select Discount Type"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Discount Percentage</q-item-label>
                            <q-input dense placeholder="Discount Percentage" v-model="percentage" outlined class="q-mt-sm" type="number"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Min Order Value</q-item-label>
                            <q-input dense placeholder="Discount Amount" v-model="discountAmount" outlined class="q-mt-sm" type="number"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Max Discount Amount</q-item-label>
                            <q-input dense placeholder="Max Discount Amount" v-model="limitAmount" outlined class="q-mt-sm" type="number"/>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Start Date</q-item-label>
                            <!-- <q-input dense placeholder="Start Date" v-model="startDate" outlined class="q-mt-sm" type="date"/> -->
                            <q-input outlined v-model="startDate" mask="date" :rules="['date']" dense class="q-mt-sm">
                                <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                            <q-date v-model="startDate" @input="() => $refs.qDateProxy.hide()" />
                                        </q-popup-proxy>
                                    </q-icon>
                                </template>
                            </q-input>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>End Date</q-item-label>
                            <!-- <q-input dense placeholder="End Date" v-model="endDate" outlined class="q-mt-sm" type="date"/> -->
                            <q-input outlined v-model="endDate" mask="date" :rules="['date']" dense class="q-mt-sm">
                                <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                        <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                                            <q-date v-model="endDate" @input="() => $refs.qDateProxy1.hide()" />
                                        </q-popup-proxy>
                                    </q-icon>
                                </template>
                            </q-input>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section>
                            <q-checkbox v-model="setDiscountTimings" label="Set Discount Timings" class="lato"/>
                        </q-item-section>
                    </q-item>
                    <q-item v-if="setDiscountTimings">
                        <q-item-section class="">
                            <q-item-label>Start Timing</q-item-label>
                            <q-input dense placeholder="Start Time" v-model="startTime" outlined class="q-mt-sm lato" type="time"/>
                        </q-item-section>
                        <q-item-section class="">
                            <q-item-label>End Timing</q-item-label>
                            <q-input dense placeholder="End Time" v-model="endTime" outlined class="q-mt-sm lato" type="time"/>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section>
                            <q-checkbox v-model="applyAutomatically" label="Apply Discount Automatically" class="lato"/>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateDiscountRule" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveDiscountRule" v-else/>
                    </div>
                </q-card-section>
             </q-card>
        </section>
        <cancel-modal :open="showCancelModal" @close="toggleShowCancelModal" @back="goBack" />
    </q-page>
</template>
<script>
import cancelModal from 'src/components/modals/cancelModal.vue'
import {date} from 'quasar';

export default {
    components: {
        "cancel-modal": cancelModal
    },
    data() {
        return {
            discountTypes: ['Fixed Amount', 'Percentage'],
            discountLevels: ['Total Bill', 'On Item'],
            setDiscountTimings: false,
            applyAutomatically: true,
            showCancelModal: false
        }
    },
    created() {
        if(this.$route.params.id) {
            this.$store.dispatch('setup/getDiscountRule', this.$route.params.id)
        }
        else {
            var data = {
                info: 'Fixed Amount',
                type: 'type'
            }
            console.log(data)
            this.$store.commit('setup/editDiscountRule', data)
        }
    },
    mounted() {
        if(this.$route.params === {}) {

        }
    },
    computed: {
        getDiscountRule() {
            return this.$store.getters['setup/getDiscountRule']
        },
        discountCode: {
            get() {
                if(this.getDiscountRule !== {}) {
                    return this.getDiscountRule.code
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'code'
                }
                return this.$store.commit('setup/editDiscountRule', data)
            }
        },
        discountLevel: {
            get() {
                if(this.getDiscountRule !== {}) {
                    return this.getDiscountRule.level
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'level'
                }
                return this.$store.commit('setup/editDiscountRule', data)
            }
        },
        discountType: {
            get() {
                if(this.getDiscountRule !== {}) {
                    return this.getDiscountRule.type
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'type'
                }
                return this.$store.commit('setup/editDiscountRule', data)
            }
        },
        discountAmount: {
            get() {
                if(this.getDiscountRule !== {}) {
                    return this.getDiscountRule.discountAmount
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'discountAmount'
                }
                return this.$store.commit('setup/editDiscountRule', data)
            }
        },
        startDate: {
            get() {
                if(this.getDiscountRule !== {}) {
                    return this.getDiscountRule.startDate
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'startDate'
                }
                return this.$store.commit('setup/editDiscountRule', data)
            }
        },
        endDate: {
            get() {
                if(this.getDiscountRule !== {}) {
                    return this.getDiscountRule.endDate
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'endDate'
                }
                return this.$store.commit('setup/editDiscountRule', data)
            }
        },
        startTime: {
            get() {
                if(this.getDiscountRule !== {}) {
                    return this.getDiscountRule.happyHourFromTime
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'happyHourFromTime'
                }
                return this.$store.commit('setup/editDiscountRule', data)
            }
        },
        endTime: {
            get() {
                if(this.getDiscountRule !== {}) {
                    return this.getDiscountRule.happyHourToTime
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'happyHourToTime'
                }
                return this.$store.commit('setup/editDiscountRule', data)
            }
        },
        percentage: {
            get() {
                if(this.getDiscountRule !== {}) {
                    return this.getDiscountRule.percentage
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'percentage'
                }
                return this.$store.commit('setup/editDiscountRule', data)
            }
        },
        limitAmount: {
            get() {
                if(this.getDiscountRule !== {}) {
                    return this.getDiscountRule.limitAmount
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'limitAmount'
                }
                return this.$store.commit('setup/editDiscountRule', data)
            }
        }
    },
    methods: {
        saveDiscountRule() {
            var payload = {
                code: this.discountCode,
                type: this.discountType,
                level: this.discountLevel,
                discountAmount: this.discountAmount,
                percentage: this.percentage,
                limitAmount: this.limitAmount,
                startDate: date.formatDate(this.startDate, 'x'),
                endDate: date.formatDate(this.endDate, 'x')
            }
            this.$store.dispatch('setup/addDiscountRule', payload)
        },
        updateDiscountRule() {
            var payload = {
                id: this.getDiscountRule.id,
                code: this.discountCode,
                type: this.discountType,
                level: this.discountLevel,
                discountAmount: this.discountAmount,
                percentage: this.percentage,
                limitAmount: this.limitAmount,
                startDate: date.formatDate(this.startDate, 'x'),
                endDate: date.formatDate(this.endDate, 'x')
            }
            this.$store.dispatch('setup/updateDiscountRule', payload)
        },
        resetValues() {
            this.$store.commit('setup/resetDiscountRule')
        },
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        },
        goBack() {
            this.toggleShowCancelModal()
            this.resetValues();
            this.$router.push('/discount-rules')
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>