import _ from "lodash";

import React, { Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";

export default class SearchExampleStandard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={6}>
          <Search fluid />
        </Grid.Column>
      </Grid>
    );
  }
}
