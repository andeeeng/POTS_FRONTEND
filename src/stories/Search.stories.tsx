import React from 'react'
import { action } from '@storybook/addon-actions'
import Search from '../components/Search'

export default {
  title: 'Search',
}

export const search = () => <Search onSearch={action('Change')} />

search.story = {
  parameters: {
    notes: 'Simple Search Bar',
  },
}
