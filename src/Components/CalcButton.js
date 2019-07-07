import React from "react";

const CalcButton = props => {
  const handleClick = () => {
    props.handleClick(props.calcSymbol);
  };

  return (
    <div className="grid-item calc-button" onClick={handleClick}>
      {props.calcSymbol}
    </div>
  );
};

export default CalcButton;
