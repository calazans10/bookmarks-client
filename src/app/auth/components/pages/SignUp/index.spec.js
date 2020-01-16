import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SignUp } from './index';

describe('SignUp', () => {
  it('renders without crashing', () => {
    const props = {
      onRequestRegistration: jest.fn(),
    };
    const wrapper = shallow(<SignUp {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
