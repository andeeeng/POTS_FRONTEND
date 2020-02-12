import _ from "lodash";

import React, { Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";

export interface ISearchProps {}
const SearchComponent = (props: ISearchProps) => {
  return (
    <Grid>
      <Grid.Column width={6}>
        <Search fluid />
      </Grid.Column>
    </Grid>
  );
};

export default SearchComponent;
