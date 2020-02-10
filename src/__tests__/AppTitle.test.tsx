/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
import AppTitle from "../components/AppTitle";

const props = {
  title: "Title",
  desc: "Purchase Order Tracking System",
  menuItem: [
    {
      id: 1,
      menuOption: "Dashboard"
    },
    {
      id: 2,
      menuOption: "Orders"
    },
    {
      id: 3,
      menuOption: "Supplier"
    }
  ]
};

describe("App Title", () => {
  test("renders correctly", () => {
    expect(
      shallow(<AppTitle title="POTS" desc="Purchase Order Tracking System" />)
    ).toMatchSnapshot();
  });
});
