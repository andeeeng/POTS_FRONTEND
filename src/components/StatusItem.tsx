import React from "react";

import "semantic-ui-css/semantic.min.css";
import { Icon, Label, List, Grid, Table, Divider } from "semantic-ui-react";

const yellow = ["yellow"];
const pink = ["pink"];
const red = ["red"];

export default class StatusItem extends React.Component {
  render() {
    return (
      <div>
        {yellow.map(color => (
          <Table.Row>
            <Label color={yellow} size="big">
              {this.props.OR}
            </Label>

            <text style={{ marginLeft: 10 }}>{this.props.label}</text>

            <Divider section />
          </Table.Row>
        ))}
        {yellow.map(color => (
          <Table.Row>
            <Label color={pink} size="big">
              {this.props.OR}
            </Label>

            <text style={{ marginLeft: 10 }}>{this.props.label2}</text>

            <Divider section />
          </Table.Row>
        ))}
        {yellow.map(color => (
          <Table.Row>
            <Label color={red} size="big">
              {this.props.OR}
            </Label>

            <text style={{ marginLeft: 10 }}>{this.props.label3}</text>

            <Divider section />
          </Table.Row>
        ))}
      </div>
    );
    //   <Table celled collapsing>
    //     <Table.Body>

    //       {yellow.map(color => (
    //         <Table.Row>
    //           <Table.Cell>
    //             <Label color={pink}>{this.props.OR}</Label>
    //           </Table.Cell>
    //           <Table.Cell>{this.props.label}</Table.Cell>
    //         </Table.Row>
    //       ))}
    //       {yellow.map(color => (
    //         <Table.Row>
    //           <Table.Cell>
    //             <Label color={red}>{this.props.OR}</Label>
    //           </Table.Cell>
    //           <Table.Cell>{this.props.label}</Table.Cell>
    //         </Table.Row>
    //       ))}
    //     </Table.Body>
    //   </Table>
    // );
  }
}

// {yellow.map(color => (
//     <List.Item>
//       <Label circular color={yellow}>
//         {this.props.OR}
//       </Label>
//       {this.props.label}
//     </List.Item>
//   ))}
//   {yellow.map(color => (
//     <List.Item>
//       <Label circular color={pink}>
//         {this.props.OR}
//       </Label>
//       {this.props.label2}
//     </List.Item>
//   ))}
//   {yellow.map(color => (
//     <List.Item>
//       <Label circular color={red}>
//         {this.props.OR}
//       </Label>
//       {this.props.label}
//     </List.Item>
//   ))}
