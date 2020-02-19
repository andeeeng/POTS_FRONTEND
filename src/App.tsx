import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInfo from "./components/UserInfo";
import ScreenLayout from "./screens/ScreenLayout";
import OrderScreen from "./components/OrderScreen";
import SupplierScreen from "./components/SupplierScreen";
import DashboardContent from "./components/DashboardContent";
import { statusReport, poList } from "./data/mockData";
//mst
import { createHttpClient } from "mst-gql";
import { RootStore, StoreContext } from "../src/models";
import { observer } from "mobx-react";
const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient("http://localhost:4000/graphql")
});

const App = () => {
  console.log("TEST PUSH");
  console.log("PO", rootStore.vPurchaseOrders());
  return (
    <div className="main">
      <StoreContext.Provider value={rootStore}>
        <ScreenLayout
          DBcontent={
            <DashboardContent
              status={statusReport}
              list={rootStore.vPurchaseOrders()}
            />
          }
          POcontent={<OrderScreen po={rootStore.vPurchaseOrders()} />}
          SUPcontent={<SupplierScreen />}
          HeaderContent={
            <UserInfo user="Mark Nabablit" date="February 5, 2020" />
          }
        ></ScreenLayout>
      </StoreContext.Provider>
    </div>
  );
};

export default observer(App);
