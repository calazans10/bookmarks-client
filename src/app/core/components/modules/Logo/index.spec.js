import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Logo from './index';

describe('Logo', () => {
  it('renders without crashing', () => {
    const props = {
      to: '/',
    };
    const wrapper = shallow(<Logo {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
