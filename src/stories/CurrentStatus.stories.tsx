import React from 'react'
import CurrentStatus from '../components/CurrentStatus'
import CurrentStatusItem from '../components/CurrentStatusItem'
import { status } from '../data/mockData'
import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'Current Status',
}

export const currentStatusHeader = () => <CurrentStatus />
export const withItem = () => <CurrentStatusItem status={status} />
