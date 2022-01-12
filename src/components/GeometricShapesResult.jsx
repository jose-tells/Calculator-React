import classNames from 'classnames';
import React from 'react';

const GeometricShapesResult = (props) => {
  const { mode, result, isResultAnimated, section } = props;

  const resultBoxStyles = classNames('resultBox', {
    isResultAnimated,
  });

  return (
    <div className={resultBoxStyles}>
      <p className='resultBox__text'>
        El
        {' '}
        {mode}
        {' '}
        del
        {' '}
        {section}
        {' '}
        es
        {' '}
        {result}
      </p>
    </div>
  );
};

export default GeometricShapesResult;
