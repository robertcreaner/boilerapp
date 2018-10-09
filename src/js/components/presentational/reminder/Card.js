import React from "react";
import P from "prop-types";

const propTypes = {
  reminder: P.shape({
    text: P.string,
    id: P.number
  }).isRequired
};

const Card = ({ reminder, handleOnClose }) => (
  <div className="card mb-2">
    <div className="card-body text-center">
      <p className="card-text">{reminder.text}</p>
    </div>
    <button
      type="button"
      className="close close-reminder"
      onClick={() => handleOnClose(reminder.id)}
    >
      <span>&times;</span>
    </button>
  </div>
);

Card.propTypes = propTypes;

export default Card;
