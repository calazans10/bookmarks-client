import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainForm from './index';

describe('MainForm', () => {
  it('renders without crashing', () => {
    const props = {
      legend: 'A legend',
      onSubmit: jest.fn(),
      children: (
        <div>
          <label htmlFor="test">A label</label>
          <input id="test" name="test" type="text" />
        </div>
      ),
    };
    const wrapper = shallow(<MainForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
