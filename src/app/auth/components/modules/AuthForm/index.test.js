import React from 'react';
import { render } from '@testing-library/react';
import AuthForm from './index';

describe('AuthForm', () => {
  describe('when is registration', () => {
    it('renders without crashing', () => {
      const { container } = render(
        <AuthForm legend="A legend" action="Save" isRegistration onSubmit={jest.fn()} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('when is not registration', () => {
    it('renders without crashing', () => {
      const { container } = render(
        <AuthForm legend="A legend" action="Save" isRegistration={false} onSubmit={jest.fn()} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
