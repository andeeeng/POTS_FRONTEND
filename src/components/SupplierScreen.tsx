import React, { Fragment, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import SortBy from '../components/SortBy'
import SupplierList from '../components/SupplierList'
import { POdata } from '../data/MasterListMock'
import { Divider, Input } from 'antd'
import { sort, SearchFilterSupplier } from '../components/helper_functions'

const { Search } = Input

export interface ISupplierScreenProps {
  po?: any
}

const OrderScreen = (props: ISupplierScreenProps) => {
  const [state, setState] = useState({
    sortby: 'name',
    POdata: props.po,
    datasource: [],
    search: '',
  })

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
              SearchFilterSupplier(value, state.POdata, setState, state)
            }
            enterButton
          />
        </div>
        <div className="sort">
          <SortBy state={state} setState={setState} sorts={sort}></SortBy>
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
