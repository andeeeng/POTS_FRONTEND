import React from "react";

import styled from "styled-components";
import StatusItem from "./StatusItem";
import { Header } from "semantic-ui-react";

export default class StatusList extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: 20, marginTop: 10 }}>
        <Header size="huge">Today's Status</Header>
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
