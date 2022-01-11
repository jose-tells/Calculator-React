import React from 'react';
// Classnames
import classNames from 'classnames';
// Components
import Input from './Input';

const Box = (props) => {

  const {
    averageResult,
    boxName,
    calculateFn,
    countryCurrency,
    functionList,
    getItem,
    isOptions,
    isAnimated,
    isGeo,
    isLeft,
    isOpen,
    isResponse,
    isSalary,
    isStatistics,
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
    typeInput,
  } = props;

  const responseStyles = classNames('container__animation--response', {
    isResponse,
  });

  const containerStyles = classNames('container', {
    isLeft,
  });

  if (isStatistics) {
    return (
      <div className={containerStyles}>
        <h2 className='container__title'>{boxName}</h2>
        <div className='container__box'>
          <div className='container__animation'>
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
              isOptions={isOptions}
              isAnimated={isAnimated}
              isGeo={isGeo}
              isResponse={isResponse}
              parentCallback={getItem}
              typeInput={typeInput}
              inputElementRef={inputElementRef}
              readOnly={readOnly}
            />
            <div className={responseStyles}>
              <p>
                Your
                {section}
                {' '}
                is:
                {averageResult}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='container'>
      <h2 className='container__title'>{boxName}</h2>
      <div className='container__box'>
        <Input
          calculateFn={calculateFn}
          functionList={functionList}
          inputElementRef={inputElementRef}
          isOpen={isOpen}
          isGeo={isGeo}
          isOptions={isOptions}
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
  );

};

export default Box;
