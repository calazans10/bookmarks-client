import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { bookmarks, users } from 'fixtures';
import { renderWithRedux } from 'utils/test-utils';
import { BookmarkUpdate } from '.';

describe('BookmarkUpdate', () => {
  it('renders without crashing', () => {
    const user = users.find(u => !u.isAdmin);
    const filteredBookmarks = bookmarks.filter(bookmark => bookmark.userId === user!.id);

    const { container } = renderWithRedux(
      <MemoryRouter>
        <BookmarkUpdate bookmark={filteredBookmarks[0]} onRequestUpdateBookmark={jest.fn()} />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
