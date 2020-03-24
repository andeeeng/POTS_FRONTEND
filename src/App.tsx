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
import { getUser, setUser, removeUser } from './components/auth'
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
import { onSubmit } from './components/helper_functions'
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
          rootStore={rootStore}
          setQuery={setQuery}
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
          rootStore={rootStore}
          setQuery={setQuery}
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
          rootStore={rootStore}
          setQuery={setQuery}
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
    const value = getUser()
    // localStorage.clear()
    const { username, password, loggedin: storeflag } = value

    console.log(username, password, storeflag, 'VALUESSS')
    console.log(loggedIn, 'LOGGED IN')

    if (!loggedIn && !storeflag) {
      return (
        <LoginScreen
          flag={username}
          rootStore={rootStore}
          setQuery={setQuery}
          messageInfo={rootStore.vMessage()}
          state={state}
          setState={setState}></LoginScreen>
      )
    }

    if (!loggedIn && storeflag) {
      return (
        <MainScreen
          flag={loggedIn}
          setQuery={setQuery}
          value={value}
          rootStore={rootStore}
          routes={routes}
          state={state}
          setState={setState}></MainScreen>
      )
    }
    if (loggedIn && storeflag) {
      return (
        <MainScreen
          flag={loggedIn}
          setQuery={setQuery}
          value={value}
          rootStore={rootStore}
          routes={routes}
          state={state}
          setState={setState}></MainScreen>
      )
    }
    if (loggedIn && storeflag) {
      return (
        <MainScreen
          flag={loggedIn}
          setQuery={setQuery}
          value={value}
          rootStore={rootStore}
          routes={routes}
          state={state}
          setState={setState}></MainScreen>
      )
    }
  }
  return <MeContextComponent>{renderFn}</MeContextComponent>
}

export default observer(App)
