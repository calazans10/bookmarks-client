import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormLabel from './index';

describe('FormLabel', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<FormLabel htmlFor="test">A label</FormLabel>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
