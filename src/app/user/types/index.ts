export const GET_MY_BOOKMARKS_REQUEST = 'GET_MY_BOOKMARKS_REQUEST';
export const GET_MY_BOOKMARKS_SUCCESS = 'GET_MY_BOOKMARKS_SUCCESS';
export const CREATE_BOOKMARK_REQUEST = 'CREATE_BOOKMARK_REQUEST';
export const UPDATE_BOOKMARK_REQUEST = 'UPDATE_BOOKMARK_REQUEST';
export const DELETE_BOOKMARK_REQUEST = 'DELETE_BOOKMARK_REQUEST';
export const DELETE_BOOKMARK_SUCCESS = 'DELETE_BOOKMARK_SUCCESS';
export const SELECTED_BOOKMARK_CHANGE = 'SELECTED_BOOKMARK_CHANGE';
export const MY_BOOKMARKS_META_CHANGE = 'MY_BOOKMARKS_META_CHANGE';

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

interface RequestGetMyBookmarksAction {
  type: typeof GET_MY_BOOKMARKS_REQUEST;
  payload: {
    offset: number;
    limit: number;
  };
}

interface SuccessGetMyBookmarksAction {
  type: typeof GET_MY_BOOKMARKS_SUCCESS;
  payload: {
    data: Bookmark[];
    meta: Meta;
  };
}

interface RequestCreateBookmarkAction {
  type: typeof CREATE_BOOKMARK_REQUEST;
  payload: {
    data: BookmarkData;
  };
}

interface RequestUpdateBookmarkAction {
  type: typeof UPDATE_BOOKMARK_REQUEST;
  payload: {
    bookmarkId: string;
    data: BookmarkData;
  };
}

interface RequestDeleteBookmarkAction {
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

interface ChangeMyBookmarksMetaAction {
  type: typeof MY_BOOKMARKS_META_CHANGE;
  payload: {
    count: number;
    offset: number;
    limit: number;
    total: number;
  };
}

export type UserActionTypes =
  | RequestGetMyBookmarksAction
  | SuccessGetMyBookmarksAction
  | RequestCreateBookmarkAction
  | RequestUpdateBookmarkAction
  | RequestDeleteBookmarkAction
  | SuccessDeleteBookmarkAction
  | ChangeSelectedBookmarkAction
  | ChangeMyBookmarksMetaAction;
