import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Alert } from './index';

describe('Alert', () => {
  describe('when is visible', () => {
    it('renders without crashing', () => {
      const props = {
        message: 'Invalid credendials',
        isVisible: true,
        onHideAlert: jest.fn(),
      };
      const wrapper = shallow(<Alert {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
