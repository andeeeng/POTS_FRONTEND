/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import Avatar from '../components/Avatar'

const props = {
  title: 'Avatar',
}

describe('Avatar', () => {
  test('renders correctly', () => {
    expect(shallow(<Avatar {...props} />)).toMatchSnapshot()
  })
})
