import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Confirm } from './index';

describe('Confirm', () => {
  describe('when is visible', () => {
    it('renders without crashing', () => {
      const props = {
        title: 'Solicitar bobina',
        text: 'Você confirma a solicitação de bobina?',
        isVisible: true,
        onClick: jest.fn(),
        onHideConfirm: jest.fn(),
      };
      const wrapper = shallow(<Confirm {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
