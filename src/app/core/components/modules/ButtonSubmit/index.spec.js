import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ButtonSubmit from './index';

describe('ButtonSubmit', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ButtonSubmit>Save</ButtonSubmit>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
