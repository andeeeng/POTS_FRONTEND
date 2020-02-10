/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import StatusList from "../components/StatusList";

const props = {
  title: "Title"
};

describe(" Status List", () => {
  test("renders correctly", () => {
    expect(shallow(<StatusList {...props} />)).toMatchSnapshot();
  });
});
