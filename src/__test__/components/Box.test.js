import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Box from '../../components/Box';

describe('<Box /> in default mode', () => {
  test('Box component render', () => {
    const box = shallow(<Box />);
    expect(box.length).toEqual(1);
  });
  // Mounting box component with mount to access to DOM tree.
  const box = mount(<Box />);
  test('Box title', () => {
    const boxTitle = box.find('.container__title');
    expect(boxTitle).toHaveLength(1);
    expect(typeof boxTitle.text()).toBe('string');
  });

  test('To not have container__animation container', () => {
    expect(box.find('.container__animation')).toHaveLength(0);
  });

  test('Box component UI snapshot', () => {
    const box = create(<Box />);
    expect(box.toJSON()).toMatchSnapshot();
  });
});

describe('<Box /> in statistics mode', () => {
  const box = mount(
    <Box isStatistics />,
  );
  test('Box component render', () => {
    expect(box.length).toEqual(1);
  });

  test('Box component UI snapshot', () => {
    const box = create(<Box isStatistics />);
    expect(box.toJSON()).toMatchSnapshot();
  });
});
