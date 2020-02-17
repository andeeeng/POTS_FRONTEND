import React, { Fragment } from "react";
import { Container, Col, Row } from "react-bootstrap";
import DatePicker from "./Calendar";
import PoStatus from "./PoStatus";
import StatusReportList from "./Status";
import { Calendar, List, Avatar, Typography, Card, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroller";

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
  );
};

export default DashboardContent;
