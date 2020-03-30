import React from 'react'

import DashboardContent from '../components/DashboardContent'
import Avatar from '../components/Avatar'
import '../App.css'
import { withKnobs, select, text } from '@storybook/addon-knobs'

export default {
  title: 'Dashboard Screen',
  decorators: [withKnobs],
}

export const Default = () => <DashboardContent />

export const UserAvatar = () => (
  <Avatar size={select('Size', [30, 60, 90], 30)}></Avatar>
)
