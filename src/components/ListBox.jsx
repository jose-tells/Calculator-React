import React from 'react';
import { Link } from 'react-router-dom';
// Classnames
import classNames from 'classnames';

const ListBox = (props) => {
  const {
    functionList,
    isOpen,
    isGeo,
    isSalary,
    nameCallback,
    openFn,
    setCountryPropsArray,
    setQuery,
    setSection,
  } = props;

  const listStyle = classNames('home__listBox', {
    isOpen,
    isGeo,
  });

  if (isSalary) {
    return (
      <div className={listStyle}>
        <ul>
          {
            functionList.map((item) => (
              <li
                className='home__listBox--listItem'
                key={functionList.indexOf(item)}
                onClick={() => {
                  setQuery(item.name.common);
                  nameCallback(item.name.common);
                  openFn();
                  setCountryPropsArray(Object.keys(item.currencies));
                }}
              >
                {item.name.common}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
  if (isGeo) {
    return (
      <div className={listStyle}>
        <ul>
          {
            functionList.map((item) => (
              <Link
                className='home__listBox--listItem'
                key={item.id}
                to={item.link}
                onClick={() => {
                  setSection(item.name);
                  openFn();
                }}
              >
                {item.name}
              </Link>
            ))
          }
        </ul>
      </div>
    );
  }
  return (
    <div className={listStyle}>
      <ul>
        {
          functionList.map((item) => (
            <Link
              className='home__listBox--listItem'
              key={item.id}
              to={item.link}
            >
              {item.name}
            </Link>
          ))
        }
      </ul>
    </div>
  );

};

export default ListBox;
