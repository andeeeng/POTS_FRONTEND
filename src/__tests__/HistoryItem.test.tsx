/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
import HistoryItem from "../components/HistoryItem";

const hisList = [
  {
    key: 1,
    hisItem: "Some History"
  },
  {
    key: 2,
    hisItem: "Some History"
  }
];

describe("History Item", () => {
  test("renders correctly", () => {
    expect(
      shallow(<HistoryItem list={hisList} buttonTitle="View" />)
    ).toMatchSnapshot();
  });
});
