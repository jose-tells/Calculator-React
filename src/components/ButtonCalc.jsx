import React from 'react';

const ButtonCalc = ({ calculateFn }) => {

  const handleCalculate = () => {
    calculateFn();
  };

  return (
    <button
      type='button'
      onClick={handleCalculate}
      className='btn'
    >
      Calcular
    </button>
  );
};

export default ButtonCalc;
