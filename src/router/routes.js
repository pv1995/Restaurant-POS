import orderDashboard from '../pages/POS/modules/orders/Orders/orderDashboard.vue'
import dineInDashboard from '../pages/POS/modules/orders/TableReservation/dineInDashboard.vue'
import empDashboard from '../pages/POS/POS_Modules/Employee_Management/Home/empDashboard.vue'
import empRoles from '../pages/POS/POS_Modules/Employee_Management/Permissions/roleMgmtDashboard.vue'
import empCategory from '../pages/POS/POS_Modules/Employee_Management/Permissions/categoryWiseEmployees.vue'
import mngPermission from '../pages/POS/POS_Modules/Employee_Management/Permissions/managePermissions.vue'
import empShift from '../pages/POS/POS_Modules/Employee_Management/Shifts/shiftWiseEmployees.vue'
import empLeave from '../pages/POS/POS_Modules/Employee_Management/Leave/leaveMgmntDashboard.vue'
import empSalary from '../pages/POS/POS_Modules/Employee_Management/Salary/salaryMgmntDashboard.vue'
import shiftDashboard from '../pages/POS/POS_Modules/Employee_Management/Shifts/shiftManagementDashboard.vue'
import mngShift from '../pages/POS/POS_Modules/Employee_Management/Shifts/manageShifts.vue'
import addEmp from '../pages/POS/POS_Modules/Employee_Management/Home/addEmpForm.vue'
import applyLeave from '../pages/POS/POS_Modules/Employee_Management/Leave/applyLeaveForm.vue'
import takeOrder from 'src/pages/POS/modules/orders/Create Order/takeOrder.vue'
import checkout from 'src/pages/POS/modules/orders/Create Order/checkout.vue'
import kdsDashboard from '../pages/POS/POS_Modules/Kitchen_Display_System/kdsDashboard.vue'
import cashDashboard from '../pages/POS/POS_Modules/Cash_Management/cashManagementDashboard.vue'


