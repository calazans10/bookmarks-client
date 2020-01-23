import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SignIn } from './index';

describe('SignIn', () => {
  it('renders without crashing', () => {
    const props = {
      onRequestLogin: jest.fn(),
    };
    const wrapper = shallow(<SignIn {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
