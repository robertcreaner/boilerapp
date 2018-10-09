import React from "react";
import P from "prop-types";

const Input = ({ type, id, value, placeholder, handleChange }) => (
  <input
    type={type}
    className="form-control"
    id={id}
    value={value}
    onChange={handleChange}
    placeholder={placeholder}
    required
  />
);

Input.propTypes = {
  type: P.string.isRequired,
  id: P.string,
  value: P.string.isRequired,
  placeHolder: P.string,
  handleChange: P.func
};

export default Input;
