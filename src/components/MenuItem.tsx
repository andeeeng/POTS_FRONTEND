import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export interface IMenuListProps {
  menuOption?: any;
}

const MenuList = (props: IMenuListProps) => {
  const { menuOption } = props;
  return (
    <ListGroup>
      <ListGroupItem>{menuOption}</ListGroupItem>
    </ListGroup>
  );
};

export default MenuList;
