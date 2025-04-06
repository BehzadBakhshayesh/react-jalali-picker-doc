import React, { useState } from "react";
import dayjs from "dayjs";
import { RangePicker } from "react-jalali-picker";
import "react-jalali-picker/dist/styles.css";
import "./styles.css";

const RangePickerGregoryEnLtr = () => {
  const [dateRange, setDateRange] = useState({
    start: dayjs(),
    end: null,
  });
  return (
    <div className="range-picker-gregory-en-wrapper">
      <div className="range-picker-gregory-en">
        <RangePicker
          value={dateRange}
          onChange={(range) => setDateRange(range)}
          locale="en"
          calendarType="gregory"
          direction="ltr"
        />
      </div>
      <div className="range-picker-gregory-en-desc">
        <div className="range-picker-gregory-en-desc-row">
          <div>
            {!!dateRange?.start && dayjs(dateRange?.start).format("YYYY/MM/DD")}
          </div>
          <div>
            {!!dateRange?.end && dayjs(dateRange?.end).format("YYYY/MM/DD")}
          </div>
        </div>
        <div className="range-picker-gregory-en-desc-row">
          <div>
            {!!dateRange?.start &&
              dayjs(dateRange?.start).format("dddd DD MMMM YYYY")}
          </div>
          <div>
            {!!dateRange?.end &&
              dayjs(dateRange?.end).format("dddd DD MMMM YYYY")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangePickerGregoryEnLtr;
