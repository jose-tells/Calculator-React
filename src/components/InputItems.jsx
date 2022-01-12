import React from 'react';
// FontAwesome
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputItems = ({ saveItem, inputMessage, section }) => {
  const [item, setItem] = React.useState('');

  const handleInsert = (event) => {
    event.preventDefault();
    !!item && saveItem(item);
    setItem('');
  };

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <form className='container__text' onSubmit={handleInsert}>
      <p className='text__request'>
        {inputMessage}
        <span className='text__request--mode'>
          {' '}
          {section.toLowerCase()}
        </span>
      </p>
      <div className='input__request'>
        <input
          type='number'
          placeholder='2'
          value={item}
          onChange={handleChange}
        />
      </div>
      <button type='submit' className='container__btn'>
        <FontAwesomeIcon icon={faArrowRight} className='btn__icon' />
      </button>
    </form>
  );
};

export default InputItems;
