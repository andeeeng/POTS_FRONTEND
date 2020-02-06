import React from "react";

import styled from "styled-components";
import StatusItem from "./StatusItem";
import HeaderTitle from "../components/HeaderTitle";

export default class StatusList extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: 20, marginTop: 10 }}>
        <HeaderTitle header="Today's Status" />
        <StatusItem
          OR="3"
          label="Orders Received"
          label2="Released from supplier"
          label3="On-hold from supplier"
        />
      </div>
    );
  }
}
