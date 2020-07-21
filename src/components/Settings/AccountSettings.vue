<template>
    <div>
        <q-item class="q-my-lg">
            <q-item-section>
                <q-item-label class="comfortaa text-h6 text-dark">Account Settings</q-item-label>
                <q-item-label class="lato" caption>Your details help us serve you better!</q-item-label>
            </q-item-section>
        </q-item>
        <q-item>
            <q-item-section>
                <div v-if="filesPng === null && !getCurrentEmployee" style="max-height:100px" class="q-ml-md flex items-center">
                    <div>
                        <q-file
                            v-model="filesPng"
                            outlined
                            :filter="checkFileType"
                            input-style="width: 100px; height:100px"
                            style="height:100px;width: 100px;"
                        />
                    </div>
                    <div class="text-dark text-caption q-ml-md lato">Upload your photo</div>
                </div>
                <div v-else>
                    <q-img :src="getCurrentEmployee.photo" height="75px" width="75px" class="q-ml-md"/>
                </div>
            </q-item-section>
            <q-item-section class="lato">
                <q-item-label>Your Name</q-item-label>
                <q-input dense placeholder="Your Name" v-model="fullName" outlined class="q-pr-xl q-mt-sm"/>
            </q-item-section>
            <q-item-section>
                <q-item-label>Mobile Number</q-item-label>
                <q-input dense placeholder="Mobile Number" v-model="getCurrentEmployee.phoneNumber" outlined class="q-pr-xl q-mt-sm"/>
            </q-item-section>
        </q-item>
        <q-item class="q-my-lg">
            <q-item-section class="lato">
                <q-item-label>Email Address</q-item-label>
                <q-input dense placeholder="Email Address" v-model="getCurrentEmployee.emailAddress" outlined class="q-pr-xl q-mt-sm"/>
            </q-item-section>
            <q-item-section>
                <q-item-label>Gender</q-item-label>
                <q-input dense placeholder="Gender" v-model="getCurrentEmployee.gender" outlined class="q-pr-xl q-mt-sm"/>
            </q-item-section>
            <q-item-section>
                <q-item-label>Date of Birth</q-item-label>
                <q-input dense placeholder="Date of Birth" v-model="getCurrentEmployee.dob" outlined class="q-pr-xl q-mt-sm"/>
            </q-item-section>
        </q-item>
        <q-item class="q-mt-xl q-mb-lg">
            <q-item-section>
                <q-item-label class="comfortaa text-h6 text-dark">Job Details</q-item-label>
                <q-item-label class="lato" caption>Your details help us serve you better!</q-item-label>
            </q-item-section>
        </q-item>
        <q-item class="q-my-lg">
            <q-item-section class="lato">
                <q-item-label>Date of Joining</q-item-label>
                <q-input dense placeholder="Date of Joining" v-model="getCurrentEmployee.doj" outlined class="q-pr-xl q-mt-sm" disable/>
            </q-item-section>
            <q-item-section>
                <q-item-label>Role</q-item-label>
                <q-input dense placeholder="Role" v-model="getCurrentEmployee.jobDescription" outlined class="q-pr-xl q-mt-sm" disable/>
            </q-item-section>
            <q-item-section>
                <q-item-label>Shift</q-item-label>
                <q-input dense placeholder="Date of Birth" v-model="getCurrentEmployee.dob" outlined class="q-pr-xl q-mt-sm" disable/>
            </q-item-section>
        </q-item>
        <q-item class="q-my-lg">
            <q-item-section class="lato">
                <q-item-label>Salary Amount</q-item-label>
                <q-input dense placeholder="Salary" v-model="getCurrentEmployee.salary" outlined class="q-pr-xl q-mt-sm" disable/>
            </q-item-section>
            <q-item-section>
                <q-item-label>Salary Rotation</q-item-label>
                <q-input dense placeholder="Salary Rotation" v-model="getCurrentEmployee.salaryRotation" outlined class="q-pr-xl q-mt-sm text-capitalize" disable/>
            </q-item-section>
            <q-item-section>
                <q-item-label>Your PIN</q-item-label>
                <q-input dense placeholder="Your PIN" v-model="getCurrentEmployee.pin" outlined class="q-pr-xl q-mt-sm" disable/>
            </q-item-section>
        </q-item>
        <q-separator />
        <q-item class="justify-center q-mt-md">
            <q-item-section class="col-2">
                <div class="flex">
                    <q-btn label="Reset" outline color="primary" class="q-mx-sm q-px-sm lato" @click="resetValues"/>
                    <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveDetails"/>
                </div>
            </q-item-section>
        </q-item>
    </div>
</template>
<script>
export default {
    data() {
        return {
            filesPng: null
        }
    },
    computed: {
        getCurrentEmployee() {
            return this.$store.getters['login/getUserData'];
        },
        fullName: {
            get() {
                return this.getCurrentEmployee.fullName
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'fullName'
                }
                this.$store.commit('login/editUserInfo', data);
            }
        }
    },
    methods: {
        resetValues() {
            this.getCurrentEmployee.fullName = '';
        },
        saveDetails() {
            this.$emit('save', this.employee)
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>