import { Instance } from 'mobx-state-tree'
import { RootStoreBase } from './RootStore.base'
import {
  PURCHASEORDER_FRAGMENT,
  SCHEDULELINE_FRAGMENT,
  USER_FRAGMENT,
  MESSAGE_FRAGMENT,
} from '../helpers'
import { getUser } from '../components/auth'
import { convertToBase64 } from '../components/helper_functions'

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
    async vGetUser(username: any, pass: any) {
      const values: any = self.users.values()

      const users = [...values]

      const getUser = users.filter(
        user => user.userName == username && user.password == pass,
      )
      console.log(getUser)
      return getUser
    },
    vMessage() {
      const message: any = self.messages.values()
      const messages = [...message]
      return messages[0]
    },
  }
}).actions(self => ({
  afterCreate() {
    const value = getUser()
    const { username, password, loggedin } = value

    self.queryAllPurchaseOrders({}, PURCHASEORDER_FRAGMENT)
    self.queryAllScheduleLines({}, SCHEDULELINE_FRAGMENT)
    self.queryAllUsers({}, USER_FRAGMENT)
    if (loggedin) {
      self.queryLogin(
        {
          credential: convertToBase64({
            username: username,
            password: password,
          }),
        },
        MESSAGE_FRAGMENT,
      )
    }
  },
  updateStatus(scheduleLine: any) {
    console.log(scheduleLine, 'HERE THERE')
    return self.mutateUpdateScheduleLine(
      { scheduleLine: scheduleLine },
      SCHEDULELINE_FRAGMENT,
    )
  },
  requestLogin(credential: { username: string; password: string }) {
    return self.queryLogin({ credential: credential }, MESSAGE_FRAGMENT)
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
