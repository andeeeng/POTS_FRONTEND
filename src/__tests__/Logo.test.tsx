/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import Logo from '../components/Logo'

const props = {
  title: 'Logo',
}

describe('Logo', () => {
  test('renders correctly', () => {
    expect(shallow(<Logo {...props} />)).toMatchSnapshot()
  })
})
