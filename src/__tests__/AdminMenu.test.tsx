/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
import AdminMenu from "../components/AdminMenu";

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

describe("Admin Menu", () => {
  test("renders correctly", () => {
    expect(shallow(<AdminMenu {...props} />)).toMatchSnapshot();
  });
});
