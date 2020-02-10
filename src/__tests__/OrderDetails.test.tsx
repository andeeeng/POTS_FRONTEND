/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import OrderDetails from "../components/OrderDetails";

const props = {
  title: "Title"
};

describe("Order Details", () => {
  test("renders correctly", () => {
    expect(shallow(<OrderDetails {...props} />)).toMatchSnapshot();
  });
});
