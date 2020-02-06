import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import Search from "../components/Search";

export default {
  title: "Search",
  component: Button
};

export const search = () => <Search />;
