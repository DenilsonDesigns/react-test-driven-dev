import React from "react";
import "./Key.css";
import PropTypes from "prop-types";

const Key = ({ keyAction, keyType, keyValue }) => (
  <div
    data-test="key-container"
    className={`key-container ${keyType}`}
    onClick={() => keyAction(keyValue)}
  >
    <p data-test="key-value" className="key-value">
      {keyValue}
    </p>
  </div>
);

Key.propTypes = {
  keyAction: PropTypes.func.isRequired,
  keyType: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
};

export default Key;

// https://testdriven.io/blog/tdd-with-react-jest-and-enzyme-part-two/#application-functions
// Update Display Tests
