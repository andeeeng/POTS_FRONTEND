import React from "react";
import { Card, ListGroup, Nav } from "react-bootstrap";
import MenuList from "./MenuItem";
import AppTitle from "./AppTitle";

export interface IAdminMenuProps {
  title?: any;
  desc?: any;
}

const AdminMenu = (props: IAdminMenuProps) => {
  const { title, desc } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <AppTitle title={title} desc={desc} />
      <ListGroup>
        <Nav.Item>
          <Nav.Link href="">
            <MenuList menuOption="My Dashboard" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">
            <MenuList menuOption="My Orders" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">
            <MenuList menuOption="My Suppliers" />
          </Nav.Link>
        </Nav.Item>
      </ListGroup>
    </Card>
  );
};

export default AdminMenu;
