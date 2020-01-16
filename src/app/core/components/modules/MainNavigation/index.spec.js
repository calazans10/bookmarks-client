import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MainNavigation } from './index';

describe('MainNavigation', () => {
  it('renders without crashing', () => {
    const props = {
      pathname: '/home',
      title: 'Home',
      onRequestLogout: jest.fn(),
    };
    const wrapper = shallow(<MainNavigation {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
