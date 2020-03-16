import { selectFromPurchaseOrder } from '../models/PurchaseOrderModel'
import { selectFromUser } from '../models/UserModel'
import { selectFromScheduleLine } from '../models/ScheduleLineModel'
import { selectFromMessage } from '../models/MessageModel'

export const USER_FRAGMENT = selectFromUser().userName.password.userLevel.toString()

export const SCHEDULELINE_FRAGMENT = selectFromScheduleLine()
  .quantity.unitPrice.totalAmount.uom.deliveryDateAndTime.deliveryStatus(
    supplierStatus => supplierStatus.status.timeCreated.dateCreated,
  )
  .toString()

export const PURCHASEORDER_FRAGMENT = selectFromPurchaseOrder()
  //purchaseOrder
  .purchaseOrderNo.shipmentNo.adminStatus.supplierStatusHeader.postingDate.documentDate.vendorAddress(
    address => address.building_name.city.state.street.zip_code,
  )
  //supplier
  .supplier(supplier =>
    supplier.supplierNo.supplierName.contactNumber.contactPerson.tin.address(
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

export const MESSAGE_FRAGMENT = selectFromMessage().loggedIn.message.userLevel.toString()
