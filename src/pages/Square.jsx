import React, { useState } from 'react';
// Components
// import Box from '../components/Box';
import ButtonCalc from '../components/ButtonCalc';
import CalcMode from '../components/CalcMode';
import GeometricShapesResult from '../components/GeometricShapesResult';
import InputBox from '../components/InputBox';
import ShapesInput from '../components/ShapesInput';
// Styles
import '../assets/styles/components/Square.styl';
import Box from '../components/Box';

const Square = (props) => {

  const { section } = props;

  const [side, getSide] = useState('');
  const [mode, setMode] = useState('Area');
  const [result, setResult] = useState(0);
  // Is result animated
  const [isResultAnimated, animateResult] = useState(false);

  function Area() {
    const area = side ** 2;
    setResult(area);
  };

  function Perimeter() {
    const perimeter = side * 4;
    setResult(perimeter);
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
      <section className='squareMain'>
        <Box>
          <InputBox mode={mode} shape={section}>
            <ShapesInput
              label='Lado'
              value={side}
              getValue={getSide}
            />
          </InputBox>
        </Box>
        {!!result && (
          <GeometricShapesResult
            mode={mode}
            section={section}
            result={result}
            isResultAnimated={isResultAnimated}
          />
        )}
        <CalcMode mode={mode} modeChange={setMode} />
        <ButtonCalc
          calculateFn={calculate}
        />
      </section>
    </>
  );
};

export default Square;
