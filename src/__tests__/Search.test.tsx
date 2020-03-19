/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import Search from '../components/Search'

const props = {
  title: 'Search',
}

describe('Search', () => {
  test('renders correctly', () => {
    expect(shallow(<Search {...props} />)).toMatchSnapshot()
  })
})
