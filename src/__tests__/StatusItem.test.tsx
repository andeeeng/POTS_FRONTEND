/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import StatusItem from "../components/StatusItem";

const props = {
  title: "Title"
};

describe(" Status Item", () => {
  test("renders correctly", () => {
    expect(shallow(<StatusItem {...props} />)).toMatchSnapshot();
  });
});
