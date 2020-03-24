import React from 'react'
import { action } from '@storybook/addon-actions'
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonApp from '../components/Button'
import { ListGroupItem } from 'react-bootstrap'

export default {
  title: 'Button',
}

export const ButtonDefault = () => (
  <ListGroupItem>
    <ButtonApp
      variant="primary"
      buttonTitle="Primary"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="secondary"
      buttonTitle="Secondary"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="success"
      buttonTitle="Succes"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="warning"
      buttonTitle="Warning"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="danger"
      buttonTitle="Danger"
      onClick={action('clicked')}
    />
    <ButtonApp variant="info" buttonTitle="Info" onClick={action('clicked')} />
    <ButtonApp
      variant="light"
      buttonTitle="Light"
      onClick={action('clicked')}
    />
    <ButtonApp variant="dark" buttonTitle="Dark" onClick={action('clicked')} />
    <ButtonApp variant="link" buttonTitle="Link" onClick={action('clicked')} />
  </ListGroupItem>
)
export const ButtonOutline = () => (
  <ListGroupItem>
    <ButtonApp
      variant="outline-primary"
      buttonTitle="Primary"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="outline-secondary"
      buttonTitle="Secondary"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="outline-success"
      buttonTitle="Succes"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="outline-warning"
      buttonTitle="Warning"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="outline-danger"
      buttonTitle="Danger"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="outline-info"
      buttonTitle="Info"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="outline-light"
      buttonTitle="Light"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="outline-dark"
      buttonTitle="Dark"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="outline-link"
      buttonTitle="Link"
      onClick={action('clicked')}
    />
  </ListGroupItem>
)
export const ButtonWithSize = () => (
  <ListGroupItem>
    <ButtonApp
      variant="primary"
      buttonTitle="Small Primary"
      size="sm"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="secondary"
      buttonTitle="Large Secondary"
      size="lg"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="success"
      buttonTitle="Large Succes"
      size="sm"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="warning"
      buttonTitle="Large Warning"
      size="lg"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="danger"
      buttonTitle="Large Danger"
      size="sm"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="info"
      buttonTitle="Large Info"
      size="lg"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="light"
      buttonTitle="Large Light"
      size="sm"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="dark"
      buttonTitle="Large Dark"
      size="lg"
      onClick={action('clicked')}
    />
    <ButtonApp
      variant="link"
      buttonTitle="Large Link"
      size="sm"
      onClick={action('clicked')}
    />
  </ListGroupItem>
)

ButtonDefault.story = {
  parameters: {
    notes: 'Simple Button with different variant of colors',
  },
}

ButtonOutline.story = {
  parameters: {
    notes: 'Outlined Button with different variant of colors',
  },
}

ButtonWithSize.story = {
  parameters: {
    notes: 'Simple Button with different variant of colors and Sizes',
  },
}
