import React, { useState } from "react";
import dayjs from "dayjs";
import { RangePicker } from "react-jalali-picker";
import "react-jalali-picker/dist/styles.css";
import "./styles.css";

const RangePickerJalaliFaRtl = () => {
  const [dateRange, setDateRange] = useState({
    start: dayjs(),
    end: null,
  });

  return (
    <div className="range-picker-jalal-fa-wrapper">
      <div className="range-picker-jalal-fa">
        <RangePicker
          value={dateRange}
          onChange={(range) => setDateRange(range)}
        />
      </div>
      <div className="range-picker-jalal-fa-desc">
        <div className="range-picker-jalal-fa-desc-row">
          <div>
            {!!dateRange?.start && dayjs(dateRange?.start)
              .calendar("jalali")
              .locale("fa")
              .format("YYYY/MM/DD")}
          </div>
          <div>
            {!!dateRange?.end && dayjs(dateRange?.end)
              .calendar("jalali")
              .locale("fa")
              .format("YYYY/MM/DD")}
          </div>
        </div>
        <div className="range-picker-jalal-fa-desc-row">
          <div>
            {!!dateRange?.start && dayjs(dateRange?.start)
              .calendar("jalali")
              .locale("fa")
              .format("dddd DD MMMM YYYY")}
          </div>
          <div>
            {!!dateRange?.end && dayjs(dateRange?.end)
              .calendar("jalali")
              .locale("fa")
              .format("dddd DD MMMM YYYY")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangePickerJalaliFaRtl;
