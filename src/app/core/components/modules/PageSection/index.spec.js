import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PageSection from './index';

describe('PageSection', () => {
  it('renders without crashing', () => {
    const props = {
      title: 'A title',
      children: <p>Lorem Ipsum</p>,
    };
    const wrapper = shallow(<PageSection {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
