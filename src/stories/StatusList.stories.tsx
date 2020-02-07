import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import StatusItem from "../components/StatusItem";
import StatusList from "../components/StatusList";
import { statuslist } from "../data/mockData";

export default {
  title: "Status List"
};

export const statusList = () => <StatusList />;
export const withData = () => <StatusItem statuslist={statuslist} />;
