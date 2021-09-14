import React, { useState } from 'react';
// Components
import Header from '../components/Header';
import Box from '../components/Box';
import Square from './Square';
import Triangle from './Triangle';
import Circle from './Circle';
import Rectangle from './Rectangle';
// Styles
import '../assets/styles/GeoShapesImports.styl'
// Data
import listsIterations from '../../listsIterations'

const GeoShapes = () => {
  const [isOpen, open] = useState(false);
  const [section, setSection] = useState("Geometric Shapes")
  
  return (
    <>
      <Header section={section}/>
      <main className="geometricMain">
        <Box
          boxName="Shapes"
          list
          isOpen={isOpen}
          openFn={open}
          functionList={listsIterations.geometricShapes}
          setSection={setSection}
          isGeo
        />
        {section === "Square" &&
          <Square section={section}/>
        }
        {section === "Triangle" &&
          <Triangle section={section}/>
        }
        {section === "Circle" &&
          <Circle section={section}/>
        }
        {section === "Rectangle" &&
          <Rectangle section={section}/>
        }
      </main>
    </>
  )
};

export default GeoShapes;
