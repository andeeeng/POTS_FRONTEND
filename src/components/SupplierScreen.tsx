import React, { Fragment } from "react";
import HeaderTitle from "./HeaderTitle";
import { Col, Row } from "react-bootstrap";
import Search from "../components/Search";
import InputText from "./InputText";
import AccordionComponent from "./Accordion";

const SupplierScreen = () => {
  return (
    <Fragment>
      <HeaderTitle header="Supplier List" />
      <Col>
        <Row>
          <Search />
          <InputText type="text" title="Date" label="Sort By:" />
        </Row>
      </Col>

      <Col>
        <AccordionComponent />
      </Col>
    </Fragment>
  );
};

export default SupplierScreen;
