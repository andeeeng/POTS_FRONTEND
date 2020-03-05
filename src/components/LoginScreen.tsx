import React, { useState } from 'react'
import { Card, Input, Icon, Button } from 'antd'

const Login = (props: any) => {
  return (
    <div style={{ backgroundColor: 'white', marginLeft: '500px' }}>
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
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                />
              </div>
              <div style={{ marginLeft: -10 }}>
                <Button type="link" style={{ color: 'white' }}>
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
                <Button
                  onClick={() =>
                    props.setState({ ...props.state, path: '/DashBoard' })
                  }>
                  Login
                </Button>
              </div>
            </div>
          </div>
          <Card
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
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Login
