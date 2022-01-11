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
import { saveItemMode, cleanState } from '../actions';
// Styles
import '../assets/styles/components/Mode.styl';

const Mode = (props) => {

  const { history, mode, saveItemMode, cleanState } = props;

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
  } = useCalculate(mode, calculateMode);

  function calculateMode(array) {
    if (array.length) {
      const listCount = {};
      if (array.length) {
        // eslint-disable-next-line array-callback-return
        array.map((element) => {
          if (listCount[element]) {
            listCount[element] += 1;
          } else {
            listCount[element] = 1;
          }
        });
      }
      const listArray = Object.entries(listCount).sort((a, b) => {
        return a[1] - b[1];
      });

      const modeResult = Number(listArray[listArray.length - 1][0]);

      const itemIluminated = mode.map((element) => {
        return {
          id: element.id,
          item: element.item,
          isIluminated: element.item === modeResult,
        };
      });
      mapItemsIluminated(itemIluminated);
      setResult(modeResult);
    }
  }

  const modeFunction = () => {
    const numberOfItems = Number(amount);
    if (inputMode === 'Amount of Items' && numberOfItems !== 0) {
      changeReadOnlyStateAmount(!readOnlyAmount);
      positionChange(!isAnimated);
      changeInputMode('Items');
    } else if (inputMode === 'Items' && count < numberOfItems) {
      saveItemMode(Number(item));
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

  useEffect(() => {
    cleanState([]);
    mapItemsIluminated([]);
  }, []);

  return (
    <>
      <Header section='Mode' history={history} />
      <main className='medianMain'>
        <Box
          averageResult={averageResult}
          boxName={inputMode}
          calculateFn={modeFunction}
          getItem={getItem}
          inputElementRef={inputElement}
          isAnimated={isAnimated}
          isStatistics
          isResponse={isResponse}
          parentCallback={getAmount}
          readOnly={readOnly}
          readOnlyAmount={readOnlyAmount}
          section='Mode'
          typeInput='number'
        />
        <ButtonCalc
          fx={btnFn}
          calculateFn={modeFunction}
          cleanState={cleanState}
          resetState={resetState}
        />
        <GridNumberbox>
          {
            itemsIluminated.map((element) => (
              <NumberBox
                key={element.id}
                boxNumber={element.item}
                isIluminated={element.isIluminated}
              />
            ))
          }
        </GridNumberbox>
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

const mapDispatchToProps = {
  saveItemMode,
  cleanState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Mode);
