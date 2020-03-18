import { UserSelector } from '../types';

export const getBookmarks = ({ user }: UserSelector) => user.bookmarks.data;

export const getBookmarksCount = ({ user }: UserSelector) => user.bookmarks.meta.count;

export const getBookmarksOffset = ({ user }: UserSelector) => user.bookmarks.meta.offset;

export const getBookmarksLimit = ({ user }: UserSelector) => user.bookmarks.meta.limit;

export const getBookmarksTotal = ({ user }: UserSelector) => user.bookmarks.meta.total;

export const getSelectedBookmark = ({ user }: UserSelector) => user.selectedBookmark;
