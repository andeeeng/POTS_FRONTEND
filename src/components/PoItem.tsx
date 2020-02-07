import React from "react";

export interface IPoItemProps {
  poStatus?: any;
  poNumber?: any;
}

const PoItem = (props: IPoItemProps) => {
  const { poStatus, poNumber } = props;
  return (
    <div>
      <h6>{poNumber}</h6>
      <h6>Status: {poStatus}</h6>
    </div>
  );
};

export default PoItem;
