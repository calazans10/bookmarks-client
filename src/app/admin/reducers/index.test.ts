import reducer from './index';
import {
  doSuccessGetUsers,
  doSuccessGetBookmarks,
  doChangeBookmarksMeta,
  doChangeUsersMeta,
} from '../actions';
import { AdminActionTypes } from '../types';

describe('admin reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      bookmarks: {
        data: [],
        meta: {
          count: 0,
          limit: 10,
          offset: 1,
          total: 0,
        },
      },
      users: {
        meta: {
          count: 0,
          offset: 1,
          limit: 10,
          total: 0,
        },
        data: [],
      },
    };
    expect(reducer(undefined, {} as AdminActionTypes)).toEqual(expectedState);
  });

  it('should handle GET_BOOKMARKS_SUCCESS', () => {
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

    const action = doSuccessGetBookmarks(meta, data);
    const expectedState = {
      bookmarks: {
        meta,
        data,
      },
      users: {
        meta: {
          count: 0,
          offset: 1,
          limit: 10,
          total: 0,
        },
        data: [],
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle GET_USERS_SUCCESS', () => {
    const meta = {
      count: 1,
      limit: 10,
      offset: 1,
      total: 1,
    };
    const data = [
      {
        id: '194725c1-739a-46e4-9746-013da114c85c',
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        password_digest: '$2a$12$oT4288118r77jU5NEBTN3e0heHXkfFPKwYxhyyVnTTgqoOy4fWO7q',
        is_admin: false,
        created_at: '2020-01-20T20:00:39.614Z',
        updated_at: '2020-01-20T20:00:39.614Z',
        bookmarks_count: 3,
      },
    ];

    const action = doSuccessGetUsers(meta, data);
    const expectedState = {
      bookmarks: {
        data: [],
        meta: {
          count: 0,
          limit: 10,
          offset: 1,
          total: 0,
        },
      },
      users: {
        meta,
        data,
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle BOOKMARKS_META_CHANGE', () => {
    const count = 1;
    const limit = 10;
    const offset = 1;
    const total = 1;

    const action = doChangeBookmarksMeta(count, offset, limit, total);
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
      users: {
        meta: {
          count: 0,
          limit: 10,
          offset: 1,
          total: 0,
        },
        data: [],
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle USERS_META_CHANGE', () => {
    const count = 1;
    const limit = 10;
    const offset = 1;
    const total = 1;

    const action = doChangeUsersMeta(count, offset, limit, total);
    const expectedState = {
      bookmarks: {
        data: [],
        meta: {
          count: 0,
          limit: 10,
          offset: 1,
          total: 0,
        },
      },
      users: {
        meta: {
          count,
          offset,
          limit,
          total,
        },
        data: [],
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});