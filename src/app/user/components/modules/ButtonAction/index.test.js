import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ButtonAction from './index';

describe('ButtonAction', () => {
  it('renders without crashing', () => {
    const props = {
      kind: 'success',
      onClick: jest.fn(),
    };
    const wrapper = shallow(<ButtonAction {...props}>Edit</ButtonAction>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
