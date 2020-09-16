import React from "react";
import "./Keypad.css";
import PropTypes from "prop-types";
import Key from "../Key/Key";

const Keypad = ({
  callOperator,
  numbers,
  operators,
  setOperator,
  updateDisplay,
}) => {
  const numberKeys = numbers.map((number) => (
    <Key
      key={number}
      keyAction={updateDisplay}
      keyType="number-key"
      keyValue={number}
    />
  ));

  const operatorKeys = operators.map((operator) => (
    <Key
      key={operator}
      keyAction={setOperator}
      keyType="operator-key"
      keyValue={operator}
    />
  ));
  return (
    <div data-test="keypad-container" className="keypad-container">
      <div data-test="numbers-container" className="numbers-container">
        {numberKeys}
      </div>
      <div data-test="operators-container" className="operators-container">
        {operatorKeys}
      </div>
      <div data-test="submit-container" className="submit-container">
        <Key keyAction={callOperator} keyType="submit-key" keyValue="=" />
      </div>
    </div>
  );
};

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
};

export default Keypad;
