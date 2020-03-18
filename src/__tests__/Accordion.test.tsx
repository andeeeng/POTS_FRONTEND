/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import Accordion from '../components/Accordion'

const props = {
  title: 'Accordion',
}

describe('Accordion', () => {
  test('renders correctly', () => {
    expect(shallow(<Accordion {...props} />)).toMatchSnapshot()
  })
})
