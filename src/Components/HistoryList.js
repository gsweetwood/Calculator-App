import React from "react";

const HistoryList = props => {
  return (
    <div className="history">
      <h2 id="history-title">HISTORY</h2>
      <ul>
        {props.history.map(operation => {
          return (
            <li className="history-item" key={operation}>
              {operation}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HistoryList;
