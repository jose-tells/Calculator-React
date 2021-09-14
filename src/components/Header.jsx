import React from 'react';
import { Link } from 'react-router-dom';
// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {
  const { section } = props;

  return(
    <header className="section">
        <Link to="/">
          <FontAwesomeIcon className="section__icon" icon={faChevronLeft}/>
        </Link>
      <h1 className="section__title">{section}</h1>
    </header>
  )
};

export default Header;