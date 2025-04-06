import React from "react";
import Header from "./components/Header";
import DatePickerJalaliFaRtl from "./components/DatePickerJalaliFaRtl";
import DatePickerGregoryEnLtr from "./components/DatePickerGregoryEnLtr";
import RangePickerJalaliFaRtl from "./components/RangePickerJalaliFaRtl";
import RangePickerGregoryEnLtr from "./components/RangePickerGregoryEnLtr";
import RangePickerJalaliFaRtlCustomStyle from "./components/RangePickerJalaliFaRtlCustomStyle";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <DatePickerJalaliFaRtl />
      <DatePickerGregoryEnLtr/>
      <RangePickerJalaliFaRtl/>
      <RangePickerGregoryEnLtr/>
      <RangePickerJalaliFaRtlCustomStyle/>
    </div>
  );
};

export default App;
