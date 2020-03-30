import React from 'react'
import { Button } from '@storybook/react/demo'
import StatusList from '../components/StatusList'
import { statuslist } from '../data/mockData'
import StatusItem from '../components/StatusItem'

export default {
  title: 'Status List',
}

export const statusList = () => <StatusList />
export const withData = () => <StatusItem status={statuslist} />

statusList.story = {
  parameters: {
    notes: 'Header Text',
  },
}

withData.story = {
  parameters: {
    notes: 'Simple Text',
  },
}
