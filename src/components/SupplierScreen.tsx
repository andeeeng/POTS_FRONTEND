import React, { Fragment, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import SortBy from '../components/SortBy'
import SupplierList from '../components/SupplierList'
import { POdata } from '../data/MasterListMock'
import { Divider, Input } from 'antd'
const { Search } = Input

export interface ISupplierScreenProps {
  po?: any
}

const SearchFilterItem = (
  text: any,
  source: any,
  setState: any,
  state: any,
) => {
  const newData = source.filter((x: any) => {
    const itemData = x.supplier.supplierName
      ? x.supplier.supplierName.toUpperCase()
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

const OrderScreen = (props: ISupplierScreenProps) => {
  const [state, setState] = useState({
    sortby: 'name',
    POdata: props.po,
    datasource: [],
    search: '',
  })

  const sorts = [
    {
      value: 'name',
      desc: 'Name',
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
          Supplier Master List
        </Divider>
      </div>
      <div className="searchandsort">
        <div className="search">
          <Search
            // value={state.search}
            // onChange={value => console.log(value., 'SEARCH value')}
            placeholder="input search text"
            onSearch={value =>
              SearchFilterItem(value, state.POdata, setState, state)
            }
            enterButton
          />
        </div>
        <div className="sort">
          <SortBy state={state} setState={setState} sorts={sorts}></SortBy>
        </div>
      </div>
      <div className="masterlist">
        <SupplierList
          filtredPO={state.datasource}
          state={state}
          setState={setState}></SupplierList>
      </div>
    </div>
  )
}

export default OrderScreen
