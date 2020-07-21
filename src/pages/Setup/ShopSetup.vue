<template>
    <q-page class="flex flex-center q-pa-xl" v-if="getMerchantDetails && getCurrentEmployee">
        <section class="shop-details">
            <div class="text-subtitle1 text-dark q-mb-sm comfortaa">Your Shop Details</div>
            <q-card class="shop-detail-card q-py-sm">
                <q-card-section>
                        <div class="text-subtitle2 text-dark comfortaa">Shop Details</div>
                        <div class="text-caption text-grey-7 lato">Your Shop Details & Settings</div>
                </q-card-section>
                <q-card-section class="no-padding">
                    <div v-if="filesPng === null && !getMerchantDetails" style="max-height:100px" class="q-ml-md flex items-center">
                        <div>
                            <q-file
                                v-model="filesPng"
                                outlined
                                :filter="checkFileType"
                                input-style="width: 100px; height:100px"
                                style="height:100px;width: 100px;"
                            />
                        </div>
                        <div class="text-dark text-caption q-ml-md lato">Upload your Shop logo (less than 5 MB)</div>
                    </div>
                    <div v-else>
                        <q-img :src="getMerchantDetails.photo" height="100px" width="100px" class="q-ml-md"/>
                    </div>
                </q-card-section>
                <q-card-section class="q-mt-md">
                    <div class="row">
                        <div class="col-6">
                            <div class="text-subtitle2 text-dark lato">Shop Name</div>
                            <q-input dense placeholder="Shop Name" v-model="getMerchantDetails.fullName" outlined class="q-pr-xl q-mt-sm"/>
                        </div>
                        <div class="col-6">
                            <div class="text-subtitle2 text-dark lato">Location</div>
                            <q-input dense placeholder="Location" v-model="getMerchantDetails.city" outlined class="q-pr-xl q-mt-sm"/>
                        </div>
                    </div>
                </q-card-section>
                <q-card-section>
                    <div class="row">
                        <div class="col-6">
                            <div class="text-subtitle2 text-dark lato">Business Type</div>
                            <q-select outlined v-model="businessType" :options="businessTypes" class="q-mt-sm q-pr-xl" dense />
                        </div>
                        <div class="col-6">
                            <div class="text-subtitle2 text-dark lato">Phone Number</div>
                            <q-input dense placeholder="Phone Number" v-model="getMerchantDetails.phoneNumber" outlined class="q-pr-xl q-mt-sm"/>
                        </div>
                    </div>
                </q-card-section>
                <q-card-section>
                    <div class="flex justify-center card-detail-buttons">
                        <q-btn outline label="Reset" color="primary" class="q-mx-sm q-px-md"/>
                        <q-btn unelevated label="Save" color="primary" class="q-px-lg"/>
                    </div>
                </q-card-section>
            </q-card>
        </section>
        <section class="account-details q-py-sm q-mt-xl">
            <div class="text-subtitle1 text-dark q-mb-sm comfortaa">Your Account Details</div>
            <q-card class="shop-detail-card q-py-sm q-pb-xl">
                <q-card-section>
                        <div class="text-subtitle2 text-dark lato">Account Details</div>
                        <div class="text-caption text-grey-7 lato">Your details help us serve you better!</div>
                </q-card-section>
                <q-card-section>
                    <div class="row">
                        <div class="col-6">
                            <div class="text-subtitle2 text-dark lato">Your Name</div>
                            <q-input dense placeholder="Account Name" v-model="getCurrentEmployee.fullName" outlined class="q-pr-xl q-mt-sm"/>
                        </div>
                        <div class="col-6">
                            <div class="text-subtitle2 text-dark lato">Job Title</div>
                            <q-input dense placeholder="Account Email" v-model="getCurrentEmployee.jobDescription" outlined class="q-pr-xl q-mt-sm"/>
                        </div>
                    </div>
                </q-card-section>
                <q-card-section>
                    <div class="row">
                        <div class="col-6">
                            <div class="text-subtitle2 text-dark lato">Mobile Number</div>
                            <q-input dense placeholder="Your Mobile Number" v-model="getCurrentEmployee.phoneNumber" outlined class="q-pr-xl q-mt-sm"/>
                        </div>
                        <div class="col-6">
                            <div class="text-subtitle2 text-dark lato">PIN</div>
                            <q-input dense placeholder="PIN" v-model="getCurrentEmployee.pin" outlined class="q-pr-xl q-mt-sm"/>
                        </div>
                    </div>
                </q-card-section>
                <q-card-section>
                    <div class="flex justify-center card-detail-buttons">
                        <q-btn outline label="Reset" color="primary" class="q-mx-sm q-px-md lato"/>
                        <q-btn unelevated label="Save" color="primary" class="q-px-lg lato"/>
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
            filesPng: null,
            businessType: '',
            businessTypes: ['Cloud Kitchen', 'QSR', 'Restaurant', 'Bar', 'Bakery', 'Dessert Shop', 'Cafe']
        }
    },
    created() {
        this.$store.dispatch('login/getMerchantDetails');
        this.$store.dispatch('login/getCurrentEmployee')
        if(this.getMerchantDetails) {
            this.businessType = this.getMerchantDetails.businessType
        }
    },
    computed: {
        getMerchantDetails() {
            return this.$store.getters['login/getMerchant']
        },
        getCurrentEmployee() {
            return this.$store.getters['login/getUserData']
        }
    },
    methods: {
        checkFileType (files) {
            return files.filter(file => file.type === 'image/png')
        }
    }
}
</script>
<style lang="stylus" scoped>
.shop-detail-card
    width: 1000px;
.card-detail-buttons
    width: 25%;
    margin: 0 auto
</style>