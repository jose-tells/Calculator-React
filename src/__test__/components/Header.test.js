import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Header from '../../components/Header';

describe('<Header />', () => {
  const header = mount(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  test('Header component render', () => {
    expect(header.length).toEqual(1);
  });

  test('Link tag in Header component', () => {
    expect(header.find('Link')).toHaveLength(1);
  });

  test('<h1> tag in Header component', () => {
    expect(header.find('h1')).toHaveLength(1);
  });

  test('Section prop data type', () => {
    const sectionProp = header.find('.section__title').text();
    expect(typeof sectionProp).toBe('string');
  });

  test('Header component UI snapshot', () => {
    const header = create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
