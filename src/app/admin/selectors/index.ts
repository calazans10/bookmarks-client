import { AdminSelector } from '../types';

export const getBookmarks = ({ admin }: AdminSelector) => admin.bookmarks.data;

export const getBookmarksCount = ({ admin }: AdminSelector) => admin.bookmarks.meta.count;

export const getBookmarksOffset = ({ admin }: AdminSelector) => admin.bookmarks.meta.offset;

export const getBookmarksLimit = ({ admin }: AdminSelector) => admin.bookmarks.meta.limit;

export const getBookmarksTotal = ({ admin }: AdminSelector) => admin.bookmarks.meta.total;

export const getUsers = ({ admin }: AdminSelector) => admin.users.data;

export const getUsersCount = ({ admin }: AdminSelector) => admin.users.meta.count;

export const getUsersOffset = ({ admin }: AdminSelector) => admin.users.meta.offset;

export const getUsersLimit = ({ admin }: AdminSelector) => admin.users.meta.limit;

export const getUsersTotal = ({ admin }: AdminSelector) => admin.users.meta.total;