const routes = [
  {
    name: 'merchant-login',
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') },
      { name: 'all-employee-login', path: '/employees', component: () => import('pages/Login/allEmpLogin.vue')}
    ]
  },
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'select-dashboard', path: '', component: () => import('pages/dashboardSelection.vue') }
    ]
  },

  {
    path: '/pos',
    component: () => import('layouts/POSLayout.vue'),
    children: [
      { name: 'order-dashboard', path: '', component: orderDashboard},
      { name: 'dineIn-dashboard', path: '/tables', component: dineInDashboard},
      { name: 'take-order', path: '/takeorder', component: takeOrder}
    ]
  },
  {
    path: '/kds',
    component: () => import('layouts/KDSLayout.vue'),
    children: [
      { name: 'kds', path: '/', component: kdsDashboard},
    ]
  },
  {
    path: '/employee',
    component: () => import('layouts/Employee_Layout.vue'),
    children: [
      { name: 'emp-dashboard', path: '/', component: empDashboard},
      { name: 'emp-roles', path: '/emp-roles', component: empRoles},
      { path: '/category-wise-emp/:name', component: empCategory, name:'category-wise-emp'},
      { path: '/manage-permissions/:name', component: mngPermission, name:'manage-permissions'},
      { name: 'emp-shift', path: '/emp-shift', component: shiftDashboard},
      { path: '/shift-wise-emp/:name', component: empShift, name:'shift-wise-emp'},
      { path: '/manage-shifts/:name', component: mngShift, name:'manage-shifts'},
      { name: 'emp-leaves', path: '/leaves', component: empLeave},
      { name: 'emp-salaries', path: '/salaries', component: empSalary},
      { path: '/add-new-emp/:name', component: addEmp, name:'add-new-emp'},
      { path: '/apply-leave/:name', component: applyLeave, name:'apply-leave'},
    ]
  },
  {
    path: '/payment',
    component: () => import ('layouts/PaymentLayout.vue'),
    children: [
      { name: 'order-payment', path: '', component: checkout}
    ]
  },
  {
    path: '/finance',
    component: () => import('layouts/CashManagementLayout.vue'),
    children: [
      { name: 'cash-management', path: '/', component: cashDashboard},
    ]
  },
  {
    path: '/crm',
    component: () => import('layouts/CRMLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/setup',
    component: () => import('layouts/SetupLayout.vue'),
    children: [
      { name: 'shop-setup', path: '', component: () => import('pages/Setup/ShopSetup.vue') },
      { name: 'registers', path: '/registers', component: () => import('pages/Setup/Register/Register.vue') },
      { name: 'register-inner', path: '/registers/register?', component: () => import('pages/Setup/Register/RegisterInner.vue') },
      { name: 'menu-categories', path: '/menu-categories?', component: () => import('pages/Setup/Menu Management/Menu Category/MenuCategoryMgmt.vue') },
      { name: 'menu-category-inner', path: '/menu-categories/category?', component: () => import('pages/Setup/Menu Management/Menu Category/MenuCategoryInner.vue') },
      { name: 'order-ticket-inner', path: '/menu-categories/order-ticket?', component: () => import('pages/Setup/Menu Management/Menu Category/OrderTicketInner.vue') },
      { name: 'menu-item-management', path: '/menu-item-management', component: () => import('pages/Setup/Menu Management/Menu Items/MenuItemMgmt.vue') },
      { name: 'menu-item-options', path: '/menu-item-options?', component: () => import('pages/Setup/Menu Management/Menu Item Options/MenuItemOptions.vue') },
      { name: 'menu-combo-group', path: '/menu-combo-group?', component: () => import('pages/Setup/Menu Management/Menu Item Options/MenuComboGroupInner.vue') },
      { name: 'addon-inner', path: '/menu-item-options/addon?', component: () => import('pages/Setup/Menu Management/Menu Item Options/AddonInner.vue') },
      { name: 'addon-group-inner', path: '/menu-item-options/addon-group?', component: () => import('pages/Setup/Menu Management/Menu Item Options/AddonGroupInner.vue') },
      { name: 'variant-inner', path: '/menu-item-options/variant?', component: () => import('pages/Setup/Menu Management/Menu Item Options/VariantInner.vue') },
      { name: 'variant-group-inner', path: '/menu-item-options/variant-group?', component: () => import('pages/Setup/Menu Management/Menu Item Options/VariantGroupInner.vue') },
      { name: 'taxes', path: '/taxes?', component: () => import('pages/Setup/Taxes/Taxes.vue')},
      { name: 'tax-inner', path: '/taxes/tax?', component: () => import('pages/Setup/Taxes/TaxInner.vue')},
      { name: 'tax-group-inner', path: '/taxes/tax-group?', component: () => import('pages/Setup/Taxes/TaxGroupInner.vue')},
      { name: 'discount-rules', path: '/discount-rules', component: () => import('pages/Setup/Discount Rules/DiscountRules.vue')},
      { name: 'discount-inner', path: '/discount-rules/discount?', component: () => import('pages/Setup/Discount Rules/DiscountRuleInner.vue')},
      { name: 'additional-charges', path: '/additional-charges', component: () => import('pages/Setup/Additional Charges/AdditionalCharges.vue')},
      { name: 'additional-charge-inner', path: '/additional-charges/charge?', component: () => import('pages/Setup/Additional Charges/AdditionalChargesInner.vue')},
      { name: 'custom-fields', path: '/custom-fields?', component: () => import('pages/Setup/Custom Fields/CustomFields.vue')},
      { name: 'payment-type-inner', path: '/custom-fields/payment-type?', component: () => import('pages/Setup/Custom Fields/PaymentTypeInner.vue')},
      { name: 'additional-detail-inner', path: '/custom-fields/additional-detail?', component: () => import('pages/Setup/Custom Fields/AdditionalDetailInner.vue')},
      { name: 'tag-inner', path: '/custom-fields/tag?', component: () => import('pages/Setup/Custom Fields/TagInner.vue')},
      { name: 'dine-in-tables', path: '/dine-in-tables', component: () => import('pages/Setup/Tables/Tables.vue')},
      { name: 'table-inner', path: '/dine-in-tables/table?', component: () => import('pages/Setup/Tables/TableInner.vue')},
      { name: 'shift-setup', path: '/shift-setup', component: () => import('pages/Setup/Shifts/ShiftSetup.vue')},
      { name: 'shift-inner', path: '/shift-setup/shift?', component: () => import('pages/Setup/Shifts/ShiftInner.vue')}
    ]
  },
  {
    path: '/inventory',
    component: () => import('layouts/InventoryLayout.vue'),
    children: [
      { name: 'stock-view', path: '?', component: () => import('pages/Inventory/Stock View/StockView.vue') },
      { name: 'raw-material-inner', path: '/main/raw-material?', component: () => import('pages/Inventory/Stock View/RawMaterialInner.vue') },
      { name: 'raw-category-inner', path: '/main/raw-category?', component: () => import('pages/Inventory/Stock View/RawMaterialCategoryInner.vue') },
      { name: 'processed-material-inner', path: '/main/processed-material?', component: () => import('pages/Inventory/Stock View/ProcessedGoodInner.vue') },
      { name: 'processed-category-inner', path: '/main/processed-category?', component: () => import('pages/Inventory/Stock View/ProcessedGoodCategoryInner.vue') },
      { name: 'kitchen-inventory', path: '/kitchen-inventory', component: () => import('pages/Inventory/Kitchen Inventory/KitchenInventory.vue') },
      { name: 'restock-inner', path: '/restock-inner?', component: () => import('pages/Inventory/Kitchen Inventory/RestockInner.vue') },
      { name: 'purchase-orders', path: '/purchase-orders', component: () => import('pages/Inventory/Purchase Orders/PurchaseOrder.vue') },
      { name: 'purchase-order-inner', path: '/purchase-orders/purchase-order?', component: () => import('pages/Inventory/Purchase Orders/PurchaseOrderInner.vue') },
      { name: 'template-inner', path: '/purchase-orders/template?', component: () => import('pages/Inventory/Purchase Orders/TemplateInner.vue') },
      { name: 'receiving', path: '/receiving', component: () => import('pages/Inventory/Receiving/Receiving.vue') },
      { name: 'invoices', path: '/invoices', component: () => import('pages/Inventory/Invoices/Invoices.vue') },
      { name: 'stock-level-audit', path: '/audit/stock-level', component: () => import('pages/Inventory/Audit/StockLevelAudit.vue') },
      { name: 'stock-level-audit-inner', path: '/audit/stock-level/:id', component: () => import('pages/Inventory/Audit/StockLevelAuditInner.vue') },
      { name: 'requisition', path: '/audit/requisition', component: () => import('pages/Inventory/Audit/RequisitionAudit.vue') },
      { name: 'requisition-inner', path: '/audit/requisition/:id', component: () => import('pages/Inventory/Audit/RequisitionInner.vue')},
      { name: 'purchase-audit', path: '/audit/purchase-order', component: () => import('pages/Inventory/Audit/PurchaseAudit.vue') },
      { name: 'purchase-audit-inner', path: '/audit/purchase-order/:id', component: () => import('pages/Inventory/Audit/PurchaseInner.vue')},
      { name: 'wastage', path: '/wastage', component: () => import('pages/Inventory/Wastage/wasteDashboard.vue') },
      { name: 'waste-history', path: '/waste-history', component: () => import('pages/Inventory/Wastage/wasteHistory.vue') },
      { path: '/settings', component: () => import('pages/Settings.vue')}
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
