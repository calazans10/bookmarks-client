import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BookmarkForm from './index';

describe('BookmarkForm', () => {
  it('renders without crashing', () => {
    const props = {
      legend: 'A legend',
      action: 'Save',
      onSubmit: jest.fn(),
    };
    const wrapper = shallow(<BookmarkForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
