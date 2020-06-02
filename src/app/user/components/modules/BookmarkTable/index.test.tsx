import React from 'react';
import { renderWithRedux } from 'utils/test-utils';
import { bookmarks, users } from 'fixtures';
import { BookmarkTable } from '.';

describe('BookmarkTable', () => {
  it('renders without crashing', () => {
    const user = users.find(u => !u.isAdmin);
    const filteredBookmarks = bookmarks.filter(bookmark => bookmark.userId === user!.id);

    const { container } = renderWithRedux(
      <BookmarkTable
        bookmarks={filteredBookmarks}
        onChangeLocation={jest.fn()}
        onShowConfirm={jest.fn()}
        onChangeSelectedBookmark={jest.fn()}
        onRequestDeleteBookmark={jest.fn()}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
