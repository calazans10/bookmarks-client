import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ButtonLink from './index';

describe('ButtonLink', () => {
  it('renders without crashing', () => {
    const props = {
      onClick: jest.fn(),
    };
    const wrapper = shallow(<ButtonLink {...props}>Edit</ButtonLink>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
