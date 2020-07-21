<template>
    <q-page class="q-pa-xl">
        <section class="register-table q-mt-lg bg-white">
            <q-tabs
                v-model="tab"
                dense
                align="left"  
                active-color="primary"
                indicator-color="secondary"
                >
                <q-tab name="account" class="tab-style lato" label="Account Settings" />
                <q-tab name="selling" class="tab-style lato" label="Selling Preferences" />
                <q-tab name="printer" class="tab-style lato" label="Printer Preferences" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="account">
                    <account-settings />
                </q-tab-panel>
                <q-tab-panel name="selling">
                    <selling-preferences />
                </q-tab-panel>
                <q-tab-panel name="printer">
                    <printer-preferences />
                </q-tab-panel>
            </q-tab-panels>
        </section>
    </q-page>
</template>
<script>
import accountSettings from 'src/components/Settings/AccountSettings.vue';
import sellingPreferences from 'src/components/Settings/SellingPreferences.vue';
import printerPreferences from 'src/components/Settings/PrinterPreferences.vue';

export default {
    components: {
        'account-settings': accountSettings,
        'selling-preferences': sellingPreferences,
        'printer-preferences': printerPreferences
    },
    data() {
        return {
            tab: 'account',
            filesPng: ''
        }
    },
    computed: {
        getCurrentEmployee() {
            return this.$store.getters['login/getUserData'];
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

</style>