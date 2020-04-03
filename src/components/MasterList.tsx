import {
  Button,
  Card,
  Collapse,
  Empty,
  Select,
  Table,
  Tabs,
  Tag,
  Timeline,
  Typography,
} from 'antd'
import { observer } from 'mobx-react'
import React, { Fragment } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { item_columns, sched_columns, status } from '../table-fields/columns'
import { updateStatus } from './helper_functions'
const { Panel } = Collapse
const { Text, Title } = Typography
const { TabPane } = Tabs
const { Option } = Select
export interface IMasterList {
  state?: any
  setState?: any
  tabState?: any
  tabSetState?: any
  filterPO?: any
  store?: any
  setQuery?: any
  userInfo?: any
  title?: any
  userLevel?: any
}

const MasterList = (props: IMasterList) => {
  const {
    store,
    setQuery,
    state,
    setState,
    tabState,
    tabSetState,
    filterPO,
    userLevel,
  } = props

  const handleChange = (value: any, state: any, setState: any) => {
    const status = (key: any) => {
      switch (key) {
        case '1':
          return 'Ready to Ship'
        case '3':
          return 'On the Logistics Facility'
        case '2':
          return 'Delivered'
        default:
          break
      }
    }
    setState({
      ...state,
      status: status(value),
    })
  }

  const linesched = {
    id: tabState.selectedSchedID,
    deliveryStatus: {
      status: state.status,
    },
  }

  const renderUpdateStatus = (key: any) => {
    if (key === 'sched' && userLevel === 'Supplier') {
      return (
        <div className="history2">
          <div style={{ marginTop: '5px', marginRight: '2px' }}>
            <Select
              defaultValue={'status'}
              value={state.status}
              style={{ width: 200 }}
              onChange={(value: any) => {
                handleChange(value, state, setState)
              }}>
              {status.map((items: any) => (
                <Option value={items.value}>{items.desc}</Option>
              ))}
            </Select>
          </div>
          <div style={{ marginTop: '5px' }}>
            <Button
              type="primary"
              onClick={() => {
                updateStatus(linesched, store, setQuery)
              }}>
              Update Status
            </Button>
          </div>
        </div>
      )
    }
  }

  const renderHistoryPanel = (activekey: any, data: any) => {
    if (activekey === 'sched') {
      return (
        <div className="history">
          <div className="history1">
            <Card
              title="Status History"
              bordered={true}
              bodyStyle={{ width: 300, height: 270, overflow: 'auto' }}>
              <InfiniteScroll
                initialLoad={false}
                pageStart={0}
                loadMore={() => console.log('LOAD MORE')}
                // hasMore={!this.state.loading && this.state.hasMore}
                useWindow={false}>
                <Timeline mode="left">
                  {data.map((data: any, index: any) => {
                    if (data.delvStatus.length !== 0) {
                      return data.delvStatus.map((sched: any) => {
                        return (
                          <Timeline.Item>
                            {sched.status} {sched.dateCreated}{' '}
                            {sched.timeCreated}
                          </Timeline.Item>
                        )
                      })
                    } else {
                      return <Empty></Empty>
                    }
                  })}
                </Timeline>
              </InfiniteScroll>
            </Card>
          </div>
          {renderUpdateStatus(activekey)}
        </div>
      )
    }
  }
  const callback = (key: any) => {
    tabSetState({ ...tabState, collapseKey: key })
  }
  const statusColor = (status: any) => {
    if (status === 'Closed') {
      return '#f50'
    }
    if (status === 'Open') {
      return '#87d068'
    }
  }

  console.log(filterPO, 'FILTERED')
  let data: Array<any> = []
  if (state.search) {
    data = filterPO
  } else {
    data = state.POdata
  }
  return (
    <Fragment>
      <Collapse
        defaultActiveKey={[tabState.collapseKey]}
        activeKey={tabState.collapseKey}
        onChange={callback}>
        {data.map((data: any, index: any) => {
          let schedarray: Array<any> = []
          data.items.map((item: any) => {
            const delv_address =
              item.deliveryAddress.building_name +
              ' ' +
              item.deliveryAddress.street +
              ',' +
              item.deliveryAddress.city +
              ' ' +
              item.deliveryAddress.state +
              ' ' +
              item.deliveryAddress.zip_code

            item.scheduleLine.map((sched: any) => {
              schedarray.push({
                itemNo: item.itemNo,
                id: sched.id,
                delvAddress: delv_address,
                description: item.description,
                quantity: sched.quantity,
                uom: sched.uom,
                unitPrice: sched.unitPrice,
                totalAmount: sched.totalAmount,
                deliveryDateAndTime: sched.deliveryDateAndTime,
                delvStatus: sched.deliveryStatus,
              })
              return null
            })

            return null
          })

          const schedById = schedarray.filter(
            x => x.id === tabState.selectedSchedID,
          )
          const changewidth = (key: any) => {
            switch (key) {
              case 'item':
                return 'orderitemtablemax'

              default:
                return 'orderitemtable'
            }
          }

          return (
            <Panel
              header={`PO# ${data.purchaseOrderNo} by  ${data.supplier.supplierName}`}
              key={index}
              extra={
                <Tag color={statusColor(data.adminStatus)}>
                  {data.adminStatus}
                </Tag>
              }>
              <div className="panel">
                <div className={changewidth(tabState.tabkey)}>
                  <Tabs
                    activeKey={tabState.tabkey}
                    defaultActiveKey={tabState.tabkey}
                    type="card"
                    onChange={key => tabSetState({ ...tabState, tabkey: key })}>
                    <TabPane tab="Item Details" key="item">
                      <div style={{ marginBottom: '10px' }}>
                        <Title level={4}> Order Details</Title>
                        <div className="tableTitledesc">
                          <div>
                            <Text>Address: </Text>
                            <br></br>
                          </div>
                          <div>
                            <Text>
                              {data.supplier.address.building_name}{' '}
                              {data.supplier.address.street}{' '}
                              {data.supplier.address.city}{' '}
                              {data.supplier.address.state}{' '}
                              {data.supplier.address.zip_code}{' '}
                            </Text>
                            <br></br>
                          </div>
                        </div>
                      </div>
                      <InfiniteScroll
                        initialLoad={false}
                        pageStart={0}
                        loadMore={() => console.log('LOAD MORE')}
                        // hasMore={!this.state.loading && this.state.hasMore}
                        useWindow={false}>
                        <Table
                          // bodyStyle={{ margin: '20px' }}
                          onRow={(record: any, rowIndex) => {
                            return {
                              onClick: event => {}, // click row
                              onDoubleClick: event => {}, // double click row
                              onContextMenu: event => {}, // right button click row
                              onMouseEnter: event => {
                                // setRow({ ...row, selectedSchedID: record.id })
                              }, // mouse enter row
                              onMouseLeave: event => {}, // mouse leave row
                            }
                          }}
                          columns={item_columns}
                          dataSource={data.items}
                          pagination={false}
                        />
                      </InfiniteScroll>
                    </TabPane>
                    <TabPane tab="Delivery Schedule" key="sched">
                      <InfiniteScroll
                        initialLoad={false}
                        pageStart={0}
                        selected={tabState.selectedSchedID}
                        loadMore={() => console.log('LOAD MORE')}
                        // hasMore={!this.state.loading && this.state.hasMore}
                        useWindow={false}>
                        <Table
                          onRow={(record, rowIndex) => {
                            return {
                              onClick: event => {
                                tabSetState({
                                  ...tabState,
                                  selectedSchedID: record.id,
                                })
                              }, // click row
                              onDoubleClick: event => {}, // double click row
                              onContextMenu: event => {}, // right button click row
                              onMouseEnter: event => {}, // mouse enter row
                              onMouseLeave: event => {}, // mouse leave row
                            }
                          }}
                          rowKey={(record: any) => record.uid}
                          // bodyStyle={{ margin: '20px' }}
                          columns={sched_columns}
                          dataSource={schedarray}
                          pagination={false}
                        />
                      </InfiniteScroll>
                    </TabPane>
                  </Tabs>
                </div>
                {renderHistoryPanel(tabState.tabkey, schedById)}
              </div>
            </Panel>
          )
        })}
      </Collapse>
    </Fragment>
  )
}

export default observer(MasterList)
