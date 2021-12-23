import React, { useState } from 'react';
// Components
import Box from '../components/Box';
import CalcMode from '../components/CalcMode';
import ButtonCalc from '../components/ButtonCalc';
import GeometricShapesResult from '../components/GeometricShapesResult';
// Styles
import '../assets/styles/components/Circle.styl';

const Circle = (props) => {

  const { section } = props;

  const [radius, getRadius] = useState(0);
  const [value, setValue] = useState('Area');
  const [result, setResult] = useState(0);
  // Is result animated
  const [isResultAnimated, animateResult] = useState(false);

  function Area() {
    const area = Math.PI * (radius ** 2);
    setResult(area.toFixed(2));
  }

  function Perimeter() {
    const perimeter = (2 * Math.PI * radius);
    setResult(perimeter.toFixed(2));
  }

  const calculate = () => {
    if (value === 'Area') {
      Area();
    } else {
      Perimeter();
    }
    animateResult(true);
  };

  const circleSection = () => {
    console.log('Circle section');
  };

  return (
    <>
      <section className='circleMain'>
        <Box
          boxName='Radio'
          calculateFn={circleSection}
          parentCallback={getRadius}
          typeInput='number'
        />
        <GeometricShapesResult
          section={section}
          result={result}
          isResultAnimated={isResultAnimated}
        />
        <CalcMode mode={value} modeChange={setValue} />
        <ButtonCalc fx='Calculate' calculateFn={calculate} />
      </section>
    </>
  );
};

export default Circle;
