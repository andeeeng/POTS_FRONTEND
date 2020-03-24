import React from 'react'
import { Card, ListGroup, Nav } from 'react-bootstrap'
import MenuList from './MenuItem'
import AppTitle from './AppTitle'

export interface IAdminMenuProps {
  title?: any
  desc?: any
  menuItem?: any
  onClick?: any
}

const AdminMenu = (props: IAdminMenuProps) => {
  const { title, desc, menuItem, onClick } = props

  return (
    <Card style={{ width: '18rem' }}>
      <AppTitle title={title} desc={desc} />
      <ListGroup>
        <Nav.Item>
          <Nav.Link href="">
            <MenuList menuItem={menuItem} onClick={onClick} />
          </Nav.Link>
        </Nav.Item>
      </ListGroup>
    </Card>
  )
}

export default AdminMenu
