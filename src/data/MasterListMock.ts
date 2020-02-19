export const data = [
  {
    itemno: "00001",
    desc: "Blue Paint",
    qty: 10,
    uom: "liters"
  },
  {
    itemno: "00002",
    desc: "Matte Black Paint",
    qty: 20,
    uom: "liters"
  },
  {
    itemno: "00003",
    desc: "Red Paint",
    qty: 500,
    uom: "gallons"
  },
  {
    itemno: "00004",
    desc: "Acrylic Spray Paint(White)",
    qty: 5,
    uom: "pc"
  },
  {
    itemno: "00005",
    desc: "Acrylic Spray Paint(Blue)",
    qty: 100,
    uom: "gallons"
  },
  {
    itemno: "00006",
    desc: "Acrylic Spray Paint(Red)",
    qty: 9,
    uom: "gallons"
  }
];

export const POdata = [
  {
    id: "0000000001",
    items: data,
    status: "Delivered",
    color: "green",
    supplier: {
      id: "00001",
      name: "Paint Supplier"
    }
  },
  {
    id: "0000000002",
    items: data,
    status: "Pending",
    color: "orange",
    supplier: {
      id: "00001",
      name: "Adhesive Supplier"
    }
  },
  {
    id: "0000000001",
    items: data,
    status: "Cancelled",
    color: "red",
    supplier: {
      id: "00001",
      name: "Acrylic Paint Supplier"
    }
  }
];
