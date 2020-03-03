import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Input, Icon, Card, Alert, Button } from "antd";

// import Button from "@material-ui/core/Button";
import { Typography } from "antd";

import { BrowserRouter, Route } from "react-router-dom";
import main from "./components/Main";

const { Text } = Typography;

export interface IAppProps {
  username?: any;
  password?: any;
  onPress?: any;
  onClick?: any;
  history?: any;
}

const initialState = {
  username: "",
  password: "",
  errorSource: true,
  viewpass: false
};
const Home = (props: IAppProps) => {
  const [state, setState] = useState(initialState);
  const { username, password, onPress, onClick, history } = props;
  const getUser = () => {
    if (state.username === "MNabablit" && state.password === "123") {
      return true;
    }

    if (state.username === "NCarpio" && state.password === "123") {
      return true;
    }

    if ((state.username! = "MNabablit" && "NCarpio")) {
    }
    setState({ ...state, errorSource: false });

    return false;
  };

  return (
    // <div className="main">
    //   {/* <ScreenLayout
    //     DBcontent={<DashboardContent status={statusReport} list={poList} />}
    //     POcontent={<OrderScreen />}
    //     SUPcontent={<SupplierScreen />}
    //     HeaderContent={
    //       <UserInfo user="Mark Nabablit" date="February 5, 2020" />
    //     }
    //   ></ScreenLayout> */}

    // </div>
    <div>
      <div className="logo-login"></div>
      <div
        style={{
          padding: "30px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }}
      >
        <div>
          <Card
            bordered={false}
            style={{
              width: 300,
              backgroundColor: "#3d00bc",
              borderRadius: 20
            }}
          >
            <div>
              <Input
                placeholder="input username"
                name={username}
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            </div>
            <br />
            <br />
            <div>
              <Input.Password
                name={password}
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="input password"
              />
            </div>

            <br />
            <div>
              <Button type="link" style={{ color: "white" }}>
                Forgot your password?
              </Button>
            </div>

            <br />

            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex"
              }}
            >
              {/* <Button
                style={{ color: "white" }}
                endIcon={
                  <Icon
                    type="login"
                    style={{ color: "white", marginLeft: 10, fontSize: 20 }}
                  />
                }
              >
                Login
              </Button> */}

              <Button type="link" style={{ color: "white" }}>
                Login
                <Icon type="login" style={{ fontSize: 30 }} />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
