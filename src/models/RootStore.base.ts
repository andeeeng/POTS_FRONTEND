/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { UserModel, UserModelType } from "./UserModel"
import { userModelPrimitives, UserModelSelector } from "./UserModel.base"
import { AddressModel, AddressModelType } from "./AddressModel"
import { addressModelPrimitives, AddressModelSelector } from "./AddressModel.base"
import { SupplierModel, SupplierModelType } from "./SupplierModel"
import { supplierModelPrimitives, SupplierModelSelector } from "./SupplierModel.base"
import { SupplierStatusModel, SupplierStatusModelType } from "./SupplierStatusModel"
import { supplierStatusModelPrimitives, SupplierStatusModelSelector } from "./SupplierStatusModel.base"
import { ItemModel, ItemModelType } from "./ItemModel"
import { itemModelPrimitives, ItemModelSelector } from "./ItemModel.base"
import { ScheduleLineModel, ScheduleLineModelType } from "./ScheduleLineModel"
import { scheduleLineModelPrimitives, ScheduleLineModelSelector } from "./ScheduleLineModel.base"
import { PurchaseOrderModel, PurchaseOrderModelType } from "./PurchaseOrderModel"
import { purchaseOrderModelPrimitives, PurchaseOrderModelSelector } from "./PurchaseOrderModel.base"


