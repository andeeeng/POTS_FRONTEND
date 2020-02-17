import React from "react";
import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";
import PoItem from "./PoItem";
import ButtonApp from "./Button";

export interface IPoStatusProps {
  list?: any;
}

const PoStatus = (props: IPoStatusProps) => {
  const { list } = props;
  return (
    <Card style={{ width: "22rem", maxHeight: 200, overflow: "auto" }}>
      <ListGroup>
        <Container>
          <Row className="justify-content-md-center">
            <PoItem list={list} />
          </Row>
        </Container>
      </ListGroup>
    </Card>
  );
};

export default PoStatus;
