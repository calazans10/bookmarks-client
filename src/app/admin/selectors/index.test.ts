import { bookmarks, users } from 'fixtures';
import {
  getBookmarks,
  getBookmarksCount,
  getBookmarksOffset,
  getBookmarksLimit,
  getBookmarksTotal,
  getUsers,
  getUsersCount,
  getUsersOffset,
  getUsersLimit,
  getUsersTotal,
} from './';

describe('admin selectors', () => {
  const filteredUsers = users.filter(user => !user.is_admin)

  const state = {
    admin: {
      bookmarks: {
        data: bookmarks,
        meta: {
          count: bookmarks.length,
          offset: 1,
          limit: 10,
          total: bookmarks.length,
        },
      },
      users: {
        meta: {
          count: filteredUsers.length,
          offset: 1,
          limit: 10,
          total: filteredUsers.length,
        },
        data: filteredUsers,
      },
    },
  };

  it('should create a selector that returns the list of bookmarks', () => {
    expect(getBookmarks(state)).toEqual(bookmarks);
  });

  it('should create a selector that returns the count of bookmarks', () => {
    expect(getBookmarksCount(state)).toEqual(bookmarks.length);
  });

  it('should create a selector that returns the offset of bookmarks', () => {
    expect(getBookmarksOffset(state)).toEqual(1);
  });

  it('should create a selector that returns the limit of bookmarks', () => {
    expect(getBookmarksLimit(state)).toEqual(10);
  });

  it('should create a selector that returns the total of bookmarks', () => {
    expect(getBookmarksTotal(state)).toEqual(bookmarks.length);
  });

  it('should create a selector that returns the list of users', () => {
    expect(getUsers(state)).toEqual(filteredUsers);
  });

  it('should create a selector that returns the count of users', () => {
    expect(getUsersCount(state)).toEqual(filteredUsers.length);
  });

  it('should create a selector that returns the offset of users', () => {
    expect(getUsersOffset(state)).toEqual(1);
  });

  it('should create a selector that returns the limit of users', () => {
    expect(getUsersLimit(state)).toEqual(10);
  });

  it('should create a selector that returns the total of users', () => {
    expect(getUsersTotal(state)).toEqual(filteredUsers.length);
  });
});
