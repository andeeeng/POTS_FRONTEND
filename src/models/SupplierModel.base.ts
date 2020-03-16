/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AddressModel, AddressModelType } from "./AddressModel"
import { AddressModelSelector } from "./AddressModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  address: AddressModelType;
}

/**
 * SupplierBase
 * auto generated base class for the model SupplierModel.
 */
export const SupplierModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Supplier')
  .props({
    __typename: types.optional(types.literal("Supplier"), "Supplier"),
    id: types.identifier,
    supplierNo: types.union(types.undefined, types.string),
    supplierName: types.union(types.undefined, types.string),
    address: types.union(types.undefined, MSTGQLRef(types.late((): any => AddressModel))),
    tin: types.union(types.undefined, types.string),
    contactNumber: types.union(types.undefined, types.string),
    contactPerson: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class SupplierModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get supplierNo() { return this.__attr(`supplierNo`) }
  get supplierName() { return this.__attr(`supplierName`) }
  get tin() { return this.__attr(`tin`) }
  get contactNumber() { return this.__attr(`contactNumber`) }
  get contactPerson() { return this.__attr(`contactPerson`) }
  address(builder?: string | AddressModelSelector | ((selector: AddressModelSelector) => AddressModelSelector)) { return this.__child(`address`, AddressModelSelector, builder) }
}
export function selectFromSupplier() {
  return new SupplierModelSelector()
}

export const supplierModelPrimitives = selectFromSupplier().supplierNo.supplierName.tin.contactNumber.contactPerson
