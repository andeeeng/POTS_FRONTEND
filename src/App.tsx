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
import { onSubmit, Auth } from './components/helper_functions'
import { getUser, setUser, removeUser } from './components/auth'
import { useQuery } from '../src/models/reactUtils'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
  useHistory,
} from 'react-router-dom'
//mst
import { createHttpClient } from 'mst-gql'
import { RootStore, StoreContext } from '../src/models'
import { observer, inject } from 'mobx-react'

import MeContext, { IMeContext } from './MeContext'
const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient('http://localhost:4000/graphql'),
})

const App = (props: any) => {
  const value = getUser()
  let login = value.login

  if (!login) {
    login = {
      message: '',
      userLevel: '',
      loggedIn: false,
    }
  }

  console.log(login, 'LOGIN')
  const { message, userLevel, loggedIn } = login
  let initState = {
    fakeState: '',
    path: '/Dashboard',
    currentKey: 'dashboard',
    selectedSchedID: '',
    tabkey: 'item',
    collapseKey: ['0'],
    username: '',
  }
  const [state, setState] = useState(initState)
  const { setQuery, store, error, data, loading } = useQuery()
  const PrivateRoute = ({ children, ...rest }: any) => {
    // console.log(children, ...rest, 'REST')
    console.log(children, 'CHILDREN')
    return (
      <Route
        {...rest}
        render={({ location }) =>
          loggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          )
        }
      />
    )
  }
  return (
    <Router>
      <div>
        <Redirect
          to={{
            pathname: '/',
          }}
        />
        <Switch>
          <Route path="/login">
            <LoginScreen setQuery={setQuery} rootStore={rootStore} />
          </Route>
          <PrivateRoute path="/">
            {/* <ProtectedPage />
             */}
            <ScreenLayout
              rootStore={rootStore}
              setQuery={setQuery}
              state={state}
              setState={setState}
              userLevel={userLevel}
              userInfo={rootStore.vMessage()}
              DBcontent={
                <DashboardContent
                  userLevel={userLevel}
                  status={statusReport}
                  list={rootStore.vPurchaseOrders()}
                  statelogout={state}
                  setStatelogout={setState}
                />
              }
              POcontent={
                <OrderScreen
                  userLevel={userLevel}
                  userInfo={rootStore.vMessage()}
                  state={state}
                  setState={setState}
                  store={rootStore}
                  setQuery={setQuery}
                  po={rootStore.vPurchaseOrders()}
                />
              }
              SUPcontent={
                <SupplierScreen po={rootStore.vPurchaseOrders()} />
              }></ScreenLayout>
            {/* <div>
              <button
                onClick={() => {
                  removeUser()
                  setUser({})
                  setState({ initState })
                }}>
                LOG OUT
              </button>
            </div> */}
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  )
}

export default observer(App)
