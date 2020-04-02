import { message as alert } from 'antd'
import { observer } from 'mobx-react'
//mst
import { createHttpClient } from 'mst-gql'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { RootStore } from '../src/models'
import { useQuery } from '../src/models/reactUtils'
import './App.css'
import { getUser } from './components/auth'
import DashboardContent from './components/DashboardContent'
import LoginScreen from './components/LoginScreen'
import OrderScreen from './components/OrderScreen'
import SupplierScreen from './components/SupplierScreen'
import ScreenLayout from './screens/ScreenLayout'

const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient('http://localhost:4000/graphql'),
})

const App = () => {
  const value = getUser()
  let login = value.login

  if (!login) {
    login = {
      message: '',
      userLevel: '',
      loggedIn: false,
    }
  }

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
  const { setQuery, loading } = useQuery()

  if (!loading) {
    if (loggedIn === false && message === 'Wrong Credentials') {
      alert.error(message)
    } else if (message && loggedIn === false) {
      alert.success(message)
    }
  }

  const PrivateRoute = ({ children, ...rest }: any) => {
    return (
      <Route
        {...rest}
        render={() =>
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
            <ScreenLayout
              rootStore={rootStore}
              setQuery={setQuery}
              state={state}
              setState={setState}
              userLevel={userLevel}
              userInfo={rootStore.vMessage()}
              DBcontent={
                <DashboardContent list={rootStore.vPurchaseOrders()} />
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
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  )
}

export default observer(App)
