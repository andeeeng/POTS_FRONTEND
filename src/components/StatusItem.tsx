import React from "react";

import "semantic-ui-css/semantic.min.css";
import { Icon, Label, List, Grid, Table, Divider } from "semantic-ui-react";
import StatusList from "../components/StatusList";

const yellow = ["yellow"];
const pink = ["pink"];
const red = ["red"];

export interface IStatusItemProps {
  OR?: any;
  label?: any;
  status?: any;
  label3?: any;
  number?: any;
  statOption?: any;
  statuslist?: any;
}

const StatusItem = (props: IStatusItemProps) => {
  const { OR, label, status, label3, number, statOption, statuslist } = props;
  return (
    <div>
      <StatusList />
      {props.statuslist.map((list: any) => (
        <Table.Row>
          <Label circular color="yellow" size="big" style={{ marginLeft: 20 }}>
            {list.OR}
          </Label>

          <text style={{ marginLeft: 10 }}>{list.label}</text>

          <Divider section />
        </Table.Row>
      ))}
    </div>
  );
};

export default StatusItem;
