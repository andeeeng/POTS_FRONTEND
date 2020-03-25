/**
 * @format
 */

import React from 'react'
import { shallow } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import {
  showContent,
  handleClick,
  itemStatusColor,
  changewidth,
  handleChange,
  statusColor,
  updateStatus,
} from '../components/helper_functions'

const props = {
  title: 'helper_funtions',
}

describe('showContent function', () => {
  it('return DBcontent', () => {
    expect(showContent('dashboard', 'dashboard', 'key', 'DBcontent')).toEqual(
      'dashboard',
    )
  })
  it('return POcontent', () => {
    expect(showContent('order', 'key', 'order', 'POcontent')).toEqual('order')
  })
  it('return SUPcontent', () => {
    expect(showContent('supplier', 'key', 'SUPcontent', 'supplier')).toEqual(
      'supplier',
    )
  })
  it('return null', () => {
    expect(showContent('something', '_', '_', '_')).toEqual(undefined)
  })
})

describe('handleClick function', () => {
  it('return dashboard', () => {
    const setState = jest.fn()
    const state = { currentKey: '', path: '' }

    handleClick('dashboard', state, setState)
    expect(setState).toBeCalled()
  })
  it('return order', () => {
    const setState = jest.fn()
    const state = { currentKey: '', path: '' }

    handleClick('order', state, setState)
    expect(setState).toBeCalled()
  })
  it('return supplier', () => {
    const setState = jest.fn()
    const state = { currentKey: '', path: '' }

    handleClick('supplier', state, setState)
    expect(setState).toBeCalled()
  })
  it('return null', () => {
    const setState = jest.fn()
    const state = { currentKey: '', path: '' }

    expect(handleClick('something', state, setState)).toEqual(undefined)
  })
})

describe('itemStatusColor function', () => {
  it('return On-going', () => {
    expect(itemStatusColor('On-going', 'On-going', 'status')).toEqual('orange')
  })
  it('return Complete', () => {
    expect(itemStatusColor('Complete', 'Complete', 'status')).toEqual('green')
  })
  it('return Not Started', () => {
    expect(itemStatusColor('Not Started', 'Not Started', 'status')).toEqual(
      'red',
    )
  })
  it('return null', () => {
    expect(itemStatusColor('something', '_', '_')).toEqual(undefined)
  })
})

describe('changewidth function', () => {
  it('return changewidth', () => {
    expect(changewidth('item', 'item', 'key')).toEqual('orderitemtablemax')
  })
  it('return null', () => {
    expect(changewidth('orderitemtable', '_', '_')).toEqual('orderitemtable')
  })
})

describe('handleChange function', () => {
  it('return dashboard', () => {
    const setState = jest.fn()
    const state = { status: '' }

    handleChange('1', state, setState)
    expect(setState).toBeCalled()
  })
  it('return order', () => {
    const setState = jest.fn()
    const state = { status: '' }

    handleChange('3', state, setState)
    expect(setState).toBeCalled()
  })
  it('return supplier', () => {
    const setState = jest.fn()
    const state = { status: '' }

    handleChange('2', state, setState)
    expect(setState).toBeCalled()
  })
  it('return null', () => {
    const setState = jest.fn()
    const state = { status: '' }

    expect(handleChange('something', state, setState)).toEqual(undefined)
  })
})

describe('statusColor function', () => {
  it('return Closed', () => {
    expect(statusColor('Closed')).toEqual('#f50')
  })
  it('return Open', () => {
    expect(statusColor('Open')).toEqual('#87d068')
  })
})
