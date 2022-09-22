import React from "react";
import "./Chart.css";
import ChartRow from "./ChartRow";

function Chart(props) {
  console.log(props.spending[0].amount);
  return (
    <div className="table">
      <table className="graph">
        <caption>Spending &ndash; Last 7 days</caption>

        <tbody>
          {props.spending.map((spend) => (
            <ChartRow key={spend.id} day={spend.day} amount={spend.amount} />
          ))}

          {/* <ChartRow day={spending[1].day} amount={spending[1].amount} />
          <ChartRow day={spending[2].day} amount={spending[2].amount} />
          <ChartRow day={spending[3].day} amount={spending[3].amount} />
          <ChartRow day={spending[4].day} amount={spending[4].amount} />
          <ChartRow day={spending[5].day} amount={spending[5].amount} />
          <ChartRow day={spending[6].day} amount={spending[6].amount} /> */}
        </tbody>
      </table>
    </div>
  );
}
export default Chart;
