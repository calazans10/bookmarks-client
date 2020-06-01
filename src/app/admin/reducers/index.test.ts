import { bookmarks, users } from 'fixtures';
import {
  doSuccessGetUsers,
  doSuccessGetBookmarks,
  doChangeBookmarksMeta,
  doChangeUsersMeta,
} from 'app/admin/actions';
import { AdminActionTypes } from 'app/admin/types';
import reducer from './';

describe('admin reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      bookmarks: {
        data: [],
        meta: {
          count: 0,
          offset: 1,
          limit: 10,
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
    // Arrange
    const meta = {
      count: bookmarks.length,
      offset: 1,
      limit: 10,
      total: bookmarks.length,
    };

    const expectedState = {
      bookmarks: {
        meta,
        data: bookmarks,
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

    // Act
    const action = doSuccessGetBookmarks(meta, bookmarks);

    // Assert
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle GET_USERS_SUCCESS', () => {
    // Arrange
    const data = users.filter(user => !user.is_admin)

    const meta = {
      count: data.length,
      offset: 1,
      limit: 10,
      total: data.length,
    };
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

    // Act
    const action = doSuccessGetUsers(meta, data);

    // Assert
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle BOOKMARKS_META_CHANGE', () => {
    // Arrange
    const count = 1;
    const offset = 1;
    const limit = 10;
    const total = 1;

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

    // Act
    const action = doChangeBookmarksMeta(count, offset, limit, total);

    // Assert
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle USERS_META_CHANGE', () => {
    // Arrange
    const count = 1;
    const offset = 1;
    const limit = 10;
    const total = 1;

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

    // Act
    const action = doChangeUsersMeta(count, offset, limit, total);

    // Assert
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
