import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FallbackLoading from './index';

describe('FallbackLoading', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<FallbackLoading />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
