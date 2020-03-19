import React, { Fragment } from 'react'
import { Calendar } from 'antd'

const DatePicker = () => {
  function onPanelChange(value: any, mode: any) {
    console.log(value, mode)
  }
  return (
    <div className="site-calendar-demo-card">
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  )
}

export default DatePicker
