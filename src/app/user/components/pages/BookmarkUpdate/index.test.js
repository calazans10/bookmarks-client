import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BookmarkUpdate } from './index';

describe('BookmarkUpdate', () => {
  it('renders without crashing', () => {
    const props = {
      bookmark: {
        id: '9b2bfb9a-3776-48ca-835a-2c17ccef44c6',
        url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
        title: 'Introducing the React RFC Process',
        user: {
          id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
          name: 'John Doe',
          email: 'john.doe@example.com',
          is_admin: false,
        },
      },
      onRequestUpdateBookmark: jest.fn(),
    };
    const wrapper = shallow(<BookmarkUpdate {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
