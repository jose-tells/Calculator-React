import React, { useEffect, useState } from 'react';
// Components
import { connect } from 'react-redux';
import Header from '../components/Header';
import Box from '../components/Box';
import GridNumberBox from '../components/GridNumberBox';
import NumberBox from '../components/NumberBox';
// Custom hooks
import useCalculate from '../hooks/useCalculate';
// React-redux
// Actions
import { saveItemMedian } from '../actions';
// Styles
import '../assets/styles/components/SalaryDifference.styl';

const SalaryDifference = (props) => {

  const { history, median, saveItemMedian } = props;

  const {
    amount,
    item,
    count,
    averageResult,
    isAnimated,
    isResponse,
    readOnly,
    readOnlyAmount,
    inputMode,
    inputElement,
    itemsIluminated,
    stateForEffect,
    getAmount,
    getItem,
    setCount,
    setResult,
    positionChange,
    responseShow,
    changeReadOnlyState,
    changeReadOnlyStateAmount,
    changeInputMode,
    mapItemsIluminated,
    stateChangeForEffect,
  // eslint-disable-next-line no-use-before-define
  } = useCalculate(median, calculateMedian);

  // Array with the others properties of the country
  const [countryCurrency, setCountryPropsArray] = useState([]);
  // Name of the country callback from the list
  const [countryName, nameCallback] = useState('');
  // State from the country API
  const [countries, setCountries] = useState([]);
  // Animation of the button of the list
  const [isOpen, open] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => error);
  }, []);

  function calculateMedian(array) {
    let Median;
    // Function to sort the list from less to greater
    const sortList = array.sort((a, b) => {
      return a - b;
    });
    const halfList = Math.floor(sortList.length / 2);
    // Function to know if the length of the list is even or odd
    const isEven = (number) => {
      return number % 2 === 0;
    };
    if (isEven(sortList.length)) {
      Median = ((sortList[halfList - 1] + sortList[halfList]) / 2).toFixed(2);
      const itemIluminated = median.map((element) => {
        return {
          id: element.id,
          item: element.item,
          isIluminated: element.item === sortList[halfList - 1] || element.item === sortList[halfList],
        };
      });
      const itemIluminatedSort = itemIluminated.sort((a, b) => {
        return a.item - b.item;
      });
      mapItemsIluminated(itemIluminatedSort);
    } else {
      Median = sortList[halfList];
      const itemIluminated = median.map((element) => {
        return {
          id: element.id,
          item: element.item,
          isIluminated: element.item === Median,
        };
      });
      const itemIluminatedSort = itemIluminated.sort((a, b) => {
        return a.item - b.item;
      });
      mapItemsIluminated(itemIluminatedSort);
    }

    setResult(Median);
  }

  const medianFunction = () => {
    const numberOfItems = Number(amount);
    if (inputMode === 'Amount of Items' && numberOfItems !== 0) {
      changeReadOnlyStateAmount(!readOnlyAmount);
      positionChange(!isAnimated);
      changeInputMode('Items');
    } else if (inputMode === 'Items' && count < numberOfItems) {
      saveItemMedian(Number(item));
      setCount(count + 1);
      inputElement.current.value = null;
      inputElement.current.focus({
        preventScroll: true,
      });
    }

    if (count + 1 < numberOfItems) {
      stateChangeForEffect(!stateForEffect);
    }

    if (inputMode === 'Items' && count === numberOfItems - 1) {
      responseShow(!isResponse);
      changeReadOnlyState(!readOnly);
    }
  };

  return (
    <>
      <Header section='Salary Analysis' history={history} />
      <main className='salaryMain'>
        {/* &&: If expr1 can be converted to true, returns expr2; else, returns expr1. */}
        <Box
          boxName='Select your beautiful country'
          functionList={countries}
          isGeo
          isOpen={isOpen}
          isSalary
          list
          nameCallback={nameCallback}
          openFn={open}
          option={countryName}
          setCountryPropsArray={setCountryPropsArray}
        />
        {countryName && (
          <Box
            averageResult={averageResult}
            boxName={inputMode}
            calculateFn={medianFunction}
            countryCurrency={countryCurrency}
            getItem={getItem}
            isOptions
            isAnimated={isAnimated}
            isAverageMode
            isLeft={true}
            isResponse={isResponse}
            inputElementRef={inputElement}
            parentCallback={getAmount}
            readOnly={readOnly}
            readOnlyAmount={readOnlyAmount}
            section='Salary Median'
            typeInput='number'
          />
        )}
        <GridNumberBox>
          {itemsIluminated.map((element) => (
            <NumberBox
              key={element.id}
              boxNumber={element.item}
              isIluminated={element.isIluminated}
            />
          ))}
        </GridNumberBox>
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    median: state.median,
  };
};

const mapDispatchToProps = {
  saveItemMedian,
};

export default connect(mapStateToProps, mapDispatchToProps)(SalaryDifference);