export type UserInput = {
  userName: string
  password: string
  userLevel: string
}
export type UpdateUserInput = {
  id: string
  userName: string
  password: string
  userLevel: string
}
export type SupplierInput = {
  supplierNo: string
  supplierName: string
  address: AddressInput
  tin: string
  contactNumber: string
  contactPerson: string
}
export type AddressInput = {
  building_name: string
  street: string
  city: string
  state: string
  zip_code: string
}
export type UpdateSupplierInput = {
  id: string
  supplierNo?: string
  supplierName?: string
  tin?: string
  contactNumber?: string
  contactPerson?: string
}
export type SupplierStatusInput = {
  status: string
}
export type UpdateSupplierStatusInput = {
  id: string
  status: string
}
export type ItemInput = {
  itemNo: string
  productId: string
  description: string
  quantity: number
  uom: string
  unitPrice: number
  totalAmount: number
  discount?: number
  supplierStatusItem?: string
  deliveryAddress: AddressInput
  scheduleLine: ScheduleLineInput[]
  currency: string
  dateUpdated?: string
  timeUpdated?: string
}
export type ScheduleLineInput = {
  quantity: number
  uom: string
  unitPrice: number
  totalAmount: number
  deliveryDateAndTime: string
  deliveryStatus?: SupplierStatusInput[]
}
export type UpdateItemInput = {
  id: string
  itemNo?: string
  productId?: string
  description?: string
  quantity?: number
  uom?: string
  unitPrice?: number
  totalAmount?: number
  discount?: number
  supplierStatusItem?: string
  scheduleLine?: ScheduleLineInput[]
  currency?: string
  dateUpdated?: string
  timeUpdated?: string
}
export type PurchaseOrderInput = {
  purchaseOrderNo: string
  shipmentNo: string
  adminStatus?: string
  supplierStatusHeader?: string
  vendorAddress: AddressInput
  documentDate?: string
  postingDate?: string
  supplier: SupplierInput
  items: ItemInput[]
}
export type UpdatePurchaseOrderInput = {
  id: string
  purchaseOrderNo?: string
  shipmentNo?: string
  adminStatus?: string
  supplierStatusHeader?: string
  documentDate?: string
  postingDate?: string
  supplier?: UpdateSupplierInput
  items?: UpdateItemInput[]
}
export type UpdateScheduleLineInput = {
  id: string
  quantity?: number
  uom?: string
  unitPrice?: number
  totalAmount?: number
  deliveryDateAndTime?: string
  deliveryStatus?: SupplierStatusInput[]
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  addresss: ObservableMap<string, AddressModelType>,
  suppliers: ObservableMap<string, SupplierModelType>,
  supplierstatuss: ObservableMap<string, SupplierStatusModelType>,
  items: ObservableMap<string, ItemModelType>,
  purchaseorders: ObservableMap<string, PurchaseOrderModelType>,
  users: ObservableMap<string, UserModelType>
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['User', () => UserModel], ['Address', () => AddressModel], ['Supplier', () => SupplierModel], ['SupplierStatus', () => SupplierStatusModel], ['Item', () => ItemModel], ['ScheduleLine', () => ScheduleLineModel], ['PurchaseOrder', () => PurchaseOrderModel]], ['Address', 'Supplier', 'SupplierStatus', 'Item', 'PurchaseOrder', 'User']))
  .props({
    addresss: types.optional(types.map(types.late((): any => AddressModel)), {}),
    suppliers: types.optional(types.map(types.late((): any => SupplierModel)), {}),
    supplierstatuss: types.optional(types.map(types.late((): any => SupplierStatusModel)), {}),
    items: types.optional(types.map(types.late((): any => ItemModel)), {}),
    purchaseorders: types.optional(types.map(types.late((): any => PurchaseOrderModel)), {}),
    users: types.optional(types.map(types.late((): any => UserModel)), {})
  })
  .actions(self => ({
    queryUser(variables: { id?: string }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ user: UserModelType}>(`query user($id: String) { user(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllUsers(variables?: {  }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allUsers: UserModelType[]}>(`query allUsers { allUsers {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAddress(variables: { id: string }, resultSelector: string | ((qb: AddressModelSelector) => AddressModelSelector) = addressModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ address: AddressModelType}>(`query address($id: ID!) { address(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new AddressModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllAddresss(variables?: {  }, resultSelector: string | ((qb: AddressModelSelector) => AddressModelSelector) = addressModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allAddresss: AddressModelType[]}>(`query allAddresss { allAddresss {
        ${typeof resultSelector === "function" ? resultSelector(new AddressModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    querySupplier(variables: { id: string }, resultSelector: string | ((qb: SupplierModelSelector) => SupplierModelSelector) = supplierModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ supplier: SupplierModelType}>(`query supplier($id: ID!) { supplier(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new SupplierModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllSuppliers(variables?: {  }, resultSelector: string | ((qb: SupplierModelSelector) => SupplierModelSelector) = supplierModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allSuppliers: SupplierModelType[]}>(`query allSuppliers { allSuppliers {
        ${typeof resultSelector === "function" ? resultSelector(new SupplierModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    querySupplierStatus(variables: { id?: string }, resultSelector: string | ((qb: SupplierStatusModelSelector) => SupplierStatusModelSelector) = supplierStatusModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ supplierStatus: SupplierStatusModelType}>(`query supplierStatus($id: String) { supplierStatus(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new SupplierStatusModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllSupplierStatus(variables?: {  }, resultSelector: string | ((qb: SupplierStatusModelSelector) => SupplierStatusModelSelector) = supplierStatusModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allSupplierStatus: SupplierStatusModelType[]}>(`query allSupplierStatus { allSupplierStatus {
        ${typeof resultSelector === "function" ? resultSelector(new SupplierStatusModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryItem(variables: { id?: string }, resultSelector: string | ((qb: ItemModelSelector) => ItemModelSelector) = itemModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ item: ItemModelType}>(`query item($id: String) { item(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ItemModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllItems(variables?: {  }, resultSelector: string | ((qb: ItemModelSelector) => ItemModelSelector) = itemModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allItems: ItemModelType[]}>(`query allItems { allItems {
        ${typeof resultSelector === "function" ? resultSelector(new ItemModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryPurchaseOrder(variables: { id: string }, resultSelector: string | ((qb: PurchaseOrderModelSelector) => PurchaseOrderModelSelector) = purchaseOrderModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ purchaseOrder: PurchaseOrderModelType}>(`query purchaseOrder($id: ID!) { purchaseOrder(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PurchaseOrderModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllPurchaseOrders(variables?: {  }, resultSelector: string | ((qb: PurchaseOrderModelSelector) => PurchaseOrderModelSelector) = purchaseOrderModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allPurchaseOrders: PurchaseOrderModelType[]}>(`query allPurchaseOrders { allPurchaseOrders {
        ${typeof resultSelector === "function" ? resultSelector(new PurchaseOrderModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryScheduleLine(variables: { id?: string }, resultSelector: string | ((qb: ScheduleLineModelSelector) => ScheduleLineModelSelector) = scheduleLineModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ scheduleLine: ScheduleLineModelType}>(`query scheduleLine($id: String) { scheduleLine(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ScheduleLineModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllScheduleLines(variables?: {  }, resultSelector: string | ((qb: ScheduleLineModelSelector) => ScheduleLineModelSelector) = scheduleLineModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allScheduleLines: ScheduleLineModelType[]}>(`query allScheduleLines { allScheduleLines {
        ${typeof resultSelector === "function" ? resultSelector(new ScheduleLineModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateCreateUser(variables: { user: UserInput }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createUser: UserModelType}>(`mutation createUser($user: UserInput!) { createUser(user: $user) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateUser(variables: { user?: UpdateUserInput }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateUser: UserModelType}>(`mutation updateUser($user: UpdateUserInput) { updateUser(user: $user) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteUser(variables: { id?: string }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteUser: UserModelType}>(`mutation deleteUser($id: ID) { deleteUser(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateSupplier(variables: { supplier?: SupplierInput }, resultSelector: string | ((qb: SupplierModelSelector) => SupplierModelSelector) = supplierModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createSupplier: SupplierModelType}>(`mutation createSupplier($supplier: SupplierInput) { createSupplier(supplier: $supplier) {
        ${typeof resultSelector === "function" ? resultSelector(new SupplierModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteSupplier(variables: { id: string }, resultSelector: string | ((qb: SupplierModelSelector) => SupplierModelSelector) = supplierModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteSupplier: SupplierModelType}>(`mutation deleteSupplier($id: ID!) { deleteSupplier(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new SupplierModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateSupplier(variables: { supplier?: UpdateSupplierInput }, resultSelector: string | ((qb: SupplierModelSelector) => SupplierModelSelector) = supplierModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateSupplier: SupplierModelType}>(`mutation updateSupplier($supplier: UpdateSupplierInput) { updateSupplier(supplier: $supplier) {
        ${typeof resultSelector === "function" ? resultSelector(new SupplierModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateSupplierStatus(variables: { supplierStatus: SupplierStatusInput }, resultSelector: string | ((qb: SupplierStatusModelSelector) => SupplierStatusModelSelector) = supplierStatusModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createSupplierStatus: SupplierStatusModelType}>(`mutation createSupplierStatus($supplierStatus: SupplierStatusInput!) { createSupplierStatus(supplierStatus: $supplierStatus) {
        ${typeof resultSelector === "function" ? resultSelector(new SupplierStatusModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateSupplierStatus(variables: { supplierStatus: UpdateSupplierStatusInput }, resultSelector: string | ((qb: SupplierStatusModelSelector) => SupplierStatusModelSelector) = supplierStatusModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateSupplierStatus: SupplierStatusModelType}>(`mutation updateSupplierStatus($supplierStatus: UpdateSupplierStatusInput!) { updateSupplierStatus(supplierStatus: $supplierStatus) {
        ${typeof resultSelector === "function" ? resultSelector(new SupplierStatusModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteSupplierStatus(variables: { id: string }, resultSelector: string | ((qb: SupplierStatusModelSelector) => SupplierStatusModelSelector) = supplierStatusModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteSupplierStatus: SupplierStatusModelType}>(`mutation deleteSupplierStatus($id: ID!) { deleteSupplierStatus(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new SupplierStatusModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateItem(variables: { item: ItemInput }, resultSelector: string | ((qb: ItemModelSelector) => ItemModelSelector) = itemModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createItem: ItemModelType}>(`mutation createItem($item: ItemInput!) { createItem(item: $item) {
        ${typeof resultSelector === "function" ? resultSelector(new ItemModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateItem(variables: { item: UpdateItemInput }, resultSelector: string | ((qb: ItemModelSelector) => ItemModelSelector) = itemModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateItem: ItemModelType}>(`mutation updateItem($item: UpdateItemInput!) { updateItem(item: $item) {
        ${typeof resultSelector === "function" ? resultSelector(new ItemModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteItem(variables: { id: string }, resultSelector: string | ((qb: ItemModelSelector) => ItemModelSelector) = itemModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteItem: ItemModelType}>(`mutation deleteItem($id: ID!) { deleteItem(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ItemModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreatePurchaseOrder(variables: { purchaseOrder?: PurchaseOrderInput }, resultSelector: string | ((qb: PurchaseOrderModelSelector) => PurchaseOrderModelSelector) = purchaseOrderModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createPurchaseOrder: PurchaseOrderModelType}>(`mutation createPurchaseOrder($purchaseOrder: PurchaseOrderInput) { createPurchaseOrder(purchaseOrder: $purchaseOrder) {
        ${typeof resultSelector === "function" ? resultSelector(new PurchaseOrderModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeletePurchaseOrder(variables: { id: string }, resultSelector: string | ((qb: PurchaseOrderModelSelector) => PurchaseOrderModelSelector) = purchaseOrderModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deletePurchaseOrder: PurchaseOrderModelType}>(`mutation deletePurchaseOrder($id: ID!) { deletePurchaseOrder(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PurchaseOrderModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdatePurchaseOrder(variables: { purchaseOrder?: UpdatePurchaseOrderInput }, resultSelector: string | ((qb: PurchaseOrderModelSelector) => PurchaseOrderModelSelector) = purchaseOrderModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updatePurchaseOrder: PurchaseOrderModelType}>(`mutation updatePurchaseOrder($purchaseOrder: UpdatePurchaseOrderInput) { updatePurchaseOrder(purchaseOrder: $purchaseOrder) {
        ${typeof resultSelector === "function" ? resultSelector(new PurchaseOrderModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateScheduleLine(variables: { scheduleLine: ScheduleLineInput }, resultSelector: string | ((qb: ScheduleLineModelSelector) => ScheduleLineModelSelector) = scheduleLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createScheduleLine: ScheduleLineModelType}>(`mutation createScheduleLine($scheduleLine: ScheduleLineInput!) { createScheduleLine(scheduleLine: $scheduleLine) {
        ${typeof resultSelector === "function" ? resultSelector(new ScheduleLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateScheduleLine(variables: { scheduleLine: UpdateScheduleLineInput }, resultSelector: string | ((qb: ScheduleLineModelSelector) => ScheduleLineModelSelector) = scheduleLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateScheduleLine: ScheduleLineModelType}>(`mutation updateScheduleLine($scheduleLine: UpdateScheduleLineInput!) { updateScheduleLine(scheduleLine: $scheduleLine) {
        ${typeof resultSelector === "function" ? resultSelector(new ScheduleLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteScheduleLine(variables: { id: string }, resultSelector: string | ((qb: ScheduleLineModelSelector) => ScheduleLineModelSelector) = scheduleLineModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteScheduleLine: ScheduleLineModelType}>(`mutation deleteScheduleLine($id: ID!) { deleteScheduleLine(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ScheduleLineModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
