import React from "react";
import { Card } from "react-bootstrap";

export interface IHeaderTitleProps {
  title?: any;
  desc?: any;
}

const HeaderTitle = (props: IHeaderTitleProps) => {
  const { title, desc } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title style={{ fontSize: 100 }}>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HeaderTitle;
