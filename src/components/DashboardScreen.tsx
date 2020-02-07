import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminMenu from "./AdminMenu";
import UserInfo from "./UserInfo";
import DashboardContent from "./DashboardContent";
import { menu, statusReport, poList } from "./data/mockData";

const DashboardScreen = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <AdminMenu
            title="POTS"
            desc="Purchase Order Tracking System"
            menuItem={menu}
          />
        </Col>
        <Col md={8}>
          <UserInfo user="Mark Nabablit" date="February 5, 2020" />
          <DashboardContent status={statusReport} list={poList} />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardScreen;
