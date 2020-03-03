import React, { useState } from "react";
// import logo from "./logo.svg";
import "../App.css";
import UserInfo from "../components/UserInfo";
import ScreenLayout from "../screens/ScreenLayout";
import OrderScreen from "../components/OrderScreen";
import SupplierScreen from "../components/SupplierScreen";
import DashboardContent from "../components/DashboardContent";
import { statusReport, poList } from "../data/mockData";
import { Input, Icon, Card, Alert, Button, Switch } from "antd";

const Main = () => {
  return (
    <div className="main">
      <ScreenLayout
        DBcontent={<DashboardContent status={statusReport} list={poList} />}
        POcontent={<OrderScreen />}
        SUPcontent={<SupplierScreen />}
        HeaderContent={
          <UserInfo user="Mark Nabablit" date="February 5, 2020" />
        }
      ></ScreenLayout>
    </div>
  );
};

export default Main;
