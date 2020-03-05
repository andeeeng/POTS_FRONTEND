import React, { Fragment, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import {
  Button,
  Table,
  Collapse,
  Timeline,
  Card,
  Tag,
  Typography,
  Tabs,
  Select,
  Empty,
} from 'antd'
import { observer } from 'mobx-react'
const { Panel } = Collapse
const { Text, Title } = Typography
const { TabPane } = Tabs
const { Option } = Select
export interface IMasterList {
  state: any
  setState: any
}

const MasterList = (props: IMasterList) => {
  const { state, setState } = props
  const [row, setRow] = useState({
    selectedSchedID: '',
    tabkey: '1',
    status: 'Ready to Ship',
  })

  const status = [
    {
      value: '1',
      desc: 'Ready to Ship',
    },
    {
      value: '2',
      desc: 'Delivered',
    },
    {
      value: '3',
      desc: 'On the Logistics Facility',
    },
  ]

  const item_columns = [
    {
      title: 'Item No',
      dataIndex: 'itemNo',
      key: 'itemNo',
    },
    {
      title: 'ProductID',
      dataIndex: 'productId',
      key: 'productId',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Qty',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'UoM',
      dataIndex: 'uom',
      key: 'uom',
    },
    {
      title: 'Unit Price',
      dataIndex: 'unitPrice',
      key: 'unitPrice',
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
      key: 'discount',
    },
    {
      title: 'Total Amout',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
    },
  ]

  const sched_columns = [
    {
      title: 'Delivery Schedule',
      dataIndex: 'deliveryDateAndTime',
      key: 'deliveryDateAndTime',
    },

    {
      title: 'Delivery Address',
      dataIndex: 'delvAddress',
      key: 'delvAddress',
    },

    {
      title: 'Item No',
      dataIndex: 'itemNo',
      key: 'itemNo',
    },

    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Qty',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'UoM',
      dataIndex: 'uom',
      key: 'uom',
    },
    {
      title: 'Unit Price',
      dataIndex: 'unitPrice',
      key: 'unitPrice',
    },
    {
      title: 'Total Amout',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
    },
  ]
  console.log(state, 'LAMAN NG STATE')

  const handleChange = (value: any, state: any, setState: any) => {
    setState({
      ...state,
      sortby: value,
    })
  }

  const renderHistoryPanel = (activekey: any, data: any) => {
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
                  console.log(row.selectedSchedID, 'LENGHT')

                  if (data.delvStatus.length != 0) {
                    return data.delvStatus.map((sched: any) => {
                      return (
                        <Timeline.Item>
                          {sched.status} {sched.dateCreated} {sched.timeCreated}
                        </Timeline.Item>
                      )
                    })
                  } else {
                    return (
                      // <Timeline.Item color="red">
                      //   NO STATUS UPDATE
                      // </Timeline.Item>
                      <Empty></Empty>
                    )
                  }
                })}
              </Timeline>
            </InfiniteScroll>
          </Card>
        </div>

        <div className="history2">
          <div style={{ marginTop: '5px', marginRight: '2px' }}>
            <Select
              defaultValue={'status'}
              value={row.status}
              style={{ width: 200 }}
              onChange={(value: any) => {
                handleChange(value, row, setRow)
              }}>
              {status.map((items: any) => (
                <Option value={items.value}>{items.desc}</Option>
              ))}
            </Select>
          </div>
          <div style={{ marginTop: '5px' }}>
            <Button type="primary">Update Status</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Fragment>
      <Collapse
        defaultActiveKey={['0']}
        // expandIconPosition={expandIconPosition}
      >
        {state.POdata.map((data: any, index: any) => {
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
            })
          })

          const schedById = schedarray.filter(x => x.id == row.selectedSchedID)

          return (
            <Panel
              header={`PO# ${data.purchaseOrderNo} by  ${data.supplier.supplierName}`}
              key={index}
              extra={<Tag color={data.color}>{data.adminStatus}</Tag>}>
              <div className="panel">
                <div className="orderitemtable">
                  <Tabs
                    type="card"
                    onChange={key => setRow({ ...row, tabkey: key })}>
                    <TabPane tab="Item Details" key="1">
                      <div style={{ marginBottom: '10px' }}>
                        <Title level={4}> Order Details</Title>
                        <div className="tableTitledesc">
                          <div>
                            <Text>Address: </Text>
                            <br></br>
                            {/* <Text>Deliver To: </Text> */}
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
                            {/* <Text>{data.deliverTo}</Text> */}
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
                    <TabPane tab="Delivery Schedule" key="2">
                      <InfiniteScroll
                        initialLoad={false}
                        pageStart={0}
                        loadMore={() => console.log('LOAD MORE')}
                        // hasMore={!this.state.loading && this.state.hasMore}
                        useWindow={false}>
                        <Table
                          onRow={(record, rowIndex) => {
                            return {
                              onClick: event => {}, // click row
                              onDoubleClick: event => {}, // double click row
                              onContextMenu: event => {}, // right button click row
                              onMouseEnter: event => {
                                setRow({ ...row, selectedSchedID: record.id })
                              }, // mouse enter row
                              onMouseLeave: event => {}, // mouse leave row
                            }
                          }}
                          // bodyStyle={{ margin: '20px' }}
                          columns={sched_columns}
                          dataSource={schedarray}
                          pagination={false}
                        />
                      </InfiniteScroll>
                    </TabPane>
                  </Tabs>
                </div>
                {renderHistoryPanel(row.tabkey, schedById)}
              </div>
            </Panel>
          )
        })}
      </Collapse>
    </Fragment>
  )
}

export default observer(MasterList)
