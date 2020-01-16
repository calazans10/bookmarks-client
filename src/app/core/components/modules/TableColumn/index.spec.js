import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TableColumn from './index';

describe('TableColumn', () => {
  it('renders without crashing', () => {
    const props = {
      label: 'Name',
    };
    const wrapper = shallow(<TableColumn {...props}>Test</TableColumn>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
