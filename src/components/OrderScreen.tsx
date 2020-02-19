import React, { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  Typography,
  Table,
  Divider,
  Input,
  Select,
  Collapse,
  Timeline,
  Card,
  Tag
} from "antd";
import { poList } from "../data/mockData";
const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;
const { Panel } = Collapse;

const OrderScreen = (props: any) => {
  const columns = [
    {
      title: "Item No.",
      dataIndex: "itemNo",
      key: "itemNo"
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description"
    },
    {
      title: "Qunatity",
      dataIndex: "quantity",
      key: "quantity"
    },
    {
      title: "Unit",
      dataIndex: "uom",
      key: "uom"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency"
    }
  ];

  const data = [
    {
      itemno: "00001",
      desc: "The quick brown fox jump over the fence",
      qty: 5,
      uom: "PCS"
    },
    {
      itemno: "00001",
      desc: "The quick brown fox jump over the fence",
      qty: 5,
      uom: "PCS"
    },
    {
      itemno: "00001",
      desc: "The quick brown fox jump over the fence",
      qty: 5,
      uom: "PCS"
    },
    {
      itemno: "00001",
      desc: "The quick brown fox jump over the fence",
      qty: 5,
      uom: "PCS"
    },
    {
      itemno: "00001",
      desc: "The quick brown fox jump over the fence",
      qty: 5,
      uom: "PCS"
    },
    {
      itemno: "00001",
      desc: "The quick brown fox jump over the fence",
      qty: 5,
      uom: "PCS"
    },
    {
      itemno: "00001",
      desc: "The quick brown fox jump over the fence",
      qty: 5,
      uom: "PCS"
    },
    {
      itemno: "00001",
      desc: "The quick brown fox jump over the fence",
      qty: 5,
      uom: "PCS"
    },
    {
      itemno: "00001",
      desc: "The quick brown fox jump over the fence",
      qty: 5,
      uom: "PCS"
    },
    {
      itemno: "00001",
      desc: "The quick brown fox jump over the fence",
      qty: 5,
      uom: "PCS"
    }
  ];
  return (
    <div className="content1orders">
      <div>
        <Divider orientation="left" dashed={true}>
          Masterlist
        </Divider>
      </div>
      <div className="searchandsort">
        <div className="search">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
          />
        </div>
        <div className="sort">
          <div style={{ marginRight: "10px" }}>
            <Text>Sort By: </Text>
          </div>
          <div>
            <Select
              defaultValue="lucy"
              style={{ width: 200 }}

              // onChange={x => console.log(x)}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>

          {/* <div>
         
          </div> */}
        </div>
      </div>
      <div className="masterlist">
        <Collapse
          defaultActiveKey={["0"]}
          // onChange={callback}
          // expandIconPosition={expandIconPosition}
        >
          {props.po.map((p: any, i: any) => {
            return (
              <Panel
                header={
                  <Text>
                    {p.id} {"BY"} {p.supplier.name}
                  </Text>
                }
                key={i}
                extra={<Tag color="green">Current Status</Tag>}
              >
                <div className="panel">
                  <div className="orderitemtable">
                    <InfiniteScroll
                      initialLoad={false}
                      pageStart={0}
                      loadMore={() => console.log("LOAD MORE")}
                      // hasMore={!this.state.loading && this.state.hasMore}
                      useWindow={false}
                    >
                      <Table
                        columns={columns}
                        dataSource={p.items}
                        pagination={false}
                      />
                    </InfiniteScroll>
                  </div>
                  <div className="history">
                    <Card
                      title="Status History"
                      bordered={true}
                      // style={{ width: au }}
                    >
                      <Timeline>
                        <Timeline.Item>On The Way</Timeline.Item>
                        <Timeline.Item>Loaded in truck</Timeline.Item>
                        <Timeline.Item>Items Packed</Timeline.Item>
                        <Timeline.Item>Item Arrived on Plant</Timeline.Item>
                      </Timeline>
                    </Card>
                  </div>
                </div>
              </Panel>
            );
          })}
        </Collapse>
      </div>
    </div>
  );
};

export default OrderScreen;
