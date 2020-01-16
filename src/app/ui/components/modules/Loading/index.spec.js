import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Loading } from './index';

describe('Loading', () => {
  describe('when is visible', () => {
    it('renders without crashing', () => {
      const props = {
        isVisible: true,
      };
      const wrapper = shallow(<Loading {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('when is not visible', () => {
    it('renders nothing', () => {
      const props = {
        isVisible: false,
      };
      const wrapper = shallow(<Loading {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
