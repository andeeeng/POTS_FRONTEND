import React from "react";
import { Card, Feed, Label } from "semantic-ui-react";

export interface IStatusCurrentStatusProps {}

const CurrentStatus = (props: IStatusCurrentStatusProps) => {
  return (
    <Card.Content>
      <Label style={{ background: "black", color: "white" }}>
        <Card.Header style={{ paddingRight: 90, margin: 5, fontSize: 20 }}>
          Current Status
        </Card.Header>
      </Label>
    </Card.Content>
  );
};

export default CurrentStatus;
