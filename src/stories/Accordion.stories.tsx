import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'

import AccordionComponent from '../components/Accordion'

export default {
  title: 'Accordion',
}

export const Accordion = () => (
  <AccordionComponent onClick={action('Selected')} />
)
