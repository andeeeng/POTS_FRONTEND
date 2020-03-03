import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Input, Icon, Card, Alert, Button } from "antd";

// import Button from "@material-ui/core/Button";
import { Typography } from "antd";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import Main from "./components/Main";

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
const App = (props: IAppProps) => {
  const onNavigateHome = () => {
    window.open(
      "C:Users/Lenovo/Documents/POTS_FRONTEND/src/components/Main.tsx"
    );
  };

  return <Main />;
};

export default App;
