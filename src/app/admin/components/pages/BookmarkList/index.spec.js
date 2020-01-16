import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BookmarkList } from './index';

describe('BookmarkList', () => {
  it('renders without crashing', () => {
    const props = {
      count: 1,
      offset: 1,
      limit: 10,
      total: 1,
      onRequestGetBookmarks: jest.fn(),
    };
    const wrapper = shallow(<BookmarkList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
