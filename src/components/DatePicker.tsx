import React from 'react'

import { DatePicker } from 'antd'
import moment from 'moment'
//import "antd/dist/antd.css";
// import "../App.css";

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']

export interface IDatePickerComponentProps {
  onChange?: any
}
const DatePickerComponent = (props: IDatePickerComponentProps) => {
  const { onChange } = props
  return (
    <div className="date">
      <DatePicker
        defaultValue={moment('01/01/2015', dateFormatList[0])}
        format={dateFormatList}
        onChange={onChange}
      />
    </div>
  )
}

export default DatePickerComponent
