<template>
    <q-header elevated>
      <q-toolbar class="bg-white text-primary">
        <q-btn
          flat
          dense
          round
          @click="toggleDrawer"
          icon="menu"
          aria-label="Menu"
          color="secondary"
        />
          <q-toolbar-title>
            {{this.globalName}}
          </q-toolbar-title>
          <div v-if="!getCurrentEmployee">
            <div>{{this.globalName}} v{{ this.version }}</div>
          </div>
          <div v-else>
            <div class="flex">
              <q-btn round color="transparent" icon="notifications" text-color="grey" unelevated class="q-mr-sm"/>
              <q-btn-dropdown rounded unelevated dropdown-icon='ha' fab-mini size="xs">
                <template v-slot:label>
                  <q-avatar size="24px">
                    <img :src="getCurrentEmployee.photo">
                  </q-avatar>
                </template>
              </q-btn-dropdown>
            </div>
          </div>
      </q-toolbar>
    </q-header>
</template>
<script>
import { appName, version } from '../config';

export default {
    created() {
        this.globalName = appName;
        this.version = version;
    },
    data() {
        return {
            globalName: '',
            version: ''
        }
    },
    computed: {
      getCurrentEmployee() {
        return this.$store.getters['login/getUserData']
      }
    },
    methods: {
        toggleDrawer() {
            this.$emit("clicked");
        }
    }
}
</script>
<style lang="stylus" scoped>
.q-btn-dropdown__arrow
  display: none;
</style>