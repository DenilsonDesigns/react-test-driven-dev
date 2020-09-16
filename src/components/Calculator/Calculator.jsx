import React, { Component } from "react";
import Display from "../Display/Display";
import "./Calculator.css";
import Keypad from "../Keypad/Keypad";

export default class Calculator extends Component {
  state = {
    displayValue: "0", // value to be displayed in <Display />
    numbers: ["9", "8", "7", "6", "5", "4", "3", "2", "1", ".", "0", "ce"], // values to be displayed in number <Keys />
    operators: ["/", "x", "-", "+"], // values to be displayed in operator <Keys />
    selectedOperator: "", // operator selected for math operation
    storedValue: "", // stored value to use for math operation
  };

  callOperator = () => {
    console.log("call operation");
  };

  setOperator = () => {
    console.log("set operation");
  };

  updateDisplay = () => {
    console.log("update display");
  };

  render = () => {
    const { displayValue, numbers, operators } = this.state;
    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad
          callOperator={this.callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  };
}
