import React, { useState } from 'react'
import { Card, Input, Icon, Button, message } from 'antd'
import { Buffer } from 'buffer'
import { observer } from 'mobx-react'

export interface IProps {
  getUser?: any
  state?: any
  setState?: any
  loginQuery?: any
  messageInfo?: any
}

const Login = (props: IProps) => {
  const { state, setState, getUser, loginQuery, messageInfo } = props
  const [userinfo, setInfo] = useState({
    username: '',
    password: '',
  })

  const checkUser = async (user: any, pass: any) => {
    const login = await getUser(user, pass)
    let data: Array<any> = []

    login.map((info: any) => {
      data.push({
        username: info.userName,
        // password: info.password,
        userlevel: info.userLevel,
        userId: 'TEST',
      })
    })
    if (login.length == 0) {
      return message.error('Log-in failed')
    } else {
      setState({ ...state, path: '/DashBoard', log_ined: data })
    }
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
    loginQuery(convertToBase64(userinfo))
    if (messageInfo) {
      const { loggedIn } = messageInfo

      if (loggedIn) {
        setState({
          ...state,
          username: userinfo.username,
          path: '/DashBoard',
        })
        return
      }
      return message.error('Log-in failed')
    }
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
                onChange={(e: any) =>
                  setInfo({ ...userinfo, username: e.target.value })
                }
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

export default Login
