import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormError from './index';

describe('FormError', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<FormError>A message</FormError>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
