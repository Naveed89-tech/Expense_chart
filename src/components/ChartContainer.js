import React from "react";

import Chart from "./Chart";
import "./ChartContainer.css";
import MonthTotal from "../MonthTotal";
function ChartContainer(props) {
  const spending = [
    {
      day: "mon",
      amount: 17.45,
      id: 1,
    },
    {
      day: "tue",
      amount: 34.91,
      id: 2,
    },
    {
      day: "wed",
      amount: 52.36,
      id: 3,
    },
    {
      day: "thu",
      amount: 31.07,
      id: 4,
    },
    {
      day: "fri",
      amount: 23.39,
      id: 5,
    },
    {
      day: "sat",
      amount: 43.28,
      id: 6,
    },
    {
      day: "sun",
      amount: 25.48,
      id: 7,
    },
  ];

  return (
    <div className="container">
      <Chart spending={spending} />
      <MonthTotal spending={spending} />
    </div>
  );
}
export default ChartContainer;
