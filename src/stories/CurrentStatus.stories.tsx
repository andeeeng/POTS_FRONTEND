import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

import CurrentStatus from "../components/CurrentStatus";
import CurrentStatusItem from "../components/CurrentStatusItem";
import { status } from "../data/mockData";

export default {
  title: "Current Status"
};

export const currentStatusHeader = () => <CurrentStatus />;
export const withItem = () => <CurrentStatusItem status={status} />;
