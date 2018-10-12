import React from "react";
import P from "prop-types";

const Button = ({ type, value, text, handleOnClick }) => (
  <button
    type={type}
    className="btn btn-primary btn-lg"
    value={value}
    onClick={handleOnClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  type: P.string.isRequired,
  value: P.string,
  handleOnClick: P.func
};

export default Button;
