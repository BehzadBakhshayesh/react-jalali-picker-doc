import React, { useState } from "react";
import { DatePicker } from "react-jalali-picker";
import "react-jalali-picker/dist/styles.css";
import "./styles.css";
import dayjs from "dayjs";

const DatePickerGregoryEnLtr = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  return (
    <div className="date-picker-gregory-en-wrapper">
      <div className="date-picker-gregory-en">
        <DatePicker
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          locale="en"
          calendarType="gregory"
          direction="ltr"
        />
      </div>
      <div className="date-picker-gregory-en-desc">
        <div>{dayjs(selectedDate).format("YYYY/MM/DD")}</div>
        <div>{dayjs(selectedDate).format("dddd DD MMMM YYYY")}</div>
      </div>
    </div>
  );
};

export default DatePickerGregoryEnLtr;
