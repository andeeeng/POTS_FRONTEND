/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";

// Note: test renderer must be required after react-native.
import Sample from "../components/Sample";

describe("Button", () => {
  test("renders correctly", () => {
    expect(shallow(<Sample></Sample>)).toMatchSnapshot();
  });
});
