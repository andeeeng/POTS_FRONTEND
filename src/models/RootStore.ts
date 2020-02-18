import { Instance } from 'mobx-state-tree';
import { RootStoreBase } from './RootStore.base';

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

export const RootStore = RootStoreBase.views(self => {
	console.log('GUMAGANA', self);
	return {
		vPurchaseOrders() {
			return { ...self.purchaseorders.values() };
		},
		vSuppliers() {
			return { ...self.suppliers.values() };
		},
		vAddresses() {
			return { ...self.addresss.values() };
		},
		vSupplierStatuses() {
			return { ...self.supplierstatuss.values() };
		},
		vItems() {
			return { ...self.items.values() };
		},
	};
});
