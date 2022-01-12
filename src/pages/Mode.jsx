/* eslint-disable array-callback-return */
import React from 'react';
// React-redux
import { connect } from 'react-redux';
// Components
import Header from '../components/Header';
import Box from '../components/Box';
import ResponseText from '../components/ResponseText';
import InputItems from '../components/InputItems';
import GridNumberbox from '../components/GridNumberBox';
import NumberBox from '../components/NumberBox';
import ButtonCalc from '../components/ButtonCalc';
// Actions
import { saveItemMode, cleanState } from '../actions';
// Styles
import '../assets/styles/components/Mode.styl';

const Mode = (props) => {

  const { history, mode, saveItemMode, cleanState } = props;

  const section = 'Moda';

  const [result, setResult] = React.useState(false);
  const [animation, setAnimation] = React.useState(false);
  const [itemIlluminated, mapItemsIlluminated] = React.useState([]);

  const modeFunction = (array) => {
    if (array.length > 0) {
      const modeArray = array.map((items) => {
        return Number(items.item);
      });
      const listCount = {};
      if (modeArray.length) {
        modeArray.map((element) => {
          if (listCount[element]) {
            listCount[element] += 1;
          } else {
            listCount[element] = 1;
          }
        });
      }
      const listArray = Object.entries(listCount).sort((a, b) => {
        return a[1] - b[1];
      });

      const modeResult = listArray[listArray.length - 1][0];

      const itemIlluminated = mode.map((element) => {
        return {
          id: element.id,
          item: element.item,
          isIluminated: element.item === modeResult,
        };
      });
      console.log(itemIlluminated);
      mapItemsIlluminated(itemIlluminated);
      setResult(modeResult);
      setAnimation(true);
    }
  };

  const mapModeItems = animation ? itemIlluminated : mode;

  React.useEffect(() => {
    return () => {
      cleanState([]);
      mapItemsIlluminated([]);
      setAnimation(false);
    };
  }, []);

  return (
    <>
      <Header section={section} history={history} />
      <main className='medianMain'>
        <Box>
          {
            result ? (
              <ResponseText
                section={section}
                result={result}
                setResult={setResult}
                cleanState={() => {
                  cleanState([]);
                  mapItemsIlluminated([]);
                  setAnimation(false);
                }}
              />
            ) : (
              <InputItems
                saveItem={saveItemMode}
                inputMessage='Introduzca los números para calcular la'
                section={section}
              />
            )
          }
        </Box>
        <ButtonCalc calculateFn={() => modeFunction(mode)} />
        {mode.length > 0 && (
          <GridNumberbox>
            {
              mapModeItems.map((element) => (
                <NumberBox
                  key={element.id}
                  boxNumber={element.item}
                  isIluminated={element.isIluminated}
                />
              ))
            }
          </GridNumberbox>
        )}
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

const mapDispatchToProps = {
  saveItemMode,
  cleanState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Mode);
