/**
 * @format
 */

import React from 'react'
import { shallow, mount } from 'enzyme'
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import MasterList from '../components/MasterList'
import { toJS } from 'mobx'

const userInfo = { userLevel: 'Supplier' }
// const state = { status: 'something' }

const store = jest.fn()
const setQuery = jest.fn()
const setState = jest.fn()
const tabState = { selectedSchedID: '1' }
const state = { status: '' }

const props = {
  title: 'MasterList',
  tabState: tabState,
  state: state,
  onClick: () => console.log('Test'),
}

const filterPO = [
  {
    purchaseOrderNo: '001',
    supplier: {
      supplierName: 'Loyal',
      address: {
        building_name: 'building_name',
        street: 'street',
        city: 'city',
        state: 'state',
        zip_code: 'zipcode',
      },
    },
    adminStatus: 'Closed',
    items: [
      {
        deliveryAddress: {
          building_name: 'building_name',
          street: 'street',
          city: 'city',
          state: 'state',
          zip_code: 'zipcode',
        },
        scheduleLine: [
          {
            itemNo: 'itemNo',
            id: 'id',
            description: 'description',
            quantity: 1,
            uom: 'uom',
            unitPrice: 1,
            totalAmount: 1,
            deliveryDateAndTime: 'deliveryDateAndTime',
            delvStatus: null,
          },
        ],
      },
    ],
  },
  {
    purchaseOrderNo: '00444',
    supplier: {
      supplierName: 'Loyal',
      address: {
        building_name: 'building_name',
        street: 'street',
        city: 'city',
        state: 'state',
        zip_code: 'zipcode',
      },
    },
    adminStatus: 'Open',
    items: [
      {
        deliveryAddress: {
          building_name: 'building_name',
          street: 'street',
          city: 'city',
          state: 'state',
          zip_code: 'zipcode',
        },
        scheduleLine: [
          {
            itemNo: 'itemNo',
            id: 'id',
            description: 'description',
            quantity: 1,
            uom: 'uom',
            unitPrice: 1,
            totalAmount: 1,
            deliveryDateAndTime: 'deliveryDateAndTime',
            delvStatus: [
              {
                status: 'Something',
                dateCreated: 'dateCreated',
                timeCreated: 'timeCreated',
              },
            ],
          },
        ],
      },
    ],
  },
]

describe('MasterList', () => {
  test('renders correctly', () => {
    expect(shallow(<MasterList {...props} />)).toMatchSnapshot()
  })
})

describe('filter PO', () => {
  it('filter PO', () => {
    expect(
      shallow(
        <MasterList
          state={{ search: '0' }}
          tabState={tabState}
          setState={setState}
          setQuery={setQuery}
          store={store}
          filterPO={filterPO}
          userInfo={userInfo.userLevel}
        />,
      ),
    ).toMatchSnapshot()
  })

  it('filter PO', () => {
    expect(
      shallow(
        <MasterList
          state={{ search: '0' }}
          tabState={{ ...tabState, tabkey: 'item', collabseKey: '' }}
          setState={setState}
          setQuery={setQuery}
          store={store}
          filterPO={filterPO}
          userInfo={userInfo.userLevel}
        />,
      ),
    ).toMatchSnapshot()
  })

  it('filter PO', () => {
    expect(
      shallow(
        <MasterList
          state={{ search: '0' }}
          tabState={{ ...tabState, tabkey: 'sched', collabseKey: '' }}
          setState={setState}
          setQuery={setQuery}
          store={store}
          filterPO={filterPO}
          userInfo={userInfo.userLevel}
        />,
      ),
    ).toMatchSnapshot()
  })

  it('filter PO', () => {
    expect(
      shallow(
        <MasterList
          state={{ search: '0' }}
          tabState={{ ...tabState, tabkey: 'sched', collabseKey: '' }}
          setState={setState}
          setQuery={setQuery}
          store={store}
          filterPO={filterPO}
          userInfo={userInfo.userLevel}
        />,
      ),
    ).toMatchSnapshot()
  })
})

// describe('Functional test', () => {
//   it('should handle the click event', () => {
//     const onClickEvent = jest.fn()
//     onClickEvent.mockReturnValue('Clicked')
//     const wrapper = shallow(
//       <MasterList
//         state={{ search: '0' }}
//         tabState={{ ...tabState, tabkey: 'sched', collabseKey: '' }}
//         setState={setState}
//         setQuery={setQuery}
//         store={store}
//         filterPO={filterPO}
//         userInfo={userInfo.userLevel}
//         onClick={onClickEvent}
//       />,
//     )
//     wrapper
//       // .findWhere(node => node.prop('itemID') === 'IDtest')
//       .simulate('click')
//     expect(onClickEvent).toHaveBeenCalledWith('clicked')
//   })
// })

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn()

    const button = shallow(
      <MasterList
        onClick={mockCallBack}
        state={{ search: '0' }}
        tabState={{ ...tabState, tabkey: 'sched', collabseKey: '' }}
        setState={setState}
        setQuery={setQuery}
        store={store}
        filterPO={filterPO}
        userInfo={userInfo.userLevel}
      />,
    )
    button
      .findWhere(node => node.prop('itemID') === 'IDtest')
      .at(1)
      .simulate('itemID')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })
})
