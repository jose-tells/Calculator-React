import React, { useState, useEffect } from 'react';
// Components
import Box from '../components/Box';
import ButtonCalc from '../components/ButtonCalc';
import CalcMode from '../components/CalcMode';
import GeometricShapesResult from '../components/GeometricShapesResult';
// ClassNames
import classNames from 'classnames';
// Styles
import '../assets/styles/components/Square.styl'

const Square = props => {

  const { section } = props;

  const [side, getSide] = useState(0);
  const [value, setValue] = useState("Area");
  const [result, setResult] = useState(0)
  // Is result animated
  const [isResultAnimated, animateResult] = useState(false)

  function Area() {
    const area = side ** 2;
    setResult(area);
  };

  function Perimeter() {
    const perimeter = side * 4;
    setResult(perimeter);
  }

  const calculate = () => {
    if(value === "Area") {
      Area();
    }else {
      Perimeter();
    }
    animateResult(true)
  };

  const squareSection = () => {
    console.log("Square section")
  }

  return(
    <>
      <section className="squareMain">
        <Box 
          boxName="Side"
          calculateFn={squareSection}
          parentCallback={getSide}
          typeInput="number"
        />
        <GeometricShapesResult 
          section={section}
          result={result}
          isResultAnimated={isResultAnimated}
        />
        <CalcMode mode={value} modeChange={setValue}/>
        <ButtonCalc 
          fx="Calculate" 
          side={side} 
          calculateFn={calculate}
        />
      </section> 
    </>
  )
};

export default Square;