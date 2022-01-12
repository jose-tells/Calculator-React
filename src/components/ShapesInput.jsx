import React from 'react';

const ShapesInput = ({ label, value, getValue }) => {

  const handleChange = (event) => {
    getValue(event.target.value);
  };

  return (
    <label htmlFor='side' className='shapesInput__label'>
      {label}
      <input
        className='shapesInput__input'
        type='number'
        id='side'
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default ShapesInput;
