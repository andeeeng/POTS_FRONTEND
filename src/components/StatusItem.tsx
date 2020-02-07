import React from "react";

import "semantic-ui-css/semantic.min.css";
import { Label, Table, Divider } from "semantic-ui-react";

const yellow = ["yellow"];
const pink = ["pink"];
const red = ["red"];

export interface IStatusItemProps {
  OR?: any;
  label?: any;
  label2?: any;
  label3?: any;
}

const StatusItem = (props: IStatusItemProps) => {
  const { OR, label, label2, label3 } = props;
  return (
    <div>
      {yellow.map(color => (
        <Table.Row>
          <Label color={yellow} size="big">
            {OR}
          </Label>

          <text style={{ marginLeft: 10 }}>{label}</text>

          <Divider section />
        </Table.Row>
      ))}
      {yellow.map(color => (
        <Table.Row>
          <Label color={pink} size="big">
            {OR}
          </Label>

          <text style={{ marginLeft: 10 }}>{label2}</text>

          <Divider section />
        </Table.Row>
      ))}
      {yellow.map(color => (
        <Table.Row>
          <Label color={red} size="big">
            {OR}
          </Label>

          <text style={{ marginLeft: 10 }}>{label3}</text>

          <Divider section />
        </Table.Row>
      ))}
    </div>
  );
};

export default StatusItem;
