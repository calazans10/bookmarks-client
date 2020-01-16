import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormInput from './index';

describe('FormInput', () => {
  it('renders without crashing', () => {
    const props = {
      input: {
        name: 'test',
        value: '',
      },
      type: 'text',
      mask: '',
      formatChars: { 9: '[0-9]', '?': '[0-9]' },
      onFocus: jest.fn(),
      onBlur: jest.fn(),
      autoFocus: false,
      disabled: false,
      placeholder: 'A placeholder',
    };
    const wrapper = shallow(<FormInput {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
