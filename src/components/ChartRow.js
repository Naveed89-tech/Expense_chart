import React from "react";

import "./ChartRow.css";

function ChartRow(props) {
  function getDayName(date = new Date(), locale = "en-US") {
    return date.toLocaleDateString(locale, { weekday: "long" });
  }
  const currentDay = getDayName().slice(0, 3).toLocaleLowerCase(); // 👉️ Tuesday
  function isCurrentDay() {
    return props.day === currentDay ? "valid" : "";
  }

  return (
    <tr style={{ height: `${props.amount}%` }}>
      <th scope="row">{props.day}</th>
      <td className={`${isCurrentDay()}`}>
        <span> ${props.amount}</span>
      </td>
    </tr>
  );
}
export default ChartRow;

// {/* <tr style={{ height: "35%" }}>
// <th scope="row">{spending[1].day}</th>
// <td className={`${isCurrentDay(1)}`}>
//   <span>${spending[1].amount}</span>
// </td>
// </tr> */}
