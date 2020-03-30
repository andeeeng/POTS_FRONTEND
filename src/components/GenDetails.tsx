import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import ButtonApp from './Button'

export interface IGenDetailsProps {
  list?: any
  title?: any
  buttonTitle?: any
  onClick?: any
}

const GenDetails = (props: IGenDetailsProps) => {
  const { title, buttonTitle, onClick } = props
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {props.list.map((d: any) => (
          <ListGroupItem>{d.detail}</ListGroupItem>
        ))}
      </ListGroup>
      <Card.Body>
        <ButtonApp
          buttonTitle={buttonTitle}
          variant="secondary"
          onClick={onClick}
        />
      </Card.Body>
    </Card>
  )
}

export default GenDetails
