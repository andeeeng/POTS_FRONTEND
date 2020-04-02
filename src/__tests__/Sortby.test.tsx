/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import SortBy from '../components/SortBy'

const props = {
  title: 'SortBy',
  sortby: {
    test: 'any',
  },
}
const sorts = [{}]
describe('SortBy', () => {
  test('renders correctly', () => {
    expect(shallow(<SortBy state={props} sorts={sorts} />)).toMatchSnapshot()
  })
})
