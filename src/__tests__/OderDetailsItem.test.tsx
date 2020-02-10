/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import OrderDetailsItem from "../components/OrderDetailsItem";

const props = {
  title: "Title"
};

describe("Order Details Item", () => {
  test("renders correctly", () => {
    expect(shallow(<OrderDetailsItem {...props} />)).toMatchSnapshot();
  });
});
