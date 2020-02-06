import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import StatusItem from "../components/StatusItem";
import StatusList from "../components/StatusList";

export default {
  title: "Status List",
  component: Button
};

export const Text = () => <StatusList />;
