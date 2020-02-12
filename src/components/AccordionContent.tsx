import React, { Fragment } from "react";
import { Row, Col, Card } from "react-bootstrap";
import OrderDetailsItem from "../components/OrderDetailsItem";
import CurrentStatusItem from "../components/CurrentStatusItem";
import { order, status, poList } from "../data/mockData";
import PoStatus from "./PoStatus";

const threeColumnsResponsiveProps = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 8,
  style: { marginBottom: 24 }
};

const AccordionContent = () => {
  return (
    <Fragment>
      <Row {...threeColumnsResponsiveProps}>
        <Card>
          <OrderDetailsItem order={order} />
        </Card>
        <Card>
          <CurrentStatusItem status={status} />
        </Card>
        <Card>
          <PoStatus list={poList} />
        </Card>
      </Row>
    </Fragment>
  );
};

export default AccordionContent;
