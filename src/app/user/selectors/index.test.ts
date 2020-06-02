import { bookmarks, users } from 'fixtures';
import { Bookmark } from 'app/user/types';
import {
  getBookmarks,
  getBookmarksCount,
  getBookmarksOffset,
  getBookmarksLimit,
  getBookmarksTotal,
  getSelectedBookmark,
} from '.';

describe('bookmark selectors', () => {
  const user = users.find(u => !u.isAdmin);
  const filteredBookmarks = bookmarks.filter(bookmark => bookmark.userId === user!.id);

  const selectedBookmark = {} as Bookmark;

  const state = {
    user: {
      bookmarks: {
        data: filteredBookmarks,
        meta: {
          count: filteredBookmarks.length,
          offset: 1,
          limit: 10,
          total: filteredBookmarks.length,
        },
      },
      selectedBookmark,
    },
  };

  it('should create a selector that returns the list of bookmarks', () => {
    expect(getBookmarks(state)).toEqual(filteredBookmarks);
  });

  it('should create a selector that returns the count of bookmarks', () => {
    expect(getBookmarksCount(state)).toEqual(filteredBookmarks.length);
  });

  it('should create a selector that returns the offset of bookmarks', () => {
    expect(getBookmarksOffset(state)).toEqual(1);
  });

  it('should create a selector that returns the limit of bookmarks', () => {
    expect(getBookmarksLimit(state)).toEqual(10);
  });

  it('should create a selector that returns the total of bookmarks', () => {
    expect(getBookmarksTotal(state)).toEqual(filteredBookmarks.length);
  });

  it('should create a selector that returns the selected bookmark', () => {
    expect(getSelectedBookmark(state)).toEqual(selectedBookmark);
  });
});
