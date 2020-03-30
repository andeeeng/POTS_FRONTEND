import React from 'react'
import { action } from '@storybook/addon-actions'
import Search from '../components/Search'
import { withKnobs, select } from '@storybook/addon-knobs'

export default {
  title: 'Search',
  decorators: [withKnobs],
}

const sizeOptions = {
  Small: 'small',
  Big: 'big',
  Huge: 'huge',
  Large: 'large',
  Massive: 'massive',
  Mini: 'mini',
  Tiny: 'tiny',
}

export const search = () => (
  <Search
    onSearch={action('Change')}
    size={select('Size', sizeOptions, 'small')}
  />
)

search.story = {
  parameters: {
    notes: 'Simple Search Bar',
  },
}
