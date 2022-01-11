import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Footer component', () => {
    expect(footer.length).toEqual(1);
  });
  test('Footer text', () => {
    expect(footer.find('.footer').text()).toEqual('The total will be shown with 1 or 2 decimals depending of the values introduced');
  });
  test('Footer component UI Snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
