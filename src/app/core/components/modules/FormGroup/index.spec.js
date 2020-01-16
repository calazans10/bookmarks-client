import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormGroup from './index';

describe('FormGroup', () => {
  const defaultMeta = {
    active: false,
    data: {},
    dirty: false,
    dirtySinceLastSubmit: false,
    error: 'Este campo é requerido.',
    invalid: true,
    pristine: true,
    submitFailed: false,
    submitSucceeded: false,
    submitting: false,
    touched: false,
    valid: false,
    visited: false,
  };

  it('renders without crashing', () => {
    const props = {
      input: {
        name: 'senha',
        value: '',
      },
      meta: { ...defaultMeta, type: 'password' },
      label: 'Senha',
      type: 'password',
    };

    const wrapper = shallow(<FormGroup {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
