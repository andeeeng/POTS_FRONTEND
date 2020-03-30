import React, { Fragment } from 'react'
import ButtonApp from './Button'
import { ListGroupItem, Row, Col } from 'react-bootstrap'
import { List } from 'semantic-ui-react'

export interface IHistoryItemProps {
  list?: any
  buttonTitle?: any
  onClick?: any
}

const HistoryItem = (props: IHistoryItemProps) => {
  const { buttonTitle, onClick } = props
  return (
    <Fragment>
      {props.list.map((h: any) => (
        <List>
          <Row>
            <Col md={2}>{h.hisItem}</Col>
            <Col md={2}>
              <ButtonApp
                buttonTitle={buttonTitle}
                variant="secondary"
                onClick={onClick}
              />
            </Col>
          </Row>
        </List>
      ))}
    </Fragment>
  )
}

export default HistoryItem
