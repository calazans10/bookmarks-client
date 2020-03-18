import {
  getBookmarks,
  getBookmarksCount,
  getBookmarksOffset,
  getBookmarksLimit,
  getBookmarksTotal,
  getSelectedBookmark,
} from './index';
import { Bookmark } from '../types';

describe('bookmark selectors', () => {
  const data = [
    {
      id: '9b2bfb9a-3776-48ca-835a-2c17ccef44c6',
      url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
      title: 'Introducing the React RFC Process',
      user_id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
      created_at: '2020-01-21T01:31:19.489Z',
      updated_at: '2020-01-21T01:31:19.489Z',
      admin: false,
    },
  ];

  const bookmarks = {
    meta: {
      count: 1,
      offset: 1,
      limit: 10,
      total: 1,
    },
    data,
  };

  const selectedBookmark = {} as Bookmark;

  const state = {
    user: {
      bookmarks,
      selectedBookmark,
    },
  };

  it('should create a selector that returns the list of bookmarks', () => {
    expect(getBookmarks(state)).toEqual(data);
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

  it('should create a selector that returns the selected bookmark', () => {
    expect(getSelectedBookmark(state)).toEqual(selectedBookmark);
  });
});
