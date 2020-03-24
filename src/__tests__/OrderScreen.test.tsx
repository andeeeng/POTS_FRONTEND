/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import OrderScreen from '../components/OrderScreen'

const props = {
  title: 'Order Screen',
}

describe('Order Screen', () => {
  test('renders correctly', () => {
    expect(shallow(<OrderScreen {...props} />)).toMatchSnapshot()
  })
})
