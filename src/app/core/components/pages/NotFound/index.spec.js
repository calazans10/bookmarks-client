import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFound from './index';

describe('NotFound', () => {
  it('renders without crashing', () => {
    const props = {
      history: {
        goBack: jest.fn(),
      },
    };
    const wrapper = shallow(<NotFound {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
