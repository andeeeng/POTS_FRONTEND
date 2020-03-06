import React, { Fragment } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import {
  Table,
  Collapse,
  List,
  Card,
  Tag,
  Typography,
  Descriptions,
  Button,
} from 'antd'
import moment from 'moment'

const { Panel } = Collapse
const { Text, Title } = Typography

export interface ISortyBy {
  state: any
  setState: any
  po?: any
}

const SupplierList = (props: ISortyBy) => {
  const { state, setState } = props

  const filterbysupplier = (po: any, supplierno: any) => {
    console.log(po, 'POTANGINA')
    const filterpo = po.filter((x: any) => x.supplier.supplierNo == supplierno)

    return filterpo
  }

  const distinctSupp = []
  const map = new Map()
  for (const item of state.POdata) {
    if (!map.has(item.supplier.supplierNo)) {
      map.set(item.supplier.supplierNo, true) // set any value to Map
      distinctSupp.push({
        id: item.supplier.id,
        supplierNo: item.supplier.supplierNo,
        contactNo: item.supplier.contactNumber,
        tin: item.supplier.tin,
        contactPerson: item.supplier.contactPerson,
        supplierName: item.supplier.supplierName,
        address:
          item.supplier.address.building_name +
          ' ' +
          item.supplier.address.street +
          ',' +
          item.supplier.address.city +
          ' ' +
          item.supplier.address.state +
          ' ' +
          item.supplier.address.zip_code,
      })
    }
  }
  let selectedSupplier = ''
  return (
    <Fragment>
      <Collapse
        defaultActiveKey={['0']}
        // expandIconPosition={expandIconPosition}
      >
        {distinctSupp.map((data: any, index: any) => {
          selectedSupplier = data.supplierNo
          console.log(selectedSupplier, 'SELECTED SUPP')
          return (
            <Panel
              header={`${data.supplierName}`}
              key={index}
              //   extra={<Tag color={data.color}>{data.status}</Tag>}
            >
              <div className="panel">
                <div className="orderitemtable">
                  <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={() => console.log('LOAD MORE')}
                    // hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}>
                    <Descriptions
                      title="General Details"
                      bordered
                      style={{ width: 700 }}>
                      <Descriptions.Item label="Supplier" span={3}>
                        {data.supplierName}
                      </Descriptions.Item>
                      <Descriptions.Item label="Contact Person" span={2}>
                        {data.contactPerson}
                      </Descriptions.Item>
                      <Descriptions.Item label="Contact Number" span={2}>
                        {data.contactNo}
                      </Descriptions.Item>
                      <Descriptions.Item label="TIN" span={3}>
                        {data.tin}
                      </Descriptions.Item>

                      <Descriptions.Item label="Address">
                        {data.address}
                      </Descriptions.Item>
                    </Descriptions>
                  </InfiniteScroll>

                  <Button style={{ margin: '10px' }} type="primary">
                    Modify Supplier Details
                  </Button>
                </div>
                <div className="history">
                  <Card
                    title="Transaction History"
                    bordered={true}
                    bodyStyle={{ width: 300, height: 270, overflow: 'auto' }}>
                    <InfiniteScroll
                      initialLoad={false}
                      pageStart={0}
                      loadMore={() => console.log('LOAD MORE')}
                      // hasMore={!this.state.loading && this.state.hasMore}
                      useWindow={false}>
                      <List
                        itemLayout="horizontal"
                        dataSource={filterbysupplier(
                          state.POdata,
                          selectedSupplier,
                        )}
                        renderItem={(item: any) => (
                          <List.Item>
                            <List.Item.Meta
                              title={<a> PO# {item.purchaseOrderNo}</a>}
                              description={
                                <div>
                                  <Text>
                                    Document Date:
                                    {moment(item.documentDate).format(
                                      'MMMM D, YYYY',
                                    )}
                                  </Text>
                                </div>
                              }
                            />

                            <List.Item>
                              <Button type="primary">View Order</Button>
                            </List.Item>
                          </List.Item>
                        )}
                      />
                    </InfiniteScroll>
                  </Card>
                </div>
              </div>
            </Panel>
          )
        })}
      </Collapse>
    </Fragment>
  )
}

export default SupplierList
