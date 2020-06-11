import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithRedux } from 'utils/test-utils';
import { BookmarkCreate } from '.';

describe('BookmarkCreate', () => {
  it('renders without crashing', () => {
    const { container } = renderWithRedux(
      <MemoryRouter>
        <BookmarkCreate onRequestCreateBookmark={jest.fn()} />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
