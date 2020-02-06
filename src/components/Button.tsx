import React from "react";
import { Button } from "react-bootstrap";

export interface IButtonAppProps {
  variant?: any;
  size?: any;
  buttonTitle?: any;
}

const ButtonApp = (props: IButtonAppProps) => {
  const { variant, size, buttonTitle } = props;
  return (
    <Button variant={variant} size={size}>
      {buttonTitle}
    </Button>
  );
};

export default ButtonApp;
