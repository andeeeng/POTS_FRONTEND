import React, { Component, useState } from "react";
import Calendar from "react-calendar";

// const updateDate = (setState, date) => {
//     setState({ date })
//   }

const DatePicker = () => {
  const [state, setState] = useState({ date: "" });
  return (
    <div>
      <Calendar
        onChange={() => console.log("DATE")}
        // value={state.date}
      />
    </div>
  );
};

export default DatePicker;
