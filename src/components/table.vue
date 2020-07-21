//all management tables POS and CRM, analytics tables
<template>
  <div>
    <!-- <div class="row">
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
        <div class="col-md-7" v-if="showOrderFilters">
            <div class="q-pa-md" >
              <div class="q-gutter-sm " >
                <q-checkbox v-model="selection" color='grey-8' :val="orderStatus" v-for="(orderStatus,i) in uniqueStatus" :key="i" :label='orderStatus' input = displayVal() />
              </div>
            </div>
        </div>
        <div class="col-7" v-else-if="showShiftFilters">
            <div class="q-pa-md" >
              <div class="q-gutter-sm " >
                <q-checkbox v-model="selectedShift" color='grey-8' :val="shift" v-for="(shift,i) in uniqueShifts" :key="i" :label='shift' input = displayVal() />
              </div>
            </div>
        </div>
        <div class="col-7 text-right" v-else-if="showButton">
            <q-btn outline color="primary" label="New Template" class="q-mt-md q-mr-md" @click="tableBtnClicked"/>
        </div>
        <div class="col-7 text-right" v-else-if="showCashMgmntButton">
            <q-btn outline dense color="positive" class="lato q-px-xl q-ma-md" label="Add Cash"  @click="openCashModal('Add Cash')"/>
            <q-btn outline dense color="negative" class="lato q-px-xl q-ma-md" label="Remove Cash"  @click="openCashModal('Remove Cash')"/>
        </div>
         <div class="col-7 text-right" v-else-if="showWasteMgmntButton">
            <q-btn outline dense color="positive" class="lato q-px-xl q-ma-md" label="Wastage"  @click="openWasteModal('Wastage')"/>
            <q-btn outline dense color="negative" class="lato q-px-xl q-ma-md" label="Adjustments"  @click="openWasteModal('Adjustments')"/>
        </div>
    </div> -->
    <div class="q-pa-md">
      <q-table
        class="my-sticky-header-table"
        color="primary"
        :data="getAllDetails"
        :columns="headers"
        row-key="id"
        :pagination.sync="pagination"
        flat
        table-bottom-class="text-white"
        bordered
        table-class="text-dark"
        card-class="bg-white"
        v-if="!withCheckbox  && !withRowActions"
        @row-click='tappedRow'
      >
     
      </q-table>
      <q-table
          class="my-sticky-header-table"
          color="primary"
          :data="getAllDetails"
          :columns="headers"
          row-key="id"
          :pagination.sync="pagination"
          flat
          table-bottom-class="text-white"
          bordered
          table-class="text-dark"
          card-class="bg-white"
          v-else-if="withCheckbox && withRowActions"
          selection="multiple"
          :selected.sync="selected"
        >
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th auto-width>
                <q-checkbox :value="selectAll" @input="selectAllRows()" />
              </q-th>
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
              >
                {{ col.label }}
              </q-th>
              <q-th>Actions</q-th>
            </q-tr>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td auto-width>
                <q-checkbox v-model="selection" :val="props.row.id ? props.row.id : props.row.name"/>
              </q-td>
              <q-td
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
              >
                {{ col.value }}
              </q-td>
              <q-td class="text-center">
                <q-btn round color="transparent" text-color="grey" unelevated icon="edit" size="sm" @click="edit(props.row)">
                  <q-tooltip>
                    Edit
                  </q-tooltip>
                </q-btn>
                <q-btn round color="transparent" text-color="grey" unelevated icon="delete" size="sm" @click="removeItem(props.row)">
                  <q-tooltip>
                    Delete
                  </q-tooltip>
                </q-btn>
              </q-td>
            </q-tr>
          </template>                      
      </q-table>
      <q-table
          class="my-sticky-header-table"
          color="primary"
          :data="getAllDetails"
          :columns="headers"
          row-key="id"
          :pagination.sync="pagination"
          flat
          table-bottom-class="text-white"
          bordered
          table-class="text-dark"
          card-class="bg-white"
          v-else
          selection="multiple"
          :selected.sync="selected"
        >
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
              >
                {{ col.label }}
              </q-th>
              <q-th>Actions</q-th>
            </q-tr>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
              >
                {{ col.value }} 
              </q-td>
              <q-td class="text-center" v-if="stockLevelAudit" auto-width>
                <q-btn color="primary" size="sm" label="View Activity" @click="goToStockLevelInner(props.row)"/>
              </q-td>
              <q-td class="text-center" v-else-if="requisitionAudit" auto-width>
                <q-btn color="primary" size="sm" label="View Activity" @click="goToRequisitionInner(props.row)" v-if="props.row.type !== 'New'"/>
                <div v-else>
                  <q-btn color="positive" size="sm" label="Accept" @click="goToRequisitionInner(props.row)" class="q-mr-sm"/>
                  <q-btn color="negative" size="sm" label="Reject" @click="goToRequisitionInner(props.row)" class="q-mr-sm"/>
                  <q-btn color="info" size="sm" label="View" @click="goToRequisitionInner(props.row)"/>
                </div>
              </q-td>
              <q-td class="text-center" v-else-if="purchaseAudit" auto-width>
                <q-btn color="primary" size="sm" label="View Activity" @click="goToPurchaseInner(props.row)"/>
              </q-td>
              <q-td class="text-center" v-else-if="leaveApprovalButtons">
                <q-btn round color="transparent" text-color="accent" unelevated icon="done" size="sm" @click="accept(props.row)">
                  <q-tooltip>
                    Accept
                  </q-tooltip>
                </q-btn>
                <q-btn round color="transparent" text-color="secondary" unelevated icon="close" size="sm" @click="reject(props.row)">
                  <q-tooltip>
                    Reject
                  </q-tooltip>
                </q-btn>
                <q-btn round color="transparent" text-color="primary" unelevated icon="visibility" size="sm" @click="edit(props.row)">
                  <q-tooltip>
                    Edit
                  </q-tooltip>
                </q-btn>
              </q-td>
              <q-td class="text-center" v-else>
                <q-btn round color="transparent" text-color="grey" unelevated icon="edit" size="sm" @click="edit(props.row)">
                  <q-tooltip>
                    Edit
                  </q-tooltip>
                </q-btn>
                <q-btn round color="transparent" text-color="grey" unelevated icon="delete" size="sm" @click="removeItem(props.row)">
                  <q-tooltip>
                    Delete
                  </q-tooltip>
                </q-btn>
              </q-td>
            </q-tr>
          </template>                      
      </q-table>
      <confirm-delete :open="open" @close="removeItem" @delete="deleteItem"/>
    </div>
  </div>
