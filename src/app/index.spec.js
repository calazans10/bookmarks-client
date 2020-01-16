import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './index';
import history from '../history';

it('renders without crashing', () => {
  const props = {
    history,
  };
  const wrapper = shallow(<App {...props} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
