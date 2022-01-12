import React from 'react';
// Redux-connect
import { connect } from 'react-redux';
// Components
import Header from '../components/Header';
import Input from '../components/Input';
import ListBox from '../components/ListBox';
import Box from '../components/Box';
import Square from './Square';
import Triangle from './Triangle';
import Circle from './Circle';
import Rectangle from './Rectangle';
// Styles
import '../assets/styles/GeoShapesImports.styl';

const GeoShapes = ({ geometricShapes, history }) => {
  const [isOpen, open] = React.useState(false);
  const [section, setSection] = React.useState('Fórmulas geométricas');

  const handleClick = (section) => {
    setSection(section);
  };

  return (
    <>
      <Header section={section} history={history} />
      <main className='geometricMain'>
        <Box>
          <Input
            isOpen={isOpen}
            openFn={open}
            placeholderText='Selecciona una figura: Ej. Triángulo, Cuadrado...'
            section={section}
          >
            <ListBox isOpen={isOpen} isGeo>
              {geometricShapes.map((shape) => (
                <li
                  className='home__listBox--listItem'
                  key={shape.id}
                  onClick={() => {
                    handleClick(shape.name);
                    open(false);
                  }}
                >
                  {shape.name}
                </li>
              ))}
            </ListBox>
          </Input>
        </Box>
        {section === 'Cuadrado' && <Square section={section} />}
        {section === 'Triángulo' && <Triangle section={section} />}
        {section === 'Círculo' && <Circle section={section} />}
        {section === 'Rectángulo' && <Rectangle section={section} />}
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    geometricShapes: state.geometricShapes,
  };
};

export default connect(mapStateToProps, null)(GeoShapes);
