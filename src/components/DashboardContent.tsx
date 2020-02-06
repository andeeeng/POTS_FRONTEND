import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import StatusList from "./Status";
import DatePicker from "./Calendar";
import PoStatus from "./PoStatus";

const DashboardContent = () => {
  return (
    <Container>
      <Col md={1}>
        <StatusList title="Today’s Status" />
      </Col>
      <br></br>
      <br></br>
      <Col md="auto">
        <Row>
          <DatePicker />
          <PoStatus />
        </Row>
      </Col>
    </Container>
  );
};

export default DashboardContent;
