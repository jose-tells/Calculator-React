import React from 'react';

const ResponseText = ({ result, section, cleanState, setResult }) => {

  const handleClick = () => {
    cleanState();
    setResult('');
  };

  return (
    <div className='response__container'>
      <p className='responseText'>
        Tu
        {' '}
        {section.toLowerCase()}
        {' '}
        es:
        {' '}
        {result}
      </p>
      <button
        type='button'
        onClick={handleClick}
        className='responseText__button'
      >
        ¿Calcular de nuevo?
      </button>
    </div>
  );
};

export default ResponseText;
