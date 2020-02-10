/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import HeaderTitle from "../components/HeaderTitle";

const props = {
  title: "Title"
};

describe("Header Title", () => {
  test("renders correctly", () => {
    expect(shallow(<HeaderTitle {...props} />)).toMatchSnapshot();
  });
});
