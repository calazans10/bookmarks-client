import { RootState } from 'app/user/types';

export const getBookmarks = ({ user }: RootState) => user.bookmarks.data;

export const getBookmarksCount = ({ user }: RootState) => user.bookmarks.meta.count;

export const getBookmarksOffset = ({ user }: RootState) => user.bookmarks.meta.offset;

export const getBookmarksLimit = ({ user }: RootState) => user.bookmarks.meta.limit;

export const getBookmarksTotal = ({ user }: RootState) => user.bookmarks.meta.total;

export const getSelectedBookmark = ({ user }: RootState) => user.selectedBookmark;
