<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
        
        </section>
        <section class="menu-category-inner q-mt-md q-ma-xl bg-white">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{this.$route.params.id ? 'Edit Menu Category' : 'Add Menu Category'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />

                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Menu Category Details</div>
                </q-card-section>
                
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>
                                Menu Category Name
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Menu Category Name" v-model="menuCategoryName" outlined class="q-mt-sm" :rules="[val => !!val || 'Menu Category Name is required']" bottom-slots/>
                        </q-item-section>
                    </q-item>
                    <!-- <q-item class="lato">
                        <q-item-section>
                            <q-item-label>Select City</q-item-label>
                            <q-select outlined v-model="city" :options="cities" class="q-mt-sm" dense label="Select City"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Select Branch</q-item-label>
                            <q-select outlined v-model="branch" :options="branches" class="q-mt-sm" dense label="Select Branch"/>
                        </q-item-section>
                    </q-item> -->
                    <q-item class="lato">
                        <q-item-section>
                            <q-item-label>Order Ticket KOT</q-item-label>
                            <q-select outlined v-model="orderTicketKOT" :options="getAllTicketGroups" class="q-mt-sm" dense label="Order Ticket KOT for:" emit-value map-options/>
                        </q-item-section>
                    </q-item>
                    <q-item class="lato">
                        <q-item-section>
                            <q-item-label>Make Available</q-item-label>
                            <div class="row">
                                <q-btn class="q-mr-sm q-mt-sm q-px-md" outline dense v-for="option in availabilityOptions" :key="option.value" :label="option.label" :class="option.selected ? 'bg-primary text-white' : ''" @click="makeAvailableToPlatforms(option)"/>
                            </div>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateMenuCategory" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveMenuCategory" v-else/>
                    </div>
                </q-card-section>
             </q-card>
        </section>
        <cancel-modal :open="showCancelModal" @close="toggleShowCancelModal" @back="goBack" />
    </q-page>
</template>
<script>
import cancelModal from 'src/components/modals/cancelModal.vue'

export default {
    components: {
        "cancel-modal": cancelModal
    },
    data() {
        return {
            city: '',
            branch: '',
            cities: ['Gurugram', 'Delhi', 'Bangalore', 'Pune', 'Mumbai'],
            branches: ['Sec-29', 'MG Road', 'Sec-14', 'Vasant Vihar'],
            KOTOptions: ['Main Kitchen', 'Kitchen#01', 'Kitchen#34'],
            availabilityOptions: [
                {
                    label: 'Swiggy',
                    value: 'swiggy',
                    selected: false
                },
                {
                    label: 'Zomato',
                    value: 'zomato',
                    selected: false
                },
                {
                    label: 'Dunzo',
                    value: 'dunzo',
                    selected: false
                },
                {
                    label: 'Uber Eats',
                    value: 'ubereats',
                    selected: false
                }
            ],
            makeAvailable: [],
            showCancelModal: false
        }
    }, 
    created() {
        if(this.$route.params.id) {
            var payload = this.$route.params.id
            this.$store.dispatch('menu/getMenuCategory', payload)
        }
    },
    computed: {
        getMenuCategory() {
            return this.$store.getters['menu/getMenuCategory']
        },
        getAllOrderTicketGroups() {
            return this.$store.getters['setup/getAllOrderTicketGroups'];
        },
        checkSelected(option) {
            this.makeAvailable.filter(opt => {
                if(opt === option.value) {
                    return 'bg-primary'
                }
            })
        },
        getAllTicketGroups() {
            return this.getAllOrderTicketGroups.map(tkt => {
                return {
                    label: tkt.name,
                    value: tkt.id,
                }
            })
        },
        menuCategoryName: {
            get() {
                if(this.getMenuCategory !== {}) {
                    return this.getMenuCategory.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                return this.$store.commit('menu/editMenuCategory', data)
            }
        },
        orderTicketKOT: {
            get() {
                if(this.getMenuCategory !== {}) {
                    return this.getMenuCategory.orderTicketKOT
                }
                return ''
            },
            set(payload) {
                console.log(payload)
                var data = {
                    info: payload,
                    type: 'orderTicketKOT'
                }
                return this.$store.commit('menu/editMenuCategory', data)
            }
        }
    },
    methods: {
        makeAvailableToPlatforms(option) {
            option.selected = !option.selected
            if(this.makeAvailable.indexOf(option.value) === -1) {
                this.makeAvailable.push(option.value);
                console.log(this.makeAvailable);
            }
            else {
                this.makeAvailable = this.makeAvailable.filter(opt=> {
                    if(opt !== option.value) {
                        return opt
                    }
                })
                console.log(this.makeAvailable);
            }
        },
        saveMenuCategory() {
            var payload = {
                name: this.menuCategoryName,
                ticketGroup: this.orderTicketKOT
            }
            console.log(payload)
            this.$store.dispatch('menu/addMenuCategory', payload)
        },
        updateMenuCategory() {
            var payload = {
                id: this.category.id,
                name: this.category.name,
                ticketGroup: this.category.orderTicketKOT.value
            }
            console.log(payload)
            this.$store.dispatch('menu/updateMenuCategory', payload)
        },
        resetValues() {
            this.$store.commit('menu/resetMenuCategory')
        },
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        },
        goBack() {
            this.toggleShowCancelModal()
            this.resetValues();
            this.$router.push({
                name: 'menu-categories',
                params: {
                    type: 'menuCategories'
                }
            });
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>