import { useState, useEffect, useRef } from 'react';

const useCalculate = (array, calculateFunction) => {
  // First Input
  const [amount, getAmount] = useState(0);
  // Second Input
  const [item, getItem] = useState(0)
  // Counter 
  const [count, setCount] = useState(0)
  // Result of the calculation
  const [averageResult, setResult] = useState(0);
  // Animation of the inputs when first submit
  const [isAnimated, positionChange] = useState(false);
  // Animation when calculate
  const [isResponse, responseShow] = useState(false);
  // State change for readOnly input property
  const [readOnly, changeReadOnlyState] = useState(false);
  const [readOnlyAmount, changeReadOnlyStateAmount] = useState(false);
  // Title and mode of the input
  const [inputMode, changeInputMode] = useState("Amount of Items");
  // Button & function mode
  const [btnFn, changeBtnFn] = useState("Submit");
  // Use Ref for focus the input element
  const inputElement = useRef(null);
  // Iluminated animation for user response
  const [itemsIluminated, mapItemsIluminated] = useState([])
  const [stateForEffect, stateChangeForEffect] = useState(false)

  useEffect(() => {
    const forCalculateItem = array.map(element => {
      return element.item
    });
    
    calculateFunction(forCalculateItem);
  }, [isResponse])

  useEffect(() => {
    mapItemsIluminated(array)
  }, [stateForEffect])

  return { 
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
    stateChangeForEffect
  }
};

export default useCalculate;