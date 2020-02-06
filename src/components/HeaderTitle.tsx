import React from "react";

import styled from "styled-components";
import StatusItem from "./StatusItem";
import { Header } from "semantic-ui-react";

export default class StatusList extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: 20, marginTop: 10, marginBottom: 20 }}>
        <Header size="huge">{this.props.header}</Header>
      </div>
    );
  }
}
