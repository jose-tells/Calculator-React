import React from 'react';
// React-redux
import { connect } from 'react-redux';
// Components
import Header from '../components/Header';
import Box from '../components/Box';
import GridNumberBox from '../components/GridNumberBox';
import NumberBox from '../components/NumberBox';
import ButtonCalc from '../components/ButtonCalc';
import ResponseText from '../components/ResponseText';
import InputItems from '../components/InputItems';
// Actions
import { saveItemAverage, cleanState } from '../actions/index';
// Styles
import '../assets/styles/AverageImports.styl';

const Average = (props) => {
  const {
    history,
    average,
    saveItemAverage,
    cleanState,
  } = props;

  const section = 'Promedio';

  const [result, setResult] = React.useState('');

  const calculateAverage = (array) => {
    if (array.length > 0) {
      const arrayItems = array.map((items) => {
        return Number(items.item);
      });
      const sum = arrayItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      );
      const averageCalculate = sum / average.length;
      setResult(averageCalculate.toFixed(2));
    }
  };

  React.useEffect(() => {
    return () => {
      cleanState([]);
    };
  }, []);

  return (
    <>
      <Header
        section={section}
        history={history}
      />
      <main className='averageMain'>
        <Box>
          {result ? (
            <ResponseText
              section={section}
              result={result}
              setResult={setResult}
              cleanState={() => {
                cleanState([]);
              }}
            />
          ) : (
            <InputItems
              saveItem={saveItemAverage}
              inputMessage='Introduzca los números para calcular el'
              section={section}
            />
          )}
        </Box>
        <ButtonCalc
          calculateFn={() => calculateAverage(average)}
        />
        {average.length > 0 && (
          <GridNumberBox>
            {average.map((element) => (
              <NumberBox key={element.id} boxNumber={element.item} />
            ))}
          </GridNumberBox>
        )}
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    average: state.average,
  };
};

const mapDispatchToProps = {
  saveItemAverage,
  cleanState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Average);
