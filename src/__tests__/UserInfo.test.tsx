/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
import UserInfo from "../components/UserInfo";

const props = {
  user: "Mark Nabablit",
  date: "February 5, 2020"
};

describe("User Info", () => {
  test("renders correctly", () => {
    expect(shallow(<UserInfo {...props} />)).toMatchSnapshot();
  });
});
