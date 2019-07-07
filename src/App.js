import React, { useState } from "react";
import "./App.css";
import NumButton from "./Components/NumButton";
import CalcButton from "./CalcButton";
import HistoryList from "./HistoryList";

function App() {
  const [leftOperand, setLeftOperand] = useState("0");
  const [rightOperand, setRightOperand] = useState("");
  const [leftFocus, setLeftFocus] = useState(true);
  const [operator, setOperator] = useState("");
  const [history, setHistory] = useState([]);

  const handleReset = () => {
    setLeftOperand("0");
    setRightOperand("");
    setLeftFocus(true);
    setOperator("");
  };

  const handleCalculate = () => {
    let answer;
    if (leftOperand !== "" && rightOperand !== "") {
      if (operator === "+") {
        answer = parseInt(leftOperand) + parseInt(rightOperand);
      }
      if (operator === "-") {
        answer = parseInt(leftOperand) - parseInt(rightOperand);
      }
      if (operator === "X") {
        answer = parseInt(leftOperand) * parseInt(rightOperand);
      }
      if (operator === "/" && rightOperand !== "0") {
        answer = parseInt(leftOperand) / parseInt(rightOperand);
      } else if (operator === "/" && rightOperand === "0") {
        alert(`You cannot divide by zero`);
        return;
      }

      setLeftOperand(answer);
      setHistory([
        ...history,
        `${leftOperand} ${operator} ${rightOperand} = ${answer.toString()}`
      ]);
    }
    setRightOperand("");
    setLeftFocus(true);
    setOperator("");
  };

  const handleCalcButton = symbol => {
    setOperator(symbol);
    setLeftFocus(false);
  };

  const pressNumButton = num => {
    if (leftFocus) {
      if (leftOperand === "0") {
        setLeftOperand(num);
      } else {
        setLeftOperand(leftOperand + num);
      }
    } else {
      if (rightOperand.length === 0 || rightOperand === "0") {
        setRightOperand(num);
      } else {
        setRightOperand(rightOperand + num);
      }
    }
  };

  return (
    <div>
      <h1>CALCULATOR</h1>
      <div className="app-container">
        <div className="grid-container ">
          <div className="grid-item" id="display">
            {leftFocus ? leftOperand : rightOperand}
          </div>
          <CalcButton
            calcSymbol="C"
            id="resetButton"
            handleClick={handleReset}
          />
          <CalcButton calcSymbol="X" handleClick={handleCalcButton} />
          <CalcButton calcSymbol="/" handleClick={handleCalcButton} />
          <CalcButton calcSymbol="+" handleClick={handleCalcButton} />
          <NumButton numValue="7" handleClick={pressNumButton} />
          <NumButton numValue="8" handleClick={pressNumButton} />
          <NumButton numValue="9" handleClick={pressNumButton} />
          <CalcButton calcSymbol="-" handleClick={handleCalcButton} />
          <NumButton numValue="4" handleClick={pressNumButton} />
          <NumButton numValue="5" handleClick={pressNumButton} />
          <NumButton numValue="6" handleClick={pressNumButton} />
          <CalcButton calcSymbol="=" handleClick={handleCalculate} />
          <NumButton numValue="1" handleClick={pressNumButton} />
          <NumButton numValue="2" handleClick={pressNumButton} />
          <NumButton numValue="3" handleClick={pressNumButton} />
          <NumButton numValue="0" handleClick={pressNumButton} />
        </div>
        <HistoryList history={history} />
      </div>
    </div>
  );
}

export default App;
