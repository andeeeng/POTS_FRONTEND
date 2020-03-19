/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AddressModel, AddressModelType } from "./AddressModel"
import { AddressModelSelector } from "./AddressModel.base"
import { ScheduleLineModel, ScheduleLineModelType } from "./ScheduleLineModel"
import { ScheduleLineModelSelector } from "./ScheduleLineModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  deliveryAddress: AddressModelType;
  scheduleLine: IObservableArray<ScheduleLineModelType>;
}

/**
 * ItemBase
 * auto generated base class for the model ItemModel.
 */
export const ItemModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Item')
  .props({
    __typename: types.optional(types.literal("Item"), "Item"),
    id: types.identifier,
    itemNo: types.union(types.undefined, types.string),
    productId: types.union(types.undefined, types.string),
    description: types.union(types.undefined, types.string),
    quantity: types.union(types.undefined, types.number),
    uom: types.union(types.undefined, types.string),
    unitPrice: types.union(types.undefined, types.number),
    totalAmount: types.union(types.undefined, types.number),
    discount: types.union(types.undefined, types.null, types.number),
    deliveryAddress: types.union(types.undefined, MSTGQLRef(types.late((): any => AddressModel))),
    supplierStatusItem: types.union(types.undefined, types.null, types.string),
    scheduleLine: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ScheduleLineModel))))),
    currency: types.union(types.undefined, types.string),
    dateUpdated: types.union(types.undefined, types.null, types.string),
    timeUpdated: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ItemModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get itemNo() { return this.__attr(`itemNo`) }
  get productId() { return this.__attr(`productId`) }
  get description() { return this.__attr(`description`) }
  get quantity() { return this.__attr(`quantity`) }
  get uom() { return this.__attr(`uom`) }
  get unitPrice() { return this.__attr(`unitPrice`) }
  get totalAmount() { return this.__attr(`totalAmount`) }
  get discount() { return this.__attr(`discount`) }
  get supplierStatusItem() { return this.__attr(`supplierStatusItem`) }
  get currency() { return this.__attr(`currency`) }
  get dateUpdated() { return this.__attr(`dateUpdated`) }
  get timeUpdated() { return this.__attr(`timeUpdated`) }
  deliveryAddress(builder?: string | AddressModelSelector | ((selector: AddressModelSelector) => AddressModelSelector)) { return this.__child(`deliveryAddress`, AddressModelSelector, builder) }
  scheduleLine(builder?: string | ScheduleLineModelSelector | ((selector: ScheduleLineModelSelector) => ScheduleLineModelSelector)) { return this.__child(`scheduleLine`, ScheduleLineModelSelector, builder) }
}
export function selectFromItem() {
  return new ItemModelSelector()
}

export const itemModelPrimitives = selectFromItem().itemNo.productId.description.quantity.uom.unitPrice.totalAmount.discount.supplierStatusItem.currency.dateUpdated.timeUpdated
