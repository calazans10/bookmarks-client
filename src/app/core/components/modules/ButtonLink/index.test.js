import React from 'react';
import { render } from '@testing-library/react';
import ButtonLink from './index';

describe('ButtonLink', () => {
  it('renders without crashing', () => {
    const { container } = render(<ButtonLink onClick={jest.fn()}>Edit</ButtonLink>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
