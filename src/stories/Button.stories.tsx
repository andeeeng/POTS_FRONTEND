import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs'
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonApp from '../components/Button'
import { ListGroupItem } from 'react-bootstrap'

export default {
  title: 'Button',
  decorators: [withKnobs],
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

const options = {
  Primary: 'primary',
  Secondary: 'secondary',
  Success: 'success',
  Warning: 'warning',
  Danger: 'danger',
  Info: 'info',
  Light: 'light',
  Dark: 'dark',
  Link: 'link',
}

export const ButtonWithKnobs = () => (
  <ListGroupItem>
    <view style={{ margin: 10 }}>
      <ButtonApp
        variant={select('Variant', options, 'primary', '1')}
        size={select(
          'Size',
          { Normal: '', Small: 'sm', Large: 'lg' },
          'sm',
          '1',
        )}
        buttonTitle={text('Text', 'Small Primary', '1')}
        onClick={action('clicked')}
      />
    </view>
    <ButtonApp
      variant={select('Variant', options, 'secondary', '2')}
      size={select('Size', { Normal: '', Small: 'sm', Large: 'lg' }, '', '2')}
      buttonTitle={text('Text', 'Normal Secondary', '2')}
      onClick={action('clicked')}
    />
    <view style={{ margin: 10 }}>
      <ButtonApp
        variant={select('Variant', options, 'success', '3')}
        size={select(
          'Size',
          { Normal: '', Small: 'sm', Large: 'lg' },
          'lg',
          '3',
        )}
        buttonTitle={text('Text', 'Large Success', '3')}
        onClick={action('clicked')}
      />
    </view>
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
