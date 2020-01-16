import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Home } from './index';

describe('Home', () => {
  it('renders without crashing', () => {
    const props = {
      onRequestLoading: jest.fn(),
    };
    const wrapper = shallow(<Home {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
