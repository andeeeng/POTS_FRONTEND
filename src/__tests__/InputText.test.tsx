/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
import InputText from "../components/InputText";

describe("Input Text Form", () => {
  test("renders correctly", () => {
    expect(
      shallow(
        <InputText type="text" title="With Label" label="This is Label:" />
      )
    ).toMatchSnapshot();
  });
});
