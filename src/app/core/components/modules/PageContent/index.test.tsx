import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithRedux } from 'test-utils';
import PageContent from './';

describe('PageContent', () => {
  it('renders without crashing', () => {
    const { container } = renderWithRedux(
      <MemoryRouter>
        <PageContent to="/home">
          <p>Lorem Ipsum</p>
        </PageContent>
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
