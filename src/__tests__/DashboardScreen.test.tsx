/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import DashboardScreen from '../components/DashboardScreen'

const props = {
  title: 'Dashboard Screen',
}

describe('Dashboard Screen', () => {
  test('renders correctly', () => {
    expect(shallow(<DashboardScreen {...props} />)).toMatchSnapshot()
  })
})
