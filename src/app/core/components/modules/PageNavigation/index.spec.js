import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PageNavigation from './index';

describe('PageNavigation', () => {
  it('renders without crashing', () => {
    const props = {
      pathname: '/home',
      title: 'Home',
    };
    const wrapper = shallow(<PageNavigation {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
