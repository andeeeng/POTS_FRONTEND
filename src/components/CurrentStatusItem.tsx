import React from "react";

import "semantic-ui-css/semantic.min.css";
import { Card, Feed, Label } from "semantic-ui-react";
import CurrentStatus from "./CurrentStatus";

export interface ICurrentStatusitemProps {
  currentstatus?: any;
  status?: any;
}

const CurrentStatusItem = (props: ICurrentStatusitemProps) => {
  const { currentstatus, status } = props;
  return (
    <div>
      <Card style={{ maxHeight: 200, overflow: "auto" }}>
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
    </div>
  );
};

export default CurrentStatusItem;
