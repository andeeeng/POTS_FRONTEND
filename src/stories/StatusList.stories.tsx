import React from "react";
import { Button } from "@storybook/react/demo";
import StatusList from "../components/StatusList";
import { statuslist } from "../data/mockData";

export default {
  title: "Status List"
};

export const statusList = () => <StatusList />;
export const withData = () => <StatusItem statuslist={statuslist} />;
