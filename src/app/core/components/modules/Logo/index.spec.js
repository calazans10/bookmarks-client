import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Logo from './index';

describe('Logo', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <Logo to="/" />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
