import React from 'react';
// Classnames
import classNames from 'classnames';

const ListBox = ({ children, isOpen, isGeo }) => {

  const listStyle = classNames('home__listBox', {
    isOpen,
    isGeo,
  });

  return (
    <div className={listStyle}>
      <ul>
        {children}
      </ul>
    </div>
  );

};

export default ListBox;
