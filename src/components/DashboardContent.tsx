import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import DatePicker from "./Calendar";
import PoStatus from "./PoStatus";
import StatusReportList from "./Status";

export interface IDashboardContentProps {
  status?: any;
  list?: any;
}

const DashboardContent = (props: IDashboardContentProps) => {
  const { status, list } = props;
  return (
    <Container>
      <Col md={1}>
        <StatusReportList title="Today’s Status" status={status} />
      </Col>
      <br></br>
      <br></br>
      <Col md="auto">
        <Row>
          <DatePicker />
          <PoStatus list={list} />
        </Row>
      </Col>
    </Container>
  );
};

export default DashboardContent;
