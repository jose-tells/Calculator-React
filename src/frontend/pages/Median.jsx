import React, { useEffect } from 'react';
// Components
import { connect } from 'react-redux';
import Header from '../components/Header';
import Box from '../components/Box';
import GridNumberbox from '../components/GridNumberBox';
import NumberBox from '../components/NumberBox';
import ButtonCalc from '../components/ButtonCalc';
// Custom hooks
import useCalculate from '../hooks/useCalculate';
// React-redux
// Actions-redux
import { saveItemMedian, cleanState } from '../actions';
// Styles
import '../assets/styles/components/Median.styl';

const Median = (props) => {

  const { history, median, saveItemMedian, cleanState } = props;

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
    btnFn,
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
    changeBtnFn,
    mapItemsIluminated,
    stateChangeForEffect,
    resetState,
  // eslint-disable-next-line no-use-before-define
  } = useCalculate(median, calculateMedian);

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
  };

  useEffect(() => {
    cleanState([]);
  }, []);

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

    if (inputMode === 'Items' && count === numberOfItems - 2) {
      changeBtnFn('Calculate');
    }
    if (inputMode === 'Items' && count === numberOfItems - 1) {
      responseShow(!isResponse);
      changeReadOnlyState(!readOnly);
      changeBtnFn('Another?');
    }
  };

  return (
    <>
      <Header section='Median' history={history} />
      <main className='medianMain'>
        <Box
          averageResult={averageResult}
          boxName={inputMode}
          calculateFn={medianFunction}
          getItem={getItem}
          inputElementRef={inputElement}
          isAnimated={isAnimated}
          isStatistics
          isResponse={isResponse}
          parentCallback={getAmount}
          readOnly={readOnly}
          readOnlyAmount={readOnlyAmount}
          section='Median'
          typeInput='number'
        />
        <ButtonCalc
          fx={btnFn}
          calculateFn={medianFunction}
          cleanState={cleanState}
          resetState={resetState}
        />
        <GridNumberbox>
          {itemsIluminated.map((element) => (
            <NumberBox
              key={element.id}
              boxNumber={element.item}
              isIluminated={element.isIluminated}
            />
          ))}
        </GridNumberbox>
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
  cleanState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Median);
