import React from "react";
import Calendar from "react-calendar";

const DatePicker = () => {
  return (
    <div>
      <Calendar onChange={() => console.log("DATE")} />
    </div>
  );
};

export default DatePicker;
