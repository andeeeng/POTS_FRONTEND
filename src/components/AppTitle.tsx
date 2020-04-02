import React from 'react'
import { Card } from 'react-bootstrap'

export interface IAppTitleProps {
  title?: any
  desc?: any
  onClick?: any
}

const AppTitle = (props: IAppTitleProps) => {
  const { title, desc, onClick } = props
  return (
      <Card style={{ width: '18rem' }} onClick={onClick}>
        <Card.Body>
          <Card.Title style={{ fontSize: 80 }}>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
  )
}

export default AppTitle
