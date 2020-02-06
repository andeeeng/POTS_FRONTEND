import React from "react";
import { Jumbotron, Row, Container, Col } from "react-bootstrap";

export interface IUserInfoProps {
  user?: any;
  date?: any;
}

const UserInfo = (props: IUserInfoProps) => {
  const { user, date } = props;
  return (
    <Jumbotron style={{ height: 10 }}>
      <div style={{ textAlign: "right" }}>
        <h3>Hello, Admin {user}!</h3>
      </div>
      <Container>
        <Row>
          <Col>
            <h5 style={{ textAlign: "left" }}>Last session: 1633, 1-27-2020</h5>
          </Col>
          <Col>
            <div style={{ textAlign: "right" }}>
              <h5>Today: {date}</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default UserInfo;
