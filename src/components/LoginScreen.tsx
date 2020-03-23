import React, { useState, useContext } from 'react'
import { Card, Input, Icon, Button, message } from 'antd'
import { Buffer } from 'buffer'
import { observer } from 'mobx-react'
import Logo from '../components/Logo'
import MeContext from '../MeContext'
import { getUser, setUser, removeUser } from '../components/auth'
import { onSubmit } from '../components/helper_functions'

export interface IProps {
  getUser?: any
  state?: any
  setState?: any
  loginQuery?: any
  messageInfo?: any
  login?: any
  title?: any
  setQuery?: any
  rootStore?: any
}

const Login = (props: IProps) => {
  const context = useContext(MeContext)

  const { setQuery, rootStore, login, state, setState, messageInfo } = props
  const [userinfo, setInfo] = useState({
    username: '',
    password: '',
  })

  if (messageInfo) {
    const { userLevel } = messageInfo
    console.log('Userlevel', userLevel)
    if (userLevel == 'Admin' || userLevel == 'Supplier') {
      let object = {
        username: userinfo.username,
        password: userinfo.password,
        loggedin: true,
      }
      setUser(object)
      context.login(true)
    }
  }

  return (
    <div style={{ backgroundColor: 'white', marginLeft: '600px' }}>
      <Logo />
      <div
        style={{
          padding: '30px',
        }}>
        <div>
          <div className="login-form">
            <div
              style={{
                width: 200,
                marginTop: 70,
                marginLeft: 90,
                position: 'absolute',
              }}>
              <h5 style={{ color: 'white', fontSize: 12 }}>Username/Email</h5>
              <Input
                name={'username'}
                value={userinfo.username}
                onChange={(e: any) => {
                  setState({ ...state, username: e.target.value })
                  setInfo({ ...userinfo, username: e.target.value })
                }}
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="username"
              />{' '}
              <br />
              <br />
              <div>
                <h5 style={{ color: 'white', fontSize: 12 }}>Password</h5>
                <Input.Password
                  name={'password'}
                  value={userinfo.password}
                  onChange={(e: any) =>
                    setInfo({ ...userinfo, password: e.target.value })
                  }
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  //onChange={text => setState({ text })}
                />
              </div>
              <div style={{ marginLeft: -10 }}>
                <Button
                  type="link"
                  style={{ color: 'white' }}
                  onClick={
                    () => console.log()
                    // checkUser(userinfo.username, userinfo.password)
                  }>
                  <h5 style={{ color: 'white', fontSize: 10 }}>
                    Forgot Password?
                  </h5>
                </Button>
              </div>
              <div
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  marginTop: 70,
                }}>
                <Button onClick={() => onSubmit(setQuery, rootStore, userinfo)}>
                  Login
                </Button>
              </div>
            </div>
          </div>
          {/* <Card
            bordered={false}
            style={{p
              width: 300,
              backgroundColor: '#3d00bc',
              borderRadius: 20,
            }}>
            <div>
              <Input
                placeholder="input username"
                name={'username'}
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
              />
            </div>
            <br />
            <br />
            <div>
              <Input.Password
                name={'password'}
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="input password"
              />
            </div>

            <br />
            <div>
              <Button type="link" style={{ color: 'white' }}>
                Forgot your password?
              </Button>
            </div>

            <br />

            <div
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}>
              <Button
                onClick={() =>
                  props.setState({ ...props.state, path: '/DashBoard' })
                }>
                Login
              </Button>
            </div>
          </Card> */}
        </div>
      </div>
    </div>
  )
}

export default observer(Login)
