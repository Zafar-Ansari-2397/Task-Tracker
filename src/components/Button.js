import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, text, color }) => {
  return (
    <div>
      <button
        className='btn'
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

Button.prototype = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
