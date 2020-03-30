import React from 'react'

import Logo from '../components/Logo'
import Login from '../components/LoginScreen'
import '../App.css'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Login Screen',
}

export const Default = () => <Login />
export const logo = () => <Logo />
