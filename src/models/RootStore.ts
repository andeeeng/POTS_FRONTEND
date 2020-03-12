import { Instance } from 'mobx-state-tree'
import { RootStoreBase } from './RootStore.base'
import {
  PURCHASEORDER_FRAGMENT,
  SCHEDULELINE_FRAGMENT,
  USER_FRAGMENT,
} from '../helpers'

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

export const RootStore = RootStoreBase.views(self => {
  return {
    vPurchaseOrders() {
      const po: any = self.purchaseorders.values()
      return [...po]
    },
    vScheduleLine() {
      const sl: any = self.schedulelines.values()
      return [...sl]
    },
    vUsers() {
      const users: any = self.users.values()
      return [...users]
    },
    vGetUser(user: any, pass: any) {
      const getID = (username: any, password: any) => {
        let user: Array<any> = []
        const users: any = self.users.values()
        const array = [...users]
        console.log(array, 'ARRAY OP USER')
        const filteruser = array.filter(
          user => user.userName == username && user.password == password,
        )
        console.log(filteruser, 'FILTERED')
        filteruser.map((x: any) => {
          user.push({
            id: x.id,
            username: x.userName,
            password: x.password,
            userLevel: x.userLevel,
          })
        })
        return user
      }

      return getID(user, pass)
    },
  }
}).actions(self => ({
  afterCreate() {
    self.queryAllPurchaseOrders({}, PURCHASEORDER_FRAGMENT)
    self.queryAllScheduleLines({}, SCHEDULELINE_FRAGMENT)
    self.queryAllUsers({}, USER_FRAGMENT)
  },
  updateStatus(scheduleLine: any) {
    console.log(scheduleLine, 'HERE THERE')
    return self.mutateUpdateScheduleLine(
      { scheduleLine: scheduleLine },
      SCHEDULELINE_FRAGMENT,
    )
  },
  requestPurchaseOrders() {
    const poq = self.queryAllPurchaseOrders({}, PURCHASEORDER_FRAGMENT)

    return poq
  },
  requestScheduleLines() {
    const sl = self.queryAllScheduleLines({}, SCHEDULELINE_FRAGMENT)

    return sl
  },
}))
