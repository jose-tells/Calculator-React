import React from 'react';

const ButtonCalc = (props) => {

  const {fx, calculateFn } = props;

  return (
    <button onClick={() => {calculateFn()}} className="btn">{ fx }</button>
  )
};

export default ButtonCalc;
