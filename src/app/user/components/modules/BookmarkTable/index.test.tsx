import React from 'react';
import { renderWithRedux } from 'test-utils';
import { BookmarkTable } from './index';
import { bookmarks, users } from '../../../../../fixtures';

describe('BookmarkTable', () => {
  it('renders without crashing', () => {
    const user = users.find(user => !user.is_admin);
    const filteredBookmarks = bookmarks.filter(bookmark => bookmark.user_id === user!.id);

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
