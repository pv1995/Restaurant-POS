<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="order-ticket-inner bg-white q-mt-md q-ma-lg">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa q-mt-sm">{{this.$route.params.id ? 'Edit Order Ticket Group' : 'Add Order Ticket Group'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Order Ticket Group Details</div>
                    <div class="text-caption text-dark q-pl-md lato">You can use Order Ticket Group to split and print KOTs across kitchens.</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Order Ticket Group Name</q-item-label>
                            <q-input dense placeholder="Order Ticket Group Name" v-model="orderTicketGroupName" outlined class="q-mt-sm" />
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateOrderTicketGroup" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveOrderTicketGroup" v-else/>
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
            showCancelModal: false
        }
    },
    created() {
        if(this.$route.params.id) {
            this.$store.dispatch('setup/getTicketGroup', this.$route.params.id)
        }
    },
    computed: {
        getTicketGroup() {
            return this.$store.getters['setup/getTicketGroup'];
        },
        orderTicketGroupName: {
            get() {
                if(this.getTicketGroup !== {}) {
                    return this.getTicketGroup.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                return this.$store.commit('setup/editTicketGroup', data)
            }
        }
    },
    methods: {
        saveOrderTicketGroup() {
            var payload = {
                name: this.orderTicketGroupName
            }
            this.$store.dispatch('setup/addTicketGroup', payload)
        },
        updateOrderTicketGroup() {
            var payload = {
                id: this.ticketGroup.id,
                name: this.ticketGroup.name
            }
            this.$store.dispatch('setup/updateTicketGroup', payload)
        },
        resetValues() {
            this.$store.commit('setup/resetTicketGroup');
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
                    type: 'orderTicketGroups'
                }
            });
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>