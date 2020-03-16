import React, { useState } from 'react'

import { Layout, Menu, Icon } from 'antd'
import { handleClick, showContent } from '../components/helper_functions'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { observer } from 'mobx-react'
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
}

const App = (props: ILayout) => {
  const {
    state,
    setState,
    routes,
    DBcontent,
    POcontent,
    SUPcontent,
    HeaderContent,
    userInfo,
  } = props
  console.log(state.log_ined, 'USERINFO')
  const renderSuppMenu = () => {
    // let userlevel = state.log_ined.map((x: any) => {
    //   return x.userlevel
    // })
    if (userInfo) {
      const { userLevel } = userInfo
      console.log('Userlevel', userLevel)
      if (userLevel == 'Admin') {
        return (
          <Menu.Item key="supplier">
            <Icon type="car" />
            <span className="nav-text">My Suppliers</span>
          </Menu.Item>
        )
      }
      return null
    }
  }
  const renderContent = (key: any) => {
    switch (key) {
      case 'dashboard':
        return DBcontent

      case 'order':
        return POcontent

      case 'supplier':
        return SUPcontent

      default:
        break
    }
  }
  return (
    <Router>
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
          <Menu
            theme="light"
            mode="inline"
            selectedKeys={[state.currentKey]}
            // defaultSelectedKeys={['dashboard']}
            onClick={e => handleClick(e.key, state, setState)}>
            {/* onClick={e => console.log('FUCK')}> */}
            <Menu.Item key="dashboard">
              <Icon type="dashboard" />
              <span className="nav-text">My Dashboard</span>
            </Menu.Item>
            <Menu.Item key="order">
              <Icon type="shopping-cart" />
              <span className="nav-text">My Orders</span>
            </Menu.Item>
            {renderSuppMenu()}
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              display: 'flex',
              backgroundColor: 'white',
              padding: '30px',
              flexFlow: 'row wrap',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}>
            {renderContent(state.currentKey)}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Purchase Order Tracking System ©2020 Created by Fast Track
          </Footer>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
