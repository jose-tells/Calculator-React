import React from 'react';

const Box = ({ children }) => {
  return (
    <div className='container'>
      <div className='container__box'>
        {children}
      </div>
    </div>
  );
};

export default Box;
