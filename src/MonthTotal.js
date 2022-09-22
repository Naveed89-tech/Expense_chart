import React from "react";
import "./MonthTotal.css";

function MonthTotal(props) {
  const monthTotal = props.spending
    .map((spend) => spend.amount)
    .reduce((a, b) => a + b, 0);
  console.log(monthTotal);
  return (
    <div className=" month">
      <div className="balance_month">
        <div className="balance_text_month">Total this month</div>
        <div className="balance_amount_month"> ${monthTotal}</div>
      </div>
      <div className="balance_month percent">
        <div className="balance_text_percent">+2.4%</div>
        <div className="balance_amount_month_percent"> from last month</div>
      </div>
    </div>
  );
}
export default MonthTotal;
