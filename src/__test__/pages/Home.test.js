import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Home from '../../pages/Home';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Home />', () => {
  test('Home component render', () => {
    // Testing if the component is mounted, just in one layer of depth
    const home = shallow(
      <ProviderMock>
        <Home />
      </ProviderMock>,
    );
    expect(home.length).toEqual(1);
  });
  test('Home component UI snapshot', () => {
    const home = create(
      <ProviderMock>
        <Home />
      </ProviderMock>,
    );
    expect(home.toJSON()).toMatchSnapshot();
  });
});
