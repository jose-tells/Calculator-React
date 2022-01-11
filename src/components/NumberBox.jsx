import React from 'react';
// Classnames
import classNames from 'classnames';

const NumberBox = ({ boxNumber, isIluminated }) => {

  const boxAnimation = classNames('numberBox', {
    isIluminated,
  });

  return (
    <>
      <div className={boxAnimation}>
        <h3 className='numberBox__number'>{boxNumber}</h3>
      </div>
    </>
  );
};

export default NumberBox;
