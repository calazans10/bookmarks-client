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
} from './index';

describe('admin selectors', () => {
  const bookmarksData = [
    {
      id: '9b2bfb9a-3776-48ca-835a-2c17ccef44c6',
      url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
      title: 'Introducing the React RFC Process',
      user: {
        id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
        name: 'John Doe',
        email: 'john.doe@example.com',
        is_admin: false,
      },
    },
  ];

  const bookmarks = {
    meta: {
      count: 1,
      offset: 1,
      limit: 10,
      total: 1,
    },
    data: bookmarksData,
  };

  const usersData = [
    {
      id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
      name: 'John Doe',
      email: 'john.doe@example.com',
      is_admin: false,
    },
  ];

  const users = {
    meta: {
      count: 1,
      offset: 1,
      limit: 10,
      total: 1,
    },
    data: usersData,
  };

  const state = {
    admin: {
      bookmarks,
      users,
    },
  };

  it('should create a selector that returns the list of bookmarks', () => {
    expect(getBookmarks(state)).toEqual(bookmarksData);
  });

  it('should create a selector that returns the count of bookmarks', () => {
    expect(getBookmarksCount(state)).toEqual(1);
  });

  it('should create a selector that returns the offset of bookmarks', () => {
    expect(getBookmarksOffset(state)).toEqual(1);
  });

  it('should create a selector that returns the limit of bookmarks', () => {
    expect(getBookmarksLimit(state)).toEqual(10);
  });

  it('should create a selector that returns the total of bookmarks', () => {
    expect(getBookmarksTotal(state)).toEqual(1);
  });

  it('should create a selector that returns the list of users', () => {
    expect(getUsers(state)).toEqual(usersData);
  });

  it('should create a selector that returns the count of users', () => {
    expect(getUsersCount(state)).toEqual(1);
  });

  it('should create a selector that returns the offset of users', () => {
    expect(getUsersOffset(state)).toEqual(1);
  });

  it('should create a selector that returns the limit of users', () => {
    expect(getUsersLimit(state)).toEqual(10);
  });

  it('should create a selector that returns the total of users', () => {
    expect(getUsersTotal(state)).toEqual(1);
  });
});
