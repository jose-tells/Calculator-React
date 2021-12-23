import React, { useState } from 'react';
// Redux-connect
import { connect } from 'react-redux';
// Components
import Header from '../components/Header';
import Box from '../components/Box';
import Square from './Square';
import Triangle from './Triangle';
import Circle from './Circle';
import Rectangle from './Rectangle';
// Styles
import '../assets/styles/GeoShapesImports.styl';

const GeoShapes = ({ geometricShapes }) => {
  const [isOpen, open] = useState(false);
  const [section, setSection] = useState('Geometric Shapes');

  return (
    <>
      <Header section={section} />
      <main className='geometricMain'>
        <Box
          boxName='Shapes'
          isOpen={isOpen}
          openFn={open}
          functionList={geometricShapes}
          setSection={setSection}
          isGeo
        />
        {section === 'Square' &&
          <Square section={section} />}
        {section === 'Triangle' &&
          <Triangle section={section} />}
        {section === 'Circle' &&
          <Circle section={section} />}
        {section === 'Rectangle' &&
          <Rectangle section={section} />}
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
