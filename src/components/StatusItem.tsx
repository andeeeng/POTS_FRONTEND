import React from "react";
import { Label, Table, Divider, List } from "semantic-ui-react";
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
      <text style={{ marginLeft: 50 }}>Here are updates on our goodies</text>
      <List>
        <List.Item>
          <Label
            size="big"
            style={{ marginBottom: 10, marginTop: 20 }}
            color="blue"
          >
            3
          </Label>
          <text style={{ marginLeft: 10 }}>Orders Received</text>
        </List.Item>
        <List.Item>
          <Label size="big" style={{ marginBottom: 10 }} color="green">
            20
          </Label>
          <text style={{ marginLeft: 10 }}>Released from Supplier</text>
        </List.Item>
        <List.Item>
          <Label size="big" style={{}} color="brown">
            10
          </Label>
          <text style={{ marginLeft: 10 }}>Cancelled by Supplier</text>
        </List.Item>
      </List>
    </div>
  );
};

export default StatusItem;
