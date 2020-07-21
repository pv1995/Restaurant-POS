//This page will have option for selecting which dashboard does the employee want to see POS/CRM
<template>
    <q-page class="flex flex-center">
        <div class="row">
            <div class="col-6 q-pa-xl" v-for="product in products" :key="product.id">
                <card :cardType="'product'" :product="product"/>
            </div>
        </div>
    </q-page>
</template>
<script>
import card from '../components/card.vue'

export default {
    components: {
        card
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'POS',
                    icon: 'img:statics/pos.jpeg',
                    caption: 'ALL-IN-ONE SOFTWARE to optimise your restaurant operations and management with ease',
                    route: '/pos'
                },
                {
                    id: 2,
                    name: 'CRM',
                    icon: 'img:statics/crm.jpeg',
                    caption: 'ALL-IN-ONE SOFTWARE to optimise your restaurant operations and management with ease',
                    route: '/crm'
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>