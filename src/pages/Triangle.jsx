import React, { useState } from 'react';
// Components
import Box from '../components/Box';
import CalcMode from '../components/CalcMode';
import ButtonCalc from '../components/ButtonCalc';
import GeometricShapesResult from '../components/GeometricShapesResult';
import ShapesInput from '../components/ShapesInput';
import InputBox from '../components/InputBox';
// Styles
import '../assets/styles/components/Triangle.styl';

const Triangle = (props) => {

  const { section } = props;

  const [side, getSide] = useState('');
  const [base, getBase] = useState('');
  const [mode, setMode] = useState('Area');
  const [result, setResult] = useState(0);
  // Is result animated
  const [isResultAnimated, animateResult] = useState(false);

  function Area() {
    const area = (base * side) / 2;
    setResult(area);
  };

  function Perimeter() {
    const perimeter = side * 3;
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
      <section className='triangleMain'>
        <Box>
          <InputBox mode={mode} shape={section}>
            <ShapesInput
              label='Lado'
              value={side}
              getValue={getSide}
            />
            <ShapesInput
              label='Base'
              value={base}
              getValue={getBase}
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

export default Triangle;
