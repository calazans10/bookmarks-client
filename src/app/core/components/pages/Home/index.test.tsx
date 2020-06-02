import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithRedux } from 'utils/test-utils';
import { Home } from './';

describe('Home', () => {
  it('renders without crashing', () => {
    const { container } = renderWithRedux(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
