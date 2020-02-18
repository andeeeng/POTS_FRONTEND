import { Instance } from 'mobx-state-tree';
import { RootStoreBase } from './RootStore.base';

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

export const RootStore = RootStoreBase.views(self => {
	console.log('PURCHASE ORDERS', self.purchaseorders);
	console.log('SUPPLIERS', self.suppliers);
	console.log('ADDRESSES', self.addresss);
	console.log('SUPPLIER STATUSES', self.supplierstatuss);
	console.log('ITEMS', self.items);
	return {
		vPurchaseOrders() {
			return [self.purchaseorders.values()];
		},
		vSuppliers() {
			return [self.suppliers.values()];
		},
		vAddresses() {
			return [self.addresss.values()];
		},
		vSupplierStatuses() {
			return [self.supplierstatuss.values()];
		},
		vItems() {
			return [self.items.values()];
		},
	};
}).actions(self => ({
	afterCreate() {
		self.queryAllPurchaseOrders({});
		self.queryAllSuppliers({});
		self.queryAllAddresss({});
		self.queryAllSupplierStatus({});
		self.queryAllItems({});
	},
	requestPurchaseOrders() {
		return self.queryAllPurchaseOrders({});
	},
	requestSuppliers() {
		return self.queryAllSuppliers({});
	},
	requestAddresses() {
		return self.queryAllAddresss({});
	},
	requestSupplierStatuses() {
		return self.queryAllSupplierStatus({});
	},
	requestItems() {
		return self.queryAllItems({});
	},
}));
