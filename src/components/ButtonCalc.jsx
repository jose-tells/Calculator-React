import React from 'react';

const ButtonCalc = (props) => {
  const { fx, calculateFn, cleanState, resetState } = props;

  const handleClick = () => {
    if (fx === 'Another?') {
      resetState();
      cleanState([]);
    } else {
      calculateFn();
    }
  };

  return (
    <button type='button' onClick={handleClick} className='btn'>
      {fx}
    </button>
  );
};

export default ButtonCalc;
