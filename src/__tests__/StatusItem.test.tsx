/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
import StatusItem from "../components/StatusItem";

const props = {
  statuslist: [
    {
      OR: "3",
      label: "Orders Received"
    },
    {
      OR: "7",
      label: "Released from supplier "
    },
    {
      OR: "4",
      label: "On-hold from supplier"
    }
  ]
};

describe(" Status Item", () => {
  test("renders correctly", () => {
    expect(shallow(<StatusItem {...props} />)).toMatchSnapshot();
  });
});
