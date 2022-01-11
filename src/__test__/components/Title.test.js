import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import Title from '../../components/Title';

describe('<Title />', () => {
  const title = mount(<Title />);
  test('Title component render', () => {
    expect(title.length).toEqual(1);
  });
  test('Title text', () => {
    expect(title.find('.header__title').text()).toEqual('Hi!What do you want tocalculate?');
  });

  test('Title h1 tags', () => {
    expect(title.find('h1')).toHaveLength(1);
  });

  test('Title <br> tags', () => {
    expect(title.find('br')).toHaveLength(2);
  });

  test('Title component UI snapshot', () => {
    const title = create(<Title />);
    expect(title.toJSON()).toMatchSnapshot();
  });
});
