/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
import StatusItem from '../components/StatusItem'

const props = {
  statuslist: [
    {
      color: 'red',
      number: '69',
      statOption: 'pending',
    },
    {
      color: 'red',
      number: '69',
      statOption: 'pending',
    },
    {
      color: 'red',
      number: '69',
      statOption: 'pending',
    },
  ],
}

describe(' Status Item', () => {
  test('renders correctly', () => {
    expect(
      shallow(<StatusItem {...props} status={props.statuslist} />),
    ).toMatchSnapshot()
  })
})
