import { Tag } from 'antd'
import React from 'react'

export const status = [
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
const itemStatusColor = (status: any) => {
  console.log(status, 'COLOR')
  switch (status) {
    case 'On-going':
      return 'orange'
    case 'Complete':
      return 'green'
    case 'Not Started':
      return 'red'
    default:
      break
  }
}
export const sched_columns = [
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
export const item_columns = [
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
  {
    title: 'Status',
    key: 'supplierStatusItem',
    dataIndex: 'supplierStatusItem',
    render: (item: any) => (
      <span>
        <Tag color={itemStatusColor(item)}>{item}</Tag>
      </span>
    ),
  },
]
