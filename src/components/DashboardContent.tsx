import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import DatePicker from "./Calendar";
import PoStatus from "./PoStatus";
import StatusReportList from "./Status";
import StatusItem from "./StatusItem";
import { Card, Divider } from "antd";
import { Image } from "semantic-ui-react";
import myImage from "../truck-delivery.png";

export interface IDashboardContentProps {
  status?: any;
  list?: any;
}

const DashboardContent = (props: IDashboardContentProps) => {
  const { status, list } = props;
  return (
    <Container>
      <div className="container-dashboard">
        <div className="truckdelivery">
          <Image src={myImage} size="big" />
        </div>
        <div className="subcontainer-dashboard">
          <Card
            style={{
              width: 350,
              borderColor: "#b768e8",
              borderWidth: 2,
              backgroundColor: "transparent"
            }}
          >
            <StatusItem />
          </Card>
        </div>
      </div>
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