</template>

<script>
import confirmDelete from 'src/components/modals/confirmDelete.vue'

export default {
    components: {
      "confirm-delete": confirmDelete
    },
    props: {
      tableType: {
        type: String,
        required: false
      },
      getAllDetails: {
        type: Array,
        required: true
      },
      withCheckbox: {
        type: Boolean,
        required: false,
        default: false
      },
      headers: {
        type: Array,
        required: true
      },
      // showCashMgmntButton:{
      //   type: Boolean,
      //   required: false,
      //   default: false
      // },
      // showWasteMgmntButton:{
      //   type: Boolean,
      //   required: false,
      //   default: false
      // },
      customFieldType: {
        type: String
      },
      withRowActions: {
        type: Boolean,
      },
      leaveApprovalButtons: {
        type: Boolean
      },
      requisitionAudit: {
        type: Boolean
      },
      purchaseAudit: {
        type: Boolean
      },
      stockLevelAudit: {
        type: Boolean
      }
    },
    data () {
    return {
        label:'Search By',
        selection:[],
        search: '',
        pagination: {
          sortBy: 'desc',
          descending: false,
          rowsPerPage: 5,
        },
        selected: [],
        uniqueStatus: [],
        Headers: [],
        tableData:[],
        uniqueShifts: ['All', 'Morning', 'Evening', 'Night'],
        selectedShift: [],
        selectAll: false,
        cities: ['Gurgaon', 'Bengaluru', 'Mumbai', 'Delhi'],
        branches: ['Sec-29, Gurgaon', 'St Marks Rd, Bengaluru', 'Powai, Mumbai', 'M-Block, GK-II'],
        open: false,
        selectedRow: null
    }
    },
    created() {
        console.log("in table")
        if(this.getAllDetails.length > 0) {
          this.getUniqueStatus()
        }
        this.createTableData()
    },
    methods: {
        onItemClick (i) {
            this.label=i
          
        },
        createTableData() {
            this.tableData = Object.values(this.getAllDetails)
            console.log(this.tableData, "DATA 1")
        },
        getUniqueStatus() {
            var length= Object.keys(this.getAllDetails).length
            console.log(length,"HAHAHAHA LENGTH!!")
            
            var allStatus = this.getAllDetails.map(order=>{
            return order.status
            })
            console.log(allStatus)
            this.uniqueStatus=allStatus.filter((value,index,self)=>{
                return self.indexOf(value) === index
            })
            console.log(this.uniqueStatus)
        },
        getSelectedString () {
          return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
        },
        tableBtnClicked() {
          this.$emit('clicked');
        },
        selectAllRows() {
          this.selectAll = !this.selectAll

          if(this.selectAll === true) {
            this.getAllDetails.map(detail => {
              this.selection.push(detail.id)
            })
          }
          else {
            this.selection = []
          }
        },
        edit(data) {
          console.log(data)
          this.$emit('edit', data)
        },
        removeItem(data) {
          console.log(data)
          this.open = !this.open
          if(data) {
            this.selectedRow = data
          }
        },
        deleteItem() {
          this.$store.dispatch('setup/deleteItem', {
            id: this.selectedRow.id,
            type: this.tableType,
            customFieldType: this.customFieldType
          });
          this.open = !this.open
        },
        reject(data) {
          console.log(data,"REJECT ROW DATA")
          this.$store.dispatch('EmpDetails/handleLeave', {
            leaveId: data.id,
            approved: false
          });
        },
        accept(data) {
          console.log(data,"ACCEPT ROW DATA")
          this.$store.dispatch('EmpDetails/handleLeave', {
            leaveId: data.id,
            approved: true
          });
        },
        // viewEdit(data) {
        //   console.log(data,"EDIT ROW DATA")
        //   this.$emit('editLeave', data)

        //   this.$store.dispatch('EmpDetails/handleLeave', {
        //     leaveId: data.id,
        //     approved: true
        //   });
        // },
        goToStockLevelInner(data) {
          this.$emit('goToStockLevelInner', data);
        },
        goToRequisitionInner(data) {
          this.$emit('goToRequisitionInner', data)
        },
        tappedRow(evt,row) {
          console.log("table row =", evt,row)
          this.$emit('clicked')
          // console.log("table row =", i)
        },
        openCashModal(x) {
          this.$emit('clickCashModal', x)
        },
        openWasteModal(x) {
          this.$emit('clickWasteModal', x)
        },
        goToPurchaseInner(data) {
          this.$emit('goToPurchaseInner', data)
        }
        
    }
}
</script>
<style lang="stylus" >
// .q-table--dark .q-table__bottom, .q-table--dark thead, .q-table--dark tr, .q-table--dark th, .q-table--dark td
//     border-top-color #ccc !important
//     border-right-color #ccc !important
//     border-bottom-color #ccc !important
//     border-left-color #ccc !important
  
.my-sticky-header-table
  

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

// tr:nth-child(even) 
//   background-color: #eaeaeb

.search-dropdown
  min-width: 200px
  max-width: 200px
  font-size: 15px !important
</style>