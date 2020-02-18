<<<<<<< HEAD
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
=======
import React, { Fragment } from "react";
import { Container, Col, Row } from "react-bootstrap";
import DatePicker from "./Calendar";
import PoStatus from "./PoStatus";
import StatusReportList from "./Status";
import { Calendar, List, Avatar, Typography, Card, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroller";
>>>>>>> ce16e47859c560b7aef04475627f7f3b63ceb882

export interface IDashboardContentProps {
  status?: any;
  list?: any;
}

const DashboardContent = (props: IDashboardContentProps) => {
  const { status, list } = props;
  const { Title, Text } = Typography;
  const data = [
    {
      title: "Ant Design Title 1"
    },
    {
      title: "Ant Design Title 2"
    },
    {
      title: "Ant Design Title 3"
    },
    {
      title: "Ant Design Title 1"
    },
    {
      title: "Ant Design Title 2"
    },
    {
      title: "Ant Design Title 3"
    },
    {
      title: "Ant Design Title 1"
    },
    {
      title: "Ant Design Title 2"
    },
    {
      title: "Ant Design Title 3"
    },
    {
      title: "Ant Design Title 1"
    },
    {
      title: "Ant Design Title 2"
    },
    {
      title: "Ant Design Title 3"
    },
    {
      title: "Ant Design Title 4"
    },
    {
      title: "Ant Design Title 1"
    },
    {
      title: "Ant Design Title 2"
    },
    {
      title: "Ant Design Title 3"
    },
    {
      title: "Ant Design Title 4"
    }
  ];

  const load = () => {
    return console.log("LOAD");
  };
  return (
<<<<<<< HEAD
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
=======
    <Fragment>
      <div className="content1">
        <div className="status">
          <div className="avatar">
            <div className="rows">
              <div>
                <Avatar
                  size={100}
                  icon="user"
                  style={{
                    backgroundColor: "#3182CE",
                    color: "#63B3ED",
                    marginRight: "10px"
                  }}
                />
              </div>
              <div>
                <Title
                  level={2}
                  style={{ margin: 0, paddingTop: "5px", color: "#3182CE" }}
                >
                  Welcome Back, Admin!
                </Title>
                <Text>Tour last log-in was:</Text>
                <br></br>
                <Text>January 12, 2020 14:33 GST</Text>
              </div>
            </div>
            <div>
              <Text style={{ float: "right" }}>
                Today is 02/30/2020 0839 +GST
              </Text>
            </div>
          </div>
          <div>
            <Divider orientation="left" dashed={true}>
              Recent Updates
            </Divider>
          </div>
          <div className="statuslist">
            <Card
              bordered={true}
              style={{
                padding: 10,
                paddingTop: 5,
                width: 300,
                borderColor: "#805AD5",
                borderWidth: 1.5,
                backgroundColor: "Transparent"
              }}
            >
              <div style={{ paddingBottom: 20, paddingTop: 0, marginTop: 0 }}>
                <Text style={{ fontSize: 20 }}>
                  Here are the updates on our Goodies!
                </Text>
              </div>

              <div className="statusItem">
                <div>
                  <Text strong style={{ fontSize: 20, color: "#4299E1" }}>
                    5
                  </Text>
                </div>
                <div>
                  <Text style={{ fontSize: 20 }}>Orders Received</Text>
                </div>
              </div>
              <div className="statusItem">
                <div>
                  <Text strong style={{ fontSize: 20, color: "#68D391" }}>
                    20
                  </Text>
                </div>
                <div>
                  <Text style={{ fontSize: 20 }}>Released from Supplier</Text>
                </div>
              </div>
              <div className="statusItem">
                <div>
                  <Text strong style={{ fontSize: 20, color: "#9C4221" }}>
                    10
                  </Text>
                </div>
                <div>
                  <Text style={{ fontSize: 20 }}>Cancelled by Supplier</Text>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div>
          <Divider orientation="left" dashed={true}>
            Order Calendar Summary
          </Divider>
        </div>

        <div className="calendar">
          <div className="calendar1">
            <Calendar
              fullscreen={false}
              onPanelChange={value => console.log(value, "MODE")}
            />
          </div>
          <div className="list">
            <InfiniteScroll
              initialLoad={false}
              pageStart={0}
              loadMore={() => console.log("LOAD MORE")}
              // hasMore={!this.state.loading && this.state.hasMore}
              useWindow={false}
            >
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </div>
        </div>
      </div>
      <div className="content2">WIDGETS HERE</div>
    </Fragment>
>>>>>>> ce16e47859c560b7aef04475627f7f3b63ceb882
  );
};

export default DashboardContent;
