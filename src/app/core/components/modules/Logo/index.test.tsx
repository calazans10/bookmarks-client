import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Logo from '.';

describe('Logo', () => {
  it('renders without crashing', () => {
    const { container } = render(<Logo to="/" />, { wrapper: MemoryRouter });
    expect(container.firstChild).toMatchSnapshot();
  });
});
