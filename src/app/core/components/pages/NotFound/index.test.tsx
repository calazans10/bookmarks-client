import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithRedux } from 'test-utils';
import NotFound from './index';

describe('NotFound', () => {
  it('renders without crashing', () => {
    const { container } = renderWithRedux(
      <MemoryRouter initialEntries={['/unknown']}>
        <NotFound />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
