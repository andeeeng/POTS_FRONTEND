/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
import StatusReportItem from "../components/StatusReportItem";

const props = {
  status: [
    {
      id: 1,
      number: "3",
      statOption: "Orders Received"
    },
    {
      id: 2,
      number: "7",
      statOption: "Released from supplier"
    },
    {
      id: 3,
      number: "2",
      statOption: "On-hold from supplier"
    }
  ]
};

describe("Status Report Item", () => {
  test("renders correctly", () => {
    expect(shallow(<StatusReportItem {...props} />)).toMatchSnapshot();
  });
});
