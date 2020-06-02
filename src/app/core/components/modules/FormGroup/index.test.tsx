import React from 'react';
import { render } from '@testing-library/react';
import FormGroup from '.';

describe('FormGroup', () => {
  const defaultMeta = {
    active: false,
    data: {},
    dirty: false,
    dirtySinceLastSubmit: false,
    error: 'This field is required.',
    invalid: true,
    pristine: true,
    submitFailed: false,
    submitSucceeded: false,
    touched: false,
    valid: false,
    visited: false,
  };

  describe('when is valid', () => {
    it('renders without crashing', () => {
      const props = {
        input: {
          name: 'password',
        },
        meta: { ...defaultMeta, touched: false, type: 'password' },
        label: 'Password',
        type: 'password',
      };

      const { container } = render(<FormGroup {...props} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('when is invalid', () => {
    it('renders without crashing', () => {
      const props = {
        input: {
          name: 'password',
        },
        meta: { ...defaultMeta, touched: true, type: 'password' },
        label: 'Password',
        type: 'password',
      };

      const { container } = render(<FormGroup {...props} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
