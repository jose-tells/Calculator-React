import React, { useState } from 'react';
// Components
import Box from '../components/Box';
import ButtonCalc from '../components/ButtonCalc';
import CalcMode from '../components/CalcMode';
import GeometricShapesResult from '../components/GeometricShapesResult';
import ShapesInput from '../components/ShapesInput';
import InputBox from '../components/InputBox';
// Styles
import '../assets/styles/components/Rectangle.styl';

const Rectangle = (props) => {

  const { section } = props;

  const [width, getWidth] = useState('');
  const [length, getLength] = useState('');
  const [mode, setMode] = useState('Area');
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
    if (mode === 'Area') {
      Area();
    } else {
      Perimeter();
    }
    animateResult(true);
  };

  return (
    <>
      <main className='rectangleMain'>
        <Box>
          <InputBox mode={mode} shape={section}>
            <ShapesInput
              label='Largo'
              value={width}
              getValue={getWidth}
            />
            <ShapesInput
              label='Ancho'
              value={length}
              getValue={getLength}
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
      </main>
    </>
  );
};

export default Rectangle;
