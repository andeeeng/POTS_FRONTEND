/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import CurrentStatusItem from "../components/CurrentStatusItem";

const props = {
  title: "Title"
};

describe("Current Status Item", () => {
  test("renders correctly", () => {
    expect(shallow(<CurrentStatusItem {...props} />)).toMatchSnapshot();
  });
});
