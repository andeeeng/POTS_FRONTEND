import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import StatusItem from "../components/StatusItem";

export default {
  title: "Status Item",
  component: Button
};

export const Text = () => (
  <StatusItem
    OR="3"
    label="Orders Received"
    label2="Released from supplier"
    label3="On-hold from supplier"
  />
);
