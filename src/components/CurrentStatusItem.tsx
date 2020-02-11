import React from "react";
import { Card, Feed } from "semantic-ui-react";
import CurrentStatus from "./CurrentStatus";

export interface ICurrentStatusitemProps {
  status?: any;
}

const CurrentStatusItem = (props: ICurrentStatusitemProps) => {
  return (
    <Card style={{ maxHeight: 370, overflow: "auto" }}>
      <CurrentStatus />
      {props.status.map((current: any) => (
        <Card.Content style={{ marginLeft: 10 }}>
          <Feed>
            <Feed.Event>
              <Feed.Content>
                <Feed.Summary>{current.currentstatus}</Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      ))}
    </Card>
  );
};

export default CurrentStatusItem;
