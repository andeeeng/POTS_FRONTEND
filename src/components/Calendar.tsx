import React, { Fragment } from 'react'
import { Calendar } from 'antd'

export interface IDatePickerProps {
  onChange?: any
}

const DatePicker = (props: IDatePickerProps) => {
  const { onChange } = props
  function onPanelChange(value: any, mode: any) {
    console.log(value, mode)
  }
  return (
    <div className="site-calendar-demo-card">
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        onChange={onChange}
      />
    </div>
  )
}

export default DatePicker
