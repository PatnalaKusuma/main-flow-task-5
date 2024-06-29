// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)); // Not recommended for production use
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'].map((btn) => (
          <Button key={btn} value={btn} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
