/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { SupplierStatusModel, SupplierStatusModelType } from "./SupplierStatusModel"
import { SupplierStatusModelSelector } from "./SupplierStatusModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  deliveryStatus: IObservableArray<SupplierStatusModelType>;
}

/**
 * ScheduleLineBase
 * auto generated base class for the model ScheduleLineModel.
 */
export const ScheduleLineModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ScheduleLine')
  .props({
    __typename: types.optional(types.literal("ScheduleLine"), "ScheduleLine"),
    id: types.identifier,
    quantity: types.union(types.undefined, types.number),
    uom: types.union(types.undefined, types.string),
    unitPrice: types.union(types.undefined, types.number),
    totalAmount: types.union(types.undefined, types.number),
    deliveryDateAndTime: types.union(types.undefined, types.string),
    deliveryStatus: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => SupplierStatusModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ScheduleLineModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get quantity() { return this.__attr(`quantity`) }
  get uom() { return this.__attr(`uom`) }
  get unitPrice() { return this.__attr(`unitPrice`) }
  get totalAmount() { return this.__attr(`totalAmount`) }
  get deliveryDateAndTime() { return this.__attr(`deliveryDateAndTime`) }
  deliveryStatus(builder?: string | SupplierStatusModelSelector | ((selector: SupplierStatusModelSelector) => SupplierStatusModelSelector)) { return this.__child(`deliveryStatus`, SupplierStatusModelSelector, builder) }
}
export function selectFromScheduleLine() {
  return new ScheduleLineModelSelector()
}

export const scheduleLineModelPrimitives = selectFromScheduleLine().quantity.uom.unitPrice.totalAmount.deliveryDateAndTime
