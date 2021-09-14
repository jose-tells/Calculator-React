import React from 'react';
// ClassNames
import classNames from 'classnames';
// Fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// Styles

const SmallList = props => {

  const { currencyCode, countryCurrency, openSmall, isOpenSmall } = props;

  console.log(currencyCode)

  const handleClick = () => {
    openSmall(!isOpenSmall)
  };

  const iconStyle = classNames('smallList__icon', {
    isOpenSmall
  });

  if(countryCurrency.length > 1) {
    return (
      <div className="smallList">
        <p className="smallList__item">{currencyCode}</p>
        <FontAwesomeIcon icon={faChevronLeft} className={iconStyle} onClick={handleClick}/>
      </div>
    )
  }else{
    return (
      <div className="smallList">
        <p className="smallList__item">{currencyCode}</p>
      </div>
    )
  }
};

export default SmallList;