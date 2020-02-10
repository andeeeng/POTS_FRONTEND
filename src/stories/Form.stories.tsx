import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputText from "../components/InputText";
import { Container } from "react-bootstrap";

export default {
  title: "Forms"
};

export const SingleLineFormStoriesWithSize = () => (
  <Container>
    <InputText size="sm" type="text" title="Small" />
    <br />
    <InputText type="text" title="Normal" />
    <br />
    <InputText size="lg" type="text" title="Large" />
    <br />
    <InputText type="text" title="With Label" label="This is Label:" />
  </Container>
);
