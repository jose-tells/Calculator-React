import React, { useState } from 'react';
// Components
import ListBox from './ListBox';
import SmallBox from './SmallBox';
import SmallListBox from './SmallListBox';
// Custom hooks
import useSearchUserInput from '../hooks/useSearchUserInput';
// Classnames
import classNames from 'classnames';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Input = (props) => {
  
  const {
    calculateFn,
    countryCurrency,
    functionList,
    isAPI,
    isAnimated,
    isHome, 
    isOpen,
    isGeo,
    isSalary,
    isResponse,
    inputElementRef,
    list,
    nameCallback,
    openFn,
    parentCallback,
    readOnly,
    setCountryPropsArray,
    setSection,
    typeInput
  } = props;

  const [isOpenSmall, openSmall] = useState(false);

  const sendData = (event) => {
    parentCallback(event.target.value)
    event.preventDefault()
  };
  
  const handleClick = () => {
    openFn(!isOpen)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateFn(event);
  }
  
  const inputStyle =  classNames('home__form', {
    isHome,
    isAnimated,
    isResponse
  });

  const iconStyle = classNames('home__form--icon', {
    isOpen
  });

  if(list) {
  const { query, setQuery, filteredCountries }  = useSearchUserInput(functionList)
    return(
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className={inputStyle}>
          <input 
            className="home__form--input" 
            ref={inputElementRef} 
            type={typeInput}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value),
              openFn(true)
            }}
          />
          <FontAwesomeIcon onClick={handleClick} className={iconStyle} icon={faChevronLeft}/>
        </div>
        <ListBox
          functionList={filteredCountries}
          isOpen={isOpen}
          isGeo={isGeo}
          isSalary={isSalary}
          nameCallback={nameCallback}
          openFn={openFn}
          query={query}
          setCountryPropsArray={setCountryPropsArray}
          setQuery={setQuery}
          setSection={setSection}
        />
      </form>
    )
  }else if(isAPI){
  const [currencyCode, setCurrencyCode] = useState(countryCurrency[0].code);
    return(
      <form className="form" action="" onSubmit={handleSubmit}>
        <div className={inputStyle}>
          <input ref={inputElementRef} onChange={sendData} className="home__form--input" type={typeInput} step="0.0001" readOnly={readOnly}/>
          {countryCurrency && <SmallBox
              currencyCode={currencyCode}
              countryCurrency={countryCurrency}
              isOpenSmall={isOpenSmall}
              openSmall={openSmall}
            />
          }
        </div>
        {countryCurrency && <SmallListBox
          countryCurrency={countryCurrency}
          isResponse={isResponse}
          isOpenSmall={isOpenSmall}
          setCurrencyCode={setCurrencyCode}
          openSmall={openSmall}
        />}
      </form>
    )
  }else {
    return(
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className={inputStyle}>
          <input ref={inputElementRef} onChange={sendData} className="home__form--input"  type={typeInput} step="0.0001" readOnly={readOnly}/>
        </div>
      </form>
    )
  }
};

export default Input;