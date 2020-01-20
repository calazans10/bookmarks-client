import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pagination from './index';

describe('Pagination', () => {
  it('renders without crashing', () => {
    const props = {
      initialPage: 0,
      pageCount: 10,
      onChange: jest.fn(),
    };
    const wrapper = shallow(<Pagination {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
