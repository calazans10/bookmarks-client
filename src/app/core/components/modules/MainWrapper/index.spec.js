import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainWrapper from './index';

describe('MainWrapper', () => {
  it('renders without crashing', () => {
    const props = {
      children: <p>Lorem Ipsum</p>,
    };
    const wrapper = shallow(<MainWrapper {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
