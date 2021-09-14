import React from 'react';
// Components
import Input from './Input'
// Classnames
import classNames from 'classnames';

const Box = (props) => {

  const {
    averageResult,
    boxName,
    calculateFn,
    countryCurrency,
    functionList,
    getItem,
    isAPI,
    isAnimated,
    isAverageMode, 
    isGeo,
    isLeft,
    isOpen,
    isResponse,
    isSalary,
    inputElementRef,
    list,
    nameCallback,
    openFn,
    option,
    parentCallback,
    readOnly,
    readOnlyAmount,
    section,
    setCountryPropsArray,
    setSection,
    typeInput
  } = props;

  const responseStyles = classNames("container__animation--response", {
    isResponse
  })

  const containerStytles = classNames("container", {
    isLeft
  })

  if(isAverageMode){
    return(
      <div className={containerStytles}>
        <h2 className="container__title">{boxName}</h2>
        <div className="container__box">
          <div className="container__animation">
            <Input
              calculateFn={calculateFn}
              isAnimated={isAnimated}
              isGeo={isGeo}
              isResponse={isResponse}
              parentCallback={parentCallback}
              readOnly={readOnlyAmount}
              typeInput={typeInput}
            />
            <Input
              calculateFn={calculateFn}
              countryCurrency={countryCurrency}
              isAPI={isAPI}
              isAnimated={isAnimated}
              isGeo={isGeo}
              isResponse={isResponse}
              parentCallback={getItem}
              typeInput={typeInput}
              inputElementRef={inputElementRef}
              readOnly={readOnly}
            />
            <div className={responseStyles}>
              <p>Your {section} is: {averageResult}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }else {
    return(
      <div className="container">
        <h2 className="container__title">{boxName}</h2>
        <div className="container__box">
          <Input
            calculateFn={calculateFn}
            functionList={functionList}
            inputElementRef={inputElementRef}
            isOpen={isOpen}
            isGeo={isGeo}
            isAPI={isAPI}
            isSalary={isSalary}
            list={list}
            nameCallback={nameCallback}
            openFn={openFn}
            option={option}
            parentCallback={parentCallback}
            setCountryPropsArray={setCountryPropsArray}
            setSection={setSection}
            typeInput={typeInput}
          />
        </div>
      </div>
    )
  }
};

export default Box;