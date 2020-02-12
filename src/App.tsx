import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInfo from "./components/UserInfo";
import ScreenLayout from "./screens/ScreenLayout";

const App = () => {
  return (
    <ScreenLayout
      DBcontent="DB"
      POcontent="PO"
      SUPcontent="SUPP"
      HeaderContent="HEADER"
    ></ScreenLayout>
  );
};

export default App;
