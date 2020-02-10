import React from "react";

import styled from "styled-components";
import StatusItem from "./StatusItem";
import HeaderTitle from "../components/HeaderTitle";

export interface IStatusListProps {}
const StatusList = (props: IStatusListProps) => {
  return (
    <div style={{ marginLeft: 20, marginTop: 10 }}>
      <HeaderTitle header="Status List" />
    </div>
  );
};

export default StatusList;
