/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import CurrentStatus from "../components/CurrentStatus";

const props = {
  title: "Title"
};

describe("Current Status", () => {
  test("renders correctly", () => {
    expect(shallow(<CurrentStatus {...props} />)).toMatchSnapshot();
  });
});
