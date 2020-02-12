import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

import OrderDetails from "../components/OrderDetails";
import OrderDetailsItem from "../components/OrderDetailsItem";

export default {
  title: "Order Details"
};

const order = [
  {
    title: "Some order item"
  },
  {
    title: "Some order item"
  },
  {
    title: "Some order item"
  },
  {
    title: "Some order item"
  },
  {
    title: "Some order item"
  }
];

export const orderDetails = () => <OrderDetails />;
export const items = () => <OrderDetailsItem order={order} />;
