import _ from 'lodash'

import React from 'react'
import { Search, Grid } from 'semantic-ui-react'

export interface ISearchProps {
  onSearch?: any
}
const SearchComponent = (props: ISearchProps) => {
  const { onSearch } = props
  return (
    <Grid>
      <Grid.Column width={6}>
        <Search fluid onSearchChange={onSearch} />
      </Grid.Column>
    </Grid>
  )
}

export default SearchComponent
