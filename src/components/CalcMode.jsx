import React, { useState } from 'react';
// Classnames
import classNames from 'classnames';
// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const CalcMode = ({ mode, modeChange }) => {
  const [calcIsOpen, openCalc] = useState(false);

  const handleClick = (mode) => {
    modeChange(mode);
    openCalc(!calcIsOpen);
  };

  const handleOpen = () => {
    openCalc(!calcIsOpen);
  };

  const listBoxStyles = classNames('calcModeForm__listBox', {
    calcIsOpen,
  });

  const iconStyles = classNames('calcModeForm__input--icon', {
    calcIsOpen,
  });

  return (
    <div className='calcMode__container'>
      <div className='calcModeForm'>
        <input value={mode} readOnly className='calcModeForm__input' />
        <FontAwesomeIcon
          onClick={handleOpen}
          icon={faChevronLeft}
          className={iconStyles}
        />
      </div>
      <div className={listBoxStyles}>
        <ul>
          <li onClick={() => handleClick('Area')}>Area</li>
          <li onClick={() => handleClick('Perímetro')}>Perimeter</li>
        </ul>
      </div>
    </div>
  );
};

export default CalcMode;
