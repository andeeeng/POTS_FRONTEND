/**
 * @format
 */

import React from 'react'
import { shallow, mount } from 'enzyme'
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
  onClick: () => console.log('Test'),
}

describe('MasterList', () => {
  test('renders correctly', () => {
    expect(
      shallow(<MasterList {...props} tabState={tabState} state={state} />),
    ).toMatchSnapshot()
  })
})

describe('Functional Tests', () => {
  it('calls the onButtonPress method', () => {
    const onPressEvent = jest.fn()
    onPressEvent.mockReturnValue('onClick')
    const wrapper = shallow(<MasterList onClick={onPressEvent} />)
    wrapper
      .findWhere(node => node.prop('itemID') === 'IDtest')
      .simulate('onclick')
    expect(onPressEvent.mock.calls.length).toBe(1)
  })
})
