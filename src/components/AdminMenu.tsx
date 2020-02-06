import React from "react";
import { Card, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import MenuList from "./MenuList";
import HeaderTitle from "./HeaderTitle";

export interface IAdminMenuProps {
  title?: any;
  desc?: any;
}

const AdminMenu = (props: IAdminMenuProps) => {
  const { title, desc } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <HeaderTitle title={title} desc={desc} />
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
