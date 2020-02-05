import React from 'react';
import { render } from '@testing-library/react';
import { Alert } from './index';

describe('Alert', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Alert message="Invalid credendials" isVisible onHideAlert={jest.fn()} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
