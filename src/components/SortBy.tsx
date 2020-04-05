import React, { Fragment, useState } from 'react'
import { Typography, Select, DatePicker, Radio, Button } from 'antd'
import moment from 'moment'

const { Text } = Typography
const { Option } = Select
const { RangePicker } = DatePicker
export interface ISortyBy {
  state?: any
  setState?: any
  sorts?: any
  title?: any
  sortby?: any
}

const SortBy = (props: ISortyBy) => {
  const { state, setState, sorts, sortby } = props
  const [suppliers, setSupp] = useState({
    sortby: '',
  })
  const dateFormat = 'MMMM D, YYYY'

  const handleChange = (value: any, state: any, setState: any) => {
    setState({
      ...state,
      sortby: value,
    })
  }
  const renderFilter = (sortby: string) => {
    switch (sortby) {
      case 'date':
        return (
          <RangePicker
            defaultValue={[
              moment(moment().format(dateFormat), dateFormat),
              moment(moment().format(dateFormat), dateFormat),
            ]}
            format={dateFormat}
          />
        )
      case 'status':
        return (
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">Open</Radio.Button>
            <Radio.Button value="b">Closed</Radio.Button>
          </Radio.Group>
        )

      case 'supp':
        return (
          <Select
            defaultValue={'status'}
            value={suppliers.sortby}
            style={{ width: 200 }}
            onChange={(value: any) => {
              handleChange(value, suppliers, setSupp)
            }}>
            {sorts.map((items: any) => (
              <Option value={items.value}>{items.desc}</Option>
            ))}
          </Select>
        )
      case 'name':
        return (
          <Select
            defaultValue={'status'}
            value={suppliers.sortby}
            style={{ width: 200 }}
            onChange={(value: any) => {
              handleChange(value, suppliers, setSupp)
            }}>
            {sorts.map((items: any) => (
              <Option value={items.value}>{items.desc}</Option>
            ))}
          </Select>
        )

      default:
        return <div></div>
    }
  }
  return (
    <Fragment>
      <div style={{ marginRight: '10px' }}>
        <Text>Filter By: </Text>
      </div>
      <div style={{ marginRight: '10px' }}>
        <Select
          defaultValue={'status'}
          value={state.sortby}
          style={{ width: 200 }}
          onChange={(value: any) => {
            handleChange(value, state, setState)
          }}>
          {sorts.map((items: any) => (
            <Option value={items.value}>{items.desc}</Option>
          ))}
        </Select>
      </div>
      <div style={{ marginRight: '10px' }}>{renderFilter(state.sortby)}</div>
      <div>
        <Button>Clear Filter</Button>
      </div>
    </Fragment>
  )
}

export default SortBy
