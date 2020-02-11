import React, { Component, useState } from "react";
import { Accordion, Form, Menu, Icon } from "semantic-ui-react";
import AccordionContent from "./AccordionContent";

export interface IAccordionComponentProps {}

const AccordionComponent = (props: IAccordionComponentProps) => {
  const Content = <AccordionContent />;

  const rootPanels = [
    {
      title: "OTN: 202001D777 by Air Supplier",
      content: { content: Content }
    },
    {
      title: "OTN: 202001E3288 by What-a-supplies",
      content: { content: Content }
    },
    {
      title: "OTN: 202001E0999 by SuppliersHub",
      content: { content: Content }
    },
    {
      title: "OTN: 202001E3288 by What-a-supplies",
      content: { content: Content }
    }
  ];

  return <Accordion defaultActiveIndex={0} panels={rootPanels} styled fluid />;
};

export default AccordionComponent;
