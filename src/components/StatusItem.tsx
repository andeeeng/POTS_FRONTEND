import React from "react";
import { ListGroup, ListGroupItem, Badge } from "react-bootstrap";

export interface IStatusItemProps {
  number?: any;
  statOption?: any;
}

const StatusItem = (props: IStatusItemProps) => {
  const { number, statOption } = props;
  return (
    <ListGroup>
      <ListGroupItem>
        <div>
          <h2>
            <Badge variant="secondary">{number}</Badge> {statOption}
          </h2>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};

export default StatusItem;
