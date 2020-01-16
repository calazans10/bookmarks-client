import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PageContent from './index';

describe('PageContent', () => {
  it('renders without crashing', () => {
    const props = {
      to: '/home',
      children: <p>Test</p>,
    };
    const wrapper = shallow(<PageContent {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
