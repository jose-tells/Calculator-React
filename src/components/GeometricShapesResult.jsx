import classNames from 'classnames';
import React from 'react';

const GeometricShapesResult = props => {
  const { section, result, isResultAnimated } = props;

  const resultBoxStyles = classNames("resultBox", {
    isResultAnimated
  })

  return (
    <div className={resultBoxStyles}>
      <p className="resultBox__text">The {section} Area is {result}</p>
    </div>
  )
};

export default GeometricShapesResult;