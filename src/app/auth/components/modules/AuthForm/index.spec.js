import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AuthForm from './index';

describe('AuthForm', () => {
  it('renders without crashing', () => {
    const props = {
      legend: 'A legend',
      action: 'Save',
      isRegistration: false,
      onSubmit: jest.fn(),
    };
    const wrapper = shallow(<AuthForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
