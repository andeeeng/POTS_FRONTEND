import React from 'react'
import logo from './logo.svg'
import './App.css'
import UserInfo from './components/UserInfo'
import ScreenLayout from './screens/ScreenLayout'
import OrderScreen from './components/OrderScreen'
import SupplierScreen from './components/SupplierScreen'
import DashboardContent from './components/DashboardContent'
import { statusReport, poList } from './data/mockData'

//mst
import { createHttpClient } from 'mst-gql'
import { RootStore, StoreContext } from '../src/models'
import { observer } from 'mobx-react'
const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient('http://localhost:4000/graphql'),
})

//rawr
const App = () => {
  console.log('PO', rootStore.vPurchaseOrders())
  console.log('POQ', rootStore.requestPurchaseOrders())
  return (
    <div className="main">
      <ScreenLayout
        DBcontent={<DashboardContent status={statusReport} list={poList} />}
        POcontent={<OrderScreen po={rootStore.vPurchaseOrders()} />}
        SUPcontent={<SupplierScreen />}
        HeaderContent={
          <UserInfo user="Mark Nabablit" date="February 5, 2020" />
        }></ScreenLayout>
    </div>
  )
}

export default App
