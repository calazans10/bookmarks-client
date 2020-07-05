import { RootState } from 'app/admin/types';

export const getBookmarks = ({ admin }: RootState) => admin.bookmarks.data;

export const getBookmarksCount = ({ admin }: RootState) => admin.bookmarks.meta.count;

export const getBookmarksOffset = ({ admin }: RootState) => admin.bookmarks.meta.offset;

export const getBookmarksLimit = ({ admin }: RootState) => admin.bookmarks.meta.limit;

export const getBookmarksTotal = ({ admin }: RootState) => admin.bookmarks.meta.total;

export const getUsers = ({ admin }: RootState) => admin.users.data;

export const getUsersCount = ({ admin }: RootState) => admin.users.meta.count;

export const getUsersOffset = ({ admin }: RootState) => admin.users.meta.offset;

export const getUsersLimit = ({ admin }: RootState) => admin.users.meta.limit;

export const getUsersTotal = ({ admin }: RootState) => admin.users.meta.total;
