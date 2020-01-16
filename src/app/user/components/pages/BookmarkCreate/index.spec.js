import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BookmarkCreate } from './index';

describe('BookmarkCreate', () => {
  it('renders without crashing', () => {
    const props = {
      onRequestCreateBookmark: jest.fn(),
    };
    const wrapper = shallow(<BookmarkCreate {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
