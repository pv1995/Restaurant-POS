export default function () {
  return {
    inventories: [],
    mainInventory: {},
    categories: [],
    processedGoods: [],
    rawMaterialCategories: [],
    rawMaterialCategory: {},
    rawMaterials: [],
    rawMaterial: {},
    processedGood: {},
    processedGoodCategories: [],
    processedGoodCategory: {},
    templates: [],
    template: {},
    receiving: [
      {
        id: 1,
        purchaseOrderNo: 'PO#0001',
        requestedOn: '22/10/19',
        expectedDelivery: '24/10/19',
        amount: '22000'
      },
      {
        id: 2,
        purchaseOrderNo: 'PO#0002',
        requestedOn: '15/11/19',
        expectedDelivery: '19/11/19',
        amount: '20000'
      },
      {
        id: 3,
        purchaseOrderNo: 'PO#0003',
        requestedOn: '09/01/20',
        expectedDelivery: '13/01/20',
        amount: '20000'
      }
    ],
    invoices: [
      {
        no: 'INV001',
        vendorName: 'Ali Poultry',
        amount: '20000',
        dateReceived: '22/10/20',
        purchaseOrderNo: 'PO#0002'
      },
      {
        no: 'INV002',
        vendorName: 'Navyug Packaging',
        amount: '20000',
        dateReceived: '22/10/20',
        purchaseOrderNo: 'PO#0003'
      }
    ],
    purchaseOrders: [
      {
        id: 1,
        purchaseOrderNo: 'PO#0001',
        template: 'Fruits Template',
        rawMaterialList: [],
        specialInstructions: '',
        type: 'New'
      },
      {
        id: 2,
        purchaseOrderNo: 'PO#0002',
        template: 'Vegetables Template',
        rawMaterialList: [],
        specialInstructions: '',
        type: 'New'
      },
      {
        id: 3,
        purchaseOrderNo: 'PO#0003',
        template: 'Poultry Template',
        rawMaterialList: [],
        specialInstructions: 'Thigh Boneless & Tangdi',
        type: 'Accepted'
      }
    ],
    RMStockLevelAudit: [
      {
        id: 1,
        date: '21/10/2019',
        openingBalance: '20,000',
        closingBalance: '19,950',
        turnover: '-2'
      },
      {
        id: 2,
        date: '31/12/2019',
        openingBalance: '19,950',
        closingBalance: '22,000',
        turnover: '+2'
      }
    ],
    innerStockLevelTable: [
      {
        id: 1,
        name: 'Potato',
        category: 'Fresh Vegetables',
        inventoryLevel: 'Low',
        openingBalance: '20kg',
        requisition: '10kg',
        purchaseOrder: '-',
        closingBalance: '9kg',
        turnover: '-10%'
      },
      {
        id: 2,
        name: 'Tomato',
        category: 'Fresh Vegetables',
        inventoryLevel: 'High',
        openingBalance: '25kg',
        requisition: '5kg',
        purchaseOrder: '1kg',
        closingBalance: '21kg',
        turnover: '-'
      }
    ],
    requisitions: [
      {
        id: 'RQ#001',
        requestDate: '11/03/2020',
        requestedBy: 'Parthivi Varshney',
        type: 'New'
      },
      {
        id: 'RQ#002',
        requestDate: '10/03/2020',
        requestedBy: 'Parthivi Varshney',
        type: 'New'
      },
      {
        id: 'RQ#003',
        requestDate: '08/03/2020',
        requestedBy: 'Parthivi Varshney',
        type: 'Accepted'
      }
    ]
  }
}
