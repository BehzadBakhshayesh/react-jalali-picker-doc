import React, { useState } from "react";
import dayjs from "dayjs";
import { DatePicker } from "react-jalali-picker";
import "react-jalali-picker/dist/styles.css";
import "./styles.css";

const DatePickerJalaliFaRtl = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  return (
    <div className="date-picker-jalal-fa-wrapper">
      <div className="date-picker-jalal-fa">
        <DatePicker
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
      </div>
      <div className="date-picker-jalal-fa-desc">
        <div>
          {dayjs(selectedDate)
            .calendar("jalali")
            .locale("fa")
            .format("YYYY/MM/DD")}
        </div>
        <div>
          {dayjs(selectedDate)
            .calendar("jalali")
            .locale("fa")
            .format("dddd DD MMMM YYYY")}
        </div>
      </div>
    </div>
  );
};

export default DatePickerJalaliFaRtl;
