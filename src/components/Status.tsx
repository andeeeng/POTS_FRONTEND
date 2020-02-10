import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import StatusReportItem from "./StatusReportItem";

export interface IStatusReportListProps {
  title?: any;
  status?: any;
}

const StatusReportList = (props: IStatusReportListProps) => {
  const { title, status } = props;
  return (
    <Card style={{ width: "28rem" }}>
      <Card.Title>
        <h1>{title}</h1>
      </Card.Title>
      <ListGroup>
        <StatusReportItem status={status} />
      </ListGroup>
    </Card>
  );
};

export default StatusReportList;
