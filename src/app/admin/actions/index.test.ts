import { bookmarks, users } from 'fixtures';
import {
  GET_BOOKMARKS_REQUEST,
  GET_BOOKMARKS_SUCCESS,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  BOOKMARKS_META_CHANGE,
  USERS_META_CHANGE,
} from 'app/admin/types';
import {
  doRequestGetBookmarks,
  doSuccessGetBookmarks,
  doRequestGetUsers,
  doSuccessGetUsers,
  doChangeBookmarksMeta,
  doChangeUsersMeta,
} from './';


describe('admin actions', () => {
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
      count: bookmarks.length,
      offset: 1,
      limit: 10,
      total: bookmarks.length,
    };

    const expectedAction = {
      type: GET_BOOKMARKS_SUCCESS,
      payload: {
        meta,
        data: bookmarks,
      },
    };

    expect(doSuccessGetBookmarks(meta, bookmarks)).toEqual(expectedAction);
  });

  it('should create doRequestGetUsers action', () => {
    const offset = 1;
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
    const data = users.filter(user => !user.is_admin);

    const meta = {
      count: data.length,
      offset: 1,
      limit: 10,
      total: data.length,
    };

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

  it('should create doChangeUsersMeta action', () => {
    const count = 1;
    const offset = 1;
    const limit = 10;
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
