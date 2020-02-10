import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "@storybook/react/demo";
import StatusItem from "../components/StatusItem";
import { statuslist } from "../data/mockData";

export default {
  title: "Status Item",
  component: Button
};

export const Text = () => <StatusItem statuslist={statuslist} />;
