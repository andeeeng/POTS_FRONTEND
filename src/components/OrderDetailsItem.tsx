import React, { Component, useState } from "react";
import { Accordion, Form, Menu, List, Card } from "semantic-ui-react";

import HeaderTitle from "../components/HeaderTitle";
import OrderDetails from "./OrderDetails";
export interface IOrderDetailsItemProps {
  title?: any;
  order?: any;
}

const OrderDetailsItem = (props: IOrderDetailsItemProps) => {
  const { title, order } = props;
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
  );
};

export default OrderDetailsItem;
