import { bookmarks, users } from 'fixtures';
import {
  doSuccessGetBookmarks,
  doSuccessDeleteBookmark,
  doChangeSelectedBookmark,
  doChangeBookmarksMeta,
} from 'app/user/actions';
import { Bookmark, UserActionTypes } from 'app/user/types';
import reducer from './';

describe('user reducer', () => {
  const user = users.find(user => !user.is_admin);
  const filteredBookmarks = bookmarks.filter(bookmark => bookmark.user_id === user!.id);

  it('should return the initial state', () => {
    const expectedState = {
      bookmarks: {
        meta: {
          count: 0,
          offset: 1,
          limit: 10,
          total: 0,
        },
        data: [],
      },
      selectedBookmark: {},
    };
    expect(reducer(undefined, {} as UserActionTypes)).toEqual(expectedState);
  });

  it('should handle GET_BOOKMARKS_SUCCESS', () => {
    // Arrange
    const meta = {
      count: filteredBookmarks.length,
      limit: 10,
      offset: 1,
      total: filteredBookmarks.length,
    };

    const expectedState = {
      bookmarks: {
        meta,
        data: filteredBookmarks,
      },
      selectedBookmark: {},
    };

    // Act
    const action = doSuccessGetBookmarks(meta, filteredBookmarks);

    // Assert
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle DELETE_BOOKMARK_SUCCESS', () => {
    // Arrange
    const bookmarkId = filteredBookmarks[0].id;
    const expectedBookmarks = filteredBookmarks.filter(bookmark => bookmark.id !== bookmarkId);

    const initialState = {
      bookmarks: {
        meta: {
          count: filteredBookmarks.length,
          offset: 1,
          limit: 10,
          total: filteredBookmarks.length,
        },
        data: filteredBookmarks,
      },
      selectedBookmark: {} as Bookmark,
    };

    const expectedState = {
      bookmarks: {
        meta: {
          count: expectedBookmarks.length,
          offset: 1,
          limit: 10,
          total: expectedBookmarks.length,
        },
        data: expectedBookmarks,
      },
      selectedBookmark: {},
    };

    // Act
    const action = doSuccessDeleteBookmark(bookmarkId);

    // Assert
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SELECTED_BOOKMARK_CHANGE', () => {
    // Arrange
    const bookmark = filteredBookmarks[0];

    const initialState = {
      bookmarks: {
        meta: {
          count: filteredBookmarks.length,
          offset: 1,
          limit: 10,
          total: filteredBookmarks.length,
        },
        data: filteredBookmarks,
      },
      selectedBookmark: {} as Bookmark,
    };

    const expectedState = {
      bookmarks: {
        meta: {
          count: filteredBookmarks.length,
          offset: 1,
          limit: 10,
          total: filteredBookmarks.length,
        },
        data: filteredBookmarks,
      },
      selectedBookmark: bookmark,
    };

    // Act
    const action = doChangeSelectedBookmark(bookmark);

    // Assert
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle BOOKMARKS_META_CHANGE', () => {
    // Arrange
    const count = 1;
    const offset = 1;
    const limit = 10;
    const total = 1;

    const expectedState = {
      bookmarks: {
        meta: {
          count,
          offset,
          limit,
          total,
        },
        data: [],
      },
      selectedBookmark: {},
    };

    // Act
    const action = doChangeBookmarksMeta(count, offset, limit, total);

    // Assert
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
