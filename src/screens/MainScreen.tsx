import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
//mst
import { observer } from 'mobx-react'
import { useQuery } from '../models'
import MeContext from '../MeContext'
import { setUser } from '../components/auth'
import { onSubmit } from '../components/helper_functions'

export interface IProps {
  loginScreen?: any
  logoutScreen?: any
  DBScreen?: any
  store?: any
  state?: any
  setState?: any
  setQuery?: any
  rootStore?: any
  messageInfo?: any
  value?: any
  routes?: any
  flag?: any
}

const Main = (props: IProps) => {
  const { flag, value, messageInfo, setQuery, rootStore, routes, state } = props

  const context = useContext(MeContext)
  console.log(flag, 'CONTEXT')
  if (!flag) {
    const { username, password, loggedin: storeflag } = value

    let object = {
      username: username,
      password: password,
      loggedin: true,
    }
    setUser(object)
    context.login(true)
    onSubmit(setQuery, rootStore, { username: username, password: password })
  }
  return (
    <div>
      <Router>
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
