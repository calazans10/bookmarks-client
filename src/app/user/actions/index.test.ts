import { bookmarks, users } from 'fixtures';
import {
  GET_BOOKMARKS_REQUEST,
  GET_BOOKMARKS_SUCCESS,
  CREATE_BOOKMARK_REQUEST,
  UPDATE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_SUCCESS,
  SELECTED_BOOKMARK_CHANGE,
  BOOKMARKS_META_CHANGE,
} from 'app/user/types';
import {
  doRequestGetBookmarks,
  doSuccessGetBookmarks,
  doRequestCreateBookmark,
  doRequestUpdateBookmark,
  doRequestDeleteBookmark,
  doSuccessDeleteBookmark,
  doChangeSelectedBookmark,
  doChangeBookmarksMeta,
} from '.';

describe('user actions', () => {
  const user = users.find(u => !u.isAdmin);
  const filteredBookmarks = bookmarks.filter(bookmark => bookmark.userId === user!.id);

  it('should create doRequestGetBookmarks action', () => {
    const offset = 1;
    const limit = 10;

    const expectedAction = {
      type: GET_BOOKMARKS_REQUEST,
      payload: {
        offset,
        limit,
      },
    };

    expect(doRequestGetBookmarks(offset, limit)).toEqual(expectedAction);
  });

  it('should create doSuccessGetBookmarks action', () => {
    const meta = {
      count: filteredBookmarks.length,
      offset: 1,
      limit: 10,
      total: filteredBookmarks.length,
    };

    const expectedAction = {
      type: GET_BOOKMARKS_SUCCESS,
      payload: {
        meta,
        data: filteredBookmarks,
      },
    };

    expect(doSuccessGetBookmarks(meta, filteredBookmarks)).toEqual(expectedAction);
  });

  it('should create doRequestCreateBookmark action', () => {
    const data = {
      url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
      title: 'Introducing the React RFC Process',
    };

    const expectedAction = {
      type: CREATE_BOOKMARK_REQUEST,
      payload: {
        data,
      },
    };
    expect(doRequestCreateBookmark(data)).toEqual(expectedAction);
  });

  it('should create doRequestUpdateBookmark action', () => {
    const bookmarkId = '9b2bfb9a-3776-48ca-835a-2c17ccef44c6';

    const data = {
      url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
      title: 'Introducing the React RFC Process',
    };

    const expectedAction = {
      type: UPDATE_BOOKMARK_REQUEST,
      payload: {
        bookmarkId,
        data,
      },
    };
    expect(doRequestUpdateBookmark(bookmarkId, data)).toEqual(expectedAction);
  });

  it('should create doRequestDeleteBookmark action', () => {
    const bookmarkId = '9b2bfb9a-3776-48ca-835a-2c17ccef44c6';

    const expectedAction = {
      type: DELETE_BOOKMARK_REQUEST,
      payload: {
        bookmarkId,
      },
    };
    expect(doRequestDeleteBookmark(bookmarkId)).toEqual(expectedAction);
  });

  it('should create doSuccessDeleteBookmark action', () => {
    const bookmarkId = '9b2bfb9a-3776-48ca-835a-2c17ccef44c6';

    const expectedAction = {
      type: DELETE_BOOKMARK_SUCCESS,
      payload: {
        bookmarkId,
      },
    };
    expect(doSuccessDeleteBookmark(bookmarkId)).toEqual(expectedAction);
  });

  it('should create doChangeSelectedBookmark action', () => {
    const bookmark = filteredBookmarks[0];

    const expectedAction = {
      type: SELECTED_BOOKMARK_CHANGE,
      payload: {
        bookmark,
      },
    };
    expect(doChangeSelectedBookmark(bookmark)).toEqual(expectedAction);
  });
});

it('should create doChangeBookmarksMeta action', () => {
  const count = 1;
  const offset = 1;
  const limit = 10;
  const total = 1;

  const expectedAction = {
    type: BOOKMARKS_META_CHANGE,
    payload: {
      count,
      offset,
      limit,
      total,
    },
  };

  expect(doChangeBookmarksMeta(count, offset, limit, total)).toEqual(expectedAction);
});
