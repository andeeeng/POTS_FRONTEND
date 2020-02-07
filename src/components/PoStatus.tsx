import React from "react";
import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";
import PoItem from "./PoItem";
import ButtonApp from "./Button";

export interface IPoStatusProps {
  title?: any;
}

const PoStatus = (props: IPoStatusProps) => {
  return (
    <Card style={{ width: "28rem" }}>
      <ListGroup>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h5>
                <PoItem
                  poNumber="OTN 20202121E565656"
                  poStatus="Delivered and is on now in the facility"
                />
              </h5>
            </Col>
            <Col>
              <ButtonApp variant="secondary" buttonTitle="View" />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h5>
                <PoItem
                  poNumber="OTN 20202121E565656"
                  poStatus="Delivered and is on now in the facility"
                />
              </h5>
            </Col>
            <Col>
              <ButtonApp variant="secondary" buttonTitle="View" />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h5>
                <PoItem
                  poNumber="OTN 20202121E565656"
                  poStatus="Delivered and is on now in the facility"
                />
              </h5>
            </Col>
            <Col>
              <ButtonApp variant="secondary" buttonTitle="View" />
            </Col>
          </Row>
        </Container>
      </ListGroup>
    </Card>
  );
};

export default PoStatus;
