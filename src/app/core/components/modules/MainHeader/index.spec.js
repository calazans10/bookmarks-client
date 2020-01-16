import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainHeader from './index';

describe('MainHeader', () => {
  it('renders without crashing', () => {
    const props = {
      children: <p>Lorem Ipsum</p>,
    };
    const wrapper = shallow(<MainHeader {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
