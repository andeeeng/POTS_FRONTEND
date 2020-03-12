import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
//mst
import { observer } from 'mobx-react'

export interface IProps {
  loginScreen?: any
  logoutScreen?: any
  DBScreen?: any
  store?: any
  state?: any
  setState?: any
  routes?: any
}

const Main = (props: IProps) => {
  // const deliveryQuery = useQuery(store => store.requestPurchaseOrders())
  const {
    routes,
    state,
    loginScreen,
    DBScreen,
    store,
    setState,
    logoutScreen,
  } = props
  // const routes = [
  //   {
  //     path: '/',
  //     exact: true,
  //     main: () => loginScreen,
  //   },
  //   {
  //     path: '/Dashboard',
  //     exact: true,
  //     main: () => DBScreen,
  //   },
  // ]
  return (
    <div>
      <Router>
        {console.log(state.path, 'PATH')}
        <Redirect push to={state.path}></Redirect>
        {routes.map((route: any) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}></Route>
        ))}
      </Router>
    </div>
  )
}

export default observer(Main)
