import React, { Fragment } from "react";
import { ListGroupItem } from "react-bootstrap";

export interface IMenuListProps {
  menuItem?: any;
}

const MenuList = (props: IMenuListProps) => {
  return (
    <Fragment>
      {props.menuItem.map((menu: any) => (
        <ListGroupItem>{menu.menuOption}</ListGroupItem>
      ))}
    </Fragment>
  );
};

export default MenuList;
