import React, { Component, useState } from "react";
import { Accordion, Form, Menu, Icon } from "semantic-ui-react";

export interface IAccordionComponentProps {}

const AccordionComponent = (props: IAccordionComponentProps) => {
  const Level1Content = (
    <div style={{ marginLeft: 15 }}>Welcome to level 1</div>
  );

  const Level2Content = (
    <div style={{ marginLeft: 15 }}>Welcome to level 2</div>
  );

  const rootPanels = [
    {
      title: "OTN: 202001D777 by Air Supplier",
      content: { content: Level1Content }
    },
    {
      title: "OTN: 202001E3288 by What-a-supplies",
      content: { content: Level2Content }
    },
    {
      title: "OTN: 202001E0999 by SuppliersHub",
      content: { content: Level2Content }
    },
    {
      title: "OTN: 202001E3288 by What-a-supplies",
      content: { content: Level2Content }
    }
  ];

  return <Accordion defaultActiveIndex={0} panels={rootPanels} styled fluid />;
};

export default AccordionComponent;
