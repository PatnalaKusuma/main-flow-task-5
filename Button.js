// src/Button.js
import React from 'react';
import './Button.css';

const Button = ({ value, handleClick }) => {
  return (
    <button className="button" onClick={() => handleClick(value)}>
      {value}
    </button>
  );
};

export default Button;
