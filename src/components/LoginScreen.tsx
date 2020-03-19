import React, { useState, useContext } from 'react'
import { Card, Input, Icon, Button, message } from 'antd'
import { Buffer } from 'buffer'
import { observer } from 'mobx-react'
import MeContext from '../MeContext'
import { login } from './helper_functions'

export interface IProps {
  getUser?: any
  state?: any
  setState?: any
  loginQuery?: any
  messageInfo?: any
  setQuery?: any
  rootStore?: any
}

const Login = (props: IProps) => {
  const context = useContext(MeContext)

  const {
    setQuery,
    rootStore,
    state,
    setState,
    loginQuery,
    messageInfo,
  } = props
  const [userinfo, setInfo] = useState({
    username: '',
    password: '',
  })

  if (messageInfo) {
    context.login(true)
  }

  const convertToBase64 = (credential: any) => {
    const { username, password } = credential
    console.log(userinfo)
    return {
      username: new Buffer(username).toString('base64'),
      password: new Buffer(password).toString('base64'),
    }
  }

  const onSubmit = (
    loginQuery: any,
    userinfo: { username: string; password: string },
  ) => {
    console.log()
    login(convertToBase64(userinfo), setQuery, rootStore)
    // console.log(userinfo, 'MESSAGE INFO')
    // loginQuery(convertToBase64(userinfo))
    // console.log(messageInfo, 'MESSAGE INFO')
    // if (messageInfo) {
    //   const { loggedIn } = messageInfo
    //   console.log(loggedIn, 'WHAT IS THIS')
    //   if (loggedIn) {
    //     setState({
    //       ...state,
    //       username: userinfo.username,
    //       path: '/DashBoard',
    //     })
    //     return
    //   }
    //   return message.error('Log-in failed')
    // }
  }

  return (
    <div style={{ backgroundColor: 'white', marginLeft: '600px' }}>
      <div className="logo-login"></div>
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
              />

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
                <Button onClick={() => onSubmit(loginQuery, userinfo)}>
                  Login
                </Button>
              </div>
            </div>
          </div>
          {/* <Card
            bordered={false}
            style={{
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
