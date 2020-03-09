import React from 'react'
import { List, Card } from 'semantic-ui-react'
import OrderDetails from './OrderDetails'
export interface IOrderDetailsItemProps {
  order?: any
}

const OrderDetailsItem = (props: IOrderDetailsItemProps) => {
  return (
    <List relaxed>
      <OrderDetails />
      {props.order.map((orders: any) => (
        <Card.Group style={{ marginLeft: 10 }}>
          <Card color="red" style={{ padding: 10 }}>
            {orders.title}
          </Card>
        </Card.Group>
      ))}
    </List>
  )
}

export default OrderDetailsItem
