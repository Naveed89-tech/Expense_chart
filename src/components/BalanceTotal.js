import React from "react";
import "./BalanceTotal.css";

function BalanceTotal(props) {
  return (
    <div className="balance_container">
      <div className="balance">
        <div className="balance_text">My balance</div>
        <div className="balance_amount"> $921.48</div>
      </div>
      <div className="logo">
        <img src="./logo.svg" alt="logo"></img>
      </div>
    </div>
  );
}

export default BalanceTotal;
