import {
  doRequestGetMyBookmarks,
  doSuccessGetMyBookmarks,
  doRequestCreateBookmark,
  doRequestUpdateBookmark,
  doRequestDeleteBookmark,
  doSuccessDeleteBookmark,
  doChangeSelectedBookmark,
  doChangeMyBookmarksMeta,
} from './index';
import {
  GET_MY_BOOKMARKS_REQUEST,
  GET_MY_BOOKMARKS_SUCCESS,
  CREATE_BOOKMARK_REQUEST,
  UPDATE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_SUCCESS,
  SELECTED_BOOKMARK_CHANGE,
  MY_BOOKMARKS_META_CHANGE,
} from '../types';

describe('user actions', () => {
  it('should create doRequestGetMyBookmarks action', () => {
    const offset = 0;
    const limit = 10;

    const expectedAction = {
      type: GET_MY_BOOKMARKS_REQUEST,
      payload: {
        offset,
        limit,
      },
    };

    expect(doRequestGetMyBookmarks(offset, limit)).toEqual(expectedAction);
  });

  it('should create doSuccessGetMyBookmarks action', () => {
    const meta = {
      count: 1,
      limit: 10,
      offset: 1,
      total: 1,
    };

    const data = [
      {
        id: '9b2bfb9a-3776-48ca-835a-2c17ccef44c6',
        url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
        title: 'Introducing the React RFC Process',
        user_id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
        created_at: '2020-01-21T01:31:19.489Z',
        updated_at: '2020-01-21T01:31:19.489Z',
      },
    ];

    const expectedAction = {
      type: GET_MY_BOOKMARKS_SUCCESS,
      payload: {
        meta,
        data,
      },
    };

    expect(doSuccessGetMyBookmarks(meta, data)).toEqual(expectedAction);
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
    const bookmark = {
      id: '9b2bfb9a-3776-48ca-835a-2c17ccef44c6',
      url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
      title: 'Introducing the React RFC Process',
      user_id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
      created_at: '2020-01-21T01:31:19.489Z',
      updated_at: '2020-01-21T01:31:19.489Z',
    };

    const expectedAction = {
      type: SELECTED_BOOKMARK_CHANGE,
      payload: {
        bookmark,
      },
    };
    expect(doChangeSelectedBookmark(bookmark)).toEqual(expectedAction);
  });
});

it('should create doChangeMyBookmarksMeta action', () => {
  const count = 1;
  const limit = 10;
  const offset = 1;
  const total = 1;

  const expectedAction = {
    type: MY_BOOKMARKS_META_CHANGE,
    payload: {
      count,
      offset,
      limit,
      total,
    },
  };

  expect(doChangeMyBookmarksMeta(count, offset, limit, total)).toEqual(expectedAction);
});
