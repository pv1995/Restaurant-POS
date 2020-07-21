<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Register</div>
            <q-btn color="primary" label="Add Register" icon="add" class="create-order-button lato" @click="toggleAddRegister"/>
        </section>
        <section class="register-table bg-white q-mt-xl">
            <div class="row">
                <div class="col-sm-2 q-pa-md">
                    <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown lato" no-caps>
                        <q-list>
                            <q-item clickable v-for="(opt,i) in getSearchOptions" :key="i" v-close-popup @click="onItemClick(opt.label)">
                                <q-item-section>
                                    <q-item-label class="lato">{{ opt.label }}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-btn-dropdown>
                </div>
                <div class="col-md-3">
                    <div class="q-pa-md">
                        <q-input v-model="search" debounce="1000" outlined placeholder='Search Here' label-color="orange" dense> 
                            <template v-slot:append>
                                <q-icon class="search-icon" name="search" />
                            </template>
                        </q-input>
                    </div>
                </div>
            </div>
            <customTable :getAllDetails="getAllRegisters" :withCheckbox="withCheckbox" :headers="getRegisterHeaders" :tableType="tableType" :withRowActions="withRowActions" @edit="toggleEditRegister"/> 
        </section>
    </q-page>
</template>
<script>
import customTable from 'src/components/table.vue';

export default {
    components: {
        customTable
    },
    data() {
        return {
            withCheckbox: true,
            showAddRegister: false,
            tableType: 'register',
            withRowActions: true,
            selectedRegister: null,
            label: 'Search By',
            search: ''
        }
    },
    created() {
        this.$store.dispatch('setup/getAllRegisters');
        this.$store.commit('setup/resetRegisterValues');
    },
    methods: {
        toggleAddRegister() {
            this.$router.push({
                name: 'register-inner'
            });
        },
        toggleEditRegister(val) {
            var payload = val.name
            this.$router.push({
                name: 'register-inner',
                params: {
                    name: val.name
                }
            })
        },
        getSelectedRegister(val) {
            this.selectedRegister = this.getAllRegisters.filter(reg => {
                if(reg.id === val) {
                    return reg
                }
            })
        },
        onItemClick(val) {
            this.label = val
        }
    },
    computed: {
        getAllRegisters() {
            return this.$store.getters['setup/getAllRegisters'];
        },
        getRegisterHeaders() {
            return this.$store.getters['tableHeaders/getRegisterHeaders'];
        },
        getSearchOptions() {
            return this.$store.getters['tableSearch/getRegister'];
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>