import {
  doRequestGetBookmarks,
  doSuccessGetBookmarks,
  doRequestGetUsers,
  doSuccessGetUsers,
  doChangeBookmarksMeta,
  doChangeUsersMeta,
} from './index';
import {
  GET_BOOKMARKS_REQUEST,
  GET_BOOKMARKS_SUCCESS,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  BOOKMARKS_META_CHANGE,
  USERS_META_CHANGE,
} from '../types';

describe('admin actions', () => {
  it('should create doRequestGetBookmarks action', () => {
    const offset = 0;
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
      type: GET_BOOKMARKS_SUCCESS,
      payload: {
        meta,
        data,
      },
    };

    expect(doSuccessGetBookmarks(meta, data)).toEqual(expectedAction);
  });

  it('should create doRequestGetUsers action', () => {
    const offset = 0;
    const limit = 10;

    const expectedAction = {
      type: GET_USERS_REQUEST,
      payload: {
        offset,
        limit,
      },
    };

    expect(doRequestGetUsers(offset, limit)).toEqual(expectedAction);
  });

  it('should create doSuccessGetUsers action', () => {
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

    const expectedAction = {
      type: GET_USERS_SUCCESS,
      payload: {
        meta,
        data,
      },
    };

    expect(doSuccessGetUsers(meta, data)).toEqual(expectedAction);
  });

  it('should create doChangeBookmarksMeta action', () => {
    const count = 1;
    const limit = 10;
    const offset = 1;
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

  it('should create doChangeUsersMeta action', () => {
    const count = 1;
    const limit = 10;
    const offset = 1;
    const total = 1;

    const expectedAction = {
      type: USERS_META_CHANGE,
      payload: {
        count,
        offset,
        limit,
        total,
      },
    };

    expect(doChangeUsersMeta(count, offset, limit, total)).toEqual(expectedAction);
  });
});
