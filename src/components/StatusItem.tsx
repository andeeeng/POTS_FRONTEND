import React from "react";
import { Label, Table, Divider } from "semantic-ui-react";
import StatusList from "../components/StatusList";

const yellow = ["yellow", "pink", "red"];
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
  title?: any;
}

const StatusItem = (props: IStatusItemProps) => {
  const {
    OR,
    label,
    status,
    label3,
    number,
    statOption,
    statuslist,
    title
  } = props;
  return (
    <div>
      <StatusList />
      {props.statuslist.map((list: any) => (
        <Table.Row>
          <Label size="big" style={{ marginLeft: 20 }} color="green">
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
