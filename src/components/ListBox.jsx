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
    setSection
  } = props;

  const listStyle = classNames('home__listBox',{
    isOpen,
    isGeo
  })

  if(isSalary){
    return(
      <div className={listStyle}>
        <ul>
          {
            functionList.map((item) => (
              <li
              className="home__listBox--listItem"
              key={functionList.indexOf(item)} 
              onClick={() => (
                  setQuery(item.name),
                  nameCallback(item.name),
                  openFn(),
                  setCountryPropsArray(item.currencies)
              )}
              >
              {item.name}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }else {
    return(
      <div className={listStyle}>
        <ul>
          {
            functionList.map((item) => (
              <Link
                className="home__listBox--listItem"
                key={item.id}
                to={item.link}
                onClick={() => {
                  setQuery(item.name),
                  setSection(item.name),
                  openFn()
                }}
              >{item.name}</Link>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default ListBox;