import { Button, Icon, Layout, Menu } from 'antd'
import React, { useContext } from 'react'
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import { removeUser, setUser } from '../components/auth'
import { handleClick } from '../components/helper_functions'
import MeContext from '../MeContext'
const { Header, Content, Footer, Sider } = Layout

export interface ILayout {
  DBcontent?: any
  POcontent?: any
  SUPcontent?: any
  HeaderContent?: any
  routes?: any
  state?: any
  setState?: any
  userInfo?: any
  setQuery?: any
  rootStore?: any
  userLevel?: any
}

const App = (props: ILayout) => {
  const { state, setState, DBcontent, POcontent, SUPcontent, userLevel } = props

  const initialLoad = () => {
    if (state.currentKey == 'dashboard') {
      return (
        <Redirect
          to={{
            pathname: '/dashboard',
          }}
        />
      )
    }
  }
  const logout = () => {
    removeUser()
    setUser({})
    setState({ ...state, fakeState: '' })
  }
  const renderSuppMenu = () => {
    if (userLevel == 'Admin') {
      return (
        <Menu.Item key="supplier">
          <Icon type="car" />
          <span className="nav-text">My Suppliers</span>
          <Link to={`/suppliers`}></Link>
        </Menu.Item>
      )
    }
  }

  return (
    <Layout>
      <Sider
        style={{ backgroundColor: 'white' }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}>
        <div className="logo" />
        {console.log(state, 'STATE')}
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[state.currentKey]}
          defaultSelectedKeys={['dashboard']}
          onClick={e => handleClick(e.key, state, setState)}>
          <Menu.Item key="dashboard">
            <Icon type="dashboard" />
            <span className="nav-text">My Dashboard</span>
            <Link to={`/dashboard`}></Link>
          </Menu.Item>
          <Menu.Item key="order">
            <Icon type="shopping-cart" />
            <span className="nav-text">My Orders</span>
            <Link to={`/orders`}></Link>
          </Menu.Item>
          {renderSuppMenu()}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: 'white', float: 'right' }}>
          <Button type="link" onClick={() => logout()}>
            Logout
          </Button>
        </Header>
        <Content
          style={{
            display: 'flex',
            backgroundColor: 'white',
            padding: '30px',
            flexFlow: 'row wrap',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
          {initialLoad()}
          <Switch>
            <Route exact path="/dashboard">
              {DBcontent}
            </Route>
            <Route path="/orders">{POcontent}</Route>
            <Route path="/suppliers">{SUPcontent}</Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Purchase Order Tracking System ©2020 Created by Fast Track
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
