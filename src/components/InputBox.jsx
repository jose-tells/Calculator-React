import React from 'react';

const InputBox = ({ children, mode, shape }) => {
  return (
    <div className='inputBox__container'>
      <p className='inputBox__text'>
        Introduce los valores para calcular el
        {' '}
        <span className='input__text--mode'>{mode.toLowerCase()}</span>
        {' '}
        del
        {' '}
        <span className='input__text--mode'>{shape.toLowerCase()}</span>
      </p>
      <div className='shapesInput__container'>
        {children}
      </div>
    </div>
  );
};

export default InputBox;
