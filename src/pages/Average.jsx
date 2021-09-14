import React from 'react';
// Components
import Header from '../components/Header'
import Box from '../components/Box';
import GridNumberBox from '../components/GridNumberBox';
import NumberBox from '../components/NumberBox';
import ButtonCalc from '../components/ButtonCalc';
// Custom hooks
import useCalculate from '../hooks/useCalculate';
// React-redux
import { connect } from 'react-redux';
// Actions
import { saveItemAverage } from '../actions/index'
// Styles
import '../assets/styles/AverageImports.styl'

const Average = (props) => {
  const { history, average, saveItemAverage } = props;

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
  } = useCalculate(average, calculateAverage)

  function calculateAverage(array) {
    if (array.length > 0) {
      const sum = array.reduce((accumulator, currentValue) =>  accumulator + currentValue)
      const averageCalculate = sum / average.length
      return setResult(averageCalculate.toFixed(2));
    }
  };

  const averageFunction = () => {
    const numberOfItems = Number(amount);
    if(inputMode === "Amount of Items" && numberOfItems !== 0){
      changeReadOnlyStateAmount(!readOnlyAmount);
      positionChange(!isAnimated);
      changeInputMode("Items");
    }else if(inputMode === "Items" && count < numberOfItems){
      saveItemAverage(Number(item));
      setCount(count + 1);
      inputElement.current.value = null;
      inputElement.current.focus({
        preventScroll: true
      })
    }

    if(inputMode === "Items" && count === numberOfItems  - 2){
      changeBtnFn("Calculate")
    }
    if(inputMode === "Items" && count === numberOfItems  - 1){
      responseShow(!isResponse);
      changeReadOnlyState(!readOnly);
    }
  }

  return (
    <>
      <Header section="Average" history={history}/>
      <main className="averageMain">
        <Box
          averageResult={averageResult}
          boxName={inputMode}
          calculateFn={averageFunction}
          getItem={getItem}
          inputElementRef={inputElement}
          isAnimated={isAnimated}
          isAverageMode
          isResponse={isResponse}
          inputElementRef={inputElement}
          parentCallback={getAmount}
          readOnly={readOnly}
          readOnlyAmount={readOnlyAmount}
          section="Average"
          typeInput="number"
        />
        <ButtonCalc 
          fx={btnFn} 
          calculateFn={averageFunction}
        />
        <GridNumberBox>
          {average.map(element => (
            <NumberBox 
              key={element.id}
              boxNumber={element.item}
            />
          ))}
        </GridNumberBox>
      </main>
    </>
  )
}

const mapStateToProps = state => {
  return {
    average: state.average
  }
};

const mapDispatchToProps = {
  saveItemAverage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Average);