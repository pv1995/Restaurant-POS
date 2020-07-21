<template>
    <div>
         <q-dialog v-model="open" persistent>
             <q-card flat class="modal-card">
                <q-toolbar>
                    <q-avatar color="transparent" text-color="accent" square icon="menu_book" size="lg"/>

                    <q-toolbar-title class="no-padding text-h6 text-dark new-order-title comfortaa q-mt-sm">Add Direct Purchase</q-toolbar-title>

                    <q-btn flat round dense icon="close" @click="closeModal" />
                </q-toolbar>

                <q-separator />
                <q-card-section>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label class="text-body1 text-dark lato">Purchase Order POD#0001</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label class="text-body1 text-dark lato">Select Template</q-item-label>
                            <q-select outlined v-model="template" :options="getFormattedTemplates" class="q-mt-sm" dense label="Select Template"/>
                        </q-item-section>
                    </q-item>
                    <div class="text-body1 text-dark lato q-pl-md q-mt-md">Company Details</div>
                    <q-item>
                        <q-item-section class="q-py-sm lato col-5">
                            <q-item-label class="text-body1 text-dark lato">Select City</q-item-label>
                            <q-select outlined v-model="city" :options="cities" class="q-mt-sm" dense label="Select City"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato col-5">
                            <q-item-label class="text-body1 text-dark lato">Select Branch</q-item-label>
                            <q-select outlined v-model="branch" :options="branches" class="q-mt-sm" dense label="Select Branch"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato col-2">
                            <q-item-label class="text-body1 text-dark lato">Order Date</q-item-label>
                            <q-input v-model="orderDate" mask="date" :rules="['date']" dense class="q-mt-sm" hide-bottom-space outlined>
                                <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                        <q-date v-model="orderDate" @input="() => $refs.qDateProxy.hide()" />
                                    </q-popup-proxy>
                                    </q-icon>
                                </template>
                            </q-input>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label class="lato">Requisitioner Name</q-item-label>
                            <q-item-label class="text-dark lato" caption>{{getUserData.fullName}}</q-item-label>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label class="lato">Requisitioner Designation</q-item-label>
                            <q-item-label class="text-dark lato" caption>{{getUserData.jobDescription}}</q-item-label>
                        </q-item-section>
                    </q-item>
                    <div class="text-body1 text-dark lato q-pl-md q-mt-md">Raw Material List</div>
                    <q-item>
                        <q-item-section class="q-py-sm lato col-4">
                            <q-item-label class="text-body1 text-dark lato">Select Raw Material Category</q-item-label>
                            <q-select outlined v-model="rawMaterialCategory" :options="getFormattedRMCategories" class="q-mt-sm" dense label="Select Raw Material Category"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato col-4">
                            <q-item-label class="text-body1 text-dark lato">Select Raw Material</q-item-label>
                            <q-select outlined v-model="rawMaterial" :options="getFormattedRawMaterials" class="q-mt-sm" dense label="Select Raw Material"/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato col-2">
                            <q-item-label class="text-body1 text-dark lato">Quantity</q-item-label>
                            <q-input dense v-model="quantity" class="q-mt-sm" label="Quantity" outlined/>
                        </q-item-section>
                        <q-item-section class="q-py-sm lato col-2">
                            <q-btn label="Add" outline color="primary" class="q-mx-sm q-px-sm lato q-mt-lg" @click="addItemToList"/>
                        </q-item-section>
                    </q-item>
                    <q-item v-if="rawMaterialList.length > 0">
                        <q-item-section class="q-py-sm lato">
                            <q-item-label class="text-body1 text-dark lato">Raw Material List</q-item-label>
                            <q-table
                            style="max-height:300px;"
                            :data="rawMaterialList"
                            :columns="getRawMaterialListPOHeaders"
                            row-key="index"
                            virtual-scroll
                            flat
                            class="q-mt-md"
                            >
                                <template v-slot:bottom class="bg-transparent">
                                    <div class="flex justify-end full-width q-pr-lg">
                                        <div class="text-body2 lato">Subtotal</div>
                                        <div class="text-body2 text-weight-bold q-ml-xl lato">300</div>
                                    </div>
                                </template>
                            </q-table>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section class="q-py-sm lato">
                            <q-item-label class="text-body1 text-dark lato">Purchase Details</q-item-label>
                            <q-input placeholder="Purchase Notes" v-model="purchaseDetails" outlined class="q-mt-sm" />
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section>
                    <div class="flex items-center justify-center">
                        <q-btn label="Back" outline color="primary" class="q-mx-sm q-px-sm lato" @click="resetValues"/>
                        <q-btn label="Save" unelevated color="primary" class="q-px-md lato q-ml-sm" @click="saveDirectPurchase"/>
                    </div>
                </q-card-section>
             </q-card>
         </q-dialog>
    </div>
</template>
<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            template: '',
            orderDate: '',
            city: '',
            cities: ['Gurugram', 'Bengaluru', 'Mumbai', 'New Delhi'],
            branch: '',
            branches: ['Sec-29, Gurugram', '100 ft Road, Indiranagar', 'Powai', 'M Block Market, GK-II'],
            rawMaterialCategory: '',
            rawMaterial: '',
            rawMaterialList: [],
            purchaseDetails: ''
        }
    },
    computed: {
        getTemplates() {
            return this.$store.getters['inventory/getTemplates'];
        },
        getFormattedTemplates() {
            return this.getTemplates.map(template => {
                return {
                    label: template.name,
                    value: template.name
                }
            })
        },
        getUserData() {
            return this.$store.getters['login/getUserData'];
        },
        getRawMaterialCategories() {
            return this.$store.getters['inventory/getRawMaterialCategories']
        },
        getFormattedRMCategories() {
            return this.getRawMaterialCategories.map(cat => {
                return {
                    label: cat.name,
                    value: cat.name
                }
            })
        },
        getRawMaterials() {
            return this.$store.getters['inventory/getRawMaterials'];
        },
        getFormattedRawMaterials() {
            return this.getRawMaterials.map(rm => {
                return {
                    label: rm.name,
                    value: rm.name
                }
            })
        },
        getRawMaterialListPOHeaders() {
            return this.$store.getters['tableHeaders/getRawMaterialListPOHeaders'];
        },
        getSelectedRawMaterial() {
            return this.getRawMaterials.filter(rm => {
                if(rm === this.rawMaterial) {
                    return rm
                }
            })
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        },
        addItemToList() {
            this.rawMaterialList.push(this.getSelectedRawMaterial)
        },
        saveDirectPurchase() {
            this.closeModal()
        },
        resetValues() {
            this.template = '';
            this.orderDate = '';
            this.city = '';
            this.branch = '';
            this.rawMaterialCategory = '';
            this.rawMaterial = '';
            this.rawMaterialList = '';
            this.purchaseDetails = '';
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>