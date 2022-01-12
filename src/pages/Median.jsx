import React from 'react';
// React-redux
import { connect } from 'react-redux';
// Components
import Header from '../components/Header';
import Box from '../components/Box';
import GridNumberbox from '../components/GridNumberBox';
import NumberBox from '../components/NumberBox';
import ButtonCalc from '../components/ButtonCalc';
import InputItems from '../components/InputItems';
import ResponseText from '../components/ResponseText';
// Actions
import { saveItemMedian, cleanState } from '../actions';
// Styles
import '../assets/styles/components/Median.styl';

const Median = (props) => {

  const {
    history,
    median,
    saveItemMedian,
    cleanState,
  } = props;

  const section = 'Mediana';

  const [itemsIluminated, mapItemsIluminated] = React.useState([]);
  const [result, setResult] = React.useState(0);
  const [isAnimation, setAnimation] = React.useState(false);

  function medianFunction(array) {
    const arrayItems = array.map((items) => {
      return Number(items.item);
    });
    let Median;
    // Function to sort the list from less to greater
    const sortedList = arrayItems.sort((a, b) => {
      return a - b;
    });
    const halfList = Math.floor(sortedList.length / 2);
    // Function to know if the length of the list is even or odd
    const isEven = (number) => {
      return number % 2 === 0;
    };
    if (isEven(sortedList.length)) {
      Median = ((sortedList[halfList - 1] + sortedList[halfList]) / 2).toFixed(2);
      const itemIluminated = median.map((element) => {
        return {
          id: element.id,
          item: element.item,
          isIluminated: Number(element.item) === sortedList[halfList - 1] || Number(element.item) === sortedList[halfList],
        };
      });
      const itemIluminatedSort = itemIluminated.sort((a, b) => {
        return a.item - b.item;
      });
      mapItemsIluminated(itemIluminatedSort);
    } else {
      Median = sortedList[halfList];
      const itemIluminated = median.map((element) => {
        return {
          id: element.id,
          item: element.item,
          isIluminated: (element.item) === Median,
        };
      });
      const itemIluminatedSort = itemIluminated.sort((a, b) => {
        return a.item - b.item;
      });
      mapItemsIluminated(itemIluminatedSort);
    }
    setResult(Median);
    setAnimation(true);
  };

  const mapMedianItems = isAnimation ? itemsIluminated : median;

  React.useEffect(() => {
    return () => {
      cleanState([]);
      mapItemsIluminated([]);
      setAnimation(false);
    };
  }, []);

  return (
    <>
      <Header section={section} history={history} />
      <main className='medianMain'>
        <Box>
          {result ? (
            <ResponseText
              section={section}
              result={result}
              setResult={setResult}
              cleanState={() => {
                cleanState([]);
                mapItemsIluminated([]);
                setAnimation(false);
              }}
            />
          ) : (
            <InputItems
              saveItem={saveItemMedian}
              inputMessage='Introduzca los números para calcular la media'
              section={section}
            />
          )}
        </Box>
        <ButtonCalc calculateFn={() => medianFunction(median)} />
        {median.length > 0 && (
          <GridNumberbox>
            {mapMedianItems.map((element) => (
              <NumberBox
                key={element.id}
                boxNumber={element.item}
                isIluminated={element.isIluminated}
              />
            ))}
          </GridNumberbox>
        )}
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    median: state.median,
  };
};

const mapDispatchToProps = {
  saveItemMedian,
  cleanState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Median);
