/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";

import OrderDetailsItem from "../components/OrderDetailsItem";

const props = {
  order: [
    {
      title: "Some order item"
    },
    {
      title: "Some order item"
    },
    {
      title: "Some order item"
    },
    {
      title: "Some order item"
    },
    {
      title: "Some order item"
    }
  ]
};

describe("Order Details Item", () => {
  test("renders correctly", () => {
    expect(shallow(<OrderDetailsItem {...props} />)).toMatchSnapshot();
  });
});
