import React from "react";
import PropTypes from "prop-types";

const Key = ({ keyAction, keyType, keyValue }) => (
  <div data-test="key-container" className="key-container" />
);

Key.propTypes = {
  keyAction: PropTypes.func.isRequired,
  keyType: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
};

export default Key;
