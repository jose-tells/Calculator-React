import React from 'react';
// Classnames
import classNames from 'classnames';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Input = (props) => {

  const {
    isOpen,
    openFn,
    children,
    placeholderText,
    isHome,
    section,
  } = props;

  const handleClick = () => {
    openFn(!isOpen);
  };

  const inputStyle = classNames('home__form', {
    isHome,
  });

  const iconStyle = classNames('home__form--icon', {
    isOpen,
  });

  return (
    <form className='form__list'>
      <div className={inputStyle}>
        <input
          className='home__form--input'
          type='text'
          disabled
          value={section}
          placeholder={placeholderText}
        />
        <FontAwesomeIcon
          onClick={handleClick}
          className={iconStyle}
          icon={faChevronLeft}
        />
      </div>
      {children}
    </form>
  );
};

export default Input;
