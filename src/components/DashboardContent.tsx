import React from "react";
import { Container, Col, Row, ListGroup } from "react-bootstrap";
import DatePicker from "./Calendar";
import PoStatus from "./PoStatus";
import StatusReportList from "./Status";
import StatusItem from "./StatusItem";
import { Card, Divider } from "antd";
import { Image, List, Button } from "semantic-ui-react";
import myImage from "../truck-delivery.png";
import BorderWrapper from "react-border-wrapper";

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
          <Image src={myImage} size="large" />
        </div>
        <div
          style={{
            paddingLeft: 15,
            paddingTop: 15,
            paddingBottom: 10
          }}
        >
          <BorderWrapper
            topElement="RecentUpdates"
            topPosition={0}
            topOffset={10}
            topGap={15}
            borderWidth={2}
            borderColour="violet"
            innerPadding={20}
            borderRadius="-0px"
          >
            <StatusItem />
          </BorderWrapper>
        </div>
      </div>
      <br></br>
      <br></br>

      <Card
        style={{
          width: "80%",
          borderColor: "#b768e8",
          borderWidth: 2,
          backgroundColor: "transparent"
        }}
      >
        <div className="parent">
          <h5>
            Your calendar is now updated, <br></br>
            you may choose a date to see <br></br>
            what has occured on the specific day.
          </h5>
        </div>
        <div className="statusdate">
          <h2>February 14, 2020 Updates</h2>
        </div>
        <div className="box">
          <DatePicker />

          <div className="status">
            <Card
              style={{
                overflow: "auto",
                height: 200,
                backgroundColor: "transparent",
                width: 400
              }}
            >
              <ListGroup>
                <Container>
                  <List selection verticalAlign="middle">
                    <List.Item>
                      <List.Content floated="right">
                        <Button color="blue">View Order</Button>
                      </List.Content>
                      <List.Header as="a">Order # 3213212253 </List.Header>
                      <List.Content>Status: Some status</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content floated="right">
                        <Button color="blue">View Order</Button>
                      </List.Content>
                      <List.Content>
                        <List.Header as="a">Order # 3213212253 </List.Header>
                        <List.Content>Status: Some status</List.Content>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content floated="right">
                        <Button color="blue">View Order</Button>
                      </List.Content>
                      <List.Content>
                        <List.Header as="a">Order # 3213212253 </List.Header>
                        <List.Content>Status: Some status</List.Content>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content floated="right">
                        <Button color="blue">View Order</Button>
                      </List.Content>
                      <List.Content>
                        <List.Header as="a">Order # 3213212253 </List.Header>
                        <List.Content>Status: Some status</List.Content>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content floated="right">
                        <Button color="blue">View Order</Button>
                      </List.Content>
                      <List.Content>
                        <List.Header as="a">Order # 3213212253 </List.Header>
                        <List.Content>Status: Some status</List.Content>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content floated="right">
                        <Button color="blue">View Order</Button>
                      </List.Content>
                      <List.Content>
                        <List.Header as="a">Order # 3213212253 </List.Header>
                        <List.Content>Status: Some status</List.Content>
                      </List.Content>
                    </List.Item>
                  </List>
                </Container>
              </ListGroup>
            </Card>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default DashboardContent;
