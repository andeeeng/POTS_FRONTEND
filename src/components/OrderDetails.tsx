import React, { Component, useState } from "react";
import { Accordion, Form, Menu, List, Card } from "semantic-ui-react";

import HeaderTitle from "../components/HeaderTitle";
import OrderDetailsItem from "../components/OrderDetailsItem";

export interface IOrderDetailsProps {
  header?: any;
  order?: any;
}

const OrderDetails = (props: IOrderDetailsProps) => {
  const { header, order } = props;
  return (
    <List relaxed>
      <HeaderTitle header="Order Details" />
    </List>
  );
};

export default OrderDetails;
