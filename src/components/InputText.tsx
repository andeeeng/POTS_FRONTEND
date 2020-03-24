import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

export interface IInputTextProps {
  size?: any
  type?: any
  title?: any
  label?: any
  onClick?: any
  onChange?: any
}

const InputText = (props: IInputTextProps) => {
  const { size, type, title, label, onClick, onChange } = props
  return (
    <Form>
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="auto">
          {label}
        </Form.Label>
        <Col sm="auto">
          <Form.Control
            size={size}
            type={type}
            placeholder={title}
            onClick={onClick}
            onChange={onChange}
          />
        </Col>
      </Form.Group>
    </Form>
  )
}

export default InputText
