import React from 'react';
// ClassNames
import classNames from 'classnames';

const SmallListBox = props => {

  const { 
    isOpenSmall, 
    countryCurrency, 
    isResponse, 
    setCurrencyCode, 
    openSmall 
  } = props;


  const smallListBoxStyles = classNames("smallList__listBox", {
    isOpenSmall,
    isResponse
  })

  return(
    <div className={smallListBoxStyles}>
      <ul>
        {countryCurrency.map(item => (
          <li 
            key={countryCurrency.indexOf(item)}
            onClick={() => {
                setCurrencyCode(countryCurrency[countryCurrency.indexOf(item)].code),
                openSmall(!isOpenSmall)
              }
            }
          >{item.code}</li>
        ))}
      </ul>
    </div>
  )
};

export default SmallListBox;