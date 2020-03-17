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
  state?: any
  setState?: any
  store?: any
  setQuery?: any
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
  const {
    store,
    setQuery,
    po,
    state: mainState,
    setState: mainSetState,
  } = props
  const [state, setState] = useState({
    sortby: 'date',
    POdata: po,
    status: 'Ready to Ship',
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
          store={store}
          setQuery={setQuery}
          filterPO={state.datasource}
          tabState={mainState}
          tabSetState={mainSetState}
          state={state}
          setState={setState}></MasterList>
      </div>
    </div>
  )
}

export default observer(OrderScreen)
