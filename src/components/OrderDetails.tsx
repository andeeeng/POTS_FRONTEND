import React from 'react'
import { List } from 'semantic-ui-react'
import HeaderTitle from '../components/HeaderTitle'

export interface IOrderDetailsProps {
  header?: any
  order?: any
  title?: any
}

const OrderDetails = (props: IOrderDetailsProps) => {
  return (
    <List relaxed>
      <HeaderTitle header="Order Details" />
    </List>
  )
}

export default OrderDetails
