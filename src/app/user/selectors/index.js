export const getBookmarks = ({ user }) => user.bookmarks.data;

export const getBookmarksCount = ({ user }) => user.bookmarks.meta.count;

export const getBookmarksOffset = ({ user }) => user.bookmarks.meta.offset;

export const getBookmarksLimit = ({ user }) => user.bookmarks.meta.limit;

export const getBookmarksTotal = ({ user }) => user.bookmarks.meta.total;

export const getSelectedBookmark = ({ user }) => user.selectedBookmark;
