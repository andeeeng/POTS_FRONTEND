import React, { Fragment } from "react";
import { Typography, Select } from "antd";

const { Text } = Typography;
const { Option } = Select;

export interface ISortyBy {
  state: any;
  setState: any;
}

const SortBy = (props: ISortyBy) => {
  const { state, setState } = props;
  const handleChange = (value: any, state: any, setState: any) => {
    setState({
      ...state,
      sortby: value
    });
  };
  return (
    <Fragment>
      <div style={{ marginRight: "10px" }}>
        <Text>Sort By: </Text>
      </div>
      <div>
        <Select
          defaultValue={"date"}
          value={state.sortby}
          style={{ width: 200 }}
          onChange={(value: any) => {
            handleChange(value, state, setState);
          }}
        >
          <Option value="date">Date</Option>
          <Option value="status">Status</Option>
          <Option value="supplier">Supplier</Option>
        </Select>
      </div>
    </Fragment>
  );
};

export default SortBy;
