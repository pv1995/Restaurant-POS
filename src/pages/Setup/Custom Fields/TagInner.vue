<template>
    <q-page class="q-pa-lg">
        <section class="page-actions">
            
        </section>
        <section class="tag-inner bg-white q-mt-md q-ma-xl">
            <q-card flat class="modal-card">
                <q-toolbar>
                    <q-btn flat round dense icon="arrow_back" @click="toggleShowCancelModal" class="q-mr-md"/>

                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa">{{this.$route.params.id ? 'Edit Tags' : 'Add Tags'}}</q-toolbar-title>
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <div class="text-h6 text-dark q-pl-md comfortaa">Tag Details</div>
                    <div class="text-caption text-grey-7 q-pl-md lato">With tags, you can capture more customer and sales data.</div>
                </q-card-section>
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label style="padding-top:20px">
                                Tag Name
                                <q-badge align="top" color="transparent" text-color="red" class="no-padding">*</q-badge>
                            </q-item-label>
                            <q-input dense placeholder="Tag Name" v-model="tagName" outlined class="q-mt-sm" :rules="[val => !!val || 'Tag Name is required']" bottom-slots/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Tag Type</q-item-label>
                            <q-select outlined v-model="tagType" :options="tagTypes" class="q-mt-sm" dense label="Select Tag Type" />
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label>Select Tag Color</q-item-label>
                            <div class="flex">
                                <q-radio v-model="tagColor" :val="tag" class="q-mt-sm" v-for="tag in tagColorOptions" :key="tag">
                                    <template v-slot:default="">
                                        <q-badge :color="tag" :style="`background-color: ${tag}`" class="tag-colors"/>
                                    </template>
                                </q-radio>
                            </div>
                            <q-checkbox v-model="toBePrinted" label="Print On Receipts" class="q-mt-sm" />
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Cancel" outline color="primary" class="q-mx-sm q-px-sm lato" @click="toggleShowCancelModal"/>
                        <q-btn label="Update" unelevated color="primary" class="q-px-md lato" @click="updateTag" v-if="this.$route.params.id"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato" @click="saveTag" v-else/>
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
            tagName: '',
            tagType: '',
            tagTypes: ['Sale Data', 'Customer Data'],
            tagColor: '',
            tagColorOptions: ['#1976d3', '#ff980e', '#27a79a', '#fb714e'],
            printOnReceipts: false,
            showCancelModal: false
        }
    },
    created() {
        if(this.$route.params.id) {
            var payload = {
                info: this.$route.params.id,
                type: 'tag'
            }
            this.$store.dispatch('setup/getCustomField', payload)
        }
    },
    computed: {
        getTag() {
            return this.$store.getters['setup/getTag']
        },
        tagName: {
            get() {
                if(this.getTag !== {}) {
                    return this.getTag.name
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'name'
                }
                return this.$store.commit('setup/editTag', data)
            }
        },
        tagType: {
            get() {
                if(this.getTag !== {}) {
                    return this.getTag.additionalDetailType
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'additionalDetailType'
                }
                return this.$store.commit('setup/editTag', data)
            }
        },
        tagColor: {
            get() {
                if(this.getTag !== {}) {
                    return this.getTag.tagColor
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'tagColor'
                }
                return this.$store.commit('setup/editTag', data)
            }
        },
        toBePrinted: {
            get() {
                if(this.getTag !== {}) {
                    return this.getTag.toBePrinted
                }
                return ''
            },
            set(payload) {
                var data = {
                    info: payload,
                    type: 'toBePrinted'
                }
                return this.$store.commit('setup/editTag', data)
            }
        }
    },
    methods: {
        saveTag() {
            var payload = {
                name: this.tagName,
                additionalDetailType: this.tagType,
                toBePrinted: this.printOnReceipts,
                tagColor: this.tagColor,
                type: 'Tag'
            }
            this.$store.dispatch('setup/addTag', payload)
        },
        updateTag() {
            var payload = {
                id: this.getTag.id,
                name: this.tagName,
                additionalDetailType: this.tagType,
                toBePrinted: this.printOnReceipts,
                tagColor: this.tagColor,
                type: 'Tag'
            }
            this.$store.dispatch('setup/updateTag', payload)
        },
        resetValues() {
            this.$store.commit('setup/resetTag')
        },
        toggleShowCancelModal() {
            this.showCancelModal = !this.showCancelModal
        },
        goBack() {
            this.toggleShowCancelModal()
            this.resetValues();
            this.$router.push({
                name: 'custom-fields',
                params: {
                    type: 'tags'
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>