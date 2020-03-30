import React from 'react'
import { Button } from 'react-bootstrap'

export interface IButtonAppProps {
  variant?: any
  size?: any
  buttonTitle?: any
  onClick?: any
}

const ButtonApp = (props: IButtonAppProps) => {
  const { variant, size, buttonTitle, onClick } = props
  return (
    <Button variant={variant} size={size} onClick={onClick}>
      {buttonTitle}
    </Button>
  )
}

export default ButtonApp
