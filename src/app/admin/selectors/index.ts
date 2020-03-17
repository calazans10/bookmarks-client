export const getBookmarks = ({ admin }) => admin.bookmarks.data;

export const getBookmarksCount = ({ admin }) => admin.bookmarks.meta.count;

export const getBookmarksOffset = ({ admin }) => admin.bookmarks.meta.offset;

export const getBookmarksLimit = ({ admin }) => admin.bookmarks.meta.limit;

export const getBookmarksTotal = ({ admin }) => admin.bookmarks.meta.total;

export const getUsers = ({ admin }) => admin.users.data;

export const getUsersCount = ({ admin }) => admin.users.meta.count;

export const getUsersOffset = ({ admin }) => admin.users.meta.offset;

export const getUsersLimit = ({ admin }) => admin.users.meta.limit;

export const getUsersTotal = ({ admin }) => admin.users.meta.total;
