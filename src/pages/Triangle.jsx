import React, { useState } from 'react';
// Components 
import Box from '../components/Box';
import CalcMode from '../components/CalcMode'
import ButtonCalc from '../components/ButtonCalc'
import GeometricShapesResult from '../components/GeometricShapesResult';
// Styles
import '../assets/styles/components/Triangle.styl'

const Triangle = props => {

  const { section } = props;
  
  const [side, getSide] = useState(0) 
  const [base, getBase] = useState(0)
  const [value, setValue] = useState("Area")
  const [result, setResult] = useState(0)
  // Is result animated
  const [isResultAnimated, animateResult] = useState(false)

  function Area() {
    const area = (base * side) / 2;
    setResult(area)
  };

  function Perimeter() {
    const perimeter = side * 3
    setResult(perimeter)
  };

  const calculate = () => {
    if(value === "Area") {
      Area();
    }else {
      Perimeter();
    }
    animateResult(true)
  };

  const triangleSection = () => {
    console.log("Triangle section")
  }

  return (
    <>
      <section className="triangleMain">
        <Box 
          boxName="Base"
          calculateFn={triangleSection}
          parentCallback={getSide}
          typeInput="number"
        />
        <Box
          boxName="Height"
          calculateFn={triangleSection}
          parentCallback={getBase}
          typeInput="number"
        />
        <GeometricShapesResult
          section={section}
          result={result}
          isResultAnimated={isResultAnimated}
        />
        <CalcMode mode={value} modeChange={setValue}/>
        <ButtonCalc
          calculateFn={calculate}
          fx="Calculate"
        />
      </section>
    </>
  )
};

export default Triangle;