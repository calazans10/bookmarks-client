import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderWithRedux from '../../../../../lib/renderWithRedux';
import { Home } from './index';

describe('Home', () => {
  it('renders without crashing', () => {
    const { container } = renderWithRedux(
      <MemoryRouter>
        <Home onRequestLoading={jest.fn()} />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
