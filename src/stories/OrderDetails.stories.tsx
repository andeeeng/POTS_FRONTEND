import React from "react";

import OrderDetails from "../components/OrderDetails";
import OrderDetailsItem from "../components/OrderDetailsItem";
import { order } from "../data/mockData";

export default {
  title: "Order Details"
};

export const orderDetails = () => <OrderDetails />;
export const items = () => <OrderDetailsItem order={order} />;
