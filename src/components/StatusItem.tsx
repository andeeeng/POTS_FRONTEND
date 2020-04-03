import React, { Fragment } from 'react'
import { Label, List } from 'semantic-ui-react'

export interface IStatusItemProps {
  OR?: any
  label?: any
  status?: any
  label3?: any
  number?: any
  statOption?: any
  statuslist?: any
  title?: any
}

const StatusItem = (props: IStatusItemProps) => {
  const { status } = props
  return (
    <Fragment>
      {status.map((stat: any) => (
        <div>
          <List.Item>
            <Label
              size="big"
              style={{ marginBottom: 10, marginTop: 20 }}
              color={stat.color}>
              {stat.number}
            </Label>
            <text style={{ marginLeft: 28 }}>{stat.statOption}</text>
          </List.Item>
        </div>
      ))}
    </Fragment>
  )
}

export default StatusItem
