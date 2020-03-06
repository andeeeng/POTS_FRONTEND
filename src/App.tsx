import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import UserInfo from './components/UserInfo'
import ScreenLayout from './screens/ScreenLayout'
import MainScreen from './screens/MainScreen'
import OrderScreen from './components/OrderScreen'
import SupplierScreen from './components/SupplierScreen'
import DashboardContent from './components/DashboardContent'
import LoginScreen from './components/LoginScreen'
import { statusReport, poList } from './data/mockData'
import { useQuery } from '../src/models/reactUtils'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
//mst
import { createHttpClient } from 'mst-gql'
import { RootStore, StoreContext } from '../src/models'
import { observer } from 'mobx-react'
const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient('http://localhost:4000/graphql'),
})

const App = () => {
  // const deliveryQuery = useQuery(store => store.requestPurchaseOrders())

  const { setQuery, store, error, data, loading } = useQuery()
  const [state, setState] = useState({
    path: '/',
    currentKey: 'dashboard',
  })

  const updateStatus = (scheduleline: any) => {
    console.log(error, 'ERROR')
    setQuery(rootStore.updateStatus(scheduleline))
  }
  // rootStore.queryAllPurchaseOrders()
  console.log(rootStore.vPurchaseOrders(), 'PO')
  return (
    <MainScreen
      DBScreen={
        <ScreenLayout
          DBcontent={
            <DashboardContent
              status={statusReport}
              list={rootStore.vPurchaseOrders()}
              statelogout={state}
              setStatelogout={setState}
            />
          }
          POcontent={
            <OrderScreen
              po={rootStore.vPurchaseOrders()}
              updateStatus={updateStatus}
            />
          }
          SUPcontent={<SupplierScreen po={rootStore.vPurchaseOrders()} />}
          HeaderContent={
            <UserInfo user="Mark Nabablit" date="February 5, 2020" />
          }></ScreenLayout>
      }
      loginScreen={
        <LoginScreen state={state} setState={setState}></LoginScreen>
      }
      state={state}
      setState={setState}></MainScreen>
  )
}

export default observer(App)
