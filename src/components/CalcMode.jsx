import React, { useState } from 'react';
// Classnames 
import classNames from 'classnames';
// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const CalcMode = ({ mode, modeChange }) => {
  const [calcIsOpen, openCalc] = useState(false)

  const handleClick = () => {
    openCalc(!calcIsOpen)
  }

  const listBoxStyles = classNames("calcModeForm__listBox", {
    calcIsOpen
  })

  const iconStyles = classNames("calcModeForm__input--icon", {
    calcIsOpen
  })
  return (
    <div className="calcMode__container">
      <form action="">
        <div className="calcModeForm">
          <input value={mode} readOnly className="calcModeForm__input"/>
          <FontAwesomeIcon onClick={handleClick} icon={faChevronLeft} className={iconStyles}/>
        </div>
        <div className={listBoxStyles}>
          <ul>
            <li onClick={() => {modeChange("Area"), openCalc()}}>Area</li>
            <li onClick={() => {modeChange("Perimeter"), openCalc()}}>Perimeter</li>
          </ul>
        </div>
      </form>
    </div>
  )
};

export default CalcMode;