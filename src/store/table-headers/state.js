export default function () {
  return {
    //
    register: [
      {
        id: 1,
        name: 'regName',
        required: true,
        label: 'Register Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      },
      {
        id: 2,
        name: 'rnoprefix',
        required: true,
        label: 'Receipt No. Prefix',
        align: 'left',
        field: 'receiptNumberPrefix',
        format: val => `${val}`
      },
      {
        id: 3,
        name: 'printReceipt',
        required: true,
        label: 'Print Receipt?',
        align: 'left',
        field: 'printReceiptsOrderTickets',
        format: val => `${val}`
      }
    ],
    menuCategory: [
      {
        id: 1,
        name: 'menuCategoryName',
        required: true,
        label: 'Menu Category Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      },
      {
        id: 2,
        name: 'orderTicketKOT',
        required: true,
        label: 'Order Ticket KOT',
        align: 'left',
        field: 'orderTicketKOT',
        format: val => `${val}`
      },
      {
        id: 3,
        name: 'makeAvailable',
        required: true,
        label: 'Make Available',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      },
      {
        id: 4,
        name: 'status',
        required: true,
        label: 'Status',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      }
    ],
    tax: [
      {
        id: 1,
        name: 'taxName',
        required: true,
        label: 'Tax Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      },
      {
        id: 2,
        name: 'taxPercentage',
        required: true,
        label: 'Tax Percentage',
        align: 'left',
        field: 'percentage',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 3,
        name: 'taxGroup',
        required: true,
        label: 'Tax Group',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      }
    ],
    taxGroup: [
      {
        id: 1,
        name: 'taxGroupName',
        required: true,
        label: 'Tax Group Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      },
      {
        id: 2,
        name: 'netPercentage',
        required: true,
        label: 'Net Tax Percentage',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      },
      {
        id: 3,
        name: 'inclusiveProductPrice',
        required: true,
        label: 'Tax included in product price?',
        align: 'left',
        field: 'inclusiveProductPrice',
        format: val => `${val}`
      }
    ],
    discountRule: [
      {
        id: 1,
        name: 'discountCode',
        required: true,
        label: 'Discount Code',
        align: 'left',
        field: 'code',
        format: val => `${val}`
      },
      {
        id: 2,
        name: 'discountType',
        required: true,
        label: 'Discount Type',
        align: 'left',
        field: 'type',
        format: val => `${val}`
      },
      {
        id: 3,
        name: 'discountValue',
        required: true,
        label: 'Discount Value',
        align: 'left',
        field: 'discountAmount',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 4,
        name: 'status',
        required: true,
        label: 'Status',
        align: 'left',
        field: 'active',
        format: val => `${val}`
      },
      {
        id: 5,
        name: 'minOrderValue',
        required: true,
        label: 'Min Order Value',
        align: 'left',
        field: 'name',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 6,
        name: 'maxOrderValue',
        required: true,
        label: 'Max Order Value',
        align: 'left',
        field: 'name',
        format: val => `${val}`,
        sortable: true
      }
    ],
    addon: [
      {
        id: 1,
        name: 'addOnName',
        required: true,
        label: 'Add On Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      },
      {
        id: 2,
        name: 'addOnPrice',
        required: true,
        label: 'Add On Price',
        align: 'left',
        field: 'price',
        format: val => `${val}`
      }
    ],
    addOnGroup: [
      {
        id: 1,
        name: 'addOnGroupName',
        required: true,
        label: 'Add On Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      },
      {
        id: 2,
        name: 'noOfAddOns',
        required: true,
        label: 'AddOns',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      }
    ],
    variant: [
      {
        id: 1,
        name: 'variantName',
        required: true,
        label: 'Variant Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      },
      {
        id: 2,
        name: 'variantGroup',
        required: true,
        label: 'Variant Group',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      }
    ],
    variantGroup: [
      {
        id: 1,
        name: 'variantGroupName',
        required: true,
        label: 'Add On Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      },
      {
        id: 2,
        name: 'noOfVariants',
        required: true,
        label: 'Variants',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      }
    ],
    additionalCharges: [
      {
        id: 1,
        name: 'additionalChargeName',
        required: true,
        label: 'Additional Charge Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      },
      {
        id: 2,
        name: 'additionalChargeType',
        required: true,
        label: 'Type',
        align: 'left',
        field: 'type',
        format: val => `${val}`
      },
      {
        id: 3,
        name: 'additionalChargeValue',
        required: true,
        label: 'Value',
        align: 'left',
        field: 'value',
        format: val => `${val}`
      },
      {
        id: 4,
        name: 'automaticallyAdded',
        required: true,
        label: 'Is Automatically Added?',
        align: 'left',
        field: 'addedAutomatically',
        format: val => `${val}`
      }
    ],
    orders: [
      {
        id: 1,
        name: 'orderID',
        required: true,
        label: 'Order ID',
        align: 'left',
        field: 'orderId',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 2,
        name: 'orderInfo',
        required: true,
        label: 'Order Info',
        align: 'left',
        field: 'name',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 3,
        name: 'phoneNo',
        required: true,
        label: 'Phone No',
        align: 'left',
        field: 'phoneNo',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 4,
        name: 'paymentInfo',
        required: true,
        label: 'Payment Info',
        align: 'left',
        field: 'paymentType',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 5,
        name: 'orderStatus',
        required: true,
        label: 'Order Status',
        align: 'left',
        field: 'remainingTime',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 6,
        name: 'deliverySource',
        required: true,
        label: 'Delivery Source',
        align: 'left',
        field: 'deliverySource',
        format: val => `${val}`,
        sortable: true
      }
    ],
    orderTicketGroup: [
      {
        id: 1,
        name: 'ticketGroupName',
        required: true,
        label: 'Order Ticket Group Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      }
    ],
    paymentType: [
      {
        id: 1,
        name: 'paymentName',
        required: true,
        label: 'Payment Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      },
      {
        id: 2,
        name: 'paymentDescription',
        required: true,
        label: 'Payment Description',
        align: 'left',
        field: 'description',
        format: val => `${val}`
      }
    ],
    additionalDetail: [
      {
        id: 1,
        name: 'additionalDetailName',
        required: true,
        label: 'Payment Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      },
      {
        id: 2,
        name: 'additionalDetailType',
        required: true,
        label: 'Additional Detail Type',
        align: 'left',
        field: 'additionalDetailType',
        format: val => `${val}`
      },
      {
        id: 3,
        name: 'isPrintedOnReceipt',
        required: true,
        label: 'Is Printable on Receipt?',
        align: 'left',
        field: 'toBePrinted',
        format: val => `${val}`
      }
    ],
    tag: [
      {
        id: 1,
        name: 'tagName',
        required: true,
        label: 'Tag Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`
      },
      {
        id: 2,
        name: 'tagType',
        required: true,
        label: 'Tag Type',
        align: 'left',
        field: 'additionalDetailType',
        format: val => `${val}`
      },
      {
        id: 3,
        name: 'tagColor',
        required: true,
        label: 'Tag Color',
        align: 'left',
        field: 'tagColor',
        format: val => `${val}`
      },
      {
        id: 4,
        name: 'isPrintedOnReceipt',
        required: true,
        label: 'Is Printable on Receipt?',
        align: 'left',
        field: 'toBePrinted',
        format: val => `${val}`
      }
    ],
    tables: [
      {
        id: 1,
        name: 'tableNumber',
        required: true,
        label: 'Table Number',
        align: 'left',
        field: 'number',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 2,
        name: 'tableCapacity',
        required: true,
        label: 'Table Capacity',
        align: 'left',
        field: 'capacity',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 3,
        name: 'isReserved',
        required: true,
        label: 'Is Reserved?',
        align: 'left',
        field: 'isReserved',
        format: val => `${val}`
      }
    ],
    rawMaterials: [
      {
        id: 1,
        name: 'rawMaterialId',
        required: true,
        label: 'Material ID',
        align: 'left',
        field: 'id',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 2,
        name: 'materialName',
        required: true,
        label: 'Material Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 3,
        name: 'category',
        required: true,
        label: 'Category',
        align: 'left',
        field: 'category',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 4,
        name: 'unit',
        required: true,
        label: 'Unit',
        align: 'left',
        field: 'unit',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 5,
        name: 'costPerUnit',
        required: true,
        label: 'Cost Per Unit',
        align: 'left',
        field: 'costPerUnit',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 6,
        name: 'inStock',
        required: true,
        label: 'In Stock',
        align: 'left',
        field: 'stock',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 7,
        name: 'alerts',
        required: true,
        label: 'Alerts',
        align: 'left',
        field: 'alert',
        format: val => `${val}`,
        sortable: true
      }
    ],
    rawMaterialCategories: [
      {
        id: 1,
        name: 'categoryId',
        required: true,
        label: 'Category ID',
        align: 'left',
        field: 'id',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 2,
        name: 'categoryName',
        required: true,
        label: 'Category Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`,
        sortable: true
      }
    ],
    templates: [
      {
        id: 1,
        name: 'templateName',
        required: true,
        label: 'Template Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 2,
        name: 'createdBy',
        required: true,
        label: 'Created By',
        align: 'left',
        field: 'createdBy',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 3,
        name: 'createdOn',
        required: true,
        label: 'Created On',
        align: 'left',
        field: 'createdOn',
        format: val => `${val}`,
        sortable: true
      }
    ],
    rawMaterialListPO: [
      {
        id: 1,
        name: 'index',
        label: '#',
        field: 'id',
        required: true
      },
      {
        id: 2,
        name: 'rawMaterialName',
        required: true,
        label: 'Raw Material Name',
      },
      {
        id: 3,
        name: 'rawMaterialCategory',
        required: true,
        label: 'Category',
        align: 'left',
        field: 'category',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 4,
        name: 'quantity',
        required: true,
        label: 'Quantity',
        align: 'left',
        field: 'quantity',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 5,
        name: 'unitPrice',
        required: true,
        label: 'Unit Price',
        align: 'left',
        field: 'createdOn',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 6,
        name: 'totalPrice',
        required: true,
        label: 'Created On',
        align: 'left',
        field: 'createdOn',
        format: val => `${val}`,
        sortable: true
      }
    ],
    rawMaterialListPG: [
      {
        id: 1,
        name: 'rawMaterialName',
        required: true,
        label: 'Raw Material Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`,
        sortable: false
      },
      {
        id: 2,
        name: 'quantity',
        required: true,
        label: 'Quantity',
        align: 'left',
        field: 'quantity',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 3,
        name: 'price',
        required: true,
        label: 'Price',
        align: 'right',
        field: 'price',
        format: val => `${val}`,
        sortable: true
      }
    ],
    employeeData: [
     {
      id: 1,
      name: 'fullName',
      required: true,
      label: 'Name',
      align: 'left',
      field: 'fullName',
      format: val => {
        if (val === null) return '-'
        return `${val}`
      },
      sortable: true
     },
     {
      id: 2,
      name: 'phoneNumber',
      required: true,
      label: 'Phone Number',
      align: 'left',
      field: 'phoneNumber',
      format: val => {
        if (val === null) return '-'
        return `${val}`
      },
      sortable: true
     },
     {
      id: 3,
      name: 'gender',
      required: true,
      label: 'Gender',
      align: 'left',
      field: 'gender',
      format: val => {
        if (val === null) return '-'
        return `${val}`
      },
      sortable: true
     },
     {
      id: 4,
      name: 'dob',
      required: true,
      label: 'Date of Birth',
      align: 'left',
      field: 'dob',
      format: val => {
        console.log(val,'%%%')
        if (!val || val === null) return 'No info'
        var dateDOB = new Date(parseInt(val)).toDateString()
        const [, month, day, year] = dateDOB.split(' ')
        return `${day}/${month}/${year}`
      },
      sortable: true
     },
     {
      id: 5,
      name: 'address',
      required: true,
      label: 'Address',
      align: 'left',
      field: 'address',
      format: val => {
        if (val === null) return '-'
        return `${val}`
      },
      sortable: true
     },
     {
      id: 6,
      name: 'roleType',
      required: true,
      label: 'Designation',
      align: 'left',
      field: 'roleType',
      format: val => {
        if (val === null) return '-'
        return `${val}`
      },
      sortable: true
     },
     {
      id: 7,
      name: 'salary',
      required: true,
      label: 'Salary',
      align: 'left',
      field: 'salary',
      format: val => {
        if (val === null) return '-'
        return `${val}`
      },
      sortable: true
     },
     {
      id: 8,
      name: 'doj',
      required: true,
      label: 'Salary Due Date',
      align: 'left',
      field: 'doj',
      format: val => {
        if (!val || val === null) return 'No info'
        var dateDOJ = new Date(parseInt(val)).toDateString()
        const [, month, day, year] = dateDOJ.split(' ')
        return `${day}/${month}/${year}`
      },
      sortable: true
     },
     {
      id: 9,
      name: 'shift',
      required: true,
      label: 'Shift',
      align: 'left',
      field: 'shift',
      format: val => {
        if (val === null) return '-'
        return `${val}`
      },
      sortable: true
     }
    ],

    unhandledLeaves: [
       {
        id: 1,
       name: 'employee',
       required: true,
       label: 'Employee Name',
       align: 'left',
       field: 'employee',
       format: val => `${val.fullName}`,
       sortable: true
       },
       {
        id: 2,
        name: 'from',
        required: true,
        label: 'Start Date',
        align: 'left',
        field: 'from',
        format: val => {
          if (!val || val === null) return 'No info'
          var fromDate = new Date(parseInt(val)).toDateString()
          const [, month, day, year] = fromDate.split(' ')
          return `${day}/${month}/${year}`
        },
        sortable: true
       },
       {
        id: 3,
        name: 'to',
        required: true,
        label: 'End Date',
        align: 'left',
        field: 'to',
        format: val => {
          if (!val || val === null) return 'No info'
          var toDate = new Date(parseInt(val)).toDateString()
          const [, month, day, year] = toDate.split(' ')
          return `${day}/${month}/${year}`
        },
        sortable: true
       },
       {
        id: 4,
        name: 'type',
        required: true,
        label: 'Leave Type',
        align: 'left',
        field: 'type',
        format: val => `${val}`,
        sortable: true
       },
       
    ],
    handledLeaves: [
      {
       id: 1,
       name: 'employee',
       required: true,
       label: 'Employee Name',
       align: 'left',
       field: 'employee',
       format: val => `${val.fullName}`,
       sortable: true
      },
      {
       id: 2,
       name: 'from',
       required: true,
       label: 'Start Date',
       align: 'left',
       field: 'from',
       format: val => {
         if (!val || val === null) return 'No info'
         var fromDate = new Date(parseInt(val)).toDateString()
         const [, month, day, year] = fromDate.split(' ')
         return `${day}/${month}/${year}`
       },
       sortable: true
      },
      {
       id: 3,
       name: 'to',
       required: true,
       label: 'End Date',
       align: 'left',
       field: 'to',
       format: val => {
         if (!val || val === null) return 'No info'
         var toDate = new Date(parseInt(val)).toDateString()
         const [, month, day, year] = toDate.split(' ')
         return `${day}/${month}/${year}`
       },
       sortable: true
      },
      {
       id: 4,
       name: 'type',
       required: true,
       label: 'Leave Type',
       align: 'left',
       field: 'type',
       format: val => `${val}`,
       sortable: true
      },
      {
        id: 5,
        name: 'status',
        required: true,
        label: 'Leave Status',
        align: 'left',
        field: 'status',
        format: val => `${val}`,
        sortable: true
       },
      
   ],
    receiving: [
      {
        id: 1,
        name: 'purchaseOrderNo',
        required: true,
        label: 'Purchase Order No',
        align: 'left',
        field: 'purchaseOrderNo',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 2,
        name: 'requestedOn',
        required: true,
        label: 'Requested On',
        align: 'left',
        field: 'requestedOn',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 3,
        name: 'expectedDelivery',
        required: true,
        label: 'Expected Delivery Date',
        align: 'left',
        field: 'expectedDelivery',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 4,
        name: 'amount',
        required: true,
        label: 'Amount',
        align: 'left',
        field: 'amount',
        format: val => `${val}`,
        sortable: true
      }
    ],
    invoices: [
      {
        id: 1,
        name: 'invoiceNo',
        required: true,
        label: 'Invoice No',
        align: 'left',
        field: 'no',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 2,
        name: 'vendorName',
        required: true,
        label: 'Vendor Name',
        align: 'left',
        field: 'vendorName',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 3,
        name: 'amount',
        required: true,
        label: 'Amount',
        align: 'left',
        field: 'amount',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 4,
        name: 'purchaseOrderNo',
        required: true,
        label: 'Purchase Order No',
        align: 'left',
        field: 'purchaseOrderNo',
        format: val => `${val}`,
        sortable: true
      }
    ],
    purchaseOrders: [
      {
        id: 1,
        name: 'purchaseOrderNo',
        required: true,
        label: 'Purchase Order No',
        align: 'left',
        field: 'purchaseOrderNo',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 2,
        name: 'template',
        required: true,
        label: 'Template',
        align: 'left',
        field: 'template',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 3,
        name: 'specialInstructions',
        required: true,
        label: 'Special Instructions',
        align: 'left',
        field: 'specialInstructions',
        format: val => `${val}`,
        sortable: true
      }
    ],
    salaryTable: [
      {
        id: 1,
        name: 'empId',
        required: true,
        label: 'Employee ID',
        align: 'left',
        field: 'empId',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 2,
        name: 'name',
        required: true,
        label: 'Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 3,
        name: 'role',
        required: true,
        label: 'Role',
        align: 'left',
        field: 'role',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 4,
        name: 'phNum',
        required: true,
        label: 'Phone Number',
        align: 'left',
        field: 'phNum',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 5,
        name: 'salAmount',
        required: true,
        label: 'Salary Amount',
        align: 'left',
        field: 'salAmount',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 6,
        name: 'salDue',
        required: true,
        label: 'Salary Due Date',
        align: 'left',
        field: 'salDue',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 7,
        name: 'payStatus',
        required: true,
        label: 'Payment Status',
        align: 'left',
        field: 'payStatus',
        format: val => `${val}`,
        sortable: true
       }
    ],
    stockLevelAudit: [
      {
        id: 1,
        name: 'date',
        required: true,
        label: 'Date',
        align: 'left',
        field: 'date',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 2,
        name: 'openingBalance',
        required: true,
        label: 'Opening Balance',
        align: 'left',
        field: 'openingBalance',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 3,
        name: 'closingBalance',
        required: true,
        label: 'Closing Balance',
        align: 'left',
        field: 'closingBalance',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 4,
        name: 'turnover',
        required: true,
        label: 'Turnover',
        align: 'left',
        field: 'turnover',
        format: val => `${val}`,
        sortable: true
      }
    ],
    innerAuditTable: [
      {
        id: 1,
        name: 'name',
        required: true,
        label: 'Material Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 2,
        name: 'category',
        required: true,
        label: 'Category',
        align: 'left',
        field: 'category',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 3,
        name: 'inventoryLevel',
        required: true,
        label: 'Inventory Level',
        align: 'left',
        field: 'inventoryLevel',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 4,
        name: 'openingBalance',
        required: true,
        label: 'Opening Balance',
        align: 'left',
        field: 'openingBalance',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 5,
        name: 'requisition',
        required: true,
        label: 'Requisition (Out)',
        align: 'left',
        field: 'requisition',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 6,
        name: 'purchaseOrder',
        required: true,
        label: 'Purchase Orders (In)',
        align: 'left',
        field: 'purchaseOrder',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 7,
        name: 'closingBalance',
        required: true,
        label: 'Closing Balance',
        align: 'left',
        field: 'closingBalance',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 8,
        name: 'turnover',
        required: true,
        label: 'Turnover',
        align: 'left',
        field: 'turnover',
        format: val => `${val}`,
        sortable: true
      }
     ],
      wasteMenuItems: [
      {
        id: 1,
        name: 'itemName',
        required: true,
        label: 'Item Name',
        align: 'left',
        field: 'itemName',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 2,
        name: 'category',
        required: true,
        label: 'Category',
        align: 'left',
        field: 'category',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 3,
        name: 'stock',
        required: true,
        label: 'Stock',
        align: 'left',
        field: 'stock',
        format: val => `${val}`,
        sortable: true
       }
    ],

    wasteHistoryHeaders: [
      {
        id: 1,
        name: 'itemName',
        required: true,
        label: 'Item Name',
        align: 'left',
        field: 'itemName',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 2,
        name: 'activity',
        required: true,
        label: 'Activity',
        align: 'left',
        field: 'activity',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 3,
        name: 'user',
        required: true,
        label: 'User',
        align: 'left',
        field: 'user',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 4,
        name: 'date',
        required: true,
        label: 'Date',
        align: 'left',
        field: 'date',
        format: val => `${val}`,
        sortable: true
       }
    ],
    cashSales: [
       {
        id: 1,
        name: 'time',
        required: true,
        label: 'Transaction Time',
        align: 'left',
        field: 'transTime',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 2,
        name: 'tType',
        required: true,
        label: 'Transaction Type',
        align: 'left',
        field: 'transType',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 3,
        name: 'tAmount',
        required: true,
        label: 'Transaction Amount',
        align: 'left',
        field: 'transAmount',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 4,
        name: 'tCategory',
        required: true,
        label: 'Transaction Category',
        align: 'left',
        field: 'transCategory',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 5,
        name: 'tDescription',
        required: true,
        label: 'Transaction Description',
        align: 'left',
        field: 'transDescription',
        format: val => `${val}`,
        sortable: true
       }
    ],
    requisition: [
      {
        id: 1,
        name: 'requisitionId',
        required: true,
        label: 'Requisition ID',
        align: 'left',
        field: 'id',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 2,
        name: 'requestDate',
        required: true,
        label: 'Request Date',
        align: 'left',
        field: 'requestDate',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 3,
        name: 'requestedBy',
        required: true,
        label: 'Requested By',
        align: 'left',
        field: 'requestedBy',
        format: val => `${val}`,
        sortable: true
       }
    ],
    shift: [
      {
        id: 1,
        name: 'name',
        required: true,
        label: 'Shift Name',
        align: 'left',
        field: 'name',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 2,
        name: 'startTime',
        required: true,
        label: 'Start Time',
        align: 'left',
        field: 'timeFrom',
        format: val => `${val}`,
        sortable: true
      },
      {
        id: 3,
        name: 'duration',
        required: true,
        label: 'Shift Duration',
        align: 'left',
        field: 'duration',
        format: val => `${val}`,
        sortable: true
      }
    ],
    purchaseAudit: [
      {
        id: 1,
        name: 'purchaseOrderNo',
        required: true,
        label: 'Purchase Order No',
        align: 'left',
        field: 'purchaseOrderNo',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 2,
        name: 'requestDate',
        required: true,
        label: 'Requested On',
        align: 'left',
        field: 'requestDate',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 3,
        name: 'requestedBy',
        required: true,
        label: 'Requested By',
        align: 'left',
        field: 'requestedBy',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 4,
        name: 'adjustments',
        required: true,
        label: 'Adjustments',
        align: 'left',
        field: 'adjustments',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 5,
        name: 'status',
        required: true,
        label: 'Status',
        align: 'left',
        field: 'status',
        format: val => `${val}`,
        sortable: true
       },
       {
        id: 6,
        name: 'auditCompleted',
        required: true,
        label: 'Audit Completed',
        align: 'left',
        field: 'auditCompleted',
        format: val => `${val}`,
        sortable: true
       }
    ]
  }
}

