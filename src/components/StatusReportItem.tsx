import React, { Fragment } from 'react'
import { ListGroupItem, Badge } from 'react-bootstrap'

export interface IStatusReportItemProps {
  status?: any
  onCLick?: any
}

const StatusReportItem = (props: IStatusReportItemProps) => {
  const { onCLick } = props
  return (
    <Fragment>
      {props.status.map((stat: any) => (
        <ListGroupItem>
          <h2>
            <Badge variant="secondary" onClick={onCLick}>
              {stat.number}
            </Badge>{' '}
            {stat.statOption}
          </h2>
        </ListGroupItem>
      ))}
    </Fragment>
  )
}

export default StatusReportItem
