import React from 'react'

import OrderDetails from '../components/OrderDetails'
import OrderDetailsItem from '../components/OrderDetailsItem'
import { order } from '../data/mockData'
import { action } from '@storybook/addon-actions'
import DatePickerComponent from '../components/DatePicker'

export default {
  title: 'Date Picker',
}

export const datepicker = () => (
  <DatePickerComponent onChange={action('Changed!')} />
)
