import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import StatusItem from "./StatusItem";

export interface IStatusListProps {
  title?: any;
}

const StatusList = (props: IStatusListProps) => {
  const { title } = props;
  return (
    <Card style={{ width: "28rem" }}>
      <Card.Title>
        <h1>{title}</h1>
      </Card.Title>
      <ListGroup>
        <StatusItem number="3" statOption="Orders Received" />
        <StatusItem number="7" statOption="Released from supplier" />
        <StatusItem number="2" statOption="On-hold from supplier" />
      </ListGroup>
    </Card>
  );
};

export default StatusList;
