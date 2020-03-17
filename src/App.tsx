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
  const users = rootStore.vGetUser('Supp', 'supp')
  console.log(users, 'APPTSX')
  const { setQuery, store, error, data, loading } = useQuery()
  const loginQuery = useQuery()
  const [state, setState] = useState({
    path: '/',
    currentKey: 'dashboard',
    selectedSchedID: '',
    tabkey: 'item',
    collapseKey: ['0'],
    username: '',
  })
  console.log('Message', rootStore.vMessage())
  const routes = [
    {
      path: '/',
      exact: true,
      main: () => (
        <LoginScreen
          loginQuery={rootStore.requestLogin}
          messageInfo={rootStore.vMessage()}
          state={state}
          setState={setState}></LoginScreen>
      ),
    },
    {
      path: '/Dashboard',
      exact: true,
      main: () => (
        <ScreenLayout
          routes={routes}
          state={state}
          setState={setState}
          userInfo={rootStore.vMessage()}
          DBcontent={
            <DashboardContent
              status={statusReport}
              list={rootStore.vPurchaseOrders()}
              statelogout={state}
              setStatelogout={setState}
            />
          }></ScreenLayout>
      ),
    },
    {
      path: '/Orders',
      exact: true,
      main: () => (
        <ScreenLayout
          routes={routes}
          state={state}
          setState={setState}
          userInfo={rootStore.vMessage()}
          POcontent={
            <OrderScreen
              userInfo={rootStore.vMessage()}
              state={state}
              setState={setState}
              store={rootStore}
              setQuery={setQuery}
              po={rootStore.vPurchaseOrders()}
            />
          }></ScreenLayout>
      ),
    },

    {
      path: '/Suppliers',
      exact: true,
      main: () => (
        <ScreenLayout
          routes={routes}
          state={state}
          setState={setState}
          userInfo={rootStore.vMessage()}
          SUPcontent={
            <SupplierScreen po={rootStore.vPurchaseOrders()} />
          }></ScreenLayout>
      ),
    },
  ]

  return (
    <MainScreen routes={routes} state={state} setState={setState}></MainScreen>
  )
}

export default observer(App)
