<template>
    <q-page class="q-pa-lg">
        <section class="page-actions flex justify-between">
            <div class="page-title text-primary comfortaa text-weight-bold">Shift Setup</div>
            <q-btn color="primary" label="Add Shift" icon="add" class="create-order-button lato" @click="toggleShowShift"/>
        </section>
        <q-card>
        <section class="shift-table q-mt-xl bg-white">
            <div class="row">
                <div class="col-sm-2">
                    <div class="q-pa-md">
                        <q-btn-dropdown outline size='md' color='grey-8' :label='label' class="search-dropdown">
                            <q-list>
                                <q-item clickable v-for="(header,i) in headers" :key="i" v-close-popup @click="onItemClick(header.label)">
                                    <q-item-section>
                                        <q-item-label>{{ header.label }}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                    </div>
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
            <div v-if="getAllShifts">
                <customTable :getAllDetails="getAllShifts" :withCheckbox="withCheckbox" :withRowActions="withRowActions" :headers="getShiftHeaders" @edit="toggleEditShift"/>
            </div>
        </section>
        </q-card>
    </q-page>
</template>
<script>
import customTable from 'src/components/table.vue';

export default {
    components: {
        customTable
    },
    created() {
        this.$store.dispatch('setup/getAllShifts')
    },
    data() {
        return {
            withCheckbox: true,
            withRowActions: true
        }
    },
    computed: {
        getAllShifts() {
            return this.$store.getters['setup/getAllShiftDetails'];
        },
        getShiftHeaders() {
            return this.$store.getters['tableHeaders/getShiftHeaders'];
        }
    },
    methods: {
        toggleShowShift() {
            this.$router.push({
                name: 'shift-inner'
            })
        },
        toggleEditShift(val) {
            this.$router.push({
                name: 'shift-inner',
                params: {
                    id: val.name
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>