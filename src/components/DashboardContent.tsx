import React, { Fragment, useState } from 'react'
import {
  Calendar,
  List,
  Avatar,
  Typography,
  Card,
  Divider,
  Button,
  Drawer,
} from 'antd'
import moment from 'moment'
import InfiniteScroll from 'react-infinite-scroller'
import StatusItem from './StatusItem'
import { statusReport, poList } from '../data/mockData'
import PoStatus from './PoStatus'
import StatusReportList from './Status'
export interface IDashboardContentProps {
  status?: any
  list?: any
}

const DashboardContent = (props: IDashboardContentProps) => {
  const format = 'YYYY-MM-DD'
  const { status, list } = props
  const [state, setState] = useState({
    visible: false,
    selectedDate: moment().format(format),
  })
  const { Title, Text } = Typography
  const data = [
    {
      title: 'ORDER NUMBER 1',
      date: '2020-02-23',
    },

    {
      title: 'ORDER NUMBER 2',
      date: '2020-02-20',
    },
    {
      title: 'ORDER NUMBER 3',
      date: '2020-02-20',
    },
    {
      title: 'ORDER NUMBER 4',
      date: '2020-02-20',
    },
    {
      title: 'ORDER NUMBER 5',
      date: '2020-02-19',
    },
    {
      title: 'ORDER NUMBER 6',
      date: '2020-02-21',
    },
    {
      title: 'ORDER NUMBER 7',
      date: '2020-02-21',
    },
  ]
  console.log(list, 'ARRAYLIST')
  const filterbydate = list.filter(
    (x: any) =>
      moment(x.documentDate).format('MMMM D, YYYY') ==
      moment(state.selectedDate).format('MMMM D, YYYY'),
  )

  const onChange = (value: any) => {
    setState({
      ...state,
      selectedDate: value.format(format),
    })
  }

  const showDrawer = () => {
    setState({
      ...state,
      visible: true,
    })
  }

  const onClose = () => {
    setState({
      ...state,
      visible: false,
    })
  }

  const load = () => {
    return console.log('LOAD')
  }
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
                    backgroundColor: '#3182CE',
                    color: '#63B3ED',
                    marginRight: '10px',
                  }}
                />
              </div>
              <div>
                <Title
                  level={2}
                  style={{ margin: 0, paddingTop: '5px', color: '#3182CE' }}>
                  Welcome Back, Admin!
                </Title>
                <Text>Tour last log-in was:</Text>
                <br></br>
                <Text>January 12, 2020 14:33 GST</Text>
              </div>
            </div>
            <div>
              <Text style={{ float: 'right' }}>
                Today is 02/30/2020 0839 +GST
              </Text>
            </div>
          </div>
          <div>
            <Divider orientation="left" dashed={true}>
              Recent Updates
            </Divider>
          </div>

          <div className="banner">
            <Card
              style={{
                width: 300,
                borderColor: 'white',
                marginRight: 100,
              }}>
              <text style={{ marginLeft: 20 }}>
                Here are updates on our goodies
              </text>
              <div className="statusItem">
                <StatusItem status={statusReport} />
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
              onChange={onChange}
              // onPanelChange={value => console.log(value?._i, "VALUE")}
            />
          </div>
          <div className="list">
            <InfiniteScroll
              initialLoad={false}
              pageStart={0}
              loadMore={() => console.log('LOAD MORE')}
              // hasMore={!this.state.loading && this.state.hasMore}
              useWindow={false}>
              <List
                itemLayout="horizontal"
                dataSource={filterbydate}
                renderItem={(item: any) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a> PO# {item.purchaseOrderNo}</a>}
                      description={
                        <div>
                          <Text>
                            Document Date:{' '}
                            {moment(item.documentDate).format('MMMM D, YYYY')}
                          </Text>
                        </div>
                      }
                    />

                    <List.Item>
                      <Button type="primary" onClick={showDrawer}>
                        View Order
                      </Button>
                    </List.Item>
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </div>
        </div>
      </div>
      {/* <div className="truck"></div> */}
      <div className="content2">WIDGETS HERE</div>
      <Drawer
        title="Purchase Order Details"
        width={640}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={state.visible}>
        <p>Some Purchase Order Details...</p>
        <p>Some Purchase Order Details...</p>
        <p>Some Purchase Order Details...</p>
      </Drawer>
    </Fragment>
  )
}

export default DashboardContent
