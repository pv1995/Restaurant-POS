<template>
    <q-layout view="lHh Lpr lFf">
        <q-dialog v-model="icon" persistent transition-show="scale" transition-hide="scale" v-if="this.$route.path === '/login'">
            <q-card class="login-card">
                <q-card-section class="Rectangle q-pb-none">
                    <div class="welcome-to-Shark-POS comfortaa">Welcome to Shark POS</div>
                    <div class="q-pa-sm logo"> <q-avatar size="40" color="white"/> </div>
                </q-card-section>
                <q-card-section style="width:90%;margin:0 auto" v-if="!forgotPassword">
                    <div class="company-login q-mb-md">Merchant Login</div>
                    <q-form
                        @submit="onSubmit"
                        class="q-gutter-sm"
                        > 
                        <div v-if="getLoginError">
                            <div class="lato text-caption text-negative">{{getLoginError}}</div>
                        </div>
                        <q-input
                            class="login-id-input"
                            outlined
                            dense
                            v-model="email"
                            label="Email *"
                            :rules="[ val => val && val.length > 0 || 'Please enter your email']"
                            bottom-slots
                            hide-bottom-space
                            type="email"
                        />
                        <q-input
                            class="login-pass-input"
                            type="password"
                            outlined
                            dense
                            v-model="password"
                            label="Password *"
                            :rules="[ val => val && val.length > 0 || 'Please enter your password']"
                            color="transition_primary"
                            bottom-slots
                            hide-bottom-space
                        />
                        <div class="row">
                            <div class="col text-left keep-me-signed-in">
                                <q-checkbox size="xs" v-model="alwaysSignedIn" label="Keep me signed in" class="lato"/>
                            </div>
                            <div class="col text-right forgot-password">
                                <q-btn dense flat class="forgot-button" no-caps @click="toggleForgotPassword">Forgot Password?</q-btn>
                            </div>
                        </div>
                        <div class="q-my-md submit-button">
                            <q-btn label="Submit" type="submit" color="primary" class="lato"/>
                        </div>
                    </q-form>
                </q-card-section>
                <q-card-section v-else>
                    <div class="company-login lato">Forgot Password</div>
                    <div class="forgot-password-caption text-caption lato text-grey-7">Please enter your registered email address.</div>
                    <q-input
                        class="login-id-input q-my-md"
                        outlined
                        dense
                        v-model="email"
                        label="Email *"
                        :rules="[ val => val && val.length > 0 || 'Please enter your email']"
                        bottom-slots
                        hide-bottom-space
                        type="email"
                    />
                    <div class="flex items-center justify-center q-mt-lg">
                        <q-btn label="Back to Login" outline color="primary" class="q-mr-sm q-px-sm lato" @click="toggleForgotPassword"/>
                        <q-btn label="Send Email" unelevated color="primary" class="q-px-md lato" @click="forgotPassword"/>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
        <router-view v-else />
    </q-layout>
</template>
<script>
import {appName} from '../config.js'

export default {
    data() {
        return {
            alwaysSignedIn: false,
            icon: true,
            password: 'webelvesTM',
            email: 'dhruv94mishra@gmail.com',
            accept: true,
            globalName: '',
            forgotPassword: false
        }
    },
    created() {
        this.globalName = appName;
    },
    computed: {
        getLoginError() {
            return this.$store.getters['login/getLoginError']
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('login/merchantLogin', {email: this.email, password: this.password})
        },
        onReset() {
            this.password = '',
            this.email = ''
        },
        toggleForgotPassword() {
            this.forgotPassword = !this.forgotPassword
        }
    }
}
</script>
<style lang="stylus" scoped >

.company-login 
  font-family: Comfortaa
  font-size: 16px
  font-weight: 600
  letter-spacing: 0.5px
  color: dark

.login-id-input, .login-pass-input
  font-family: Lato
//   padding-bottom: 2px
  

.welcome-to-Shark-POS
  font-size: 24px
  font-weight: bold
  letter-spacing: 0.75px
  color: #fafaf6
  justify-content: center
  display: flex

.submit-button
  justify-content: center
  display: flex
  
.logo
  justify-content: center
  display: flex

.Rectangle 
  height: 136px
  background-image: linear-gradient(to left, $transition_primary 0%, $primary 100%)
  
.keep-me-signed-in, .forgot-password
  font-family: AvenirNext
  font-size: 13px
  color: #222222
  text-transform: none

.forgot-button
    font-size: 13px
// .forgot-password
//   text-transform: none
//   font-family: AvenirNext;
//   font-size: 12px;
//   color: #222222;

.login-card
    width 650px
</style>