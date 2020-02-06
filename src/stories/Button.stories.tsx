import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonApp from "../components/Button";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default {
  title: "Button"
};

export const ButtonDefault = () => (
  <ListGroupItem>
    <ButtonApp variant="primary" buttonTitle="Primary" />
    <ButtonApp variant="secondary" buttonTitle="Secondary" />
    <ButtonApp variant="success" buttonTitle="Succes" />
    <ButtonApp variant="warning" buttonTitle="Warning" />
    <ButtonApp variant="danger" buttonTitle="Danger" />
    <ButtonApp variant="info" buttonTitle="Info" />
    <ButtonApp variant="light" buttonTitle="Light" />
    <ButtonApp variant="dark" buttonTitle="Dark" />
    <ButtonApp variant="link" buttonTitle="Link" />
  </ListGroupItem>
);
export const ButtonOutline = () => (
  <ListGroupItem>
    <ButtonApp variant="outline-primary" buttonTitle="Primary" />
    <ButtonApp variant="outline-secondary" buttonTitle="Secondary" />
    <ButtonApp variant="outline-success" buttonTitle="Succes" />
    <ButtonApp variant="outline-warning" buttonTitle="Warning" />
    <ButtonApp variant="outline-danger" buttonTitle="Danger" />
    <ButtonApp variant="outline-info" buttonTitle="Info" />
    <ButtonApp variant="outline-light" buttonTitle="Light" />
    <ButtonApp variant="outline-dark" buttonTitle="Dark" />
    <ButtonApp variant="outline-link" buttonTitle="Link" />
  </ListGroupItem>
);
export const ButtonWithSize = () => (
  <ListGroupItem>
    <ButtonApp variant="primary" buttonTitle="Small Primary" size="sm" />
    <ButtonApp variant="secondary" buttonTitle="Large Secondary" size="lg" />
    <ButtonApp variant="success" buttonTitle="Large Succes" size="sm" />
    <ButtonApp variant="warning" buttonTitle="Large Warning" size="lg" />
    <ButtonApp variant="danger" buttonTitle="Large Danger" size="sm" />
    <ButtonApp variant="info" buttonTitle="Large Info" size="lg" />
    <ButtonApp variant="light" buttonTitle="Large Light" size="sm" />
    <ButtonApp variant="dark" buttonTitle="Large Dark" size="lg" />
    <ButtonApp variant="link" buttonTitle="Large Link" size="sm" />
  </ListGroupItem>
);
