import React, { useState, useContext } from 'react'
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
import { Buffer } from 'buffer'
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

import MeContext, { IMeContext } from './MeContext'
const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient('http://localhost:4000/graphql'),
})

interface IProps {
  loggedIn: any
  setState: any
}

const MeContextComponent = (props: any) => {
  const [state, setState] = useState({ loggedIn: false })
  const context: IMeContext = {
    username: '',
    userlevel: '',
    login: (loggedInFlag: any) => {
      setState({ ...state, loggedIn: loggedInFlag })
    },
    logout: () => {
      setState({ ...state, loggedIn: false })
    },
    loggedIn: false,
  }
  console.log(state, 'STATE')
  return (
    <MeContext.Provider value={context}>
      {props.children({ loggedIn: state.loggedIn, setState })}
    </MeContext.Provider>
  )
}

const App = () => {
  const { setQuery, store, error, data, loading } = useQuery()
  const loginQuery = useQuery()
  const [state, setState] = useState({
    path: '/Dashboard',
    currentKey: 'dashboard',
    selectedSchedID: '',
    tabkey: 'item',
    collapseKey: ['0'],
    username: '',
  })

  const routes = [
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

  const renderFn = ({ loggedIn, setState: renderState }: IProps) => {
    if (!loggedIn) {
      return (
        <LoginScreen
          rootStore={rootStore}
          setQuery={setQuery}
          messageInfo={rootStore.vMessage()}
          state={state}
          setState={setState}></LoginScreen>
      )
    } else {
      return (
        <MainScreen
          routes={routes}
          state={state}
          setState={setState}></MainScreen>
      )
    }
  }
  return <MeContextComponent>{renderFn}</MeContextComponent>
}

export default observer(App)
