import React, { Fragment, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import SortBy from '../components/SortBy'
import MasterList from '../components/MasterList'
import { POdata } from '../data/MasterListMock'
import { Divider, Input } from 'antd'
import { observer } from 'mobx-react'
const { Search } = Input

export interface IOrderScreenProps {
  po?: any
  updateStatus?: any
}
const SearchFilterItem = (
  text: any,
  source: any,
  setState: any,
  state: any,
) => {
  const newData = source.filter((x: any) => {
    const itemData = x.purchaseOrderNo
      ? x.purchaseOrderNo.toUpperCase()
      : ''.toUpperCase()
    const textData = text.toUpperCase()
    return itemData.indexOf(textData) > -1
  })

  setState(() => ({
    ...state,
    datasource: newData,
    search: text,
  }))
}

const OrderScreen = (props: IOrderScreenProps) => {
  const { updateStatus } = props
  const [state, setState] = useState({
    sortby: 'date',
    POdata: props.po,
    datasource: [],
    search: '',
  })

  const sorts = [
    {
      value: 'date',
      desc: 'Date',
    },
    {
      value: 'supp',
      desc: 'Supplier',
    },
    {
      value: 'status',
      desc: 'Status',
    },
  ]
  return (
    <div className="content1orders">
      <div>
        <Divider orientation="left" dashed={true}>
          Masterlist
        </Divider>
      </div>
      <div className="searchandsort">
        <div className="search">
          <Search
            placeholder="input search text"
            onSearch={value => {
              SearchFilterItem(value, state.POdata, setState, state)
            }}
            enterButton
          />
        </div>
        <div className="sort">
          <SortBy state={state} setState={setState} sorts={sorts}></SortBy>
        </div>
      </div>
      <div className="masterlist">
        <MasterList
          filterPO={state.datasource}
          state={state}
          setState={setState}
          updateStatus={updateStatus}></MasterList>
      </div>
    </div>
  )
}

export default observer(OrderScreen)
