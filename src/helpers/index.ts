import { selectFromPurchaseOrder } from '../models/PurchaseOrderModel'

export const PURCHASEORDER_FRAGMENT = selectFromPurchaseOrder()
  //purchaseOrder
  .purchaseOrderNo.shipmentNo.adminStatus.supplierStatusHeader.documentDate.vendorAddress(
    address => address.building_name.city.state.street.zip_code,
  )
  //supplier
  .supplier(supplier =>
    supplier.supplierNo.name.address(
      address => address.building_name.city.state.street.zip_code,
    ),
  )
  //item
  .items(items =>
    items.productId.itemNo.description.quantity.totalAmount.uom.unitPrice.discount.currency.dateUpdated.timeUpdated.supplierStatusItem
      .deliveryAddress(
        address => address.building_name.city.state.street.zip_code,
      )
      .scheduleLine(scheduleLine =>
        scheduleLine.quantity.unitPrice.uom.deliveryDateAndTime.totalAmount.deliveryStatus(
          supplierStatus => supplierStatus.status.timeCreated.dateCreated,
        ),
      ),
  )
  .toString()

// .externalID.status.supplier(supplier =>
//   supplier.externalID.name.address(
//     address => address.building_name.city.state.street.zip_code,
//   ),
// )
// .supplierStatus(supplierStatus => supplierStatus.status.dateCreated)
// .items(items => items.itemNo.description.price.quantity.uom.currency)
// .toString()
