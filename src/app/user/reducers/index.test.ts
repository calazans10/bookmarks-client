import reducer from './index';
import {
  doSuccessGetMyBookmarks,
  doSuccessDeleteBookmark,
  doChangeSelectedBookmark,
  doChangeMyBookmarksMeta,
} from '../actions';
import { Bookmark, UserActionTypes } from '../types';

describe('user reducer', () => {
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

  it('should handle GET_MY_BOOKMARKS_SUCCESS', () => {
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

    const action = doSuccessGetMyBookmarks(meta, data);
    const expectedState = {
      bookmarks: {
        meta,
        data,
      },
      selectedBookmark: {},
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle DELETE_BOOKMARK_SUCCESS', () => {
    const bookmarkId = '9b2bfb9a-3776-48ca-835a-2c17ccef44c6';

    const action = doSuccessDeleteBookmark(bookmarkId);

    const initialState = {
      bookmarks: {
        meta: {
          count: 1,
          offset: 1,
          limit: 10,
          total: 1,
        },
        data: [
          {
            id: '9b2bfb9a-3776-48ca-835a-2c17ccef44c6',
            url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
            title: 'Introducing the React RFC Process',
            user_id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
            created_at: '2020-01-21T01:31:19.489Z',
            updated_at: '2020-01-21T01:31:19.489Z',
          },
        ],
      },
      selectedBookmark: {} as Bookmark,
    };

    const expectedState = {
      bookmarks: {
        meta: {
          count: 1,
          offset: 1,
          limit: 10,
          total: 1,
        },
        data: [],
      },
      selectedBookmark: {},
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SELECTED_BOOKMARK_CHANGE', () => {
    const bookmark = {
      id: '9b2bfb9a-3776-48ca-835a-2c17ccef44c6',
      url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
      title: 'Introducing the React RFC Process',
      user_id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
      created_at: '2020-01-21T01:31:19.489Z',
      updated_at: '2020-01-21T01:31:19.489Z',
    };

    const action = doChangeSelectedBookmark(bookmark);

    const initialState = {
      bookmarks: {
        meta: {
          count: 1,
          offset: 1,
          limit: 10,
          total: 1,
        },
        data: [
          {
            id: '9b2bfb9a-3776-48ca-835a-2c17ccef44c6',
            url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
            title: 'Introducing the React RFC Process',
            user_id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
            created_at: '2020-01-21T01:31:19.489Z',
            updated_at: '2020-01-21T01:31:19.489Z',
          },
        ],
      },
      selectedBookmark: {} as Bookmark,
    };

    const expectedState = {
      bookmarks: {
        meta: {
          count: 1,
          offset: 1,
          limit: 10,
          total: 1,
        },
        data: [
          {
            id: '9b2bfb9a-3776-48ca-835a-2c17ccef44c6',
            url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
            title: 'Introducing the React RFC Process',
            user_id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
            created_at: '2020-01-21T01:31:19.489Z',
            updated_at: '2020-01-21T01:31:19.489Z',
          },
        ],
      },
      selectedBookmark: bookmark,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle MY_BOOKMARKS_META_CHANGE', () => {
    const count = 1;
    const limit = 10;
    const offset = 1;
    const total = 1;

    const action = doChangeMyBookmarksMeta(count, offset, limit, total);
    const expectedState = {
      bookmarks: {
        data: [],
        meta: {
          count,
          offset,
          limit,
          total,
        },
      },
      selectedBookmark: {},
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
