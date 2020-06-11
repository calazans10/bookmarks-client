import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithRedux } from 'utils/test-utils';
import NotFound from '.';

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
