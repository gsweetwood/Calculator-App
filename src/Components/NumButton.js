import React from "react";

const NumButton = props => {
  const handleClick = () => {
    props.handleClick(props.numValue);
  };

  return (
    <div className="grid-item" onClick={handleClick}>
      {props.numValue}
    </div>
  );
};

export default NumButton;
