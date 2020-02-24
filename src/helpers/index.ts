import { selectFromPurchaseOrder } from '../models/PurchaseOrderModel';
/* prettier-ignore */
export const PURCHASEORDER_FRAGMENT = selectFromPurchaseOrder()
	.externalID.status.supplier(supplier =>
		supplier.externalID.name.address(address => address.building_name.city.state.street.zip_code)
	)
	.supplierStatus(supplierStatus => supplierStatus.status.dateCreated)
	.items(items => items.itemNo.description.price.quantity.uom.currency)
	.toString();
