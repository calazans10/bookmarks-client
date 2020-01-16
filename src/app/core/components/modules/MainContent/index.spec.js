import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainContent from './index';

describe('MainContent', () => {
  it('renders without crashing', () => {
    const props = {
      children: <p>Lorem Ipsum</p>,
    };
    const wrapper = shallow(<MainContent {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
