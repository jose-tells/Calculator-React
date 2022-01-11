import React, { useState } from 'react';
// Components
import Box from '../components/Box';
import ButtonCalc from '../components/ButtonCalc';
import CalcMode from '../components/CalcMode';
import GeometricShapesResult from '../components/GeometricShapesResult';
// Styles
import '../assets/styles/components/Rectangle.styl';

const Rectangle = (props) => {

  const { section } = props;

  const [width, getWidth] = useState(0);
  const [length, getLength] = useState(0);
  const [value, setValue] = useState('Area');
  const [result, setResult] = useState(0);
  // Is result animated
  const [isResultAnimated, animateResult] = useState(false);

  function Area() {
    const area = width * length;
    setResult(area);
  };

  function Perimeter() {
    const perimeter = (2 * width) + (2 * length);
    setResult(perimeter);
  };

  const calculate = () => {
    if (value === 'Area') {
      Area();
    } else {
      Perimeter();
    }
    animateResult(true);
  };

  const rectangleSection = () => {
    console.log('Rectangle section');
  };

  return (
    <>
      <main className='rectangleMain'>
        <Box
          boxName='Width'
          calculateFn={rectangleSection}
          parentCallback={getWidth}
          typeInput='number'
        />
        <Box
          boxName='Length'
          calculateFn={rectangleSection}
          parentCallback={getLength}
          typeInput='number'
        />
        <GeometricShapesResult
          section={section}
          result={result}
          isResultAnimated={isResultAnimated}
        />
        <CalcMode mode={value} modeChange={setValue} />
        <ButtonCalc fx='Calculate' calculateFn={calculate} />
      </main>
    </>
  );
};

export default Rectangle;
