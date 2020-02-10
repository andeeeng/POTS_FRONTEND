/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
import GenDetails from "../components/GenDetails";

const genDetailList = [
  {
    key: 1,
    detail: "This is first details"
  },
  {
    key: 2,
    detail: "This is second details"
  }
];

describe("General Details", () => {
  test("renders correctly", () => {
    expect(
      shallow(
        <GenDetails
          buttonTitle="Modify Supplier Detail"
          list={genDetailList}
          title="General Details"
        />
      )
    ).toMatchSnapshot();
  });
});
