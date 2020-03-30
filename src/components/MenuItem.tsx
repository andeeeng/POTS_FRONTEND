import React, { Fragment } from 'react'
import { ListGroupItem } from 'react-bootstrap'

export interface IMenuListProps {
  menuItem?: any
  onClick?: any
}

const MenuList = (props: IMenuListProps) => {
  const { onClick } = props
  return (
    <Fragment>
      {props.menuItem.map((menu: any) => (
        <ListGroupItem onClick={onClick}>{menu.menuOption}</ListGroupItem>
      ))}
    </Fragment>
  )
}

export default MenuList
