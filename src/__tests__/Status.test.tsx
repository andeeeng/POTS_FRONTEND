/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
import StatusReportList from "../components/Status";
import StatusList from "../components/StatusList";

const props = {
  title: "Today’s Status",
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

const statusList = {
  title: "Title",
  onPress: () => console.log("Pre")
};

describe("Status Report List", () => {
  test("renders correctly", () => {
    expect(shallow(<StatusReportList {...props} />)).toMatchSnapshot();
  });
});

describe("Status", () => {
  test("renders correctly", () => {
    expect(shallow(<StatusList {...statusList} />)).toMatchSnapshot();
  });
});
