/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import MasterList from '../components/MasterList'

const tabState = { selectedSchedID: '1' }
const state = { status: 'something' }

const props = {
  title: 'MasterList',
  tabState: tabState,
  state: state,
}

describe('MasterList', () => {
  test('renders correctly', () => {
    expect(
      shallow(<MasterList {...props} tabState={tabState} state={state} />),
    ).toMatchSnapshot()
  })
})
