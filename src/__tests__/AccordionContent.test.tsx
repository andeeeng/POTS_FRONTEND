/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import AccordionContent from '../components/AccordionContent'

const props = {
  title: 'Accordion',
}

describe('Accordion Content', () => {
  test('renders correctly', () => {
    expect(shallow(<AccordionContent {...props} />)).toMatchSnapshot()
  })
})
