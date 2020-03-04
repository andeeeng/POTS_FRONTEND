/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AddressModel, AddressModelType } from "./AddressModel"
import { AddressModelSelector } from "./AddressModel.base"
import { ItemModel, ItemModelType } from "./ItemModel"
import { ItemModelSelector } from "./ItemModel.base"
import { SupplierModel, SupplierModelType } from "./SupplierModel"
import { SupplierModelSelector } from "./SupplierModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  vendorAddress: AddressModelType;
  supplier: SupplierModelType;
  items: IObservableArray<ItemModelType>;
}

/**
 * PurchaseOrderBase
 * auto generated base class for the model PurchaseOrderModel.
 */
export const PurchaseOrderModelBase = withTypedRefs<Refs>()(ModelBase
  .named('PurchaseOrder')
  .props({
    __typename: types.optional(types.literal("PurchaseOrder"), "PurchaseOrder"),
    id: types.identifier,
    purchaseOrderNo: types.union(types.undefined, types.string),
    shipmentNo: types.union(types.undefined, types.string),
    adminStatus: types.union(types.undefined, types.null, types.string),
    supplierStatusHeader: types.union(types.undefined, types.null, types.string),
    vendorAddress: types.union(types.undefined, MSTGQLRef(types.late((): any => AddressModel))),
    supplier: types.union(types.undefined, MSTGQLRef(types.late((): any => SupplierModel))),
    documentDate: types.union(types.undefined, types.null, types.string),
    postingDate: types.union(types.undefined, types.null, types.string),
    items: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => ItemModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PurchaseOrderModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get purchaseOrderNo() { return this.__attr(`purchaseOrderNo`) }
  get shipmentNo() { return this.__attr(`shipmentNo`) }
  get adminStatus() { return this.__attr(`adminStatus`) }
  get supplierStatusHeader() { return this.__attr(`supplierStatusHeader`) }
  get documentDate() { return this.__attr(`documentDate`) }
  get postingDate() { return this.__attr(`postingDate`) }
  vendorAddress(builder?: string | AddressModelSelector | ((selector: AddressModelSelector) => AddressModelSelector)) { return this.__child(`vendorAddress`, AddressModelSelector, builder) }
  supplier(builder?: string | SupplierModelSelector | ((selector: SupplierModelSelector) => SupplierModelSelector)) { return this.__child(`supplier`, SupplierModelSelector, builder) }
  items(builder?: string | ItemModelSelector | ((selector: ItemModelSelector) => ItemModelSelector)) { return this.__child(`items`, ItemModelSelector, builder) }
}
export function selectFromPurchaseOrder() {
  return new PurchaseOrderModelSelector()
}

export const purchaseOrderModelPrimitives = selectFromPurchaseOrder().purchaseOrderNo.shipmentNo.adminStatus.supplierStatusHeader.documentDate.postingDate
