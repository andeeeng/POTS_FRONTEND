import React from "react";

import styled from "styled-components";
import StatusItem from "./StatusItem";
import { Header } from "semantic-ui-react";

export interface IHeaderTitleProps {
  header?: any;
  title?: any;
  desc?: any;
}

const HeaderTitle = (props: IHeaderTitleProps) => {
  const { header, title, desc } = props;
  return (
    <div style={{ marginLeft: 20, marginTop: 10, marginBottom: 20 }}>
      <Header size="huge">{header}</Header>
    </div>
  );
};

export default HeaderTitle;
