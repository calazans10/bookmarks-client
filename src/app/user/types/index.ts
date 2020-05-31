export const GET_BOOKMARKS_REQUEST = 'user/GET_BOOKMARKS_REQUEST';
export const GET_BOOKMARKS_SUCCESS = 'user/GET_BOOKMARKS_SUCCESS';
export const CREATE_BOOKMARK_REQUEST = 'user/CREATE_BOOKMARK_REQUEST';
export const UPDATE_BOOKMARK_REQUEST = 'user/UPDATE_BOOKMARK_REQUEST';
export const DELETE_BOOKMARK_REQUEST = 'user/DELETE_BOOKMARK_REQUEST';
export const DELETE_BOOKMARK_SUCCESS = 'user/DELETE_BOOKMARK_SUCCESS';
export const SELECTED_BOOKMARK_CHANGE = 'user/SELECTED_BOOKMARK_CHANGE';
export const BOOKMARKS_META_CHANGE = 'user/BOOKMARKS_META_CHANGE';

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface Meta {
  count: number;
  limit: number;
  offset: number;
  total: number;
}

export interface BookmarkData {
  title: string;
  url: string;
}

export interface UserState {
  bookmarks: {
    meta: Meta;
    data: Bookmark[];
  };
  selectedBookmark: Bookmark;
}

export interface UserSelector {
  user: UserState;
}

export interface RequestGetBookmarksAction {
  type: typeof GET_BOOKMARKS_REQUEST;
  payload: {
    offset: number;
    limit: number;
  };
}

interface SuccessGetBookmarksAction {
  type: typeof GET_BOOKMARKS_SUCCESS;
  payload: {
    data: Bookmark[];
    meta: Meta;
  };
}

export interface RequestCreateBookmarkAction {
  type: typeof CREATE_BOOKMARK_REQUEST;
  payload: {
    data: BookmarkData;
  };
}

export interface RequestUpdateBookmarkAction {
  type: typeof UPDATE_BOOKMARK_REQUEST;
  payload: {
    bookmarkId: string;
    data: BookmarkData;
  };
}

export interface RequestDeleteBookmarkAction {
  type: typeof DELETE_BOOKMARK_REQUEST;
  payload: {
    bookmarkId: string;
  };
}

interface SuccessDeleteBookmarkAction {
  type: typeof DELETE_BOOKMARK_SUCCESS;
  payload: {
    bookmarkId: string;
  };
}

interface ChangeSelectedBookmarkAction {
  type: typeof SELECTED_BOOKMARK_CHANGE;
  payload: {
    bookmark: Bookmark;
  };
}

interface ChangeBookmarksMetaAction {
  type: typeof BOOKMARKS_META_CHANGE;
  payload: {
    count: number;
    offset: number;
    limit: number;
    total: number;
  };
}

export type UserActionTypes =
  | RequestGetBookmarksAction
  | SuccessGetBookmarksAction
  | RequestCreateBookmarkAction
  | RequestUpdateBookmarkAction
  | RequestDeleteBookmarkAction
  | SuccessDeleteBookmarkAction
  | ChangeSelectedBookmarkAction
  | ChangeBookmarksMetaAction;
