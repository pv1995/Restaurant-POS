<template>
    <q-dialog v-model="showModal">
      <q-card>
        <q-card-section class="row items-center q-pb-none bg-primary text-white">
          <q-space />
          <q-btn icon="close" flat round dense @click="closeModal" />
        </q-card-section>

        <q-card-section class="bg-primary">
          <div class="pin-wrapper">
              <div class="pin-input-section">
                  <q-input dark borderless v-model="pin" input-class="text-center text-h4" class="pin-input" :type="isPwd ? 'password' : 'text'" :autofocus="true">
                        <template v-slot:append>
                            <q-icon
                            :name="isPwd ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd = !isPwd"
                            />
                        </template>
                  </q-input>
                  <div class="text-caption text-center text-white text-weight-thin">Please enter your 4-digit PIN</div>
              </div>
              <div class="row">
                  <div class="col-9">
                      <div class="row items-center numbers-row">
                          <div class="col-4 q-pa-sm" v-for="(num, i) in numbers" :key="i">
                              <q-btn flat round color="dark" :label="num" size="lg" style="color:white !important" @click="handleInput(num)"/>
                          </div>
                      </div>
                  </div>
                  <div class="col-3">
                      <div class="q-pa-sm">
                        <q-btn flat round color="dark" icon="backspace" size="lg" style="color:white !important" @click="handleBackspace"/>
                      </div>
                      <div class="q-pa-sm">
                        <q-btn flat round color="dark" icon="refresh" size="lg" style="color:white !important"/>
                      </div>
                      <div class="q-pa-sm">
                          <q-btn flat round color="dark" icon="refresh" size="lg" style="color:white !important;visibility:hidden"/>
                      </div>
                      <div class="q-pa-sm q-pl-md">
                          <q-btn flat dense color="secondary" icon="forward" size="lg" label="Go" @click="goToDashboard(pin)" stack :no-caps="true"/>
                      </div>
                  </div>
              </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
</template>
<script>
export default {
    data() {
        return {
            showModal: true,
            userName: '',
            pin: '',
            numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            isPwd: true,
        }
    },
    methods: {
        openModal() {
            this.$emit('on', true);
        },
        closeModal() {
            this.$emit('close', false);
        },
        handleInput(num) {
            this.pin = this.pin.concat(num)
        },
        handleBackspace() {
            let length = this.pin.length;
            this.pin = this.pin.substring(0, length-1);
        },
        handleReset() {
            this.pin = '';
        },
        goToDashboard(pin) {
            this.$emit('dashboard', pin)
        }
    }
}
</script>
<style lang="stylus" scoped>
.pin-wrapper
    width: 350px;

.pin-input
    width: 200px;
    margin: 0 auto;

.numbers-row
    justify-content: center;
    padding-left: 1rem;

</style>