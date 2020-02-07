import React from "react";
import { Card, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import MenuList from "./MenuList";
import HeaderTitle from "./HeaderTitle";
import StatusItem from "./StatusItem";

export interface IStatusListProps {
  title?: any;
  number?: any;
}

const StatusList = (props: IStatusListProps) => {
  const { title } = props;
  return (
    <Card style={{ width: "28rem" }}>
      <Card.Title>
        <h1>{title}</h1>
      </Card.Title>
    </Card>
  );
};

export default StatusList;
