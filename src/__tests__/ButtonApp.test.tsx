/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
import ButtonApp from "../components/Button";

const props = {
  size: "sm",
  variant: "secondary",
  buttonTitle: "Save"
};

describe("Button", () => {
  test("renders correctly", () => {
    expect(shallow(<ButtonApp {...props} />)).toMatchSnapshot();
  });
});
