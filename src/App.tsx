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
  const [state, setState] = useState({
    path: '/',
    currentKey: 'dashboard',
    selectedSchedID: '',
    tabkey: 'item',
    collapseKey: ['0'],
    log_ined: {
      username: '',
      password: '',
      userlevel: '',
      userId: '',
    },
  })

  const routes = [
    {
      path: '/',
      exact: true,
      main: () => (
        <LoginScreen
          getUser={rootStore.vGetUser}
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
          POcontent={
            <OrderScreen
              state={state}
              setState={setState}
              po={rootStore.vPurchaseOrders()}
              updateStatus={updateStatus}
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
          SUPcontent={
            <SupplierScreen po={rootStore.vPurchaseOrders()} />
          }></ScreenLayout>
      ),
    },
  ]

  const updateStatus = (scheduleline: any) => {
    setQuery(rootStore.updateStatus(scheduleline))
  }

  return (
    <MainScreen routes={routes} state={state} setState={setState}></MainScreen>
  )
}

export default observer(App)
