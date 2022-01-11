import React, { useEffect } from 'react';
// Components
import { connect } from 'react-redux';
import Header from '../components/Header';
import Box from '../components/Box';
import GridNumberBox from '../components/GridNumberBox';
import NumberBox from '../components/NumberBox';
import ButtonCalc from '../components/ButtonCalc';
// Custom hooks
import useCalculate from '../hooks/useCalculate';
// React-redux
// Actions
import { saveItemAverage, cleanState } from '../actions/index';
// Styles
import '../assets/styles/AverageImports.styl';

const Average = (props) => {
  const { history, average, saveItemAverage, cleanState } = props;

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
    resetState,
    // eslint-disable-next-line no-use-before-define
  } = useCalculate(average, calculateAverage);

  function calculateAverage(array) {
    if (array.length > 0) {
      const sum = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      );
      const averageCalculate = sum / average.length;
      setResult(averageCalculate.toFixed(2));
    }
  }

  const averageFunction = () => {
    const numberOfItems = Number(amount);
    if (inputMode === 'Amount of Items' && numberOfItems !== 0) {
      changeReadOnlyStateAmount(true);
      positionChange(true);
      changeInputMode('Items');
    } else if (inputMode === 'Items' && count < numberOfItems) {
      saveItemAverage(Number(item));
      setCount(count + 1);
      inputElement.current.value = null;
      inputElement.current.focus({
        preventScroll: true,
      });
    }

    if (inputMode === 'Items' && count === numberOfItems - 2) {
      changeBtnFn('Calculate');
    }
    if (inputMode === 'Items' && count === numberOfItems - 1) {
      responseShow(true);
      changeReadOnlyState(true);
      changeBtnFn('Another?');
    }
  };

  useEffect(() => {
    cleanState([]);
  }, []);

  return (
    <>
      <Header section='Average' history={history} />
      <main className='averageMain'>
        <Box
          averageResult={averageResult}
          boxName={inputMode}
          calculateFn={averageFunction}
          getItem={getItem}
          inputElementRef={inputElement}
          isAnimated={isAnimated}
          isStatistics
          isResponse={isResponse}
          parentCallback={getAmount}
          readOnly={readOnly}
          readOnlyAmount={readOnlyAmount}
          section='Average'
          typeInput='number'
        />
        <ButtonCalc
          calculateFn={averageFunction}
          cleanState={cleanState}
          fx={btnFn}
          resetState={resetState}
        />
        <GridNumberBox>
          {average &&
            average.map((element) => (
              <NumberBox key={element.id} boxNumber={element.item} />
            ))}
        </GridNumberBox>
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    average: state.average,
  };
};

const mapDispatchToProps = {
  saveItemAverage,
  cleanState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Average);
