import React, { useState } from 'react';
// Components
import Box from '../components/Box';
import CalcMode from '../components/CalcMode';
import ButtonCalc from '../components/ButtonCalc';
import GeometricShapesResult from '../components/GeometricShapesResult';
// Styles
import '../assets/styles/components/Circle.styl';
import ShapesInput from '../components/ShapesInput';
import InputBox from '../components/InputBox';

const Circle = (props) => {

  const { section } = props;

  const [radius, getRadius] = useState('');
  const [mode, setMode] = useState('Area');
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
    if (mode === 'Area') {
      Area();
    } else {
      Perimeter();
    }
    animateResult(true);
  };

  return (
    <>
      <section className='circleMain'>
        <Box>
          <InputBox mode={mode} shape={section}>
            <ShapesInput
              label='Radio'
              value={radius}
              getValue={getRadius}
            />
          </InputBox>
        </Box>
        {!!result && (
          <GeometricShapesResult
            mode={mode}
            result={result}
            isResultAnimated={isResultAnimated}
          />
        )}
        <CalcMode mode={mode} modeChange={setMode} />
        <ButtonCalc calculateFn={calculate} />
      </section>
    </>
  );
};

export default Circle;
