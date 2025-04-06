import React, { useState } from "react";
import dayjs from "dayjs";
import { RangePicker } from "react-jalali-picker";
import "./styles.css";

const RangePickerJalaliFaRtlCustomStyle = () => {
  const [dateRange, setDateRange] = useState({
    start: dayjs(),
    end: null,
  });

  return (
    <div className="range-picker-jalal-fa-custom-style-wrapper">
      <div className="range-picker-jalal-fa-custom-style">
        <RangePicker
          value={dateRange}
          onChange={(range) => setDateRange(range)}
        />
      </div>
      <div className="range-picker-jalal-fa-custom-style-desc">
        You can copy the default style file from the path
        <span className="path">"node_modules/react-jalali-picker/dist/styles.css"</span> instead of importing
        it, and apply your desired changes to it.
      </div>
    </div>
  );
};

export default RangePickerJalaliFaRtlCustomStyle;
