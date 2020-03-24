import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputText from '../components/InputText'
import { Container } from 'react-bootstrap'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Forms',
}

export const SingleLineFormStoriesWithSize = () => (
  <Container>
    <InputText
      size="sm"
      type="text"
      title="Small"
      onClick={action('Selected')}
      onChange={action('Input')}
    />
    <br />
    <InputText
      type="text"
      title="Normal"
      onClick={action('Selected')}
      onChange={action('Input')}
    />
    <br />
    <InputText
      size="lg"
      type="text"
      title="Large"
      onClick={action('Selected')}
      onChange={action('Input')}
    />
    <br />
    <InputText
      type="text"
      title="With Label"
      label="This is Label:"
      onClick={action('Selected')}
      onChange={action('Input')}
    />
  </Container>
)
