/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Header = ({ section, history }) => {
  return (
    <header className='section'>
      <div onClick={() => history.goBack()}>
        <FontAwesomeIcon className='section__icon' icon={faChevronLeft} />
      </div>
      <h1 className='section__title'>{section}</h1>
    </header>
  );
};

export default Header;
